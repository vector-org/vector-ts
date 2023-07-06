import { BinaryReader, BinaryWriter } from "../../binary";
import { DeepPartial } from "../../helpers";
/** Represents a fraction in terms of a numerator divided by a denominator. */
export interface Fraction {
    /** The numerator in the fraction, e.g. 2 in 2/3. */
    numerator: bigint;
    /**
     * The value by which the numerator is divided, e.g. 3 in 2/3. Must be
     * positive.
     */
    denominator: bigint;
}
export declare const Fraction: {
    encode(message: Fraction, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Fraction;
    fromJSON(object: any): Fraction;
    toJSON(message: Fraction): unknown;
    fromPartial(object: DeepPartial<Fraction>): Fraction;
};
