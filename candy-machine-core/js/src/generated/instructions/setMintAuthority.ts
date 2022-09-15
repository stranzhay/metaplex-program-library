/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet';
import * as web3 from '@solana/web3.js';

/**
 * @category Instructions
 * @category SetMintAuthority
 * @category generated
 */
export const setMintAuthorityStruct = new beet.BeetArgsStruct<{
  instructionDiscriminator: number[] /* size: 8 */;
}>(
  [['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)]],
  'SetMintAuthorityInstructionArgs',
);
/**
 * Accounts required by the _setMintAuthority_ instruction
 *
 * @property [_writable_] candyMachine
 * @property [**signer**] authority
 * @property [**signer**] mintAuthority
 * @category Instructions
 * @category SetMintAuthority
 * @category generated
 */
export type SetMintAuthorityInstructionAccounts = {
  candyMachine: web3.PublicKey;
  authority: web3.PublicKey;
  mintAuthority: web3.PublicKey;
};

export const setMintAuthorityInstructionDiscriminator = [67, 127, 155, 187, 100, 174, 103, 121];

/**
 * Creates a _SetMintAuthority_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @category Instructions
 * @category SetMintAuthority
 * @category generated
 */
export function createSetMintAuthorityInstruction(
  accounts: SetMintAuthorityInstructionAccounts,
  programId = new web3.PublicKey('cndy3CZK71ZHMp9ddpq5NVvQDx33o6cCYDf4JBAWCk7'),
) {
  const [data] = setMintAuthorityStruct.serialize({
    instructionDiscriminator: setMintAuthorityInstructionDiscriminator,
  });
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.candyMachine,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.authority,
      isWritable: false,
      isSigner: true,
    },
    {
      pubkey: accounts.mintAuthority,
      isWritable: false,
      isSigner: true,
    },
  ];

  const ix = new web3.TransactionInstruction({
    programId,
    keys,
    data,
  });
  return ix;
}