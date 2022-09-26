pub mod escrow_constraints;
pub mod trifle;

use std::io::ErrorKind;

use borsh::{maybestd::io::Error as BorshError, BorshDeserialize, BorshSerialize};
use mpl_token_metadata::utils::assert_owned_by;
use num_derive::FromPrimitive;
use num_traits::FromPrimitive;
use solana_program::{account_info::AccountInfo, program_error::ProgramError};

use crate::error::TrifleError;

pub const TRIFLE_SEED: &str = "trifle";
pub const ESCROW_SEED: &str = "escrow";

#[repr(C)]
#[derive(BorshSerialize, BorshDeserialize, PartialEq, Eq, Debug, Clone, Copy, FromPrimitive)]
pub enum Key {
    Uninitialized,
    EscrowConstraintModel,
    Trifle,
}

pub trait SolanaAccount: BorshDeserialize {
    fn key() -> Key;

    fn size() -> usize;

    fn is_correct_account_type(data: &[u8], data_type: Key, data_size: usize) -> bool {
        let key: Option<Key> = Key::from_u8(data[0]);
        match key {
            Some(key) => {
                (key == data_type || key == Key::Uninitialized) && (data.len() == data_size)
            }
            None => false,
        }
    }

    fn pad_length(buf: &mut Vec<u8>) -> Result<(), TrifleError> {
        let padding_length = Self::size()
            .checked_sub(buf.len())
            .ok_or(TrifleError::NumericalOverflow)?;
        buf.extend(vec![0; padding_length]);
        Ok(())
    }

    fn safe_deserialize(mut data: &[u8]) -> Result<Self, BorshError> {
        if !Self::is_correct_account_type(data, Self::key(), Self::size()) {
            return Err(BorshError::new(ErrorKind::Other, "DataTypeMismatch"));
        }

        let result = Self::deserialize(&mut data)?;

        Ok(result)
    }

    fn from_account_info(a: &AccountInfo) -> Result<Self, ProgramError>
where {
        let ua = Self::safe_deserialize(&a.data.borrow_mut())
            .map_err(|_| TrifleError::DataTypeMismatch)?;

        // Check that this is a `token-metadata` owned account.
        assert_owned_by(a, &crate::id())?;

        Ok(ua)
    }
}