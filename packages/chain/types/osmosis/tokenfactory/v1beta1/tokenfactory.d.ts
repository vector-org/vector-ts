import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * DenomAuthorityMetadata specifies metadata for addresses that have specific
 * capabilities over a token factory denom. Right now there is only one Admin
 * permission, but is planned to be extended to the future.
 */
export interface DenomAuthorityMetadata {
    /** Can be empty for no admin, or a valid stargaze address */
    admin: string;
}
/** Params defines the parameters for the tokenfactory module. */
export interface Params {
    /**
     * DenomCreationFee defines the fee to be charged on the creation of a new
     * denom. The fee is drawn from the MsgCreateDenom's sender account, and
     * transferred to the community pool.
     */
    denomCreationFee: Coin[];
    /**
     * DenomCreationGasConsume defines the gas cost for creating a new denom.
     * This is intended as a spam deterrence mechanism.
     *
     * See: https://github.com/CosmWasm/token-factory/issues/11
     */
    denomCreationGasConsume?: bigint;
}
export declare const DenomAuthorityMetadata: {
    encode(message: DenomAuthorityMetadata, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): DenomAuthorityMetadata;
    fromJSON(object: any): DenomAuthorityMetadata;
    toJSON(message: DenomAuthorityMetadata): unknown;
    fromPartial(object: DeepPartial<DenomAuthorityMetadata>): DenomAuthorityMetadata;
};
export declare const Params: {
    encode(message: Params, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial(object: DeepPartial<Params>): Params;
};
