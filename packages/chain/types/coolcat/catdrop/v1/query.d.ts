import { Action, ClaimRecord } from "./claim_record";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Params } from "./params";
import { HookRecord } from "./hook_record";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryModuleAccountBalanceRequest {
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryModuleAccountBalanceResponse {
    /** params defines the parameters of the module. */
    moduleAccountBalance: Coin[];
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params defines the parameters of the module. */
    params: Params;
}
/**
 * QueryClaimRecordRequest is the request type for the Query/ClaimRecord RPC
 * method.
 */
export interface QueryClaimRecordRequest {
    address: string;
}
/**
 * QueryClaimRecordResponse is the response type for the Query/ClaimRecord RPC
 * method.
 */
export interface QueryClaimRecordResponse {
    claimRecord: ClaimRecord;
}
/**
 * QueryClaimRecordRequest is the request type for the Query/ClaimRecord RPC
 * method.
 */
export interface QueryHookRecordRequest {
    address: string;
}
/**
 * QueryClaimRecordResponse is the response type for the Query/ClaimRecord RPC
 * method.
 */
export interface QueryHookRecordResponse {
    hookRecord: HookRecord;
}
/**
 * QueryClaimableForActionRequest is the request type for the
 * Query/ClaimableForAction RPC method.
 */
export interface QueryClaimableForActionRequest {
    address: string;
    action: Action;
}
/**
 * QueryClaimableForActionResponse is the response type for the
 * Query/ClaimableForAction RPC method.
 */
export interface QueryClaimableForActionResponse {
    coins: Coin[];
}
/**
 * QueryTotalClaimableRequest is the request type for the Query/TotalClaimable
 * RPC method.
 */
export interface QueryTotalClaimableRequest {
    address: string;
}
/**
 * QueryTotalClaimableResponse is the response type for the Query/TotalClaimable
 * RPC method.
 */
export interface QueryTotalClaimableResponse {
    coins: Coin[];
}
export declare const QueryModuleAccountBalanceRequest: {
    encode(_: QueryModuleAccountBalanceRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryModuleAccountBalanceRequest;
    fromJSON(_: any): QueryModuleAccountBalanceRequest;
    toJSON(_: QueryModuleAccountBalanceRequest): unknown;
    fromPartial(_: DeepPartial<QueryModuleAccountBalanceRequest>): QueryModuleAccountBalanceRequest;
};
export declare const QueryModuleAccountBalanceResponse: {
    encode(message: QueryModuleAccountBalanceResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryModuleAccountBalanceResponse;
    fromJSON(object: any): QueryModuleAccountBalanceResponse;
    toJSON(message: QueryModuleAccountBalanceResponse): unknown;
    fromPartial(object: DeepPartial<QueryModuleAccountBalanceResponse>): QueryModuleAccountBalanceResponse;
};
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest;
    fromJSON(_: any): QueryParamsRequest;
    toJSON(_: QueryParamsRequest): unknown;
    fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    toJSON(message: QueryParamsResponse): unknown;
    fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse;
};
export declare const QueryClaimRecordRequest: {
    encode(message: QueryClaimRecordRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryClaimRecordRequest;
    fromJSON(object: any): QueryClaimRecordRequest;
    toJSON(message: QueryClaimRecordRequest): unknown;
    fromPartial(object: DeepPartial<QueryClaimRecordRequest>): QueryClaimRecordRequest;
};
export declare const QueryClaimRecordResponse: {
    encode(message: QueryClaimRecordResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryClaimRecordResponse;
    fromJSON(object: any): QueryClaimRecordResponse;
    toJSON(message: QueryClaimRecordResponse): unknown;
    fromPartial(object: DeepPartial<QueryClaimRecordResponse>): QueryClaimRecordResponse;
};
export declare const QueryHookRecordRequest: {
    encode(message: QueryHookRecordRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryHookRecordRequest;
    fromJSON(object: any): QueryHookRecordRequest;
    toJSON(message: QueryHookRecordRequest): unknown;
    fromPartial(object: DeepPartial<QueryHookRecordRequest>): QueryHookRecordRequest;
};
export declare const QueryHookRecordResponse: {
    encode(message: QueryHookRecordResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryHookRecordResponse;
    fromJSON(object: any): QueryHookRecordResponse;
    toJSON(message: QueryHookRecordResponse): unknown;
    fromPartial(object: DeepPartial<QueryHookRecordResponse>): QueryHookRecordResponse;
};
export declare const QueryClaimableForActionRequest: {
    encode(message: QueryClaimableForActionRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryClaimableForActionRequest;
    fromJSON(object: any): QueryClaimableForActionRequest;
    toJSON(message: QueryClaimableForActionRequest): unknown;
    fromPartial(object: DeepPartial<QueryClaimableForActionRequest>): QueryClaimableForActionRequest;
};
export declare const QueryClaimableForActionResponse: {
    encode(message: QueryClaimableForActionResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryClaimableForActionResponse;
    fromJSON(object: any): QueryClaimableForActionResponse;
    toJSON(message: QueryClaimableForActionResponse): unknown;
    fromPartial(object: DeepPartial<QueryClaimableForActionResponse>): QueryClaimableForActionResponse;
};
export declare const QueryTotalClaimableRequest: {
    encode(message: QueryTotalClaimableRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalClaimableRequest;
    fromJSON(object: any): QueryTotalClaimableRequest;
    toJSON(message: QueryTotalClaimableRequest): unknown;
    fromPartial(object: DeepPartial<QueryTotalClaimableRequest>): QueryTotalClaimableRequest;
};
export declare const QueryTotalClaimableResponse: {
    encode(message: QueryTotalClaimableResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalClaimableResponse;
    fromJSON(object: any): QueryTotalClaimableResponse;
    toJSON(message: QueryTotalClaimableResponse): unknown;
    fromPartial(object: DeepPartial<QueryTotalClaimableResponse>): QueryTotalClaimableResponse;
};
