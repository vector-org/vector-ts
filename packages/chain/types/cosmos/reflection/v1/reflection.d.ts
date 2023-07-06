import { FileDescriptorProto } from "../../../google/protobuf/descriptor";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/** FileDescriptorsRequest is the Query/FileDescriptors request type. */
export interface FileDescriptorsRequest {
}
/** FileDescriptorsResponse is the Query/FileDescriptors response type. */
export interface FileDescriptorsResponse {
    /** files is the file descriptors. */
    files: FileDescriptorProto[];
}
export declare const FileDescriptorsRequest: {
    encode(_: FileDescriptorsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): FileDescriptorsRequest;
    fromJSON(_: any): FileDescriptorsRequest;
    toJSON(_: FileDescriptorsRequest): unknown;
    fromPartial(_: DeepPartial<FileDescriptorsRequest>): FileDescriptorsRequest;
};
export declare const FileDescriptorsResponse: {
    encode(message: FileDescriptorsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): FileDescriptorsResponse;
    fromJSON(object: any): FileDescriptorsResponse;
    toJSON(message: FileDescriptorsResponse): unknown;
    fromPartial(object: DeepPartial<FileDescriptorsResponse>): FileDescriptorsResponse;
};
