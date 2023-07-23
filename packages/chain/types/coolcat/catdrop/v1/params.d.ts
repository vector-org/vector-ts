import { Timestamp } from "../../../google/protobuf/timestamp";
import { Duration } from "../../../google/protobuf/duration";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/** Params defines the claim module's parameters. */
export interface Params {
    airdropEnabled: boolean;
    airdropStartTime: Timestamp;
    durationUntilDecay: Duration;
    durationOfDecay: Duration;
    /** denom of claimable asset */
    claimDenom: string;
}
export declare const Params: {
    encode(message: Params, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial(object: DeepPartial<Params>): Params;
};
