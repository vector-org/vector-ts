import { Action } from "./claim_record";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/** MsgType to claim a catdrop quest reward */
export interface MsgClaimFor {
    sender: string;
    address: string;
    action: Action;
}
/** Msg response for claiming a catdrop quest reward */
export interface MsgClaimForResponse {
    address: string;
    /** total initial claimable amount for the user */
    claimedAmount: Coin[];
}
export declare const MsgClaimFor: {
    encode(message: MsgClaimFor, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgClaimFor;
    fromJSON(object: any): MsgClaimFor;
    toJSON(message: MsgClaimFor): unknown;
    fromPartial(object: DeepPartial<MsgClaimFor>): MsgClaimFor;
};
export declare const MsgClaimForResponse: {
    encode(message: MsgClaimForResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgClaimForResponse;
    fromJSON(object: any): MsgClaimForResponse;
    toJSON(message: MsgClaimForResponse): unknown;
    fromPartial(object: DeepPartial<MsgClaimForResponse>): MsgClaimForResponse;
};
