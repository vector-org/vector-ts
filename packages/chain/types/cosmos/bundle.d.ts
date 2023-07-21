import * as _14 from "./app/runtime/v1alpha1/module";
import * as _15 from "./auth/module/v1/module";
import * as _16 from "./auth/v1beta1/auth";
import * as _17 from "./auth/v1beta1/genesis";
import * as _18 from "./auth/v1beta1/query";
import * as _19 from "./auth/v1beta1/tx";
import * as _20 from "./authz/module/v1/module";
import * as _21 from "./authz/v1beta1/authz";
import * as _22 from "./authz/v1beta1/event";
import * as _23 from "./authz/v1beta1/genesis";
import * as _24 from "./authz/v1beta1/query";
import * as _25 from "./authz/v1beta1/tx";
import * as _26 from "./autocli/v1/options";
import * as _27 from "./autocli/v1/query";
import * as _28 from "./bank/module/v1/module";
import * as _29 from "./bank/v1beta1/authz";
import * as _30 from "./bank/v1beta1/bank";
import * as _31 from "./bank/v1beta1/genesis";
import * as _32 from "./bank/v1beta1/query";
import * as _33 from "./bank/v1beta1/tx";
import * as _34 from "./base/abci/v1beta1/abci";
import * as _35 from "./base/node/v1beta1/query";
import * as _36 from "./base/query/v1beta1/pagination";
import * as _37 from "./base/reflection/v2alpha1/reflection";
import * as _38 from "./base/v1beta1/coin";
import * as _39 from "./capability/module/v1/module";
import * as _40 from "./consensus/module/v1/module";
import * as _41 from "./consensus/v1/query";
import * as _42 from "./consensus/v1/tx";
import * as _43 from "./crisis/module/v1/module";
import * as _44 from "./crypto/ed25519/keys";
import * as _45 from "./crypto/hd/v1/hd";
import * as _46 from "./crypto/keyring/v1/record";
import * as _47 from "./crypto/multisig/keys";
import * as _48 from "./crypto/secp256k1/keys";
import * as _49 from "./crypto/secp256r1/keys";
import * as _50 from "./distribution/module/v1/module";
import * as _51 from "./distribution/v1beta1/distribution";
import * as _52 from "./distribution/v1beta1/genesis";
import * as _53 from "./distribution/v1beta1/query";
import * as _54 from "./distribution/v1beta1/tx";
import * as _55 from "./evidence/module/v1/module";
import * as _56 from "./feegrant/module/v1/module";
import * as _57 from "./feegrant/v1beta1/feegrant";
import * as _58 from "./feegrant/v1beta1/genesis";
import * as _59 from "./feegrant/v1beta1/query";
import * as _60 from "./feegrant/v1beta1/tx";
import * as _61 from "./genutil/module/v1/module";
import * as _62 from "./gov/module/v1/module";
import * as _63 from "./gov/v1/genesis";
import * as _64 from "./gov/v1/gov";
import * as _65 from "./gov/v1/query";
import * as _66 from "./gov/v1/tx";
import * as _67 from "./gov/v1beta1/genesis";
import * as _68 from "./gov/v1beta1/gov";
import * as _69 from "./gov/v1beta1/query";
import * as _70 from "./gov/v1beta1/tx";
import * as _71 from "./group/module/v1/module";
import * as _72 from "./mint/module/v1/module";
import * as _73 from "./nft/module/v1/module";
import * as _74 from "./nft/v1beta1/event";
import * as _75 from "./nft/v1beta1/genesis";
import * as _76 from "./nft/v1beta1/nft";
import * as _77 from "./nft/v1beta1/query";
import * as _78 from "./nft/v1beta1/tx";
import * as _79 from "./orm/module/v1alpha1/module";
import * as _80 from "./orm/query/v1alpha1/query";
import * as _81 from "./params/module/v1/module";
import * as _82 from "./params/v1beta1/params";
import * as _83 from "./params/v1beta1/query";
import * as _85 from "./reflection/v1/reflection";
import * as _86 from "./slashing/module/v1/module";
import * as _87 from "./staking/module/v1/module";
import * as _88 from "./staking/v1beta1/authz";
import * as _89 from "./staking/v1beta1/genesis";
import * as _90 from "./staking/v1beta1/query";
import * as _91 from "./staking/v1beta1/staking";
import * as _92 from "./staking/v1beta1/tx";
import * as _93 from "./tx/config/v1/config";
import * as _94 from "./tx/signing/v1beta1/signing";
import * as _95 from "./tx/v1beta1/service";
import * as _96 from "./tx/v1beta1/tx";
import * as _97 from "./upgrade/module/v1/module";
import * as _98 from "./upgrade/v1beta1/query";
import * as _99 from "./upgrade/v1beta1/tx";
import * as _100 from "./upgrade/v1beta1/upgrade";
import * as _101 from "./vesting/module/v1/module";
import * as _190 from "./auth/v1beta1/query.lcd";
import * as _191 from "./authz/v1beta1/query.lcd";
import * as _192 from "./bank/v1beta1/query.lcd";
import * as _193 from "./base/node/v1beta1/query.lcd";
import * as _194 from "./consensus/v1/query.lcd";
import * as _195 from "./distribution/v1beta1/query.lcd";
import * as _196 from "./feegrant/v1beta1/query.lcd";
import * as _197 from "./gov/v1/query.lcd";
import * as _198 from "./gov/v1beta1/query.lcd";
import * as _199 from "./nft/v1beta1/query.lcd";
import * as _200 from "./params/v1beta1/query.lcd";
import * as _201 from "./staking/v1beta1/query.lcd";
import * as _202 from "./tx/v1beta1/service.lcd";
import * as _203 from "./upgrade/v1beta1/query.lcd";
import * as _204 from "./auth/v1beta1/query.rpc.Query";
import * as _205 from "./authz/v1beta1/query.rpc.Query";
import * as _206 from "./autocli/v1/query.rpc.Query";
import * as _207 from "./bank/v1beta1/query.rpc.Query";
import * as _208 from "./base/node/v1beta1/query.rpc.Service";
import * as _209 from "./consensus/v1/query.rpc.Query";
import * as _210 from "./distribution/v1beta1/query.rpc.Query";
import * as _211 from "./feegrant/v1beta1/query.rpc.Query";
import * as _212 from "./gov/v1/query.rpc.Query";
import * as _213 from "./gov/v1beta1/query.rpc.Query";
import * as _214 from "./nft/v1beta1/query.rpc.Query";
import * as _215 from "./orm/query/v1alpha1/query.rpc.Query";
import * as _216 from "./params/v1beta1/query.rpc.Query";
import * as _217 from "./staking/v1beta1/query.rpc.Query";
import * as _218 from "./tx/v1beta1/service.rpc.Service";
import * as _219 from "./upgrade/v1beta1/query.rpc.Query";
import * as _220 from "./auth/v1beta1/tx.rpc.msg";
import * as _221 from "./authz/v1beta1/tx.rpc.msg";
import * as _222 from "./bank/v1beta1/tx.rpc.msg";
import * as _223 from "./consensus/v1/tx.rpc.msg";
import * as _224 from "./distribution/v1beta1/tx.rpc.msg";
import * as _225 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _226 from "./gov/v1/tx.rpc.msg";
import * as _227 from "./gov/v1beta1/tx.rpc.msg";
import * as _228 from "./nft/v1beta1/tx.rpc.msg";
import * as _229 from "./staking/v1beta1/tx.rpc.msg";
import * as _230 from "./upgrade/v1beta1/tx.rpc.msg";
export declare namespace cosmos {
    namespace app {
        namespace runtime {
            const v1alpha1: {
                Module: {
                    encode(message: _14.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _14.Module;
                    fromJSON(object: any): _14.Module;
                    toJSON(message: _14.Module): unknown;
                    fromPartial(object: {
                        appName?: string;
                        beginBlockers?: string[];
                        endBlockers?: string[];
                        initGenesis?: string[];
                        exportGenesis?: string[];
                        overrideStoreKeys?: {
                            moduleName?: string;
                            kvStoreKey?: string;
                        }[];
                    }): _14.Module;
                };
                StoreKeyConfig: {
                    encode(message: _14.StoreKeyConfig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _14.StoreKeyConfig;
                    fromJSON(object: any): _14.StoreKeyConfig;
                    toJSON(message: _14.StoreKeyConfig): unknown;
                    fromPartial(object: {
                        moduleName?: string;
                        kvStoreKey?: string;
                    }): _14.StoreKeyConfig;
                };
            };
        }
    }
    namespace auth {
        namespace module {
            const v1: {
                Module: {
                    encode(message: _15.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _15.Module;
                    fromJSON(object: any): _15.Module;
                    toJSON(message: _15.Module): unknown;
                    fromPartial(object: {
                        bech32Prefix?: string;
                        moduleAccountPermissions?: {
                            account?: string;
                            permissions?: string[];
                        }[];
                        authority?: string;
                    }): _15.Module;
                };
                ModuleAccountPermission: {
                    encode(message: _15.ModuleAccountPermission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _15.ModuleAccountPermission;
                    fromJSON(object: any): _15.ModuleAccountPermission;
                    toJSON(message: _15.ModuleAccountPermission): unknown;
                    fromPartial(object: {
                        account?: string;
                        permissions?: string[];
                    }): _15.ModuleAccountPermission;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _220.MsgClientImpl;
            QueryClientImpl: typeof _204.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                accounts(request?: _18.QueryAccountsRequest): Promise<_18.QueryAccountsResponse>;
                account(request: _18.QueryAccountRequest): Promise<_18.QueryAccountResponse>;
                accountAddressByID(request: _18.QueryAccountAddressByIDRequest): Promise<_18.QueryAccountAddressByIDResponse>;
                params(request?: _18.QueryParamsRequest): Promise<_18.QueryParamsResponse>;
                moduleAccounts(request?: _18.QueryModuleAccountsRequest): Promise<_18.QueryModuleAccountsResponse>;
                moduleAccountByName(request: _18.QueryModuleAccountByNameRequest): Promise<_18.QueryModuleAccountByNameResponse>;
                bech32Prefix(request?: _18.Bech32PrefixRequest): Promise<_18.Bech32PrefixResponse>;
                addressBytesToString(request: _18.AddressBytesToStringRequest): Promise<_18.AddressBytesToStringResponse>;
                addressStringToBytes(request: _18.AddressStringToBytesRequest): Promise<_18.AddressStringToBytesResponse>;
                accountInfo(request: _18.QueryAccountInfoRequest): Promise<_18.QueryAccountInfoResponse>;
            };
            LCDQueryClient: typeof _190.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    updateParams(value: _19.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    updateParams(value: _19.MsgUpdateParams): {
                        typeUrl: string;
                        value: _19.MsgUpdateParams;
                    };
                };
                toJSON: {
                    updateParams(value: _19.MsgUpdateParams): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _19.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    updateParams(value: _19.MsgUpdateParams): {
                        typeUrl: string;
                        value: _19.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.auth.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: ({ authority, params }: _19.MsgUpdateParams) => {
                        authority: string;
                        params: {
                            max_memo_characters: string;
                            tx_sig_limit: string;
                            tx_size_cost_per_byte: string;
                            sig_verify_cost_ed25519: string;
                            sig_verify_cost_secp256k1: string;
                        };
                    };
                    fromAmino: ({ authority, params }: {
                        authority: string;
                        params: {
                            max_memo_characters: string;
                            tx_sig_limit: string;
                            tx_size_cost_per_byte: string;
                            sig_verify_cost_ed25519: string;
                            sig_verify_cost_secp256k1: string;
                        };
                    }) => _19.MsgUpdateParams;
                };
            };
            MsgUpdateParams: {
                encode(message: _19.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _19.MsgUpdateParams;
                fromJSON(object: any): _19.MsgUpdateParams;
                toJSON(message: _19.MsgUpdateParams): unknown;
                fromPartial(object: {
                    authority?: string;
                    params?: {
                        maxMemoCharacters?: bigint;
                        txSigLimit?: bigint;
                        txSizeCostPerByte?: bigint;
                        sigVerifyCostEd25519?: bigint;
                        sigVerifyCostSecp256k1?: bigint;
                    };
                }): _19.MsgUpdateParams;
            };
            MsgUpdateParamsResponse: {
                encode(_: _19.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _19.MsgUpdateParamsResponse;
                fromJSON(_: any): _19.MsgUpdateParamsResponse;
                toJSON(_: _19.MsgUpdateParamsResponse): unknown;
                fromPartial(_: {}): _19.MsgUpdateParamsResponse;
            };
            QueryAccountsRequest: {
                encode(message: _18.QueryAccountsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _18.QueryAccountsRequest;
                fromJSON(object: any): _18.QueryAccountsRequest;
                toJSON(message: _18.QueryAccountsRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: bigint;
                        limit?: bigint;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _18.QueryAccountsRequest;
            };
            QueryAccountsResponse: {
                encode(message: _18.QueryAccountsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _18.QueryAccountsResponse;
                fromJSON(object: any): _18.QueryAccountsResponse;
                toJSON(message: _18.QueryAccountsResponse): unknown;
                fromPartial(object: {
                    accounts?: ({
                        typeUrl?: string;
                        value?: Uint8Array;
                    } | {
                        address?: string;
                        pubKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        accountNumber?: bigint;
                        sequence?: bigint;
                    })[] | {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: bigint;
                    };
                }): _18.QueryAccountsResponse;
            };
            QueryAccountRequest: {
                encode(message: _18.QueryAccountRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _18.QueryAccountRequest;
                fromJSON(object: any): _18.QueryAccountRequest;
                toJSON(message: _18.QueryAccountRequest): unknown;
                fromPartial(object: {
                    address?: string;
                }): _18.QueryAccountRequest;
            };
            QueryAccountResponse: {
                encode(message: _18.QueryAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _18.QueryAccountResponse;
                fromJSON(object: any): _18.QueryAccountResponse;
                toJSON(message: _18.QueryAccountResponse): unknown;
                fromPartial(object: {
                    account?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    } | {
                        address?: string;
                        pubKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        accountNumber?: bigint;
                        sequence?: bigint;
                    };
                }): _18.QueryAccountResponse;
            };
            QueryParamsRequest: {
                encode(_: _18.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _18.QueryParamsRequest;
                fromJSON(_: any): _18.QueryParamsRequest;
                toJSON(_: _18.QueryParamsRequest): unknown;
                fromPartial(_: {}): _18.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _18.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _18.QueryParamsResponse;
                fromJSON(object: any): _18.QueryParamsResponse;
                toJSON(message: _18.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        maxMemoCharacters?: bigint;
                        txSigLimit?: bigint;
                        txSizeCostPerByte?: bigint;
                        sigVerifyCostEd25519?: bigint;
                        sigVerifyCostSecp256k1?: bigint;
                    };
                }): _18.QueryParamsResponse;
            };
            QueryModuleAccountsRequest: {
                encode(_: _18.QueryModuleAccountsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _18.QueryModuleAccountsRequest;
                fromJSON(_: any): _18.QueryModuleAccountsRequest;
                toJSON(_: _18.QueryModuleAccountsRequest): unknown;
                fromPartial(_: {}): _18.QueryModuleAccountsRequest;
            };
            QueryModuleAccountsResponse: {
                encode(message: _18.QueryModuleAccountsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _18.QueryModuleAccountsResponse;
                fromJSON(object: any): _18.QueryModuleAccountsResponse;
                toJSON(message: _18.QueryModuleAccountsResponse): unknown;
                fromPartial(object: {
                    accounts?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[] | ({
                        typeUrl?: string;
                        value?: Uint8Array;
                    } | {
                        baseAccount?: {
                            address?: string;
                            pubKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            accountNumber?: bigint;
                            sequence?: bigint;
                        };
                        name?: string;
                        permissions?: string[];
                    })[];
                }): _18.QueryModuleAccountsResponse;
            };
            QueryModuleAccountByNameRequest: {
                encode(message: _18.QueryModuleAccountByNameRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _18.QueryModuleAccountByNameRequest;
                fromJSON(object: any): _18.QueryModuleAccountByNameRequest;
                toJSON(message: _18.QueryModuleAccountByNameRequest): unknown;
                fromPartial(object: {
                    name?: string;
                }): _18.QueryModuleAccountByNameRequest;
            };
            QueryModuleAccountByNameResponse: {
                encode(message: _18.QueryModuleAccountByNameResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _18.QueryModuleAccountByNameResponse;
                fromJSON(object: any): _18.QueryModuleAccountByNameResponse;
                toJSON(message: _18.QueryModuleAccountByNameResponse): unknown;
                fromPartial(object: {
                    account?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    } | {
                        baseAccount?: {
                            address?: string;
                            pubKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            accountNumber?: bigint;
                            sequence?: bigint;
                        };
                        name?: string;
                        permissions?: string[];
                    };
                }): _18.QueryModuleAccountByNameResponse;
            };
            Bech32PrefixRequest: {
                encode(_: _18.Bech32PrefixRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _18.Bech32PrefixRequest;
                fromJSON(_: any): _18.Bech32PrefixRequest;
                toJSON(_: _18.Bech32PrefixRequest): unknown;
                fromPartial(_: {}): _18.Bech32PrefixRequest;
            };
            Bech32PrefixResponse: {
                encode(message: _18.Bech32PrefixResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _18.Bech32PrefixResponse;
                fromJSON(object: any): _18.Bech32PrefixResponse;
                toJSON(message: _18.Bech32PrefixResponse): unknown;
                fromPartial(object: {
                    bech32Prefix?: string;
                }): _18.Bech32PrefixResponse;
            };
            AddressBytesToStringRequest: {
                encode(message: _18.AddressBytesToStringRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _18.AddressBytesToStringRequest;
                fromJSON(object: any): _18.AddressBytesToStringRequest;
                toJSON(message: _18.AddressBytesToStringRequest): unknown;
                fromPartial(object: {
                    addressBytes?: Uint8Array;
                }): _18.AddressBytesToStringRequest;
            };
            AddressBytesToStringResponse: {
                encode(message: _18.AddressBytesToStringResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _18.AddressBytesToStringResponse;
                fromJSON(object: any): _18.AddressBytesToStringResponse;
                toJSON(message: _18.AddressBytesToStringResponse): unknown;
                fromPartial(object: {
                    addressString?: string;
                }): _18.AddressBytesToStringResponse;
            };
            AddressStringToBytesRequest: {
                encode(message: _18.AddressStringToBytesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _18.AddressStringToBytesRequest;
                fromJSON(object: any): _18.AddressStringToBytesRequest;
                toJSON(message: _18.AddressStringToBytesRequest): unknown;
                fromPartial(object: {
                    addressString?: string;
                }): _18.AddressStringToBytesRequest;
            };
            AddressStringToBytesResponse: {
                encode(message: _18.AddressStringToBytesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _18.AddressStringToBytesResponse;
                fromJSON(object: any): _18.AddressStringToBytesResponse;
                toJSON(message: _18.AddressStringToBytesResponse): unknown;
                fromPartial(object: {
                    addressBytes?: Uint8Array;
                }): _18.AddressStringToBytesResponse;
            };
            QueryAccountAddressByIDRequest: {
                encode(message: _18.QueryAccountAddressByIDRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _18.QueryAccountAddressByIDRequest;
                fromJSON(object: any): _18.QueryAccountAddressByIDRequest;
                toJSON(message: _18.QueryAccountAddressByIDRequest): unknown;
                fromPartial(object: {
                    id?: bigint;
                    accountId?: bigint;
                }): _18.QueryAccountAddressByIDRequest;
            };
            QueryAccountAddressByIDResponse: {
                encode(message: _18.QueryAccountAddressByIDResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _18.QueryAccountAddressByIDResponse;
                fromJSON(object: any): _18.QueryAccountAddressByIDResponse;
                toJSON(message: _18.QueryAccountAddressByIDResponse): unknown;
                fromPartial(object: {
                    accountAddress?: string;
                }): _18.QueryAccountAddressByIDResponse;
            };
            QueryAccountInfoRequest: {
                encode(message: _18.QueryAccountInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _18.QueryAccountInfoRequest;
                fromJSON(object: any): _18.QueryAccountInfoRequest;
                toJSON(message: _18.QueryAccountInfoRequest): unknown;
                fromPartial(object: {
                    address?: string;
                }): _18.QueryAccountInfoRequest;
            };
            QueryAccountInfoResponse: {
                encode(message: _18.QueryAccountInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _18.QueryAccountInfoResponse;
                fromJSON(object: any): _18.QueryAccountInfoResponse;
                toJSON(message: _18.QueryAccountInfoResponse): unknown;
                fromPartial(object: {
                    info?: {
                        address?: string;
                        pubKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        accountNumber?: bigint;
                        sequence?: bigint;
                    };
                }): _18.QueryAccountInfoResponse;
            };
            Cosmos_authv1beta1AccountI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _16.BaseAccount;
            Cosmos_authv1beta1ModuleAccountI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _16.ModuleAccount;
            GenesisState: {
                encode(message: _17.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _17.GenesisState;
                fromJSON(object: any): _17.GenesisState;
                toJSON(message: _17.GenesisState): unknown;
                fromPartial(object: {
                    params?: {
                        maxMemoCharacters?: bigint;
                        txSigLimit?: bigint;
                        txSizeCostPerByte?: bigint;
                        sigVerifyCostEd25519?: bigint;
                        sigVerifyCostSecp256k1?: bigint;
                    };
                    accounts?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                }): _17.GenesisState;
            };
            BaseAccount: {
                encode(message: _16.BaseAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _16.BaseAccount;
                fromJSON(object: any): _16.BaseAccount;
                toJSON(message: _16.BaseAccount): unknown;
                fromPartial(object: {
                    address?: string;
                    pubKey?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    accountNumber?: bigint;
                    sequence?: bigint;
                }): _16.BaseAccount;
            };
            ModuleAccount: {
                encode(message: _16.ModuleAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _16.ModuleAccount;
                fromJSON(object: any): _16.ModuleAccount;
                toJSON(message: _16.ModuleAccount): unknown;
                fromPartial(object: {
                    baseAccount?: {
                        address?: string;
                        pubKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        accountNumber?: bigint;
                        sequence?: bigint;
                    };
                    name?: string;
                    permissions?: string[];
                }): _16.ModuleAccount;
            };
            ModuleCredential: {
                encode(message: _16.ModuleCredential, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _16.ModuleCredential;
                fromJSON(object: any): _16.ModuleCredential;
                toJSON(message: _16.ModuleCredential): unknown;
                fromPartial(object: {
                    moduleName?: string;
                    derivationKeys?: Uint8Array[];
                }): _16.ModuleCredential;
            };
            Params: {
                encode(message: _16.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _16.Params;
                fromJSON(object: any): _16.Params;
                toJSON(message: _16.Params): unknown;
                fromPartial(object: {
                    maxMemoCharacters?: bigint;
                    txSigLimit?: bigint;
                    txSizeCostPerByte?: bigint;
                    sigVerifyCostEd25519?: bigint;
                    sigVerifyCostSecp256k1?: bigint;
                }): _16.Params;
            };
        };
    }
    namespace authz {
        namespace module {
            const v1: {
                Module: {
                    encode(_: _20.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _20.Module;
                    fromJSON(_: any): _20.Module;
                    toJSON(_: _20.Module): unknown;
                    fromPartial(_: {}): _20.Module;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _221.MsgClientImpl;
            QueryClientImpl: typeof _205.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                grants(request: _24.QueryGrantsRequest): Promise<_24.QueryGrantsResponse>;
                granterGrants(request: _24.QueryGranterGrantsRequest): Promise<_24.QueryGranterGrantsResponse>;
                granteeGrants(request: _24.QueryGranteeGrantsRequest): Promise<_24.QueryGranteeGrantsResponse>;
            };
            LCDQueryClient: typeof _191.LCDQueryClient;
            MsgGrant: {
                encode(message: _25.MsgGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _25.MsgGrant;
                fromJSON(object: any): _25.MsgGrant;
                toJSON(message: _25.MsgGrant): unknown;
                fromPartial(object: {
                    granter?: string;
                    grantee?: string;
                    grant?: {
                        authorization?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } | {
                            spendLimit?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            allowList?: string[];
                        } | {
                            maxTokens?: {
                                denom?: string;
                                amount?: string;
                            };
                            allowList?: {
                                address?: string[];
                            };
                            denyList?: {
                                address?: string[];
                            };
                            authorizationType?: _88.AuthorizationType;
                        } | {
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
                        } | {
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
                        } | {
                            msg?: string;
                        };
                        expiration?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                    };
                }): _25.MsgGrant;
            };
            MsgExecResponse: {
                encode(message: _25.MsgExecResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _25.MsgExecResponse;
                fromJSON(object: any): _25.MsgExecResponse;
                toJSON(message: _25.MsgExecResponse): unknown;
                fromPartial(object: {
                    results?: Uint8Array[];
                }): _25.MsgExecResponse;
            };
            MsgExec: {
                encode(message: _25.MsgExec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _25.MsgExec;
                fromJSON(object: any): _25.MsgExec;
                toJSON(message: _25.MsgExec): unknown;
                fromPartial(object: {
                    grantee?: string;
                    msgs?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                }): _25.MsgExec;
            };
            MsgGrantResponse: {
                encode(_: _25.MsgGrantResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _25.MsgGrantResponse;
                fromJSON(_: any): _25.MsgGrantResponse;
                toJSON(_: _25.MsgGrantResponse): unknown;
                fromPartial(_: {}): _25.MsgGrantResponse;
            };
            MsgRevoke: {
                encode(message: _25.MsgRevoke, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _25.MsgRevoke;
                fromJSON(object: any): _25.MsgRevoke;
                toJSON(message: _25.MsgRevoke): unknown;
                fromPartial(object: {
                    granter?: string;
                    grantee?: string;
                    msgTypeUrl?: string;
                }): _25.MsgRevoke;
            };
            MsgRevokeResponse: {
                encode(_: _25.MsgRevokeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _25.MsgRevokeResponse;
                fromJSON(_: any): _25.MsgRevokeResponse;
                toJSON(_: _25.MsgRevokeResponse): unknown;
                fromPartial(_: {}): _25.MsgRevokeResponse;
            };
            Cosmos_basev1beta1Msg_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            QueryGrantsRequest: {
                encode(message: _24.QueryGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _24.QueryGrantsRequest;
                fromJSON(object: any): _24.QueryGrantsRequest;
                toJSON(message: _24.QueryGrantsRequest): unknown;
                fromPartial(object: {
                    granter?: string;
                    grantee?: string;
                    msgTypeUrl?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: bigint;
                        limit?: bigint;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _24.QueryGrantsRequest;
            };
            QueryGrantsResponse: {
                encode(message: _24.QueryGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _24.QueryGrantsResponse;
                fromJSON(object: any): _24.QueryGrantsResponse;
                toJSON(message: _24.QueryGrantsResponse): unknown;
                fromPartial(object: {
                    grants?: {
                        authorization?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } | {
                            spendLimit?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            allowList?: string[];
                        } | {
                            maxTokens?: {
                                denom?: string;
                                amount?: string;
                            };
                            allowList?: {
                                address?: string[];
                            };
                            denyList?: {
                                address?: string[];
                            };
                            authorizationType?: _88.AuthorizationType;
                        } | {
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
                        } | {
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
                        } | {
                            msg?: string;
                        };
                        expiration?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: bigint;
                    };
                }): _24.QueryGrantsResponse;
            };
            QueryGranterGrantsRequest: {
                encode(message: _24.QueryGranterGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _24.QueryGranterGrantsRequest;
                fromJSON(object: any): _24.QueryGranterGrantsRequest;
                toJSON(message: _24.QueryGranterGrantsRequest): unknown;
                fromPartial(object: {
                    granter?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: bigint;
                        limit?: bigint;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _24.QueryGranterGrantsRequest;
            };
            QueryGranterGrantsResponse: {
                encode(message: _24.QueryGranterGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _24.QueryGranterGrantsResponse;
                fromJSON(object: any): _24.QueryGranterGrantsResponse;
                toJSON(message: _24.QueryGranterGrantsResponse): unknown;
                fromPartial(object: {
                    grants?: {
                        granter?: string;
                        grantee?: string;
                        authorization?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } | {
                            spendLimit?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            allowList?: string[];
                        } | {
                            maxTokens?: {
                                denom?: string;
                                amount?: string;
                            };
                            allowList?: {
                                address?: string[];
                            };
                            denyList?: {
                                address?: string[];
                            };
                            authorizationType?: _88.AuthorizationType;
                        } | {
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
                        } | {
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
                        } | {
                            msg?: string;
                        };
                        expiration?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: bigint;
                    };
                }): _24.QueryGranterGrantsResponse;
            };
            QueryGranteeGrantsRequest: {
                encode(message: _24.QueryGranteeGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _24.QueryGranteeGrantsRequest;
                fromJSON(object: any): _24.QueryGranteeGrantsRequest;
                toJSON(message: _24.QueryGranteeGrantsRequest): unknown;
                fromPartial(object: {
                    grantee?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: bigint;
                        limit?: bigint;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _24.QueryGranteeGrantsRequest;
            };
            QueryGranteeGrantsResponse: {
                encode(message: _24.QueryGranteeGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _24.QueryGranteeGrantsResponse;
                fromJSON(object: any): _24.QueryGranteeGrantsResponse;
                toJSON(message: _24.QueryGranteeGrantsResponse): unknown;
                fromPartial(object: {
                    grants?: {
                        granter?: string;
                        grantee?: string;
                        authorization?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } | {
                            spendLimit?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            allowList?: string[];
                        } | {
                            maxTokens?: {
                                denom?: string;
                                amount?: string;
                            };
                            allowList?: {
                                address?: string[];
                            };
                            denyList?: {
                                address?: string[];
                            };
                            authorizationType?: _88.AuthorizationType;
                        } | {
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
                        } | {
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
                        } | {
                            msg?: string;
                        };
                        expiration?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: bigint;
                    };
                }): _24.QueryGranteeGrantsResponse;
            };
            GenesisState: {
                encode(message: _23.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _23.GenesisState;
                fromJSON(object: any): _23.GenesisState;
                toJSON(message: _23.GenesisState): unknown;
                fromPartial(object: {
                    authorization?: {
                        granter?: string;
                        grantee?: string;
                        authorization?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } | {
                            spendLimit?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            allowList?: string[];
                        } | {
                            maxTokens?: {
                                denom?: string;
                                amount?: string;
                            };
                            allowList?: {
                                address?: string[];
                            };
                            denyList?: {
                                address?: string[];
                            };
                            authorizationType?: _88.AuthorizationType;
                        } | {
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
                        } | {
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
                        } | {
                            msg?: string;
                        };
                        expiration?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                    }[];
                }): _23.GenesisState;
            };
            EventGrant: {
                encode(message: _22.EventGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _22.EventGrant;
                fromJSON(object: any): _22.EventGrant;
                toJSON(message: _22.EventGrant): unknown;
                fromPartial(object: {
                    msgTypeUrl?: string;
                    granter?: string;
                    grantee?: string;
                }): _22.EventGrant;
            };
            EventRevoke: {
                encode(message: _22.EventRevoke, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _22.EventRevoke;
                fromJSON(object: any): _22.EventRevoke;
                toJSON(message: _22.EventRevoke): unknown;
                fromPartial(object: {
                    msgTypeUrl?: string;
                    granter?: string;
                    grantee?: string;
                }): _22.EventRevoke;
            };
            GenericAuthorization: {
                encode(message: _21.GenericAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _21.GenericAuthorization;
                fromJSON(object: any): _21.GenericAuthorization;
                toJSON(message: _21.GenericAuthorization): unknown;
                fromPartial(object: {
                    msg?: string;
                }): _21.GenericAuthorization;
            };
            Grant: {
                encode(message: _21.Grant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _21.Grant;
                fromJSON(object: any): _21.Grant;
                toJSON(message: _21.Grant): unknown;
                fromPartial(object: {
                    authorization?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    } | {
                        spendLimit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        allowList?: string[];
                    } | {
                        maxTokens?: {
                            denom?: string;
                            amount?: string;
                        };
                        allowList?: {
                            address?: string[];
                        };
                        denyList?: {
                            address?: string[];
                        };
                        authorizationType?: _88.AuthorizationType;
                    } | {
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
                    } | {
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
                    } | {
                        msg?: string;
                    };
                    expiration?: {
                        seconds?: bigint;
                        nanos?: number;
                    };
                }): _21.Grant;
            };
            GrantAuthorization: {
                encode(message: _21.GrantAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _21.GrantAuthorization;
                fromJSON(object: any): _21.GrantAuthorization;
                toJSON(message: _21.GrantAuthorization): unknown;
                fromPartial(object: {
                    granter?: string;
                    grantee?: string;
                    authorization?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    } | {
                        spendLimit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        allowList?: string[];
                    } | {
                        maxTokens?: {
                            denom?: string;
                            amount?: string;
                        };
                        allowList?: {
                            address?: string[];
                        };
                        denyList?: {
                            address?: string[];
                        };
                        authorizationType?: _88.AuthorizationType;
                    } | {
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
                    } | {
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
                    } | {
                        msg?: string;
                    };
                    expiration?: {
                        seconds?: bigint;
                        nanos?: number;
                    };
                }): _21.GrantAuthorization;
            };
            GrantQueueItem: {
                encode(message: _21.GrantQueueItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _21.GrantQueueItem;
                fromJSON(object: any): _21.GrantQueueItem;
                toJSON(message: _21.GrantQueueItem): unknown;
                fromPartial(object: {
                    msgTypeUrls?: string[];
                }): _21.GrantQueueItem;
            };
            Cosmos_authzv1beta1Authorization_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _29.SendAuthorization | _88.StakeAuthorization | import("../cosmwasm/wasm/v1/authz").ContractExecutionAuthorization | import("../cosmwasm/wasm/v1/authz").ContractMigrationAuthorization | _21.GenericAuthorization;
        };
    }
    namespace autocli {
        const v1: {
            QueryClientImpl: typeof _206.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                appOptions(request?: _27.AppOptionsRequest): Promise<_27.AppOptionsResponse>;
            };
            AppOptionsRequest: {
                encode(_: _27.AppOptionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _27.AppOptionsRequest;
                fromJSON(_: any): _27.AppOptionsRequest;
                toJSON(_: _27.AppOptionsRequest): unknown;
                fromPartial(_: {}): _27.AppOptionsRequest;
            };
            AppOptionsResponse_ModuleOptionsEntry: {
                encode(message: _27.AppOptionsResponse_ModuleOptionsEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _27.AppOptionsResponse_ModuleOptionsEntry;
                fromJSON(object: any): _27.AppOptionsResponse_ModuleOptionsEntry;
                toJSON(message: _27.AppOptionsResponse_ModuleOptionsEntry): unknown;
                fromPartial(object: {
                    key?: string;
                    value?: {
                        tx?: {
                            service?: string;
                            rpcCommandOptions?: {
                                rpcMethod?: string;
                                use?: string;
                                long?: string;
                                short?: string;
                                example?: string;
                                alias?: string[];
                                suggestFor?: string[];
                                deprecated?: string;
                                version?: string;
                                flagOptions?: {
                                    [x: string]: {
                                        name?: string;
                                        shorthand?: string;
                                        usage?: string;
                                        defaultValue?: string;
                                        noOptDefaultValue?: string;
                                        deprecated?: string;
                                        shorthandDeprecated?: string;
                                        hidden?: boolean;
                                    };
                                };
                                positionalArgs?: {
                                    protoField?: string;
                                    varargs?: boolean;
                                }[];
                                skip?: boolean;
                            }[];
                            subCommands?: {
                                [x: string]: any;
                            };
                        };
                        query?: {
                            service?: string;
                            rpcCommandOptions?: {
                                rpcMethod?: string;
                                use?: string;
                                long?: string;
                                short?: string;
                                example?: string;
                                alias?: string[];
                                suggestFor?: string[];
                                deprecated?: string;
                                version?: string;
                                flagOptions?: {
                                    [x: string]: {
                                        name?: string;
                                        shorthand?: string;
                                        usage?: string;
                                        defaultValue?: string;
                                        noOptDefaultValue?: string;
                                        deprecated?: string;
                                        shorthandDeprecated?: string;
                                        hidden?: boolean;
                                    };
                                };
                                positionalArgs?: {
                                    protoField?: string;
                                    varargs?: boolean;
                                }[];
                                skip?: boolean;
                            }[];
                            subCommands?: {
                                [x: string]: any;
                            };
                        };
                    };
                }): _27.AppOptionsResponse_ModuleOptionsEntry;
            };
            AppOptionsResponse: {
                encode(message: _27.AppOptionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _27.AppOptionsResponse;
                fromJSON(object: any): _27.AppOptionsResponse;
                toJSON(message: _27.AppOptionsResponse): unknown;
                fromPartial(object: {
                    moduleOptions?: {
                        [x: string]: {
                            tx?: {
                                service?: string;
                                rpcCommandOptions?: {
                                    rpcMethod?: string;
                                    use?: string;
                                    long?: string;
                                    short?: string;
                                    example?: string;
                                    alias?: string[];
                                    suggestFor?: string[];
                                    deprecated?: string;
                                    version?: string;
                                    flagOptions?: {
                                        [x: string]: {
                                            name?: string;
                                            shorthand?: string;
                                            usage?: string;
                                            defaultValue?: string;
                                            noOptDefaultValue?: string;
                                            deprecated?: string;
                                            shorthandDeprecated?: string;
                                            hidden?: boolean;
                                        };
                                    };
                                    positionalArgs?: {
                                        protoField?: string;
                                        varargs?: boolean;
                                    }[];
                                    skip?: boolean;
                                }[];
                                subCommands?: {
                                    [x: string]: any;
                                };
                            };
                            query?: {
                                service?: string;
                                rpcCommandOptions?: {
                                    rpcMethod?: string;
                                    use?: string;
                                    long?: string;
                                    short?: string;
                                    example?: string;
                                    alias?: string[];
                                    suggestFor?: string[];
                                    deprecated?: string;
                                    version?: string;
                                    flagOptions?: {
                                        [x: string]: {
                                            name?: string;
                                            shorthand?: string;
                                            usage?: string;
                                            defaultValue?: string;
                                            noOptDefaultValue?: string;
                                            deprecated?: string;
                                            shorthandDeprecated?: string;
                                            hidden?: boolean;
                                        };
                                    };
                                    positionalArgs?: {
                                        protoField?: string;
                                        varargs?: boolean;
                                    }[];
                                    skip?: boolean;
                                }[];
                                subCommands?: {
                                    [x: string]: any;
                                };
                            };
                        };
                    };
                }): _27.AppOptionsResponse;
            };
            ModuleOptions: {
                encode(message: _26.ModuleOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _26.ModuleOptions;
                fromJSON(object: any): _26.ModuleOptions;
                toJSON(message: _26.ModuleOptions): unknown;
                fromPartial(object: {
                    tx?: {
                        service?: string;
                        rpcCommandOptions?: {
                            rpcMethod?: string;
                            use?: string;
                            long?: string;
                            short?: string;
                            example?: string;
                            alias?: string[];
                            suggestFor?: string[];
                            deprecated?: string;
                            version?: string;
                            flagOptions?: {
                                [x: string]: {
                                    name?: string;
                                    shorthand?: string;
                                    usage?: string;
                                    defaultValue?: string;
                                    noOptDefaultValue?: string;
                                    deprecated?: string;
                                    shorthandDeprecated?: string;
                                    hidden?: boolean;
                                };
                            };
                            positionalArgs?: {
                                protoField?: string;
                                varargs?: boolean;
                            }[];
                            skip?: boolean;
                        }[];
                        subCommands?: {
                            [x: string]: any;
                        };
                    };
                    query?: {
                        service?: string;
                        rpcCommandOptions?: {
                            rpcMethod?: string;
                            use?: string;
                            long?: string;
                            short?: string;
                            example?: string;
                            alias?: string[];
                            suggestFor?: string[];
                            deprecated?: string;
                            version?: string;
                            flagOptions?: {
                                [x: string]: {
                                    name?: string;
                                    shorthand?: string;
                                    usage?: string;
                                    defaultValue?: string;
                                    noOptDefaultValue?: string;
                                    deprecated?: string;
                                    shorthandDeprecated?: string;
                                    hidden?: boolean;
                                };
                            };
                            positionalArgs?: {
                                protoField?: string;
                                varargs?: boolean;
                            }[];
                            skip?: boolean;
                        }[];
                        subCommands?: {
                            [x: string]: any;
                        };
                    };
                }): _26.ModuleOptions;
            };
            ServiceCommandDescriptor_SubCommandsEntry: {
                encode(message: _26.ServiceCommandDescriptor_SubCommandsEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _26.ServiceCommandDescriptor_SubCommandsEntry;
                fromJSON(object: any): _26.ServiceCommandDescriptor_SubCommandsEntry;
                toJSON(message: _26.ServiceCommandDescriptor_SubCommandsEntry): unknown;
                fromPartial(object: {
                    key?: string;
                    value?: {
                        service?: string;
                        rpcCommandOptions?: {
                            rpcMethod?: string;
                            use?: string;
                            long?: string;
                            short?: string;
                            example?: string;
                            alias?: string[];
                            suggestFor?: string[];
                            deprecated?: string;
                            version?: string;
                            flagOptions?: {
                                [x: string]: {
                                    name?: string;
                                    shorthand?: string;
                                    usage?: string;
                                    defaultValue?: string;
                                    noOptDefaultValue?: string;
                                    deprecated?: string;
                                    shorthandDeprecated?: string;
                                    hidden?: boolean;
                                };
                            };
                            positionalArgs?: {
                                protoField?: string;
                                varargs?: boolean;
                            }[];
                            skip?: boolean;
                        }[];
                        subCommands?: {
                            [x: string]: any;
                        };
                    };
                }): _26.ServiceCommandDescriptor_SubCommandsEntry;
            };
            ServiceCommandDescriptor: {
                encode(message: _26.ServiceCommandDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _26.ServiceCommandDescriptor;
                fromJSON(object: any): _26.ServiceCommandDescriptor;
                toJSON(message: _26.ServiceCommandDescriptor): unknown;
                fromPartial(object: {
                    service?: string;
                    rpcCommandOptions?: {
                        rpcMethod?: string;
                        use?: string;
                        long?: string;
                        short?: string;
                        example?: string;
                        alias?: string[];
                        suggestFor?: string[];
                        deprecated?: string;
                        version?: string;
                        flagOptions?: {
                            [x: string]: {
                                name?: string;
                                shorthand?: string;
                                usage?: string;
                                defaultValue?: string;
                                noOptDefaultValue?: string;
                                deprecated?: string;
                                shorthandDeprecated?: string;
                                hidden?: boolean;
                            };
                        };
                        positionalArgs?: {
                            protoField?: string;
                            varargs?: boolean;
                        }[];
                        skip?: boolean;
                    }[];
                    subCommands?: {
                        [x: string]: any;
                    };
                }): _26.ServiceCommandDescriptor;
            };
            RpcCommandOptions_FlagOptionsEntry: {
                encode(message: _26.RpcCommandOptions_FlagOptionsEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _26.RpcCommandOptions_FlagOptionsEntry;
                fromJSON(object: any): _26.RpcCommandOptions_FlagOptionsEntry;
                toJSON(message: _26.RpcCommandOptions_FlagOptionsEntry): unknown;
                fromPartial(object: {
                    key?: string;
                    value?: {
                        name?: string;
                        shorthand?: string;
                        usage?: string;
                        defaultValue?: string;
                        noOptDefaultValue?: string;
                        deprecated?: string;
                        shorthandDeprecated?: string;
                        hidden?: boolean;
                    };
                }): _26.RpcCommandOptions_FlagOptionsEntry;
            };
            RpcCommandOptions: {
                encode(message: _26.RpcCommandOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _26.RpcCommandOptions;
                fromJSON(object: any): _26.RpcCommandOptions;
                toJSON(message: _26.RpcCommandOptions): unknown;
                fromPartial(object: {
                    rpcMethod?: string;
                    use?: string;
                    long?: string;
                    short?: string;
                    example?: string;
                    alias?: string[];
                    suggestFor?: string[];
                    deprecated?: string;
                    version?: string;
                    flagOptions?: {
                        [x: string]: {
                            name?: string;
                            shorthand?: string;
                            usage?: string;
                            defaultValue?: string;
                            noOptDefaultValue?: string;
                            deprecated?: string;
                            shorthandDeprecated?: string;
                            hidden?: boolean;
                        };
                    };
                    positionalArgs?: {
                        protoField?: string;
                        varargs?: boolean;
                    }[];
                    skip?: boolean;
                }): _26.RpcCommandOptions;
            };
            FlagOptions: {
                encode(message: _26.FlagOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _26.FlagOptions;
                fromJSON(object: any): _26.FlagOptions;
                toJSON(message: _26.FlagOptions): unknown;
                fromPartial(object: {
                    name?: string;
                    shorthand?: string;
                    usage?: string;
                    defaultValue?: string;
                    noOptDefaultValue?: string;
                    deprecated?: string;
                    shorthandDeprecated?: string;
                    hidden?: boolean;
                }): _26.FlagOptions;
            };
            PositionalArgDescriptor: {
                encode(message: _26.PositionalArgDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _26.PositionalArgDescriptor;
                fromJSON(object: any): _26.PositionalArgDescriptor;
                toJSON(message: _26.PositionalArgDescriptor): unknown;
                fromPartial(object: {
                    protoField?: string;
                    varargs?: boolean;
                }): _26.PositionalArgDescriptor;
            };
        };
    }
    namespace bank {
        namespace module {
            const v1: {
                Module: {
                    encode(message: _28.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _28.Module;
                    fromJSON(object: any): _28.Module;
                    toJSON(message: _28.Module): unknown;
                    fromPartial(object: {
                        blockedModuleAccountsOverride?: string[];
                        authority?: string;
                    }): _28.Module;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _222.MsgClientImpl;
            QueryClientImpl: typeof _207.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _32.QueryBalanceRequest): Promise<_32.QueryBalanceResponse>;
                allBalances(request: _32.QueryAllBalancesRequest): Promise<_32.QueryAllBalancesResponse>;
                spendableBalances(request: _32.QuerySpendableBalancesRequest): Promise<_32.QuerySpendableBalancesResponse>;
                spendableBalanceByDenom(request: _32.QuerySpendableBalanceByDenomRequest): Promise<_32.QuerySpendableBalanceByDenomResponse>;
                totalSupply(request?: _32.QueryTotalSupplyRequest): Promise<_32.QueryTotalSupplyResponse>;
                supplyOf(request: _32.QuerySupplyOfRequest): Promise<_32.QuerySupplyOfResponse>;
                params(request?: _32.QueryParamsRequest): Promise<_32.QueryParamsResponse>;
                denomMetadata(request: _32.QueryDenomMetadataRequest): Promise<_32.QueryDenomMetadataResponse>;
                denomsMetadata(request?: _32.QueryDenomsMetadataRequest): Promise<_32.QueryDenomsMetadataResponse>;
                denomOwners(request: _32.QueryDenomOwnersRequest): Promise<_32.QueryDenomOwnersResponse>;
                sendEnabled(request: _32.QuerySendEnabledRequest): Promise<_32.QuerySendEnabledResponse>;
            };
            LCDQueryClient: typeof _192.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _33.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    multiSend(value: _33.MsgMultiSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _33.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setSendEnabled(value: _33.MsgSetSendEnabled): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _33.MsgSend): {
                        typeUrl: string;
                        value: _33.MsgSend;
                    };
                    multiSend(value: _33.MsgMultiSend): {
                        typeUrl: string;
                        value: _33.MsgMultiSend;
                    };
                    updateParams(value: _33.MsgUpdateParams): {
                        typeUrl: string;
                        value: _33.MsgUpdateParams;
                    };
                    setSendEnabled(value: _33.MsgSetSendEnabled): {
                        typeUrl: string;
                        value: _33.MsgSetSendEnabled;
                    };
                };
                toJSON: {
                    send(value: _33.MsgSend): {
                        typeUrl: string;
                        value: unknown;
                    };
                    multiSend(value: _33.MsgMultiSend): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateParams(value: _33.MsgUpdateParams): {
                        typeUrl: string;
                        value: unknown;
                    };
                    setSendEnabled(value: _33.MsgSetSendEnabled): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _33.MsgSend;
                    };
                    multiSend(value: any): {
                        typeUrl: string;
                        value: _33.MsgMultiSend;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _33.MsgUpdateParams;
                    };
                    setSendEnabled(value: any): {
                        typeUrl: string;
                        value: _33.MsgSetSendEnabled;
                    };
                };
                fromPartial: {
                    send(value: _33.MsgSend): {
                        typeUrl: string;
                        value: _33.MsgSend;
                    };
                    multiSend(value: _33.MsgMultiSend): {
                        typeUrl: string;
                        value: _33.MsgMultiSend;
                    };
                    updateParams(value: _33.MsgUpdateParams): {
                        typeUrl: string;
                        value: _33.MsgUpdateParams;
                    };
                    setSendEnabled(value: _33.MsgSetSendEnabled): {
                        typeUrl: string;
                        value: _33.MsgSetSendEnabled;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount }: _33.MsgSend) => {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ from_address, to_address, amount }: {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _33.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: ({ inputs, outputs }: _33.MsgMultiSend) => {
                        inputs: {
                            address: string;
                            coins: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                        outputs: {
                            address: string;
                            coins: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                    };
                    fromAmino: ({ inputs, outputs }: {
                        inputs: {
                            address: string;
                            coins: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                        outputs: {
                            address: string;
                            coins: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                    }) => _33.MsgMultiSend;
                };
                "/cosmos.bank.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: ({ authority, params }: _33.MsgUpdateParams) => {
                        authority: string;
                        params: {
                            send_enabled: {
                                denom: string;
                                enabled: boolean;
                            }[];
                            default_send_enabled: boolean;
                        };
                    };
                    fromAmino: ({ authority, params }: {
                        authority: string;
                        params: {
                            send_enabled: {
                                denom: string;
                                enabled: boolean;
                            }[];
                            default_send_enabled: boolean;
                        };
                    }) => _33.MsgUpdateParams;
                };
                "/cosmos.bank.v1beta1.MsgSetSendEnabled": {
                    aminoType: string;
                    toAmino: ({ authority, sendEnabled, useDefaultFor }: _33.MsgSetSendEnabled) => {
                        authority: string;
                        send_enabled: {
                            denom: string;
                            enabled: boolean;
                        }[];
                        use_default_for: string[];
                    };
                    fromAmino: ({ authority, send_enabled, use_default_for }: {
                        authority: string;
                        send_enabled: {
                            denom: string;
                            enabled: boolean;
                        }[];
                        use_default_for: string[];
                    }) => _33.MsgSetSendEnabled;
                };
            };
            MsgSend: {
                encode(message: _33.MsgSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _33.MsgSend;
                fromJSON(object: any): _33.MsgSend;
                toJSON(message: _33.MsgSend): unknown;
                fromPartial(object: {
                    fromAddress?: string;
                    toAddress?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _33.MsgSend;
            };
            MsgSendResponse: {
                encode(_: _33.MsgSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _33.MsgSendResponse;
                fromJSON(_: any): _33.MsgSendResponse;
                toJSON(_: _33.MsgSendResponse): unknown;
                fromPartial(_: {}): _33.MsgSendResponse;
            };
            MsgMultiSend: {
                encode(message: _33.MsgMultiSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _33.MsgMultiSend;
                fromJSON(object: any): _33.MsgMultiSend;
                toJSON(message: _33.MsgMultiSend): unknown;
                fromPartial(object: {
                    inputs?: {
                        address?: string;
                        coins?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    outputs?: {
                        address?: string;
                        coins?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                }): _33.MsgMultiSend;
            };
            MsgMultiSendResponse: {
                encode(_: _33.MsgMultiSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _33.MsgMultiSendResponse;
                fromJSON(_: any): _33.MsgMultiSendResponse;
                toJSON(_: _33.MsgMultiSendResponse): unknown;
                fromPartial(_: {}): _33.MsgMultiSendResponse;
            };
            MsgUpdateParams: {
                encode(message: _33.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _33.MsgUpdateParams;
                fromJSON(object: any): _33.MsgUpdateParams;
                toJSON(message: _33.MsgUpdateParams): unknown;
                fromPartial(object: {
                    authority?: string;
                    params?: {
                        sendEnabled?: {
                            denom?: string;
                            enabled?: boolean;
                        }[];
                        defaultSendEnabled?: boolean;
                    };
                }): _33.MsgUpdateParams;
            };
            MsgUpdateParamsResponse: {
                encode(_: _33.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _33.MsgUpdateParamsResponse;
                fromJSON(_: any): _33.MsgUpdateParamsResponse;
                toJSON(_: _33.MsgUpdateParamsResponse): unknown;
                fromPartial(_: {}): _33.MsgUpdateParamsResponse;
            };
            MsgSetSendEnabled: {
                encode(message: _33.MsgSetSendEnabled, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _33.MsgSetSendEnabled;
                fromJSON(object: any): _33.MsgSetSendEnabled;
                toJSON(message: _33.MsgSetSendEnabled): unknown;
                fromPartial(object: {
                    authority?: string;
                    sendEnabled?: {
                        denom?: string;
                        enabled?: boolean;
                    }[];
                    useDefaultFor?: string[];
                }): _33.MsgSetSendEnabled;
            };
            MsgSetSendEnabledResponse: {
                encode(_: _33.MsgSetSendEnabledResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _33.MsgSetSendEnabledResponse;
                fromJSON(_: any): _33.MsgSetSendEnabledResponse;
                toJSON(_: _33.MsgSetSendEnabledResponse): unknown;
                fromPartial(_: {}): _33.MsgSetSendEnabledResponse;
            };
            QueryBalanceRequest: {
                encode(message: _32.QueryBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _32.QueryBalanceRequest;
                fromJSON(object: any): _32.QueryBalanceRequest;
                toJSON(message: _32.QueryBalanceRequest): unknown;
                fromPartial(object: {
                    address?: string;
                    denom?: string;
                }): _32.QueryBalanceRequest;
            };
            QueryBalanceResponse: {
                encode(message: _32.QueryBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _32.QueryBalanceResponse;
                fromJSON(object: any): _32.QueryBalanceResponse;
                toJSON(message: _32.QueryBalanceResponse): unknown;
                fromPartial(object: {
                    balance?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _32.QueryBalanceResponse;
            };
            QueryAllBalancesRequest: {
                encode(message: _32.QueryAllBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _32.QueryAllBalancesRequest;
                fromJSON(object: any): _32.QueryAllBalancesRequest;
                toJSON(message: _32.QueryAllBalancesRequest): unknown;
                fromPartial(object: {
                    address?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: bigint;
                        limit?: bigint;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _32.QueryAllBalancesRequest;
            };
            QueryAllBalancesResponse: {
                encode(message: _32.QueryAllBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _32.QueryAllBalancesResponse;
                fromJSON(object: any): _32.QueryAllBalancesResponse;
                toJSON(message: _32.QueryAllBalancesResponse): unknown;
                fromPartial(object: {
                    balances?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: bigint;
                    };
                }): _32.QueryAllBalancesResponse;
            };
            QuerySpendableBalancesRequest: {
                encode(message: _32.QuerySpendableBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _32.QuerySpendableBalancesRequest;
                fromJSON(object: any): _32.QuerySpendableBalancesRequest;
                toJSON(message: _32.QuerySpendableBalancesRequest): unknown;
                fromPartial(object: {
                    address?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: bigint;
                        limit?: bigint;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _32.QuerySpendableBalancesRequest;
            };
            QuerySpendableBalancesResponse: {
                encode(message: _32.QuerySpendableBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _32.QuerySpendableBalancesResponse;
                fromJSON(object: any): _32.QuerySpendableBalancesResponse;
                toJSON(message: _32.QuerySpendableBalancesResponse): unknown;
                fromPartial(object: {
                    balances?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: bigint;
                    };
                }): _32.QuerySpendableBalancesResponse;
            };
            QuerySpendableBalanceByDenomRequest: {
                encode(message: _32.QuerySpendableBalanceByDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _32.QuerySpendableBalanceByDenomRequest;
                fromJSON(object: any): _32.QuerySpendableBalanceByDenomRequest;
                toJSON(message: _32.QuerySpendableBalanceByDenomRequest): unknown;
                fromPartial(object: {
                    address?: string;
                    denom?: string;
                }): _32.QuerySpendableBalanceByDenomRequest;
            };
            QuerySpendableBalanceByDenomResponse: {
                encode(message: _32.QuerySpendableBalanceByDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _32.QuerySpendableBalanceByDenomResponse;
                fromJSON(object: any): _32.QuerySpendableBalanceByDenomResponse;
                toJSON(message: _32.QuerySpendableBalanceByDenomResponse): unknown;
                fromPartial(object: {
                    balance?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _32.QuerySpendableBalanceByDenomResponse;
            };
            QueryTotalSupplyRequest: {
                encode(message: _32.QueryTotalSupplyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _32.QueryTotalSupplyRequest;
                fromJSON(object: any): _32.QueryTotalSupplyRequest;
                toJSON(message: _32.QueryTotalSupplyRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: bigint;
                        limit?: bigint;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _32.QueryTotalSupplyRequest;
            };
            QueryTotalSupplyResponse: {
                encode(message: _32.QueryTotalSupplyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _32.QueryTotalSupplyResponse;
                fromJSON(object: any): _32.QueryTotalSupplyResponse;
                toJSON(message: _32.QueryTotalSupplyResponse): unknown;
                fromPartial(object: {
                    supply?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: bigint;
                    };
                }): _32.QueryTotalSupplyResponse;
            };
            QuerySupplyOfRequest: {
                encode(message: _32.QuerySupplyOfRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _32.QuerySupplyOfRequest;
                fromJSON(object: any): _32.QuerySupplyOfRequest;
                toJSON(message: _32.QuerySupplyOfRequest): unknown;
                fromPartial(object: {
                    denom?: string;
                }): _32.QuerySupplyOfRequest;
            };
            QuerySupplyOfResponse: {
                encode(message: _32.QuerySupplyOfResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _32.QuerySupplyOfResponse;
                fromJSON(object: any): _32.QuerySupplyOfResponse;
                toJSON(message: _32.QuerySupplyOfResponse): unknown;
                fromPartial(object: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _32.QuerySupplyOfResponse;
            };
            QueryParamsRequest: {
                encode(_: _32.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _32.QueryParamsRequest;
                fromJSON(_: any): _32.QueryParamsRequest;
                toJSON(_: _32.QueryParamsRequest): unknown;
                fromPartial(_: {}): _32.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _32.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _32.QueryParamsResponse;
                fromJSON(object: any): _32.QueryParamsResponse;
                toJSON(message: _32.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        sendEnabled?: {
                            denom?: string;
                            enabled?: boolean;
                        }[];
                        defaultSendEnabled?: boolean;
                    };
                }): _32.QueryParamsResponse;
            };
            QueryDenomsMetadataRequest: {
                encode(message: _32.QueryDenomsMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _32.QueryDenomsMetadataRequest;
                fromJSON(object: any): _32.QueryDenomsMetadataRequest;
                toJSON(message: _32.QueryDenomsMetadataRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: bigint;
                        limit?: bigint;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _32.QueryDenomsMetadataRequest;
            };
            QueryDenomsMetadataResponse: {
                encode(message: _32.QueryDenomsMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _32.QueryDenomsMetadataResponse;
                fromJSON(object: any): _32.QueryDenomsMetadataResponse;
                toJSON(message: _32.QueryDenomsMetadataResponse): unknown;
                fromPartial(object: {
                    metadatas?: {
                        description?: string;
                        denomUnits?: {
                            denom?: string;
                            exponent?: number;
                            aliases?: string[];
                        }[];
                        base?: string;
                        display?: string;
                        name?: string;
                        symbol?: string;
                        uri?: string;
                        uriHash?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: bigint;
                    };
                }): _32.QueryDenomsMetadataResponse;
            };
            QueryDenomMetadataRequest: {
                encode(message: _32.QueryDenomMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _32.QueryDenomMetadataRequest;
                fromJSON(object: any): _32.QueryDenomMetadataRequest;
                toJSON(message: _32.QueryDenomMetadataRequest): unknown;
                fromPartial(object: {
                    denom?: string;
                }): _32.QueryDenomMetadataRequest;
            };
            QueryDenomMetadataResponse: {
                encode(message: _32.QueryDenomMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _32.QueryDenomMetadataResponse;
                fromJSON(object: any): _32.QueryDenomMetadataResponse;
                toJSON(message: _32.QueryDenomMetadataResponse): unknown;
                fromPartial(object: {
                    metadata?: {
                        description?: string;
                        denomUnits?: {
                            denom?: string;
                            exponent?: number;
                            aliases?: string[];
                        }[];
                        base?: string;
                        display?: string;
                        name?: string;
                        symbol?: string;
                        uri?: string;
                        uriHash?: string;
                    };
                }): _32.QueryDenomMetadataResponse;
            };
            QueryDenomOwnersRequest: {
                encode(message: _32.QueryDenomOwnersRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _32.QueryDenomOwnersRequest;
                fromJSON(object: any): _32.QueryDenomOwnersRequest;
                toJSON(message: _32.QueryDenomOwnersRequest): unknown;
                fromPartial(object: {
                    denom?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: bigint;
                        limit?: bigint;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _32.QueryDenomOwnersRequest;
            };
            DenomOwner: {
                encode(message: _32.DenomOwner, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _32.DenomOwner;
                fromJSON(object: any): _32.DenomOwner;
                toJSON(message: _32.DenomOwner): unknown;
                fromPartial(object: {
                    address?: string;
                    balance?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _32.DenomOwner;
            };
            QueryDenomOwnersResponse: {
                encode(message: _32.QueryDenomOwnersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _32.QueryDenomOwnersResponse;
                fromJSON(object: any): _32.QueryDenomOwnersResponse;
                toJSON(message: _32.QueryDenomOwnersResponse): unknown;
                fromPartial(object: {
                    denomOwners?: {
                        address?: string;
                        balance?: {
                            denom?: string;
                            amount?: string;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: bigint;
                    };
                }): _32.QueryDenomOwnersResponse;
            };
            QuerySendEnabledRequest: {
                encode(message: _32.QuerySendEnabledRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _32.QuerySendEnabledRequest;
                fromJSON(object: any): _32.QuerySendEnabledRequest;
                toJSON(message: _32.QuerySendEnabledRequest): unknown;
                fromPartial(object: {
                    denoms?: string[];
                    pagination?: {
                        key?: Uint8Array;
                        offset?: bigint;
                        limit?: bigint;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _32.QuerySendEnabledRequest;
            };
            QuerySendEnabledResponse: {
                encode(message: _32.QuerySendEnabledResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _32.QuerySendEnabledResponse;
                fromJSON(object: any): _32.QuerySendEnabledResponse;
                toJSON(message: _32.QuerySendEnabledResponse): unknown;
                fromPartial(object: {
                    sendEnabled?: {
                        denom?: string;
                        enabled?: boolean;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: bigint;
                    };
                }): _32.QuerySendEnabledResponse;
            };
            GenesisState: {
                encode(message: _31.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _31.GenesisState;
                fromJSON(object: any): _31.GenesisState;
                toJSON(message: _31.GenesisState): unknown;
                fromPartial(object: {
                    params?: {
                        sendEnabled?: {
                            denom?: string;
                            enabled?: boolean;
                        }[];
                        defaultSendEnabled?: boolean;
                    };
                    balances?: {
                        address?: string;
                        coins?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    supply?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    denomMetadata?: {
                        description?: string;
                        denomUnits?: {
                            denom?: string;
                            exponent?: number;
                            aliases?: string[];
                        }[];
                        base?: string;
                        display?: string;
                        name?: string;
                        symbol?: string;
                        uri?: string;
                        uriHash?: string;
                    }[];
                    sendEnabled?: {
                        denom?: string;
                        enabled?: boolean;
                    }[];
                }): _31.GenesisState;
            };
            Balance: {
                encode(message: _31.Balance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _31.Balance;
                fromJSON(object: any): _31.Balance;
                toJSON(message: _31.Balance): unknown;
                fromPartial(object: {
                    address?: string;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _31.Balance;
            };
            Params: {
                encode(message: _30.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _30.Params;
                fromJSON(object: any): _30.Params;
                toJSON(message: _30.Params): unknown;
                fromPartial(object: {
                    sendEnabled?: {
                        denom?: string;
                        enabled?: boolean;
                    }[];
                    defaultSendEnabled?: boolean;
                }): _30.Params;
            };
            SendEnabled: {
                encode(message: _30.SendEnabled, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _30.SendEnabled;
                fromJSON(object: any): _30.SendEnabled;
                toJSON(message: _30.SendEnabled): unknown;
                fromPartial(object: {
                    denom?: string;
                    enabled?: boolean;
                }): _30.SendEnabled;
            };
            Input: {
                encode(message: _30.Input, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _30.Input;
                fromJSON(object: any): _30.Input;
                toJSON(message: _30.Input): unknown;
                fromPartial(object: {
                    address?: string;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _30.Input;
            };
            Output: {
                encode(message: _30.Output, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _30.Output;
                fromJSON(object: any): _30.Output;
                toJSON(message: _30.Output): unknown;
                fromPartial(object: {
                    address?: string;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _30.Output;
            };
            Supply: {
                encode(message: _30.Supply, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _30.Supply;
                fromJSON(object: any): _30.Supply;
                toJSON(message: _30.Supply): unknown;
                fromPartial(object: {
                    total?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _30.Supply;
            };
            DenomUnit: {
                encode(message: _30.DenomUnit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _30.DenomUnit;
                fromJSON(object: any): _30.DenomUnit;
                toJSON(message: _30.DenomUnit): unknown;
                fromPartial(object: {
                    denom?: string;
                    exponent?: number;
                    aliases?: string[];
                }): _30.DenomUnit;
            };
            Metadata: {
                encode(message: _30.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _30.Metadata;
                fromJSON(object: any): _30.Metadata;
                toJSON(message: _30.Metadata): unknown;
                fromPartial(object: {
                    description?: string;
                    denomUnits?: {
                        denom?: string;
                        exponent?: number;
                        aliases?: string[];
                    }[];
                    base?: string;
                    display?: string;
                    name?: string;
                    symbol?: string;
                    uri?: string;
                    uriHash?: string;
                }): _30.Metadata;
            };
            SendAuthorization: {
                encode(message: _29.SendAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _29.SendAuthorization;
                fromJSON(object: any): _29.SendAuthorization;
                toJSON(message: _29.SendAuthorization): unknown;
                fromPartial(object: {
                    spendLimit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    allowList?: string[];
                }): _29.SendAuthorization;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    encode(message: _34.TxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _34.TxResponse;
                    fromJSON(object: any): _34.TxResponse;
                    toJSON(message: _34.TxResponse): unknown;
                    fromPartial(object: {
                        height?: bigint;
                        txhash?: string;
                        codespace?: string;
                        code?: number;
                        data?: string;
                        rawLog?: string;
                        logs?: {
                            msgIndex?: number;
                            log?: string;
                            events?: {
                                type?: string;
                                attributes?: {
                                    key?: string;
                                    value?: string;
                                }[];
                            }[];
                        }[];
                        info?: string;
                        gasWanted?: bigint;
                        gasUsed?: bigint;
                        tx?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        timestamp?: string;
                        events?: {
                            type?: string;
                            attributes?: {
                                key?: string;
                                value?: string;
                                index?: boolean;
                            }[];
                        }[];
                    }): _34.TxResponse;
                };
                ABCIMessageLog: {
                    encode(message: _34.ABCIMessageLog, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _34.ABCIMessageLog;
                    fromJSON(object: any): _34.ABCIMessageLog;
                    toJSON(message: _34.ABCIMessageLog): unknown;
                    fromPartial(object: {
                        msgIndex?: number;
                        log?: string;
                        events?: {
                            type?: string;
                            attributes?: {
                                key?: string;
                                value?: string;
                            }[];
                        }[];
                    }): _34.ABCIMessageLog;
                };
                StringEvent: {
                    encode(message: _34.StringEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _34.StringEvent;
                    fromJSON(object: any): _34.StringEvent;
                    toJSON(message: _34.StringEvent): unknown;
                    fromPartial(object: {
                        type?: string;
                        attributes?: {
                            key?: string;
                            value?: string;
                        }[];
                    }): _34.StringEvent;
                };
                Attribute: {
                    encode(message: _34.Attribute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _34.Attribute;
                    fromJSON(object: any): _34.Attribute;
                    toJSON(message: _34.Attribute): unknown;
                    fromPartial(object: {
                        key?: string;
                        value?: string;
                    }): _34.Attribute;
                };
                GasInfo: {
                    encode(message: _34.GasInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _34.GasInfo;
                    fromJSON(object: any): _34.GasInfo;
                    toJSON(message: _34.GasInfo): unknown;
                    fromPartial(object: {
                        gasWanted?: bigint;
                        gasUsed?: bigint;
                    }): _34.GasInfo;
                };
                Result: {
                    encode(message: _34.Result, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _34.Result;
                    fromJSON(object: any): _34.Result;
                    toJSON(message: _34.Result): unknown;
                    fromPartial(object: {
                        data?: Uint8Array;
                        log?: string;
                        events?: {
                            type?: string;
                            attributes?: {
                                key?: string;
                                value?: string;
                                index?: boolean;
                            }[];
                        }[];
                        msgResponses?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                    }): _34.Result;
                };
                SimulationResponse: {
                    encode(message: _34.SimulationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _34.SimulationResponse;
                    fromJSON(object: any): _34.SimulationResponse;
                    toJSON(message: _34.SimulationResponse): unknown;
                    fromPartial(object: {
                        gasInfo?: {
                            gasWanted?: bigint;
                            gasUsed?: bigint;
                        };
                        result?: {
                            data?: Uint8Array;
                            log?: string;
                            events?: {
                                type?: string;
                                attributes?: {
                                    key?: string;
                                    value?: string;
                                    index?: boolean;
                                }[];
                            }[];
                            msgResponses?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                        };
                    }): _34.SimulationResponse;
                };
                MsgData: {
                    encode(message: _34.MsgData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _34.MsgData;
                    fromJSON(object: any): _34.MsgData;
                    toJSON(message: _34.MsgData): unknown;
                    fromPartial(object: {
                        msgType?: string;
                        data?: Uint8Array;
                    }): _34.MsgData;
                };
                TxMsgData: {
                    encode(message: _34.TxMsgData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _34.TxMsgData;
                    fromJSON(object: any): _34.TxMsgData;
                    toJSON(message: _34.TxMsgData): unknown;
                    fromPartial(object: {
                        data?: {
                            msgType?: string;
                            data?: Uint8Array;
                        }[];
                        msgResponses?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                    }): _34.TxMsgData;
                };
                SearchTxsResult: {
                    encode(message: _34.SearchTxsResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _34.SearchTxsResult;
                    fromJSON(object: any): _34.SearchTxsResult;
                    toJSON(message: _34.SearchTxsResult): unknown;
                    fromPartial(object: {
                        totalCount?: bigint;
                        count?: bigint;
                        pageNumber?: bigint;
                        pageTotal?: bigint;
                        limit?: bigint;
                        txs?: {
                            height?: bigint;
                            txhash?: string;
                            codespace?: string;
                            code?: number;
                            data?: string;
                            rawLog?: string;
                            logs?: {
                                msgIndex?: number;
                                log?: string;
                                events?: {
                                    type?: string;
                                    attributes?: {
                                        key?: string;
                                        value?: string;
                                    }[];
                                }[];
                            }[];
                            info?: string;
                            gasWanted?: bigint;
                            gasUsed?: bigint;
                            tx?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            timestamp?: string;
                            events?: {
                                type?: string;
                                attributes?: {
                                    key?: string;
                                    value?: string;
                                    index?: boolean;
                                }[];
                            }[];
                        }[];
                    }): _34.SearchTxsResult;
                };
            };
        }
        namespace node {
            const v1beta1: {
                ServiceClientImpl: typeof _208.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    config(request?: _35.ConfigRequest): Promise<_35.ConfigResponse>;
                };
                LCDQueryClient: typeof _193.LCDQueryClient;
                ConfigRequest: {
                    encode(_: _35.ConfigRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _35.ConfigRequest;
                    fromJSON(_: any): _35.ConfigRequest;
                    toJSON(_: _35.ConfigRequest): unknown;
                    fromPartial(_: {}): _35.ConfigRequest;
                };
                ConfigResponse: {
                    encode(message: _35.ConfigResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _35.ConfigResponse;
                    fromJSON(object: any): _35.ConfigResponse;
                    toJSON(message: _35.ConfigResponse): unknown;
                    fromPartial(object: {
                        minimumGasPrice?: string;
                    }): _35.ConfigResponse;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    encode(message: _36.PageRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _36.PageRequest;
                    fromJSON(object: any): _36.PageRequest;
                    toJSON(message: _36.PageRequest): unknown;
                    fromPartial(object: {
                        key?: Uint8Array;
                        offset?: bigint;
                        limit?: bigint;
                        countTotal?: boolean;
                        reverse?: boolean;
                    }): _36.PageRequest;
                };
                PageResponse: {
                    encode(message: _36.PageResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _36.PageResponse;
                    fromJSON(object: any): _36.PageResponse;
                    toJSON(message: _36.PageResponse): unknown;
                    fromPartial(object: {
                        nextKey?: Uint8Array;
                        total?: bigint;
                    }): _36.PageResponse;
                };
            };
        }
        namespace reflection {
            const v2alpha1: {
                AppDescriptor: {
                    encode(message: _37.AppDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _37.AppDescriptor;
                    fromJSON(object: any): _37.AppDescriptor;
                    toJSON(message: _37.AppDescriptor): unknown;
                    fromPartial(object: {
                        authn?: {
                            signModes?: {
                                name?: string;
                                number?: number;
                                authnInfoProviderMethodFullname?: string;
                            }[];
                        };
                        chain?: {
                            id?: string;
                        };
                        codec?: {
                            interfaces?: {
                                fullname?: string;
                                interfaceAcceptingMessages?: {
                                    fullname?: string;
                                    fieldDescriptorNames?: string[];
                                }[];
                                interfaceImplementers?: {
                                    fullname?: string;
                                    typeUrl?: string;
                                }[];
                            }[];
                        };
                        configuration?: {
                            bech32AccountAddressPrefix?: string;
                        };
                        queryServices?: {
                            queryServices?: {
                                fullname?: string;
                                isModule?: boolean;
                                methods?: {
                                    name?: string;
                                    fullQueryPath?: string;
                                }[];
                            }[];
                        };
                        tx?: {
                            fullname?: string;
                            msgs?: {
                                msgTypeUrl?: string;
                            }[];
                        };
                    }): _37.AppDescriptor;
                };
                TxDescriptor: {
                    encode(message: _37.TxDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _37.TxDescriptor;
                    fromJSON(object: any): _37.TxDescriptor;
                    toJSON(message: _37.TxDescriptor): unknown;
                    fromPartial(object: {
                        fullname?: string;
                        msgs?: {
                            msgTypeUrl?: string;
                        }[];
                    }): _37.TxDescriptor;
                };
                AuthnDescriptor: {
                    encode(message: _37.AuthnDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _37.AuthnDescriptor;
                    fromJSON(object: any): _37.AuthnDescriptor;
                    toJSON(message: _37.AuthnDescriptor): unknown;
                    fromPartial(object: {
                        signModes?: {
                            name?: string;
                            number?: number;
                            authnInfoProviderMethodFullname?: string;
                        }[];
                    }): _37.AuthnDescriptor;
                };
                SigningModeDescriptor: {
                    encode(message: _37.SigningModeDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _37.SigningModeDescriptor;
                    fromJSON(object: any): _37.SigningModeDescriptor;
                    toJSON(message: _37.SigningModeDescriptor): unknown;
                    fromPartial(object: {
                        name?: string;
                        number?: number;
                        authnInfoProviderMethodFullname?: string;
                    }): _37.SigningModeDescriptor;
                };
                ChainDescriptor: {
                    encode(message: _37.ChainDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _37.ChainDescriptor;
                    fromJSON(object: any): _37.ChainDescriptor;
                    toJSON(message: _37.ChainDescriptor): unknown;
                    fromPartial(object: {
                        id?: string;
                    }): _37.ChainDescriptor;
                };
                CodecDescriptor: {
                    encode(message: _37.CodecDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _37.CodecDescriptor;
                    fromJSON(object: any): _37.CodecDescriptor;
                    toJSON(message: _37.CodecDescriptor): unknown;
                    fromPartial(object: {
                        interfaces?: {
                            fullname?: string;
                            interfaceAcceptingMessages?: {
                                fullname?: string;
                                fieldDescriptorNames?: string[];
                            }[];
                            interfaceImplementers?: {
                                fullname?: string;
                                typeUrl?: string;
                            }[];
                        }[];
                    }): _37.CodecDescriptor;
                };
                InterfaceDescriptor: {
                    encode(message: _37.InterfaceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _37.InterfaceDescriptor;
                    fromJSON(object: any): _37.InterfaceDescriptor;
                    toJSON(message: _37.InterfaceDescriptor): unknown;
                    fromPartial(object: {
                        fullname?: string;
                        interfaceAcceptingMessages?: {
                            fullname?: string;
                            fieldDescriptorNames?: string[];
                        }[];
                        interfaceImplementers?: {
                            fullname?: string;
                            typeUrl?: string;
                        }[];
                    }): _37.InterfaceDescriptor;
                };
                InterfaceImplementerDescriptor: {
                    encode(message: _37.InterfaceImplementerDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _37.InterfaceImplementerDescriptor;
                    fromJSON(object: any): _37.InterfaceImplementerDescriptor;
                    toJSON(message: _37.InterfaceImplementerDescriptor): unknown;
                    fromPartial(object: {
                        fullname?: string;
                        typeUrl?: string;
                    }): _37.InterfaceImplementerDescriptor;
                };
                InterfaceAcceptingMessageDescriptor: {
                    encode(message: _37.InterfaceAcceptingMessageDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _37.InterfaceAcceptingMessageDescriptor;
                    fromJSON(object: any): _37.InterfaceAcceptingMessageDescriptor;
                    toJSON(message: _37.InterfaceAcceptingMessageDescriptor): unknown;
                    fromPartial(object: {
                        fullname?: string;
                        fieldDescriptorNames?: string[];
                    }): _37.InterfaceAcceptingMessageDescriptor;
                };
                ConfigurationDescriptor: {
                    encode(message: _37.ConfigurationDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _37.ConfigurationDescriptor;
                    fromJSON(object: any): _37.ConfigurationDescriptor;
                    toJSON(message: _37.ConfigurationDescriptor): unknown;
                    fromPartial(object: {
                        bech32AccountAddressPrefix?: string;
                    }): _37.ConfigurationDescriptor;
                };
                MsgDescriptor: {
                    encode(message: _37.MsgDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _37.MsgDescriptor;
                    fromJSON(object: any): _37.MsgDescriptor;
                    toJSON(message: _37.MsgDescriptor): unknown;
                    fromPartial(object: {
                        msgTypeUrl?: string;
                    }): _37.MsgDescriptor;
                };
                GetAuthnDescriptorRequest: {
                    encode(_: _37.GetAuthnDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _37.GetAuthnDescriptorRequest;
                    fromJSON(_: any): _37.GetAuthnDescriptorRequest;
                    toJSON(_: _37.GetAuthnDescriptorRequest): unknown;
                    fromPartial(_: {}): _37.GetAuthnDescriptorRequest;
                };
                GetAuthnDescriptorResponse: {
                    encode(message: _37.GetAuthnDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _37.GetAuthnDescriptorResponse;
                    fromJSON(object: any): _37.GetAuthnDescriptorResponse;
                    toJSON(message: _37.GetAuthnDescriptorResponse): unknown;
                    fromPartial(object: {
                        authn?: {
                            signModes?: {
                                name?: string;
                                number?: number;
                                authnInfoProviderMethodFullname?: string;
                            }[];
                        };
                    }): _37.GetAuthnDescriptorResponse;
                };
                GetChainDescriptorRequest: {
                    encode(_: _37.GetChainDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _37.GetChainDescriptorRequest;
                    fromJSON(_: any): _37.GetChainDescriptorRequest;
                    toJSON(_: _37.GetChainDescriptorRequest): unknown;
                    fromPartial(_: {}): _37.GetChainDescriptorRequest;
                };
                GetChainDescriptorResponse: {
                    encode(message: _37.GetChainDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _37.GetChainDescriptorResponse;
                    fromJSON(object: any): _37.GetChainDescriptorResponse;
                    toJSON(message: _37.GetChainDescriptorResponse): unknown;
                    fromPartial(object: {
                        chain?: {
                            id?: string;
                        };
                    }): _37.GetChainDescriptorResponse;
                };
                GetCodecDescriptorRequest: {
                    encode(_: _37.GetCodecDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _37.GetCodecDescriptorRequest;
                    fromJSON(_: any): _37.GetCodecDescriptorRequest;
                    toJSON(_: _37.GetCodecDescriptorRequest): unknown;
                    fromPartial(_: {}): _37.GetCodecDescriptorRequest;
                };
                GetCodecDescriptorResponse: {
                    encode(message: _37.GetCodecDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _37.GetCodecDescriptorResponse;
                    fromJSON(object: any): _37.GetCodecDescriptorResponse;
                    toJSON(message: _37.GetCodecDescriptorResponse): unknown;
                    fromPartial(object: {
                        codec?: {
                            interfaces?: {
                                fullname?: string;
                                interfaceAcceptingMessages?: {
                                    fullname?: string;
                                    fieldDescriptorNames?: string[];
                                }[];
                                interfaceImplementers?: {
                                    fullname?: string;
                                    typeUrl?: string;
                                }[];
                            }[];
                        };
                    }): _37.GetCodecDescriptorResponse;
                };
                GetConfigurationDescriptorRequest: {
                    encode(_: _37.GetConfigurationDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _37.GetConfigurationDescriptorRequest;
                    fromJSON(_: any): _37.GetConfigurationDescriptorRequest;
                    toJSON(_: _37.GetConfigurationDescriptorRequest): unknown;
                    fromPartial(_: {}): _37.GetConfigurationDescriptorRequest;
                };
                GetConfigurationDescriptorResponse: {
                    encode(message: _37.GetConfigurationDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _37.GetConfigurationDescriptorResponse;
                    fromJSON(object: any): _37.GetConfigurationDescriptorResponse;
                    toJSON(message: _37.GetConfigurationDescriptorResponse): unknown;
                    fromPartial(object: {
                        config?: {
                            bech32AccountAddressPrefix?: string;
                        };
                    }): _37.GetConfigurationDescriptorResponse;
                };
                GetQueryServicesDescriptorRequest: {
                    encode(_: _37.GetQueryServicesDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _37.GetQueryServicesDescriptorRequest;
                    fromJSON(_: any): _37.GetQueryServicesDescriptorRequest;
                    toJSON(_: _37.GetQueryServicesDescriptorRequest): unknown;
                    fromPartial(_: {}): _37.GetQueryServicesDescriptorRequest;
                };
                GetQueryServicesDescriptorResponse: {
                    encode(message: _37.GetQueryServicesDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _37.GetQueryServicesDescriptorResponse;
                    fromJSON(object: any): _37.GetQueryServicesDescriptorResponse;
                    toJSON(message: _37.GetQueryServicesDescriptorResponse): unknown;
                    fromPartial(object: {
                        queries?: {
                            queryServices?: {
                                fullname?: string;
                                isModule?: boolean;
                                methods?: {
                                    name?: string;
                                    fullQueryPath?: string;
                                }[];
                            }[];
                        };
                    }): _37.GetQueryServicesDescriptorResponse;
                };
                GetTxDescriptorRequest: {
                    encode(_: _37.GetTxDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _37.GetTxDescriptorRequest;
                    fromJSON(_: any): _37.GetTxDescriptorRequest;
                    toJSON(_: _37.GetTxDescriptorRequest): unknown;
                    fromPartial(_: {}): _37.GetTxDescriptorRequest;
                };
                GetTxDescriptorResponse: {
                    encode(message: _37.GetTxDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _37.GetTxDescriptorResponse;
                    fromJSON(object: any): _37.GetTxDescriptorResponse;
                    toJSON(message: _37.GetTxDescriptorResponse): unknown;
                    fromPartial(object: {
                        tx?: {
                            fullname?: string;
                            msgs?: {
                                msgTypeUrl?: string;
                            }[];
                        };
                    }): _37.GetTxDescriptorResponse;
                };
                QueryServicesDescriptor: {
                    encode(message: _37.QueryServicesDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _37.QueryServicesDescriptor;
                    fromJSON(object: any): _37.QueryServicesDescriptor;
                    toJSON(message: _37.QueryServicesDescriptor): unknown;
                    fromPartial(object: {
                        queryServices?: {
                            fullname?: string;
                            isModule?: boolean;
                            methods?: {
                                name?: string;
                                fullQueryPath?: string;
                            }[];
                        }[];
                    }): _37.QueryServicesDescriptor;
                };
                QueryServiceDescriptor: {
                    encode(message: _37.QueryServiceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _37.QueryServiceDescriptor;
                    fromJSON(object: any): _37.QueryServiceDescriptor;
                    toJSON(message: _37.QueryServiceDescriptor): unknown;
                    fromPartial(object: {
                        fullname?: string;
                        isModule?: boolean;
                        methods?: {
                            name?: string;
                            fullQueryPath?: string;
                        }[];
                    }): _37.QueryServiceDescriptor;
                };
                QueryMethodDescriptor: {
                    encode(message: _37.QueryMethodDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _37.QueryMethodDescriptor;
                    fromJSON(object: any): _37.QueryMethodDescriptor;
                    toJSON(message: _37.QueryMethodDescriptor): unknown;
                    fromPartial(object: {
                        name?: string;
                        fullQueryPath?: string;
                    }): _37.QueryMethodDescriptor;
                };
            };
        }
        const v1beta1: {
            Coin: {
                encode(message: _38.Coin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _38.Coin;
                fromJSON(object: any): _38.Coin;
                toJSON(message: _38.Coin): unknown;
                fromPartial(object: {
                    denom?: string;
                    amount?: string;
                }): _38.Coin;
            };
            DecCoin: {
                encode(message: _38.DecCoin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _38.DecCoin;
                fromJSON(object: any): _38.DecCoin;
                toJSON(message: _38.DecCoin): unknown;
                fromPartial(object: {
                    denom?: string;
                    amount?: string;
                }): _38.DecCoin;
            };
            IntProto: {
                encode(message: _38.IntProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _38.IntProto;
                fromJSON(object: any): _38.IntProto;
                toJSON(message: _38.IntProto): unknown;
                fromPartial(object: {
                    int?: string;
                }): _38.IntProto;
            };
            DecProto: {
                encode(message: _38.DecProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _38.DecProto;
                fromJSON(object: any): _38.DecProto;
                toJSON(message: _38.DecProto): unknown;
                fromPartial(object: {
                    dec?: string;
                }): _38.DecProto;
            };
        };
    }
    namespace capability {
        namespace module {
            const v1: {
                Module: {
                    encode(message: _39.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _39.Module;
                    fromJSON(object: any): _39.Module;
                    toJSON(message: _39.Module): unknown;
                    fromPartial(object: {
                        sealKeeper?: boolean;
                    }): _39.Module;
                };
            };
        }
    }
    namespace consensus {
        namespace module {
            const v1: {
                Module: {
                    encode(message: _40.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _40.Module;
                    fromJSON(object: any): _40.Module;
                    toJSON(message: _40.Module): unknown;
                    fromPartial(object: {
                        authority?: string;
                    }): _40.Module;
                };
            };
        }
        const v1: {
            MsgClientImpl: typeof _223.MsgClientImpl;
            QueryClientImpl: typeof _209.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _41.QueryParamsRequest): Promise<_41.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _194.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    updateParams(value: _42.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    updateParams(value: _42.MsgUpdateParams): {
                        typeUrl: string;
                        value: _42.MsgUpdateParams;
                    };
                };
                toJSON: {
                    updateParams(value: _42.MsgUpdateParams): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _42.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    updateParams(value: _42.MsgUpdateParams): {
                        typeUrl: string;
                        value: _42.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.consensus.v1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: ({ authority, block, evidence, validator }: _42.MsgUpdateParams) => {
                        authority: string;
                        block: {
                            max_bytes: string;
                            max_gas: string;
                        };
                        evidence: {
                            max_age_num_blocks: string;
                            max_age_duration: {
                                seconds: string;
                                nanos: number;
                            };
                            max_bytes: string;
                        };
                        validator: {
                            pub_key_types: string[];
                        };
                    };
                    fromAmino: ({ authority, block, evidence, validator }: {
                        authority: string;
                        block: {
                            max_bytes: string;
                            max_gas: string;
                        };
                        evidence: {
                            max_age_num_blocks: string;
                            max_age_duration: {
                                seconds: string;
                                nanos: number;
                            };
                            max_bytes: string;
                        };
                        validator: {
                            pub_key_types: string[];
                        };
                    }) => _42.MsgUpdateParams;
                };
            };
            MsgUpdateParams: {
                encode(message: _42.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _42.MsgUpdateParams;
                fromJSON(object: any): _42.MsgUpdateParams;
                toJSON(message: _42.MsgUpdateParams): unknown;
                fromPartial(object: {
                    authority?: string;
                    block?: {
                        maxBytes?: bigint;
                        maxGas?: bigint;
                    };
                    evidence?: {
                        maxAgeNumBlocks?: bigint;
                        maxAgeDuration?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        maxBytes?: bigint;
                    };
                    validator?: {
                        pubKeyTypes?: string[];
                    };
                }): _42.MsgUpdateParams;
            };
            MsgUpdateParamsResponse: {
                encode(_: _42.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _42.MsgUpdateParamsResponse;
                fromJSON(_: any): _42.MsgUpdateParamsResponse;
                toJSON(_: _42.MsgUpdateParamsResponse): unknown;
                fromPartial(_: {}): _42.MsgUpdateParamsResponse;
            };
            QueryParamsRequest: {
                encode(_: _41.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _41.QueryParamsRequest;
                fromJSON(_: any): _41.QueryParamsRequest;
                toJSON(_: _41.QueryParamsRequest): unknown;
                fromPartial(_: {}): _41.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _41.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _41.QueryParamsResponse;
                fromJSON(object: any): _41.QueryParamsResponse;
                toJSON(message: _41.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        block?: {
                            maxBytes?: bigint;
                            maxGas?: bigint;
                        };
                        evidence?: {
                            maxAgeNumBlocks?: bigint;
                            maxAgeDuration?: {
                                seconds?: bigint;
                                nanos?: number;
                            };
                            maxBytes?: bigint;
                        };
                        validator?: {
                            pubKeyTypes?: string[];
                        };
                        version?: {
                            app?: bigint;
                        };
                    };
                }): _41.QueryParamsResponse;
            };
        };
    }
    namespace crisis {
        namespace module {
            const v1: {
                Module: {
                    encode(message: _43.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _43.Module;
                    fromJSON(object: any): _43.Module;
                    toJSON(message: _43.Module): unknown;
                    fromPartial(object: {
                        feeCollectorName?: string;
                        authority?: string;
                    }): _43.Module;
                };
            };
        }
    }
    namespace crypto {
        const ed25519: {
            PubKey: {
                encode(message: _44.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _44.PubKey;
                fromJSON(object: any): _44.PubKey;
                toJSON(message: _44.PubKey): unknown;
                fromPartial(object: {
                    key?: Uint8Array;
                }): _44.PubKey;
            };
            PrivKey: {
                encode(message: _44.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _44.PrivKey;
                fromJSON(object: any): _44.PrivKey;
                toJSON(message: _44.PrivKey): unknown;
                fromPartial(object: {
                    key?: Uint8Array;
                }): _44.PrivKey;
            };
        };
        namespace hd {
            const v1: {
                BIP44Params: {
                    encode(message: _45.BIP44Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _45.BIP44Params;
                    fromJSON(object: any): _45.BIP44Params;
                    toJSON(message: _45.BIP44Params): unknown;
                    fromPartial(object: {
                        purpose?: number;
                        coinType?: number;
                        account?: number;
                        change?: boolean;
                        addressIndex?: number;
                    }): _45.BIP44Params;
                };
            };
        }
        namespace keyring {
            const v1: {
                Record: {
                    encode(message: _46.Record, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _46.Record;
                    fromJSON(object: any): _46.Record;
                    toJSON(message: _46.Record): unknown;
                    fromPartial(object: {
                        name?: string;
                        pubKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        local?: {
                            privKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        };
                        ledger?: {
                            path?: {
                                purpose?: number;
                                coinType?: number;
                                account?: number;
                                change?: boolean;
                                addressIndex?: number;
                            };
                        };
                        multi?: {};
                        offline?: {};
                    }): _46.Record;
                };
                Record_Local: {
                    encode(message: _46.Record_Local, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _46.Record_Local;
                    fromJSON(object: any): _46.Record_Local;
                    toJSON(message: _46.Record_Local): unknown;
                    fromPartial(object: {
                        privKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }): _46.Record_Local;
                };
                Record_Ledger: {
                    encode(message: _46.Record_Ledger, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _46.Record_Ledger;
                    fromJSON(object: any): _46.Record_Ledger;
                    toJSON(message: _46.Record_Ledger): unknown;
                    fromPartial(object: {
                        path?: {
                            purpose?: number;
                            coinType?: number;
                            account?: number;
                            change?: boolean;
                            addressIndex?: number;
                        };
                    }): _46.Record_Ledger;
                };
                Record_Multi: {
                    encode(_: _46.Record_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _46.Record_Multi;
                    fromJSON(_: any): _46.Record_Multi;
                    toJSON(_: _46.Record_Multi): unknown;
                    fromPartial(_: {}): _46.Record_Multi;
                };
                Record_Offline: {
                    encode(_: _46.Record_Offline, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _46.Record_Offline;
                    fromJSON(_: any): _46.Record_Offline;
                    toJSON(_: _46.Record_Offline): unknown;
                    fromPartial(_: {}): _46.Record_Offline;
                };
            };
        }
        const multisig: {
            LegacyAminoPubKey: {
                encode(message: _47.LegacyAminoPubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _47.LegacyAminoPubKey;
                fromJSON(object: any): _47.LegacyAminoPubKey;
                toJSON(message: _47.LegacyAminoPubKey): unknown;
                fromPartial(object: {
                    threshold?: number;
                    publicKeys?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                }): _47.LegacyAminoPubKey;
            };
        };
        const secp256k1: {
            PubKey: {
                encode(message: _48.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _48.PubKey;
                fromJSON(object: any): _48.PubKey;
                toJSON(message: _48.PubKey): unknown;
                fromPartial(object: {
                    key?: Uint8Array;
                }): _48.PubKey;
            };
            PrivKey: {
                encode(message: _48.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _48.PrivKey;
                fromJSON(object: any): _48.PrivKey;
                toJSON(message: _48.PrivKey): unknown;
                fromPartial(object: {
                    key?: Uint8Array;
                }): _48.PrivKey;
            };
        };
        const secp256r1: {
            PubKey: {
                encode(message: _49.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _49.PubKey;
                fromJSON(object: any): _49.PubKey;
                toJSON(message: _49.PubKey): unknown;
                fromPartial(object: {
                    key?: Uint8Array;
                }): _49.PubKey;
            };
            PrivKey: {
                encode(message: _49.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _49.PrivKey;
                fromJSON(object: any): _49.PrivKey;
                toJSON(message: _49.PrivKey): unknown;
                fromPartial(object: {
                    secret?: Uint8Array;
                }): _49.PrivKey;
            };
        };
    }
    namespace distribution {
        namespace module {
            const v1: {
                Module: {
                    encode(message: _50.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _50.Module;
                    fromJSON(object: any): _50.Module;
                    toJSON(message: _50.Module): unknown;
                    fromPartial(object: {
                        feeCollectorName?: string;
                        authority?: string;
                    }): _50.Module;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _224.MsgClientImpl;
            QueryClientImpl: typeof _210.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _53.QueryParamsRequest): Promise<_53.QueryParamsResponse>;
                validatorDistributionInfo(request: _53.QueryValidatorDistributionInfoRequest): Promise<_53.QueryValidatorDistributionInfoResponse>;
                validatorOutstandingRewards(request: _53.QueryValidatorOutstandingRewardsRequest): Promise<_53.QueryValidatorOutstandingRewardsResponse>;
                validatorCommission(request: _53.QueryValidatorCommissionRequest): Promise<_53.QueryValidatorCommissionResponse>;
                validatorSlashes(request: _53.QueryValidatorSlashesRequest): Promise<_53.QueryValidatorSlashesResponse>;
                delegationRewards(request: _53.QueryDelegationRewardsRequest): Promise<_53.QueryDelegationRewardsResponse>;
                delegationTotalRewards(request: _53.QueryDelegationTotalRewardsRequest): Promise<_53.QueryDelegationTotalRewardsResponse>;
                delegatorValidators(request: _53.QueryDelegatorValidatorsRequest): Promise<_53.QueryDelegatorValidatorsResponse>;
                delegatorWithdrawAddress(request: _53.QueryDelegatorWithdrawAddressRequest): Promise<_53.QueryDelegatorWithdrawAddressResponse>;
                communityPool(request?: _53.QueryCommunityPoolRequest): Promise<_53.QueryCommunityPoolResponse>;
            };
            LCDQueryClient: typeof _195.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setWithdrawAddress(value: _54.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegatorReward(value: _54.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawValidatorCommission(value: _54.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    fundCommunityPool(value: _54.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _54.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    communityPoolSpend(value: _54.MsgCommunityPoolSpend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setWithdrawAddress(value: _54.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _54.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _54.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _54.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _54.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _54.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _54.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _54.MsgFundCommunityPool;
                    };
                    updateParams(value: _54.MsgUpdateParams): {
                        typeUrl: string;
                        value: _54.MsgUpdateParams;
                    };
                    communityPoolSpend(value: _54.MsgCommunityPoolSpend): {
                        typeUrl: string;
                        value: _54.MsgCommunityPoolSpend;
                    };
                };
                toJSON: {
                    setWithdrawAddress(value: _54.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: unknown;
                    };
                    withdrawDelegatorReward(value: _54.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: unknown;
                    };
                    withdrawValidatorCommission(value: _54.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: unknown;
                    };
                    fundCommunityPool(value: _54.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateParams(value: _54.MsgUpdateParams): {
                        typeUrl: string;
                        value: unknown;
                    };
                    communityPoolSpend(value: _54.MsgCommunityPoolSpend): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    setWithdrawAddress(value: any): {
                        typeUrl: string;
                        value: _54.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: any): {
                        typeUrl: string;
                        value: _54.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: any): {
                        typeUrl: string;
                        value: _54.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: any): {
                        typeUrl: string;
                        value: _54.MsgFundCommunityPool;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _54.MsgUpdateParams;
                    };
                    communityPoolSpend(value: any): {
                        typeUrl: string;
                        value: _54.MsgCommunityPoolSpend;
                    };
                };
                fromPartial: {
                    setWithdrawAddress(value: _54.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _54.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _54.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _54.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _54.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _54.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _54.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _54.MsgFundCommunityPool;
                    };
                    updateParams(value: _54.MsgUpdateParams): {
                        typeUrl: string;
                        value: _54.MsgUpdateParams;
                    };
                    communityPoolSpend(value: _54.MsgCommunityPoolSpend): {
                        typeUrl: string;
                        value: _54.MsgCommunityPoolSpend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, withdrawAddress }: _54.MsgSetWithdrawAddress) => {
                        delegator_address: string;
                        withdraw_address: string;
                    };
                    fromAmino: ({ delegator_address, withdraw_address }: {
                        delegator_address: string;
                        withdraw_address: string;
                    }) => _54.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress }: _54.MsgWithdrawDelegatorReward) => {
                        delegator_address: string;
                        validator_address: string;
                    };
                    fromAmino: ({ delegator_address, validator_address }: {
                        delegator_address: string;
                        validator_address: string;
                    }) => _54.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: ({ validatorAddress }: _54.MsgWithdrawValidatorCommission) => {
                        validator_address: string;
                    };
                    fromAmino: ({ validator_address }: {
                        validator_address: string;
                    }) => _54.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: ({ amount, depositor }: _54.MsgFundCommunityPool) => {
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                        depositor: string;
                    };
                    fromAmino: ({ amount, depositor }: {
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                        depositor: string;
                    }) => _54.MsgFundCommunityPool;
                };
                "/cosmos.distribution.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: ({ authority, params }: _54.MsgUpdateParams) => {
                        authority: string;
                        params: {
                            community_tax: string;
                            base_proposer_reward: string;
                            bonus_proposer_reward: string;
                            withdraw_addr_enabled: boolean;
                        };
                    };
                    fromAmino: ({ authority, params }: {
                        authority: string;
                        params: {
                            community_tax: string;
                            base_proposer_reward: string;
                            bonus_proposer_reward: string;
                            withdraw_addr_enabled: boolean;
                        };
                    }) => _54.MsgUpdateParams;
                };
                "/cosmos.distribution.v1beta1.MsgCommunityPoolSpend": {
                    aminoType: string;
                    toAmino: ({ authority, recipient, amount }: _54.MsgCommunityPoolSpend) => {
                        authority: string;
                        recipient: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ authority, recipient, amount }: {
                        authority: string;
                        recipient: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _54.MsgCommunityPoolSpend;
                };
            };
            MsgSetWithdrawAddress: {
                encode(message: _54.MsgSetWithdrawAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _54.MsgSetWithdrawAddress;
                fromJSON(object: any): _54.MsgSetWithdrawAddress;
                toJSON(message: _54.MsgSetWithdrawAddress): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                    withdrawAddress?: string;
                }): _54.MsgSetWithdrawAddress;
            };
            MsgSetWithdrawAddressResponse: {
                encode(_: _54.MsgSetWithdrawAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _54.MsgSetWithdrawAddressResponse;
                fromJSON(_: any): _54.MsgSetWithdrawAddressResponse;
                toJSON(_: _54.MsgSetWithdrawAddressResponse): unknown;
                fromPartial(_: {}): _54.MsgSetWithdrawAddressResponse;
            };
            MsgWithdrawDelegatorReward: {
                encode(message: _54.MsgWithdrawDelegatorReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _54.MsgWithdrawDelegatorReward;
                fromJSON(object: any): _54.MsgWithdrawDelegatorReward;
                toJSON(message: _54.MsgWithdrawDelegatorReward): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                }): _54.MsgWithdrawDelegatorReward;
            };
            MsgWithdrawDelegatorRewardResponse: {
                encode(message: _54.MsgWithdrawDelegatorRewardResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _54.MsgWithdrawDelegatorRewardResponse;
                fromJSON(object: any): _54.MsgWithdrawDelegatorRewardResponse;
                toJSON(message: _54.MsgWithdrawDelegatorRewardResponse): unknown;
                fromPartial(object: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _54.MsgWithdrawDelegatorRewardResponse;
            };
            MsgWithdrawValidatorCommission: {
                encode(message: _54.MsgWithdrawValidatorCommission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _54.MsgWithdrawValidatorCommission;
                fromJSON(object: any): _54.MsgWithdrawValidatorCommission;
                toJSON(message: _54.MsgWithdrawValidatorCommission): unknown;
                fromPartial(object: {
                    validatorAddress?: string;
                }): _54.MsgWithdrawValidatorCommission;
            };
            MsgWithdrawValidatorCommissionResponse: {
                encode(message: _54.MsgWithdrawValidatorCommissionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _54.MsgWithdrawValidatorCommissionResponse;
                fromJSON(object: any): _54.MsgWithdrawValidatorCommissionResponse;
                toJSON(message: _54.MsgWithdrawValidatorCommissionResponse): unknown;
                fromPartial(object: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _54.MsgWithdrawValidatorCommissionResponse;
            };
            MsgFundCommunityPool: {
                encode(message: _54.MsgFundCommunityPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _54.MsgFundCommunityPool;
                fromJSON(object: any): _54.MsgFundCommunityPool;
                toJSON(message: _54.MsgFundCommunityPool): unknown;
                fromPartial(object: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    depositor?: string;
                }): _54.MsgFundCommunityPool;
            };
            MsgFundCommunityPoolResponse: {
                encode(_: _54.MsgFundCommunityPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _54.MsgFundCommunityPoolResponse;
                fromJSON(_: any): _54.MsgFundCommunityPoolResponse;
                toJSON(_: _54.MsgFundCommunityPoolResponse): unknown;
                fromPartial(_: {}): _54.MsgFundCommunityPoolResponse;
            };
            MsgUpdateParams: {
                encode(message: _54.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _54.MsgUpdateParams;
                fromJSON(object: any): _54.MsgUpdateParams;
                toJSON(message: _54.MsgUpdateParams): unknown;
                fromPartial(object: {
                    authority?: string;
                    params?: {
                        communityTax?: string;
                        baseProposerReward?: string;
                        bonusProposerReward?: string;
                        withdrawAddrEnabled?: boolean;
                    };
                }): _54.MsgUpdateParams;
            };
            MsgUpdateParamsResponse: {
                encode(_: _54.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _54.MsgUpdateParamsResponse;
                fromJSON(_: any): _54.MsgUpdateParamsResponse;
                toJSON(_: _54.MsgUpdateParamsResponse): unknown;
                fromPartial(_: {}): _54.MsgUpdateParamsResponse;
            };
            MsgCommunityPoolSpend: {
                encode(message: _54.MsgCommunityPoolSpend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _54.MsgCommunityPoolSpend;
                fromJSON(object: any): _54.MsgCommunityPoolSpend;
                toJSON(message: _54.MsgCommunityPoolSpend): unknown;
                fromPartial(object: {
                    authority?: string;
                    recipient?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _54.MsgCommunityPoolSpend;
            };
            MsgCommunityPoolSpendResponse: {
                encode(_: _54.MsgCommunityPoolSpendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _54.MsgCommunityPoolSpendResponse;
                fromJSON(_: any): _54.MsgCommunityPoolSpendResponse;
                toJSON(_: _54.MsgCommunityPoolSpendResponse): unknown;
                fromPartial(_: {}): _54.MsgCommunityPoolSpendResponse;
            };
            QueryParamsRequest: {
                encode(_: _53.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _53.QueryParamsRequest;
                fromJSON(_: any): _53.QueryParamsRequest;
                toJSON(_: _53.QueryParamsRequest): unknown;
                fromPartial(_: {}): _53.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _53.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _53.QueryParamsResponse;
                fromJSON(object: any): _53.QueryParamsResponse;
                toJSON(message: _53.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        communityTax?: string;
                        baseProposerReward?: string;
                        bonusProposerReward?: string;
                        withdrawAddrEnabled?: boolean;
                    };
                }): _53.QueryParamsResponse;
            };
            QueryValidatorDistributionInfoRequest: {
                encode(message: _53.QueryValidatorDistributionInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _53.QueryValidatorDistributionInfoRequest;
                fromJSON(object: any): _53.QueryValidatorDistributionInfoRequest;
                toJSON(message: _53.QueryValidatorDistributionInfoRequest): unknown;
                fromPartial(object: {
                    validatorAddress?: string;
                }): _53.QueryValidatorDistributionInfoRequest;
            };
            QueryValidatorDistributionInfoResponse: {
                encode(message: _53.QueryValidatorDistributionInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _53.QueryValidatorDistributionInfoResponse;
                fromJSON(object: any): _53.QueryValidatorDistributionInfoResponse;
                toJSON(message: _53.QueryValidatorDistributionInfoResponse): unknown;
                fromPartial(object: {
                    operatorAddress?: string;
                    selfBondRewards?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    commission?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _53.QueryValidatorDistributionInfoResponse;
            };
            QueryValidatorOutstandingRewardsRequest: {
                encode(message: _53.QueryValidatorOutstandingRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _53.QueryValidatorOutstandingRewardsRequest;
                fromJSON(object: any): _53.QueryValidatorOutstandingRewardsRequest;
                toJSON(message: _53.QueryValidatorOutstandingRewardsRequest): unknown;
                fromPartial(object: {
                    validatorAddress?: string;
                }): _53.QueryValidatorOutstandingRewardsRequest;
            };
            QueryValidatorOutstandingRewardsResponse: {
                encode(message: _53.QueryValidatorOutstandingRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _53.QueryValidatorOutstandingRewardsResponse;
                fromJSON(object: any): _53.QueryValidatorOutstandingRewardsResponse;
                toJSON(message: _53.QueryValidatorOutstandingRewardsResponse): unknown;
                fromPartial(object: {
                    rewards?: {
                        rewards?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                }): _53.QueryValidatorOutstandingRewardsResponse;
            };
            QueryValidatorCommissionRequest: {
                encode(message: _53.QueryValidatorCommissionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _53.QueryValidatorCommissionRequest;
                fromJSON(object: any): _53.QueryValidatorCommissionRequest;
                toJSON(message: _53.QueryValidatorCommissionRequest): unknown;
                fromPartial(object: {
                    validatorAddress?: string;
                }): _53.QueryValidatorCommissionRequest;
            };
            QueryValidatorCommissionResponse: {
                encode(message: _53.QueryValidatorCommissionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _53.QueryValidatorCommissionResponse;
                fromJSON(object: any): _53.QueryValidatorCommissionResponse;
                toJSON(message: _53.QueryValidatorCommissionResponse): unknown;
                fromPartial(object: {
                    commission?: {
                        commission?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                }): _53.QueryValidatorCommissionResponse;
            };
            QueryValidatorSlashesRequest: {
                encode(message: _53.QueryValidatorSlashesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _53.QueryValidatorSlashesRequest;
                fromJSON(object: any): _53.QueryValidatorSlashesRequest;
                toJSON(message: _53.QueryValidatorSlashesRequest): unknown;
                fromPartial(object: {
                    validatorAddress?: string;
                    startingHeight?: bigint;
                    endingHeight?: bigint;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: bigint;
                        limit?: bigint;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _53.QueryValidatorSlashesRequest;
            };
            QueryValidatorSlashesResponse: {
                encode(message: _53.QueryValidatorSlashesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _53.QueryValidatorSlashesResponse;
                fromJSON(object: any): _53.QueryValidatorSlashesResponse;
                toJSON(message: _53.QueryValidatorSlashesResponse): unknown;
                fromPartial(object: {
                    slashes?: {
                        validatorPeriod?: bigint;
                        fraction?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: bigint;
                    };
                }): _53.QueryValidatorSlashesResponse;
            };
            QueryDelegationRewardsRequest: {
                encode(message: _53.QueryDelegationRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _53.QueryDelegationRewardsRequest;
                fromJSON(object: any): _53.QueryDelegationRewardsRequest;
                toJSON(message: _53.QueryDelegationRewardsRequest): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                }): _53.QueryDelegationRewardsRequest;
            };
            QueryDelegationRewardsResponse: {
                encode(message: _53.QueryDelegationRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _53.QueryDelegationRewardsResponse;
                fromJSON(object: any): _53.QueryDelegationRewardsResponse;
                toJSON(message: _53.QueryDelegationRewardsResponse): unknown;
                fromPartial(object: {
                    rewards?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _53.QueryDelegationRewardsResponse;
            };
            QueryDelegationTotalRewardsRequest: {
                encode(message: _53.QueryDelegationTotalRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _53.QueryDelegationTotalRewardsRequest;
                fromJSON(object: any): _53.QueryDelegationTotalRewardsRequest;
                toJSON(message: _53.QueryDelegationTotalRewardsRequest): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                }): _53.QueryDelegationTotalRewardsRequest;
            };
            QueryDelegationTotalRewardsResponse: {
                encode(message: _53.QueryDelegationTotalRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _53.QueryDelegationTotalRewardsResponse;
                fromJSON(object: any): _53.QueryDelegationTotalRewardsResponse;
                toJSON(message: _53.QueryDelegationTotalRewardsResponse): unknown;
                fromPartial(object: {
                    rewards?: {
                        validatorAddress?: string;
                        reward?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    total?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _53.QueryDelegationTotalRewardsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _53.QueryDelegatorValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _53.QueryDelegatorValidatorsRequest;
                fromJSON(object: any): _53.QueryDelegatorValidatorsRequest;
                toJSON(message: _53.QueryDelegatorValidatorsRequest): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                }): _53.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _53.QueryDelegatorValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _53.QueryDelegatorValidatorsResponse;
                fromJSON(object: any): _53.QueryDelegatorValidatorsResponse;
                toJSON(message: _53.QueryDelegatorValidatorsResponse): unknown;
                fromPartial(object: {
                    validators?: string[];
                }): _53.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorWithdrawAddressRequest: {
                encode(message: _53.QueryDelegatorWithdrawAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _53.QueryDelegatorWithdrawAddressRequest;
                fromJSON(object: any): _53.QueryDelegatorWithdrawAddressRequest;
                toJSON(message: _53.QueryDelegatorWithdrawAddressRequest): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                }): _53.QueryDelegatorWithdrawAddressRequest;
            };
            QueryDelegatorWithdrawAddressResponse: {
                encode(message: _53.QueryDelegatorWithdrawAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _53.QueryDelegatorWithdrawAddressResponse;
                fromJSON(object: any): _53.QueryDelegatorWithdrawAddressResponse;
                toJSON(message: _53.QueryDelegatorWithdrawAddressResponse): unknown;
                fromPartial(object: {
                    withdrawAddress?: string;
                }): _53.QueryDelegatorWithdrawAddressResponse;
            };
            QueryCommunityPoolRequest: {
                encode(_: _53.QueryCommunityPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _53.QueryCommunityPoolRequest;
                fromJSON(_: any): _53.QueryCommunityPoolRequest;
                toJSON(_: _53.QueryCommunityPoolRequest): unknown;
                fromPartial(_: {}): _53.QueryCommunityPoolRequest;
            };
            QueryCommunityPoolResponse: {
                encode(message: _53.QueryCommunityPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _53.QueryCommunityPoolResponse;
                fromJSON(object: any): _53.QueryCommunityPoolResponse;
                toJSON(message: _53.QueryCommunityPoolResponse): unknown;
                fromPartial(object: {
                    pool?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _53.QueryCommunityPoolResponse;
            };
            DelegatorWithdrawInfo: {
                encode(message: _52.DelegatorWithdrawInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _52.DelegatorWithdrawInfo;
                fromJSON(object: any): _52.DelegatorWithdrawInfo;
                toJSON(message: _52.DelegatorWithdrawInfo): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                    withdrawAddress?: string;
                }): _52.DelegatorWithdrawInfo;
            };
            ValidatorOutstandingRewardsRecord: {
                encode(message: _52.ValidatorOutstandingRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _52.ValidatorOutstandingRewardsRecord;
                fromJSON(object: any): _52.ValidatorOutstandingRewardsRecord;
                toJSON(message: _52.ValidatorOutstandingRewardsRecord): unknown;
                fromPartial(object: {
                    validatorAddress?: string;
                    outstandingRewards?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _52.ValidatorOutstandingRewardsRecord;
            };
            ValidatorAccumulatedCommissionRecord: {
                encode(message: _52.ValidatorAccumulatedCommissionRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _52.ValidatorAccumulatedCommissionRecord;
                fromJSON(object: any): _52.ValidatorAccumulatedCommissionRecord;
                toJSON(message: _52.ValidatorAccumulatedCommissionRecord): unknown;
                fromPartial(object: {
                    validatorAddress?: string;
                    accumulated?: {
                        commission?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                }): _52.ValidatorAccumulatedCommissionRecord;
            };
            ValidatorHistoricalRewardsRecord: {
                encode(message: _52.ValidatorHistoricalRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _52.ValidatorHistoricalRewardsRecord;
                fromJSON(object: any): _52.ValidatorHistoricalRewardsRecord;
                toJSON(message: _52.ValidatorHistoricalRewardsRecord): unknown;
                fromPartial(object: {
                    validatorAddress?: string;
                    period?: bigint;
                    rewards?: {
                        cumulativeRewardRatio?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        referenceCount?: number;
                    };
                }): _52.ValidatorHistoricalRewardsRecord;
            };
            ValidatorCurrentRewardsRecord: {
                encode(message: _52.ValidatorCurrentRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _52.ValidatorCurrentRewardsRecord;
                fromJSON(object: any): _52.ValidatorCurrentRewardsRecord;
                toJSON(message: _52.ValidatorCurrentRewardsRecord): unknown;
                fromPartial(object: {
                    validatorAddress?: string;
                    rewards?: {
                        rewards?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        period?: bigint;
                    };
                }): _52.ValidatorCurrentRewardsRecord;
            };
            DelegatorStartingInfoRecord: {
                encode(message: _52.DelegatorStartingInfoRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _52.DelegatorStartingInfoRecord;
                fromJSON(object: any): _52.DelegatorStartingInfoRecord;
                toJSON(message: _52.DelegatorStartingInfoRecord): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                    startingInfo?: {
                        previousPeriod?: bigint;
                        stake?: string;
                        height?: bigint;
                    };
                }): _52.DelegatorStartingInfoRecord;
            };
            ValidatorSlashEventRecord: {
                encode(message: _52.ValidatorSlashEventRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _52.ValidatorSlashEventRecord;
                fromJSON(object: any): _52.ValidatorSlashEventRecord;
                toJSON(message: _52.ValidatorSlashEventRecord): unknown;
                fromPartial(object: {
                    validatorAddress?: string;
                    height?: bigint;
                    period?: bigint;
                    validatorSlashEvent?: {
                        validatorPeriod?: bigint;
                        fraction?: string;
                    };
                }): _52.ValidatorSlashEventRecord;
            };
            GenesisState: {
                encode(message: _52.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _52.GenesisState;
                fromJSON(object: any): _52.GenesisState;
                toJSON(message: _52.GenesisState): unknown;
                fromPartial(object: {
                    params?: {
                        communityTax?: string;
                        baseProposerReward?: string;
                        bonusProposerReward?: string;
                        withdrawAddrEnabled?: boolean;
                    };
                    feePool?: {
                        communityPool?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                    delegatorWithdrawInfos?: {
                        delegatorAddress?: string;
                        withdrawAddress?: string;
                    }[];
                    previousProposer?: string;
                    outstandingRewards?: {
                        validatorAddress?: string;
                        outstandingRewards?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    validatorAccumulatedCommissions?: {
                        validatorAddress?: string;
                        accumulated?: {
                            commission?: {
                                denom?: string;
                                amount?: string;
                            }[];
                        };
                    }[];
                    validatorHistoricalRewards?: {
                        validatorAddress?: string;
                        period?: bigint;
                        rewards?: {
                            cumulativeRewardRatio?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            referenceCount?: number;
                        };
                    }[];
                    validatorCurrentRewards?: {
                        validatorAddress?: string;
                        rewards?: {
                            rewards?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            period?: bigint;
                        };
                    }[];
                    delegatorStartingInfos?: {
                        delegatorAddress?: string;
                        validatorAddress?: string;
                        startingInfo?: {
                            previousPeriod?: bigint;
                            stake?: string;
                            height?: bigint;
                        };
                    }[];
                    validatorSlashEvents?: {
                        validatorAddress?: string;
                        height?: bigint;
                        period?: bigint;
                        validatorSlashEvent?: {
                            validatorPeriod?: bigint;
                            fraction?: string;
                        };
                    }[];
                }): _52.GenesisState;
            };
            Params: {
                encode(message: _51.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _51.Params;
                fromJSON(object: any): _51.Params;
                toJSON(message: _51.Params): unknown;
                fromPartial(object: {
                    communityTax?: string;
                    baseProposerReward?: string;
                    bonusProposerReward?: string;
                    withdrawAddrEnabled?: boolean;
                }): _51.Params;
            };
            ValidatorHistoricalRewards: {
                encode(message: _51.ValidatorHistoricalRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _51.ValidatorHistoricalRewards;
                fromJSON(object: any): _51.ValidatorHistoricalRewards;
                toJSON(message: _51.ValidatorHistoricalRewards): unknown;
                fromPartial(object: {
                    cumulativeRewardRatio?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    referenceCount?: number;
                }): _51.ValidatorHistoricalRewards;
            };
            ValidatorCurrentRewards: {
                encode(message: _51.ValidatorCurrentRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _51.ValidatorCurrentRewards;
                fromJSON(object: any): _51.ValidatorCurrentRewards;
                toJSON(message: _51.ValidatorCurrentRewards): unknown;
                fromPartial(object: {
                    rewards?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    period?: bigint;
                }): _51.ValidatorCurrentRewards;
            };
            ValidatorAccumulatedCommission: {
                encode(message: _51.ValidatorAccumulatedCommission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _51.ValidatorAccumulatedCommission;
                fromJSON(object: any): _51.ValidatorAccumulatedCommission;
                toJSON(message: _51.ValidatorAccumulatedCommission): unknown;
                fromPartial(object: {
                    commission?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _51.ValidatorAccumulatedCommission;
            };
            ValidatorOutstandingRewards: {
                encode(message: _51.ValidatorOutstandingRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _51.ValidatorOutstandingRewards;
                fromJSON(object: any): _51.ValidatorOutstandingRewards;
                toJSON(message: _51.ValidatorOutstandingRewards): unknown;
                fromPartial(object: {
                    rewards?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _51.ValidatorOutstandingRewards;
            };
            ValidatorSlashEvent: {
                encode(message: _51.ValidatorSlashEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _51.ValidatorSlashEvent;
                fromJSON(object: any): _51.ValidatorSlashEvent;
                toJSON(message: _51.ValidatorSlashEvent): unknown;
                fromPartial(object: {
                    validatorPeriod?: bigint;
                    fraction?: string;
                }): _51.ValidatorSlashEvent;
            };
            ValidatorSlashEvents: {
                encode(message: _51.ValidatorSlashEvents, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _51.ValidatorSlashEvents;
                fromJSON(object: any): _51.ValidatorSlashEvents;
                toJSON(message: _51.ValidatorSlashEvents): unknown;
                fromPartial(object: {
                    validatorSlashEvents?: {
                        validatorPeriod?: bigint;
                        fraction?: string;
                    }[];
                }): _51.ValidatorSlashEvents;
            };
            FeePool: {
                encode(message: _51.FeePool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _51.FeePool;
                fromJSON(object: any): _51.FeePool;
                toJSON(message: _51.FeePool): unknown;
                fromPartial(object: {
                    communityPool?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _51.FeePool;
            };
            CommunityPoolSpendProposal: {
                encode(message: _51.CommunityPoolSpendProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _51.CommunityPoolSpendProposal;
                fromJSON(object: any): _51.CommunityPoolSpendProposal;
                toJSON(message: _51.CommunityPoolSpendProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    recipient?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _51.CommunityPoolSpendProposal;
            };
            DelegatorStartingInfo: {
                encode(message: _51.DelegatorStartingInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _51.DelegatorStartingInfo;
                fromJSON(object: any): _51.DelegatorStartingInfo;
                toJSON(message: _51.DelegatorStartingInfo): unknown;
                fromPartial(object: {
                    previousPeriod?: bigint;
                    stake?: string;
                    height?: bigint;
                }): _51.DelegatorStartingInfo;
            };
            DelegationDelegatorReward: {
                encode(message: _51.DelegationDelegatorReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _51.DelegationDelegatorReward;
                fromJSON(object: any): _51.DelegationDelegatorReward;
                toJSON(message: _51.DelegationDelegatorReward): unknown;
                fromPartial(object: {
                    validatorAddress?: string;
                    reward?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _51.DelegationDelegatorReward;
            };
            CommunityPoolSpendProposalWithDeposit: {
                encode(message: _51.CommunityPoolSpendProposalWithDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _51.CommunityPoolSpendProposalWithDeposit;
                fromJSON(object: any): _51.CommunityPoolSpendProposalWithDeposit;
                toJSON(message: _51.CommunityPoolSpendProposalWithDeposit): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    recipient?: string;
                    amount?: string;
                    deposit?: string;
                }): _51.CommunityPoolSpendProposalWithDeposit;
            };
        };
    }
    namespace evidence {
        namespace module {
            const v1: {
                Module: {
                    encode(_: _55.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _55.Module;
                    fromJSON(_: any): _55.Module;
                    toJSON(_: _55.Module): unknown;
                    fromPartial(_: {}): _55.Module;
                };
            };
        }
    }
    namespace feegrant {
        namespace module {
            const v1: {
                Module: {
                    encode(_: _56.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _56.Module;
                    fromJSON(_: any): _56.Module;
                    toJSON(_: _56.Module): unknown;
                    fromPartial(_: {}): _56.Module;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _225.MsgClientImpl;
            QueryClientImpl: typeof _211.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                allowance(request: _59.QueryAllowanceRequest): Promise<_59.QueryAllowanceResponse>;
                allowances(request: _59.QueryAllowancesRequest): Promise<_59.QueryAllowancesResponse>;
                allowancesByGranter(request: _59.QueryAllowancesByGranterRequest): Promise<_59.QueryAllowancesByGranterResponse>;
            };
            LCDQueryClient: typeof _196.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grantAllowance(value: _60.MsgGrantAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revokeAllowance(value: _60.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grantAllowance(value: _60.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _60.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _60.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _60.MsgRevokeAllowance;
                    };
                };
                toJSON: {
                    grantAllowance(value: _60.MsgGrantAllowance): {
                        typeUrl: string;
                        value: unknown;
                    };
                    revokeAllowance(value: _60.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    grantAllowance(value: any): {
                        typeUrl: string;
                        value: _60.MsgGrantAllowance;
                    };
                    revokeAllowance(value: any): {
                        typeUrl: string;
                        value: _60.MsgRevokeAllowance;
                    };
                };
                fromPartial: {
                    grantAllowance(value: _60.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _60.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _60.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _60.MsgRevokeAllowance;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, allowance }: _60.MsgGrantAllowance) => {
                        granter: string;
                        grantee: string;
                        allowance: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    };
                    fromAmino: ({ granter, grantee, allowance }: {
                        granter: string;
                        grantee: string;
                        allowance: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    }) => _60.MsgGrantAllowance;
                };
                "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
                    aminoType: string;
                    toAmino: ({ granter, grantee }: _60.MsgRevokeAllowance) => {
                        granter: string;
                        grantee: string;
                    };
                    fromAmino: ({ granter, grantee }: {
                        granter: string;
                        grantee: string;
                    }) => _60.MsgRevokeAllowance;
                };
            };
            MsgGrantAllowance: {
                encode(message: _60.MsgGrantAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _60.MsgGrantAllowance;
                fromJSON(object: any): _60.MsgGrantAllowance;
                toJSON(message: _60.MsgGrantAllowance): unknown;
                fromPartial(object: {
                    granter?: string;
                    grantee?: string;
                    allowance?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    } | {
                        spendLimit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        expiration?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                    } | {
                        basic?: {
                            spendLimit?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            expiration?: {
                                seconds?: bigint;
                                nanos?: number;
                            };
                        };
                        period?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        periodSpendLimit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        periodCanSpend?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        periodReset?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                    } | {
                        allowance?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } | {
                            spendLimit?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            expiration?: {
                                seconds?: bigint;
                                nanos?: number;
                            };
                        } | {
                            basic?: {
                                spendLimit?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                expiration?: {
                                    seconds?: bigint;
                                    nanos?: number;
                                };
                            };
                            period?: {
                                seconds?: bigint;
                                nanos?: number;
                            };
                            periodSpendLimit?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            periodCanSpend?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            periodReset?: {
                                seconds?: bigint;
                                nanos?: number;
                            };
                        } | any;
                        allowedMessages?: string[];
                    };
                }): _60.MsgGrantAllowance;
            };
            MsgGrantAllowanceResponse: {
                encode(_: _60.MsgGrantAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _60.MsgGrantAllowanceResponse;
                fromJSON(_: any): _60.MsgGrantAllowanceResponse;
                toJSON(_: _60.MsgGrantAllowanceResponse): unknown;
                fromPartial(_: {}): _60.MsgGrantAllowanceResponse;
            };
            MsgRevokeAllowance: {
                encode(message: _60.MsgRevokeAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _60.MsgRevokeAllowance;
                fromJSON(object: any): _60.MsgRevokeAllowance;
                toJSON(message: _60.MsgRevokeAllowance): unknown;
                fromPartial(object: {
                    granter?: string;
                    grantee?: string;
                }): _60.MsgRevokeAllowance;
            };
            MsgRevokeAllowanceResponse: {
                encode(_: _60.MsgRevokeAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _60.MsgRevokeAllowanceResponse;
                fromJSON(_: any): _60.MsgRevokeAllowanceResponse;
                toJSON(_: _60.MsgRevokeAllowanceResponse): unknown;
                fromPartial(_: {}): _60.MsgRevokeAllowanceResponse;
            };
            Cosmos_feegrantv1beta1FeeAllowanceI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _57.BasicAllowance | _57.PeriodicAllowance | _57.AllowedMsgAllowance;
            QueryAllowanceRequest: {
                encode(message: _59.QueryAllowanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _59.QueryAllowanceRequest;
                fromJSON(object: any): _59.QueryAllowanceRequest;
                toJSON(message: _59.QueryAllowanceRequest): unknown;
                fromPartial(object: {
                    granter?: string;
                    grantee?: string;
                }): _59.QueryAllowanceRequest;
            };
            QueryAllowanceResponse: {
                encode(message: _59.QueryAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _59.QueryAllowanceResponse;
                fromJSON(object: any): _59.QueryAllowanceResponse;
                toJSON(message: _59.QueryAllowanceResponse): unknown;
                fromPartial(object: {
                    allowance?: {
                        granter?: string;
                        grantee?: string;
                        allowance?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } | {
                            spendLimit?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            expiration?: {
                                seconds?: bigint;
                                nanos?: number;
                            };
                        } | {
                            basic?: {
                                spendLimit?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                expiration?: {
                                    seconds?: bigint;
                                    nanos?: number;
                                };
                            };
                            period?: {
                                seconds?: bigint;
                                nanos?: number;
                            };
                            periodSpendLimit?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            periodCanSpend?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            periodReset?: {
                                seconds?: bigint;
                                nanos?: number;
                            };
                        } | {
                            allowance?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            } | {
                                spendLimit?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                expiration?: {
                                    seconds?: bigint;
                                    nanos?: number;
                                };
                            } | {
                                basic?: {
                                    spendLimit?: {
                                        denom?: string;
                                        amount?: string;
                                    }[];
                                    expiration?: {
                                        seconds?: bigint;
                                        nanos?: number;
                                    };
                                };
                                period?: {
                                    seconds?: bigint;
                                    nanos?: number;
                                };
                                periodSpendLimit?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                periodCanSpend?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                periodReset?: {
                                    seconds?: bigint;
                                    nanos?: number;
                                };
                            } | any;
                            allowedMessages?: string[];
                        };
                    };
                }): _59.QueryAllowanceResponse;
            };
            QueryAllowancesRequest: {
                encode(message: _59.QueryAllowancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _59.QueryAllowancesRequest;
                fromJSON(object: any): _59.QueryAllowancesRequest;
                toJSON(message: _59.QueryAllowancesRequest): unknown;
                fromPartial(object: {
                    grantee?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: bigint;
                        limit?: bigint;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _59.QueryAllowancesRequest;
            };
            QueryAllowancesResponse: {
                encode(message: _59.QueryAllowancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _59.QueryAllowancesResponse;
                fromJSON(object: any): _59.QueryAllowancesResponse;
                toJSON(message: _59.QueryAllowancesResponse): unknown;
                fromPartial(object: {
                    allowances?: {
                        granter?: string;
                        grantee?: string;
                        allowance?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } | {
                            spendLimit?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            expiration?: {
                                seconds?: bigint;
                                nanos?: number;
                            };
                        } | {
                            basic?: {
                                spendLimit?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                expiration?: {
                                    seconds?: bigint;
                                    nanos?: number;
                                };
                            };
                            period?: {
                                seconds?: bigint;
                                nanos?: number;
                            };
                            periodSpendLimit?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            periodCanSpend?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            periodReset?: {
                                seconds?: bigint;
                                nanos?: number;
                            };
                        } | {
                            allowance?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            } | {
                                spendLimit?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                expiration?: {
                                    seconds?: bigint;
                                    nanos?: number;
                                };
                            } | {
                                basic?: {
                                    spendLimit?: {
                                        denom?: string;
                                        amount?: string;
                                    }[];
                                    expiration?: {
                                        seconds?: bigint;
                                        nanos?: number;
                                    };
                                };
                                period?: {
                                    seconds?: bigint;
                                    nanos?: number;
                                };
                                periodSpendLimit?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                periodCanSpend?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                periodReset?: {
                                    seconds?: bigint;
                                    nanos?: number;
                                };
                            } | any;
                            allowedMessages?: string[];
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: bigint;
                    };
                }): _59.QueryAllowancesResponse;
            };
            QueryAllowancesByGranterRequest: {
                encode(message: _59.QueryAllowancesByGranterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _59.QueryAllowancesByGranterRequest;
                fromJSON(object: any): _59.QueryAllowancesByGranterRequest;
                toJSON(message: _59.QueryAllowancesByGranterRequest): unknown;
                fromPartial(object: {
                    granter?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: bigint;
                        limit?: bigint;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _59.QueryAllowancesByGranterRequest;
            };
            QueryAllowancesByGranterResponse: {
                encode(message: _59.QueryAllowancesByGranterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _59.QueryAllowancesByGranterResponse;
                fromJSON(object: any): _59.QueryAllowancesByGranterResponse;
                toJSON(message: _59.QueryAllowancesByGranterResponse): unknown;
                fromPartial(object: {
                    allowances?: {
                        granter?: string;
                        grantee?: string;
                        allowance?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } | {
                            spendLimit?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            expiration?: {
                                seconds?: bigint;
                                nanos?: number;
                            };
                        } | {
                            basic?: {
                                spendLimit?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                expiration?: {
                                    seconds?: bigint;
                                    nanos?: number;
                                };
                            };
                            period?: {
                                seconds?: bigint;
                                nanos?: number;
                            };
                            periodSpendLimit?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            periodCanSpend?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            periodReset?: {
                                seconds?: bigint;
                                nanos?: number;
                            };
                        } | {
                            allowance?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            } | {
                                spendLimit?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                expiration?: {
                                    seconds?: bigint;
                                    nanos?: number;
                                };
                            } | {
                                basic?: {
                                    spendLimit?: {
                                        denom?: string;
                                        amount?: string;
                                    }[];
                                    expiration?: {
                                        seconds?: bigint;
                                        nanos?: number;
                                    };
                                };
                                period?: {
                                    seconds?: bigint;
                                    nanos?: number;
                                };
                                periodSpendLimit?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                periodCanSpend?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                periodReset?: {
                                    seconds?: bigint;
                                    nanos?: number;
                                };
                            } | any;
                            allowedMessages?: string[];
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: bigint;
                    };
                }): _59.QueryAllowancesByGranterResponse;
            };
            GenesisState: {
                encode(message: _58.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _58.GenesisState;
                fromJSON(object: any): _58.GenesisState;
                toJSON(message: _58.GenesisState): unknown;
                fromPartial(object: {
                    allowances?: {
                        granter?: string;
                        grantee?: string;
                        allowance?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } | {
                            spendLimit?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            expiration?: {
                                seconds?: bigint;
                                nanos?: number;
                            };
                        } | {
                            basic?: {
                                spendLimit?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                expiration?: {
                                    seconds?: bigint;
                                    nanos?: number;
                                };
                            };
                            period?: {
                                seconds?: bigint;
                                nanos?: number;
                            };
                            periodSpendLimit?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            periodCanSpend?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            periodReset?: {
                                seconds?: bigint;
                                nanos?: number;
                            };
                        } | {
                            allowance?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            } | {
                                spendLimit?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                expiration?: {
                                    seconds?: bigint;
                                    nanos?: number;
                                };
                            } | {
                                basic?: {
                                    spendLimit?: {
                                        denom?: string;
                                        amount?: string;
                                    }[];
                                    expiration?: {
                                        seconds?: bigint;
                                        nanos?: number;
                                    };
                                };
                                period?: {
                                    seconds?: bigint;
                                    nanos?: number;
                                };
                                periodSpendLimit?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                periodCanSpend?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                periodReset?: {
                                    seconds?: bigint;
                                    nanos?: number;
                                };
                            } | any;
                            allowedMessages?: string[];
                        };
                    }[];
                }): _58.GenesisState;
            };
            BasicAllowance: {
                encode(message: _57.BasicAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _57.BasicAllowance;
                fromJSON(object: any): _57.BasicAllowance;
                toJSON(message: _57.BasicAllowance): unknown;
                fromPartial(object: {
                    spendLimit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    expiration?: {
                        seconds?: bigint;
                        nanos?: number;
                    };
                }): _57.BasicAllowance;
            };
            PeriodicAllowance: {
                encode(message: _57.PeriodicAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _57.PeriodicAllowance;
                fromJSON(object: any): _57.PeriodicAllowance;
                toJSON(message: _57.PeriodicAllowance): unknown;
                fromPartial(object: {
                    basic?: {
                        spendLimit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        expiration?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                    };
                    period?: {
                        seconds?: bigint;
                        nanos?: number;
                    };
                    periodSpendLimit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    periodCanSpend?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    periodReset?: {
                        seconds?: bigint;
                        nanos?: number;
                    };
                }): _57.PeriodicAllowance;
            };
            AllowedMsgAllowance: {
                encode(message: _57.AllowedMsgAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _57.AllowedMsgAllowance;
                fromJSON(object: any): _57.AllowedMsgAllowance;
                toJSON(message: _57.AllowedMsgAllowance): unknown;
                fromPartial(object: {
                    allowance?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    } | {
                        spendLimit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        expiration?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                    } | {
                        basic?: {
                            spendLimit?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            expiration?: {
                                seconds?: bigint;
                                nanos?: number;
                            };
                        };
                        period?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        periodSpendLimit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        periodCanSpend?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        periodReset?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                    } | any;
                    allowedMessages?: string[];
                }): _57.AllowedMsgAllowance;
            };
            Grant: {
                encode(message: _57.Grant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _57.Grant;
                fromJSON(object: any): _57.Grant;
                toJSON(message: _57.Grant): unknown;
                fromPartial(object: {
                    granter?: string;
                    grantee?: string;
                    allowance?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    } | {
                        spendLimit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        expiration?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                    } | {
                        basic?: {
                            spendLimit?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            expiration?: {
                                seconds?: bigint;
                                nanos?: number;
                            };
                        };
                        period?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        periodSpendLimit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        periodCanSpend?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        periodReset?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                    } | {
                        allowance?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } | {
                            spendLimit?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            expiration?: {
                                seconds?: bigint;
                                nanos?: number;
                            };
                        } | {
                            basic?: {
                                spendLimit?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                expiration?: {
                                    seconds?: bigint;
                                    nanos?: number;
                                };
                            };
                            period?: {
                                seconds?: bigint;
                                nanos?: number;
                            };
                            periodSpendLimit?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            periodCanSpend?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            periodReset?: {
                                seconds?: bigint;
                                nanos?: number;
                            };
                        } | any;
                        allowedMessages?: string[];
                    };
                }): _57.Grant;
            };
        };
    }
    namespace genutil {
        namespace module {
            const v1: {
                Module: {
                    encode(_: _61.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _61.Module;
                    fromJSON(_: any): _61.Module;
                    toJSON(_: _61.Module): unknown;
                    fromPartial(_: {}): _61.Module;
                };
            };
        }
    }
    namespace gov {
        namespace module {
            const v1: {
                Module: {
                    encode(message: _62.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _62.Module;
                    fromJSON(object: any): _62.Module;
                    toJSON(message: _62.Module): unknown;
                    fromPartial(object: {
                        maxMetadataLen?: bigint;
                        authority?: string;
                    }): _62.Module;
                };
            };
        }
        const v1: {
            MsgClientImpl: typeof _226.MsgClientImpl;
            QueryClientImpl: typeof _212.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _65.QueryProposalRequest): Promise<_65.QueryProposalResponse>;
                proposals(request: _65.QueryProposalsRequest): Promise<_65.QueryProposalsResponse>;
                vote(request: _65.QueryVoteRequest): Promise<_65.QueryVoteResponse>;
                votes(request: _65.QueryVotesRequest): Promise<_65.QueryVotesResponse>;
                params(request: _65.QueryParamsRequest): Promise<_65.QueryParamsResponse>;
                deposit(request: _65.QueryDepositRequest): Promise<_65.QueryDepositResponse>;
                deposits(request: _65.QueryDepositsRequest): Promise<_65.QueryDepositsResponse>;
                tallyResult(request: _65.QueryTallyResultRequest): Promise<_65.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _197.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _66.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    execLegacyContent(value: _66.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _66.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _66.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _66.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _66.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _66.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _66.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _66.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _66.MsgExecLegacyContent;
                    };
                    vote(value: _66.MsgVote): {
                        typeUrl: string;
                        value: _66.MsgVote;
                    };
                    voteWeighted(value: _66.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _66.MsgVoteWeighted;
                    };
                    deposit(value: _66.MsgDeposit): {
                        typeUrl: string;
                        value: _66.MsgDeposit;
                    };
                    updateParams(value: _66.MsgUpdateParams): {
                        typeUrl: string;
                        value: _66.MsgUpdateParams;
                    };
                };
                toJSON: {
                    submitProposal(value: _66.MsgSubmitProposal): {
                        typeUrl: string;
                        value: unknown;
                    };
                    execLegacyContent(value: _66.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: unknown;
                    };
                    vote(value: _66.MsgVote): {
                        typeUrl: string;
                        value: unknown;
                    };
                    voteWeighted(value: _66.MsgVoteWeighted): {
                        typeUrl: string;
                        value: unknown;
                    };
                    deposit(value: _66.MsgDeposit): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateParams(value: _66.MsgUpdateParams): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _66.MsgSubmitProposal;
                    };
                    execLegacyContent(value: any): {
                        typeUrl: string;
                        value: _66.MsgExecLegacyContent;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _66.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _66.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _66.MsgDeposit;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _66.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    submitProposal(value: _66.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _66.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _66.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _66.MsgExecLegacyContent;
                    };
                    vote(value: _66.MsgVote): {
                        typeUrl: string;
                        value: _66.MsgVote;
                    };
                    voteWeighted(value: _66.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _66.MsgVoteWeighted;
                    };
                    deposit(value: _66.MsgDeposit): {
                        typeUrl: string;
                        value: _66.MsgDeposit;
                    };
                    updateParams(value: _66.MsgUpdateParams): {
                        typeUrl: string;
                        value: _66.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ messages, initialDeposit, proposer, metadata, title, summary }: _66.MsgSubmitProposal) => {
                        messages: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                        initial_deposit: {
                            denom: string;
                            amount: string;
                        }[];
                        proposer: string;
                        metadata: string;
                        title: string;
                        summary: string;
                    };
                    fromAmino: ({ messages, initial_deposit, proposer, metadata, title, summary }: {
                        messages: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                        initial_deposit: {
                            denom: string;
                            amount: string;
                        }[];
                        proposer: string;
                        metadata: string;
                        title: string;
                        summary: string;
                    }) => _66.MsgSubmitProposal;
                };
                "/cosmos.gov.v1.MsgExecLegacyContent": {
                    aminoType: string;
                    toAmino: ({ content, authority }: _66.MsgExecLegacyContent) => {
                        content: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        authority: string;
                    };
                    fromAmino: ({ content, authority }: {
                        content: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        authority: string;
                    }) => _66.MsgExecLegacyContent;
                };
                "/cosmos.gov.v1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, option, metadata }: _66.MsgVote) => {
                        proposal_id: string;
                        voter: string;
                        option: number;
                        metadata: string;
                    };
                    fromAmino: ({ proposal_id, voter, option, metadata }: {
                        proposal_id: string;
                        voter: string;
                        option: number;
                        metadata: string;
                    }) => _66.MsgVote;
                };
                "/cosmos.gov.v1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, options, metadata }: _66.MsgVoteWeighted) => {
                        proposal_id: string;
                        voter: string;
                        options: {
                            option: number;
                            weight: string;
                        }[];
                        metadata: string;
                    };
                    fromAmino: ({ proposal_id, voter, options, metadata }: {
                        proposal_id: string;
                        voter: string;
                        options: {
                            option: number;
                            weight: string;
                        }[];
                        metadata: string;
                    }) => _66.MsgVoteWeighted;
                };
                "/cosmos.gov.v1.MsgDeposit": {
                    aminoType: string;
                    toAmino: ({ proposalId, depositor, amount }: _66.MsgDeposit) => {
                        proposal_id: string;
                        depositor: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ proposal_id, depositor, amount }: {
                        proposal_id: string;
                        depositor: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _66.MsgDeposit;
                };
                "/cosmos.gov.v1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: ({ authority, params }: _66.MsgUpdateParams) => {
                        authority: string;
                        params: {
                            min_deposit: {
                                denom: string;
                                amount: string;
                            }[];
                            max_deposit_period: {
                                seconds: string;
                                nanos: number;
                            };
                            voting_period: {
                                seconds: string;
                                nanos: number;
                            };
                            quorum: string;
                            threshold: string;
                            veto_threshold: string;
                            min_initial_deposit_ratio: string;
                            burn_vote_quorum: boolean;
                            burn_proposal_deposit_prevote: boolean;
                            burn_vote_veto: boolean;
                        };
                    };
                    fromAmino: ({ authority, params }: {
                        authority: string;
                        params: {
                            min_deposit: {
                                denom: string;
                                amount: string;
                            }[];
                            max_deposit_period: {
                                seconds: string;
                                nanos: number;
                            };
                            voting_period: {
                                seconds: string;
                                nanos: number;
                            };
                            quorum: string;
                            threshold: string;
                            veto_threshold: string;
                            min_initial_deposit_ratio: string;
                            burn_vote_quorum: boolean;
                            burn_proposal_deposit_prevote: boolean;
                            burn_vote_veto: boolean;
                        };
                    }) => _66.MsgUpdateParams;
                };
            };
            MsgSubmitProposal: {
                encode(message: _66.MsgSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _66.MsgSubmitProposal;
                fromJSON(object: any): _66.MsgSubmitProposal;
                toJSON(message: _66.MsgSubmitProposal): unknown;
                fromPartial(object: {
                    messages?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                    initialDeposit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    proposer?: string;
                    metadata?: string;
                    title?: string;
                    summary?: string;
                }): _66.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _66.MsgSubmitProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _66.MsgSubmitProposalResponse;
                fromJSON(object: any): _66.MsgSubmitProposalResponse;
                toJSON(message: _66.MsgSubmitProposalResponse): unknown;
                fromPartial(object: {
                    proposalId?: bigint;
                }): _66.MsgSubmitProposalResponse;
            };
            MsgExecLegacyContent: {
                encode(message: _66.MsgExecLegacyContent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _66.MsgExecLegacyContent;
                fromJSON(object: any): _66.MsgExecLegacyContent;
                toJSON(message: _66.MsgExecLegacyContent): unknown;
                fromPartial(object: {
                    content?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    } | {
                        title?: string;
                        description?: string;
                        recipient?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    } | {
                        title?: string;
                        description?: string;
                        recipient?: string;
                        amount?: string;
                        deposit?: string;
                    } | {
                        title?: string;
                        description?: string;
                        changes?: {
                            subspace?: string;
                            key?: string;
                            value?: string;
                        }[];
                    } | {
                        title?: string;
                        description?: string;
                        plan?: {
                            name?: string;
                            time?: {
                                seconds?: bigint;
                                nanos?: number;
                            };
                            height?: bigint;
                            info?: string;
                            upgradedClientState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        };
                    } | {
                        title?: string;
                        description?: string;
                    } | {
                        title?: string;
                        description?: string;
                        runAs?: string;
                        wasmByteCode?: Uint8Array;
                        instantiatePermission?: {
                            permission?: import("../cosmwasm/wasm/v1/types").AccessType;
                            addresses?: string[];
                        };
                        unpinCode?: boolean;
                        source?: string;
                        builder?: string;
                        codeHash?: Uint8Array;
                    } | {
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
                    } | {
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
                    } | {
                        title?: string;
                        description?: string;
                        contract?: string;
                        codeId?: bigint;
                        msg?: Uint8Array;
                    } | {
                        title?: string;
                        description?: string;
                        contract?: string;
                        msg?: Uint8Array;
                    } | {
                        title?: string;
                        description?: string;
                        runAs?: string;
                        contract?: string;
                        msg?: Uint8Array;
                        funds?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    } | {
                        title?: string;
                        description?: string;
                        newAdmin?: string;
                        contract?: string;
                    } | {
                        title?: string;
                        description?: string;
                        contract?: string;
                    } | {
                        title?: string;
                        description?: string;
                        codeIds?: bigint[];
                    } | {
                        title?: string;
                        description?: string;
                        codeIds?: bigint[];
                    } | {
                        title?: string;
                        description?: string;
                        accessConfigUpdates?: {
                            codeId?: bigint;
                            instantiatePermission?: {
                                permission?: import("../cosmwasm/wasm/v1/types").AccessType;
                                addresses?: string[];
                            };
                        }[];
                    } | {
                        title?: string;
                        description?: string;
                        runAs?: string;
                        wasmByteCode?: Uint8Array;
                        instantiatePermission?: {
                            permission?: import("../cosmwasm/wasm/v1/types").AccessType;
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
                    } | {
                        title?: string;
                        description?: string;
                    };
                    authority?: string;
                }): _66.MsgExecLegacyContent;
            };
            MsgExecLegacyContentResponse: {
                encode(_: _66.MsgExecLegacyContentResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _66.MsgExecLegacyContentResponse;
                fromJSON(_: any): _66.MsgExecLegacyContentResponse;
                toJSON(_: _66.MsgExecLegacyContentResponse): unknown;
                fromPartial(_: {}): _66.MsgExecLegacyContentResponse;
            };
            MsgVote: {
                encode(message: _66.MsgVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _66.MsgVote;
                fromJSON(object: any): _66.MsgVote;
                toJSON(message: _66.MsgVote): unknown;
                fromPartial(object: {
                    proposalId?: bigint;
                    voter?: string;
                    option?: _64.VoteOption;
                    metadata?: string;
                }): _66.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _66.MsgVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _66.MsgVoteResponse;
                fromJSON(_: any): _66.MsgVoteResponse;
                toJSON(_: _66.MsgVoteResponse): unknown;
                fromPartial(_: {}): _66.MsgVoteResponse;
            };
            MsgVoteWeighted: {
                encode(message: _66.MsgVoteWeighted, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _66.MsgVoteWeighted;
                fromJSON(object: any): _66.MsgVoteWeighted;
                toJSON(message: _66.MsgVoteWeighted): unknown;
                fromPartial(object: {
                    proposalId?: bigint;
                    voter?: string;
                    options?: {
                        option?: _64.VoteOption;
                        weight?: string;
                    }[];
                    metadata?: string;
                }): _66.MsgVoteWeighted;
            };
            MsgVoteWeightedResponse: {
                encode(_: _66.MsgVoteWeightedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _66.MsgVoteWeightedResponse;
                fromJSON(_: any): _66.MsgVoteWeightedResponse;
                toJSON(_: _66.MsgVoteWeightedResponse): unknown;
                fromPartial(_: {}): _66.MsgVoteWeightedResponse;
            };
            MsgDeposit: {
                encode(message: _66.MsgDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _66.MsgDeposit;
                fromJSON(object: any): _66.MsgDeposit;
                toJSON(message: _66.MsgDeposit): unknown;
                fromPartial(object: {
                    proposalId?: bigint;
                    depositor?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _66.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _66.MsgDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _66.MsgDepositResponse;
                fromJSON(_: any): _66.MsgDepositResponse;
                toJSON(_: _66.MsgDepositResponse): unknown;
                fromPartial(_: {}): _66.MsgDepositResponse;
            };
            MsgUpdateParams: {
                encode(message: _66.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _66.MsgUpdateParams;
                fromJSON(object: any): _66.MsgUpdateParams;
                toJSON(message: _66.MsgUpdateParams): unknown;
                fromPartial(object: {
                    authority?: string;
                    params?: {
                        minDeposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        maxDepositPeriod?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        votingPeriod?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        quorum?: string;
                        threshold?: string;
                        vetoThreshold?: string;
                        minInitialDepositRatio?: string;
                        burnVoteQuorum?: boolean;
                        burnProposalDepositPrevote?: boolean;
                        burnVoteVeto?: boolean;
                    };
                }): _66.MsgUpdateParams;
            };
            MsgUpdateParamsResponse: {
                encode(_: _66.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _66.MsgUpdateParamsResponse;
                fromJSON(_: any): _66.MsgUpdateParamsResponse;
                toJSON(_: _66.MsgUpdateParamsResponse): unknown;
                fromPartial(_: {}): _66.MsgUpdateParamsResponse;
            };
            Cosmos_govv1beta1Content_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _51.CommunityPoolSpendProposal | _51.CommunityPoolSpendProposalWithDeposit | _82.ParameterChangeProposal | _100.SoftwareUpgradeProposal | _100.CancelSoftwareUpgradeProposal | import("../cosmwasm/wasm/v1/proposal").StoreCodeProposal | import("../cosmwasm/wasm/v1/proposal").InstantiateContractProposal | import("../cosmwasm/wasm/v1/proposal").InstantiateContract2Proposal | import("../cosmwasm/wasm/v1/proposal").MigrateContractProposal | import("../cosmwasm/wasm/v1/proposal").SudoContractProposal | import("../cosmwasm/wasm/v1/proposal").ExecuteContractProposal | import("../cosmwasm/wasm/v1/proposal").UpdateAdminProposal | import("../cosmwasm/wasm/v1/proposal").ClearAdminProposal | import("../cosmwasm/wasm/v1/proposal").PinCodesProposal | import("../cosmwasm/wasm/v1/proposal").UnpinCodesProposal | import("../cosmwasm/wasm/v1/proposal").UpdateInstantiateConfigProposal | import("../cosmwasm/wasm/v1/proposal").StoreAndInstantiateContractProposal | _68.TextProposal;
            QueryProposalRequest: {
                encode(message: _65.QueryProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _65.QueryProposalRequest;
                fromJSON(object: any): _65.QueryProposalRequest;
                toJSON(message: _65.QueryProposalRequest): unknown;
                fromPartial(object: {
                    proposalId?: bigint;
                }): _65.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _65.QueryProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _65.QueryProposalResponse;
                fromJSON(object: any): _65.QueryProposalResponse;
                toJSON(message: _65.QueryProposalResponse): unknown;
                fromPartial(object: {
                    proposal?: {
                        id?: bigint;
                        messages?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                        status?: _64.ProposalStatus;
                        finalTallyResult?: {
                            yesCount?: string;
                            abstainCount?: string;
                            noCount?: string;
                            noWithVetoCount?: string;
                        };
                        submitTime?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        depositEndTime?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        totalDeposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        votingStartTime?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        votingEndTime?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        metadata?: string;
                        title?: string;
                        summary?: string;
                        proposer?: string;
                    };
                }): _65.QueryProposalResponse;
            };
            QueryProposalsRequest: {
                encode(message: _65.QueryProposalsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _65.QueryProposalsRequest;
                fromJSON(object: any): _65.QueryProposalsRequest;
                toJSON(message: _65.QueryProposalsRequest): unknown;
                fromPartial(object: {
                    proposalStatus?: _64.ProposalStatus;
                    voter?: string;
                    depositor?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: bigint;
                        limit?: bigint;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _65.QueryProposalsRequest;
            };
            QueryProposalsResponse: {
                encode(message: _65.QueryProposalsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _65.QueryProposalsResponse;
                fromJSON(object: any): _65.QueryProposalsResponse;
                toJSON(message: _65.QueryProposalsResponse): unknown;
                fromPartial(object: {
                    proposals?: {
                        id?: bigint;
                        messages?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                        status?: _64.ProposalStatus;
                        finalTallyResult?: {
                            yesCount?: string;
                            abstainCount?: string;
                            noCount?: string;
                            noWithVetoCount?: string;
                        };
                        submitTime?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        depositEndTime?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        totalDeposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        votingStartTime?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        votingEndTime?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        metadata?: string;
                        title?: string;
                        summary?: string;
                        proposer?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: bigint;
                    };
                }): _65.QueryProposalsResponse;
            };
            QueryVoteRequest: {
                encode(message: _65.QueryVoteRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _65.QueryVoteRequest;
                fromJSON(object: any): _65.QueryVoteRequest;
                toJSON(message: _65.QueryVoteRequest): unknown;
                fromPartial(object: {
                    proposalId?: bigint;
                    voter?: string;
                }): _65.QueryVoteRequest;
            };
            QueryVoteResponse: {
                encode(message: _65.QueryVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _65.QueryVoteResponse;
                fromJSON(object: any): _65.QueryVoteResponse;
                toJSON(message: _65.QueryVoteResponse): unknown;
                fromPartial(object: {
                    vote?: {
                        proposalId?: bigint;
                        voter?: string;
                        options?: {
                            option?: _64.VoteOption;
                            weight?: string;
                        }[];
                        metadata?: string;
                    };
                }): _65.QueryVoteResponse;
            };
            QueryVotesRequest: {
                encode(message: _65.QueryVotesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _65.QueryVotesRequest;
                fromJSON(object: any): _65.QueryVotesRequest;
                toJSON(message: _65.QueryVotesRequest): unknown;
                fromPartial(object: {
                    proposalId?: bigint;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: bigint;
                        limit?: bigint;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _65.QueryVotesRequest;
            };
            QueryVotesResponse: {
                encode(message: _65.QueryVotesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _65.QueryVotesResponse;
                fromJSON(object: any): _65.QueryVotesResponse;
                toJSON(message: _65.QueryVotesResponse): unknown;
                fromPartial(object: {
                    votes?: {
                        proposalId?: bigint;
                        voter?: string;
                        options?: {
                            option?: _64.VoteOption;
                            weight?: string;
                        }[];
                        metadata?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: bigint;
                    };
                }): _65.QueryVotesResponse;
            };
            QueryParamsRequest: {
                encode(message: _65.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _65.QueryParamsRequest;
                fromJSON(object: any): _65.QueryParamsRequest;
                toJSON(message: _65.QueryParamsRequest): unknown;
                fromPartial(object: {
                    paramsType?: string;
                }): _65.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _65.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _65.QueryParamsResponse;
                fromJSON(object: any): _65.QueryParamsResponse;
                toJSON(message: _65.QueryParamsResponse): unknown;
                fromPartial(object: {
                    votingParams?: {
                        votingPeriod?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                    };
                    depositParams?: {
                        minDeposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        maxDepositPeriod?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                    };
                    tallyParams?: {
                        quorum?: string;
                        threshold?: string;
                        vetoThreshold?: string;
                    };
                    params?: {
                        minDeposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        maxDepositPeriod?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        votingPeriod?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        quorum?: string;
                        threshold?: string;
                        vetoThreshold?: string;
                        minInitialDepositRatio?: string;
                        burnVoteQuorum?: boolean;
                        burnProposalDepositPrevote?: boolean;
                        burnVoteVeto?: boolean;
                    };
                }): _65.QueryParamsResponse;
            };
            QueryDepositRequest: {
                encode(message: _65.QueryDepositRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _65.QueryDepositRequest;
                fromJSON(object: any): _65.QueryDepositRequest;
                toJSON(message: _65.QueryDepositRequest): unknown;
                fromPartial(object: {
                    proposalId?: bigint;
                    depositor?: string;
                }): _65.QueryDepositRequest;
            };
            QueryDepositResponse: {
                encode(message: _65.QueryDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _65.QueryDepositResponse;
                fromJSON(object: any): _65.QueryDepositResponse;
                toJSON(message: _65.QueryDepositResponse): unknown;
                fromPartial(object: {
                    deposit?: {
                        proposalId?: bigint;
                        depositor?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                }): _65.QueryDepositResponse;
            };
            QueryDepositsRequest: {
                encode(message: _65.QueryDepositsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _65.QueryDepositsRequest;
                fromJSON(object: any): _65.QueryDepositsRequest;
                toJSON(message: _65.QueryDepositsRequest): unknown;
                fromPartial(object: {
                    proposalId?: bigint;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: bigint;
                        limit?: bigint;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _65.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _65.QueryDepositsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _65.QueryDepositsResponse;
                fromJSON(object: any): _65.QueryDepositsResponse;
                toJSON(message: _65.QueryDepositsResponse): unknown;
                fromPartial(object: {
                    deposits?: {
                        proposalId?: bigint;
                        depositor?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: bigint;
                    };
                }): _65.QueryDepositsResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _65.QueryTallyResultRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _65.QueryTallyResultRequest;
                fromJSON(object: any): _65.QueryTallyResultRequest;
                toJSON(message: _65.QueryTallyResultRequest): unknown;
                fromPartial(object: {
                    proposalId?: bigint;
                }): _65.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _65.QueryTallyResultResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _65.QueryTallyResultResponse;
                fromJSON(object: any): _65.QueryTallyResultResponse;
                toJSON(message: _65.QueryTallyResultResponse): unknown;
                fromPartial(object: {
                    tally?: {
                        yesCount?: string;
                        abstainCount?: string;
                        noCount?: string;
                        noWithVetoCount?: string;
                    };
                }): _65.QueryTallyResultResponse;
            };
            voteOptionFromJSON(object: any): _64.VoteOption;
            voteOptionToJSON(object: _64.VoteOption): string;
            proposalStatusFromJSON(object: any): _64.ProposalStatus;
            proposalStatusToJSON(object: _64.ProposalStatus): string;
            VoteOption: typeof _64.VoteOption;
            ProposalStatus: typeof _64.ProposalStatus;
            WeightedVoteOption: {
                encode(message: _64.WeightedVoteOption, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _64.WeightedVoteOption;
                fromJSON(object: any): _64.WeightedVoteOption;
                toJSON(message: _64.WeightedVoteOption): unknown;
                fromPartial(object: {
                    option?: _64.VoteOption;
                    weight?: string;
                }): _64.WeightedVoteOption;
            };
            Deposit: {
                encode(message: _64.Deposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _64.Deposit;
                fromJSON(object: any): _64.Deposit;
                toJSON(message: _64.Deposit): unknown;
                fromPartial(object: {
                    proposalId?: bigint;
                    depositor?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _64.Deposit;
            };
            Proposal: {
                encode(message: _64.Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _64.Proposal;
                fromJSON(object: any): _64.Proposal;
                toJSON(message: _64.Proposal): unknown;
                fromPartial(object: {
                    id?: bigint;
                    messages?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                    status?: _64.ProposalStatus;
                    finalTallyResult?: {
                        yesCount?: string;
                        abstainCount?: string;
                        noCount?: string;
                        noWithVetoCount?: string;
                    };
                    submitTime?: {
                        seconds?: bigint;
                        nanos?: number;
                    };
                    depositEndTime?: {
                        seconds?: bigint;
                        nanos?: number;
                    };
                    totalDeposit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    votingStartTime?: {
                        seconds?: bigint;
                        nanos?: number;
                    };
                    votingEndTime?: {
                        seconds?: bigint;
                        nanos?: number;
                    };
                    metadata?: string;
                    title?: string;
                    summary?: string;
                    proposer?: string;
                }): _64.Proposal;
            };
            TallyResult: {
                encode(message: _64.TallyResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _64.TallyResult;
                fromJSON(object: any): _64.TallyResult;
                toJSON(message: _64.TallyResult): unknown;
                fromPartial(object: {
                    yesCount?: string;
                    abstainCount?: string;
                    noCount?: string;
                    noWithVetoCount?: string;
                }): _64.TallyResult;
            };
            Vote: {
                encode(message: _64.Vote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _64.Vote;
                fromJSON(object: any): _64.Vote;
                toJSON(message: _64.Vote): unknown;
                fromPartial(object: {
                    proposalId?: bigint;
                    voter?: string;
                    options?: {
                        option?: _64.VoteOption;
                        weight?: string;
                    }[];
                    metadata?: string;
                }): _64.Vote;
            };
            DepositParams: {
                encode(message: _64.DepositParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _64.DepositParams;
                fromJSON(object: any): _64.DepositParams;
                toJSON(message: _64.DepositParams): unknown;
                fromPartial(object: {
                    minDeposit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    maxDepositPeriod?: {
                        seconds?: bigint;
                        nanos?: number;
                    };
                }): _64.DepositParams;
            };
            VotingParams: {
                encode(message: _64.VotingParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _64.VotingParams;
                fromJSON(object: any): _64.VotingParams;
                toJSON(message: _64.VotingParams): unknown;
                fromPartial(object: {
                    votingPeriod?: {
                        seconds?: bigint;
                        nanos?: number;
                    };
                }): _64.VotingParams;
            };
            TallyParams: {
                encode(message: _64.TallyParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _64.TallyParams;
                fromJSON(object: any): _64.TallyParams;
                toJSON(message: _64.TallyParams): unknown;
                fromPartial(object: {
                    quorum?: string;
                    threshold?: string;
                    vetoThreshold?: string;
                }): _64.TallyParams;
            };
            Params: {
                encode(message: _64.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _64.Params;
                fromJSON(object: any): _64.Params;
                toJSON(message: _64.Params): unknown;
                fromPartial(object: {
                    minDeposit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    maxDepositPeriod?: {
                        seconds?: bigint;
                        nanos?: number;
                    };
                    votingPeriod?: {
                        seconds?: bigint;
                        nanos?: number;
                    };
                    quorum?: string;
                    threshold?: string;
                    vetoThreshold?: string;
                    minInitialDepositRatio?: string;
                    burnVoteQuorum?: boolean;
                    burnProposalDepositPrevote?: boolean;
                    burnVoteVeto?: boolean;
                }): _64.Params;
            };
            GenesisState: {
                encode(message: _63.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _63.GenesisState;
                fromJSON(object: any): _63.GenesisState;
                toJSON(message: _63.GenesisState): unknown;
                fromPartial(object: {
                    startingProposalId?: bigint;
                    deposits?: {
                        proposalId?: bigint;
                        depositor?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    votes?: {
                        proposalId?: bigint;
                        voter?: string;
                        options?: {
                            option?: _64.VoteOption;
                            weight?: string;
                        }[];
                        metadata?: string;
                    }[];
                    proposals?: {
                        id?: bigint;
                        messages?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                        status?: _64.ProposalStatus;
                        finalTallyResult?: {
                            yesCount?: string;
                            abstainCount?: string;
                            noCount?: string;
                            noWithVetoCount?: string;
                        };
                        submitTime?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        depositEndTime?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        totalDeposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        votingStartTime?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        votingEndTime?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        metadata?: string;
                        title?: string;
                        summary?: string;
                        proposer?: string;
                    }[];
                    depositParams?: {
                        minDeposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        maxDepositPeriod?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                    };
                    votingParams?: {
                        votingPeriod?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                    };
                    tallyParams?: {
                        quorum?: string;
                        threshold?: string;
                        vetoThreshold?: string;
                    };
                    params?: {
                        minDeposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        maxDepositPeriod?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        votingPeriod?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        quorum?: string;
                        threshold?: string;
                        vetoThreshold?: string;
                        minInitialDepositRatio?: string;
                        burnVoteQuorum?: boolean;
                        burnProposalDepositPrevote?: boolean;
                        burnVoteVeto?: boolean;
                    };
                }): _63.GenesisState;
            };
        };
        const v1beta1: {
            MsgClientImpl: typeof _227.MsgClientImpl;
            QueryClientImpl: typeof _213.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _69.QueryProposalRequest): Promise<_69.QueryProposalResponse>;
                proposals(request: _69.QueryProposalsRequest): Promise<_69.QueryProposalsResponse>;
                vote(request: _69.QueryVoteRequest): Promise<_69.QueryVoteResponse>;
                votes(request: _69.QueryVotesRequest): Promise<_69.QueryVotesResponse>;
                params(request: _69.QueryParamsRequest): Promise<_69.QueryParamsResponse>;
                deposit(request: _69.QueryDepositRequest): Promise<_69.QueryDepositResponse>;
                deposits(request: _69.QueryDepositsRequest): Promise<_69.QueryDepositsResponse>;
                tallyResult(request: _69.QueryTallyResultRequest): Promise<_69.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _198.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _70.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _70.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _70.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _70.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _70.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _70.MsgSubmitProposal;
                    };
                    vote(value: _70.MsgVote): {
                        typeUrl: string;
                        value: _70.MsgVote;
                    };
                    voteWeighted(value: _70.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _70.MsgVoteWeighted;
                    };
                    deposit(value: _70.MsgDeposit): {
                        typeUrl: string;
                        value: _70.MsgDeposit;
                    };
                };
                toJSON: {
                    submitProposal(value: _70.MsgSubmitProposal): {
                        typeUrl: string;
                        value: unknown;
                    };
                    vote(value: _70.MsgVote): {
                        typeUrl: string;
                        value: unknown;
                    };
                    voteWeighted(value: _70.MsgVoteWeighted): {
                        typeUrl: string;
                        value: unknown;
                    };
                    deposit(value: _70.MsgDeposit): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _70.MsgSubmitProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _70.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _70.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _70.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _70.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _70.MsgSubmitProposal;
                    };
                    vote(value: _70.MsgVote): {
                        typeUrl: string;
                        value: _70.MsgVote;
                    };
                    voteWeighted(value: _70.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _70.MsgVoteWeighted;
                    };
                    deposit(value: _70.MsgDeposit): {
                        typeUrl: string;
                        value: _70.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ content, initialDeposit, proposer }: _70.MsgSubmitProposal) => {
                        content: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        initial_deposit: {
                            denom: string;
                            amount: string;
                        }[];
                        proposer: string;
                    };
                    fromAmino: ({ content, initial_deposit, proposer }: {
                        content: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        initial_deposit: {
                            denom: string;
                            amount: string;
                        }[];
                        proposer: string;
                    }) => _70.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, option }: _70.MsgVote) => {
                        proposal_id: string;
                        voter: string;
                        option: number;
                    };
                    fromAmino: ({ proposal_id, voter, option }: {
                        proposal_id: string;
                        voter: string;
                        option: number;
                    }) => _70.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, options }: _70.MsgVoteWeighted) => {
                        proposal_id: string;
                        voter: string;
                        options: {
                            option: number;
                            weight: string;
                        }[];
                    };
                    fromAmino: ({ proposal_id, voter, options }: {
                        proposal_id: string;
                        voter: string;
                        options: {
                            option: number;
                            weight: string;
                        }[];
                    }) => _70.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: ({ proposalId, depositor, amount }: _70.MsgDeposit) => {
                        proposal_id: string;
                        depositor: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ proposal_id, depositor, amount }: {
                        proposal_id: string;
                        depositor: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _70.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                encode(message: _70.MsgSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _70.MsgSubmitProposal;
                fromJSON(object: any): _70.MsgSubmitProposal;
                toJSON(message: _70.MsgSubmitProposal): unknown;
                fromPartial(object: {
                    content?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    } | {
                        title?: string;
                        description?: string;
                        recipient?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    } | {
                        title?: string;
                        description?: string;
                        recipient?: string;
                        amount?: string;
                        deposit?: string;
                    } | {
                        title?: string;
                        description?: string;
                        changes?: {
                            subspace?: string;
                            key?: string;
                            value?: string;
                        }[];
                    } | {
                        title?: string;
                        description?: string;
                        plan?: {
                            name?: string;
                            time?: {
                                seconds?: bigint;
                                nanos?: number;
                            };
                            height?: bigint;
                            info?: string;
                            upgradedClientState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        };
                    } | {
                        title?: string;
                        description?: string;
                    } | {
                        title?: string;
                        description?: string;
                        runAs?: string;
                        wasmByteCode?: Uint8Array;
                        instantiatePermission?: {
                            permission?: import("../cosmwasm/wasm/v1/types").AccessType;
                            addresses?: string[];
                        };
                        unpinCode?: boolean;
                        source?: string;
                        builder?: string;
                        codeHash?: Uint8Array;
                    } | {
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
                    } | {
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
                    } | {
                        title?: string;
                        description?: string;
                        contract?: string;
                        codeId?: bigint;
                        msg?: Uint8Array;
                    } | {
                        title?: string;
                        description?: string;
                        contract?: string;
                        msg?: Uint8Array;
                    } | {
                        title?: string;
                        description?: string;
                        runAs?: string;
                        contract?: string;
                        msg?: Uint8Array;
                        funds?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    } | {
                        title?: string;
                        description?: string;
                        newAdmin?: string;
                        contract?: string;
                    } | {
                        title?: string;
                        description?: string;
                        contract?: string;
                    } | {
                        title?: string;
                        description?: string;
                        codeIds?: bigint[];
                    } | {
                        title?: string;
                        description?: string;
                        codeIds?: bigint[];
                    } | {
                        title?: string;
                        description?: string;
                        accessConfigUpdates?: {
                            codeId?: bigint;
                            instantiatePermission?: {
                                permission?: import("../cosmwasm/wasm/v1/types").AccessType;
                                addresses?: string[];
                            };
                        }[];
                    } | {
                        title?: string;
                        description?: string;
                        runAs?: string;
                        wasmByteCode?: Uint8Array;
                        instantiatePermission?: {
                            permission?: import("../cosmwasm/wasm/v1/types").AccessType;
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
                    } | {
                        title?: string;
                        description?: string;
                    };
                    initialDeposit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    proposer?: string;
                }): _70.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _70.MsgSubmitProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _70.MsgSubmitProposalResponse;
                fromJSON(object: any): _70.MsgSubmitProposalResponse;
                toJSON(message: _70.MsgSubmitProposalResponse): unknown;
                fromPartial(object: {
                    proposalId?: bigint;
                }): _70.MsgSubmitProposalResponse;
            };
            MsgVote: {
                encode(message: _70.MsgVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _70.MsgVote;
                fromJSON(object: any): _70.MsgVote;
                toJSON(message: _70.MsgVote): unknown;
                fromPartial(object: {
                    proposalId?: bigint;
                    voter?: string;
                    option?: _68.VoteOption;
                }): _70.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _70.MsgVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _70.MsgVoteResponse;
                fromJSON(_: any): _70.MsgVoteResponse;
                toJSON(_: _70.MsgVoteResponse): unknown;
                fromPartial(_: {}): _70.MsgVoteResponse;
            };
            MsgVoteWeighted: {
                encode(message: _70.MsgVoteWeighted, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _70.MsgVoteWeighted;
                fromJSON(object: any): _70.MsgVoteWeighted;
                toJSON(message: _70.MsgVoteWeighted): unknown;
                fromPartial(object: {
                    proposalId?: bigint;
                    voter?: string;
                    options?: {
                        option?: _68.VoteOption;
                        weight?: string;
                    }[];
                }): _70.MsgVoteWeighted;
            };
            MsgVoteWeightedResponse: {
                encode(_: _70.MsgVoteWeightedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _70.MsgVoteWeightedResponse;
                fromJSON(_: any): _70.MsgVoteWeightedResponse;
                toJSON(_: _70.MsgVoteWeightedResponse): unknown;
                fromPartial(_: {}): _70.MsgVoteWeightedResponse;
            };
            MsgDeposit: {
                encode(message: _70.MsgDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _70.MsgDeposit;
                fromJSON(object: any): _70.MsgDeposit;
                toJSON(message: _70.MsgDeposit): unknown;
                fromPartial(object: {
                    proposalId?: bigint;
                    depositor?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _70.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _70.MsgDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _70.MsgDepositResponse;
                fromJSON(_: any): _70.MsgDepositResponse;
                toJSON(_: _70.MsgDepositResponse): unknown;
                fromPartial(_: {}): _70.MsgDepositResponse;
            };
            Cosmos_govv1beta1Content_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _51.CommunityPoolSpendProposal | _51.CommunityPoolSpendProposalWithDeposit | _82.ParameterChangeProposal | _100.SoftwareUpgradeProposal | _100.CancelSoftwareUpgradeProposal | import("../cosmwasm/wasm/v1/proposal").StoreCodeProposal | import("../cosmwasm/wasm/v1/proposal").InstantiateContractProposal | import("../cosmwasm/wasm/v1/proposal").InstantiateContract2Proposal | import("../cosmwasm/wasm/v1/proposal").MigrateContractProposal | import("../cosmwasm/wasm/v1/proposal").SudoContractProposal | import("../cosmwasm/wasm/v1/proposal").ExecuteContractProposal | import("../cosmwasm/wasm/v1/proposal").UpdateAdminProposal | import("../cosmwasm/wasm/v1/proposal").ClearAdminProposal | import("../cosmwasm/wasm/v1/proposal").PinCodesProposal | import("../cosmwasm/wasm/v1/proposal").UnpinCodesProposal | import("../cosmwasm/wasm/v1/proposal").UpdateInstantiateConfigProposal | import("../cosmwasm/wasm/v1/proposal").StoreAndInstantiateContractProposal | _68.TextProposal;
            QueryProposalRequest: {
                encode(message: _69.QueryProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _69.QueryProposalRequest;
                fromJSON(object: any): _69.QueryProposalRequest;
                toJSON(message: _69.QueryProposalRequest): unknown;
                fromPartial(object: {
                    proposalId?: bigint;
                }): _69.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _69.QueryProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _69.QueryProposalResponse;
                fromJSON(object: any): _69.QueryProposalResponse;
                toJSON(message: _69.QueryProposalResponse): unknown;
                fromPartial(object: {
                    proposal?: {
                        proposalId?: bigint;
                        content?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } | {
                            title?: string;
                            description?: string;
                            recipient?: string;
                            amount?: {
                                denom?: string;
                                amount?: string;
                            }[];
                        } | {
                            title?: string;
                            description?: string;
                            recipient?: string;
                            amount?: string;
                            deposit?: string;
                        } | {
                            title?: string;
                            description?: string;
                            changes?: {
                                subspace?: string;
                                key?: string;
                                value?: string;
                            }[];
                        } | {
                            title?: string;
                            description?: string;
                            plan?: {
                                name?: string;
                                time?: {
                                    seconds?: bigint;
                                    nanos?: number;
                                };
                                height?: bigint;
                                info?: string;
                                upgradedClientState?: {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                };
                            };
                        } | {
                            title?: string;
                            description?: string;
                        } | {
                            title?: string;
                            description?: string;
                            runAs?: string;
                            wasmByteCode?: Uint8Array;
                            instantiatePermission?: {
                                permission?: import("../cosmwasm/wasm/v1/types").AccessType;
                                addresses?: string[];
                            };
                            unpinCode?: boolean;
                            source?: string;
                            builder?: string;
                            codeHash?: Uint8Array;
                        } | {
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
                        } | {
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
                        } | {
                            title?: string;
                            description?: string;
                            contract?: string;
                            codeId?: bigint;
                            msg?: Uint8Array;
                        } | {
                            title?: string;
                            description?: string;
                            contract?: string;
                            msg?: Uint8Array;
                        } | {
                            title?: string;
                            description?: string;
                            runAs?: string;
                            contract?: string;
                            msg?: Uint8Array;
                            funds?: {
                                denom?: string;
                                amount?: string;
                            }[];
                        } | {
                            title?: string;
                            description?: string;
                            newAdmin?: string;
                            contract?: string;
                        } | {
                            title?: string;
                            description?: string;
                            contract?: string;
                        } | {
                            title?: string;
                            description?: string;
                            codeIds?: bigint[];
                        } | {
                            title?: string;
                            description?: string;
                            codeIds?: bigint[];
                        } | {
                            title?: string;
                            description?: string;
                            accessConfigUpdates?: {
                                codeId?: bigint;
                                instantiatePermission?: {
                                    permission?: import("../cosmwasm/wasm/v1/types").AccessType;
                                    addresses?: string[];
                                };
                            }[];
                        } | {
                            title?: string;
                            description?: string;
                            runAs?: string;
                            wasmByteCode?: Uint8Array;
                            instantiatePermission?: {
                                permission?: import("../cosmwasm/wasm/v1/types").AccessType;
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
                        } | {
                            title?: string;
                            description?: string;
                        };
                        status?: _68.ProposalStatus;
                        finalTallyResult?: {
                            yes?: string;
                            abstain?: string;
                            no?: string;
                            noWithVeto?: string;
                        };
                        submitTime?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        depositEndTime?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        totalDeposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        votingStartTime?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        votingEndTime?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                    };
                }): _69.QueryProposalResponse;
            };
            QueryProposalsRequest: {
                encode(message: _69.QueryProposalsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _69.QueryProposalsRequest;
                fromJSON(object: any): _69.QueryProposalsRequest;
                toJSON(message: _69.QueryProposalsRequest): unknown;
                fromPartial(object: {
                    proposalStatus?: _68.ProposalStatus;
                    voter?: string;
                    depositor?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: bigint;
                        limit?: bigint;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _69.QueryProposalsRequest;
            };
            QueryProposalsResponse: {
                encode(message: _69.QueryProposalsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _69.QueryProposalsResponse;
                fromJSON(object: any): _69.QueryProposalsResponse;
                toJSON(message: _69.QueryProposalsResponse): unknown;
                fromPartial(object: {
                    proposals?: {
                        proposalId?: bigint;
                        content?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } | {
                            title?: string;
                            description?: string;
                            recipient?: string;
                            amount?: {
                                denom?: string;
                                amount?: string;
                            }[];
                        } | {
                            title?: string;
                            description?: string;
                            recipient?: string;
                            amount?: string;
                            deposit?: string;
                        } | {
                            title?: string;
                            description?: string;
                            changes?: {
                                subspace?: string;
                                key?: string;
                                value?: string;
                            }[];
                        } | {
                            title?: string;
                            description?: string;
                            plan?: {
                                name?: string;
                                time?: {
                                    seconds?: bigint;
                                    nanos?: number;
                                };
                                height?: bigint;
                                info?: string;
                                upgradedClientState?: {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                };
                            };
                        } | {
                            title?: string;
                            description?: string;
                        } | {
                            title?: string;
                            description?: string;
                            runAs?: string;
                            wasmByteCode?: Uint8Array;
                            instantiatePermission?: {
                                permission?: import("../cosmwasm/wasm/v1/types").AccessType;
                                addresses?: string[];
                            };
                            unpinCode?: boolean;
                            source?: string;
                            builder?: string;
                            codeHash?: Uint8Array;
                        } | {
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
                        } | {
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
                        } | {
                            title?: string;
                            description?: string;
                            contract?: string;
                            codeId?: bigint;
                            msg?: Uint8Array;
                        } | {
                            title?: string;
                            description?: string;
                            contract?: string;
                            msg?: Uint8Array;
                        } | {
                            title?: string;
                            description?: string;
                            runAs?: string;
                            contract?: string;
                            msg?: Uint8Array;
                            funds?: {
                                denom?: string;
                                amount?: string;
                            }[];
                        } | {
                            title?: string;
                            description?: string;
                            newAdmin?: string;
                            contract?: string;
                        } | {
                            title?: string;
                            description?: string;
                            contract?: string;
                        } | {
                            title?: string;
                            description?: string;
                            codeIds?: bigint[];
                        } | {
                            title?: string;
                            description?: string;
                            codeIds?: bigint[];
                        } | {
                            title?: string;
                            description?: string;
                            accessConfigUpdates?: {
                                codeId?: bigint;
                                instantiatePermission?: {
                                    permission?: import("../cosmwasm/wasm/v1/types").AccessType;
                                    addresses?: string[];
                                };
                            }[];
                        } | {
                            title?: string;
                            description?: string;
                            runAs?: string;
                            wasmByteCode?: Uint8Array;
                            instantiatePermission?: {
                                permission?: import("../cosmwasm/wasm/v1/types").AccessType;
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
                        } | {
                            title?: string;
                            description?: string;
                        };
                        status?: _68.ProposalStatus;
                        finalTallyResult?: {
                            yes?: string;
                            abstain?: string;
                            no?: string;
                            noWithVeto?: string;
                        };
                        submitTime?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        depositEndTime?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        totalDeposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        votingStartTime?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        votingEndTime?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: bigint;
                    };
                }): _69.QueryProposalsResponse;
            };
            QueryVoteRequest: {
                encode(message: _69.QueryVoteRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _69.QueryVoteRequest;
                fromJSON(object: any): _69.QueryVoteRequest;
                toJSON(message: _69.QueryVoteRequest): unknown;
                fromPartial(object: {
                    proposalId?: bigint;
                    voter?: string;
                }): _69.QueryVoteRequest;
            };
            QueryVoteResponse: {
                encode(message: _69.QueryVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _69.QueryVoteResponse;
                fromJSON(object: any): _69.QueryVoteResponse;
                toJSON(message: _69.QueryVoteResponse): unknown;
                fromPartial(object: {
                    vote?: {
                        proposalId?: bigint;
                        voter?: string;
                        option?: _68.VoteOption;
                        options?: {
                            option?: _68.VoteOption;
                            weight?: string;
                        }[];
                    };
                }): _69.QueryVoteResponse;
            };
            QueryVotesRequest: {
                encode(message: _69.QueryVotesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _69.QueryVotesRequest;
                fromJSON(object: any): _69.QueryVotesRequest;
                toJSON(message: _69.QueryVotesRequest): unknown;
                fromPartial(object: {
                    proposalId?: bigint;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: bigint;
                        limit?: bigint;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _69.QueryVotesRequest;
            };
            QueryVotesResponse: {
                encode(message: _69.QueryVotesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _69.QueryVotesResponse;
                fromJSON(object: any): _69.QueryVotesResponse;
                toJSON(message: _69.QueryVotesResponse): unknown;
                fromPartial(object: {
                    votes?: {
                        proposalId?: bigint;
                        voter?: string;
                        option?: _68.VoteOption;
                        options?: {
                            option?: _68.VoteOption;
                            weight?: string;
                        }[];
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: bigint;
                    };
                }): _69.QueryVotesResponse;
            };
            QueryParamsRequest: {
                encode(message: _69.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _69.QueryParamsRequest;
                fromJSON(object: any): _69.QueryParamsRequest;
                toJSON(message: _69.QueryParamsRequest): unknown;
                fromPartial(object: {
                    paramsType?: string;
                }): _69.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _69.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _69.QueryParamsResponse;
                fromJSON(object: any): _69.QueryParamsResponse;
                toJSON(message: _69.QueryParamsResponse): unknown;
                fromPartial(object: {
                    votingParams?: {
                        votingPeriod?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                    };
                    depositParams?: {
                        minDeposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        maxDepositPeriod?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                    };
                    tallyParams?: {
                        quorum?: Uint8Array;
                        threshold?: Uint8Array;
                        vetoThreshold?: Uint8Array;
                    };
                }): _69.QueryParamsResponse;
            };
            QueryDepositRequest: {
                encode(message: _69.QueryDepositRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _69.QueryDepositRequest;
                fromJSON(object: any): _69.QueryDepositRequest;
                toJSON(message: _69.QueryDepositRequest): unknown;
                fromPartial(object: {
                    proposalId?: bigint;
                    depositor?: string;
                }): _69.QueryDepositRequest;
            };
            QueryDepositResponse: {
                encode(message: _69.QueryDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _69.QueryDepositResponse;
                fromJSON(object: any): _69.QueryDepositResponse;
                toJSON(message: _69.QueryDepositResponse): unknown;
                fromPartial(object: {
                    deposit?: {
                        proposalId?: bigint;
                        depositor?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                }): _69.QueryDepositResponse;
            };
            QueryDepositsRequest: {
                encode(message: _69.QueryDepositsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _69.QueryDepositsRequest;
                fromJSON(object: any): _69.QueryDepositsRequest;
                toJSON(message: _69.QueryDepositsRequest): unknown;
                fromPartial(object: {
                    proposalId?: bigint;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: bigint;
                        limit?: bigint;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _69.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _69.QueryDepositsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _69.QueryDepositsResponse;
                fromJSON(object: any): _69.QueryDepositsResponse;
                toJSON(message: _69.QueryDepositsResponse): unknown;
                fromPartial(object: {
                    deposits?: {
                        proposalId?: bigint;
                        depositor?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: bigint;
                    };
                }): _69.QueryDepositsResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _69.QueryTallyResultRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _69.QueryTallyResultRequest;
                fromJSON(object: any): _69.QueryTallyResultRequest;
                toJSON(message: _69.QueryTallyResultRequest): unknown;
                fromPartial(object: {
                    proposalId?: bigint;
                }): _69.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _69.QueryTallyResultResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _69.QueryTallyResultResponse;
                fromJSON(object: any): _69.QueryTallyResultResponse;
                toJSON(message: _69.QueryTallyResultResponse): unknown;
                fromPartial(object: {
                    tally?: {
                        yes?: string;
                        abstain?: string;
                        no?: string;
                        noWithVeto?: string;
                    };
                }): _69.QueryTallyResultResponse;
            };
            voteOptionFromJSON(object: any): _68.VoteOption;
            voteOptionToJSON(object: _68.VoteOption): string;
            proposalStatusFromJSON(object: any): _68.ProposalStatus;
            proposalStatusToJSON(object: _68.ProposalStatus): string;
            VoteOption: typeof _68.VoteOption;
            ProposalStatus: typeof _68.ProposalStatus;
            WeightedVoteOption: {
                encode(message: _68.WeightedVoteOption, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _68.WeightedVoteOption;
                fromJSON(object: any): _68.WeightedVoteOption;
                toJSON(message: _68.WeightedVoteOption): unknown;
                fromPartial(object: {
                    option?: _68.VoteOption;
                    weight?: string;
                }): _68.WeightedVoteOption;
            };
            TextProposal: {
                encode(message: _68.TextProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _68.TextProposal;
                fromJSON(object: any): _68.TextProposal;
                toJSON(message: _68.TextProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                }): _68.TextProposal;
            };
            Deposit: {
                encode(message: _68.Deposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _68.Deposit;
                fromJSON(object: any): _68.Deposit;
                toJSON(message: _68.Deposit): unknown;
                fromPartial(object: {
                    proposalId?: bigint;
                    depositor?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _68.Deposit;
            };
            Proposal: {
                encode(message: _68.Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _68.Proposal;
                fromJSON(object: any): _68.Proposal;
                toJSON(message: _68.Proposal): unknown;
                fromPartial(object: {
                    proposalId?: bigint;
                    content?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    } | {
                        title?: string;
                        description?: string;
                        recipient?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    } | {
                        title?: string;
                        description?: string;
                        recipient?: string;
                        amount?: string;
                        deposit?: string;
                    } | {
                        title?: string;
                        description?: string;
                        changes?: {
                            subspace?: string;
                            key?: string;
                            value?: string;
                        }[];
                    } | {
                        title?: string;
                        description?: string;
                        plan?: {
                            name?: string;
                            time?: {
                                seconds?: bigint;
                                nanos?: number;
                            };
                            height?: bigint;
                            info?: string;
                            upgradedClientState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        };
                    } | {
                        title?: string;
                        description?: string;
                    } | {
                        title?: string;
                        description?: string;
                        runAs?: string;
                        wasmByteCode?: Uint8Array;
                        instantiatePermission?: {
                            permission?: import("../cosmwasm/wasm/v1/types").AccessType;
                            addresses?: string[];
                        };
                        unpinCode?: boolean;
                        source?: string;
                        builder?: string;
                        codeHash?: Uint8Array;
                    } | {
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
                    } | {
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
                    } | {
                        title?: string;
                        description?: string;
                        contract?: string;
                        codeId?: bigint;
                        msg?: Uint8Array;
                    } | {
                        title?: string;
                        description?: string;
                        contract?: string;
                        msg?: Uint8Array;
                    } | {
                        title?: string;
                        description?: string;
                        runAs?: string;
                        contract?: string;
                        msg?: Uint8Array;
                        funds?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    } | {
                        title?: string;
                        description?: string;
                        newAdmin?: string;
                        contract?: string;
                    } | {
                        title?: string;
                        description?: string;
                        contract?: string;
                    } | {
                        title?: string;
                        description?: string;
                        codeIds?: bigint[];
                    } | {
                        title?: string;
                        description?: string;
                        codeIds?: bigint[];
                    } | {
                        title?: string;
                        description?: string;
                        accessConfigUpdates?: {
                            codeId?: bigint;
                            instantiatePermission?: {
                                permission?: import("../cosmwasm/wasm/v1/types").AccessType;
                                addresses?: string[];
                            };
                        }[];
                    } | {
                        title?: string;
                        description?: string;
                        runAs?: string;
                        wasmByteCode?: Uint8Array;
                        instantiatePermission?: {
                            permission?: import("../cosmwasm/wasm/v1/types").AccessType;
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
                    } | {
                        title?: string;
                        description?: string;
                    };
                    status?: _68.ProposalStatus;
                    finalTallyResult?: {
                        yes?: string;
                        abstain?: string;
                        no?: string;
                        noWithVeto?: string;
                    };
                    submitTime?: {
                        seconds?: bigint;
                        nanos?: number;
                    };
                    depositEndTime?: {
                        seconds?: bigint;
                        nanos?: number;
                    };
                    totalDeposit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    votingStartTime?: {
                        seconds?: bigint;
                        nanos?: number;
                    };
                    votingEndTime?: {
                        seconds?: bigint;
                        nanos?: number;
                    };
                }): _68.Proposal;
            };
            TallyResult: {
                encode(message: _68.TallyResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _68.TallyResult;
                fromJSON(object: any): _68.TallyResult;
                toJSON(message: _68.TallyResult): unknown;
                fromPartial(object: {
                    yes?: string;
                    abstain?: string;
                    no?: string;
                    noWithVeto?: string;
                }): _68.TallyResult;
            };
            Vote: {
                encode(message: _68.Vote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _68.Vote;
                fromJSON(object: any): _68.Vote;
                toJSON(message: _68.Vote): unknown;
                fromPartial(object: {
                    proposalId?: bigint;
                    voter?: string;
                    option?: _68.VoteOption;
                    options?: {
                        option?: _68.VoteOption;
                        weight?: string;
                    }[];
                }): _68.Vote;
            };
            DepositParams: {
                encode(message: _68.DepositParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _68.DepositParams;
                fromJSON(object: any): _68.DepositParams;
                toJSON(message: _68.DepositParams): unknown;
                fromPartial(object: {
                    minDeposit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    maxDepositPeriod?: {
                        seconds?: bigint;
                        nanos?: number;
                    };
                }): _68.DepositParams;
            };
            VotingParams: {
                encode(message: _68.VotingParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _68.VotingParams;
                fromJSON(object: any): _68.VotingParams;
                toJSON(message: _68.VotingParams): unknown;
                fromPartial(object: {
                    votingPeriod?: {
                        seconds?: bigint;
                        nanos?: number;
                    };
                }): _68.VotingParams;
            };
            TallyParams: {
                encode(message: _68.TallyParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _68.TallyParams;
                fromJSON(object: any): _68.TallyParams;
                toJSON(message: _68.TallyParams): unknown;
                fromPartial(object: {
                    quorum?: Uint8Array;
                    threshold?: Uint8Array;
                    vetoThreshold?: Uint8Array;
                }): _68.TallyParams;
            };
            GenesisState: {
                encode(message: _67.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _67.GenesisState;
                fromJSON(object: any): _67.GenesisState;
                toJSON(message: _67.GenesisState): unknown;
                fromPartial(object: {
                    startingProposalId?: bigint;
                    deposits?: {
                        proposalId?: bigint;
                        depositor?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    votes?: {
                        proposalId?: bigint;
                        voter?: string;
                        option?: _68.VoteOption;
                        options?: {
                            option?: _68.VoteOption;
                            weight?: string;
                        }[];
                    }[];
                    proposals?: {
                        proposalId?: bigint;
                        content?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } | {
                            title?: string;
                            description?: string;
                            recipient?: string;
                            amount?: {
                                denom?: string;
                                amount?: string;
                            }[];
                        } | {
                            title?: string;
                            description?: string;
                            recipient?: string;
                            amount?: string;
                            deposit?: string;
                        } | {
                            title?: string;
                            description?: string;
                            changes?: {
                                subspace?: string;
                                key?: string;
                                value?: string;
                            }[];
                        } | {
                            title?: string;
                            description?: string;
                            plan?: {
                                name?: string;
                                time?: {
                                    seconds?: bigint;
                                    nanos?: number;
                                };
                                height?: bigint;
                                info?: string;
                                upgradedClientState?: {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                };
                            };
                        } | {
                            title?: string;
                            description?: string;
                        } | {
                            title?: string;
                            description?: string;
                            runAs?: string;
                            wasmByteCode?: Uint8Array;
                            instantiatePermission?: {
                                permission?: import("../cosmwasm/wasm/v1/types").AccessType;
                                addresses?: string[];
                            };
                            unpinCode?: boolean;
                            source?: string;
                            builder?: string;
                            codeHash?: Uint8Array;
                        } | {
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
                        } | {
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
                        } | {
                            title?: string;
                            description?: string;
                            contract?: string;
                            codeId?: bigint;
                            msg?: Uint8Array;
                        } | {
                            title?: string;
                            description?: string;
                            contract?: string;
                            msg?: Uint8Array;
                        } | {
                            title?: string;
                            description?: string;
                            runAs?: string;
                            contract?: string;
                            msg?: Uint8Array;
                            funds?: {
                                denom?: string;
                                amount?: string;
                            }[];
                        } | {
                            title?: string;
                            description?: string;
                            newAdmin?: string;
                            contract?: string;
                        } | {
                            title?: string;
                            description?: string;
                            contract?: string;
                        } | {
                            title?: string;
                            description?: string;
                            codeIds?: bigint[];
                        } | {
                            title?: string;
                            description?: string;
                            codeIds?: bigint[];
                        } | {
                            title?: string;
                            description?: string;
                            accessConfigUpdates?: {
                                codeId?: bigint;
                                instantiatePermission?: {
                                    permission?: import("../cosmwasm/wasm/v1/types").AccessType;
                                    addresses?: string[];
                                };
                            }[];
                        } | {
                            title?: string;
                            description?: string;
                            runAs?: string;
                            wasmByteCode?: Uint8Array;
                            instantiatePermission?: {
                                permission?: import("../cosmwasm/wasm/v1/types").AccessType;
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
                        } | {
                            title?: string;
                            description?: string;
                        };
                        status?: _68.ProposalStatus;
                        finalTallyResult?: {
                            yes?: string;
                            abstain?: string;
                            no?: string;
                            noWithVeto?: string;
                        };
                        submitTime?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        depositEndTime?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        totalDeposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        votingStartTime?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        votingEndTime?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                    }[];
                    depositParams?: {
                        minDeposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        maxDepositPeriod?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                    };
                    votingParams?: {
                        votingPeriod?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                    };
                    tallyParams?: {
                        quorum?: Uint8Array;
                        threshold?: Uint8Array;
                        vetoThreshold?: Uint8Array;
                    };
                }): _67.GenesisState;
            };
        };
    }
    namespace group {
        namespace module {
            const v1: {
                Module: {
                    encode(message: _71.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _71.Module;
                    fromJSON(object: any): _71.Module;
                    toJSON(message: _71.Module): unknown;
                    fromPartial(object: {
                        maxExecutionPeriod?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        maxMetadataLen?: bigint;
                    }): _71.Module;
                };
            };
        }
    }
    namespace mint {
        namespace module {
            const v1: {
                Module: {
                    encode(message: _72.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _72.Module;
                    fromJSON(object: any): _72.Module;
                    toJSON(message: _72.Module): unknown;
                    fromPartial(object: {
                        feeCollectorName?: string;
                        authority?: string;
                    }): _72.Module;
                };
            };
        }
    }
    namespace nft {
        namespace module {
            const v1: {
                Module: {
                    encode(_: _73.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _73.Module;
                    fromJSON(_: any): _73.Module;
                    toJSON(_: _73.Module): unknown;
                    fromPartial(_: {}): _73.Module;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _228.MsgClientImpl;
            QueryClientImpl: typeof _214.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _77.QueryBalanceRequest): Promise<_77.QueryBalanceResponse>;
                owner(request: _77.QueryOwnerRequest): Promise<_77.QueryOwnerResponse>;
                supply(request: _77.QuerySupplyRequest): Promise<_77.QuerySupplyResponse>;
                nFTs(request: _77.QueryNFTsRequest): Promise<_77.QueryNFTsResponse>;
                nFT(request: _77.QueryNFTRequest): Promise<_77.QueryNFTResponse>;
                class(request: _77.QueryClassRequest): Promise<_77.QueryClassResponse>;
                classes(request?: _77.QueryClassesRequest): Promise<_77.QueryClassesResponse>;
            };
            LCDQueryClient: typeof _199.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _78.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _78.MsgSend): {
                        typeUrl: string;
                        value: _78.MsgSend;
                    };
                };
                toJSON: {
                    send(value: _78.MsgSend): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _78.MsgSend;
                    };
                };
                fromPartial: {
                    send(value: _78.MsgSend): {
                        typeUrl: string;
                        value: _78.MsgSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.nft.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: ({ classId, id, sender, receiver }: _78.MsgSend) => {
                        class_id: string;
                        id: string;
                        sender: string;
                        receiver: string;
                    };
                    fromAmino: ({ class_id, id, sender, receiver }: {
                        class_id: string;
                        id: string;
                        sender: string;
                        receiver: string;
                    }) => _78.MsgSend;
                };
            };
            MsgSend: {
                encode(message: _78.MsgSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _78.MsgSend;
                fromJSON(object: any): _78.MsgSend;
                toJSON(message: _78.MsgSend): unknown;
                fromPartial(object: {
                    classId?: string;
                    id?: string;
                    sender?: string;
                    receiver?: string;
                }): _78.MsgSend;
            };
            MsgSendResponse: {
                encode(_: _78.MsgSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _78.MsgSendResponse;
                fromJSON(_: any): _78.MsgSendResponse;
                toJSON(_: _78.MsgSendResponse): unknown;
                fromPartial(_: {}): _78.MsgSendResponse;
            };
            QueryBalanceRequest: {
                encode(message: _77.QueryBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _77.QueryBalanceRequest;
                fromJSON(object: any): _77.QueryBalanceRequest;
                toJSON(message: _77.QueryBalanceRequest): unknown;
                fromPartial(object: {
                    classId?: string;
                    owner?: string;
                }): _77.QueryBalanceRequest;
            };
            QueryBalanceResponse: {
                encode(message: _77.QueryBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _77.QueryBalanceResponse;
                fromJSON(object: any): _77.QueryBalanceResponse;
                toJSON(message: _77.QueryBalanceResponse): unknown;
                fromPartial(object: {
                    amount?: bigint;
                }): _77.QueryBalanceResponse;
            };
            QueryOwnerRequest: {
                encode(message: _77.QueryOwnerRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _77.QueryOwnerRequest;
                fromJSON(object: any): _77.QueryOwnerRequest;
                toJSON(message: _77.QueryOwnerRequest): unknown;
                fromPartial(object: {
                    classId?: string;
                    id?: string;
                }): _77.QueryOwnerRequest;
            };
            QueryOwnerResponse: {
                encode(message: _77.QueryOwnerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _77.QueryOwnerResponse;
                fromJSON(object: any): _77.QueryOwnerResponse;
                toJSON(message: _77.QueryOwnerResponse): unknown;
                fromPartial(object: {
                    owner?: string;
                }): _77.QueryOwnerResponse;
            };
            QuerySupplyRequest: {
                encode(message: _77.QuerySupplyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _77.QuerySupplyRequest;
                fromJSON(object: any): _77.QuerySupplyRequest;
                toJSON(message: _77.QuerySupplyRequest): unknown;
                fromPartial(object: {
                    classId?: string;
                }): _77.QuerySupplyRequest;
            };
            QuerySupplyResponse: {
                encode(message: _77.QuerySupplyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _77.QuerySupplyResponse;
                fromJSON(object: any): _77.QuerySupplyResponse;
                toJSON(message: _77.QuerySupplyResponse): unknown;
                fromPartial(object: {
                    amount?: bigint;
                }): _77.QuerySupplyResponse;
            };
            QueryNFTsRequest: {
                encode(message: _77.QueryNFTsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _77.QueryNFTsRequest;
                fromJSON(object: any): _77.QueryNFTsRequest;
                toJSON(message: _77.QueryNFTsRequest): unknown;
                fromPartial(object: {
                    classId?: string;
                    owner?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: bigint;
                        limit?: bigint;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _77.QueryNFTsRequest;
            };
            QueryNFTsResponse: {
                encode(message: _77.QueryNFTsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _77.QueryNFTsResponse;
                fromJSON(object: any): _77.QueryNFTsResponse;
                toJSON(message: _77.QueryNFTsResponse): unknown;
                fromPartial(object: {
                    nfts?: {
                        classId?: string;
                        id?: string;
                        uri?: string;
                        uriHash?: string;
                        data?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: bigint;
                    };
                }): _77.QueryNFTsResponse;
            };
            QueryNFTRequest: {
                encode(message: _77.QueryNFTRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _77.QueryNFTRequest;
                fromJSON(object: any): _77.QueryNFTRequest;
                toJSON(message: _77.QueryNFTRequest): unknown;
                fromPartial(object: {
                    classId?: string;
                    id?: string;
                }): _77.QueryNFTRequest;
            };
            QueryNFTResponse: {
                encode(message: _77.QueryNFTResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _77.QueryNFTResponse;
                fromJSON(object: any): _77.QueryNFTResponse;
                toJSON(message: _77.QueryNFTResponse): unknown;
                fromPartial(object: {
                    nft?: {
                        classId?: string;
                        id?: string;
                        uri?: string;
                        uriHash?: string;
                        data?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    };
                }): _77.QueryNFTResponse;
            };
            QueryClassRequest: {
                encode(message: _77.QueryClassRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _77.QueryClassRequest;
                fromJSON(object: any): _77.QueryClassRequest;
                toJSON(message: _77.QueryClassRequest): unknown;
                fromPartial(object: {
                    classId?: string;
                }): _77.QueryClassRequest;
            };
            QueryClassResponse: {
                encode(message: _77.QueryClassResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _77.QueryClassResponse;
                fromJSON(object: any): _77.QueryClassResponse;
                toJSON(message: _77.QueryClassResponse): unknown;
                fromPartial(object: {
                    class?: {
                        id?: string;
                        name?: string;
                        symbol?: string;
                        description?: string;
                        uri?: string;
                        uriHash?: string;
                        data?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    };
                }): _77.QueryClassResponse;
            };
            QueryClassesRequest: {
                encode(message: _77.QueryClassesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _77.QueryClassesRequest;
                fromJSON(object: any): _77.QueryClassesRequest;
                toJSON(message: _77.QueryClassesRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: bigint;
                        limit?: bigint;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _77.QueryClassesRequest;
            };
            QueryClassesResponse: {
                encode(message: _77.QueryClassesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _77.QueryClassesResponse;
                fromJSON(object: any): _77.QueryClassesResponse;
                toJSON(message: _77.QueryClassesResponse): unknown;
                fromPartial(object: {
                    classes?: {
                        id?: string;
                        name?: string;
                        symbol?: string;
                        description?: string;
                        uri?: string;
                        uriHash?: string;
                        data?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: bigint;
                    };
                }): _77.QueryClassesResponse;
            };
            Class: {
                encode(message: _76.Class, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _76.Class;
                fromJSON(object: any): _76.Class;
                toJSON(message: _76.Class): unknown;
                fromPartial(object: {
                    id?: string;
                    name?: string;
                    symbol?: string;
                    description?: string;
                    uri?: string;
                    uriHash?: string;
                    data?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _76.Class;
            };
            NFT: {
                encode(message: _76.NFT, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _76.NFT;
                fromJSON(object: any): _76.NFT;
                toJSON(message: _76.NFT): unknown;
                fromPartial(object: {
                    classId?: string;
                    id?: string;
                    uri?: string;
                    uriHash?: string;
                    data?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _76.NFT;
            };
            GenesisState: {
                encode(message: _75.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _75.GenesisState;
                fromJSON(object: any): _75.GenesisState;
                toJSON(message: _75.GenesisState): unknown;
                fromPartial(object: {
                    classes?: {
                        id?: string;
                        name?: string;
                        symbol?: string;
                        description?: string;
                        uri?: string;
                        uriHash?: string;
                        data?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                    entries?: {
                        owner?: string;
                        nfts?: {
                            classId?: string;
                            id?: string;
                            uri?: string;
                            uriHash?: string;
                            data?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        }[];
                    }[];
                }): _75.GenesisState;
            };
            Entry: {
                encode(message: _75.Entry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _75.Entry;
                fromJSON(object: any): _75.Entry;
                toJSON(message: _75.Entry): unknown;
                fromPartial(object: {
                    owner?: string;
                    nfts?: {
                        classId?: string;
                        id?: string;
                        uri?: string;
                        uriHash?: string;
                        data?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                }): _75.Entry;
            };
            EventSend: {
                encode(message: _74.EventSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _74.EventSend;
                fromJSON(object: any): _74.EventSend;
                toJSON(message: _74.EventSend): unknown;
                fromPartial(object: {
                    classId?: string;
                    id?: string;
                    sender?: string;
                    receiver?: string;
                }): _74.EventSend;
            };
            EventMint: {
                encode(message: _74.EventMint, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _74.EventMint;
                fromJSON(object: any): _74.EventMint;
                toJSON(message: _74.EventMint): unknown;
                fromPartial(object: {
                    classId?: string;
                    id?: string;
                    owner?: string;
                }): _74.EventMint;
            };
            EventBurn: {
                encode(message: _74.EventBurn, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _74.EventBurn;
                fromJSON(object: any): _74.EventBurn;
                toJSON(message: _74.EventBurn): unknown;
                fromPartial(object: {
                    classId?: string;
                    id?: string;
                    owner?: string;
                }): _74.EventBurn;
            };
        };
    }
    namespace orm {
        namespace module {
            const v1alpha1: {
                Module: {
                    encode(_: _79.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _79.Module;
                    fromJSON(_: any): _79.Module;
                    toJSON(_: _79.Module): unknown;
                    fromPartial(_: {}): _79.Module;
                };
            };
        }
        namespace query {
            const v1alpha1: {
                QueryClientImpl: typeof _215.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    get(request: _80.GetRequest): Promise<_80.GetResponse>;
                    list(request: _80.ListRequest): Promise<_80.ListResponse>;
                };
                GetRequest: {
                    encode(message: _80.GetRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _80.GetRequest;
                    fromJSON(object: any): _80.GetRequest;
                    toJSON(message: _80.GetRequest): unknown;
                    fromPartial(object: {
                        messageName?: string;
                        index?: string;
                        values?: {
                            uint?: bigint;
                            int?: bigint;
                            str?: string;
                            bytes?: Uint8Array;
                            enum?: string;
                            bool?: boolean;
                            timestamp?: {
                                seconds?: bigint;
                                nanos?: number;
                            };
                            duration?: {
                                seconds?: bigint;
                                nanos?: number;
                            };
                        }[];
                    }): _80.GetRequest;
                };
                GetResponse: {
                    encode(message: _80.GetResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _80.GetResponse;
                    fromJSON(object: any): _80.GetResponse;
                    toJSON(message: _80.GetResponse): unknown;
                    fromPartial(object: {
                        result?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }): _80.GetResponse;
                };
                ListRequest: {
                    encode(message: _80.ListRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _80.ListRequest;
                    fromJSON(object: any): _80.ListRequest;
                    toJSON(message: _80.ListRequest): unknown;
                    fromPartial(object: {
                        messageName?: string;
                        index?: string;
                        prefix?: {
                            values?: {
                                uint?: bigint;
                                int?: bigint;
                                str?: string;
                                bytes?: Uint8Array;
                                enum?: string;
                                bool?: boolean;
                                timestamp?: {
                                    seconds?: bigint;
                                    nanos?: number;
                                };
                                duration?: {
                                    seconds?: bigint;
                                    nanos?: number;
                                };
                            }[];
                        };
                        range?: {
                            start?: {
                                uint?: bigint;
                                int?: bigint;
                                str?: string;
                                bytes?: Uint8Array;
                                enum?: string;
                                bool?: boolean;
                                timestamp?: {
                                    seconds?: bigint;
                                    nanos?: number;
                                };
                                duration?: {
                                    seconds?: bigint;
                                    nanos?: number;
                                };
                            }[];
                            end?: {
                                uint?: bigint;
                                int?: bigint;
                                str?: string;
                                bytes?: Uint8Array;
                                enum?: string;
                                bool?: boolean;
                                timestamp?: {
                                    seconds?: bigint;
                                    nanos?: number;
                                };
                                duration?: {
                                    seconds?: bigint;
                                    nanos?: number;
                                };
                            }[];
                        };
                        pagination?: {
                            key?: Uint8Array;
                            offset?: bigint;
                            limit?: bigint;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    }): _80.ListRequest;
                };
                ListRequest_Prefix: {
                    encode(message: _80.ListRequest_Prefix, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _80.ListRequest_Prefix;
                    fromJSON(object: any): _80.ListRequest_Prefix;
                    toJSON(message: _80.ListRequest_Prefix): unknown;
                    fromPartial(object: {
                        values?: {
                            uint?: bigint;
                            int?: bigint;
                            str?: string;
                            bytes?: Uint8Array;
                            enum?: string;
                            bool?: boolean;
                            timestamp?: {
                                seconds?: bigint;
                                nanos?: number;
                            };
                            duration?: {
                                seconds?: bigint;
                                nanos?: number;
                            };
                        }[];
                    }): _80.ListRequest_Prefix;
                };
                ListRequest_Range: {
                    encode(message: _80.ListRequest_Range, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _80.ListRequest_Range;
                    fromJSON(object: any): _80.ListRequest_Range;
                    toJSON(message: _80.ListRequest_Range): unknown;
                    fromPartial(object: {
                        start?: {
                            uint?: bigint;
                            int?: bigint;
                            str?: string;
                            bytes?: Uint8Array;
                            enum?: string;
                            bool?: boolean;
                            timestamp?: {
                                seconds?: bigint;
                                nanos?: number;
                            };
                            duration?: {
                                seconds?: bigint;
                                nanos?: number;
                            };
                        }[];
                        end?: {
                            uint?: bigint;
                            int?: bigint;
                            str?: string;
                            bytes?: Uint8Array;
                            enum?: string;
                            bool?: boolean;
                            timestamp?: {
                                seconds?: bigint;
                                nanos?: number;
                            };
                            duration?: {
                                seconds?: bigint;
                                nanos?: number;
                            };
                        }[];
                    }): _80.ListRequest_Range;
                };
                ListResponse: {
                    encode(message: _80.ListResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _80.ListResponse;
                    fromJSON(object: any): _80.ListResponse;
                    toJSON(message: _80.ListResponse): unknown;
                    fromPartial(object: {
                        results?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: bigint;
                        };
                    }): _80.ListResponse;
                };
                IndexValue: {
                    encode(message: _80.IndexValue, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _80.IndexValue;
                    fromJSON(object: any): _80.IndexValue;
                    toJSON(message: _80.IndexValue): unknown;
                    fromPartial(object: {
                        uint?: bigint;
                        int?: bigint;
                        str?: string;
                        bytes?: Uint8Array;
                        enum?: string;
                        bool?: boolean;
                        timestamp?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        duration?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                    }): _80.IndexValue;
                };
            };
        }
    }
    namespace params {
        namespace module {
            const v1: {
                Module: {
                    encode(_: _81.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _81.Module;
                    fromJSON(_: any): _81.Module;
                    toJSON(_: _81.Module): unknown;
                    fromPartial(_: {}): _81.Module;
                };
            };
        }
        const v1beta1: {
            QueryClientImpl: typeof _216.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request: _83.QueryParamsRequest): Promise<_83.QueryParamsResponse>;
                subspaces(request?: _83.QuerySubspacesRequest): Promise<_83.QuerySubspacesResponse>;
            };
            LCDQueryClient: typeof _200.LCDQueryClient;
            QueryParamsRequest: {
                encode(message: _83.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _83.QueryParamsRequest;
                fromJSON(object: any): _83.QueryParamsRequest;
                toJSON(message: _83.QueryParamsRequest): unknown;
                fromPartial(object: {
                    subspace?: string;
                    key?: string;
                }): _83.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _83.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _83.QueryParamsResponse;
                fromJSON(object: any): _83.QueryParamsResponse;
                toJSON(message: _83.QueryParamsResponse): unknown;
                fromPartial(object: {
                    param?: {
                        subspace?: string;
                        key?: string;
                        value?: string;
                    };
                }): _83.QueryParamsResponse;
            };
            QuerySubspacesRequest: {
                encode(_: _83.QuerySubspacesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _83.QuerySubspacesRequest;
                fromJSON(_: any): _83.QuerySubspacesRequest;
                toJSON(_: _83.QuerySubspacesRequest): unknown;
                fromPartial(_: {}): _83.QuerySubspacesRequest;
            };
            QuerySubspacesResponse: {
                encode(message: _83.QuerySubspacesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _83.QuerySubspacesResponse;
                fromJSON(object: any): _83.QuerySubspacesResponse;
                toJSON(message: _83.QuerySubspacesResponse): unknown;
                fromPartial(object: {
                    subspaces?: {
                        subspace?: string;
                        keys?: string[];
                    }[];
                }): _83.QuerySubspacesResponse;
            };
            Subspace: {
                encode(message: _83.Subspace, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _83.Subspace;
                fromJSON(object: any): _83.Subspace;
                toJSON(message: _83.Subspace): unknown;
                fromPartial(object: {
                    subspace?: string;
                    keys?: string[];
                }): _83.Subspace;
            };
            ParameterChangeProposal: {
                encode(message: _82.ParameterChangeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _82.ParameterChangeProposal;
                fromJSON(object: any): _82.ParameterChangeProposal;
                toJSON(message: _82.ParameterChangeProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    changes?: {
                        subspace?: string;
                        key?: string;
                        value?: string;
                    }[];
                }): _82.ParameterChangeProposal;
            };
            ParamChange: {
                encode(message: _82.ParamChange, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _82.ParamChange;
                fromJSON(object: any): _82.ParamChange;
                toJSON(message: _82.ParamChange): unknown;
                fromPartial(object: {
                    subspace?: string;
                    key?: string;
                    value?: string;
                }): _82.ParamChange;
            };
        };
    }
    namespace query {
        const v1: {};
    }
    namespace reflection {
        const v1: {
            FileDescriptorsRequest: {
                encode(_: _85.FileDescriptorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _85.FileDescriptorsRequest;
                fromJSON(_: any): _85.FileDescriptorsRequest;
                toJSON(_: _85.FileDescriptorsRequest): unknown;
                fromPartial(_: {}): _85.FileDescriptorsRequest;
            };
            FileDescriptorsResponse: {
                encode(message: _85.FileDescriptorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _85.FileDescriptorsResponse;
                fromJSON(object: any): _85.FileDescriptorsResponse;
                toJSON(message: _85.FileDescriptorsResponse): unknown;
                fromPartial(object: {
                    files?: {
                        name?: string;
                        package?: string;
                        dependency?: string[];
                        publicDependency?: number[];
                        weakDependency?: number[];
                        messageType?: {
                            name?: string;
                            field?: {
                                name?: string;
                                number?: number;
                                label?: import("../google/protobuf/descriptor").FieldDescriptorProto_Label;
                                type?: import("../google/protobuf/descriptor").FieldDescriptorProto_Type;
                                typeName?: string;
                                extendee?: string;
                                defaultValue?: string;
                                oneofIndex?: number;
                                jsonName?: string;
                                options?: {
                                    ctype?: import("../google/protobuf/descriptor").FieldOptions_CType;
                                    packed?: boolean;
                                    jstype?: import("../google/protobuf/descriptor").FieldOptions_JSType;
                                    lazy?: boolean;
                                    deprecated?: boolean;
                                    weak?: boolean;
                                    uninterpretedOption?: {
                                        name?: {
                                            namePart?: string;
                                            isExtension?: boolean;
                                        }[];
                                        identifierValue?: string;
                                        positiveIntValue?: bigint;
                                        negativeIntValue?: bigint;
                                        doubleValue?: number;
                                        stringValue?: Uint8Array;
                                        aggregateValue?: string;
                                    }[];
                                };
                            }[];
                            extension?: {
                                name?: string;
                                number?: number;
                                label?: import("../google/protobuf/descriptor").FieldDescriptorProto_Label;
                                type?: import("../google/protobuf/descriptor").FieldDescriptorProto_Type;
                                typeName?: string;
                                extendee?: string;
                                defaultValue?: string;
                                oneofIndex?: number;
                                jsonName?: string;
                                options?: {
                                    ctype?: import("../google/protobuf/descriptor").FieldOptions_CType;
                                    packed?: boolean;
                                    jstype?: import("../google/protobuf/descriptor").FieldOptions_JSType;
                                    lazy?: boolean;
                                    deprecated?: boolean;
                                    weak?: boolean;
                                    uninterpretedOption?: {
                                        name?: {
                                            namePart?: string;
                                            isExtension?: boolean;
                                        }[];
                                        identifierValue?: string;
                                        positiveIntValue?: bigint;
                                        negativeIntValue?: bigint;
                                        doubleValue?: number;
                                        stringValue?: Uint8Array;
                                        aggregateValue?: string;
                                    }[];
                                };
                            }[];
                            nestedType?: any[];
                            enumType?: {
                                name?: string;
                                value?: {
                                    name?: string;
                                    number?: number;
                                    options?: {
                                        deprecated?: boolean;
                                        uninterpretedOption?: {
                                            name?: {
                                                namePart?: string;
                                                isExtension?: boolean;
                                            }[];
                                            identifierValue?: string;
                                            positiveIntValue?: bigint;
                                            negativeIntValue?: bigint;
                                            doubleValue?: number;
                                            stringValue?: Uint8Array;
                                            aggregateValue?: string;
                                        }[];
                                    };
                                }[];
                                options?: {
                                    allowAlias?: boolean;
                                    deprecated?: boolean;
                                    uninterpretedOption?: {
                                        name?: {
                                            namePart?: string;
                                            isExtension?: boolean;
                                        }[];
                                        identifierValue?: string;
                                        positiveIntValue?: bigint;
                                        negativeIntValue?: bigint;
                                        doubleValue?: number;
                                        stringValue?: Uint8Array;
                                        aggregateValue?: string;
                                    }[];
                                };
                                reservedRange?: {
                                    start?: number;
                                    end?: number;
                                }[];
                                reservedName?: string[];
                            }[];
                            extensionRange?: {
                                start?: number;
                                end?: number;
                                options?: {
                                    uninterpretedOption?: {
                                        name?: {
                                            namePart?: string;
                                            isExtension?: boolean;
                                        }[];
                                        identifierValue?: string;
                                        positiveIntValue?: bigint;
                                        negativeIntValue?: bigint;
                                        doubleValue?: number;
                                        stringValue?: Uint8Array;
                                        aggregateValue?: string;
                                    }[];
                                };
                            }[];
                            oneofDecl?: {
                                name?: string;
                                options?: {
                                    uninterpretedOption?: {
                                        name?: {
                                            namePart?: string;
                                            isExtension?: boolean;
                                        }[];
                                        identifierValue?: string;
                                        positiveIntValue?: bigint;
                                        negativeIntValue?: bigint;
                                        doubleValue?: number;
                                        stringValue?: Uint8Array;
                                        aggregateValue?: string;
                                    }[];
                                };
                            }[];
                            options?: {
                                messageSetWireFormat?: boolean;
                                noStandardDescriptorAccessor?: boolean;
                                deprecated?: boolean;
                                mapEntry?: boolean;
                                uninterpretedOption?: {
                                    name?: {
                                        namePart?: string;
                                        isExtension?: boolean;
                                    }[];
                                    identifierValue?: string;
                                    positiveIntValue?: bigint;
                                    negativeIntValue?: bigint;
                                    doubleValue?: number;
                                    stringValue?: Uint8Array;
                                    aggregateValue?: string;
                                }[];
                            };
                            reservedRange?: {
                                start?: number;
                                end?: number;
                            }[];
                            reservedName?: string[];
                        }[];
                        enumType?: {
                            name?: string;
                            value?: {
                                name?: string;
                                number?: number;
                                options?: {
                                    deprecated?: boolean;
                                    uninterpretedOption?: {
                                        name?: {
                                            namePart?: string;
                                            isExtension?: boolean;
                                        }[];
                                        identifierValue?: string;
                                        positiveIntValue?: bigint;
                                        negativeIntValue?: bigint;
                                        doubleValue?: number;
                                        stringValue?: Uint8Array;
                                        aggregateValue?: string;
                                    }[];
                                };
                            }[];
                            options?: {
                                allowAlias?: boolean;
                                deprecated?: boolean;
                                uninterpretedOption?: {
                                    name?: {
                                        namePart?: string;
                                        isExtension?: boolean;
                                    }[];
                                    identifierValue?: string;
                                    positiveIntValue?: bigint;
                                    negativeIntValue?: bigint;
                                    doubleValue?: number;
                                    stringValue?: Uint8Array;
                                    aggregateValue?: string;
                                }[];
                            };
                            reservedRange?: {
                                start?: number;
                                end?: number;
                            }[];
                            reservedName?: string[];
                        }[];
                        service?: {
                            name?: string;
                            method?: {
                                name?: string;
                                inputType?: string;
                                outputType?: string;
                                options?: {
                                    deprecated?: boolean;
                                    idempotencyLevel?: import("../google/protobuf/descriptor").MethodOptions_IdempotencyLevel;
                                    uninterpretedOption?: {
                                        name?: {
                                            namePart?: string;
                                            isExtension?: boolean;
                                        }[];
                                        identifierValue?: string;
                                        positiveIntValue?: bigint;
                                        negativeIntValue?: bigint;
                                        doubleValue?: number;
                                        stringValue?: Uint8Array;
                                        aggregateValue?: string;
                                    }[];
                                };
                                clientStreaming?: boolean;
                                serverStreaming?: boolean;
                            }[];
                            options?: {
                                deprecated?: boolean;
                                uninterpretedOption?: {
                                    name?: {
                                        namePart?: string;
                                        isExtension?: boolean;
                                    }[];
                                    identifierValue?: string;
                                    positiveIntValue?: bigint;
                                    negativeIntValue?: bigint;
                                    doubleValue?: number;
                                    stringValue?: Uint8Array;
                                    aggregateValue?: string;
                                }[];
                            };
                        }[];
                        extension?: {
                            name?: string;
                            number?: number;
                            label?: import("../google/protobuf/descriptor").FieldDescriptorProto_Label;
                            type?: import("../google/protobuf/descriptor").FieldDescriptorProto_Type;
                            typeName?: string;
                            extendee?: string;
                            defaultValue?: string;
                            oneofIndex?: number;
                            jsonName?: string;
                            options?: {
                                ctype?: import("../google/protobuf/descriptor").FieldOptions_CType;
                                packed?: boolean;
                                jstype?: import("../google/protobuf/descriptor").FieldOptions_JSType;
                                lazy?: boolean;
                                deprecated?: boolean;
                                weak?: boolean;
                                uninterpretedOption?: {
                                    name?: {
                                        namePart?: string;
                                        isExtension?: boolean;
                                    }[];
                                    identifierValue?: string;
                                    positiveIntValue?: bigint;
                                    negativeIntValue?: bigint;
                                    doubleValue?: number;
                                    stringValue?: Uint8Array;
                                    aggregateValue?: string;
                                }[];
                            };
                        }[];
                        options?: {
                            javaPackage?: string;
                            javaOuterClassname?: string;
                            javaMultipleFiles?: boolean;
                            javaGenerateEqualsAndHash?: boolean;
                            javaStringCheckUtf8?: boolean;
                            optimizeFor?: import("../google/protobuf/descriptor").FileOptions_OptimizeMode;
                            goPackage?: string;
                            ccGenericServices?: boolean;
                            javaGenericServices?: boolean;
                            pyGenericServices?: boolean;
                            phpGenericServices?: boolean;
                            deprecated?: boolean;
                            ccEnableArenas?: boolean;
                            objcClassPrefix?: string;
                            csharpNamespace?: string;
                            swiftPrefix?: string;
                            phpClassPrefix?: string;
                            phpNamespace?: string;
                            phpMetadataNamespace?: string;
                            rubyPackage?: string;
                            uninterpretedOption?: {
                                name?: {
                                    namePart?: string;
                                    isExtension?: boolean;
                                }[];
                                identifierValue?: string;
                                positiveIntValue?: bigint;
                                negativeIntValue?: bigint;
                                doubleValue?: number;
                                stringValue?: Uint8Array;
                                aggregateValue?: string;
                            }[];
                        };
                        sourceCodeInfo?: {
                            location?: {
                                path?: number[];
                                span?: number[];
                                leadingComments?: string;
                                trailingComments?: string;
                                leadingDetachedComments?: string[];
                            }[];
                        };
                        syntax?: string;
                    }[];
                }): _85.FileDescriptorsResponse;
            };
        };
    }
    namespace slashing {
        namespace module {
            const v1: {
                Module: {
                    encode(message: _86.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _86.Module;
                    fromJSON(object: any): _86.Module;
                    toJSON(message: _86.Module): unknown;
                    fromPartial(object: {
                        authority?: string;
                    }): _86.Module;
                };
            };
        }
    }
    namespace staking {
        namespace module {
            const v1: {
                Module: {
                    encode(message: _87.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _87.Module;
                    fromJSON(object: any): _87.Module;
                    toJSON(message: _87.Module): unknown;
                    fromPartial(object: {
                        hooksOrder?: string[];
                        authority?: string;
                    }): _87.Module;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _229.MsgClientImpl;
            QueryClientImpl: typeof _217.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                validators(request: _90.QueryValidatorsRequest): Promise<_90.QueryValidatorsResponse>;
                validator(request: _90.QueryValidatorRequest): Promise<_90.QueryValidatorResponse>;
                validatorDelegations(request: _90.QueryValidatorDelegationsRequest): Promise<_90.QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: _90.QueryValidatorUnbondingDelegationsRequest): Promise<_90.QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: _90.QueryDelegationRequest): Promise<_90.QueryDelegationResponse>;
                unbondingDelegation(request: _90.QueryUnbondingDelegationRequest): Promise<_90.QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: _90.QueryDelegatorDelegationsRequest): Promise<_90.QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: _90.QueryDelegatorUnbondingDelegationsRequest): Promise<_90.QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: _90.QueryRedelegationsRequest): Promise<_90.QueryRedelegationsResponse>;
                delegatorValidators(request: _90.QueryDelegatorValidatorsRequest): Promise<_90.QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: _90.QueryDelegatorValidatorRequest): Promise<_90.QueryDelegatorValidatorResponse>;
                historicalInfo(request: _90.QueryHistoricalInfoRequest): Promise<_90.QueryHistoricalInfoResponse>;
                pool(request?: _90.QueryPoolRequest): Promise<_90.QueryPoolResponse>;
                params(request?: _90.QueryParamsRequest): Promise<_90.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _201.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createValidator(value: _92.MsgCreateValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editValidator(value: _92.MsgEditValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegate(value: _92.MsgDelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    beginRedelegate(value: _92.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegate(value: _92.MsgUndelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUnbondingDelegation(value: _92.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _92.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createValidator(value: _92.MsgCreateValidator): {
                        typeUrl: string;
                        value: _92.MsgCreateValidator;
                    };
                    editValidator(value: _92.MsgEditValidator): {
                        typeUrl: string;
                        value: _92.MsgEditValidator;
                    };
                    delegate(value: _92.MsgDelegate): {
                        typeUrl: string;
                        value: _92.MsgDelegate;
                    };
                    beginRedelegate(value: _92.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _92.MsgBeginRedelegate;
                    };
                    undelegate(value: _92.MsgUndelegate): {
                        typeUrl: string;
                        value: _92.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: _92.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: _92.MsgCancelUnbondingDelegation;
                    };
                    updateParams(value: _92.MsgUpdateParams): {
                        typeUrl: string;
                        value: _92.MsgUpdateParams;
                    };
                };
                toJSON: {
                    createValidator(value: _92.MsgCreateValidator): {
                        typeUrl: string;
                        value: unknown;
                    };
                    editValidator(value: _92.MsgEditValidator): {
                        typeUrl: string;
                        value: unknown;
                    };
                    delegate(value: _92.MsgDelegate): {
                        typeUrl: string;
                        value: unknown;
                    };
                    beginRedelegate(value: _92.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: unknown;
                    };
                    undelegate(value: _92.MsgUndelegate): {
                        typeUrl: string;
                        value: unknown;
                    };
                    cancelUnbondingDelegation(value: _92.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateParams(value: _92.MsgUpdateParams): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createValidator(value: any): {
                        typeUrl: string;
                        value: _92.MsgCreateValidator;
                    };
                    editValidator(value: any): {
                        typeUrl: string;
                        value: _92.MsgEditValidator;
                    };
                    delegate(value: any): {
                        typeUrl: string;
                        value: _92.MsgDelegate;
                    };
                    beginRedelegate(value: any): {
                        typeUrl: string;
                        value: _92.MsgBeginRedelegate;
                    };
                    undelegate(value: any): {
                        typeUrl: string;
                        value: _92.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: any): {
                        typeUrl: string;
                        value: _92.MsgCancelUnbondingDelegation;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _92.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    createValidator(value: _92.MsgCreateValidator): {
                        typeUrl: string;
                        value: _92.MsgCreateValidator;
                    };
                    editValidator(value: _92.MsgEditValidator): {
                        typeUrl: string;
                        value: _92.MsgEditValidator;
                    };
                    delegate(value: _92.MsgDelegate): {
                        typeUrl: string;
                        value: _92.MsgDelegate;
                    };
                    beginRedelegate(value: _92.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _92.MsgBeginRedelegate;
                    };
                    undelegate(value: _92.MsgUndelegate): {
                        typeUrl: string;
                        value: _92.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: _92.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: _92.MsgCancelUnbondingDelegation;
                    };
                    updateParams(value: _92.MsgUpdateParams): {
                        typeUrl: string;
                        value: _92.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: ({ description, commission, minSelfDelegation, delegatorAddress, validatorAddress, pubkey, value }: _92.MsgCreateValidator) => {
                        description: {
                            moniker: string;
                            identity: string;
                            website: string;
                            security_contact: string;
                            details: string;
                        };
                        commission: {
                            rate: string;
                            max_rate: string;
                            max_change_rate: string;
                        };
                        min_self_delegation: string;
                        delegator_address: string;
                        validator_address: string;
                        pubkey: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        value: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ description, commission, min_self_delegation, delegator_address, validator_address, pubkey, value }: {
                        description: {
                            moniker: string;
                            identity: string;
                            website: string;
                            security_contact: string;
                            details: string;
                        };
                        commission: {
                            rate: string;
                            max_rate: string;
                            max_change_rate: string;
                        };
                        min_self_delegation: string;
                        delegator_address: string;
                        validator_address: string;
                        pubkey: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        value: {
                            denom: string;
                            amount: string;
                        };
                    }) => _92.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: ({ description, validatorAddress, commissionRate, minSelfDelegation }: _92.MsgEditValidator) => {
                        description: {
                            moniker: string;
                            identity: string;
                            website: string;
                            security_contact: string;
                            details: string;
                        };
                        validator_address: string;
                        commission_rate: string;
                        min_self_delegation: string;
                    };
                    fromAmino: ({ description, validator_address, commission_rate, min_self_delegation }: {
                        description: {
                            moniker: string;
                            identity: string;
                            website: string;
                            security_contact: string;
                            details: string;
                        };
                        validator_address: string;
                        commission_rate: string;
                        min_self_delegation: string;
                    }) => _92.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount }: _92.MsgDelegate) => {
                        delegator_address: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ delegator_address, validator_address, amount }: {
                        delegator_address: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _92.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorSrcAddress, validatorDstAddress, amount }: _92.MsgBeginRedelegate) => {
                        delegator_address: string;
                        validator_src_address: string;
                        validator_dst_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ delegator_address, validator_src_address, validator_dst_address, amount }: {
                        delegator_address: string;
                        validator_src_address: string;
                        validator_dst_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _92.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount }: _92.MsgUndelegate) => {
                        delegator_address: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ delegator_address, validator_address, amount }: {
                        delegator_address: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _92.MsgUndelegate;
                };
                "/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount, creationHeight }: _92.MsgCancelUnbondingDelegation) => {
                        delegator_address: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                        creation_height: string;
                    };
                    fromAmino: ({ delegator_address, validator_address, amount, creation_height }: {
                        delegator_address: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                        creation_height: string;
                    }) => _92.MsgCancelUnbondingDelegation;
                };
                "/cosmos.staking.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: ({ authority, params }: _92.MsgUpdateParams) => {
                        authority: string;
                        params: {
                            unbonding_time: {
                                seconds: string;
                                nanos: number;
                            };
                            max_validators: number;
                            max_entries: number;
                            historical_entries: number;
                            bond_denom: string;
                            min_commission_rate: string;
                        };
                    };
                    fromAmino: ({ authority, params }: {
                        authority: string;
                        params: {
                            unbonding_time: {
                                seconds: string;
                                nanos: number;
                            };
                            max_validators: number;
                            max_entries: number;
                            historical_entries: number;
                            bond_denom: string;
                            min_commission_rate: string;
                        };
                    }) => _92.MsgUpdateParams;
                };
            };
            MsgCreateValidator: {
                encode(message: _92.MsgCreateValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _92.MsgCreateValidator;
                fromJSON(object: any): _92.MsgCreateValidator;
                toJSON(message: _92.MsgCreateValidator): unknown;
                fromPartial(object: {
                    description?: {
                        moniker?: string;
                        identity?: string;
                        website?: string;
                        securityContact?: string;
                        details?: string;
                    };
                    commission?: {
                        rate?: string;
                        maxRate?: string;
                        maxChangeRate?: string;
                    };
                    minSelfDelegation?: string;
                    delegatorAddress?: string;
                    validatorAddress?: string;
                    pubkey?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    value?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _92.MsgCreateValidator;
            };
            MsgCreateValidatorResponse: {
                encode(_: _92.MsgCreateValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _92.MsgCreateValidatorResponse;
                fromJSON(_: any): _92.MsgCreateValidatorResponse;
                toJSON(_: _92.MsgCreateValidatorResponse): unknown;
                fromPartial(_: {}): _92.MsgCreateValidatorResponse;
            };
            MsgEditValidator: {
                encode(message: _92.MsgEditValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _92.MsgEditValidator;
                fromJSON(object: any): _92.MsgEditValidator;
                toJSON(message: _92.MsgEditValidator): unknown;
                fromPartial(object: {
                    description?: {
                        moniker?: string;
                        identity?: string;
                        website?: string;
                        securityContact?: string;
                        details?: string;
                    };
                    validatorAddress?: string;
                    commissionRate?: string;
                    minSelfDelegation?: string;
                }): _92.MsgEditValidator;
            };
            MsgEditValidatorResponse: {
                encode(_: _92.MsgEditValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _92.MsgEditValidatorResponse;
                fromJSON(_: any): _92.MsgEditValidatorResponse;
                toJSON(_: _92.MsgEditValidatorResponse): unknown;
                fromPartial(_: {}): _92.MsgEditValidatorResponse;
            };
            MsgDelegate: {
                encode(message: _92.MsgDelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _92.MsgDelegate;
                fromJSON(object: any): _92.MsgDelegate;
                toJSON(message: _92.MsgDelegate): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _92.MsgDelegate;
            };
            MsgDelegateResponse: {
                encode(_: _92.MsgDelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _92.MsgDelegateResponse;
                fromJSON(_: any): _92.MsgDelegateResponse;
                toJSON(_: _92.MsgDelegateResponse): unknown;
                fromPartial(_: {}): _92.MsgDelegateResponse;
            };
            MsgBeginRedelegate: {
                encode(message: _92.MsgBeginRedelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _92.MsgBeginRedelegate;
                fromJSON(object: any): _92.MsgBeginRedelegate;
                toJSON(message: _92.MsgBeginRedelegate): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorSrcAddress?: string;
                    validatorDstAddress?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _92.MsgBeginRedelegate;
            };
            MsgBeginRedelegateResponse: {
                encode(message: _92.MsgBeginRedelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _92.MsgBeginRedelegateResponse;
                fromJSON(object: any): _92.MsgBeginRedelegateResponse;
                toJSON(message: _92.MsgBeginRedelegateResponse): unknown;
                fromPartial(object: {
                    completionTime?: {
                        seconds?: bigint;
                        nanos?: number;
                    };
                }): _92.MsgBeginRedelegateResponse;
            };
            MsgUndelegate: {
                encode(message: _92.MsgUndelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _92.MsgUndelegate;
                fromJSON(object: any): _92.MsgUndelegate;
                toJSON(message: _92.MsgUndelegate): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _92.MsgUndelegate;
            };
            MsgUndelegateResponse: {
                encode(message: _92.MsgUndelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _92.MsgUndelegateResponse;
                fromJSON(object: any): _92.MsgUndelegateResponse;
                toJSON(message: _92.MsgUndelegateResponse): unknown;
                fromPartial(object: {
                    completionTime?: {
                        seconds?: bigint;
                        nanos?: number;
                    };
                }): _92.MsgUndelegateResponse;
            };
            MsgCancelUnbondingDelegation: {
                encode(message: _92.MsgCancelUnbondingDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _92.MsgCancelUnbondingDelegation;
                fromJSON(object: any): _92.MsgCancelUnbondingDelegation;
                toJSON(message: _92.MsgCancelUnbondingDelegation): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                    creationHeight?: bigint;
                }): _92.MsgCancelUnbondingDelegation;
            };
            MsgCancelUnbondingDelegationResponse: {
                encode(_: _92.MsgCancelUnbondingDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _92.MsgCancelUnbondingDelegationResponse;
                fromJSON(_: any): _92.MsgCancelUnbondingDelegationResponse;
                toJSON(_: _92.MsgCancelUnbondingDelegationResponse): unknown;
                fromPartial(_: {}): _92.MsgCancelUnbondingDelegationResponse;
            };
            MsgUpdateParams: {
                encode(message: _92.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _92.MsgUpdateParams;
                fromJSON(object: any): _92.MsgUpdateParams;
                toJSON(message: _92.MsgUpdateParams): unknown;
                fromPartial(object: {
                    authority?: string;
                    params?: {
                        unbondingTime?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        maxValidators?: number;
                        maxEntries?: number;
                        historicalEntries?: number;
                        bondDenom?: string;
                        minCommissionRate?: string;
                    };
                }): _92.MsgUpdateParams;
            };
            MsgUpdateParamsResponse: {
                encode(_: _92.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _92.MsgUpdateParamsResponse;
                fromJSON(_: any): _92.MsgUpdateParamsResponse;
                toJSON(_: _92.MsgUpdateParamsResponse): unknown;
                fromPartial(_: {}): _92.MsgUpdateParamsResponse;
            };
            Cosmos_cryptoPubKey_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            bondStatusFromJSON(object: any): _91.BondStatus;
            bondStatusToJSON(object: _91.BondStatus): string;
            infractionFromJSON(object: any): _91.Infraction;
            infractionToJSON(object: _91.Infraction): string;
            BondStatus: typeof _91.BondStatus;
            Infraction: typeof _91.Infraction;
            HistoricalInfo: {
                encode(message: _91.HistoricalInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _91.HistoricalInfo;
                fromJSON(object: any): _91.HistoricalInfo;
                toJSON(message: _91.HistoricalInfo): unknown;
                fromPartial(object: {
                    header?: {
                        version?: {
                            block?: bigint;
                            app?: bigint;
                        };
                        chainId?: string;
                        height?: bigint;
                        time?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        lastBlockId?: {
                            hash?: Uint8Array;
                            partSetHeader?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        };
                        lastCommitHash?: Uint8Array;
                        dataHash?: Uint8Array;
                        validatorsHash?: Uint8Array;
                        nextValidatorsHash?: Uint8Array;
                        consensusHash?: Uint8Array;
                        appHash?: Uint8Array;
                        lastResultsHash?: Uint8Array;
                        evidenceHash?: Uint8Array;
                        proposerAddress?: Uint8Array;
                    };
                    valset?: {
                        operatorAddress?: string;
                        consensusPubkey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        jailed?: boolean;
                        status?: _91.BondStatus;
                        tokens?: string;
                        delegatorShares?: string;
                        description?: {
                            moniker?: string;
                            identity?: string;
                            website?: string;
                            securityContact?: string;
                            details?: string;
                        };
                        unbondingHeight?: bigint;
                        unbondingTime?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        commission?: {
                            commissionRates?: {
                                rate?: string;
                                maxRate?: string;
                                maxChangeRate?: string;
                            };
                            updateTime?: {
                                seconds?: bigint;
                                nanos?: number;
                            };
                        };
                        minSelfDelegation?: string;
                        unbondingOnHoldRefCount?: bigint;
                        unbondingIds?: bigint[];
                    }[];
                }): _91.HistoricalInfo;
            };
            CommissionRates: {
                encode(message: _91.CommissionRates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _91.CommissionRates;
                fromJSON(object: any): _91.CommissionRates;
                toJSON(message: _91.CommissionRates): unknown;
                fromPartial(object: {
                    rate?: string;
                    maxRate?: string;
                    maxChangeRate?: string;
                }): _91.CommissionRates;
            };
            Commission: {
                encode(message: _91.Commission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _91.Commission;
                fromJSON(object: any): _91.Commission;
                toJSON(message: _91.Commission): unknown;
                fromPartial(object: {
                    commissionRates?: {
                        rate?: string;
                        maxRate?: string;
                        maxChangeRate?: string;
                    };
                    updateTime?: {
                        seconds?: bigint;
                        nanos?: number;
                    };
                }): _91.Commission;
            };
            Description: {
                encode(message: _91.Description, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _91.Description;
                fromJSON(object: any): _91.Description;
                toJSON(message: _91.Description): unknown;
                fromPartial(object: {
                    moniker?: string;
                    identity?: string;
                    website?: string;
                    securityContact?: string;
                    details?: string;
                }): _91.Description;
            };
            Validator: {
                encode(message: _91.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _91.Validator;
                fromJSON(object: any): _91.Validator;
                toJSON(message: _91.Validator): unknown;
                fromPartial(object: {
                    operatorAddress?: string;
                    consensusPubkey?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    jailed?: boolean;
                    status?: _91.BondStatus;
                    tokens?: string;
                    delegatorShares?: string;
                    description?: {
                        moniker?: string;
                        identity?: string;
                        website?: string;
                        securityContact?: string;
                        details?: string;
                    };
                    unbondingHeight?: bigint;
                    unbondingTime?: {
                        seconds?: bigint;
                        nanos?: number;
                    };
                    commission?: {
                        commissionRates?: {
                            rate?: string;
                            maxRate?: string;
                            maxChangeRate?: string;
                        };
                        updateTime?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                    };
                    minSelfDelegation?: string;
                    unbondingOnHoldRefCount?: bigint;
                    unbondingIds?: bigint[];
                }): _91.Validator;
            };
            ValAddresses: {
                encode(message: _91.ValAddresses, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _91.ValAddresses;
                fromJSON(object: any): _91.ValAddresses;
                toJSON(message: _91.ValAddresses): unknown;
                fromPartial(object: {
                    addresses?: string[];
                }): _91.ValAddresses;
            };
            DVPair: {
                encode(message: _91.DVPair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _91.DVPair;
                fromJSON(object: any): _91.DVPair;
                toJSON(message: _91.DVPair): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                }): _91.DVPair;
            };
            DVPairs: {
                encode(message: _91.DVPairs, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _91.DVPairs;
                fromJSON(object: any): _91.DVPairs;
                toJSON(message: _91.DVPairs): unknown;
                fromPartial(object: {
                    pairs?: {
                        delegatorAddress?: string;
                        validatorAddress?: string;
                    }[];
                }): _91.DVPairs;
            };
            DVVTriplet: {
                encode(message: _91.DVVTriplet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _91.DVVTriplet;
                fromJSON(object: any): _91.DVVTriplet;
                toJSON(message: _91.DVVTriplet): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorSrcAddress?: string;
                    validatorDstAddress?: string;
                }): _91.DVVTriplet;
            };
            DVVTriplets: {
                encode(message: _91.DVVTriplets, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _91.DVVTriplets;
                fromJSON(object: any): _91.DVVTriplets;
                toJSON(message: _91.DVVTriplets): unknown;
                fromPartial(object: {
                    triplets?: {
                        delegatorAddress?: string;
                        validatorSrcAddress?: string;
                        validatorDstAddress?: string;
                    }[];
                }): _91.DVVTriplets;
            };
            Delegation: {
                encode(message: _91.Delegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _91.Delegation;
                fromJSON(object: any): _91.Delegation;
                toJSON(message: _91.Delegation): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                    shares?: string;
                }): _91.Delegation;
            };
            UnbondingDelegation: {
                encode(message: _91.UnbondingDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _91.UnbondingDelegation;
                fromJSON(object: any): _91.UnbondingDelegation;
                toJSON(message: _91.UnbondingDelegation): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                    entries?: {
                        creationHeight?: bigint;
                        completionTime?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        initialBalance?: string;
                        balance?: string;
                        unbondingId?: bigint;
                        unbondingOnHoldRefCount?: bigint;
                    }[];
                }): _91.UnbondingDelegation;
            };
            UnbondingDelegationEntry: {
                encode(message: _91.UnbondingDelegationEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _91.UnbondingDelegationEntry;
                fromJSON(object: any): _91.UnbondingDelegationEntry;
                toJSON(message: _91.UnbondingDelegationEntry): unknown;
                fromPartial(object: {
                    creationHeight?: bigint;
                    completionTime?: {
                        seconds?: bigint;
                        nanos?: number;
                    };
                    initialBalance?: string;
                    balance?: string;
                    unbondingId?: bigint;
                    unbondingOnHoldRefCount?: bigint;
                }): _91.UnbondingDelegationEntry;
            };
            RedelegationEntry: {
                encode(message: _91.RedelegationEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _91.RedelegationEntry;
                fromJSON(object: any): _91.RedelegationEntry;
                toJSON(message: _91.RedelegationEntry): unknown;
                fromPartial(object: {
                    creationHeight?: bigint;
                    completionTime?: {
                        seconds?: bigint;
                        nanos?: number;
                    };
                    initialBalance?: string;
                    sharesDst?: string;
                    unbondingId?: bigint;
                    unbondingOnHoldRefCount?: bigint;
                }): _91.RedelegationEntry;
            };
            Redelegation: {
                encode(message: _91.Redelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _91.Redelegation;
                fromJSON(object: any): _91.Redelegation;
                toJSON(message: _91.Redelegation): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorSrcAddress?: string;
                    validatorDstAddress?: string;
                    entries?: {
                        creationHeight?: bigint;
                        completionTime?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        initialBalance?: string;
                        sharesDst?: string;
                        unbondingId?: bigint;
                        unbondingOnHoldRefCount?: bigint;
                    }[];
                }): _91.Redelegation;
            };
            Params: {
                encode(message: _91.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _91.Params;
                fromJSON(object: any): _91.Params;
                toJSON(message: _91.Params): unknown;
                fromPartial(object: {
                    unbondingTime?: {
                        seconds?: bigint;
                        nanos?: number;
                    };
                    maxValidators?: number;
                    maxEntries?: number;
                    historicalEntries?: number;
                    bondDenom?: string;
                    minCommissionRate?: string;
                }): _91.Params;
            };
            DelegationResponse: {
                encode(message: _91.DelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _91.DelegationResponse;
                fromJSON(object: any): _91.DelegationResponse;
                toJSON(message: _91.DelegationResponse): unknown;
                fromPartial(object: {
                    delegation?: {
                        delegatorAddress?: string;
                        validatorAddress?: string;
                        shares?: string;
                    };
                    balance?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _91.DelegationResponse;
            };
            RedelegationEntryResponse: {
                encode(message: _91.RedelegationEntryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _91.RedelegationEntryResponse;
                fromJSON(object: any): _91.RedelegationEntryResponse;
                toJSON(message: _91.RedelegationEntryResponse): unknown;
                fromPartial(object: {
                    redelegationEntry?: {
                        creationHeight?: bigint;
                        completionTime?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        initialBalance?: string;
                        sharesDst?: string;
                        unbondingId?: bigint;
                        unbondingOnHoldRefCount?: bigint;
                    };
                    balance?: string;
                }): _91.RedelegationEntryResponse;
            };
            RedelegationResponse: {
                encode(message: _91.RedelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _91.RedelegationResponse;
                fromJSON(object: any): _91.RedelegationResponse;
                toJSON(message: _91.RedelegationResponse): unknown;
                fromPartial(object: {
                    redelegation?: {
                        delegatorAddress?: string;
                        validatorSrcAddress?: string;
                        validatorDstAddress?: string;
                        entries?: {
                            creationHeight?: bigint;
                            completionTime?: {
                                seconds?: bigint;
                                nanos?: number;
                            };
                            initialBalance?: string;
                            sharesDst?: string;
                            unbondingId?: bigint;
                            unbondingOnHoldRefCount?: bigint;
                        }[];
                    };
                    entries?: {
                        redelegationEntry?: {
                            creationHeight?: bigint;
                            completionTime?: {
                                seconds?: bigint;
                                nanos?: number;
                            };
                            initialBalance?: string;
                            sharesDst?: string;
                            unbondingId?: bigint;
                            unbondingOnHoldRefCount?: bigint;
                        };
                        balance?: string;
                    }[];
                }): _91.RedelegationResponse;
            };
            Pool: {
                encode(message: _91.Pool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _91.Pool;
                fromJSON(object: any): _91.Pool;
                toJSON(message: _91.Pool): unknown;
                fromPartial(object: {
                    notBondedTokens?: string;
                    bondedTokens?: string;
                }): _91.Pool;
            };
            ValidatorUpdates: {
                encode(message: _91.ValidatorUpdates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _91.ValidatorUpdates;
                fromJSON(object: any): _91.ValidatorUpdates;
                toJSON(message: _91.ValidatorUpdates): unknown;
                fromPartial(object: {
                    updates?: {
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        power?: bigint;
                    }[];
                }): _91.ValidatorUpdates;
            };
            QueryValidatorsRequest: {
                encode(message: _90.QueryValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _90.QueryValidatorsRequest;
                fromJSON(object: any): _90.QueryValidatorsRequest;
                toJSON(message: _90.QueryValidatorsRequest): unknown;
                fromPartial(object: {
                    status?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: bigint;
                        limit?: bigint;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _90.QueryValidatorsRequest;
            };
            QueryValidatorsResponse: {
                encode(message: _90.QueryValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _90.QueryValidatorsResponse;
                fromJSON(object: any): _90.QueryValidatorsResponse;
                toJSON(message: _90.QueryValidatorsResponse): unknown;
                fromPartial(object: {
                    validators?: {
                        operatorAddress?: string;
                        consensusPubkey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        jailed?: boolean;
                        status?: _91.BondStatus;
                        tokens?: string;
                        delegatorShares?: string;
                        description?: {
                            moniker?: string;
                            identity?: string;
                            website?: string;
                            securityContact?: string;
                            details?: string;
                        };
                        unbondingHeight?: bigint;
                        unbondingTime?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        commission?: {
                            commissionRates?: {
                                rate?: string;
                                maxRate?: string;
                                maxChangeRate?: string;
                            };
                            updateTime?: {
                                seconds?: bigint;
                                nanos?: number;
                            };
                        };
                        minSelfDelegation?: string;
                        unbondingOnHoldRefCount?: bigint;
                        unbondingIds?: bigint[];
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: bigint;
                    };
                }): _90.QueryValidatorsResponse;
            };
            QueryValidatorRequest: {
                encode(message: _90.QueryValidatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _90.QueryValidatorRequest;
                fromJSON(object: any): _90.QueryValidatorRequest;
                toJSON(message: _90.QueryValidatorRequest): unknown;
                fromPartial(object: {
                    validatorAddr?: string;
                }): _90.QueryValidatorRequest;
            };
            QueryValidatorResponse: {
                encode(message: _90.QueryValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _90.QueryValidatorResponse;
                fromJSON(object: any): _90.QueryValidatorResponse;
                toJSON(message: _90.QueryValidatorResponse): unknown;
                fromPartial(object: {
                    validator?: {
                        operatorAddress?: string;
                        consensusPubkey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        jailed?: boolean;
                        status?: _91.BondStatus;
                        tokens?: string;
                        delegatorShares?: string;
                        description?: {
                            moniker?: string;
                            identity?: string;
                            website?: string;
                            securityContact?: string;
                            details?: string;
                        };
                        unbondingHeight?: bigint;
                        unbondingTime?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        commission?: {
                            commissionRates?: {
                                rate?: string;
                                maxRate?: string;
                                maxChangeRate?: string;
                            };
                            updateTime?: {
                                seconds?: bigint;
                                nanos?: number;
                            };
                        };
                        minSelfDelegation?: string;
                        unbondingOnHoldRefCount?: bigint;
                        unbondingIds?: bigint[];
                    };
                }): _90.QueryValidatorResponse;
            };
            QueryValidatorDelegationsRequest: {
                encode(message: _90.QueryValidatorDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _90.QueryValidatorDelegationsRequest;
                fromJSON(object: any): _90.QueryValidatorDelegationsRequest;
                toJSON(message: _90.QueryValidatorDelegationsRequest): unknown;
                fromPartial(object: {
                    validatorAddr?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: bigint;
                        limit?: bigint;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _90.QueryValidatorDelegationsRequest;
            };
            QueryValidatorDelegationsResponse: {
                encode(message: _90.QueryValidatorDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _90.QueryValidatorDelegationsResponse;
                fromJSON(object: any): _90.QueryValidatorDelegationsResponse;
                toJSON(message: _90.QueryValidatorDelegationsResponse): unknown;
                fromPartial(object: {
                    delegationResponses?: {
                        delegation?: {
                            delegatorAddress?: string;
                            validatorAddress?: string;
                            shares?: string;
                        };
                        balance?: {
                            denom?: string;
                            amount?: string;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: bigint;
                    };
                }): _90.QueryValidatorDelegationsResponse;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                encode(message: _90.QueryValidatorUnbondingDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _90.QueryValidatorUnbondingDelegationsRequest;
                fromJSON(object: any): _90.QueryValidatorUnbondingDelegationsRequest;
                toJSON(message: _90.QueryValidatorUnbondingDelegationsRequest): unknown;
                fromPartial(object: {
                    validatorAddr?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: bigint;
                        limit?: bigint;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _90.QueryValidatorUnbondingDelegationsRequest;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                encode(message: _90.QueryValidatorUnbondingDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _90.QueryValidatorUnbondingDelegationsResponse;
                fromJSON(object: any): _90.QueryValidatorUnbondingDelegationsResponse;
                toJSON(message: _90.QueryValidatorUnbondingDelegationsResponse): unknown;
                fromPartial(object: {
                    unbondingResponses?: {
                        delegatorAddress?: string;
                        validatorAddress?: string;
                        entries?: {
                            creationHeight?: bigint;
                            completionTime?: {
                                seconds?: bigint;
                                nanos?: number;
                            };
                            initialBalance?: string;
                            balance?: string;
                            unbondingId?: bigint;
                            unbondingOnHoldRefCount?: bigint;
                        }[];
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: bigint;
                    };
                }): _90.QueryValidatorUnbondingDelegationsResponse;
            };
            QueryDelegationRequest: {
                encode(message: _90.QueryDelegationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _90.QueryDelegationRequest;
                fromJSON(object: any): _90.QueryDelegationRequest;
                toJSON(message: _90.QueryDelegationRequest): unknown;
                fromPartial(object: {
                    delegatorAddr?: string;
                    validatorAddr?: string;
                }): _90.QueryDelegationRequest;
            };
            QueryDelegationResponse: {
                encode(message: _90.QueryDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _90.QueryDelegationResponse;
                fromJSON(object: any): _90.QueryDelegationResponse;
                toJSON(message: _90.QueryDelegationResponse): unknown;
                fromPartial(object: {
                    delegationResponse?: {
                        delegation?: {
                            delegatorAddress?: string;
                            validatorAddress?: string;
                            shares?: string;
                        };
                        balance?: {
                            denom?: string;
                            amount?: string;
                        };
                    };
                }): _90.QueryDelegationResponse;
            };
            QueryUnbondingDelegationRequest: {
                encode(message: _90.QueryUnbondingDelegationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _90.QueryUnbondingDelegationRequest;
                fromJSON(object: any): _90.QueryUnbondingDelegationRequest;
                toJSON(message: _90.QueryUnbondingDelegationRequest): unknown;
                fromPartial(object: {
                    delegatorAddr?: string;
                    validatorAddr?: string;
                }): _90.QueryUnbondingDelegationRequest;
            };
            QueryUnbondingDelegationResponse: {
                encode(message: _90.QueryUnbondingDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _90.QueryUnbondingDelegationResponse;
                fromJSON(object: any): _90.QueryUnbondingDelegationResponse;
                toJSON(message: _90.QueryUnbondingDelegationResponse): unknown;
                fromPartial(object: {
                    unbond?: {
                        delegatorAddress?: string;
                        validatorAddress?: string;
                        entries?: {
                            creationHeight?: bigint;
                            completionTime?: {
                                seconds?: bigint;
                                nanos?: number;
                            };
                            initialBalance?: string;
                            balance?: string;
                            unbondingId?: bigint;
                            unbondingOnHoldRefCount?: bigint;
                        }[];
                    };
                }): _90.QueryUnbondingDelegationResponse;
            };
            QueryDelegatorDelegationsRequest: {
                encode(message: _90.QueryDelegatorDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _90.QueryDelegatorDelegationsRequest;
                fromJSON(object: any): _90.QueryDelegatorDelegationsRequest;
                toJSON(message: _90.QueryDelegatorDelegationsRequest): unknown;
                fromPartial(object: {
                    delegatorAddr?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: bigint;
                        limit?: bigint;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _90.QueryDelegatorDelegationsRequest;
            };
            QueryDelegatorDelegationsResponse: {
                encode(message: _90.QueryDelegatorDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _90.QueryDelegatorDelegationsResponse;
                fromJSON(object: any): _90.QueryDelegatorDelegationsResponse;
                toJSON(message: _90.QueryDelegatorDelegationsResponse): unknown;
                fromPartial(object: {
                    delegationResponses?: {
                        delegation?: {
                            delegatorAddress?: string;
                            validatorAddress?: string;
                            shares?: string;
                        };
                        balance?: {
                            denom?: string;
                            amount?: string;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: bigint;
                    };
                }): _90.QueryDelegatorDelegationsResponse;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                encode(message: _90.QueryDelegatorUnbondingDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _90.QueryDelegatorUnbondingDelegationsRequest;
                fromJSON(object: any): _90.QueryDelegatorUnbondingDelegationsRequest;
                toJSON(message: _90.QueryDelegatorUnbondingDelegationsRequest): unknown;
                fromPartial(object: {
                    delegatorAddr?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: bigint;
                        limit?: bigint;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _90.QueryDelegatorUnbondingDelegationsRequest;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                encode(message: _90.QueryDelegatorUnbondingDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _90.QueryDelegatorUnbondingDelegationsResponse;
                fromJSON(object: any): _90.QueryDelegatorUnbondingDelegationsResponse;
                toJSON(message: _90.QueryDelegatorUnbondingDelegationsResponse): unknown;
                fromPartial(object: {
                    unbondingResponses?: {
                        delegatorAddress?: string;
                        validatorAddress?: string;
                        entries?: {
                            creationHeight?: bigint;
                            completionTime?: {
                                seconds?: bigint;
                                nanos?: number;
                            };
                            initialBalance?: string;
                            balance?: string;
                            unbondingId?: bigint;
                            unbondingOnHoldRefCount?: bigint;
                        }[];
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: bigint;
                    };
                }): _90.QueryDelegatorUnbondingDelegationsResponse;
            };
            QueryRedelegationsRequest: {
                encode(message: _90.QueryRedelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _90.QueryRedelegationsRequest;
                fromJSON(object: any): _90.QueryRedelegationsRequest;
                toJSON(message: _90.QueryRedelegationsRequest): unknown;
                fromPartial(object: {
                    delegatorAddr?: string;
                    srcValidatorAddr?: string;
                    dstValidatorAddr?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: bigint;
                        limit?: bigint;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _90.QueryRedelegationsRequest;
            };
            QueryRedelegationsResponse: {
                encode(message: _90.QueryRedelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _90.QueryRedelegationsResponse;
                fromJSON(object: any): _90.QueryRedelegationsResponse;
                toJSON(message: _90.QueryRedelegationsResponse): unknown;
                fromPartial(object: {
                    redelegationResponses?: {
                        redelegation?: {
                            delegatorAddress?: string;
                            validatorSrcAddress?: string;
                            validatorDstAddress?: string;
                            entries?: {
                                creationHeight?: bigint;
                                completionTime?: {
                                    seconds?: bigint;
                                    nanos?: number;
                                };
                                initialBalance?: string;
                                sharesDst?: string;
                                unbondingId?: bigint;
                                unbondingOnHoldRefCount?: bigint;
                            }[];
                        };
                        entries?: {
                            redelegationEntry?: {
                                creationHeight?: bigint;
                                completionTime?: {
                                    seconds?: bigint;
                                    nanos?: number;
                                };
                                initialBalance?: string;
                                sharesDst?: string;
                                unbondingId?: bigint;
                                unbondingOnHoldRefCount?: bigint;
                            };
                            balance?: string;
                        }[];
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: bigint;
                    };
                }): _90.QueryRedelegationsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _90.QueryDelegatorValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _90.QueryDelegatorValidatorsRequest;
                fromJSON(object: any): _90.QueryDelegatorValidatorsRequest;
                toJSON(message: _90.QueryDelegatorValidatorsRequest): unknown;
                fromPartial(object: {
                    delegatorAddr?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: bigint;
                        limit?: bigint;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _90.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _90.QueryDelegatorValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _90.QueryDelegatorValidatorsResponse;
                fromJSON(object: any): _90.QueryDelegatorValidatorsResponse;
                toJSON(message: _90.QueryDelegatorValidatorsResponse): unknown;
                fromPartial(object: {
                    validators?: {
                        operatorAddress?: string;
                        consensusPubkey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        jailed?: boolean;
                        status?: _91.BondStatus;
                        tokens?: string;
                        delegatorShares?: string;
                        description?: {
                            moniker?: string;
                            identity?: string;
                            website?: string;
                            securityContact?: string;
                            details?: string;
                        };
                        unbondingHeight?: bigint;
                        unbondingTime?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        commission?: {
                            commissionRates?: {
                                rate?: string;
                                maxRate?: string;
                                maxChangeRate?: string;
                            };
                            updateTime?: {
                                seconds?: bigint;
                                nanos?: number;
                            };
                        };
                        minSelfDelegation?: string;
                        unbondingOnHoldRefCount?: bigint;
                        unbondingIds?: bigint[];
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: bigint;
                    };
                }): _90.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorValidatorRequest: {
                encode(message: _90.QueryDelegatorValidatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _90.QueryDelegatorValidatorRequest;
                fromJSON(object: any): _90.QueryDelegatorValidatorRequest;
                toJSON(message: _90.QueryDelegatorValidatorRequest): unknown;
                fromPartial(object: {
                    delegatorAddr?: string;
                    validatorAddr?: string;
                }): _90.QueryDelegatorValidatorRequest;
            };
            QueryDelegatorValidatorResponse: {
                encode(message: _90.QueryDelegatorValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _90.QueryDelegatorValidatorResponse;
                fromJSON(object: any): _90.QueryDelegatorValidatorResponse;
                toJSON(message: _90.QueryDelegatorValidatorResponse): unknown;
                fromPartial(object: {
                    validator?: {
                        operatorAddress?: string;
                        consensusPubkey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        jailed?: boolean;
                        status?: _91.BondStatus;
                        tokens?: string;
                        delegatorShares?: string;
                        description?: {
                            moniker?: string;
                            identity?: string;
                            website?: string;
                            securityContact?: string;
                            details?: string;
                        };
                        unbondingHeight?: bigint;
                        unbondingTime?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        commission?: {
                            commissionRates?: {
                                rate?: string;
                                maxRate?: string;
                                maxChangeRate?: string;
                            };
                            updateTime?: {
                                seconds?: bigint;
                                nanos?: number;
                            };
                        };
                        minSelfDelegation?: string;
                        unbondingOnHoldRefCount?: bigint;
                        unbondingIds?: bigint[];
                    };
                }): _90.QueryDelegatorValidatorResponse;
            };
            QueryHistoricalInfoRequest: {
                encode(message: _90.QueryHistoricalInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _90.QueryHistoricalInfoRequest;
                fromJSON(object: any): _90.QueryHistoricalInfoRequest;
                toJSON(message: _90.QueryHistoricalInfoRequest): unknown;
                fromPartial(object: {
                    height?: bigint;
                }): _90.QueryHistoricalInfoRequest;
            };
            QueryHistoricalInfoResponse: {
                encode(message: _90.QueryHistoricalInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _90.QueryHistoricalInfoResponse;
                fromJSON(object: any): _90.QueryHistoricalInfoResponse;
                toJSON(message: _90.QueryHistoricalInfoResponse): unknown;
                fromPartial(object: {
                    hist?: {
                        header?: {
                            version?: {
                                block?: bigint;
                                app?: bigint;
                            };
                            chainId?: string;
                            height?: bigint;
                            time?: {
                                seconds?: bigint;
                                nanos?: number;
                            };
                            lastBlockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            lastCommitHash?: Uint8Array;
                            dataHash?: Uint8Array;
                            validatorsHash?: Uint8Array;
                            nextValidatorsHash?: Uint8Array;
                            consensusHash?: Uint8Array;
                            appHash?: Uint8Array;
                            lastResultsHash?: Uint8Array;
                            evidenceHash?: Uint8Array;
                            proposerAddress?: Uint8Array;
                        };
                        valset?: {
                            operatorAddress?: string;
                            consensusPubkey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            jailed?: boolean;
                            status?: _91.BondStatus;
                            tokens?: string;
                            delegatorShares?: string;
                            description?: {
                                moniker?: string;
                                identity?: string;
                                website?: string;
                                securityContact?: string;
                                details?: string;
                            };
                            unbondingHeight?: bigint;
                            unbondingTime?: {
                                seconds?: bigint;
                                nanos?: number;
                            };
                            commission?: {
                                commissionRates?: {
                                    rate?: string;
                                    maxRate?: string;
                                    maxChangeRate?: string;
                                };
                                updateTime?: {
                                    seconds?: bigint;
                                    nanos?: number;
                                };
                            };
                            minSelfDelegation?: string;
                            unbondingOnHoldRefCount?: bigint;
                            unbondingIds?: bigint[];
                        }[];
                    };
                }): _90.QueryHistoricalInfoResponse;
            };
            QueryPoolRequest: {
                encode(_: _90.QueryPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _90.QueryPoolRequest;
                fromJSON(_: any): _90.QueryPoolRequest;
                toJSON(_: _90.QueryPoolRequest): unknown;
                fromPartial(_: {}): _90.QueryPoolRequest;
            };
            QueryPoolResponse: {
                encode(message: _90.QueryPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _90.QueryPoolResponse;
                fromJSON(object: any): _90.QueryPoolResponse;
                toJSON(message: _90.QueryPoolResponse): unknown;
                fromPartial(object: {
                    pool?: {
                        notBondedTokens?: string;
                        bondedTokens?: string;
                    };
                }): _90.QueryPoolResponse;
            };
            QueryParamsRequest: {
                encode(_: _90.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _90.QueryParamsRequest;
                fromJSON(_: any): _90.QueryParamsRequest;
                toJSON(_: _90.QueryParamsRequest): unknown;
                fromPartial(_: {}): _90.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _90.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _90.QueryParamsResponse;
                fromJSON(object: any): _90.QueryParamsResponse;
                toJSON(message: _90.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        unbondingTime?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        maxValidators?: number;
                        maxEntries?: number;
                        historicalEntries?: number;
                        bondDenom?: string;
                        minCommissionRate?: string;
                    };
                }): _90.QueryParamsResponse;
            };
            GenesisState: {
                encode(message: _89.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _89.GenesisState;
                fromJSON(object: any): _89.GenesisState;
                toJSON(message: _89.GenesisState): unknown;
                fromPartial(object: {
                    params?: {
                        unbondingTime?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        maxValidators?: number;
                        maxEntries?: number;
                        historicalEntries?: number;
                        bondDenom?: string;
                        minCommissionRate?: string;
                    };
                    lastTotalPower?: Uint8Array;
                    lastValidatorPowers?: {
                        address?: string;
                        power?: bigint;
                    }[];
                    validators?: {
                        operatorAddress?: string;
                        consensusPubkey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        jailed?: boolean;
                        status?: _91.BondStatus;
                        tokens?: string;
                        delegatorShares?: string;
                        description?: {
                            moniker?: string;
                            identity?: string;
                            website?: string;
                            securityContact?: string;
                            details?: string;
                        };
                        unbondingHeight?: bigint;
                        unbondingTime?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        commission?: {
                            commissionRates?: {
                                rate?: string;
                                maxRate?: string;
                                maxChangeRate?: string;
                            };
                            updateTime?: {
                                seconds?: bigint;
                                nanos?: number;
                            };
                        };
                        minSelfDelegation?: string;
                        unbondingOnHoldRefCount?: bigint;
                        unbondingIds?: bigint[];
                    }[];
                    delegations?: {
                        delegatorAddress?: string;
                        validatorAddress?: string;
                        shares?: string;
                    }[];
                    unbondingDelegations?: {
                        delegatorAddress?: string;
                        validatorAddress?: string;
                        entries?: {
                            creationHeight?: bigint;
                            completionTime?: {
                                seconds?: bigint;
                                nanos?: number;
                            };
                            initialBalance?: string;
                            balance?: string;
                            unbondingId?: bigint;
                            unbondingOnHoldRefCount?: bigint;
                        }[];
                    }[];
                    redelegations?: {
                        delegatorAddress?: string;
                        validatorSrcAddress?: string;
                        validatorDstAddress?: string;
                        entries?: {
                            creationHeight?: bigint;
                            completionTime?: {
                                seconds?: bigint;
                                nanos?: number;
                            };
                            initialBalance?: string;
                            sharesDst?: string;
                            unbondingId?: bigint;
                            unbondingOnHoldRefCount?: bigint;
                        }[];
                    }[];
                    exported?: boolean;
                }): _89.GenesisState;
            };
            LastValidatorPower: {
                encode(message: _89.LastValidatorPower, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _89.LastValidatorPower;
                fromJSON(object: any): _89.LastValidatorPower;
                toJSON(message: _89.LastValidatorPower): unknown;
                fromPartial(object: {
                    address?: string;
                    power?: bigint;
                }): _89.LastValidatorPower;
            };
            authorizationTypeFromJSON(object: any): _88.AuthorizationType;
            authorizationTypeToJSON(object: _88.AuthorizationType): string;
            AuthorizationType: typeof _88.AuthorizationType;
            StakeAuthorization: {
                encode(message: _88.StakeAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _88.StakeAuthorization;
                fromJSON(object: any): _88.StakeAuthorization;
                toJSON(message: _88.StakeAuthorization): unknown;
                fromPartial(object: {
                    maxTokens?: {
                        denom?: string;
                        amount?: string;
                    };
                    allowList?: {
                        address?: string[];
                    };
                    denyList?: {
                        address?: string[];
                    };
                    authorizationType?: _88.AuthorizationType;
                }): _88.StakeAuthorization;
            };
            StakeAuthorization_Validators: {
                encode(message: _88.StakeAuthorization_Validators, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _88.StakeAuthorization_Validators;
                fromJSON(object: any): _88.StakeAuthorization_Validators;
                toJSON(message: _88.StakeAuthorization_Validators): unknown;
                fromPartial(object: {
                    address?: string[];
                }): _88.StakeAuthorization_Validators;
            };
        };
    }
    namespace tx {
        namespace config {
            const v1: {
                Config: {
                    encode(message: _93.Config, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _93.Config;
                    fromJSON(object: any): _93.Config;
                    toJSON(message: _93.Config): unknown;
                    fromPartial(object: {
                        skipAnteHandler?: boolean;
                        skipPostHandler?: boolean;
                    }): _93.Config;
                };
            };
        }
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _94.SignMode;
                signModeToJSON(object: _94.SignMode): string;
                SignMode: typeof _94.SignMode;
                SignatureDescriptors: {
                    encode(message: _94.SignatureDescriptors, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _94.SignatureDescriptors;
                    fromJSON(object: any): _94.SignatureDescriptors;
                    toJSON(message: _94.SignatureDescriptors): unknown;
                    fromPartial(object: {
                        signatures?: {
                            publicKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            data?: {
                                single?: {
                                    mode?: _94.SignMode;
                                    signature?: Uint8Array;
                                };
                                multi?: {
                                    bitarray?: {
                                        extraBitsStored?: number;
                                        elems?: Uint8Array;
                                    };
                                    signatures?: any[];
                                };
                            };
                            sequence?: bigint;
                        }[];
                    }): _94.SignatureDescriptors;
                };
                SignatureDescriptor: {
                    encode(message: _94.SignatureDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _94.SignatureDescriptor;
                    fromJSON(object: any): _94.SignatureDescriptor;
                    toJSON(message: _94.SignatureDescriptor): unknown;
                    fromPartial(object: {
                        publicKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        data?: {
                            single?: {
                                mode?: _94.SignMode;
                                signature?: Uint8Array;
                            };
                            multi?: {
                                bitarray?: {
                                    extraBitsStored?: number;
                                    elems?: Uint8Array;
                                };
                                signatures?: any[];
                            };
                        };
                        sequence?: bigint;
                    }): _94.SignatureDescriptor;
                };
                SignatureDescriptor_Data: {
                    encode(message: _94.SignatureDescriptor_Data, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _94.SignatureDescriptor_Data;
                    fromJSON(object: any): _94.SignatureDescriptor_Data;
                    toJSON(message: _94.SignatureDescriptor_Data): unknown;
                    fromPartial(object: {
                        single?: {
                            mode?: _94.SignMode;
                            signature?: Uint8Array;
                        };
                        multi?: {
                            bitarray?: {
                                extraBitsStored?: number;
                                elems?: Uint8Array;
                            };
                            signatures?: any[];
                        };
                    }): _94.SignatureDescriptor_Data;
                };
                SignatureDescriptor_Data_Single: {
                    encode(message: _94.SignatureDescriptor_Data_Single, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _94.SignatureDescriptor_Data_Single;
                    fromJSON(object: any): _94.SignatureDescriptor_Data_Single;
                    toJSON(message: _94.SignatureDescriptor_Data_Single): unknown;
                    fromPartial(object: {
                        mode?: _94.SignMode;
                        signature?: Uint8Array;
                    }): _94.SignatureDescriptor_Data_Single;
                };
                SignatureDescriptor_Data_Multi: {
                    encode(message: _94.SignatureDescriptor_Data_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _94.SignatureDescriptor_Data_Multi;
                    fromJSON(object: any): _94.SignatureDescriptor_Data_Multi;
                    toJSON(message: _94.SignatureDescriptor_Data_Multi): unknown;
                    fromPartial(object: {
                        bitarray?: {
                            extraBitsStored?: number;
                            elems?: Uint8Array;
                        };
                        signatures?: {
                            single?: {
                                mode?: _94.SignMode;
                                signature?: Uint8Array;
                            };
                            multi?: any;
                        }[];
                    }): _94.SignatureDescriptor_Data_Multi;
                };
            };
        }
        const v1beta1: {
            ServiceClientImpl: typeof _218.ServiceClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                simulate(request: _95.SimulateRequest): Promise<_95.SimulateResponse>;
                getTx(request: _95.GetTxRequest): Promise<_95.GetTxResponse>;
                broadcastTx(request: _95.BroadcastTxRequest): Promise<_95.BroadcastTxResponse>;
                getTxsEvent(request: _95.GetTxsEventRequest): Promise<_95.GetTxsEventResponse>;
                getBlockWithTxs(request: _95.GetBlockWithTxsRequest): Promise<_95.GetBlockWithTxsResponse>;
                txDecode(request: _95.TxDecodeRequest): Promise<_95.TxDecodeResponse>;
                txEncode(request: _95.TxEncodeRequest): Promise<_95.TxEncodeResponse>;
                txEncodeAmino(request: _95.TxEncodeAminoRequest): Promise<_95.TxEncodeAminoResponse>;
                txDecodeAmino(request: _95.TxDecodeAminoRequest): Promise<_95.TxDecodeAminoResponse>;
            };
            LCDQueryClient: typeof _202.LCDQueryClient;
            Tx: {
                encode(message: _96.Tx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _96.Tx;
                fromJSON(object: any): _96.Tx;
                toJSON(message: _96.Tx): unknown;
                fromPartial(object: {
                    body?: {
                        messages?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                        memo?: string;
                        timeoutHeight?: bigint;
                        extensionOptions?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                        nonCriticalExtensionOptions?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                    };
                    authInfo?: {
                        signerInfos?: {
                            publicKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            modeInfo?: {
                                single?: {
                                    mode?: _94.SignMode;
                                };
                                multi?: {
                                    bitarray?: {
                                        extraBitsStored?: number;
                                        elems?: Uint8Array;
                                    };
                                    modeInfos?: any[];
                                };
                            };
                            sequence?: bigint;
                        }[];
                        fee?: {
                            amount?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            gasLimit?: bigint;
                            payer?: string;
                            granter?: string;
                        };
                        tip?: {
                            amount?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            tipper?: string;
                        };
                    };
                    signatures?: Uint8Array[];
                }): _96.Tx;
            };
            TxRaw: {
                encode(message: _96.TxRaw, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _96.TxRaw;
                fromJSON(object: any): _96.TxRaw;
                toJSON(message: _96.TxRaw): unknown;
                fromPartial(object: {
                    bodyBytes?: Uint8Array;
                    authInfoBytes?: Uint8Array;
                    signatures?: Uint8Array[];
                }): _96.TxRaw;
            };
            SignDoc: {
                encode(message: _96.SignDoc, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _96.SignDoc;
                fromJSON(object: any): _96.SignDoc;
                toJSON(message: _96.SignDoc): unknown;
                fromPartial(object: {
                    bodyBytes?: Uint8Array;
                    authInfoBytes?: Uint8Array;
                    chainId?: string;
                    accountNumber?: bigint;
                }): _96.SignDoc;
            };
            SignDocDirectAux: {
                encode(message: _96.SignDocDirectAux, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _96.SignDocDirectAux;
                fromJSON(object: any): _96.SignDocDirectAux;
                toJSON(message: _96.SignDocDirectAux): unknown;
                fromPartial(object: {
                    bodyBytes?: Uint8Array;
                    publicKey?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    chainId?: string;
                    accountNumber?: bigint;
                    sequence?: bigint;
                    tip?: {
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        tipper?: string;
                    };
                }): _96.SignDocDirectAux;
            };
            TxBody: {
                encode(message: _96.TxBody, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _96.TxBody;
                fromJSON(object: any): _96.TxBody;
                toJSON(message: _96.TxBody): unknown;
                fromPartial(object: {
                    messages?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                    memo?: string;
                    timeoutHeight?: bigint;
                    extensionOptions?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                    nonCriticalExtensionOptions?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                }): _96.TxBody;
            };
            AuthInfo: {
                encode(message: _96.AuthInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _96.AuthInfo;
                fromJSON(object: any): _96.AuthInfo;
                toJSON(message: _96.AuthInfo): unknown;
                fromPartial(object: {
                    signerInfos?: {
                        publicKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        modeInfo?: {
                            single?: {
                                mode?: _94.SignMode;
                            };
                            multi?: {
                                bitarray?: {
                                    extraBitsStored?: number;
                                    elems?: Uint8Array;
                                };
                                modeInfos?: any[];
                            };
                        };
                        sequence?: bigint;
                    }[];
                    fee?: {
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        gasLimit?: bigint;
                        payer?: string;
                        granter?: string;
                    };
                    tip?: {
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        tipper?: string;
                    };
                }): _96.AuthInfo;
            };
            SignerInfo: {
                encode(message: _96.SignerInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _96.SignerInfo;
                fromJSON(object: any): _96.SignerInfo;
                toJSON(message: _96.SignerInfo): unknown;
                fromPartial(object: {
                    publicKey?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    modeInfo?: {
                        single?: {
                            mode?: _94.SignMode;
                        };
                        multi?: {
                            bitarray?: {
                                extraBitsStored?: number;
                                elems?: Uint8Array;
                            };
                            modeInfos?: any[];
                        };
                    };
                    sequence?: bigint;
                }): _96.SignerInfo;
            };
            ModeInfo: {
                encode(message: _96.ModeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _96.ModeInfo;
                fromJSON(object: any): _96.ModeInfo;
                toJSON(message: _96.ModeInfo): unknown;
                fromPartial(object: {
                    single?: {
                        mode?: _94.SignMode;
                    };
                    multi?: {
                        bitarray?: {
                            extraBitsStored?: number;
                            elems?: Uint8Array;
                        };
                        modeInfos?: any[];
                    };
                }): _96.ModeInfo;
            };
            ModeInfo_Single: {
                encode(message: _96.ModeInfo_Single, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _96.ModeInfo_Single;
                fromJSON(object: any): _96.ModeInfo_Single;
                toJSON(message: _96.ModeInfo_Single): unknown;
                fromPartial(object: {
                    mode?: _94.SignMode;
                }): _96.ModeInfo_Single;
            };
            ModeInfo_Multi: {
                encode(message: _96.ModeInfo_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _96.ModeInfo_Multi;
                fromJSON(object: any): _96.ModeInfo_Multi;
                toJSON(message: _96.ModeInfo_Multi): unknown;
                fromPartial(object: {
                    bitarray?: {
                        extraBitsStored?: number;
                        elems?: Uint8Array;
                    };
                    modeInfos?: {
                        single?: {
                            mode?: _94.SignMode;
                        };
                        multi?: any;
                    }[];
                }): _96.ModeInfo_Multi;
            };
            Fee: {
                encode(message: _96.Fee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _96.Fee;
                fromJSON(object: any): _96.Fee;
                toJSON(message: _96.Fee): unknown;
                fromPartial(object: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    gasLimit?: bigint;
                    payer?: string;
                    granter?: string;
                }): _96.Fee;
            };
            Tip: {
                encode(message: _96.Tip, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _96.Tip;
                fromJSON(object: any): _96.Tip;
                toJSON(message: _96.Tip): unknown;
                fromPartial(object: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    tipper?: string;
                }): _96.Tip;
            };
            AuxSignerData: {
                encode(message: _96.AuxSignerData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _96.AuxSignerData;
                fromJSON(object: any): _96.AuxSignerData;
                toJSON(message: _96.AuxSignerData): unknown;
                fromPartial(object: {
                    address?: string;
                    signDoc?: {
                        bodyBytes?: Uint8Array;
                        publicKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        chainId?: string;
                        accountNumber?: bigint;
                        sequence?: bigint;
                        tip?: {
                            amount?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            tipper?: string;
                        };
                    };
                    mode?: _94.SignMode;
                    sig?: Uint8Array;
                }): _96.AuxSignerData;
            };
            orderByFromJSON(object: any): _95.OrderBy;
            orderByToJSON(object: _95.OrderBy): string;
            broadcastModeFromJSON(object: any): _95.BroadcastMode;
            broadcastModeToJSON(object: _95.BroadcastMode): string;
            OrderBy: typeof _95.OrderBy;
            BroadcastMode: typeof _95.BroadcastMode;
            GetTxsEventRequest: {
                encode(message: _95.GetTxsEventRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.GetTxsEventRequest;
                fromJSON(object: any): _95.GetTxsEventRequest;
                toJSON(message: _95.GetTxsEventRequest): unknown;
                fromPartial(object: {
                    events?: string[];
                    pagination?: {
                        key?: Uint8Array;
                        offset?: bigint;
                        limit?: bigint;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                    orderBy?: _95.OrderBy;
                    page?: bigint;
                    limit?: bigint;
                }): _95.GetTxsEventRequest;
            };
            GetTxsEventResponse: {
                encode(message: _95.GetTxsEventResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.GetTxsEventResponse;
                fromJSON(object: any): _95.GetTxsEventResponse;
                toJSON(message: _95.GetTxsEventResponse): unknown;
                fromPartial(object: {
                    txs?: {
                        body?: {
                            messages?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                            memo?: string;
                            timeoutHeight?: bigint;
                            extensionOptions?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                            nonCriticalExtensionOptions?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                        };
                        authInfo?: {
                            signerInfos?: {
                                publicKey?: {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                };
                                modeInfo?: {
                                    single?: {
                                        mode?: _94.SignMode;
                                    };
                                    multi?: {
                                        bitarray?: {
                                            extraBitsStored?: number;
                                            elems?: Uint8Array;
                                        };
                                        modeInfos?: any[];
                                    };
                                };
                                sequence?: bigint;
                            }[];
                            fee?: {
                                amount?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                gasLimit?: bigint;
                                payer?: string;
                                granter?: string;
                            };
                            tip?: {
                                amount?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                tipper?: string;
                            };
                        };
                        signatures?: Uint8Array[];
                    }[];
                    txResponses?: {
                        height?: bigint;
                        txhash?: string;
                        codespace?: string;
                        code?: number;
                        data?: string;
                        rawLog?: string;
                        logs?: {
                            msgIndex?: number;
                            log?: string;
                            events?: {
                                type?: string;
                                attributes?: {
                                    key?: string;
                                    value?: string;
                                }[];
                            }[];
                        }[];
                        info?: string;
                        gasWanted?: bigint;
                        gasUsed?: bigint;
                        tx?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        timestamp?: string;
                        events?: {
                            type?: string;
                            attributes?: {
                                key?: string;
                                value?: string;
                                index?: boolean;
                            }[];
                        }[];
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: bigint;
                    };
                    total?: bigint;
                }): _95.GetTxsEventResponse;
            };
            BroadcastTxRequest: {
                encode(message: _95.BroadcastTxRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.BroadcastTxRequest;
                fromJSON(object: any): _95.BroadcastTxRequest;
                toJSON(message: _95.BroadcastTxRequest): unknown;
                fromPartial(object: {
                    txBytes?: Uint8Array;
                    mode?: _95.BroadcastMode;
                }): _95.BroadcastTxRequest;
            };
            BroadcastTxResponse: {
                encode(message: _95.BroadcastTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.BroadcastTxResponse;
                fromJSON(object: any): _95.BroadcastTxResponse;
                toJSON(message: _95.BroadcastTxResponse): unknown;
                fromPartial(object: {
                    txResponse?: {
                        height?: bigint;
                        txhash?: string;
                        codespace?: string;
                        code?: number;
                        data?: string;
                        rawLog?: string;
                        logs?: {
                            msgIndex?: number;
                            log?: string;
                            events?: {
                                type?: string;
                                attributes?: {
                                    key?: string;
                                    value?: string;
                                }[];
                            }[];
                        }[];
                        info?: string;
                        gasWanted?: bigint;
                        gasUsed?: bigint;
                        tx?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        timestamp?: string;
                        events?: {
                            type?: string;
                            attributes?: {
                                key?: string;
                                value?: string;
                                index?: boolean;
                            }[];
                        }[];
                    };
                }): _95.BroadcastTxResponse;
            };
            SimulateRequest: {
                encode(message: _95.SimulateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.SimulateRequest;
                fromJSON(object: any): _95.SimulateRequest;
                toJSON(message: _95.SimulateRequest): unknown;
                fromPartial(object: {
                    tx?: {
                        body?: {
                            messages?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                            memo?: string;
                            timeoutHeight?: bigint;
                            extensionOptions?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                            nonCriticalExtensionOptions?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                        };
                        authInfo?: {
                            signerInfos?: {
                                publicKey?: {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                };
                                modeInfo?: {
                                    single?: {
                                        mode?: _94.SignMode;
                                    };
                                    multi?: {
                                        bitarray?: {
                                            extraBitsStored?: number;
                                            elems?: Uint8Array;
                                        };
                                        modeInfos?: any[];
                                    };
                                };
                                sequence?: bigint;
                            }[];
                            fee?: {
                                amount?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                gasLimit?: bigint;
                                payer?: string;
                                granter?: string;
                            };
                            tip?: {
                                amount?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                tipper?: string;
                            };
                        };
                        signatures?: Uint8Array[];
                    };
                    txBytes?: Uint8Array;
                }): _95.SimulateRequest;
            };
            SimulateResponse: {
                encode(message: _95.SimulateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.SimulateResponse;
                fromJSON(object: any): _95.SimulateResponse;
                toJSON(message: _95.SimulateResponse): unknown;
                fromPartial(object: {
                    gasInfo?: {
                        gasWanted?: bigint;
                        gasUsed?: bigint;
                    };
                    result?: {
                        data?: Uint8Array;
                        log?: string;
                        events?: {
                            type?: string;
                            attributes?: {
                                key?: string;
                                value?: string;
                                index?: boolean;
                            }[];
                        }[];
                        msgResponses?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                    };
                }): _95.SimulateResponse;
            };
            GetTxRequest: {
                encode(message: _95.GetTxRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.GetTxRequest;
                fromJSON(object: any): _95.GetTxRequest;
                toJSON(message: _95.GetTxRequest): unknown;
                fromPartial(object: {
                    hash?: string;
                }): _95.GetTxRequest;
            };
            GetTxResponse: {
                encode(message: _95.GetTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.GetTxResponse;
                fromJSON(object: any): _95.GetTxResponse;
                toJSON(message: _95.GetTxResponse): unknown;
                fromPartial(object: {
                    tx?: {
                        body?: {
                            messages?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                            memo?: string;
                            timeoutHeight?: bigint;
                            extensionOptions?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                            nonCriticalExtensionOptions?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                        };
                        authInfo?: {
                            signerInfos?: {
                                publicKey?: {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                };
                                modeInfo?: {
                                    single?: {
                                        mode?: _94.SignMode;
                                    };
                                    multi?: {
                                        bitarray?: {
                                            extraBitsStored?: number;
                                            elems?: Uint8Array;
                                        };
                                        modeInfos?: any[];
                                    };
                                };
                                sequence?: bigint;
                            }[];
                            fee?: {
                                amount?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                gasLimit?: bigint;
                                payer?: string;
                                granter?: string;
                            };
                            tip?: {
                                amount?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                tipper?: string;
                            };
                        };
                        signatures?: Uint8Array[];
                    };
                    txResponse?: {
                        height?: bigint;
                        txhash?: string;
                        codespace?: string;
                        code?: number;
                        data?: string;
                        rawLog?: string;
                        logs?: {
                            msgIndex?: number;
                            log?: string;
                            events?: {
                                type?: string;
                                attributes?: {
                                    key?: string;
                                    value?: string;
                                }[];
                            }[];
                        }[];
                        info?: string;
                        gasWanted?: bigint;
                        gasUsed?: bigint;
                        tx?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        timestamp?: string;
                        events?: {
                            type?: string;
                            attributes?: {
                                key?: string;
                                value?: string;
                                index?: boolean;
                            }[];
                        }[];
                    };
                }): _95.GetTxResponse;
            };
            GetBlockWithTxsRequest: {
                encode(message: _95.GetBlockWithTxsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.GetBlockWithTxsRequest;
                fromJSON(object: any): _95.GetBlockWithTxsRequest;
                toJSON(message: _95.GetBlockWithTxsRequest): unknown;
                fromPartial(object: {
                    height?: bigint;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: bigint;
                        limit?: bigint;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _95.GetBlockWithTxsRequest;
            };
            GetBlockWithTxsResponse: {
                encode(message: _95.GetBlockWithTxsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.GetBlockWithTxsResponse;
                fromJSON(object: any): _95.GetBlockWithTxsResponse;
                toJSON(message: _95.GetBlockWithTxsResponse): unknown;
                fromPartial(object: {
                    txs?: {
                        body?: {
                            messages?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                            memo?: string;
                            timeoutHeight?: bigint;
                            extensionOptions?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                            nonCriticalExtensionOptions?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                        };
                        authInfo?: {
                            signerInfos?: {
                                publicKey?: {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                };
                                modeInfo?: {
                                    single?: {
                                        mode?: _94.SignMode;
                                    };
                                    multi?: {
                                        bitarray?: {
                                            extraBitsStored?: number;
                                            elems?: Uint8Array;
                                        };
                                        modeInfos?: any[];
                                    };
                                };
                                sequence?: bigint;
                            }[];
                            fee?: {
                                amount?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                gasLimit?: bigint;
                                payer?: string;
                                granter?: string;
                            };
                            tip?: {
                                amount?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                tipper?: string;
                            };
                        };
                        signatures?: Uint8Array[];
                    }[];
                    blockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    block?: {
                        header?: {
                            version?: {
                                block?: bigint;
                                app?: bigint;
                            };
                            chainId?: string;
                            height?: bigint;
                            time?: {
                                seconds?: bigint;
                                nanos?: number;
                            };
                            lastBlockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            lastCommitHash?: Uint8Array;
                            dataHash?: Uint8Array;
                            validatorsHash?: Uint8Array;
                            nextValidatorsHash?: Uint8Array;
                            consensusHash?: Uint8Array;
                            appHash?: Uint8Array;
                            lastResultsHash?: Uint8Array;
                            evidenceHash?: Uint8Array;
                            proposerAddress?: Uint8Array;
                        };
                        data?: {
                            txs?: Uint8Array[];
                        };
                        evidence?: {
                            evidence?: {
                                duplicateVoteEvidence?: {
                                    voteA?: {
                                        type?: import("../tendermint/types/types").SignedMsgType;
                                        height?: bigint;
                                        round?: number;
                                        blockId?: {
                                            hash?: Uint8Array;
                                            partSetHeader?: {
                                                total?: number;
                                                hash?: Uint8Array;
                                            };
                                        };
                                        timestamp?: {
                                            seconds?: bigint;
                                            nanos?: number;
                                        };
                                        validatorAddress?: Uint8Array;
                                        validatorIndex?: number;
                                        signature?: Uint8Array;
                                    };
                                    voteB?: {
                                        type?: import("../tendermint/types/types").SignedMsgType;
                                        height?: bigint;
                                        round?: number;
                                        blockId?: {
                                            hash?: Uint8Array;
                                            partSetHeader?: {
                                                total?: number;
                                                hash?: Uint8Array;
                                            };
                                        };
                                        timestamp?: {
                                            seconds?: bigint;
                                            nanos?: number;
                                        };
                                        validatorAddress?: Uint8Array;
                                        validatorIndex?: number;
                                        signature?: Uint8Array;
                                    };
                                    totalVotingPower?: bigint;
                                    validatorPower?: bigint;
                                    timestamp?: {
                                        seconds?: bigint;
                                        nanos?: number;
                                    };
                                };
                                lightClientAttackEvidence?: {
                                    conflictingBlock?: {
                                        signedHeader?: {
                                            header?: {
                                                version?: {
                                                    block?: bigint;
                                                    app?: bigint;
                                                };
                                                chainId?: string;
                                                height?: bigint;
                                                time?: {
                                                    seconds?: bigint;
                                                    nanos?: number;
                                                };
                                                lastBlockId?: {
                                                    hash?: Uint8Array;
                                                    partSetHeader?: {
                                                        total?: number;
                                                        hash?: Uint8Array;
                                                    };
                                                };
                                                lastCommitHash?: Uint8Array;
                                                dataHash?: Uint8Array;
                                                validatorsHash?: Uint8Array;
                                                nextValidatorsHash?: Uint8Array;
                                                consensusHash?: Uint8Array;
                                                appHash?: Uint8Array;
                                                lastResultsHash?: Uint8Array;
                                                evidenceHash?: Uint8Array;
                                                proposerAddress?: Uint8Array;
                                            };
                                            commit?: {
                                                height?: bigint;
                                                round?: number;
                                                blockId?: {
                                                    hash?: Uint8Array;
                                                    partSetHeader?: {
                                                        total?: number;
                                                        hash?: Uint8Array;
                                                    };
                                                };
                                                signatures?: {
                                                    blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                                    validatorAddress?: Uint8Array;
                                                    timestamp?: {
                                                        seconds?: bigint;
                                                        nanos?: number;
                                                    };
                                                    signature?: Uint8Array;
                                                }[];
                                            };
                                        };
                                        validatorSet?: {
                                            validators?: {
                                                address?: Uint8Array;
                                                pubKey?: {
                                                    ed25519?: Uint8Array;
                                                    secp256k1?: Uint8Array;
                                                };
                                                votingPower?: bigint;
                                                proposerPriority?: bigint;
                                            }[];
                                            proposer?: {
                                                address?: Uint8Array;
                                                pubKey?: {
                                                    ed25519?: Uint8Array;
                                                    secp256k1?: Uint8Array;
                                                };
                                                votingPower?: bigint;
                                                proposerPriority?: bigint;
                                            };
                                            totalVotingPower?: bigint;
                                        };
                                    };
                                    commonHeight?: bigint;
                                    byzantineValidators?: {
                                        address?: Uint8Array;
                                        pubKey?: {
                                            ed25519?: Uint8Array;
                                            secp256k1?: Uint8Array;
                                        };
                                        votingPower?: bigint;
                                        proposerPriority?: bigint;
                                    }[];
                                    totalVotingPower?: bigint;
                                    timestamp?: {
                                        seconds?: bigint;
                                        nanos?: number;
                                    };
                                };
                            }[];
                        };
                        lastCommit?: {
                            height?: bigint;
                            round?: number;
                            blockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            signatures?: {
                                blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                validatorAddress?: Uint8Array;
                                timestamp?: {
                                    seconds?: bigint;
                                    nanos?: number;
                                };
                                signature?: Uint8Array;
                            }[];
                        };
                    };
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: bigint;
                    };
                }): _95.GetBlockWithTxsResponse;
            };
            TxDecodeRequest: {
                encode(message: _95.TxDecodeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.TxDecodeRequest;
                fromJSON(object: any): _95.TxDecodeRequest;
                toJSON(message: _95.TxDecodeRequest): unknown;
                fromPartial(object: {
                    txBytes?: Uint8Array;
                }): _95.TxDecodeRequest;
            };
            TxDecodeResponse: {
                encode(message: _95.TxDecodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.TxDecodeResponse;
                fromJSON(object: any): _95.TxDecodeResponse;
                toJSON(message: _95.TxDecodeResponse): unknown;
                fromPartial(object: {
                    tx?: {
                        body?: {
                            messages?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                            memo?: string;
                            timeoutHeight?: bigint;
                            extensionOptions?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                            nonCriticalExtensionOptions?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                        };
                        authInfo?: {
                            signerInfos?: {
                                publicKey?: {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                };
                                modeInfo?: {
                                    single?: {
                                        mode?: _94.SignMode;
                                    };
                                    multi?: {
                                        bitarray?: {
                                            extraBitsStored?: number;
                                            elems?: Uint8Array;
                                        };
                                        modeInfos?: any[];
                                    };
                                };
                                sequence?: bigint;
                            }[];
                            fee?: {
                                amount?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                gasLimit?: bigint;
                                payer?: string;
                                granter?: string;
                            };
                            tip?: {
                                amount?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                tipper?: string;
                            };
                        };
                        signatures?: Uint8Array[];
                    };
                }): _95.TxDecodeResponse;
            };
            TxEncodeRequest: {
                encode(message: _95.TxEncodeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.TxEncodeRequest;
                fromJSON(object: any): _95.TxEncodeRequest;
                toJSON(message: _95.TxEncodeRequest): unknown;
                fromPartial(object: {
                    tx?: {
                        body?: {
                            messages?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                            memo?: string;
                            timeoutHeight?: bigint;
                            extensionOptions?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                            nonCriticalExtensionOptions?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                        };
                        authInfo?: {
                            signerInfos?: {
                                publicKey?: {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                };
                                modeInfo?: {
                                    single?: {
                                        mode?: _94.SignMode;
                                    };
                                    multi?: {
                                        bitarray?: {
                                            extraBitsStored?: number;
                                            elems?: Uint8Array;
                                        };
                                        modeInfos?: any[];
                                    };
                                };
                                sequence?: bigint;
                            }[];
                            fee?: {
                                amount?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                gasLimit?: bigint;
                                payer?: string;
                                granter?: string;
                            };
                            tip?: {
                                amount?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                tipper?: string;
                            };
                        };
                        signatures?: Uint8Array[];
                    };
                }): _95.TxEncodeRequest;
            };
            TxEncodeResponse: {
                encode(message: _95.TxEncodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.TxEncodeResponse;
                fromJSON(object: any): _95.TxEncodeResponse;
                toJSON(message: _95.TxEncodeResponse): unknown;
                fromPartial(object: {
                    txBytes?: Uint8Array;
                }): _95.TxEncodeResponse;
            };
            TxEncodeAminoRequest: {
                encode(message: _95.TxEncodeAminoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.TxEncodeAminoRequest;
                fromJSON(object: any): _95.TxEncodeAminoRequest;
                toJSON(message: _95.TxEncodeAminoRequest): unknown;
                fromPartial(object: {
                    aminoJson?: string;
                }): _95.TxEncodeAminoRequest;
            };
            TxEncodeAminoResponse: {
                encode(message: _95.TxEncodeAminoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.TxEncodeAminoResponse;
                fromJSON(object: any): _95.TxEncodeAminoResponse;
                toJSON(message: _95.TxEncodeAminoResponse): unknown;
                fromPartial(object: {
                    aminoBinary?: Uint8Array;
                }): _95.TxEncodeAminoResponse;
            };
            TxDecodeAminoRequest: {
                encode(message: _95.TxDecodeAminoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.TxDecodeAminoRequest;
                fromJSON(object: any): _95.TxDecodeAminoRequest;
                toJSON(message: _95.TxDecodeAminoRequest): unknown;
                fromPartial(object: {
                    aminoBinary?: Uint8Array;
                }): _95.TxDecodeAminoRequest;
            };
            TxDecodeAminoResponse: {
                encode(message: _95.TxDecodeAminoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.TxDecodeAminoResponse;
                fromJSON(object: any): _95.TxDecodeAminoResponse;
                toJSON(message: _95.TxDecodeAminoResponse): unknown;
                fromPartial(object: {
                    aminoJson?: string;
                }): _95.TxDecodeAminoResponse;
            };
        };
    }
    namespace upgrade {
        namespace module {
            const v1: {
                Module: {
                    encode(message: _97.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _97.Module;
                    fromJSON(object: any): _97.Module;
                    toJSON(message: _97.Module): unknown;
                    fromPartial(object: {
                        authority?: string;
                    }): _97.Module;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _230.MsgClientImpl;
            QueryClientImpl: typeof _219.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                currentPlan(request?: _98.QueryCurrentPlanRequest): Promise<_98.QueryCurrentPlanResponse>;
                appliedPlan(request: _98.QueryAppliedPlanRequest): Promise<_98.QueryAppliedPlanResponse>;
                upgradedConsensusState(request: _98.QueryUpgradedConsensusStateRequest): Promise<_98.QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: _98.QueryModuleVersionsRequest): Promise<_98.QueryModuleVersionsResponse>;
                authority(request?: _98.QueryAuthorityRequest): Promise<_98.QueryAuthorityResponse>;
            };
            LCDQueryClient: typeof _203.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    softwareUpgrade(value: _99.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUpgrade(value: _99.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    softwareUpgrade(value: _99.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _99.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _99.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _99.MsgCancelUpgrade;
                    };
                };
                toJSON: {
                    softwareUpgrade(value: _99.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: unknown;
                    };
                    cancelUpgrade(value: _99.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    softwareUpgrade(value: any): {
                        typeUrl: string;
                        value: _99.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: any): {
                        typeUrl: string;
                        value: _99.MsgCancelUpgrade;
                    };
                };
                fromPartial: {
                    softwareUpgrade(value: _99.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _99.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _99.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _99.MsgCancelUpgrade;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade": {
                    aminoType: string;
                    toAmino: ({ authority, plan }: _99.MsgSoftwareUpgrade) => {
                        authority: string;
                        plan: {
                            name: string;
                            time: {
                                seconds: string;
                                nanos: number;
                            };
                            height: string;
                            info: string;
                            upgraded_client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                        };
                    };
                    fromAmino: ({ authority, plan }: {
                        authority: string;
                        plan: {
                            name: string;
                            time: {
                                seconds: string;
                                nanos: number;
                            };
                            height: string;
                            info: string;
                            upgraded_client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                        };
                    }) => _99.MsgSoftwareUpgrade;
                };
                "/cosmos.upgrade.v1beta1.MsgCancelUpgrade": {
                    aminoType: string;
                    toAmino: ({ authority }: _99.MsgCancelUpgrade) => {
                        authority: string;
                    };
                    fromAmino: ({ authority }: {
                        authority: string;
                    }) => _99.MsgCancelUpgrade;
                };
            };
            Plan: {
                encode(message: _100.Plan, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _100.Plan;
                fromJSON(object: any): _100.Plan;
                toJSON(message: _100.Plan): unknown;
                fromPartial(object: {
                    name?: string;
                    time?: {
                        seconds?: bigint;
                        nanos?: number;
                    };
                    height?: bigint;
                    info?: string;
                    upgradedClientState?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _100.Plan;
            };
            SoftwareUpgradeProposal: {
                encode(message: _100.SoftwareUpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _100.SoftwareUpgradeProposal;
                fromJSON(object: any): _100.SoftwareUpgradeProposal;
                toJSON(message: _100.SoftwareUpgradeProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    plan?: {
                        name?: string;
                        time?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        height?: bigint;
                        info?: string;
                        upgradedClientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    };
                }): _100.SoftwareUpgradeProposal;
            };
            CancelSoftwareUpgradeProposal: {
                encode(message: _100.CancelSoftwareUpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _100.CancelSoftwareUpgradeProposal;
                fromJSON(object: any): _100.CancelSoftwareUpgradeProposal;
                toJSON(message: _100.CancelSoftwareUpgradeProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                }): _100.CancelSoftwareUpgradeProposal;
            };
            ModuleVersion: {
                encode(message: _100.ModuleVersion, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _100.ModuleVersion;
                fromJSON(object: any): _100.ModuleVersion;
                toJSON(message: _100.ModuleVersion): unknown;
                fromPartial(object: {
                    name?: string;
                    version?: bigint;
                }): _100.ModuleVersion;
            };
            MsgSoftwareUpgrade: {
                encode(message: _99.MsgSoftwareUpgrade, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _99.MsgSoftwareUpgrade;
                fromJSON(object: any): _99.MsgSoftwareUpgrade;
                toJSON(message: _99.MsgSoftwareUpgrade): unknown;
                fromPartial(object: {
                    authority?: string;
                    plan?: {
                        name?: string;
                        time?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        height?: bigint;
                        info?: string;
                        upgradedClientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    };
                }): _99.MsgSoftwareUpgrade;
            };
            MsgSoftwareUpgradeResponse: {
                encode(_: _99.MsgSoftwareUpgradeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _99.MsgSoftwareUpgradeResponse;
                fromJSON(_: any): _99.MsgSoftwareUpgradeResponse;
                toJSON(_: _99.MsgSoftwareUpgradeResponse): unknown;
                fromPartial(_: {}): _99.MsgSoftwareUpgradeResponse;
            };
            MsgCancelUpgrade: {
                encode(message: _99.MsgCancelUpgrade, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _99.MsgCancelUpgrade;
                fromJSON(object: any): _99.MsgCancelUpgrade;
                toJSON(message: _99.MsgCancelUpgrade): unknown;
                fromPartial(object: {
                    authority?: string;
                }): _99.MsgCancelUpgrade;
            };
            MsgCancelUpgradeResponse: {
                encode(_: _99.MsgCancelUpgradeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _99.MsgCancelUpgradeResponse;
                fromJSON(_: any): _99.MsgCancelUpgradeResponse;
                toJSON(_: _99.MsgCancelUpgradeResponse): unknown;
                fromPartial(_: {}): _99.MsgCancelUpgradeResponse;
            };
            QueryCurrentPlanRequest: {
                encode(_: _98.QueryCurrentPlanRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _98.QueryCurrentPlanRequest;
                fromJSON(_: any): _98.QueryCurrentPlanRequest;
                toJSON(_: _98.QueryCurrentPlanRequest): unknown;
                fromPartial(_: {}): _98.QueryCurrentPlanRequest;
            };
            QueryCurrentPlanResponse: {
                encode(message: _98.QueryCurrentPlanResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _98.QueryCurrentPlanResponse;
                fromJSON(object: any): _98.QueryCurrentPlanResponse;
                toJSON(message: _98.QueryCurrentPlanResponse): unknown;
                fromPartial(object: {
                    plan?: {
                        name?: string;
                        time?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        height?: bigint;
                        info?: string;
                        upgradedClientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    };
                }): _98.QueryCurrentPlanResponse;
            };
            QueryAppliedPlanRequest: {
                encode(message: _98.QueryAppliedPlanRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _98.QueryAppliedPlanRequest;
                fromJSON(object: any): _98.QueryAppliedPlanRequest;
                toJSON(message: _98.QueryAppliedPlanRequest): unknown;
                fromPartial(object: {
                    name?: string;
                }): _98.QueryAppliedPlanRequest;
            };
            QueryAppliedPlanResponse: {
                encode(message: _98.QueryAppliedPlanResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _98.QueryAppliedPlanResponse;
                fromJSON(object: any): _98.QueryAppliedPlanResponse;
                toJSON(message: _98.QueryAppliedPlanResponse): unknown;
                fromPartial(object: {
                    height?: bigint;
                }): _98.QueryAppliedPlanResponse;
            };
            QueryUpgradedConsensusStateRequest: {
                encode(message: _98.QueryUpgradedConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _98.QueryUpgradedConsensusStateRequest;
                fromJSON(object: any): _98.QueryUpgradedConsensusStateRequest;
                toJSON(message: _98.QueryUpgradedConsensusStateRequest): unknown;
                fromPartial(object: {
                    lastHeight?: bigint;
                }): _98.QueryUpgradedConsensusStateRequest;
            };
            QueryUpgradedConsensusStateResponse: {
                encode(message: _98.QueryUpgradedConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _98.QueryUpgradedConsensusStateResponse;
                fromJSON(object: any): _98.QueryUpgradedConsensusStateResponse;
                toJSON(message: _98.QueryUpgradedConsensusStateResponse): unknown;
                fromPartial(object: {
                    upgradedConsensusState?: Uint8Array;
                }): _98.QueryUpgradedConsensusStateResponse;
            };
            QueryModuleVersionsRequest: {
                encode(message: _98.QueryModuleVersionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _98.QueryModuleVersionsRequest;
                fromJSON(object: any): _98.QueryModuleVersionsRequest;
                toJSON(message: _98.QueryModuleVersionsRequest): unknown;
                fromPartial(object: {
                    moduleName?: string;
                }): _98.QueryModuleVersionsRequest;
            };
            QueryModuleVersionsResponse: {
                encode(message: _98.QueryModuleVersionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _98.QueryModuleVersionsResponse;
                fromJSON(object: any): _98.QueryModuleVersionsResponse;
                toJSON(message: _98.QueryModuleVersionsResponse): unknown;
                fromPartial(object: {
                    moduleVersions?: {
                        name?: string;
                        version?: bigint;
                    }[];
                }): _98.QueryModuleVersionsResponse;
            };
            QueryAuthorityRequest: {
                encode(_: _98.QueryAuthorityRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _98.QueryAuthorityRequest;
                fromJSON(_: any): _98.QueryAuthorityRequest;
                toJSON(_: _98.QueryAuthorityRequest): unknown;
                fromPartial(_: {}): _98.QueryAuthorityRequest;
            };
            QueryAuthorityResponse: {
                encode(message: _98.QueryAuthorityResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _98.QueryAuthorityResponse;
                fromJSON(object: any): _98.QueryAuthorityResponse;
                toJSON(message: _98.QueryAuthorityResponse): unknown;
                fromPartial(object: {
                    address?: string;
                }): _98.QueryAuthorityResponse;
            };
        };
    }
    namespace vesting {
        namespace module {
            const v1: {
                Module: {
                    encode(_: _101.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _101.Module;
                    fromJSON(_: any): _101.Module;
                    toJSON(_: _101.Module): unknown;
                    fromPartial(_: {}): _101.Module;
                };
            };
        }
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: _220.MsgClientImpl;
                };
                authz: {
                    v1beta1: _221.MsgClientImpl;
                };
                bank: {
                    v1beta1: _222.MsgClientImpl;
                };
                consensus: {
                    v1: _223.MsgClientImpl;
                };
                distribution: {
                    v1beta1: _224.MsgClientImpl;
                };
                feegrant: {
                    v1beta1: _225.MsgClientImpl;
                };
                gov: {
                    v1: _226.MsgClientImpl;
                    v1beta1: _227.MsgClientImpl;
                };
                nft: {
                    v1beta1: _228.MsgClientImpl;
                };
                staking: {
                    v1beta1: _229.MsgClientImpl;
                };
                upgrade: {
                    v1beta1: _230.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: {
                        accounts(request?: _18.QueryAccountsRequest): Promise<_18.QueryAccountsResponse>;
                        account(request: _18.QueryAccountRequest): Promise<_18.QueryAccountResponse>;
                        accountAddressByID(request: _18.QueryAccountAddressByIDRequest): Promise<_18.QueryAccountAddressByIDResponse>;
                        params(request?: _18.QueryParamsRequest): Promise<_18.QueryParamsResponse>;
                        moduleAccounts(request?: _18.QueryModuleAccountsRequest): Promise<_18.QueryModuleAccountsResponse>;
                        moduleAccountByName(request: _18.QueryModuleAccountByNameRequest): Promise<_18.QueryModuleAccountByNameResponse>;
                        bech32Prefix(request?: _18.Bech32PrefixRequest): Promise<_18.Bech32PrefixResponse>;
                        addressBytesToString(request: _18.AddressBytesToStringRequest): Promise<_18.AddressBytesToStringResponse>;
                        addressStringToBytes(request: _18.AddressStringToBytesRequest): Promise<_18.AddressStringToBytesResponse>;
                        accountInfo(request: _18.QueryAccountInfoRequest): Promise<_18.QueryAccountInfoResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: _24.QueryGrantsRequest): Promise<_24.QueryGrantsResponse>;
                        granterGrants(request: _24.QueryGranterGrantsRequest): Promise<_24.QueryGranterGrantsResponse>;
                        granteeGrants(request: _24.QueryGranteeGrantsRequest): Promise<_24.QueryGranteeGrantsResponse>;
                    };
                };
                autocli: {
                    v1: {
                        appOptions(request?: _27.AppOptionsRequest): Promise<_27.AppOptionsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: _32.QueryBalanceRequest): Promise<_32.QueryBalanceResponse>;
                        allBalances(request: _32.QueryAllBalancesRequest): Promise<_32.QueryAllBalancesResponse>;
                        spendableBalances(request: _32.QuerySpendableBalancesRequest): Promise<_32.QuerySpendableBalancesResponse>;
                        spendableBalanceByDenom(request: _32.QuerySpendableBalanceByDenomRequest): Promise<_32.QuerySpendableBalanceByDenomResponse>;
                        totalSupply(request?: _32.QueryTotalSupplyRequest): Promise<_32.QueryTotalSupplyResponse>;
                        supplyOf(request: _32.QuerySupplyOfRequest): Promise<_32.QuerySupplyOfResponse>;
                        params(request?: _32.QueryParamsRequest): Promise<_32.QueryParamsResponse>;
                        denomMetadata(request: _32.QueryDenomMetadataRequest): Promise<_32.QueryDenomMetadataResponse>;
                        denomsMetadata(request?: _32.QueryDenomsMetadataRequest): Promise<_32.QueryDenomsMetadataResponse>;
                        denomOwners(request: _32.QueryDenomOwnersRequest): Promise<_32.QueryDenomOwnersResponse>;
                        sendEnabled(request: _32.QuerySendEnabledRequest): Promise<_32.QuerySendEnabledResponse>;
                    };
                };
                base: {
                    node: {
                        v1beta1: {
                            config(request?: _35.ConfigRequest): Promise<_35.ConfigResponse>;
                        };
                    };
                };
                consensus: {
                    v1: {
                        params(request?: _41.QueryParamsRequest): Promise<_41.QueryParamsResponse>;
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: _53.QueryParamsRequest): Promise<_53.QueryParamsResponse>;
                        validatorDistributionInfo(request: _53.QueryValidatorDistributionInfoRequest): Promise<_53.QueryValidatorDistributionInfoResponse>;
                        validatorOutstandingRewards(request: _53.QueryValidatorOutstandingRewardsRequest): Promise<_53.QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: _53.QueryValidatorCommissionRequest): Promise<_53.QueryValidatorCommissionResponse>;
                        validatorSlashes(request: _53.QueryValidatorSlashesRequest): Promise<_53.QueryValidatorSlashesResponse>;
                        delegationRewards(request: _53.QueryDelegationRewardsRequest): Promise<_53.QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: _53.QueryDelegationTotalRewardsRequest): Promise<_53.QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: _53.QueryDelegatorValidatorsRequest): Promise<_53.QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: _53.QueryDelegatorWithdrawAddressRequest): Promise<_53.QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: _53.QueryCommunityPoolRequest): Promise<_53.QueryCommunityPoolResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: _59.QueryAllowanceRequest): Promise<_59.QueryAllowanceResponse>;
                        allowances(request: _59.QueryAllowancesRequest): Promise<_59.QueryAllowancesResponse>;
                        allowancesByGranter(request: _59.QueryAllowancesByGranterRequest): Promise<_59.QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1: {
                        proposal(request: _65.QueryProposalRequest): Promise<_65.QueryProposalResponse>;
                        proposals(request: _65.QueryProposalsRequest): Promise<_65.QueryProposalsResponse>;
                        vote(request: _65.QueryVoteRequest): Promise<_65.QueryVoteResponse>;
                        votes(request: _65.QueryVotesRequest): Promise<_65.QueryVotesResponse>;
                        params(request: _65.QueryParamsRequest): Promise<_65.QueryParamsResponse>;
                        deposit(request: _65.QueryDepositRequest): Promise<_65.QueryDepositResponse>;
                        deposits(request: _65.QueryDepositsRequest): Promise<_65.QueryDepositsResponse>;
                        tallyResult(request: _65.QueryTallyResultRequest): Promise<_65.QueryTallyResultResponse>;
                    };
                    v1beta1: {
                        proposal(request: _69.QueryProposalRequest): Promise<_69.QueryProposalResponse>;
                        proposals(request: _69.QueryProposalsRequest): Promise<_69.QueryProposalsResponse>;
                        vote(request: _69.QueryVoteRequest): Promise<_69.QueryVoteResponse>;
                        votes(request: _69.QueryVotesRequest): Promise<_69.QueryVotesResponse>;
                        params(request: _69.QueryParamsRequest): Promise<_69.QueryParamsResponse>;
                        deposit(request: _69.QueryDepositRequest): Promise<_69.QueryDepositResponse>;
                        deposits(request: _69.QueryDepositsRequest): Promise<_69.QueryDepositsResponse>;
                        tallyResult(request: _69.QueryTallyResultRequest): Promise<_69.QueryTallyResultResponse>;
                    };
                };
                nft: {
                    v1beta1: {
                        balance(request: _77.QueryBalanceRequest): Promise<_77.QueryBalanceResponse>;
                        owner(request: _77.QueryOwnerRequest): Promise<_77.QueryOwnerResponse>;
                        supply(request: _77.QuerySupplyRequest): Promise<_77.QuerySupplyResponse>;
                        nFTs(request: _77.QueryNFTsRequest): Promise<_77.QueryNFTsResponse>;
                        nFT(request: _77.QueryNFTRequest): Promise<_77.QueryNFTResponse>;
                        class(request: _77.QueryClassRequest): Promise<_77.QueryClassResponse>;
                        classes(request?: _77.QueryClassesRequest): Promise<_77.QueryClassesResponse>;
                    };
                };
                orm: {
                    query: {
                        v1alpha1: {
                            get(request: _80.GetRequest): Promise<_80.GetResponse>;
                            list(request: _80.ListRequest): Promise<_80.ListResponse>;
                        };
                    };
                };
                params: {
                    v1beta1: {
                        params(request: _83.QueryParamsRequest): Promise<_83.QueryParamsResponse>;
                        subspaces(request?: _83.QuerySubspacesRequest): Promise<_83.QuerySubspacesResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: _90.QueryValidatorsRequest): Promise<_90.QueryValidatorsResponse>;
                        validator(request: _90.QueryValidatorRequest): Promise<_90.QueryValidatorResponse>;
                        validatorDelegations(request: _90.QueryValidatorDelegationsRequest): Promise<_90.QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: _90.QueryValidatorUnbondingDelegationsRequest): Promise<_90.QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: _90.QueryDelegationRequest): Promise<_90.QueryDelegationResponse>;
                        unbondingDelegation(request: _90.QueryUnbondingDelegationRequest): Promise<_90.QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: _90.QueryDelegatorDelegationsRequest): Promise<_90.QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: _90.QueryDelegatorUnbondingDelegationsRequest): Promise<_90.QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: _90.QueryRedelegationsRequest): Promise<_90.QueryRedelegationsResponse>;
                        delegatorValidators(request: _90.QueryDelegatorValidatorsRequest): Promise<_90.QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: _90.QueryDelegatorValidatorRequest): Promise<_90.QueryDelegatorValidatorResponse>;
                        historicalInfo(request: _90.QueryHistoricalInfoRequest): Promise<_90.QueryHistoricalInfoResponse>;
                        pool(request?: _90.QueryPoolRequest): Promise<_90.QueryPoolResponse>;
                        params(request?: _90.QueryParamsRequest): Promise<_90.QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: _95.SimulateRequest): Promise<_95.SimulateResponse>;
                        getTx(request: _95.GetTxRequest): Promise<_95.GetTxResponse>;
                        broadcastTx(request: _95.BroadcastTxRequest): Promise<_95.BroadcastTxResponse>;
                        getTxsEvent(request: _95.GetTxsEventRequest): Promise<_95.GetTxsEventResponse>;
                        getBlockWithTxs(request: _95.GetBlockWithTxsRequest): Promise<_95.GetBlockWithTxsResponse>;
                        txDecode(request: _95.TxDecodeRequest): Promise<_95.TxDecodeResponse>;
                        txEncode(request: _95.TxEncodeRequest): Promise<_95.TxEncodeResponse>;
                        txEncodeAmino(request: _95.TxEncodeAminoRequest): Promise<_95.TxEncodeAminoResponse>;
                        txDecodeAmino(request: _95.TxDecodeAminoRequest): Promise<_95.TxDecodeAminoResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: _98.QueryCurrentPlanRequest): Promise<_98.QueryCurrentPlanResponse>;
                        appliedPlan(request: _98.QueryAppliedPlanRequest): Promise<_98.QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: _98.QueryUpgradedConsensusStateRequest): Promise<_98.QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: _98.QueryModuleVersionsRequest): Promise<_98.QueryModuleVersionsResponse>;
                        authority(request?: _98.QueryAuthorityRequest): Promise<_98.QueryAuthorityResponse>;
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: _190.LCDQueryClient;
                };
                authz: {
                    v1beta1: _191.LCDQueryClient;
                };
                bank: {
                    v1beta1: _192.LCDQueryClient;
                };
                base: {
                    node: {
                        v1beta1: _193.LCDQueryClient;
                    };
                };
                consensus: {
                    v1: _194.LCDQueryClient;
                };
                distribution: {
                    v1beta1: _195.LCDQueryClient;
                };
                feegrant: {
                    v1beta1: _196.LCDQueryClient;
                };
                gov: {
                    v1: _197.LCDQueryClient;
                    v1beta1: _198.LCDQueryClient;
                };
                nft: {
                    v1beta1: _199.LCDQueryClient;
                };
                params: {
                    v1beta1: _200.LCDQueryClient;
                };
                staking: {
                    v1beta1: _201.LCDQueryClient;
                };
                tx: {
                    v1beta1: _202.LCDQueryClient;
                };
                upgrade: {
                    v1beta1: _203.LCDQueryClient;
                };
            };
        }>;
    };
}
