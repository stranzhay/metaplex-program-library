/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as splToken from '@solana/spl-token';
import * as beet from '@metaplex-foundation/beet';
import * as web3 from '@solana/web3.js';

/**
 * @category Instructions
 * @category CloseDistributorTokenAccount
 * @category generated
 */
export type CloseDistributorTokenAccountInstructionArgs = {
  bump: number;
};
/**
 * @category Instructions
 * @category CloseDistributorTokenAccount
 * @category generated
 */
export const closeDistributorTokenAccountStruct = new beet.BeetArgsStruct<
  CloseDistributorTokenAccountInstructionArgs & {
    instructionDiscriminator: number[] /* size: 8 */;
  }
>(
  [
    ['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['bump', beet.u8],
  ],
  'CloseDistributorTokenAccountInstructionArgs',
);
/**
 * Accounts required by the _closeDistributorTokenAccount_ instruction
 *
 * @property [**signer**] base
 * @property [] distributor
 * @property [_writable_] from
 * @property [_writable_] to
 * @property [_writable_] receiver
 * @category Instructions
 * @category CloseDistributorTokenAccount
 * @category generated
 */
export type CloseDistributorTokenAccountInstructionAccounts = {
  base: web3.PublicKey;
  distributor: web3.PublicKey;
  from: web3.PublicKey;
  to: web3.PublicKey;
  receiver: web3.PublicKey;
  systemProgram?: web3.PublicKey;
  tokenProgram?: web3.PublicKey;
};

export const closeDistributorTokenAccountInstructionDiscriminator = [
  156, 174, 153, 120, 102, 150, 134, 142,
];

/**
 * Creates a _CloseDistributorTokenAccount_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category CloseDistributorTokenAccount
 * @category generated
 */
export function createCloseDistributorTokenAccountInstruction(
  accounts: CloseDistributorTokenAccountInstructionAccounts,
  args: CloseDistributorTokenAccountInstructionArgs,
  programId = new web3.PublicKey('gdrpGjVffourzkdDRrQmySw4aTHr8a3xmQzzxSwFD1a'),
) {
  const [data] = closeDistributorTokenAccountStruct.serialize({
    instructionDiscriminator: closeDistributorTokenAccountInstructionDiscriminator,
    ...args,
  });
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.base,
      isWritable: false,
      isSigner: true,
    },
    {
      pubkey: accounts.distributor,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.from,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.to,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.receiver,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.systemProgram ?? web3.SystemProgram.programId,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.tokenProgram ?? splToken.TOKEN_PROGRAM_ID,
      isWritable: false,
      isSigner: false,
    },
  ];

  const ix = new web3.TransactionInstruction({
    programId,
    keys,
    data,
  });
  return ix;
}
