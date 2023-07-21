import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/** Shows how many hooks this user has triggered. */
export interface HookRecord {
    /** address of claim user */
    address: string;
    /**
     * true if action is completed
     * index of bool in array refers to action enum #
     */
    hookTriggered: boolean[];
}
export declare const HookRecord: {
    encode(message: HookRecord, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): HookRecord;
    fromJSON(object: any): HookRecord;
    toJSON(message: HookRecord): unknown;
    fromPartial(object: DeepPartial<HookRecord>): HookRecord;
};
