/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as web3 from '@solana/web3.js';
import * as beet from '@metaplex-foundation/beet';
import * as beetSolana from '@metaplex-foundation/beet-solana';
import { Creator, creatorBeet } from './Creator';
import { TokenStandard, tokenStandardBeet } from './TokenStandard';
import { Collection, collectionBeet } from './Collection';
import { Uses, usesBeet } from './Uses';
import { CollectionDetails, collectionDetailsBeet } from './CollectionDetails';
import { ProgrammableConfig, programmableConfigBeet } from './ProgrammableConfig';
import { DelegateState, delegateStateBeet } from './DelegateState';
export type AssetData = {
  updateAuthority: web3.PublicKey;
  name: string;
  symbol: string;
  uri: string;
  sellerFeeBasisPoints: number;
  creators: beet.COption<Creator[]>;
  primarySaleHappened: boolean;
  isMutable: boolean;
  editionNonce: beet.COption<number>;
  tokenStandard: beet.COption<TokenStandard>;
  collection: beet.COption<Collection>;
  uses: beet.COption<Uses>;
  collectionDetails: beet.COption<CollectionDetails>;
  programmableConfig: beet.COption<ProgrammableConfig>;
  delegateState: beet.COption<DelegateState>;
};

/**
 * @category userTypes
 * @category generated
 */
export const assetDataBeet = new beet.FixableBeetArgsStruct<AssetData>(
  [
    ['updateAuthority', beetSolana.publicKey],
    ['name', beet.utf8String],
    ['symbol', beet.utf8String],
    ['uri', beet.utf8String],
    ['sellerFeeBasisPoints', beet.u16],
    ['creators', beet.coption(beet.array(creatorBeet))],
    ['primarySaleHappened', beet.bool],
    ['isMutable', beet.bool],
    ['editionNonce', beet.coption(beet.u8)],
    ['tokenStandard', beet.coption(tokenStandardBeet)],
    ['collection', beet.coption(collectionBeet)],
    ['uses', beet.coption(usesBeet)],
    ['collectionDetails', beet.coption(collectionDetailsBeet)],
    ['programmableConfig', beet.coption(programmableConfigBeet)],
    ['delegateState', beet.coption(delegateStateBeet)],
  ],
  'AssetData',
);