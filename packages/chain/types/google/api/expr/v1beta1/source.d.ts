import { BinaryReader, BinaryWriter } from "../../../../binary";
import { DeepPartial } from "../../../../helpers";
export interface SourceInfo_PositionsEntry {
    key: number;
    value: number;
}
/** Source information collected at parse time. */
export interface SourceInfo {
    /**
     * The location name. All position information attached to an expression is
     * relative to this location.
     *
     * The location could be a file, UI element, or similar. For example,
     * `acme/app/AnvilPolicy.cel`.
     */
    location: string;
    /**
     * Monotonically increasing list of character offsets where newlines appear.
     *
     * The line number of a given position is the index `i` where for a given
     * `id` the `line_offsets[i] < id_positions[id] < line_offsets[i+1]`. The
     * column may be derivd from `id_positions[id] - line_offsets[i]`.
     */
    lineOffsets: number[];
    /**
     * A map from the parse node id (e.g. `Expr.id`) to the character offset
     * within source.
     */
    positions: {
        [key: number]: number;
    };
}
/** A specific position in source. */
export interface SourcePosition {
    /** The soucre location name (e.g. file name). */
    location: string;
    /** The character offset. */
    offset: number;
    /**
     * The 1-based index of the starting line in the source text
     * where the issue occurs, or 0 if unknown.
     */
    line: number;
    /**
     * The 0-based index of the starting position within the line of source text
     * where the issue occurs.  Only meaningful if line is nonzer..
     */
    column: number;
}
export declare const SourceInfo_PositionsEntry: {
    encode(message: SourceInfo_PositionsEntry, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): SourceInfo_PositionsEntry;
    fromJSON(object: any): SourceInfo_PositionsEntry;
    toJSON(message: SourceInfo_PositionsEntry): unknown;
    fromPartial(object: DeepPartial<SourceInfo_PositionsEntry>): SourceInfo_PositionsEntry;
};
export declare const SourceInfo: {
    encode(message: SourceInfo, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): SourceInfo;
    fromJSON(object: any): SourceInfo;
    toJSON(message: SourceInfo): unknown;
    fromPartial(object: DeepPartial<SourceInfo>): SourceInfo;
};
export declare const SourcePosition: {
    encode(message: SourcePosition, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): SourcePosition;
    fromJSON(object: any): SourcePosition;
    toJSON(message: SourcePosition): unknown;
    fromPartial(object: DeepPartial<SourcePosition>): SourcePosition;
};
