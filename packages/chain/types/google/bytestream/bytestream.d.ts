import { BinaryReader, BinaryWriter } from "../../binary";
import { DeepPartial } from "../../helpers";
/** Request object for ByteStream.Read. */
export interface ReadRequest {
    /** The name of the resource to read. */
    resourceName: string;
    /**
     * The offset for the first byte to return in the read, relative to the start
     * of the resource.
     *
     * A `read_offset` that is negative or greater than the size of the resource
     * will cause an `OUT_OF_RANGE` error.
     */
    readOffset: bigint;
    /**
     * The maximum number of `data` bytes the server is allowed to return in the
     * sum of all `ReadResponse` messages. A `read_limit` of zero indicates that
     * there is no limit, and a negative `read_limit` will cause an error.
     *
     * If the stream returns fewer bytes than allowed by the `read_limit` and no
     * error occurred, the stream includes all data from the `read_offset` to the
     * end of the resource.
     */
    readLimit: bigint;
}
/** Response object for ByteStream.Read. */
export interface ReadResponse {
    /**
     * A portion of the data for the resource. The service **may** leave `data`
     * empty for any given `ReadResponse`. This enables the service to inform the
     * client that the request is still live while it is running an operation to
     * generate more data.
     */
    data: Uint8Array;
}
/** Request object for ByteStream.Write. */
export interface WriteRequest {
    /**
     * The name of the resource to write. This **must** be set on the first
     * `WriteRequest` of each `Write()` action. If it is set on subsequent calls,
     * it **must** match the value of the first request.
     */
    resourceName: string;
    /**
     * The offset from the beginning of the resource at which the data should be
     * written. It is required on all `WriteRequest`s.
     *
     * In the first `WriteRequest` of a `Write()` action, it indicates
     * the initial offset for the `Write()` call. The value **must** be equal to
     * the `committed_size` that a call to `QueryWriteStatus()` would return.
     *
     * On subsequent calls, this value **must** be set and **must** be equal to
     * the sum of the first `write_offset` and the sizes of all `data` bundles
     * sent previously on this stream.
     *
     * An incorrect value will cause an error.
     */
    writeOffset: bigint;
    /**
     * If `true`, this indicates that the write is complete. Sending any
     * `WriteRequest`s subsequent to one in which `finish_write` is `true` will
     * cause an error.
     */
    finishWrite: boolean;
    /**
     * A portion of the data for the resource. The client **may** leave `data`
     * empty for any given `WriteRequest`. This enables the client to inform the
     * service that the request is still live while it is running an operation to
     * generate more data.
     */
    data: Uint8Array;
}
/** Response object for ByteStream.Write. */
export interface WriteResponse {
    /** The number of bytes that have been processed for the given resource. */
    committedSize: bigint;
}
/** Request object for ByteStream.QueryWriteStatus. */
export interface QueryWriteStatusRequest {
    /** The name of the resource whose write status is being requested. */
    resourceName: string;
}
/** Response object for ByteStream.QueryWriteStatus. */
export interface QueryWriteStatusResponse {
    /** The number of bytes that have been processed for the given resource. */
    committedSize: bigint;
    /**
     * `complete` is `true` only if the client has sent a `WriteRequest` with
     * `finish_write` set to true, and the server has processed that request.
     */
    complete: boolean;
}
export declare const ReadRequest: {
    encode(message: ReadRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ReadRequest;
    fromJSON(object: any): ReadRequest;
    toJSON(message: ReadRequest): unknown;
    fromPartial(object: DeepPartial<ReadRequest>): ReadRequest;
};
export declare const ReadResponse: {
    encode(message: ReadResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ReadResponse;
    fromJSON(object: any): ReadResponse;
    toJSON(message: ReadResponse): unknown;
    fromPartial(object: DeepPartial<ReadResponse>): ReadResponse;
};
export declare const WriteRequest: {
    encode(message: WriteRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): WriteRequest;
    fromJSON(object: any): WriteRequest;
    toJSON(message: WriteRequest): unknown;
    fromPartial(object: DeepPartial<WriteRequest>): WriteRequest;
};
export declare const WriteResponse: {
    encode(message: WriteResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): WriteResponse;
    fromJSON(object: any): WriteResponse;
    toJSON(message: WriteResponse): unknown;
    fromPartial(object: DeepPartial<WriteResponse>): WriteResponse;
};
export declare const QueryWriteStatusRequest: {
    encode(message: QueryWriteStatusRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryWriteStatusRequest;
    fromJSON(object: any): QueryWriteStatusRequest;
    toJSON(message: QueryWriteStatusRequest): unknown;
    fromPartial(object: DeepPartial<QueryWriteStatusRequest>): QueryWriteStatusRequest;
};
export declare const QueryWriteStatusResponse: {
    encode(message: QueryWriteStatusResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryWriteStatusResponse;
    fromJSON(object: any): QueryWriteStatusResponse;
    toJSON(message: QueryWriteStatusResponse): unknown;
    fromPartial(object: DeepPartial<QueryWriteStatusResponse>): QueryWriteStatusResponse;
};
