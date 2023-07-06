import { NullValue } from "../../../protobuf/struct";
import { Any } from "../../../protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { DeepPartial } from "../../../../helpers";
/**
 * Represents a CEL value.
 *
 * This is similar to `google.protobuf.Value`, but can represent CEL's full
 * range of values.
 */
export interface Value {
    /** Null value. */
    nullValue?: NullValue;
    /** Boolean value. */
    boolValue?: boolean;
    /** Signed integer value. */
    int64Value?: bigint;
    /** Unsigned integer value. */
    uint64Value?: bigint;
    /** Floating point value. */
    doubleValue?: number;
    /** UTF-8 string value. */
    stringValue?: string;
    /** Byte string value. */
    bytesValue?: Uint8Array;
    /** An enum value. */
    enumValue?: EnumValue;
    /** The proto message backing an object value. */
    objectValue?: Any;
    /** Map value. */
    mapValue?: MapValue;
    /** List value. */
    listValue?: ListValue;
    /** Type value. */
    typeValue?: string;
}
/** An enum value. */
export interface EnumValue {
    /** The fully qualified name of the enum type. */
    type: string;
    /** The value of the enum. */
    value: number;
}
/**
 * A list.
 *
 * Wrapped in a message so 'not set' and empty can be differentiated, which is
 * required for use in a 'oneof'.
 */
export interface ListValue {
    /** The ordered values in the list. */
    values: Value[];
}
/**
 * A map.
 *
 * Wrapped in a message so 'not set' and empty can be differentiated, which is
 * required for use in a 'oneof'.
 */
export interface MapValue {
    /**
     * The set of map entries.
     *
     * CEL has fewer restrictions on keys, so a protobuf map represenation
     * cannot be used.
     */
    entries: MapValue_Entry[];
}
/** An entry in the map. */
export interface MapValue_Entry {
    /**
     * The key.
     *
     * Must be unique with in the map.
     * Currently only boolean, int, uint, and string values can be keys.
     */
    key: Value;
    /** The value. */
    value: Value;
}
export declare const Value: {
    encode(message: Value, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Value;
    fromJSON(object: any): Value;
    toJSON(message: Value): unknown;
    fromPartial(object: DeepPartial<Value>): Value;
};
export declare const EnumValue: {
    encode(message: EnumValue, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EnumValue;
    fromJSON(object: any): EnumValue;
    toJSON(message: EnumValue): unknown;
    fromPartial(object: DeepPartial<EnumValue>): EnumValue;
};
export declare const ListValue: {
    encode(message: ListValue, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ListValue;
    fromJSON(object: any): ListValue;
    toJSON(message: ListValue): unknown;
    fromPartial(object: DeepPartial<ListValue>): ListValue;
};
export declare const MapValue: {
    encode(message: MapValue, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MapValue;
    fromJSON(object: any): MapValue;
    toJSON(message: MapValue): unknown;
    fromPartial(object: DeepPartial<MapValue>): MapValue;
};
export declare const MapValue_Entry: {
    encode(message: MapValue_Entry, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MapValue_Entry;
    fromJSON(object: any): MapValue_Entry;
    toJSON(message: MapValue_Entry): unknown;
    fromPartial(object: DeepPartial<MapValue_Entry>): MapValue_Entry;
};
