import * as _102 from "./wasm/v1/authz";
import * as _103 from "./wasm/v1/genesis";
import * as _104 from "./wasm/v1/ibc";
import * as _105 from "./wasm/v1/proposal";
import * as _106 from "./wasm/v1/query";
import * as _107 from "./wasm/v1/tx";
import * as _108 from "./wasm/v1/types";
import * as _233 from "./wasm/v1/query.lcd";
import * as _234 from "./wasm/v1/query.rpc.Query";
import * as _235 from "./wasm/v1/tx.rpc.msg";
export declare namespace cosmwasm {
    namespace wasm {
        const v1: {
            MsgClientImpl: typeof _235.MsgClientImpl;
            QueryClientImpl: typeof _234.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                contractInfo(request: _106.QueryContractInfoRequest): Promise<_106.QueryContractInfoResponse>;
                contractHistory(request: _106.QueryContractHistoryRequest): Promise<_106.QueryContractHistoryResponse>;
                contractsByCode(request: _106.QueryContractsByCodeRequest): Promise<_106.QueryContractsByCodeResponse>;
                allContractState(request: _106.QueryAllContractStateRequest): Promise<_106.QueryAllContractStateResponse>;
                rawContractState(request: _106.QueryRawContractStateRequest): Promise<_106.QueryRawContractStateResponse>;
                smartContractState(request: _106.QuerySmartContractStateRequest): Promise<_106.QuerySmartContractStateResponse>;
                code(request: _106.QueryCodeRequest): Promise<_106.QueryCodeResponse>;
                codes(request?: _106.QueryCodesRequest): Promise<_106.QueryCodesResponse>;
                pinnedCodes(request?: _106.QueryPinnedCodesRequest): Promise<_106.QueryPinnedCodesResponse>;
                params(request?: _106.QueryParamsRequest): Promise<_106.QueryParamsResponse>;
                contractsByCreator(request: _106.QueryContractsByCreatorRequest): Promise<_106.QueryContractsByCreatorResponse>;
            };
            LCDQueryClient: typeof _233.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    storeCode(value: _107.MsgStoreCode): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    instantiateContract(value: _107.MsgInstantiateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    instantiateContract2(value: _107.MsgInstantiateContract2): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    executeContract(value: _107.MsgExecuteContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    migrateContract(value: _107.MsgMigrateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateAdmin(value: _107.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    clearAdmin(value: _107.MsgClearAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateInstantiateConfig(value: _107.MsgUpdateInstantiateConfig): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _107.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    sudoContract(value: _107.MsgSudoContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    pinCodes(value: _107.MsgPinCodes): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    unpinCodes(value: _107.MsgUnpinCodes): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    storeAndInstantiateContract(value: _107.MsgStoreAndInstantiateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    storeCode(value: _107.MsgStoreCode): {
                        typeUrl: string;
                        value: _107.MsgStoreCode;
                    };
                    instantiateContract(value: _107.MsgInstantiateContract): {
                        typeUrl: string;
                        value: _107.MsgInstantiateContract;
                    };
                    instantiateContract2(value: _107.MsgInstantiateContract2): {
                        typeUrl: string;
                        value: _107.MsgInstantiateContract2;
                    };
                    executeContract(value: _107.MsgExecuteContract): {
                        typeUrl: string;
                        value: _107.MsgExecuteContract;
                    };
                    migrateContract(value: _107.MsgMigrateContract): {
                        typeUrl: string;
                        value: _107.MsgMigrateContract;
                    };
                    updateAdmin(value: _107.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: _107.MsgUpdateAdmin;
                    };
                    clearAdmin(value: _107.MsgClearAdmin): {
                        typeUrl: string;
                        value: _107.MsgClearAdmin;
                    };
                    updateInstantiateConfig(value: _107.MsgUpdateInstantiateConfig): {
                        typeUrl: string;
                        value: _107.MsgUpdateInstantiateConfig;
                    };
                    updateParams(value: _107.MsgUpdateParams): {
                        typeUrl: string;
                        value: _107.MsgUpdateParams;
                    };
                    sudoContract(value: _107.MsgSudoContract): {
                        typeUrl: string;
                        value: _107.MsgSudoContract;
                    };
                    pinCodes(value: _107.MsgPinCodes): {
                        typeUrl: string;
                        value: _107.MsgPinCodes;
                    };
                    unpinCodes(value: _107.MsgUnpinCodes): {
                        typeUrl: string;
                        value: _107.MsgUnpinCodes;
                    };
                    storeAndInstantiateContract(value: _107.MsgStoreAndInstantiateContract): {
                        typeUrl: string;
                        value: _107.MsgStoreAndInstantiateContract;
                    };
                };
                toJSON: {
                    storeCode(value: _107.MsgStoreCode): {
                        typeUrl: string;
                        value: unknown;
                    };
                    instantiateContract(value: _107.MsgInstantiateContract): {
                        typeUrl: string;
                        value: unknown;
                    };
                    instantiateContract2(value: _107.MsgInstantiateContract2): {
                        typeUrl: string;
                        value: unknown;
                    };
                    executeContract(value: _107.MsgExecuteContract): {
                        typeUrl: string;
                        value: unknown;
                    };
                    migrateContract(value: _107.MsgMigrateContract): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateAdmin(value: _107.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: unknown;
                    };
                    clearAdmin(value: _107.MsgClearAdmin): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateInstantiateConfig(value: _107.MsgUpdateInstantiateConfig): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateParams(value: _107.MsgUpdateParams): {
                        typeUrl: string;
                        value: unknown;
                    };
                    sudoContract(value: _107.MsgSudoContract): {
                        typeUrl: string;
                        value: unknown;
                    };
                    pinCodes(value: _107.MsgPinCodes): {
                        typeUrl: string;
                        value: unknown;
                    };
                    unpinCodes(value: _107.MsgUnpinCodes): {
                        typeUrl: string;
                        value: unknown;
                    };
                    storeAndInstantiateContract(value: _107.MsgStoreAndInstantiateContract): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    storeCode(value: any): {
                        typeUrl: string;
                        value: _107.MsgStoreCode;
                    };
                    instantiateContract(value: any): {
                        typeUrl: string;
                        value: _107.MsgInstantiateContract;
                    };
                    instantiateContract2(value: any): {
                        typeUrl: string;
                        value: _107.MsgInstantiateContract2;
                    };
                    executeContract(value: any): {
                        typeUrl: string;
                        value: _107.MsgExecuteContract;
                    };
                    migrateContract(value: any): {
                        typeUrl: string;
                        value: _107.MsgMigrateContract;
                    };
                    updateAdmin(value: any): {
                        typeUrl: string;
                        value: _107.MsgUpdateAdmin;
                    };
                    clearAdmin(value: any): {
                        typeUrl: string;
                        value: _107.MsgClearAdmin;
                    };
                    updateInstantiateConfig(value: any): {
                        typeUrl: string;
                        value: _107.MsgUpdateInstantiateConfig;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _107.MsgUpdateParams;
                    };
                    sudoContract(value: any): {
                        typeUrl: string;
                        value: _107.MsgSudoContract;
                    };
                    pinCodes(value: any): {
                        typeUrl: string;
                        value: _107.MsgPinCodes;
                    };
                    unpinCodes(value: any): {
                        typeUrl: string;
                        value: _107.MsgUnpinCodes;
                    };
                    storeAndInstantiateContract(value: any): {
                        typeUrl: string;
                        value: _107.MsgStoreAndInstantiateContract;
                    };
                };
                fromPartial: {
                    storeCode(value: _107.MsgStoreCode): {
                        typeUrl: string;
                        value: _107.MsgStoreCode;
                    };
                    instantiateContract(value: _107.MsgInstantiateContract): {
                        typeUrl: string;
                        value: _107.MsgInstantiateContract;
                    };
                    instantiateContract2(value: _107.MsgInstantiateContract2): {
                        typeUrl: string;
                        value: _107.MsgInstantiateContract2;
                    };
                    executeContract(value: _107.MsgExecuteContract): {
                        typeUrl: string;
                        value: _107.MsgExecuteContract;
                    };
                    migrateContract(value: _107.MsgMigrateContract): {
                        typeUrl: string;
                        value: _107.MsgMigrateContract;
                    };
                    updateAdmin(value: _107.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: _107.MsgUpdateAdmin;
                    };
                    clearAdmin(value: _107.MsgClearAdmin): {
                        typeUrl: string;
                        value: _107.MsgClearAdmin;
                    };
                    updateInstantiateConfig(value: _107.MsgUpdateInstantiateConfig): {
                        typeUrl: string;
                        value: _107.MsgUpdateInstantiateConfig;
                    };
                    updateParams(value: _107.MsgUpdateParams): {
                        typeUrl: string;
                        value: _107.MsgUpdateParams;
                    };
                    sudoContract(value: _107.MsgSudoContract): {
                        typeUrl: string;
                        value: _107.MsgSudoContract;
                    };
                    pinCodes(value: _107.MsgPinCodes): {
                        typeUrl: string;
                        value: _107.MsgPinCodes;
                    };
                    unpinCodes(value: _107.MsgUnpinCodes): {
                        typeUrl: string;
                        value: _107.MsgUnpinCodes;
                    };
                    storeAndInstantiateContract(value: _107.MsgStoreAndInstantiateContract): {
                        typeUrl: string;
                        value: _107.MsgStoreAndInstantiateContract;
                    };
                };
            };
            AminoConverter: {
                "/cosmwasm.wasm.v1.MsgStoreCode": {
                    aminoType: string;
                    toAmino: ({ sender, wasmByteCode, instantiatePermission }: _107.MsgStoreCode) => {
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
                    }) => _107.MsgStoreCode;
                };
                "/cosmwasm.wasm.v1.MsgInstantiateContract": {
                    aminoType: string;
                    toAmino: ({ sender, admin, codeId, label, msg, funds }: _107.MsgInstantiateContract) => {
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
                    }) => _107.MsgInstantiateContract;
                };
                "/cosmwasm.wasm.v1.MsgInstantiateContract2": {
                    aminoType: string;
                    toAmino: ({ sender, admin, codeId, label, msg, funds, salt, fixMsg }: _107.MsgInstantiateContract2) => {
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
                    }) => _107.MsgInstantiateContract2;
                };
                "/cosmwasm.wasm.v1.MsgExecuteContract": {
                    aminoType: string;
                    toAmino: ({ sender, contract, msg, funds }: _107.MsgExecuteContract) => {
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
                    }) => _107.MsgExecuteContract;
                };
                "/cosmwasm.wasm.v1.MsgMigrateContract": {
                    aminoType: string;
                    toAmino: ({ sender, contract, codeId, msg }: _107.MsgMigrateContract) => {
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
                    }) => _107.MsgMigrateContract;
                };
                "/cosmwasm.wasm.v1.MsgUpdateAdmin": {
                    aminoType: string;
                    toAmino: ({ sender, newAdmin, contract }: _107.MsgUpdateAdmin) => {
                        sender: string;
                        new_admin: string;
                        contract: string;
                    };
                    fromAmino: ({ sender, new_admin, contract }: {
                        sender: string;
                        new_admin: string;
                        contract: string;
                    }) => _107.MsgUpdateAdmin;
                };
                "/cosmwasm.wasm.v1.MsgClearAdmin": {
                    aminoType: string;
                    toAmino: ({ sender, contract }: _107.MsgClearAdmin) => {
                        sender: string;
                        contract: string;
                    };
                    fromAmino: ({ sender, contract }: {
                        sender: string;
                        contract: string;
                    }) => _107.MsgClearAdmin;
                };
                "/cosmwasm.wasm.v1.MsgUpdateInstantiateConfig": {
                    aminoType: string;
                    toAmino: ({ sender, codeId, newInstantiatePermission }: _107.MsgUpdateInstantiateConfig) => {
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
                    }) => _107.MsgUpdateInstantiateConfig;
                };
                "/cosmwasm.wasm.v1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: ({ authority, params }: _107.MsgUpdateParams) => {
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
                    }) => _107.MsgUpdateParams;
                };
                "/cosmwasm.wasm.v1.MsgSudoContract": {
                    aminoType: string;
                    toAmino: ({ authority, contract, msg }: _107.MsgSudoContract) => {
                        authority: string;
                        contract: string;
                        msg: Uint8Array;
                    };
                    fromAmino: ({ authority, contract, msg }: {
                        authority: string;
                        contract: string;
                        msg: Uint8Array;
                    }) => _107.MsgSudoContract;
                };
                "/cosmwasm.wasm.v1.MsgPinCodes": {
                    aminoType: string;
                    toAmino: ({ authority, codeIds }: _107.MsgPinCodes) => {
                        authority: string;
                        code_ids: string[];
                    };
                    fromAmino: ({ authority, code_ids }: {
                        authority: string;
                        code_ids: string[];
                    }) => _107.MsgPinCodes;
                };
                "/cosmwasm.wasm.v1.MsgUnpinCodes": {
                    aminoType: string;
                    toAmino: ({ authority, codeIds }: _107.MsgUnpinCodes) => {
                        authority: string;
                        code_ids: string[];
                    };
                    fromAmino: ({ authority, code_ids }: {
                        authority: string;
                        code_ids: string[];
                    }) => _107.MsgUnpinCodes;
                };
                "/cosmwasm.wasm.v1.MsgStoreAndInstantiateContract": {
                    aminoType: string;
                    toAmino: ({ authority, wasmByteCode, instantiatePermission, unpinCode, admin, label, msg, funds, source, builder, codeHash }: _107.MsgStoreAndInstantiateContract) => {
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
                    }) => _107.MsgStoreAndInstantiateContract;
                };
            };
            accessTypeFromJSON(object: any): _108.AccessType;
            accessTypeToJSON(object: _108.AccessType): string;
            contractCodeHistoryOperationTypeFromJSON(object: any): _108.ContractCodeHistoryOperationType;
            contractCodeHistoryOperationTypeToJSON(object: _108.ContractCodeHistoryOperationType): string;
            AccessType: typeof _108.AccessType;
            ContractCodeHistoryOperationType: typeof _108.ContractCodeHistoryOperationType;
            AccessTypeParam: {
                encode(message: _108.AccessTypeParam, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _108.AccessTypeParam;
                fromJSON(object: any): _108.AccessTypeParam;
                toJSON(message: _108.AccessTypeParam): unknown;
                fromPartial(object: {
                    value?: _108.AccessType;
                }): _108.AccessTypeParam;
            };
            AccessConfig: {
                encode(message: _108.AccessConfig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _108.AccessConfig;
                fromJSON(object: any): _108.AccessConfig;
                toJSON(message: _108.AccessConfig): unknown;
                fromPartial(object: {
                    permission?: _108.AccessType;
                    addresses?: string[];
                }): _108.AccessConfig;
            };
            Params: {
                encode(message: _108.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _108.Params;
                fromJSON(object: any): _108.Params;
                toJSON(message: _108.Params): unknown;
                fromPartial(object: {
                    codeUploadAccess?: {
                        permission?: _108.AccessType;
                        addresses?: string[];
                    };
                    instantiateDefaultPermission?: _108.AccessType;
                }): _108.Params;
            };
            CodeInfo: {
                encode(message: _108.CodeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _108.CodeInfo;
                fromJSON(object: any): _108.CodeInfo;
                toJSON(message: _108.CodeInfo): unknown;
                fromPartial(object: {
                    codeHash?: Uint8Array;
                    creator?: string;
                    instantiateConfig?: {
                        permission?: _108.AccessType;
                        addresses?: string[];
                    };
                }): _108.CodeInfo;
            };
            ContractInfo: {
                encode(message: _108.ContractInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _108.ContractInfo;
                fromJSON(object: any): _108.ContractInfo;
                toJSON(message: _108.ContractInfo): unknown;
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
                }): _108.ContractInfo;
            };
            ContractCodeHistoryEntry: {
                encode(message: _108.ContractCodeHistoryEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _108.ContractCodeHistoryEntry;
                fromJSON(object: any): _108.ContractCodeHistoryEntry;
                toJSON(message: _108.ContractCodeHistoryEntry): unknown;
                fromPartial(object: {
                    operation?: _108.ContractCodeHistoryOperationType;
                    codeId?: bigint;
                    updated?: {
                        blockHeight?: bigint;
                        txIndex?: bigint;
                    };
                    msg?: Uint8Array;
                }): _108.ContractCodeHistoryEntry;
            };
            AbsoluteTxPosition: {
                encode(message: _108.AbsoluteTxPosition, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _108.AbsoluteTxPosition;
                fromJSON(object: any): _108.AbsoluteTxPosition;
                toJSON(message: _108.AbsoluteTxPosition): unknown;
                fromPartial(object: {
                    blockHeight?: bigint;
                    txIndex?: bigint;
                }): _108.AbsoluteTxPosition;
            };
            Model: {
                encode(message: _108.Model, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _108.Model;
                fromJSON(object: any): _108.Model;
                toJSON(message: _108.Model): unknown;
                fromPartial(object: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                }): _108.Model;
            };
            Cosmwasm_wasmv1ContractInfoExtension_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            MsgStoreCode: {
                encode(message: _107.MsgStoreCode, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _107.MsgStoreCode;
                fromJSON(object: any): _107.MsgStoreCode;
                toJSON(message: _107.MsgStoreCode): unknown;
                fromPartial(object: {
                    sender?: string;
                    wasmByteCode?: Uint8Array;
                    instantiatePermission?: {
                        permission?: _108.AccessType;
                        addresses?: string[];
                    };
                }): _107.MsgStoreCode;
            };
            MsgStoreCodeResponse: {
                encode(message: _107.MsgStoreCodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _107.MsgStoreCodeResponse;
                fromJSON(object: any): _107.MsgStoreCodeResponse;
                toJSON(message: _107.MsgStoreCodeResponse): unknown;
                fromPartial(object: {
                    codeId?: bigint;
                    checksum?: Uint8Array;
                }): _107.MsgStoreCodeResponse;
            };
            MsgInstantiateContract: {
                encode(message: _107.MsgInstantiateContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _107.MsgInstantiateContract;
                fromJSON(object: any): _107.MsgInstantiateContract;
                toJSON(message: _107.MsgInstantiateContract): unknown;
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
                }): _107.MsgInstantiateContract;
            };
            MsgInstantiateContractResponse: {
                encode(message: _107.MsgInstantiateContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _107.MsgInstantiateContractResponse;
                fromJSON(object: any): _107.MsgInstantiateContractResponse;
                toJSON(message: _107.MsgInstantiateContractResponse): unknown;
                fromPartial(object: {
                    address?: string;
                    data?: Uint8Array;
                }): _107.MsgInstantiateContractResponse;
            };
            MsgInstantiateContract2: {
                encode(message: _107.MsgInstantiateContract2, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _107.MsgInstantiateContract2;
                fromJSON(object: any): _107.MsgInstantiateContract2;
                toJSON(message: _107.MsgInstantiateContract2): unknown;
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
                }): _107.MsgInstantiateContract2;
            };
            MsgInstantiateContract2Response: {
                encode(message: _107.MsgInstantiateContract2Response, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _107.MsgInstantiateContract2Response;
                fromJSON(object: any): _107.MsgInstantiateContract2Response;
                toJSON(message: _107.MsgInstantiateContract2Response): unknown;
                fromPartial(object: {
                    address?: string;
                    data?: Uint8Array;
                }): _107.MsgInstantiateContract2Response;
            };
            MsgExecuteContract: {
                encode(message: _107.MsgExecuteContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _107.MsgExecuteContract;
                fromJSON(object: any): _107.MsgExecuteContract;
                toJSON(message: _107.MsgExecuteContract): unknown;
                fromPartial(object: {
                    sender?: string;
                    contract?: string;
                    msg?: Uint8Array;
                    funds?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _107.MsgExecuteContract;
            };
            MsgExecuteContractResponse: {
                encode(message: _107.MsgExecuteContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _107.MsgExecuteContractResponse;
                fromJSON(object: any): _107.MsgExecuteContractResponse;
                toJSON(message: _107.MsgExecuteContractResponse): unknown;
                fromPartial(object: {
                    data?: Uint8Array;
                }): _107.MsgExecuteContractResponse;
            };
            MsgMigrateContract: {
                encode(message: _107.MsgMigrateContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _107.MsgMigrateContract;
                fromJSON(object: any): _107.MsgMigrateContract;
                toJSON(message: _107.MsgMigrateContract): unknown;
                fromPartial(object: {
                    sender?: string;
                    contract?: string;
                    codeId?: bigint;
                    msg?: Uint8Array;
                }): _107.MsgMigrateContract;
            };
            MsgMigrateContractResponse: {
                encode(message: _107.MsgMigrateContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _107.MsgMigrateContractResponse;
                fromJSON(object: any): _107.MsgMigrateContractResponse;
                toJSON(message: _107.MsgMigrateContractResponse): unknown;
                fromPartial(object: {
                    data?: Uint8Array;
                }): _107.MsgMigrateContractResponse;
            };
            MsgUpdateAdmin: {
                encode(message: _107.MsgUpdateAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _107.MsgUpdateAdmin;
                fromJSON(object: any): _107.MsgUpdateAdmin;
                toJSON(message: _107.MsgUpdateAdmin): unknown;
                fromPartial(object: {
                    sender?: string;
                    newAdmin?: string;
                    contract?: string;
                }): _107.MsgUpdateAdmin;
            };
            MsgUpdateAdminResponse: {
                encode(_: _107.MsgUpdateAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _107.MsgUpdateAdminResponse;
                fromJSON(_: any): _107.MsgUpdateAdminResponse;
                toJSON(_: _107.MsgUpdateAdminResponse): unknown;
                fromPartial(_: {}): _107.MsgUpdateAdminResponse;
            };
            MsgClearAdmin: {
                encode(message: _107.MsgClearAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _107.MsgClearAdmin;
                fromJSON(object: any): _107.MsgClearAdmin;
                toJSON(message: _107.MsgClearAdmin): unknown;
                fromPartial(object: {
                    sender?: string;
                    contract?: string;
                }): _107.MsgClearAdmin;
            };
            MsgClearAdminResponse: {
                encode(_: _107.MsgClearAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _107.MsgClearAdminResponse;
                fromJSON(_: any): _107.MsgClearAdminResponse;
                toJSON(_: _107.MsgClearAdminResponse): unknown;
                fromPartial(_: {}): _107.MsgClearAdminResponse;
            };
            MsgUpdateInstantiateConfig: {
                encode(message: _107.MsgUpdateInstantiateConfig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _107.MsgUpdateInstantiateConfig;
                fromJSON(object: any): _107.MsgUpdateInstantiateConfig;
                toJSON(message: _107.MsgUpdateInstantiateConfig): unknown;
                fromPartial(object: {
                    sender?: string;
                    codeId?: bigint;
                    newInstantiatePermission?: {
                        permission?: _108.AccessType;
                        addresses?: string[];
                    };
                }): _107.MsgUpdateInstantiateConfig;
            };
            MsgUpdateInstantiateConfigResponse: {
                encode(_: _107.MsgUpdateInstantiateConfigResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _107.MsgUpdateInstantiateConfigResponse;
                fromJSON(_: any): _107.MsgUpdateInstantiateConfigResponse;
                toJSON(_: _107.MsgUpdateInstantiateConfigResponse): unknown;
                fromPartial(_: {}): _107.MsgUpdateInstantiateConfigResponse;
            };
            MsgUpdateParams: {
                encode(message: _107.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _107.MsgUpdateParams;
                fromJSON(object: any): _107.MsgUpdateParams;
                toJSON(message: _107.MsgUpdateParams): unknown;
                fromPartial(object: {
                    authority?: string;
                    params?: {
                        codeUploadAccess?: {
                            permission?: _108.AccessType;
                            addresses?: string[];
                        };
                        instantiateDefaultPermission?: _108.AccessType;
                    };
                }): _107.MsgUpdateParams;
            };
            MsgUpdateParamsResponse: {
                encode(_: _107.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _107.MsgUpdateParamsResponse;
                fromJSON(_: any): _107.MsgUpdateParamsResponse;
                toJSON(_: _107.MsgUpdateParamsResponse): unknown;
                fromPartial(_: {}): _107.MsgUpdateParamsResponse;
            };
            MsgSudoContract: {
                encode(message: _107.MsgSudoContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _107.MsgSudoContract;
                fromJSON(object: any): _107.MsgSudoContract;
                toJSON(message: _107.MsgSudoContract): unknown;
                fromPartial(object: {
                    authority?: string;
                    contract?: string;
                    msg?: Uint8Array;
                }): _107.MsgSudoContract;
            };
            MsgSudoContractResponse: {
                encode(message: _107.MsgSudoContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _107.MsgSudoContractResponse;
                fromJSON(object: any): _107.MsgSudoContractResponse;
                toJSON(message: _107.MsgSudoContractResponse): unknown;
                fromPartial(object: {
                    data?: Uint8Array;
                }): _107.MsgSudoContractResponse;
            };
            MsgPinCodes: {
                encode(message: _107.MsgPinCodes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _107.MsgPinCodes;
                fromJSON(object: any): _107.MsgPinCodes;
                toJSON(message: _107.MsgPinCodes): unknown;
                fromPartial(object: {
                    authority?: string;
                    codeIds?: bigint[];
                }): _107.MsgPinCodes;
            };
            MsgPinCodesResponse: {
                encode(_: _107.MsgPinCodesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _107.MsgPinCodesResponse;
                fromJSON(_: any): _107.MsgPinCodesResponse;
                toJSON(_: _107.MsgPinCodesResponse): unknown;
                fromPartial(_: {}): _107.MsgPinCodesResponse;
            };
            MsgUnpinCodes: {
                encode(message: _107.MsgUnpinCodes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _107.MsgUnpinCodes;
                fromJSON(object: any): _107.MsgUnpinCodes;
                toJSON(message: _107.MsgUnpinCodes): unknown;
                fromPartial(object: {
                    authority?: string;
                    codeIds?: bigint[];
                }): _107.MsgUnpinCodes;
            };
            MsgUnpinCodesResponse: {
                encode(_: _107.MsgUnpinCodesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _107.MsgUnpinCodesResponse;
                fromJSON(_: any): _107.MsgUnpinCodesResponse;
                toJSON(_: _107.MsgUnpinCodesResponse): unknown;
                fromPartial(_: {}): _107.MsgUnpinCodesResponse;
            };
            MsgStoreAndInstantiateContract: {
                encode(message: _107.MsgStoreAndInstantiateContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _107.MsgStoreAndInstantiateContract;
                fromJSON(object: any): _107.MsgStoreAndInstantiateContract;
                toJSON(message: _107.MsgStoreAndInstantiateContract): unknown;
                fromPartial(object: {
                    authority?: string;
                    wasmByteCode?: Uint8Array;
                    instantiatePermission?: {
                        permission?: _108.AccessType;
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
                }): _107.MsgStoreAndInstantiateContract;
            };
            MsgStoreAndInstantiateContractResponse: {
                encode(message: _107.MsgStoreAndInstantiateContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _107.MsgStoreAndInstantiateContractResponse;
                fromJSON(object: any): _107.MsgStoreAndInstantiateContractResponse;
                toJSON(message: _107.MsgStoreAndInstantiateContractResponse): unknown;
                fromPartial(object: {
                    address?: string;
                    data?: Uint8Array;
                }): _107.MsgStoreAndInstantiateContractResponse;
            };
            QueryContractInfoRequest: {
                encode(message: _106.QueryContractInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _106.QueryContractInfoRequest;
                fromJSON(object: any): _106.QueryContractInfoRequest;
                toJSON(message: _106.QueryContractInfoRequest): unknown;
                fromPartial(object: {
                    address?: string;
                }): _106.QueryContractInfoRequest;
            };
            QueryContractInfoResponse: {
                encode(message: _106.QueryContractInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _106.QueryContractInfoResponse;
                fromJSON(object: any): _106.QueryContractInfoResponse;
                toJSON(message: _106.QueryContractInfoResponse): unknown;
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
                }): _106.QueryContractInfoResponse;
            };
            QueryContractHistoryRequest: {
                encode(message: _106.QueryContractHistoryRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _106.QueryContractHistoryRequest;
                fromJSON(object: any): _106.QueryContractHistoryRequest;
                toJSON(message: _106.QueryContractHistoryRequest): unknown;
                fromPartial(object: {
                    address?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: bigint;
                        limit?: bigint;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _106.QueryContractHistoryRequest;
            };
            QueryContractHistoryResponse: {
                encode(message: _106.QueryContractHistoryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _106.QueryContractHistoryResponse;
                fromJSON(object: any): _106.QueryContractHistoryResponse;
                toJSON(message: _106.QueryContractHistoryResponse): unknown;
                fromPartial(object: {
                    entries?: {
                        operation?: _108.ContractCodeHistoryOperationType;
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
                }): _106.QueryContractHistoryResponse;
            };
            QueryContractsByCodeRequest: {
                encode(message: _106.QueryContractsByCodeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _106.QueryContractsByCodeRequest;
                fromJSON(object: any): _106.QueryContractsByCodeRequest;
                toJSON(message: _106.QueryContractsByCodeRequest): unknown;
                fromPartial(object: {
                    codeId?: bigint;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: bigint;
                        limit?: bigint;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _106.QueryContractsByCodeRequest;
            };
            QueryContractsByCodeResponse: {
                encode(message: _106.QueryContractsByCodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _106.QueryContractsByCodeResponse;
                fromJSON(object: any): _106.QueryContractsByCodeResponse;
                toJSON(message: _106.QueryContractsByCodeResponse): unknown;
                fromPartial(object: {
                    contracts?: string[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: bigint;
                    };
                }): _106.QueryContractsByCodeResponse;
            };
            QueryAllContractStateRequest: {
                encode(message: _106.QueryAllContractStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _106.QueryAllContractStateRequest;
                fromJSON(object: any): _106.QueryAllContractStateRequest;
                toJSON(message: _106.QueryAllContractStateRequest): unknown;
                fromPartial(object: {
                    address?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: bigint;
                        limit?: bigint;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _106.QueryAllContractStateRequest;
            };
            QueryAllContractStateResponse: {
                encode(message: _106.QueryAllContractStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _106.QueryAllContractStateResponse;
                fromJSON(object: any): _106.QueryAllContractStateResponse;
                toJSON(message: _106.QueryAllContractStateResponse): unknown;
                fromPartial(object: {
                    models?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: bigint;
                    };
                }): _106.QueryAllContractStateResponse;
            };
            QueryRawContractStateRequest: {
                encode(message: _106.QueryRawContractStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _106.QueryRawContractStateRequest;
                fromJSON(object: any): _106.QueryRawContractStateRequest;
                toJSON(message: _106.QueryRawContractStateRequest): unknown;
                fromPartial(object: {
                    address?: string;
                    queryData?: Uint8Array;
                }): _106.QueryRawContractStateRequest;
            };
            QueryRawContractStateResponse: {
                encode(message: _106.QueryRawContractStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _106.QueryRawContractStateResponse;
                fromJSON(object: any): _106.QueryRawContractStateResponse;
                toJSON(message: _106.QueryRawContractStateResponse): unknown;
                fromPartial(object: {
                    data?: Uint8Array;
                }): _106.QueryRawContractStateResponse;
            };
            QuerySmartContractStateRequest: {
                encode(message: _106.QuerySmartContractStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _106.QuerySmartContractStateRequest;
                fromJSON(object: any): _106.QuerySmartContractStateRequest;
                toJSON(message: _106.QuerySmartContractStateRequest): unknown;
                fromPartial(object: {
                    address?: string;
                    queryData?: Uint8Array;
                }): _106.QuerySmartContractStateRequest;
            };
            QuerySmartContractStateResponse: {
                encode(message: _106.QuerySmartContractStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _106.QuerySmartContractStateResponse;
                fromJSON(object: any): _106.QuerySmartContractStateResponse;
                toJSON(message: _106.QuerySmartContractStateResponse): unknown;
                fromPartial(object: {
                    data?: Uint8Array;
                }): _106.QuerySmartContractStateResponse;
            };
            QueryCodeRequest: {
                encode(message: _106.QueryCodeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _106.QueryCodeRequest;
                fromJSON(object: any): _106.QueryCodeRequest;
                toJSON(message: _106.QueryCodeRequest): unknown;
                fromPartial(object: {
                    codeId?: bigint;
                }): _106.QueryCodeRequest;
            };
            CodeInfoResponse: {
                encode(message: _106.CodeInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _106.CodeInfoResponse;
                fromJSON(object: any): _106.CodeInfoResponse;
                toJSON(message: _106.CodeInfoResponse): unknown;
                fromPartial(object: {
                    codeId?: bigint;
                    creator?: string;
                    dataHash?: Uint8Array;
                    instantiatePermission?: {
                        permission?: _108.AccessType;
                        addresses?: string[];
                    };
                }): _106.CodeInfoResponse;
            };
            QueryCodeResponse: {
                encode(message: _106.QueryCodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _106.QueryCodeResponse;
                fromJSON(object: any): _106.QueryCodeResponse;
                toJSON(message: _106.QueryCodeResponse): unknown;
                fromPartial(object: {
                    codeInfo?: {
                        codeId?: bigint;
                        creator?: string;
                        dataHash?: Uint8Array;
                        instantiatePermission?: {
                            permission?: _108.AccessType;
                            addresses?: string[];
                        };
                    };
                    data?: Uint8Array;
                }): _106.QueryCodeResponse;
            };
            QueryCodesRequest: {
                encode(message: _106.QueryCodesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _106.QueryCodesRequest;
                fromJSON(object: any): _106.QueryCodesRequest;
                toJSON(message: _106.QueryCodesRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: bigint;
                        limit?: bigint;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _106.QueryCodesRequest;
            };
            QueryCodesResponse: {
                encode(message: _106.QueryCodesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _106.QueryCodesResponse;
                fromJSON(object: any): _106.QueryCodesResponse;
                toJSON(message: _106.QueryCodesResponse): unknown;
                fromPartial(object: {
                    codeInfos?: {
                        codeId?: bigint;
                        creator?: string;
                        dataHash?: Uint8Array;
                        instantiatePermission?: {
                            permission?: _108.AccessType;
                            addresses?: string[];
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: bigint;
                    };
                }): _106.QueryCodesResponse;
            };
            QueryPinnedCodesRequest: {
                encode(message: _106.QueryPinnedCodesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _106.QueryPinnedCodesRequest;
                fromJSON(object: any): _106.QueryPinnedCodesRequest;
                toJSON(message: _106.QueryPinnedCodesRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: bigint;
                        limit?: bigint;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _106.QueryPinnedCodesRequest;
            };
            QueryPinnedCodesResponse: {
                encode(message: _106.QueryPinnedCodesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _106.QueryPinnedCodesResponse;
                fromJSON(object: any): _106.QueryPinnedCodesResponse;
                toJSON(message: _106.QueryPinnedCodesResponse): unknown;
                fromPartial(object: {
                    codeIds?: bigint[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: bigint;
                    };
                }): _106.QueryPinnedCodesResponse;
            };
            QueryParamsRequest: {
                encode(_: _106.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _106.QueryParamsRequest;
                fromJSON(_: any): _106.QueryParamsRequest;
                toJSON(_: _106.QueryParamsRequest): unknown;
                fromPartial(_: {}): _106.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _106.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _106.QueryParamsResponse;
                fromJSON(object: any): _106.QueryParamsResponse;
                toJSON(message: _106.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        codeUploadAccess?: {
                            permission?: _108.AccessType;
                            addresses?: string[];
                        };
                        instantiateDefaultPermission?: _108.AccessType;
                    };
                }): _106.QueryParamsResponse;
            };
            QueryContractsByCreatorRequest: {
                encode(message: _106.QueryContractsByCreatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _106.QueryContractsByCreatorRequest;
                fromJSON(object: any): _106.QueryContractsByCreatorRequest;
                toJSON(message: _106.QueryContractsByCreatorRequest): unknown;
                fromPartial(object: {
                    creatorAddress?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: bigint;
                        limit?: bigint;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _106.QueryContractsByCreatorRequest;
            };
            QueryContractsByCreatorResponse: {
                encode(message: _106.QueryContractsByCreatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _106.QueryContractsByCreatorResponse;
                fromJSON(object: any): _106.QueryContractsByCreatorResponse;
                toJSON(message: _106.QueryContractsByCreatorResponse): unknown;
                fromPartial(object: {
                    contractAddresses?: string[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: bigint;
                    };
                }): _106.QueryContractsByCreatorResponse;
            };
            StoreCodeProposal: {
                encode(message: _105.StoreCodeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _105.StoreCodeProposal;
                fromJSON(object: any): _105.StoreCodeProposal;
                toJSON(message: _105.StoreCodeProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    runAs?: string;
                    wasmByteCode?: Uint8Array;
                    instantiatePermission?: {
                        permission?: _108.AccessType;
                        addresses?: string[];
                    };
                    unpinCode?: boolean;
                    source?: string;
                    builder?: string;
                    codeHash?: Uint8Array;
                }): _105.StoreCodeProposal;
            };
            InstantiateContractProposal: {
                encode(message: _105.InstantiateContractProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _105.InstantiateContractProposal;
                fromJSON(object: any): _105.InstantiateContractProposal;
                toJSON(message: _105.InstantiateContractProposal): unknown;
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
                }): _105.InstantiateContractProposal;
            };
            InstantiateContract2Proposal: {
                encode(message: _105.InstantiateContract2Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _105.InstantiateContract2Proposal;
                fromJSON(object: any): _105.InstantiateContract2Proposal;
                toJSON(message: _105.InstantiateContract2Proposal): unknown;
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
                }): _105.InstantiateContract2Proposal;
            };
            MigrateContractProposal: {
                encode(message: _105.MigrateContractProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _105.MigrateContractProposal;
                fromJSON(object: any): _105.MigrateContractProposal;
                toJSON(message: _105.MigrateContractProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    contract?: string;
                    codeId?: bigint;
                    msg?: Uint8Array;
                }): _105.MigrateContractProposal;
            };
            SudoContractProposal: {
                encode(message: _105.SudoContractProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _105.SudoContractProposal;
                fromJSON(object: any): _105.SudoContractProposal;
                toJSON(message: _105.SudoContractProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    contract?: string;
                    msg?: Uint8Array;
                }): _105.SudoContractProposal;
            };
            ExecuteContractProposal: {
                encode(message: _105.ExecuteContractProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _105.ExecuteContractProposal;
                fromJSON(object: any): _105.ExecuteContractProposal;
                toJSON(message: _105.ExecuteContractProposal): unknown;
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
                }): _105.ExecuteContractProposal;
            };
            UpdateAdminProposal: {
                encode(message: _105.UpdateAdminProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _105.UpdateAdminProposal;
                fromJSON(object: any): _105.UpdateAdminProposal;
                toJSON(message: _105.UpdateAdminProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    newAdmin?: string;
                    contract?: string;
                }): _105.UpdateAdminProposal;
            };
            ClearAdminProposal: {
                encode(message: _105.ClearAdminProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _105.ClearAdminProposal;
                fromJSON(object: any): _105.ClearAdminProposal;
                toJSON(message: _105.ClearAdminProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    contract?: string;
                }): _105.ClearAdminProposal;
            };
            PinCodesProposal: {
                encode(message: _105.PinCodesProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _105.PinCodesProposal;
                fromJSON(object: any): _105.PinCodesProposal;
                toJSON(message: _105.PinCodesProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    codeIds?: bigint[];
                }): _105.PinCodesProposal;
            };
            UnpinCodesProposal: {
                encode(message: _105.UnpinCodesProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _105.UnpinCodesProposal;
                fromJSON(object: any): _105.UnpinCodesProposal;
                toJSON(message: _105.UnpinCodesProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    codeIds?: bigint[];
                }): _105.UnpinCodesProposal;
            };
            AccessConfigUpdate: {
                encode(message: _105.AccessConfigUpdate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _105.AccessConfigUpdate;
                fromJSON(object: any): _105.AccessConfigUpdate;
                toJSON(message: _105.AccessConfigUpdate): unknown;
                fromPartial(object: {
                    codeId?: bigint;
                    instantiatePermission?: {
                        permission?: _108.AccessType;
                        addresses?: string[];
                    };
                }): _105.AccessConfigUpdate;
            };
            UpdateInstantiateConfigProposal: {
                encode(message: _105.UpdateInstantiateConfigProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _105.UpdateInstantiateConfigProposal;
                fromJSON(object: any): _105.UpdateInstantiateConfigProposal;
                toJSON(message: _105.UpdateInstantiateConfigProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    accessConfigUpdates?: {
                        codeId?: bigint;
                        instantiatePermission?: {
                            permission?: _108.AccessType;
                            addresses?: string[];
                        };
                    }[];
                }): _105.UpdateInstantiateConfigProposal;
            };
            StoreAndInstantiateContractProposal: {
                encode(message: _105.StoreAndInstantiateContractProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _105.StoreAndInstantiateContractProposal;
                fromJSON(object: any): _105.StoreAndInstantiateContractProposal;
                toJSON(message: _105.StoreAndInstantiateContractProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    runAs?: string;
                    wasmByteCode?: Uint8Array;
                    instantiatePermission?: {
                        permission?: _108.AccessType;
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
                }): _105.StoreAndInstantiateContractProposal;
            };
            MsgIBCSend: {
                encode(message: _104.MsgIBCSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _104.MsgIBCSend;
                fromJSON(object: any): _104.MsgIBCSend;
                toJSON(message: _104.MsgIBCSend): unknown;
                fromPartial(object: {
                    channel?: string;
                    timeoutHeight?: bigint;
                    timeoutTimestamp?: bigint;
                    data?: Uint8Array;
                }): _104.MsgIBCSend;
            };
            MsgIBCSendResponse: {
                encode(message: _104.MsgIBCSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _104.MsgIBCSendResponse;
                fromJSON(object: any): _104.MsgIBCSendResponse;
                toJSON(message: _104.MsgIBCSendResponse): unknown;
                fromPartial(object: {
                    sequence?: bigint;
                }): _104.MsgIBCSendResponse;
            };
            MsgIBCCloseChannel: {
                encode(message: _104.MsgIBCCloseChannel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _104.MsgIBCCloseChannel;
                fromJSON(object: any): _104.MsgIBCCloseChannel;
                toJSON(message: _104.MsgIBCCloseChannel): unknown;
                fromPartial(object: {
                    channel?: string;
                }): _104.MsgIBCCloseChannel;
            };
            GenesisState: {
                encode(message: _103.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _103.GenesisState;
                fromJSON(object: any): _103.GenesisState;
                toJSON(message: _103.GenesisState): unknown;
                fromPartial(object: {
                    params?: {
                        codeUploadAccess?: {
                            permission?: _108.AccessType;
                            addresses?: string[];
                        };
                        instantiateDefaultPermission?: _108.AccessType;
                    };
                    codes?: {
                        codeId?: bigint;
                        codeInfo?: {
                            codeHash?: Uint8Array;
                            creator?: string;
                            instantiateConfig?: {
                                permission?: _108.AccessType;
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
                            operation?: _108.ContractCodeHistoryOperationType;
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
                }): _103.GenesisState;
            };
            Code: {
                encode(message: _103.Code, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _103.Code;
                fromJSON(object: any): _103.Code;
                toJSON(message: _103.Code): unknown;
                fromPartial(object: {
                    codeId?: bigint;
                    codeInfo?: {
                        codeHash?: Uint8Array;
                        creator?: string;
                        instantiateConfig?: {
                            permission?: _108.AccessType;
                            addresses?: string[];
                        };
                    };
                    codeBytes?: Uint8Array;
                    pinned?: boolean;
                }): _103.Code;
            };
            Contract: {
                encode(message: _103.Contract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _103.Contract;
                fromJSON(object: any): _103.Contract;
                toJSON(message: _103.Contract): unknown;
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
                        operation?: _108.ContractCodeHistoryOperationType;
                        codeId?: bigint;
                        updated?: {
                            blockHeight?: bigint;
                            txIndex?: bigint;
                        };
                        msg?: Uint8Array;
                    }[];
                }): _103.Contract;
            };
            Sequence: {
                encode(message: _103.Sequence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _103.Sequence;
                fromJSON(object: any): _103.Sequence;
                toJSON(message: _103.Sequence): unknown;
                fromPartial(object: {
                    idKey?: Uint8Array;
                    value?: bigint;
                }): _103.Sequence;
            };
            ContractExecutionAuthorization: {
                encode(message: _102.ContractExecutionAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _102.ContractExecutionAuthorization;
                fromJSON(object: any): _102.ContractExecutionAuthorization;
                toJSON(message: _102.ContractExecutionAuthorization): unknown;
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
                }): _102.ContractExecutionAuthorization;
            };
            ContractMigrationAuthorization: {
                encode(message: _102.ContractMigrationAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _102.ContractMigrationAuthorization;
                fromJSON(object: any): _102.ContractMigrationAuthorization;
                toJSON(message: _102.ContractMigrationAuthorization): unknown;
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
                }): _102.ContractMigrationAuthorization;
            };
            ContractGrant: {
                encode(message: _102.ContractGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _102.ContractGrant;
                fromJSON(object: any): _102.ContractGrant;
                toJSON(message: _102.ContractGrant): unknown;
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
                }): _102.ContractGrant;
            };
            MaxCallsLimit: {
                encode(message: _102.MaxCallsLimit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _102.MaxCallsLimit;
                fromJSON(object: any): _102.MaxCallsLimit;
                toJSON(message: _102.MaxCallsLimit): unknown;
                fromPartial(object: {
                    remaining?: bigint;
                }): _102.MaxCallsLimit;
            };
            MaxFundsLimit: {
                encode(message: _102.MaxFundsLimit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _102.MaxFundsLimit;
                fromJSON(object: any): _102.MaxFundsLimit;
                toJSON(message: _102.MaxFundsLimit): unknown;
                fromPartial(object: {
                    amounts?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _102.MaxFundsLimit;
            };
            CombinedLimit: {
                encode(message: _102.CombinedLimit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _102.CombinedLimit;
                fromJSON(object: any): _102.CombinedLimit;
                toJSON(message: _102.CombinedLimit): unknown;
                fromPartial(object: {
                    callsRemaining?: bigint;
                    amounts?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _102.CombinedLimit;
            };
            AllowAllMessagesFilter: {
                encode(_: _102.AllowAllMessagesFilter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _102.AllowAllMessagesFilter;
                fromJSON(_: any): _102.AllowAllMessagesFilter;
                toJSON(_: _102.AllowAllMessagesFilter): unknown;
                fromPartial(_: {}): _102.AllowAllMessagesFilter;
            };
            AcceptedMessageKeysFilter: {
                encode(message: _102.AcceptedMessageKeysFilter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _102.AcceptedMessageKeysFilter;
                fromJSON(object: any): _102.AcceptedMessageKeysFilter;
                toJSON(message: _102.AcceptedMessageKeysFilter): unknown;
                fromPartial(object: {
                    keys?: string[];
                }): _102.AcceptedMessageKeysFilter;
            };
            AcceptedMessagesFilter: {
                encode(message: _102.AcceptedMessagesFilter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _102.AcceptedMessagesFilter;
                fromJSON(object: any): _102.AcceptedMessagesFilter;
                toJSON(message: _102.AcceptedMessagesFilter): unknown;
                fromPartial(object: {
                    messages?: Uint8Array[];
                }): _102.AcceptedMessagesFilter;
            };
            Cosmwasm_wasmv1ContractAuthzLimitX_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _102.MaxCallsLimit | _102.MaxFundsLimit | _102.CombinedLimit;
            Cosmwasm_wasmv1ContractAuthzFilterX_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _102.AllowAllMessagesFilter | _102.AcceptedMessageKeysFilter | _102.AcceptedMessagesFilter;
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
                    v1: _235.MsgClientImpl;
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
                        contractInfo(request: _106.QueryContractInfoRequest): Promise<_106.QueryContractInfoResponse>;
                        contractHistory(request: _106.QueryContractHistoryRequest): Promise<_106.QueryContractHistoryResponse>;
                        contractsByCode(request: _106.QueryContractsByCodeRequest): Promise<_106.QueryContractsByCodeResponse>;
                        allContractState(request: _106.QueryAllContractStateRequest): Promise<_106.QueryAllContractStateResponse>;
                        rawContractState(request: _106.QueryRawContractStateRequest): Promise<_106.QueryRawContractStateResponse>;
                        smartContractState(request: _106.QuerySmartContractStateRequest): Promise<_106.QuerySmartContractStateResponse>;
                        code(request: _106.QueryCodeRequest): Promise<_106.QueryCodeResponse>;
                        codes(request?: _106.QueryCodesRequest): Promise<_106.QueryCodesResponse>;
                        pinnedCodes(request?: _106.QueryPinnedCodesRequest): Promise<_106.QueryPinnedCodesResponse>;
                        params(request?: _106.QueryParamsRequest): Promise<_106.QueryParamsResponse>;
                        contractsByCreator(request: _106.QueryContractsByCreatorRequest): Promise<_106.QueryContractsByCreatorResponse>;
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
                    v1: _233.LCDQueryClient;
                };
            };
        }>;
    };
}
