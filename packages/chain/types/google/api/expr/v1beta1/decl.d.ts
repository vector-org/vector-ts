import { Expr } from "./expr";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { DeepPartial } from "../../../../helpers";
/** A declaration. */
export interface Decl {
    /** The id of the declaration. */
    id: number;
    /** The name of the declaration. */
    name: string;
    /** The documentation string for the declaration. */
    doc: string;
    /** An identifier declaration. */
    ident?: IdentDecl;
    /** A function declaration. */
    function?: FunctionDecl;
}
/**
 * The declared type of a variable.
 *
 * Extends runtime type values with extra information used for type checking
 * and dispatching.
 */
export interface DeclType {
    /** The expression id of the declared type, if applicable. */
    id: number;
    /** The type name, e.g. 'int', 'my.type.Type' or 'T' */
    type: string;
    /**
     * An ordered list of type parameters, e.g. `<string, int>`.
     * Only applies to a subset of types, e.g. `map`, `list`.
     */
    typeParams: DeclType[];
}
/** An identifier declaration. */
export interface IdentDecl {
    /** Optional type of the identifier. */
    type: DeclType;
    /** Optional value of the identifier. */
    value: Expr;
}
/** A function declaration. */
export interface FunctionDecl {
    /** The function arguments. */
    args: IdentDecl[];
    /** Optional declared return type. */
    returnType: DeclType;
    /** If the first argument of the function is the receiver. */
    receiverFunction: boolean;
}
export declare const Decl: {
    encode(message: Decl, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Decl;
    fromJSON(object: any): Decl;
    toJSON(message: Decl): unknown;
    fromPartial(object: DeepPartial<Decl>): Decl;
};
export declare const DeclType: {
    encode(message: DeclType, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): DeclType;
    fromJSON(object: any): DeclType;
    toJSON(message: DeclType): unknown;
    fromPartial(object: DeepPartial<DeclType>): DeclType;
};
export declare const IdentDecl: {
    encode(message: IdentDecl, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): IdentDecl;
    fromJSON(object: any): IdentDecl;
    toJSON(message: IdentDecl): unknown;
    fromPartial(object: DeepPartial<IdentDecl>): IdentDecl;
};
export declare const FunctionDecl: {
    encode(message: FunctionDecl, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): FunctionDecl;
    fromJSON(object: any): FunctionDecl;
    toJSON(message: FunctionDecl): unknown;
    fromPartial(object: DeepPartial<FunctionDecl>): FunctionDecl;
};
