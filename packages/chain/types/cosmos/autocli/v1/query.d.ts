import { ModuleOptions } from "./options";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/** AppOptionsRequest is the RemoteInfoService/AppOptions request type. */
export interface AppOptionsRequest {
}
export interface AppOptionsResponse_ModuleOptionsEntry {
    key: string;
    value: ModuleOptions;
}
/** AppOptionsResponse is the RemoteInfoService/AppOptions response type. */
export interface AppOptionsResponse {
    /** module_options is a map of module name to autocli module options. */
    moduleOptions: {
        [key: string]: ModuleOptions;
    };
}
export declare const AppOptionsRequest: {
    encode(_: AppOptionsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): AppOptionsRequest;
    fromJSON(_: any): AppOptionsRequest;
    toJSON(_: AppOptionsRequest): unknown;
    fromPartial(_: DeepPartial<AppOptionsRequest>): AppOptionsRequest;
};
export declare const AppOptionsResponse_ModuleOptionsEntry: {
    encode(message: AppOptionsResponse_ModuleOptionsEntry, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): AppOptionsResponse_ModuleOptionsEntry;
    fromJSON(object: any): AppOptionsResponse_ModuleOptionsEntry;
    toJSON(message: AppOptionsResponse_ModuleOptionsEntry): unknown;
    fromPartial(object: DeepPartial<AppOptionsResponse_ModuleOptionsEntry>): AppOptionsResponse_ModuleOptionsEntry;
};
export declare const AppOptionsResponse: {
    encode(message: AppOptionsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): AppOptionsResponse;
    fromJSON(object: any): AppOptionsResponse;
    toJSON(message: AppOptionsResponse): unknown;
    fromPartial(object: DeepPartial<AppOptionsResponse>): AppOptionsResponse;
};
