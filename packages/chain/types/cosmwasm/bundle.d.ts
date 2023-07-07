import * as _101 from "./wasm/v1/authz";
import * as _102 from "./wasm/v1/genesis";
import * as _103 from "./wasm/v1/ibc";
import * as _104 from "./wasm/v1/proposal";
import * as _105 from "./wasm/v1/query";
import * as _106 from "./wasm/v1/tx";
import * as _107 from "./wasm/v1/types";
import * as _232 from "./wasm/v1/query.lcd";
import * as _233 from "./wasm/v1/query.rpc.Query";
import * as _234 from "./wasm/v1/tx.rpc.msg";
export declare namespace cosmwasm {
    namespace wasm {
        const v1: {
            MsgClientImpl: typeof _234.MsgClientImpl;
            QueryClientImpl: typeof _233.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                contractInfo(request: _105.QueryContractInfoRequest): Promise<_105.QueryContractInfoResponse>;
                contractHistory(request: _105.QueryContractHistoryRequest): Promise<_105.QueryContractHistoryResponse>;
                contractsByCode(request: _105.QueryContractsByCodeRequest): Promise<_105.QueryContractsByCodeResponse>;
                allContractState(request: _105.QueryAllContractStateRequest): Promise<_105.QueryAllContractStateResponse>;
                rawContractState(request: _105.QueryRawContractStateRequest): Promise<_105.QueryRawContractStateResponse>;
                smartContractState(request: _105.QuerySmartContractStateRequest): Promise<_105.QuerySmartContractStateResponse>;
                code(request: _105.QueryCodeRequest): Promise<_105.QueryCodeResponse>;
                codes(request?: _105.QueryCodesRequest): Promise<_105.QueryCodesResponse>;
                pinnedCodes(request?: _105.QueryPinnedCodesRequest): Promise<_105.QueryPinnedCodesResponse>;
                params(request?: _105.QueryParamsRequest): Promise<_105.QueryParamsResponse>;
                contractsByCreator(request: _105.QueryContractsByCreatorRequest): Promise<_105.QueryContractsByCreatorResponse>;
            };
            LCDQueryClient: typeof _232.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    storeCode(value: _106.MsgStoreCode): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    instantiateContract(value: _106.MsgInstantiateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    instantiateContract2(value: _106.MsgInstantiateContract2): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    executeContract(value: _106.MsgExecuteContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    migrateContract(value: _106.MsgMigrateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateAdmin(value: _106.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    clearAdmin(value: _106.MsgClearAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateInstantiateConfig(value: _106.MsgUpdateInstantiateConfig): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _106.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    sudoContract(value: _106.MsgSudoContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    pinCodes(value: _106.MsgPinCodes): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    unpinCodes(value: _106.MsgUnpinCodes): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    storeAndInstantiateContract(value: _106.MsgStoreAndInstantiateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    storeCode(value: _106.MsgStoreCode): {
                        typeUrl: string;
                        value: _106.MsgStoreCode;
                    };
                    instantiateContract(value: _106.MsgInstantiateContract): {
                        typeUrl: string;
                        value: _106.MsgInstantiateContract;
                    };
                    instantiateContract2(value: _106.MsgInstantiateContract2): {
                        typeUrl: string;
                        value: _106.MsgInstantiateContract2;
                    };
                    executeContract(value: _106.MsgExecuteContract): {
                        typeUrl: string;
                        value: _106.MsgExecuteContract;
                    };
                    migrateContract(value: _106.MsgMigrateContract): {
                        typeUrl: string;
                        value: _106.MsgMigrateContract;
                    };
                    updateAdmin(value: _106.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: _106.MsgUpdateAdmin;
                    };
                    clearAdmin(value: _106.MsgClearAdmin): {
                        typeUrl: string;
                        value: _106.MsgClearAdmin;
                    };
                    updateInstantiateConfig(value: _106.MsgUpdateInstantiateConfig): {
                        typeUrl: string;
                        value: _106.MsgUpdateInstantiateConfig;
                    };
                    updateParams(value: _106.MsgUpdateParams): {
                        typeUrl: string;
                        value: _106.MsgUpdateParams;
                    };
                    sudoContract(value: _106.MsgSudoContract): {
                        typeUrl: string;
                        value: _106.MsgSudoContract;
                    };
                    pinCodes(value: _106.MsgPinCodes): {
                        typeUrl: string;
                        value: _106.MsgPinCodes;
                    };
                    unpinCodes(value: _106.MsgUnpinCodes): {
                        typeUrl: string;
                        value: _106.MsgUnpinCodes;
                    };
                    storeAndInstantiateContract(value: _106.MsgStoreAndInstantiateContract): {
                        typeUrl: string;
                        value: _106.MsgStoreAndInstantiateContract;
                    };
                };
                toJSON: {
                    storeCode(value: _106.MsgStoreCode): {
                        typeUrl: string;
                        value: unknown;
                    };
                    instantiateContract(value: _106.MsgInstantiateContract): {
                        typeUrl: string;
                        value: unknown;
                    };
                    instantiateContract2(value: _106.MsgInstantiateContract2): {
                        typeUrl: string;
                        value: unknown;
                    };
                    executeContract(value: _106.MsgExecuteContract): {
                        typeUrl: string;
                        value: unknown;
                    };
                    migrateContract(value: _106.MsgMigrateContract): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateAdmin(value: _106.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: unknown;
                    };
                    clearAdmin(value: _106.MsgClearAdmin): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateInstantiateConfig(value: _106.MsgUpdateInstantiateConfig): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateParams(value: _106.MsgUpdateParams): {
                        typeUrl: string;
                        value: unknown;
                    };
                    sudoContract(value: _106.MsgSudoContract): {
                        typeUrl: string;
                        value: unknown;
                    };
                    pinCodes(value: _106.MsgPinCodes): {
                        typeUrl: string;
                        value: unknown;
                    };
                    unpinCodes(value: _106.MsgUnpinCodes): {
                        typeUrl: string;
                        value: unknown;
                    };
                    storeAndInstantiateContract(value: _106.MsgStoreAndInstantiateContract): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    storeCode(value: any): {
                        typeUrl: string;
                        value: _106.MsgStoreCode;
                    };
                    instantiateContract(value: any): {
                        typeUrl: string;
                        value: _106.MsgInstantiateContract;
                    };
                    instantiateContract2(value: any): {
                        typeUrl: string;
                        value: _106.MsgInstantiateContract2;
                    };
                    executeContract(value: any): {
                        typeUrl: string;
                        value: _106.MsgExecuteContract;
                    };
                    migrateContract(value: any): {
                        typeUrl: string;
                        value: _106.MsgMigrateContract;
                    };
                    updateAdmin(value: any): {
                        typeUrl: string;
                        value: _106.MsgUpdateAdmin;
                    };
                    clearAdmin(value: any): {
                        typeUrl: string;
                        value: _106.MsgClearAdmin;
                    };
                    updateInstantiateConfig(value: any): {
                        typeUrl: string;
                        value: _106.MsgUpdateInstantiateConfig;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _106.MsgUpdateParams;
                    };
                    sudoContract(value: any): {
                        typeUrl: string;
                        value: _106.MsgSudoContract;
                    };
                    pinCodes(value: any): {
                        typeUrl: string;
                        value: _106.MsgPinCodes;
                    };
                    unpinCodes(value: any): {
                        typeUrl: string;
                        value: _106.MsgUnpinCodes;
                    };
                    storeAndInstantiateContract(value: any): {
                        typeUrl: string;
                        value: _106.MsgStoreAndInstantiateContract;
                    };
                };
                fromPartial: {
                    storeCode(value: _106.MsgStoreCode): {
                        typeUrl: string;
                        value: _106.MsgStoreCode;
                    };
                    instantiateContract(value: _106.MsgInstantiateContract): {
                        typeUrl: string;
                        value: _106.MsgInstantiateContract;
                    };
                    instantiateContract2(value: _106.MsgInstantiateContract2): {
                        typeUrl: string;
                        value: _106.MsgInstantiateContract2;
                    };
                    executeContract(value: _106.MsgExecuteContract): {
                        typeUrl: string;
                        value: _106.MsgExecuteContract;
                    };
                    migrateContract(value: _106.MsgMigrateContract): {
                        typeUrl: string;
                        value: _106.MsgMigrateContract;
                    };
                    updateAdmin(value: _106.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: _106.MsgUpdateAdmin;
                    };
                    clearAdmin(value: _106.MsgClearAdmin): {
                        typeUrl: string;
                        value: _106.MsgClearAdmin;
                    };
                    updateInstantiateConfig(value: _106.MsgUpdateInstantiateConfig): {
                        typeUrl: string;
                        value: _106.MsgUpdateInstantiateConfig;
                    };
                    updateParams(value: _106.MsgUpdateParams): {
                        typeUrl: string;
                        value: _106.MsgUpdateParams;
                    };
                    sudoContract(value: _106.MsgSudoContract): {
                        typeUrl: string;
                        value: _106.MsgSudoContract;
                    };
                    pinCodes(value: _106.MsgPinCodes): {
                        typeUrl: string;
                        value: _106.MsgPinCodes;
                    };
                    unpinCodes(value: _106.MsgUnpinCodes): {
                        typeUrl: string;
                        value: _106.MsgUnpinCodes;
                    };
                    storeAndInstantiateContract(value: _106.MsgStoreAndInstantiateContract): {
                        typeUrl: string;
                        value: _106.MsgStoreAndInstantiateContract;
                    };
                };
            };
            AminoConverter: {
                "/cosmwasm.wasm.v1.MsgStoreCode": {
                    aminoType: string;
                    toAmino: ({ sender, wasmByteCode, instantiatePermission }: _106.MsgStoreCode) => {
                        sender: string;
                        wasm_byte_code: string;
                        instantiate_permission: {
                            permission: number;
                            addresses: string[];
                        };
                    };
                    fromAmino: ({ sender, wasm_byte_code, instantiate_permission }: {
                        sender: string;
                        wasm_byte_code: string;
                        instantiate_permission: {
                            permission: number;
                            addresses: string[];
                        };
                    }) => _106.MsgStoreCode;
                };
                "/cosmwasm.wasm.v1.MsgInstantiateContract": {
                    aminoType: string;
                    toAmino: ({ sender, admin, codeId, label, msg, funds }: _106.MsgInstantiateContract) => {
                        sender: string;
                        admin: string;
                        code_id: string;
                        label: string;
                        msg: Uint8Array;
                        funds: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ sender, admin, code_id, label, msg, funds }: {
                        sender: string;
                        admin: string;
                        code_id: string;
                        label: string;
                        msg: Uint8Array;
                        funds: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _106.MsgInstantiateContract;
                };
                "/cosmwasm.wasm.v1.MsgInstantiateContract2": {
                    aminoType: string;
                    toAmino: ({ sender, admin, codeId, label, msg, funds, salt, fixMsg }: _106.MsgInstantiateContract2) => {
                        sender: string;
                        admin: string;
                        code_id: string;
                        label: string;
                        msg: Uint8Array;
                        funds: {
                            denom: string;
                            amount: string;
                        }[];
                        salt: Uint8Array;
                        fix_msg: boolean;
                    };
                    fromAmino: ({ sender, admin, code_id, label, msg, funds, salt, fix_msg }: {
                        sender: string;
                        admin: string;
                        code_id: string;
                        label: string;
                        msg: Uint8Array;
                        funds: {
                            denom: string;
                            amount: string;
                        }[];
                        salt: Uint8Array;
                        fix_msg: boolean;
                    }) => _106.MsgInstantiateContract2;
                };
                "/cosmwasm.wasm.v1.MsgExecuteContract": {
                    aminoType: string;
                    toAmino: ({ sender, contract, msg, funds }: _106.MsgExecuteContract) => {
                        sender: string;
                        contract: string;
                        msg: Uint8Array;
                        funds: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ sender, contract, msg, funds }: {
                        sender: string;
                        contract: string;
                        msg: Uint8Array;
                        funds: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _106.MsgExecuteContract;
                };
                "/cosmwasm.wasm.v1.MsgMigrateContract": {
                    aminoType: string;
                    toAmino: ({ sender, contract, codeId, msg }: _106.MsgMigrateContract) => {
                        sender: string;
                        contract: string;
                        code_id: string;
                        msg: Uint8Array;
                    };
                    fromAmino: ({ sender, contract, code_id, msg }: {
                        sender: string;
                        contract: string;
                        code_id: string;
                        msg: Uint8Array;
                    }) => _106.MsgMigrateContract;
                };
                "/cosmwasm.wasm.v1.MsgUpdateAdmin": {
                    aminoType: string;
                    toAmino: ({ sender, newAdmin, contract }: _106.MsgUpdateAdmin) => {
                        sender: string;
                        new_admin: string;
                        contract: string;
                    };
                    fromAmino: ({ sender, new_admin, contract }: {
                        sender: string;
                        new_admin: string;
                        contract: string;
                    }) => _106.MsgUpdateAdmin;
                };
                "/cosmwasm.wasm.v1.MsgClearAdmin": {
                    aminoType: string;
                    toAmino: ({ sender, contract }: _106.MsgClearAdmin) => {
                        sender: string;
                        contract: string;
                    };
                    fromAmino: ({ sender, contract }: {
                        sender: string;
                        contract: string;
                    }) => _106.MsgClearAdmin;
                };
                "/cosmwasm.wasm.v1.MsgUpdateInstantiateConfig": {
                    aminoType: string;
                    toAmino: ({ sender, codeId, newInstantiatePermission }: _106.MsgUpdateInstantiateConfig) => {
                        sender: string;
                        code_id: string;
                        new_instantiate_permission: {
                            permission: number;
                            addresses: string[];
                        };
                    };
                    fromAmino: ({ sender, code_id, new_instantiate_permission }: {
                        sender: string;
                        code_id: string;
                        new_instantiate_permission: {
                            permission: number;
                            addresses: string[];
                        };
                    }) => _106.MsgUpdateInstantiateConfig;
                };
                "/cosmwasm.wasm.v1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: ({ authority, params }: _106.MsgUpdateParams) => {
                        authority: string;
                        params: {
                            code_upload_access: {
                                permission: number;
                                addresses: string[];
                            };
                            instantiate_default_permission: number;
                        };
                    };
                    fromAmino: ({ authority, params }: {
                        authority: string;
                        params: {
                            code_upload_access: {
                                permission: number;
                                addresses: string[];
                            };
                            instantiate_default_permission: number;
                        };
                    }) => _106.MsgUpdateParams;
                };
                "/cosmwasm.wasm.v1.MsgSudoContract": {
                    aminoType: string;
                    toAmino: ({ authority, contract, msg }: _106.MsgSudoContract) => {
                        authority: string;
                        contract: string;
                        msg: Uint8Array;
                    };
                    fromAmino: ({ authority, contract, msg }: {
                        authority: string;
                        contract: string;
                        msg: Uint8Array;
                    }) => _106.MsgSudoContract;
                };
                "/cosmwasm.wasm.v1.MsgPinCodes": {
                    aminoType: string;
                    toAmino: ({ authority, codeIds }: _106.MsgPinCodes) => {
                        authority: string;
                        code_ids: string[];
                    };
                    fromAmino: ({ authority, code_ids }: {
                        authority: string;
                        code_ids: string[];
                    }) => _106.MsgPinCodes;
                };
                "/cosmwasm.wasm.v1.MsgUnpinCodes": {
                    aminoType: string;
                    toAmino: ({ authority, codeIds }: _106.MsgUnpinCodes) => {
                        authority: string;
                        code_ids: string[];
                    };
                    fromAmino: ({ authority, code_ids }: {
                        authority: string;
                        code_ids: string[];
                    }) => _106.MsgUnpinCodes;
                };
                "/cosmwasm.wasm.v1.MsgStoreAndInstantiateContract": {
                    aminoType: string;
                    toAmino: ({ authority, wasmByteCode, instantiatePermission, unpinCode, admin, label, msg, funds, source, builder, codeHash }: _106.MsgStoreAndInstantiateContract) => {
                        authority: string;
                        wasm_byte_code: string;
                        instantiate_permission: {
                            permission: number;
                            addresses: string[];
                        };
                        unpin_code: boolean;
                        admin: string;
                        label: string;
                        msg: Uint8Array;
                        funds: {
                            denom: string;
                            amount: string;
                        }[];
                        source: string;
                        builder: string;
                        code_hash: Uint8Array;
                    };
                    fromAmino: ({ authority, wasm_byte_code, instantiate_permission, unpin_code, admin, label, msg, funds, source, builder, code_hash }: {
                        authority: string;
                        wasm_byte_code: string;
                        instantiate_permission: {
                            permission: number;
                            addresses: string[];
                        };
                        unpin_code: boolean;
                        admin: string;
                        label: string;
                        msg: Uint8Array;
                        funds: {
                            denom: string;
                            amount: string;
                        }[];
                        source: string;
                        builder: string;
                        code_hash: Uint8Array;
                    }) => _106.MsgStoreAndInstantiateContract;
                };
            };
            accessTypeFromJSON(object: any): _107.AccessType;
            accessTypeToJSON(object: _107.AccessType): string;
            contractCodeHistoryOperationTypeFromJSON(object: any): _107.ContractCodeHistoryOperationType;
            contractCodeHistoryOperationTypeToJSON(object: _107.ContractCodeHistoryOperationType): string;
            AccessType: typeof _107.AccessType;
            ContractCodeHistoryOperationType: typeof _107.ContractCodeHistoryOperationType;
            AccessTypeParam: {
                encode(message: _107.AccessTypeParam, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _107.AccessTypeParam;
                fromJSON(object: any): _107.AccessTypeParam;
                toJSON(message: _107.AccessTypeParam): unknown;
                fromPartial(object: {
                    value?: _107.AccessType;
                }): _107.AccessTypeParam;
            };
            AccessConfig: {
                encode(message: _107.AccessConfig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _107.AccessConfig;
                fromJSON(object: any): _107.AccessConfig;
                toJSON(message: _107.AccessConfig): unknown;
                fromPartial(object: {
                    permission?: _107.AccessType;
                    addresses?: string[];
                }): _107.AccessConfig;
            };
            Params: {
                encode(message: _107.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _107.Params;
                fromJSON(object: any): _107.Params;
                toJSON(message: _107.Params): unknown;
                fromPartial(object: {
                    codeUploadAccess?: {
                        permission?: _107.AccessType;
                        addresses?: string[];
                    };
                    instantiateDefaultPermission?: _107.AccessType;
                }): _107.Params;
            };
            CodeInfo: {
                encode(message: _107.CodeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _107.CodeInfo;
                fromJSON(object: any): _107.CodeInfo;
                toJSON(message: _107.CodeInfo): unknown;
                fromPartial(object: {
                    codeHash?: Uint8Array;
                    creator?: string;
                    instantiateConfig?: {
                        permission?: _107.AccessType;
                        addresses?: string[];
                    };
                }): _107.CodeInfo;
            };
            ContractInfo: {
                encode(message: _107.ContractInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _107.ContractInfo;
                fromJSON(object: any): _107.ContractInfo;
                toJSON(message: _107.ContractInfo): unknown;
                fromPartial(object: {
                    codeId?: bigint;
                    creator?: string;
                    admin?: string;
                    label?: string;
                    created?: {
                        blockHeight?: bigint;
                        txIndex?: bigint;
                    };
                    ibcPortId?: string;
                    extension?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _107.ContractInfo;
            };
            ContractCodeHistoryEntry: {
                encode(message: _107.ContractCodeHistoryEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _107.ContractCodeHistoryEntry;
                fromJSON(object: any): _107.ContractCodeHistoryEntry;
                toJSON(message: _107.ContractCodeHistoryEntry): unknown;
                fromPartial(object: {
                    operation?: _107.ContractCodeHistoryOperationType;
                    codeId?: bigint;
                    updated?: {
                        blockHeight?: bigint;
                        txIndex?: bigint;
                    };
                    msg?: Uint8Array;
                }): _107.ContractCodeHistoryEntry;
            };
            AbsoluteTxPosition: {
                encode(message: _107.AbsoluteTxPosition, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _107.AbsoluteTxPosition;
                fromJSON(object: any): _107.AbsoluteTxPosition;
                toJSON(message: _107.AbsoluteTxPosition): unknown;
                fromPartial(object: {
                    blockHeight?: bigint;
                    txIndex?: bigint;
                }): _107.AbsoluteTxPosition;
            };
            Model: {
                encode(message: _107.Model, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _107.Model;
                fromJSON(object: any): _107.Model;
                toJSON(message: _107.Model): unknown;
                fromPartial(object: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                }): _107.Model;
            };
            Cosmwasm_wasmv1ContractInfoExtension_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            MsgStoreCode: {
                encode(message: _106.MsgStoreCode, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _106.MsgStoreCode;
                fromJSON(object: any): _106.MsgStoreCode;
                toJSON(message: _106.MsgStoreCode): unknown;
                fromPartial(object: {
                    sender?: string;
                    wasmByteCode?: Uint8Array;
                    instantiatePermission?: {
                        permission?: _107.AccessType;
                        addresses?: string[];
                    };
                }): _106.MsgStoreCode;
            };
            MsgStoreCodeResponse: {
                encode(message: _106.MsgStoreCodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _106.MsgStoreCodeResponse;
                fromJSON(object: any): _106.MsgStoreCodeResponse;
                toJSON(message: _106.MsgStoreCodeResponse): unknown;
                fromPartial(object: {
                    codeId?: bigint;
                    checksum?: Uint8Array;
                }): _106.MsgStoreCodeResponse;
            };
            MsgInstantiateContract: {
                encode(message: _106.MsgInstantiateContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _106.MsgInstantiateContract;
                fromJSON(object: any): _106.MsgInstantiateContract;
                toJSON(message: _106.MsgInstantiateContract): unknown;
                fromPartial(object: {
                    sender?: string;
                    admin?: string;
                    codeId?: bigint;
                    label?: string;
                    msg?: Uint8Array;
                    funds?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _106.MsgInstantiateContract;
            };
            MsgInstantiateContractResponse: {
                encode(message: _106.MsgInstantiateContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _106.MsgInstantiateContractResponse;
                fromJSON(object: any): _106.MsgInstantiateContractResponse;
                toJSON(message: _106.MsgInstantiateContractResponse): unknown;
                fromPartial(object: {
                    address?: string;
                    data?: Uint8Array;
                }): _106.MsgInstantiateContractResponse;
            };
            MsgInstantiateContract2: {
                encode(message: _106.MsgInstantiateContract2, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _106.MsgInstantiateContract2;
                fromJSON(object: any): _106.MsgInstantiateContract2;
                toJSON(message: _106.MsgInstantiateContract2): unknown;
                fromPartial(object: {
                    sender?: string;
                    admin?: string;
                    codeId?: bigint;
                    label?: string;
                    msg?: Uint8Array;
                    funds?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    salt?: Uint8Array;
                    fixMsg?: boolean;
                }): _106.MsgInstantiateContract2;
            };
            MsgInstantiateContract2Response: {
                encode(message: _106.MsgInstantiateContract2Response, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _106.MsgInstantiateContract2Response;
                fromJSON(object: any): _106.MsgInstantiateContract2Response;
                toJSON(message: _106.MsgInstantiateContract2Response): unknown;
                fromPartial(object: {
                    address?: string;
                    data?: Uint8Array;
                }): _106.MsgInstantiateContract2Response;
            };
            MsgExecuteContract: {
                encode(message: _106.MsgExecuteContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _106.MsgExecuteContract;
                fromJSON(object: any): _106.MsgExecuteContract;
                toJSON(message: _106.MsgExecuteContract): unknown;
                fromPartial(object: {
                    sender?: string;
                    contract?: string;
                    msg?: Uint8Array;
                    funds?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _106.MsgExecuteContract;
            };
            MsgExecuteContractResponse: {
                encode(message: _106.MsgExecuteContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _106.MsgExecuteContractResponse;
                fromJSON(object: any): _106.MsgExecuteContractResponse;
                toJSON(message: _106.MsgExecuteContractResponse): unknown;
                fromPartial(object: {
                    data?: Uint8Array;
                }): _106.MsgExecuteContractResponse;
            };
            MsgMigrateContract: {
                encode(message: _106.MsgMigrateContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _106.MsgMigrateContract;
                fromJSON(object: any): _106.MsgMigrateContract;
                toJSON(message: _106.MsgMigrateContract): unknown;
                fromPartial(object: {
                    sender?: string;
                    contract?: string;
                    codeId?: bigint;
                    msg?: Uint8Array;
                }): _106.MsgMigrateContract;
            };
            MsgMigrateContractResponse: {
                encode(message: _106.MsgMigrateContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _106.MsgMigrateContractResponse;
                fromJSON(object: any): _106.MsgMigrateContractResponse;
                toJSON(message: _106.MsgMigrateContractResponse): unknown;
                fromPartial(object: {
                    data?: Uint8Array;
                }): _106.MsgMigrateContractResponse;
            };
            MsgUpdateAdmin: {
                encode(message: _106.MsgUpdateAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _106.MsgUpdateAdmin;
                fromJSON(object: any): _106.MsgUpdateAdmin;
                toJSON(message: _106.MsgUpdateAdmin): unknown;
                fromPartial(object: {
                    sender?: string;
                    newAdmin?: string;
                    contract?: string;
                }): _106.MsgUpdateAdmin;
            };
            MsgUpdateAdminResponse: {
                encode(_: _106.MsgUpdateAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _106.MsgUpdateAdminResponse;
                fromJSON(_: any): _106.MsgUpdateAdminResponse;
                toJSON(_: _106.MsgUpdateAdminResponse): unknown;
                fromPartial(_: {}): _106.MsgUpdateAdminResponse;
            };
            MsgClearAdmin: {
                encode(message: _106.MsgClearAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _106.MsgClearAdmin;
                fromJSON(object: any): _106.MsgClearAdmin;
                toJSON(message: _106.MsgClearAdmin): unknown;
                fromPartial(object: {
                    sender?: string;
                    contract?: string;
                }): _106.MsgClearAdmin;
            };
            MsgClearAdminResponse: {
                encode(_: _106.MsgClearAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _106.MsgClearAdminResponse;
                fromJSON(_: any): _106.MsgClearAdminResponse;
                toJSON(_: _106.MsgClearAdminResponse): unknown;
                fromPartial(_: {}): _106.MsgClearAdminResponse;
            };
            MsgUpdateInstantiateConfig: {
                encode(message: _106.MsgUpdateInstantiateConfig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _106.MsgUpdateInstantiateConfig;
                fromJSON(object: any): _106.MsgUpdateInstantiateConfig;
                toJSON(message: _106.MsgUpdateInstantiateConfig): unknown;
                fromPartial(object: {
                    sender?: string;
                    codeId?: bigint;
                    newInstantiatePermission?: {
                        permission?: _107.AccessType;
                        addresses?: string[];
                    };
                }): _106.MsgUpdateInstantiateConfig;
            };
            MsgUpdateInstantiateConfigResponse: {
                encode(_: _106.MsgUpdateInstantiateConfigResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _106.MsgUpdateInstantiateConfigResponse;
                fromJSON(_: any): _106.MsgUpdateInstantiateConfigResponse;
                toJSON(_: _106.MsgUpdateInstantiateConfigResponse): unknown;
                fromPartial(_: {}): _106.MsgUpdateInstantiateConfigResponse;
            };
            MsgUpdateParams: {
                encode(message: _106.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _106.MsgUpdateParams;
                fromJSON(object: any): _106.MsgUpdateParams;
                toJSON(message: _106.MsgUpdateParams): unknown;
                fromPartial(object: {
                    authority?: string;
                    params?: {
                        codeUploadAccess?: {
                            permission?: _107.AccessType;
                            addresses?: string[];
                        };
                        instantiateDefaultPermission?: _107.AccessType;
                    };
                }): _106.MsgUpdateParams;
            };
            MsgUpdateParamsResponse: {
                encode(_: _106.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _106.MsgUpdateParamsResponse;
                fromJSON(_: any): _106.MsgUpdateParamsResponse;
                toJSON(_: _106.MsgUpdateParamsResponse): unknown;
                fromPartial(_: {}): _106.MsgUpdateParamsResponse;
            };
            MsgSudoContract: {
                encode(message: _106.MsgSudoContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _106.MsgSudoContract;
                fromJSON(object: any): _106.MsgSudoContract;
                toJSON(message: _106.MsgSudoContract): unknown;
                fromPartial(object: {
                    authority?: string;
                    contract?: string;
                    msg?: Uint8Array;
                }): _106.MsgSudoContract;
            };
            MsgSudoContractResponse: {
                encode(message: _106.MsgSudoContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _106.MsgSudoContractResponse;
                fromJSON(object: any): _106.MsgSudoContractResponse;
                toJSON(message: _106.MsgSudoContractResponse): unknown;
                fromPartial(object: {
                    data?: Uint8Array;
                }): _106.MsgSudoContractResponse;
            };
            MsgPinCodes: {
                encode(message: _106.MsgPinCodes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _106.MsgPinCodes;
                fromJSON(object: any): _106.MsgPinCodes;
                toJSON(message: _106.MsgPinCodes): unknown;
                fromPartial(object: {
                    authority?: string;
                    codeIds?: bigint[];
                }): _106.MsgPinCodes;
            };
            MsgPinCodesResponse: {
                encode(_: _106.MsgPinCodesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _106.MsgPinCodesResponse;
                fromJSON(_: any): _106.MsgPinCodesResponse;
                toJSON(_: _106.MsgPinCodesResponse): unknown;
                fromPartial(_: {}): _106.MsgPinCodesResponse;
            };
            MsgUnpinCodes: {
                encode(message: _106.MsgUnpinCodes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _106.MsgUnpinCodes;
                fromJSON(object: any): _106.MsgUnpinCodes;
                toJSON(message: _106.MsgUnpinCodes): unknown;
                fromPartial(object: {
                    authority?: string;
                    codeIds?: bigint[];
                }): _106.MsgUnpinCodes;
            };
            MsgUnpinCodesResponse: {
                encode(_: _106.MsgUnpinCodesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _106.MsgUnpinCodesResponse;
                fromJSON(_: any): _106.MsgUnpinCodesResponse;
                toJSON(_: _106.MsgUnpinCodesResponse): unknown;
                fromPartial(_: {}): _106.MsgUnpinCodesResponse;
            };
            MsgStoreAndInstantiateContract: {
                encode(message: _106.MsgStoreAndInstantiateContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _106.MsgStoreAndInstantiateContract;
                fromJSON(object: any): _106.MsgStoreAndInstantiateContract;
                toJSON(message: _106.MsgStoreAndInstantiateContract): unknown;
                fromPartial(object: {
                    authority?: string;
                    wasmByteCode?: Uint8Array;
                    instantiatePermission?: {
                        permission?: _107.AccessType;
                        addresses?: string[];
                    };
                    unpinCode?: boolean;
                    admin?: string;
                    label?: string;
                    msg?: Uint8Array;
                    funds?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    source?: string;
                    builder?: string;
                    codeHash?: Uint8Array;
                }): _106.MsgStoreAndInstantiateContract;
            };
            MsgStoreAndInstantiateContractResponse: {
                encode(message: _106.MsgStoreAndInstantiateContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _106.MsgStoreAndInstantiateContractResponse;
                fromJSON(object: any): _106.MsgStoreAndInstantiateContractResponse;
                toJSON(message: _106.MsgStoreAndInstantiateContractResponse): unknown;
                fromPartial(object: {
                    address?: string;
                    data?: Uint8Array;
                }): _106.MsgStoreAndInstantiateContractResponse;
            };
            QueryContractInfoRequest: {
                encode(message: _105.QueryContractInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _105.QueryContractInfoRequest;
                fromJSON(object: any): _105.QueryContractInfoRequest;
                toJSON(message: _105.QueryContractInfoRequest): unknown;
                fromPartial(object: {
                    address?: string;
                }): _105.QueryContractInfoRequest;
            };
            QueryContractInfoResponse: {
                encode(message: _105.QueryContractInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _105.QueryContractInfoResponse;
                fromJSON(object: any): _105.QueryContractInfoResponse;
                toJSON(message: _105.QueryContractInfoResponse): unknown;
                fromPartial(object: {
                    address?: string;
                    contractInfo?: {
                        codeId?: bigint;
                        creator?: string;
                        admin?: string;
                        label?: string;
                        created?: {
                            blockHeight?: bigint;
                            txIndex?: bigint;
                        };
                        ibcPortId?: string;
                        extension?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    };
                }): _105.QueryContractInfoResponse;
            };
            QueryContractHistoryRequest: {
                encode(message: _105.QueryContractHistoryRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _105.QueryContractHistoryRequest;
                fromJSON(object: any): _105.QueryContractHistoryRequest;
                toJSON(message: _105.QueryContractHistoryRequest): unknown;
                fromPartial(object: {
                    address?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: bigint;
                        limit?: bigint;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _105.QueryContractHistoryRequest;
            };
            QueryContractHistoryResponse: {
                encode(message: _105.QueryContractHistoryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _105.QueryContractHistoryResponse;
                fromJSON(object: any): _105.QueryContractHistoryResponse;
                toJSON(message: _105.QueryContractHistoryResponse): unknown;
                fromPartial(object: {
                    entries?: {
                        operation?: _107.ContractCodeHistoryOperationType;
                        codeId?: bigint;
                        updated?: {
                            blockHeight?: bigint;
                            txIndex?: bigint;
                        };
                        msg?: Uint8Array;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: bigint;
                    };
                }): _105.QueryContractHistoryResponse;
            };
            QueryContractsByCodeRequest: {
                encode(message: _105.QueryContractsByCodeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _105.QueryContractsByCodeRequest;
                fromJSON(object: any): _105.QueryContractsByCodeRequest;
                toJSON(message: _105.QueryContractsByCodeRequest): unknown;
                fromPartial(object: {
                    codeId?: bigint;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: bigint;
                        limit?: bigint;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _105.QueryContractsByCodeRequest;
            };
            QueryContractsByCodeResponse: {
                encode(message: _105.QueryContractsByCodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _105.QueryContractsByCodeResponse;
                fromJSON(object: any): _105.QueryContractsByCodeResponse;
                toJSON(message: _105.QueryContractsByCodeResponse): unknown;
                fromPartial(object: {
                    contracts?: string[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: bigint;
                    };
                }): _105.QueryContractsByCodeResponse;
            };
            QueryAllContractStateRequest: {
                encode(message: _105.QueryAllContractStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _105.QueryAllContractStateRequest;
                fromJSON(object: any): _105.QueryAllContractStateRequest;
                toJSON(message: _105.QueryAllContractStateRequest): unknown;
                fromPartial(object: {
                    address?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: bigint;
                        limit?: bigint;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _105.QueryAllContractStateRequest;
            };
            QueryAllContractStateResponse: {
                encode(message: _105.QueryAllContractStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _105.QueryAllContractStateResponse;
                fromJSON(object: any): _105.QueryAllContractStateResponse;
                toJSON(message: _105.QueryAllContractStateResponse): unknown;
                fromPartial(object: {
                    models?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: bigint;
                    };
                }): _105.QueryAllContractStateResponse;
            };
            QueryRawContractStateRequest: {
                encode(message: _105.QueryRawContractStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _105.QueryRawContractStateRequest;
                fromJSON(object: any): _105.QueryRawContractStateRequest;
                toJSON(message: _105.QueryRawContractStateRequest): unknown;
                fromPartial(object: {
                    address?: string;
                    queryData?: Uint8Array;
                }): _105.QueryRawContractStateRequest;
            };
            QueryRawContractStateResponse: {
                encode(message: _105.QueryRawContractStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _105.QueryRawContractStateResponse;
                fromJSON(object: any): _105.QueryRawContractStateResponse;
                toJSON(message: _105.QueryRawContractStateResponse): unknown;
                fromPartial(object: {
                    data?: Uint8Array;
                }): _105.QueryRawContractStateResponse;
            };
            QuerySmartContractStateRequest: {
                encode(message: _105.QuerySmartContractStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _105.QuerySmartContractStateRequest;
                fromJSON(object: any): _105.QuerySmartContractStateRequest;
                toJSON(message: _105.QuerySmartContractStateRequest): unknown;
                fromPartial(object: {
                    address?: string;
                    queryData?: Uint8Array;
                }): _105.QuerySmartContractStateRequest;
            };
            QuerySmartContractStateResponse: {
                encode(message: _105.QuerySmartContractStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _105.QuerySmartContractStateResponse;
                fromJSON(object: any): _105.QuerySmartContractStateResponse;
                toJSON(message: _105.QuerySmartContractStateResponse): unknown;
                fromPartial(object: {
                    data?: Uint8Array;
                }): _105.QuerySmartContractStateResponse;
            };
            QueryCodeRequest: {
                encode(message: _105.QueryCodeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _105.QueryCodeRequest;
                fromJSON(object: any): _105.QueryCodeRequest;
                toJSON(message: _105.QueryCodeRequest): unknown;
                fromPartial(object: {
                    codeId?: bigint;
                }): _105.QueryCodeRequest;
            };
            CodeInfoResponse: {
                encode(message: _105.CodeInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _105.CodeInfoResponse;
                fromJSON(object: any): _105.CodeInfoResponse;
                toJSON(message: _105.CodeInfoResponse): unknown;
                fromPartial(object: {
                    codeId?: bigint;
                    creator?: string;
                    dataHash?: Uint8Array;
                    instantiatePermission?: {
                        permission?: _107.AccessType;
                        addresses?: string[];
                    };
                }): _105.CodeInfoResponse;
            };
            QueryCodeResponse: {
                encode(message: _105.QueryCodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _105.QueryCodeResponse;
                fromJSON(object: any): _105.QueryCodeResponse;
                toJSON(message: _105.QueryCodeResponse): unknown;
                fromPartial(object: {
                    codeInfo?: {
                        codeId?: bigint;
                        creator?: string;
                        dataHash?: Uint8Array;
                        instantiatePermission?: {
                            permission?: _107.AccessType;
                            addresses?: string[];
                        };
                    };
                    data?: Uint8Array;
                }): _105.QueryCodeResponse;
            };
            QueryCodesRequest: {
                encode(message: _105.QueryCodesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _105.QueryCodesRequest;
                fromJSON(object: any): _105.QueryCodesRequest;
                toJSON(message: _105.QueryCodesRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: bigint;
                        limit?: bigint;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _105.QueryCodesRequest;
            };
            QueryCodesResponse: {
                encode(message: _105.QueryCodesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _105.QueryCodesResponse;
                fromJSON(object: any): _105.QueryCodesResponse;
                toJSON(message: _105.QueryCodesResponse): unknown;
                fromPartial(object: {
                    codeInfos?: {
                        codeId?: bigint;
                        creator?: string;
                        dataHash?: Uint8Array;
                        instantiatePermission?: {
                            permission?: _107.AccessType;
                            addresses?: string[];
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: bigint;
                    };
                }): _105.QueryCodesResponse;
            };
            QueryPinnedCodesRequest: {
                encode(message: _105.QueryPinnedCodesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _105.QueryPinnedCodesRequest;
                fromJSON(object: any): _105.QueryPinnedCodesRequest;
                toJSON(message: _105.QueryPinnedCodesRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: bigint;
                        limit?: bigint;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _105.QueryPinnedCodesRequest;
            };
            QueryPinnedCodesResponse: {
                encode(message: _105.QueryPinnedCodesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _105.QueryPinnedCodesResponse;
                fromJSON(object: any): _105.QueryPinnedCodesResponse;
                toJSON(message: _105.QueryPinnedCodesResponse): unknown;
                fromPartial(object: {
                    codeIds?: bigint[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: bigint;
                    };
                }): _105.QueryPinnedCodesResponse;
            };
            QueryParamsRequest: {
                encode(_: _105.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _105.QueryParamsRequest;
                fromJSON(_: any): _105.QueryParamsRequest;
                toJSON(_: _105.QueryParamsRequest): unknown;
                fromPartial(_: {}): _105.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _105.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _105.QueryParamsResponse;
                fromJSON(object: any): _105.QueryParamsResponse;
                toJSON(message: _105.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        codeUploadAccess?: {
                            permission?: _107.AccessType;
                            addresses?: string[];
                        };
                        instantiateDefaultPermission?: _107.AccessType;
                    };
                }): _105.QueryParamsResponse;
            };
            QueryContractsByCreatorRequest: {
                encode(message: _105.QueryContractsByCreatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _105.QueryContractsByCreatorRequest;
                fromJSON(object: any): _105.QueryContractsByCreatorRequest;
                toJSON(message: _105.QueryContractsByCreatorRequest): unknown;
                fromPartial(object: {
                    creatorAddress?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: bigint;
                        limit?: bigint;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _105.QueryContractsByCreatorRequest;
            };
            QueryContractsByCreatorResponse: {
                encode(message: _105.QueryContractsByCreatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _105.QueryContractsByCreatorResponse;
                fromJSON(object: any): _105.QueryContractsByCreatorResponse;
                toJSON(message: _105.QueryContractsByCreatorResponse): unknown;
                fromPartial(object: {
                    contractAddresses?: string[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: bigint;
                    };
                }): _105.QueryContractsByCreatorResponse;
            };
            StoreCodeProposal: {
                encode(message: _104.StoreCodeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _104.StoreCodeProposal;
                fromJSON(object: any): _104.StoreCodeProposal;
                toJSON(message: _104.StoreCodeProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    runAs?: string;
                    wasmByteCode?: Uint8Array;
                    instantiatePermission?: {
                        permission?: _107.AccessType;
                        addresses?: string[];
                    };
                    unpinCode?: boolean;
                    source?: string;
                    builder?: string;
                    codeHash?: Uint8Array;
                }): _104.StoreCodeProposal;
            };
            InstantiateContractProposal: {
                encode(message: _104.InstantiateContractProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _104.InstantiateContractProposal;
                fromJSON(object: any): _104.InstantiateContractProposal;
                toJSON(message: _104.InstantiateContractProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    runAs?: string;
                    admin?: string;
                    codeId?: bigint;
                    label?: string;
                    msg?: Uint8Array;
                    funds?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _104.InstantiateContractProposal;
            };
            InstantiateContract2Proposal: {
                encode(message: _104.InstantiateContract2Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _104.InstantiateContract2Proposal;
                fromJSON(object: any): _104.InstantiateContract2Proposal;
                toJSON(message: _104.InstantiateContract2Proposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    runAs?: string;
                    admin?: string;
                    codeId?: bigint;
                    label?: string;
                    msg?: Uint8Array;
                    funds?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    salt?: Uint8Array;
                    fixMsg?: boolean;
                }): _104.InstantiateContract2Proposal;
            };
            MigrateContractProposal: {
                encode(message: _104.MigrateContractProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _104.MigrateContractProposal;
                fromJSON(object: any): _104.MigrateContractProposal;
                toJSON(message: _104.MigrateContractProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    contract?: string;
                    codeId?: bigint;
                    msg?: Uint8Array;
                }): _104.MigrateContractProposal;
            };
            SudoContractProposal: {
                encode(message: _104.SudoContractProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _104.SudoContractProposal;
                fromJSON(object: any): _104.SudoContractProposal;
                toJSON(message: _104.SudoContractProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    contract?: string;
                    msg?: Uint8Array;
                }): _104.SudoContractProposal;
            };
            ExecuteContractProposal: {
                encode(message: _104.ExecuteContractProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _104.ExecuteContractProposal;
                fromJSON(object: any): _104.ExecuteContractProposal;
                toJSON(message: _104.ExecuteContractProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    runAs?: string;
                    contract?: string;
                    msg?: Uint8Array;
                    funds?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _104.ExecuteContractProposal;
            };
            UpdateAdminProposal: {
                encode(message: _104.UpdateAdminProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _104.UpdateAdminProposal;
                fromJSON(object: any): _104.UpdateAdminProposal;
                toJSON(message: _104.UpdateAdminProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    newAdmin?: string;
                    contract?: string;
                }): _104.UpdateAdminProposal;
            };
            ClearAdminProposal: {
                encode(message: _104.ClearAdminProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _104.ClearAdminProposal;
                fromJSON(object: any): _104.ClearAdminProposal;
                toJSON(message: _104.ClearAdminProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    contract?: string;
                }): _104.ClearAdminProposal;
            };
            PinCodesProposal: {
                encode(message: _104.PinCodesProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _104.PinCodesProposal;
                fromJSON(object: any): _104.PinCodesProposal;
                toJSON(message: _104.PinCodesProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    codeIds?: bigint[];
                }): _104.PinCodesProposal;
            };
            UnpinCodesProposal: {
                encode(message: _104.UnpinCodesProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _104.UnpinCodesProposal;
                fromJSON(object: any): _104.UnpinCodesProposal;
                toJSON(message: _104.UnpinCodesProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    codeIds?: bigint[];
                }): _104.UnpinCodesProposal;
            };
            AccessConfigUpdate: {
                encode(message: _104.AccessConfigUpdate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _104.AccessConfigUpdate;
                fromJSON(object: any): _104.AccessConfigUpdate;
                toJSON(message: _104.AccessConfigUpdate): unknown;
                fromPartial(object: {
                    codeId?: bigint;
                    instantiatePermission?: {
                        permission?: _107.AccessType;
                        addresses?: string[];
                    };
                }): _104.AccessConfigUpdate;
            };
            UpdateInstantiateConfigProposal: {
                encode(message: _104.UpdateInstantiateConfigProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _104.UpdateInstantiateConfigProposal;
                fromJSON(object: any): _104.UpdateInstantiateConfigProposal;
                toJSON(message: _104.UpdateInstantiateConfigProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    accessConfigUpdates?: {
                        codeId?: bigint;
                        instantiatePermission?: {
                            permission?: _107.AccessType;
                            addresses?: string[];
                        };
                    }[];
                }): _104.UpdateInstantiateConfigProposal;
            };
            StoreAndInstantiateContractProposal: {
                encode(message: _104.StoreAndInstantiateContractProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _104.StoreAndInstantiateContractProposal;
                fromJSON(object: any): _104.StoreAndInstantiateContractProposal;
                toJSON(message: _104.StoreAndInstantiateContractProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    runAs?: string;
                    wasmByteCode?: Uint8Array;
                    instantiatePermission?: {
                        permission?: _107.AccessType;
                        addresses?: string[];
                    };
                    unpinCode?: boolean;
                    admin?: string;
                    label?: string;
                    msg?: Uint8Array;
                    funds?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    source?: string;
                    builder?: string;
                    codeHash?: Uint8Array;
                }): _104.StoreAndInstantiateContractProposal;
            };
            MsgIBCSend: {
                encode(message: _103.MsgIBCSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _103.MsgIBCSend;
                fromJSON(object: any): _103.MsgIBCSend;
                toJSON(message: _103.MsgIBCSend): unknown;
                fromPartial(object: {
                    channel?: string;
                    timeoutHeight?: bigint;
                    timeoutTimestamp?: bigint;
                    data?: Uint8Array;
                }): _103.MsgIBCSend;
            };
            MsgIBCSendResponse: {
                encode(message: _103.MsgIBCSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _103.MsgIBCSendResponse;
                fromJSON(object: any): _103.MsgIBCSendResponse;
                toJSON(message: _103.MsgIBCSendResponse): unknown;
                fromPartial(object: {
                    sequence?: bigint;
                }): _103.MsgIBCSendResponse;
            };
            MsgIBCCloseChannel: {
                encode(message: _103.MsgIBCCloseChannel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _103.MsgIBCCloseChannel;
                fromJSON(object: any): _103.MsgIBCCloseChannel;
                toJSON(message: _103.MsgIBCCloseChannel): unknown;
                fromPartial(object: {
                    channel?: string;
                }): _103.MsgIBCCloseChannel;
            };
            GenesisState: {
                encode(message: _102.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _102.GenesisState;
                fromJSON(object: any): _102.GenesisState;
                toJSON(message: _102.GenesisState): unknown;
                fromPartial(object: {
                    params?: {
                        codeUploadAccess?: {
                            permission?: _107.AccessType;
                            addresses?: string[];
                        };
                        instantiateDefaultPermission?: _107.AccessType;
                    };
                    codes?: {
                        codeId?: bigint;
                        codeInfo?: {
                            codeHash?: Uint8Array;
                            creator?: string;
                            instantiateConfig?: {
                                permission?: _107.AccessType;
                                addresses?: string[];
                            };
                        };
                        codeBytes?: Uint8Array;
                        pinned?: boolean;
                    }[];
                    contracts?: {
                        contractAddress?: string;
                        contractInfo?: {
                            codeId?: bigint;
                            creator?: string;
                            admin?: string;
                            label?: string;
                            created?: {
                                blockHeight?: bigint;
                                txIndex?: bigint;
                            };
                            ibcPortId?: string;
                            extension?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        };
                        contractState?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                        }[];
                        contractCodeHistory?: {
                            operation?: _107.ContractCodeHistoryOperationType;
                            codeId?: bigint;
                            updated?: {
                                blockHeight?: bigint;
                                txIndex?: bigint;
                            };
                            msg?: Uint8Array;
                        }[];
                    }[];
                    sequences?: {
                        idKey?: Uint8Array;
                        value?: bigint;
                    }[];
                }): _102.GenesisState;
            };
            Code: {
                encode(message: _102.Code, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _102.Code;
                fromJSON(object: any): _102.Code;
                toJSON(message: _102.Code): unknown;
                fromPartial(object: {
                    codeId?: bigint;
                    codeInfo?: {
                        codeHash?: Uint8Array;
                        creator?: string;
                        instantiateConfig?: {
                            permission?: _107.AccessType;
                            addresses?: string[];
                        };
                    };
                    codeBytes?: Uint8Array;
                    pinned?: boolean;
                }): _102.Code;
            };
            Contract: {
                encode(message: _102.Contract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _102.Contract;
                fromJSON(object: any): _102.Contract;
                toJSON(message: _102.Contract): unknown;
                fromPartial(object: {
                    contractAddress?: string;
                    contractInfo?: {
                        codeId?: bigint;
                        creator?: string;
                        admin?: string;
                        label?: string;
                        created?: {
                            blockHeight?: bigint;
                            txIndex?: bigint;
                        };
                        ibcPortId?: string;
                        extension?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    };
                    contractState?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                    }[];
                    contractCodeHistory?: {
                        operation?: _107.ContractCodeHistoryOperationType;
                        codeId?: bigint;
                        updated?: {
                            blockHeight?: bigint;
                            txIndex?: bigint;
                        };
                        msg?: Uint8Array;
                    }[];
                }): _102.Contract;
            };
            Sequence: {
                encode(message: _102.Sequence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _102.Sequence;
                fromJSON(object: any): _102.Sequence;
                toJSON(message: _102.Sequence): unknown;
                fromPartial(object: {
                    idKey?: Uint8Array;
                    value?: bigint;
                }): _102.Sequence;
            };
            ContractExecutionAuthorization: {
                encode(message: _101.ContractExecutionAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _101.ContractExecutionAuthorization;
                fromJSON(object: any): _101.ContractExecutionAuthorization;
                toJSON(message: _101.ContractExecutionAuthorization): unknown;
                fromPartial(object: {
                    grants?: {
                        contract?: string;
                        limit?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } | {
                            remaining?: bigint;
                        } | {
                            amounts?: {
                                denom?: string;
                                amount?: string;
                            }[];
                        } | {
                            callsRemaining?: bigint;
                            amounts?: {
                                denom?: string;
                                amount?: string;
                            }[];
                        };
                        filter?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } | {} | {
                            keys?: string[];
                        } | {
                            messages?: Uint8Array[];
                        };
                    }[];
                }): _101.ContractExecutionAuthorization;
            };
            ContractMigrationAuthorization: {
                encode(message: _101.ContractMigrationAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _101.ContractMigrationAuthorization;
                fromJSON(object: any): _101.ContractMigrationAuthorization;
                toJSON(message: _101.ContractMigrationAuthorization): unknown;
                fromPartial(object: {
                    grants?: {
                        contract?: string;
                        limit?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } | {
                            remaining?: bigint;
                        } | {
                            amounts?: {
                                denom?: string;
                                amount?: string;
                            }[];
                        } | {
                            callsRemaining?: bigint;
                            amounts?: {
                                denom?: string;
                                amount?: string;
                            }[];
                        };
                        filter?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } | {} | {
                            keys?: string[];
                        } | {
                            messages?: Uint8Array[];
                        };
                    }[];
                }): _101.ContractMigrationAuthorization;
            };
            ContractGrant: {
                encode(message: _101.ContractGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _101.ContractGrant;
                fromJSON(object: any): _101.ContractGrant;
                toJSON(message: _101.ContractGrant): unknown;
                fromPartial(object: {
                    contract?: string;
                    limit?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    } | {
                        remaining?: bigint;
                    } | {
                        amounts?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    } | {
                        callsRemaining?: bigint;
                        amounts?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                    filter?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    } | {} | {
                        keys?: string[];
                    } | {
                        messages?: Uint8Array[];
                    };
                }): _101.ContractGrant;
            };
            MaxCallsLimit: {
                encode(message: _101.MaxCallsLimit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _101.MaxCallsLimit;
                fromJSON(object: any): _101.MaxCallsLimit;
                toJSON(message: _101.MaxCallsLimit): unknown;
                fromPartial(object: {
                    remaining?: bigint;
                }): _101.MaxCallsLimit;
            };
            MaxFundsLimit: {
                encode(message: _101.MaxFundsLimit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _101.MaxFundsLimit;
                fromJSON(object: any): _101.MaxFundsLimit;
                toJSON(message: _101.MaxFundsLimit): unknown;
                fromPartial(object: {
                    amounts?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _101.MaxFundsLimit;
            };
            CombinedLimit: {
                encode(message: _101.CombinedLimit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _101.CombinedLimit;
                fromJSON(object: any): _101.CombinedLimit;
                toJSON(message: _101.CombinedLimit): unknown;
                fromPartial(object: {
                    callsRemaining?: bigint;
                    amounts?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _101.CombinedLimit;
            };
            AllowAllMessagesFilter: {
                encode(_: _101.AllowAllMessagesFilter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _101.AllowAllMessagesFilter;
                fromJSON(_: any): _101.AllowAllMessagesFilter;
                toJSON(_: _101.AllowAllMessagesFilter): unknown;
                fromPartial(_: {}): _101.AllowAllMessagesFilter;
            };
            AcceptedMessageKeysFilter: {
                encode(message: _101.AcceptedMessageKeysFilter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _101.AcceptedMessageKeysFilter;
                fromJSON(object: any): _101.AcceptedMessageKeysFilter;
                toJSON(message: _101.AcceptedMessageKeysFilter): unknown;
                fromPartial(object: {
                    keys?: string[];
                }): _101.AcceptedMessageKeysFilter;
            };
            AcceptedMessagesFilter: {
                encode(message: _101.AcceptedMessagesFilter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _101.AcceptedMessagesFilter;
                fromJSON(object: any): _101.AcceptedMessagesFilter;
                toJSON(message: _101.AcceptedMessagesFilter): unknown;
                fromPartial(object: {
                    messages?: Uint8Array[];
                }): _101.AcceptedMessagesFilter;
            };
            Cosmwasm_wasmv1ContractAuthzLimitX_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _101.MaxCallsLimit | _101.MaxFundsLimit | _101.CombinedLimit;
            Cosmwasm_wasmv1ContractAuthzFilterX_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _101.AllowAllMessagesFilter | _101.AcceptedMessageKeysFilter | _101.AcceptedMessagesFilter;
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: import("../cosmos/auth/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                consensus: {
                    v1: import("../cosmos/consensus/v1/tx.rpc.msg").MsgClientImpl;
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                feegrant: {
                    v1beta1: import("../cosmos/feegrant/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                gov: {
                    v1: import("../cosmos/gov/v1/tx.rpc.msg").MsgClientImpl;
                    v1beta1: import("../cosmos/gov/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                nft: {
                    v1beta1: import("../cosmos/nft/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
            };
            cosmwasm: {
                wasm: {
                    v1: _234.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: {
                        accounts(request?: import("../cosmos/auth/v1beta1/query").QueryAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountsResponse>;
                        account(request: import("../cosmos/auth/v1beta1/query").QueryAccountRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountResponse>;
                        accountAddressByID(request: import("../cosmos/auth/v1beta1/query").QueryAccountAddressByIDRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountAddressByIDResponse>;
                        params(request?: import("../cosmos/auth/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryParamsResponse>;
                        moduleAccounts(request?: import("../cosmos/auth/v1beta1/query").QueryModuleAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryModuleAccountsResponse>;
                        moduleAccountByName(request: import("../cosmos/auth/v1beta1/query").QueryModuleAccountByNameRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryModuleAccountByNameResponse>;
                        bech32Prefix(request?: import("../cosmos/auth/v1beta1/query").Bech32PrefixRequest): Promise<import("../cosmos/auth/v1beta1/query").Bech32PrefixResponse>;
                        addressBytesToString(request: import("../cosmos/auth/v1beta1/query").AddressBytesToStringRequest): Promise<import("../cosmos/auth/v1beta1/query").AddressBytesToStringResponse>;
                        addressStringToBytes(request: import("../cosmos/auth/v1beta1/query").AddressStringToBytesRequest): Promise<import("../cosmos/auth/v1beta1/query").AddressStringToBytesResponse>;
                        accountInfo(request: import("../cosmos/auth/v1beta1/query").QueryAccountInfoRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountInfoResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: import("../cosmos/authz/v1beta1/query").QueryGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGrantsResponse>;
                        granterGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranterGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranterGrantsResponse>;
                        granteeGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsResponse>;
                    };
                };
                autocli: {
                    v1: {
                        appOptions(request?: import("../cosmos/autocli/v1/query").AppOptionsRequest): Promise<import("../cosmos/autocli/v1/query").AppOptionsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: import("../cosmos/bank/v1beta1/query").QueryBalanceRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryBalanceResponse>;
                        allBalances(request: import("../cosmos/bank/v1beta1/query").QueryAllBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryAllBalancesResponse>;
                        spendableBalances(request: import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesResponse>;
                        spendableBalanceByDenom(request: import("../cosmos/bank/v1beta1/query").QuerySpendableBalanceByDenomRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySpendableBalanceByDenomResponse>;
                        totalSupply(request?: import("../cosmos/bank/v1beta1/query").QueryTotalSupplyRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryTotalSupplyResponse>;
                        supplyOf(request: import("../cosmos/bank/v1beta1/query").QuerySupplyOfRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySupplyOfResponse>;
                        params(request?: import("../cosmos/bank/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryParamsResponse>;
                        denomMetadata(request: import("../cosmos/bank/v1beta1/query").QueryDenomMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomMetadataResponse>;
                        denomsMetadata(request?: import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataResponse>;
                        denomOwners(request: import("../cosmos/bank/v1beta1/query").QueryDenomOwnersRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomOwnersResponse>;
                        sendEnabled(request: import("../cosmos/bank/v1beta1/query").QuerySendEnabledRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySendEnabledResponse>;
                    };
                };
                base: {
                    node: {
                        v1beta1: {
                            config(request?: import("../cosmos/base/node/v1beta1/query").ConfigRequest): Promise<import("../cosmos/base/node/v1beta1/query").ConfigResponse>;
                        };
                    };
                };
                consensus: {
                    v1: {
                        params(request?: import("../cosmos/consensus/v1/query").QueryParamsRequest): Promise<import("../cosmos/consensus/v1/query").QueryParamsResponse>;
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: import("../cosmos/distribution/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryParamsResponse>;
                        validatorDistributionInfo(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorDistributionInfoRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorDistributionInfoResponse>;
                        validatorOutstandingRewards(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionResponse>;
                        validatorSlashes(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesResponse>;
                        delegationRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowanceRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowanceResponse>;
                        allowances(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowancesRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowancesResponse>;
                        allowancesByGranter(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowancesByGranterRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1: {
                        proposal(request: import("../cosmos/gov/v1/query").QueryProposalRequest): Promise<import("../cosmos/gov/v1/query").QueryProposalResponse>;
                        proposals(request: import("../cosmos/gov/v1/query").QueryProposalsRequest): Promise<import("../cosmos/gov/v1/query").QueryProposalsResponse>;
                        vote(request: import("../cosmos/gov/v1/query").QueryVoteRequest): Promise<import("../cosmos/gov/v1/query").QueryVoteResponse>;
                        votes(request: import("../cosmos/gov/v1/query").QueryVotesRequest): Promise<import("../cosmos/gov/v1/query").QueryVotesResponse>;
                        params(request: import("../cosmos/gov/v1/query").QueryParamsRequest): Promise<import("../cosmos/gov/v1/query").QueryParamsResponse>;
                        deposit(request: import("../cosmos/gov/v1/query").QueryDepositRequest): Promise<import("../cosmos/gov/v1/query").QueryDepositResponse>;
                        deposits(request: import("../cosmos/gov/v1/query").QueryDepositsRequest): Promise<import("../cosmos/gov/v1/query").QueryDepositsResponse>;
                        tallyResult(request: import("../cosmos/gov/v1/query").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1/query").QueryTallyResultResponse>;
                    };
                    v1beta1: {
                        proposal(request: import("../cosmos/gov/v1beta1/query").QueryProposalRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalResponse>;
                        proposals(request: import("../cosmos/gov/v1beta1/query").QueryProposalsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalsResponse>;
                        vote(request: import("../cosmos/gov/v1beta1/query").QueryVoteRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVoteResponse>;
                        votes(request: import("../cosmos/gov/v1beta1/query").QueryVotesRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVotesResponse>;
                        params(request: import("../cosmos/gov/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryParamsResponse>;
                        deposit(request: import("../cosmos/gov/v1beta1/query").QueryDepositRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositResponse>;
                        deposits(request: import("../cosmos/gov/v1beta1/query").QueryDepositsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositsResponse>;
                        tallyResult(request: import("../cosmos/gov/v1beta1/query").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryTallyResultResponse>;
                    };
                };
                nft: {
                    v1beta1: {
                        balance(request: import("../cosmos/nft/v1beta1/query").QueryBalanceRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryBalanceResponse>;
                        owner(request: import("../cosmos/nft/v1beta1/query").QueryOwnerRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryOwnerResponse>;
                        supply(request: import("../cosmos/nft/v1beta1/query").QuerySupplyRequest): Promise<import("../cosmos/nft/v1beta1/query").QuerySupplyResponse>;
                        nFTs(request: import("../cosmos/nft/v1beta1/query").QueryNFTsRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryNFTsResponse>;
                        nFT(request: import("../cosmos/nft/v1beta1/query").QueryNFTRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryNFTResponse>;
                        class(request: import("../cosmos/nft/v1beta1/query").QueryClassRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryClassResponse>;
                        classes(request?: import("../cosmos/nft/v1beta1/query").QueryClassesRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryClassesResponse>;
                    };
                };
                orm: {
                    query: {
                        v1alpha1: {
                            get(request: import("../cosmos/orm/query/v1alpha1/query").GetRequest): Promise<import("../cosmos/orm/query/v1alpha1/query").GetResponse>;
                            list(request: import("../cosmos/orm/query/v1alpha1/query").ListRequest): Promise<import("../cosmos/orm/query/v1alpha1/query").ListResponse>;
                        };
                    };
                };
                params: {
                    v1beta1: {
                        params(request: import("../cosmos/params/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/params/v1beta1/query").QueryParamsResponse>;
                        subspaces(request?: import("../cosmos/params/v1beta1/query").QuerySubspacesRequest): Promise<import("../cosmos/params/v1beta1/query").QuerySubspacesResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: import("../cosmos/staking/v1beta1/query").QueryValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorsResponse>;
                        validator(request: import("../cosmos/staking/v1beta1/query").QueryValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorResponse>;
                        validatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: import("../cosmos/staking/v1beta1/query").QueryDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegationResponse>;
                        unbondingDelegation(request: import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: import("../cosmos/staking/v1beta1/query").QueryRedelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryRedelegationsResponse>;
                        delegatorValidators(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorResponse>;
                        historicalInfo(request: import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoResponse>;
                        pool(request?: import("../cosmos/staking/v1beta1/query").QueryPoolRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryPoolResponse>;
                        params(request?: import("../cosmos/staking/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: import("../cosmos/tx/v1beta1/service").SimulateRequest): Promise<import("../cosmos/tx/v1beta1/service").SimulateResponse>;
                        getTx(request: import("../cosmos/tx/v1beta1/service").GetTxRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxResponse>;
                        broadcastTx(request: import("../cosmos/tx/v1beta1/service").BroadcastTxRequest): Promise<import("../cosmos/tx/v1beta1/service").BroadcastTxResponse>;
                        getTxsEvent(request: import("../cosmos/tx/v1beta1/service").GetTxsEventRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxsEventResponse>;
                        getBlockWithTxs(request: import("../cosmos/tx/v1beta1/service").GetBlockWithTxsRequest): Promise<import("../cosmos/tx/v1beta1/service").GetBlockWithTxsResponse>;
                        txDecode(request: import("../cosmos/tx/v1beta1/service").TxDecodeRequest): Promise<import("../cosmos/tx/v1beta1/service").TxDecodeResponse>;
                        txEncode(request: import("../cosmos/tx/v1beta1/service").TxEncodeRequest): Promise<import("../cosmos/tx/v1beta1/service").TxEncodeResponse>;
                        txEncodeAmino(request: import("../cosmos/tx/v1beta1/service").TxEncodeAminoRequest): Promise<import("../cosmos/tx/v1beta1/service").TxEncodeAminoResponse>;
                        txDecodeAmino(request: import("../cosmos/tx/v1beta1/service").TxDecodeAminoRequest): Promise<import("../cosmos/tx/v1beta1/service").TxDecodeAminoResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanResponse>;
                        appliedPlan(request: import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsResponse>;
                        authority(request?: import("../cosmos/upgrade/v1beta1/query").QueryAuthorityRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAuthorityResponse>;
                    };
                };
            };
            cosmwasm: {
                wasm: {
                    v1: {
                        contractInfo(request: _105.QueryContractInfoRequest): Promise<_105.QueryContractInfoResponse>;
                        contractHistory(request: _105.QueryContractHistoryRequest): Promise<_105.QueryContractHistoryResponse>;
                        contractsByCode(request: _105.QueryContractsByCodeRequest): Promise<_105.QueryContractsByCodeResponse>;
                        allContractState(request: _105.QueryAllContractStateRequest): Promise<_105.QueryAllContractStateResponse>;
                        rawContractState(request: _105.QueryRawContractStateRequest): Promise<_105.QueryRawContractStateResponse>;
                        smartContractState(request: _105.QuerySmartContractStateRequest): Promise<_105.QuerySmartContractStateResponse>;
                        code(request: _105.QueryCodeRequest): Promise<_105.QueryCodeResponse>;
                        codes(request?: _105.QueryCodesRequest): Promise<_105.QueryCodesResponse>;
                        pinnedCodes(request?: _105.QueryPinnedCodesRequest): Promise<_105.QueryPinnedCodesResponse>;
                        params(request?: _105.QueryParamsRequest): Promise<_105.QueryParamsResponse>;
                        contractsByCreator(request: _105.QueryContractsByCreatorRequest): Promise<_105.QueryContractsByCreatorResponse>;
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: import("../cosmos/auth/v1beta1/query.lcd").LCDQueryClient;
                };
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/query.lcd").LCDQueryClient;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/query.lcd").LCDQueryClient;
                };
                base: {
                    node: {
                        v1beta1: import("../cosmos/base/node/v1beta1/query.lcd").LCDQueryClient;
                    };
                };
                consensus: {
                    v1: import("../cosmos/consensus/v1/query.lcd").LCDQueryClient;
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/query.lcd").LCDQueryClient;
                };
                feegrant: {
                    v1beta1: import("../cosmos/feegrant/v1beta1/query.lcd").LCDQueryClient;
                };
                gov: {
                    v1: import("../cosmos/gov/v1/query.lcd").LCDQueryClient;
                    v1beta1: import("../cosmos/gov/v1beta1/query.lcd").LCDQueryClient;
                };
                nft: {
                    v1beta1: import("../cosmos/nft/v1beta1/query.lcd").LCDQueryClient;
                };
                params: {
                    v1beta1: import("../cosmos/params/v1beta1/query.lcd").LCDQueryClient;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/query.lcd").LCDQueryClient;
                };
                tx: {
                    v1beta1: import("../cosmos/tx/v1beta1/service.lcd").LCDQueryClient;
                };
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/query.lcd").LCDQueryClient;
                };
            };
            cosmwasm: {
                wasm: {
                    v1: _232.LCDQueryClient;
                };
            };
        }>;
    };
}
