import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/** ParameterChangeProposal defines a proposal to change one or more parameters. */
export interface ParameterChangeProposal {
    title: string;
    description: string;
    changes: ParamChange[];
}
/**
 * ParamChange defines an individual parameter change, for use in
 * ParameterChangeProposal.
 */
export interface ParamChange {
    subspace: string;
    key: string;
    value: string;
}
export declare const ParameterChangeProposal: {
    encode(message: ParameterChangeProposal, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ParameterChangeProposal;
    fromJSON(object: any): ParameterChangeProposal;
    toJSON(message: ParameterChangeProposal): unknown;
    fromPartial(object: DeepPartial<ParameterChangeProposal>): ParameterChangeProposal;
};
export declare const ParamChange: {
    encode(message: ParamChange, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ParamChange;
    fromJSON(object: any): ParamChange;
    toJSON(message: ParamChange): unknown;
    fromPartial(object: DeepPartial<ParamChange>): ParamChange;
};
