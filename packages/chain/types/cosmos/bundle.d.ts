import * as _13 from "./app/runtime/v1alpha1/module";
import * as _14 from "./auth/module/v1/module";
import * as _15 from "./auth/v1beta1/auth";
import * as _16 from "./auth/v1beta1/genesis";
import * as _17 from "./auth/v1beta1/query";
import * as _18 from "./auth/v1beta1/tx";
import * as _19 from "./authz/module/v1/module";
import * as _20 from "./authz/v1beta1/authz";
import * as _21 from "./authz/v1beta1/event";
import * as _22 from "./authz/v1beta1/genesis";
import * as _23 from "./authz/v1beta1/query";
import * as _24 from "./authz/v1beta1/tx";
import * as _25 from "./autocli/v1/options";
import * as _26 from "./autocli/v1/query";
import * as _27 from "./bank/module/v1/module";
import * as _28 from "./bank/v1beta1/authz";
import * as _29 from "./bank/v1beta1/bank";
import * as _30 from "./bank/v1beta1/genesis";
import * as _31 from "./bank/v1beta1/query";
import * as _32 from "./bank/v1beta1/tx";
import * as _33 from "./base/abci/v1beta1/abci";
import * as _34 from "./base/node/v1beta1/query";
import * as _35 from "./base/query/v1beta1/pagination";
import * as _36 from "./base/reflection/v2alpha1/reflection";
import * as _37 from "./base/v1beta1/coin";
import * as _38 from "./capability/module/v1/module";
import * as _39 from "./consensus/module/v1/module";
import * as _40 from "./consensus/v1/query";
import * as _41 from "./consensus/v1/tx";
import * as _42 from "./crisis/module/v1/module";
import * as _43 from "./crypto/ed25519/keys";
import * as _44 from "./crypto/hd/v1/hd";
import * as _45 from "./crypto/keyring/v1/record";
import * as _46 from "./crypto/multisig/keys";
import * as _47 from "./crypto/secp256k1/keys";
import * as _48 from "./crypto/secp256r1/keys";
import * as _49 from "./distribution/module/v1/module";
import * as _50 from "./distribution/v1beta1/distribution";
import * as _51 from "./distribution/v1beta1/genesis";
import * as _52 from "./distribution/v1beta1/query";
import * as _53 from "./distribution/v1beta1/tx";
import * as _54 from "./evidence/module/v1/module";
import * as _55 from "./feegrant/module/v1/module";
import * as _56 from "./feegrant/v1beta1/feegrant";
import * as _57 from "./feegrant/v1beta1/genesis";
import * as _58 from "./feegrant/v1beta1/query";
import * as _59 from "./feegrant/v1beta1/tx";
import * as _60 from "./genutil/module/v1/module";
import * as _61 from "./gov/module/v1/module";
import * as _62 from "./gov/v1/genesis";
import * as _63 from "./gov/v1/gov";
import * as _64 from "./gov/v1/query";
import * as _65 from "./gov/v1/tx";
import * as _66 from "./gov/v1beta1/genesis";
import * as _67 from "./gov/v1beta1/gov";
import * as _68 from "./gov/v1beta1/query";
import * as _69 from "./gov/v1beta1/tx";
import * as _70 from "./group/module/v1/module";
import * as _71 from "./mint/module/v1/module";
import * as _72 from "./nft/module/v1/module";
import * as _73 from "./nft/v1beta1/event";
import * as _74 from "./nft/v1beta1/genesis";
import * as _75 from "./nft/v1beta1/nft";
import * as _76 from "./nft/v1beta1/query";
import * as _77 from "./nft/v1beta1/tx";
import * as _78 from "./orm/module/v1alpha1/module";
import * as _79 from "./orm/query/v1alpha1/query";
import * as _80 from "./params/module/v1/module";
import * as _81 from "./params/v1beta1/params";
import * as _82 from "./params/v1beta1/query";
import * as _84 from "./reflection/v1/reflection";
import * as _85 from "./slashing/module/v1/module";
import * as _86 from "./staking/module/v1/module";
import * as _87 from "./staking/v1beta1/authz";
import * as _88 from "./staking/v1beta1/genesis";
import * as _89 from "./staking/v1beta1/query";
import * as _90 from "./staking/v1beta1/staking";
import * as _91 from "./staking/v1beta1/tx";
import * as _92 from "./tx/config/v1/config";
import * as _93 from "./tx/signing/v1beta1/signing";
import * as _94 from "./tx/v1beta1/service";
import * as _95 from "./tx/v1beta1/tx";
import * as _96 from "./upgrade/module/v1/module";
import * as _97 from "./upgrade/v1beta1/query";
import * as _98 from "./upgrade/v1beta1/tx";
import * as _99 from "./upgrade/v1beta1/upgrade";
import * as _100 from "./vesting/module/v1/module";
import * as _182 from "./auth/v1beta1/query.lcd";
import * as _183 from "./authz/v1beta1/query.lcd";
import * as _184 from "./bank/v1beta1/query.lcd";
import * as _185 from "./base/node/v1beta1/query.lcd";
import * as _186 from "./consensus/v1/query.lcd";
import * as _187 from "./distribution/v1beta1/query.lcd";
import * as _188 from "./feegrant/v1beta1/query.lcd";
import * as _189 from "./gov/v1/query.lcd";
import * as _190 from "./gov/v1beta1/query.lcd";
import * as _191 from "./nft/v1beta1/query.lcd";
import * as _192 from "./params/v1beta1/query.lcd";
import * as _193 from "./staking/v1beta1/query.lcd";
import * as _194 from "./tx/v1beta1/service.lcd";
import * as _195 from "./upgrade/v1beta1/query.lcd";
import * as _196 from "./auth/v1beta1/query.rpc.Query";
import * as _197 from "./authz/v1beta1/query.rpc.Query";
import * as _198 from "./autocli/v1/query.rpc.Query";
import * as _199 from "./bank/v1beta1/query.rpc.Query";
import * as _200 from "./base/node/v1beta1/query.rpc.Service";
import * as _201 from "./consensus/v1/query.rpc.Query";
import * as _202 from "./distribution/v1beta1/query.rpc.Query";
import * as _203 from "./feegrant/v1beta1/query.rpc.Query";
import * as _204 from "./gov/v1/query.rpc.Query";
import * as _205 from "./gov/v1beta1/query.rpc.Query";
import * as _206 from "./nft/v1beta1/query.rpc.Query";
import * as _207 from "./orm/query/v1alpha1/query.rpc.Query";
import * as _208 from "./params/v1beta1/query.rpc.Query";
import * as _209 from "./staking/v1beta1/query.rpc.Query";
import * as _210 from "./tx/v1beta1/service.rpc.Service";
import * as _211 from "./upgrade/v1beta1/query.rpc.Query";
import * as _212 from "./auth/v1beta1/tx.rpc.msg";
import * as _213 from "./authz/v1beta1/tx.rpc.msg";
import * as _214 from "./bank/v1beta1/tx.rpc.msg";
import * as _215 from "./consensus/v1/tx.rpc.msg";
import * as _216 from "./distribution/v1beta1/tx.rpc.msg";
import * as _217 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _218 from "./gov/v1/tx.rpc.msg";
import * as _219 from "./gov/v1beta1/tx.rpc.msg";
import * as _220 from "./nft/v1beta1/tx.rpc.msg";
import * as _221 from "./staking/v1beta1/tx.rpc.msg";
import * as _222 from "./upgrade/v1beta1/tx.rpc.msg";
export declare namespace cosmos {
    namespace app {
        namespace runtime {
            const v1alpha1: {
                Module: {
                    encode(message: _13.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _13.Module;
                    fromJSON(object: any): _13.Module;
                    toJSON(message: _13.Module): unknown;
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
                    }): _13.Module;
                };
                StoreKeyConfig: {
                    encode(message: _13.StoreKeyConfig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _13.StoreKeyConfig;
                    fromJSON(object: any): _13.StoreKeyConfig;
                    toJSON(message: _13.StoreKeyConfig): unknown;
                    fromPartial(object: {
                        moduleName?: string;
                        kvStoreKey?: string;
                    }): _13.StoreKeyConfig;
                };
            };
        }
    }
    namespace auth {
        namespace module {
            const v1: {
                Module: {
                    encode(message: _14.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _14.Module;
                    fromJSON(object: any): _14.Module;
                    toJSON(message: _14.Module): unknown;
                    fromPartial(object: {
                        bech32Prefix?: string;
                        moduleAccountPermissions?: {
                            account?: string;
                            permissions?: string[];
                        }[];
                        authority?: string;
                    }): _14.Module;
                };
                ModuleAccountPermission: {
                    encode(message: _14.ModuleAccountPermission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _14.ModuleAccountPermission;
                    fromJSON(object: any): _14.ModuleAccountPermission;
                    toJSON(message: _14.ModuleAccountPermission): unknown;
                    fromPartial(object: {
                        account?: string;
                        permissions?: string[];
                    }): _14.ModuleAccountPermission;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _212.MsgClientImpl;
            QueryClientImpl: typeof _196.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                accounts(request?: _17.QueryAccountsRequest): Promise<_17.QueryAccountsResponse>;
                account(request: _17.QueryAccountRequest): Promise<_17.QueryAccountResponse>;
                accountAddressByID(request: _17.QueryAccountAddressByIDRequest): Promise<_17.QueryAccountAddressByIDResponse>;
                params(request?: _17.QueryParamsRequest): Promise<_17.QueryParamsResponse>;
                moduleAccounts(request?: _17.QueryModuleAccountsRequest): Promise<_17.QueryModuleAccountsResponse>;
                moduleAccountByName(request: _17.QueryModuleAccountByNameRequest): Promise<_17.QueryModuleAccountByNameResponse>;
                bech32Prefix(request?: _17.Bech32PrefixRequest): Promise<_17.Bech32PrefixResponse>;
                addressBytesToString(request: _17.AddressBytesToStringRequest): Promise<_17.AddressBytesToStringResponse>;
                addressStringToBytes(request: _17.AddressStringToBytesRequest): Promise<_17.AddressStringToBytesResponse>;
                accountInfo(request: _17.QueryAccountInfoRequest): Promise<_17.QueryAccountInfoResponse>;
            };
            LCDQueryClient: typeof _182.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    updateParams(value: _18.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    updateParams(value: _18.MsgUpdateParams): {
                        typeUrl: string;
                        value: _18.MsgUpdateParams;
                    };
                };
                toJSON: {
                    updateParams(value: _18.MsgUpdateParams): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _18.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    updateParams(value: _18.MsgUpdateParams): {
                        typeUrl: string;
                        value: _18.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.auth.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: ({ authority, params }: _18.MsgUpdateParams) => {
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
                    }) => _18.MsgUpdateParams;
                };
            };
            MsgUpdateParams: {
                encode(message: _18.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _18.MsgUpdateParams;
                fromJSON(object: any): _18.MsgUpdateParams;
                toJSON(message: _18.MsgUpdateParams): unknown;
                fromPartial(object: {
                    authority?: string;
                    params?: {
                        maxMemoCharacters?: bigint;
                        txSigLimit?: bigint;
                        txSizeCostPerByte?: bigint;
                        sigVerifyCostEd25519?: bigint;
                        sigVerifyCostSecp256k1?: bigint;
                    };
                }): _18.MsgUpdateParams;
            };
            MsgUpdateParamsResponse: {
                encode(_: _18.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _18.MsgUpdateParamsResponse;
                fromJSON(_: any): _18.MsgUpdateParamsResponse;
                toJSON(_: _18.MsgUpdateParamsResponse): unknown;
                fromPartial(_: {}): _18.MsgUpdateParamsResponse;
            };
            QueryAccountsRequest: {
                encode(message: _17.QueryAccountsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _17.QueryAccountsRequest;
                fromJSON(object: any): _17.QueryAccountsRequest;
                toJSON(message: _17.QueryAccountsRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: bigint;
                        limit?: bigint;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _17.QueryAccountsRequest;
            };
            QueryAccountsResponse: {
                encode(message: _17.QueryAccountsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _17.QueryAccountsResponse;
                fromJSON(object: any): _17.QueryAccountsResponse;
                toJSON(message: _17.QueryAccountsResponse): unknown;
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
                }): _17.QueryAccountsResponse;
            };
            QueryAccountRequest: {
                encode(message: _17.QueryAccountRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _17.QueryAccountRequest;
                fromJSON(object: any): _17.QueryAccountRequest;
                toJSON(message: _17.QueryAccountRequest): unknown;
                fromPartial(object: {
                    address?: string;
                }): _17.QueryAccountRequest;
            };
            QueryAccountResponse: {
                encode(message: _17.QueryAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _17.QueryAccountResponse;
                fromJSON(object: any): _17.QueryAccountResponse;
                toJSON(message: _17.QueryAccountResponse): unknown;
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
                }): _17.QueryAccountResponse;
            };
            QueryParamsRequest: {
                encode(_: _17.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _17.QueryParamsRequest;
                fromJSON(_: any): _17.QueryParamsRequest;
                toJSON(_: _17.QueryParamsRequest): unknown;
                fromPartial(_: {}): _17.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _17.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _17.QueryParamsResponse;
                fromJSON(object: any): _17.QueryParamsResponse;
                toJSON(message: _17.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        maxMemoCharacters?: bigint;
                        txSigLimit?: bigint;
                        txSizeCostPerByte?: bigint;
                        sigVerifyCostEd25519?: bigint;
                        sigVerifyCostSecp256k1?: bigint;
                    };
                }): _17.QueryParamsResponse;
            };
            QueryModuleAccountsRequest: {
                encode(_: _17.QueryModuleAccountsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _17.QueryModuleAccountsRequest;
                fromJSON(_: any): _17.QueryModuleAccountsRequest;
                toJSON(_: _17.QueryModuleAccountsRequest): unknown;
                fromPartial(_: {}): _17.QueryModuleAccountsRequest;
            };
            QueryModuleAccountsResponse: {
                encode(message: _17.QueryModuleAccountsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _17.QueryModuleAccountsResponse;
                fromJSON(object: any): _17.QueryModuleAccountsResponse;
                toJSON(message: _17.QueryModuleAccountsResponse): unknown;
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
                }): _17.QueryModuleAccountsResponse;
            };
            QueryModuleAccountByNameRequest: {
                encode(message: _17.QueryModuleAccountByNameRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _17.QueryModuleAccountByNameRequest;
                fromJSON(object: any): _17.QueryModuleAccountByNameRequest;
                toJSON(message: _17.QueryModuleAccountByNameRequest): unknown;
                fromPartial(object: {
                    name?: string;
                }): _17.QueryModuleAccountByNameRequest;
            };
            QueryModuleAccountByNameResponse: {
                encode(message: _17.QueryModuleAccountByNameResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _17.QueryModuleAccountByNameResponse;
                fromJSON(object: any): _17.QueryModuleAccountByNameResponse;
                toJSON(message: _17.QueryModuleAccountByNameResponse): unknown;
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
                }): _17.QueryModuleAccountByNameResponse;
            };
            Bech32PrefixRequest: {
                encode(_: _17.Bech32PrefixRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _17.Bech32PrefixRequest;
                fromJSON(_: any): _17.Bech32PrefixRequest;
                toJSON(_: _17.Bech32PrefixRequest): unknown;
                fromPartial(_: {}): _17.Bech32PrefixRequest;
            };
            Bech32PrefixResponse: {
                encode(message: _17.Bech32PrefixResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _17.Bech32PrefixResponse;
                fromJSON(object: any): _17.Bech32PrefixResponse;
                toJSON(message: _17.Bech32PrefixResponse): unknown;
                fromPartial(object: {
                    bech32Prefix?: string;
                }): _17.Bech32PrefixResponse;
            };
            AddressBytesToStringRequest: {
                encode(message: _17.AddressBytesToStringRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _17.AddressBytesToStringRequest;
                fromJSON(object: any): _17.AddressBytesToStringRequest;
                toJSON(message: _17.AddressBytesToStringRequest): unknown;
                fromPartial(object: {
                    addressBytes?: Uint8Array;
                }): _17.AddressBytesToStringRequest;
            };
            AddressBytesToStringResponse: {
                encode(message: _17.AddressBytesToStringResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _17.AddressBytesToStringResponse;
                fromJSON(object: any): _17.AddressBytesToStringResponse;
                toJSON(message: _17.AddressBytesToStringResponse): unknown;
                fromPartial(object: {
                    addressString?: string;
                }): _17.AddressBytesToStringResponse;
            };
            AddressStringToBytesRequest: {
                encode(message: _17.AddressStringToBytesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _17.AddressStringToBytesRequest;
                fromJSON(object: any): _17.AddressStringToBytesRequest;
                toJSON(message: _17.AddressStringToBytesRequest): unknown;
                fromPartial(object: {
                    addressString?: string;
                }): _17.AddressStringToBytesRequest;
            };
            AddressStringToBytesResponse: {
                encode(message: _17.AddressStringToBytesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _17.AddressStringToBytesResponse;
                fromJSON(object: any): _17.AddressStringToBytesResponse;
                toJSON(message: _17.AddressStringToBytesResponse): unknown;
                fromPartial(object: {
                    addressBytes?: Uint8Array;
                }): _17.AddressStringToBytesResponse;
            };
            QueryAccountAddressByIDRequest: {
                encode(message: _17.QueryAccountAddressByIDRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _17.QueryAccountAddressByIDRequest;
                fromJSON(object: any): _17.QueryAccountAddressByIDRequest;
                toJSON(message: _17.QueryAccountAddressByIDRequest): unknown;
                fromPartial(object: {
                    id?: bigint;
                    accountId?: bigint;
                }): _17.QueryAccountAddressByIDRequest;
            };
            QueryAccountAddressByIDResponse: {
                encode(message: _17.QueryAccountAddressByIDResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _17.QueryAccountAddressByIDResponse;
                fromJSON(object: any): _17.QueryAccountAddressByIDResponse;
                toJSON(message: _17.QueryAccountAddressByIDResponse): unknown;
                fromPartial(object: {
                    accountAddress?: string;
                }): _17.QueryAccountAddressByIDResponse;
            };
            QueryAccountInfoRequest: {
                encode(message: _17.QueryAccountInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _17.QueryAccountInfoRequest;
                fromJSON(object: any): _17.QueryAccountInfoRequest;
                toJSON(message: _17.QueryAccountInfoRequest): unknown;
                fromPartial(object: {
                    address?: string;
                }): _17.QueryAccountInfoRequest;
            };
            QueryAccountInfoResponse: {
                encode(message: _17.QueryAccountInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _17.QueryAccountInfoResponse;
                fromJSON(object: any): _17.QueryAccountInfoResponse;
                toJSON(message: _17.QueryAccountInfoResponse): unknown;
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
                }): _17.QueryAccountInfoResponse;
            };
            Cosmos_authv1beta1AccountI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _15.BaseAccount;
            Cosmos_authv1beta1ModuleAccountI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _15.ModuleAccount;
            GenesisState: {
                encode(message: _16.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _16.GenesisState;
                fromJSON(object: any): _16.GenesisState;
                toJSON(message: _16.GenesisState): unknown;
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
                }): _16.GenesisState;
            };
            BaseAccount: {
                encode(message: _15.BaseAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _15.BaseAccount;
                fromJSON(object: any): _15.BaseAccount;
                toJSON(message: _15.BaseAccount): unknown;
                fromPartial(object: {
                    address?: string;
                    pubKey?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    accountNumber?: bigint;
                    sequence?: bigint;
                }): _15.BaseAccount;
            };
            ModuleAccount: {
                encode(message: _15.ModuleAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _15.ModuleAccount;
                fromJSON(object: any): _15.ModuleAccount;
                toJSON(message: _15.ModuleAccount): unknown;
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
                }): _15.ModuleAccount;
            };
            ModuleCredential: {
                encode(message: _15.ModuleCredential, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _15.ModuleCredential;
                fromJSON(object: any): _15.ModuleCredential;
                toJSON(message: _15.ModuleCredential): unknown;
                fromPartial(object: {
                    moduleName?: string;
                    derivationKeys?: Uint8Array[];
                }): _15.ModuleCredential;
            };
            Params: {
                encode(message: _15.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _15.Params;
                fromJSON(object: any): _15.Params;
                toJSON(message: _15.Params): unknown;
                fromPartial(object: {
                    maxMemoCharacters?: bigint;
                    txSigLimit?: bigint;
                    txSizeCostPerByte?: bigint;
                    sigVerifyCostEd25519?: bigint;
                    sigVerifyCostSecp256k1?: bigint;
                }): _15.Params;
            };
        };
    }
    namespace authz {
        namespace module {
            const v1: {
                Module: {
                    encode(_: _19.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _19.Module;
                    fromJSON(_: any): _19.Module;
                    toJSON(_: _19.Module): unknown;
                    fromPartial(_: {}): _19.Module;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _213.MsgClientImpl;
            QueryClientImpl: typeof _197.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                grants(request: _23.QueryGrantsRequest): Promise<_23.QueryGrantsResponse>;
                granterGrants(request: _23.QueryGranterGrantsRequest): Promise<_23.QueryGranterGrantsResponse>;
                granteeGrants(request: _23.QueryGranteeGrantsRequest): Promise<_23.QueryGranteeGrantsResponse>;
            };
            LCDQueryClient: typeof _183.LCDQueryClient;
            MsgGrant: {
                encode(message: _24.MsgGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _24.MsgGrant;
                fromJSON(object: any): _24.MsgGrant;
                toJSON(message: _24.MsgGrant): unknown;
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
                            authorizationType?: _87.AuthorizationType;
                        } | {
                            msg?: string;
                        };
                        expiration?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                    };
                }): _24.MsgGrant;
            };
            MsgExecResponse: {
                encode(message: _24.MsgExecResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _24.MsgExecResponse;
                fromJSON(object: any): _24.MsgExecResponse;
                toJSON(message: _24.MsgExecResponse): unknown;
                fromPartial(object: {
                    results?: Uint8Array[];
                }): _24.MsgExecResponse;
            };
            MsgExec: {
                encode(message: _24.MsgExec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _24.MsgExec;
                fromJSON(object: any): _24.MsgExec;
                toJSON(message: _24.MsgExec): unknown;
                fromPartial(object: {
                    grantee?: string;
                    msgs?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                }): _24.MsgExec;
            };
            MsgGrantResponse: {
                encode(_: _24.MsgGrantResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _24.MsgGrantResponse;
                fromJSON(_: any): _24.MsgGrantResponse;
                toJSON(_: _24.MsgGrantResponse): unknown;
                fromPartial(_: {}): _24.MsgGrantResponse;
            };
            MsgRevoke: {
                encode(message: _24.MsgRevoke, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _24.MsgRevoke;
                fromJSON(object: any): _24.MsgRevoke;
                toJSON(message: _24.MsgRevoke): unknown;
                fromPartial(object: {
                    granter?: string;
                    grantee?: string;
                    msgTypeUrl?: string;
                }): _24.MsgRevoke;
            };
            MsgRevokeResponse: {
                encode(_: _24.MsgRevokeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _24.MsgRevokeResponse;
                fromJSON(_: any): _24.MsgRevokeResponse;
                toJSON(_: _24.MsgRevokeResponse): unknown;
                fromPartial(_: {}): _24.MsgRevokeResponse;
            };
            Cosmos_basev1beta1Msg_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            QueryGrantsRequest: {
                encode(message: _23.QueryGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _23.QueryGrantsRequest;
                fromJSON(object: any): _23.QueryGrantsRequest;
                toJSON(message: _23.QueryGrantsRequest): unknown;
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
                }): _23.QueryGrantsRequest;
            };
            QueryGrantsResponse: {
                encode(message: _23.QueryGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _23.QueryGrantsResponse;
                fromJSON(object: any): _23.QueryGrantsResponse;
                toJSON(message: _23.QueryGrantsResponse): unknown;
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
                            authorizationType?: _87.AuthorizationType;
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
                }): _23.QueryGrantsResponse;
            };
            QueryGranterGrantsRequest: {
                encode(message: _23.QueryGranterGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _23.QueryGranterGrantsRequest;
                fromJSON(object: any): _23.QueryGranterGrantsRequest;
                toJSON(message: _23.QueryGranterGrantsRequest): unknown;
                fromPartial(object: {
                    granter?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: bigint;
                        limit?: bigint;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _23.QueryGranterGrantsRequest;
            };
            QueryGranterGrantsResponse: {
                encode(message: _23.QueryGranterGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _23.QueryGranterGrantsResponse;
                fromJSON(object: any): _23.QueryGranterGrantsResponse;
                toJSON(message: _23.QueryGranterGrantsResponse): unknown;
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
                            authorizationType?: _87.AuthorizationType;
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
                }): _23.QueryGranterGrantsResponse;
            };
            QueryGranteeGrantsRequest: {
                encode(message: _23.QueryGranteeGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _23.QueryGranteeGrantsRequest;
                fromJSON(object: any): _23.QueryGranteeGrantsRequest;
                toJSON(message: _23.QueryGranteeGrantsRequest): unknown;
                fromPartial(object: {
                    grantee?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: bigint;
                        limit?: bigint;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _23.QueryGranteeGrantsRequest;
            };
            QueryGranteeGrantsResponse: {
                encode(message: _23.QueryGranteeGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _23.QueryGranteeGrantsResponse;
                fromJSON(object: any): _23.QueryGranteeGrantsResponse;
                toJSON(message: _23.QueryGranteeGrantsResponse): unknown;
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
                            authorizationType?: _87.AuthorizationType;
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
                }): _23.QueryGranteeGrantsResponse;
            };
            GenesisState: {
                encode(message: _22.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _22.GenesisState;
                fromJSON(object: any): _22.GenesisState;
                toJSON(message: _22.GenesisState): unknown;
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
                            authorizationType?: _87.AuthorizationType;
                        } | {
                            msg?: string;
                        };
                        expiration?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                    }[];
                }): _22.GenesisState;
            };
            EventGrant: {
                encode(message: _21.EventGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _21.EventGrant;
                fromJSON(object: any): _21.EventGrant;
                toJSON(message: _21.EventGrant): unknown;
                fromPartial(object: {
                    msgTypeUrl?: string;
                    granter?: string;
                    grantee?: string;
                }): _21.EventGrant;
            };
            EventRevoke: {
                encode(message: _21.EventRevoke, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _21.EventRevoke;
                fromJSON(object: any): _21.EventRevoke;
                toJSON(message: _21.EventRevoke): unknown;
                fromPartial(object: {
                    msgTypeUrl?: string;
                    granter?: string;
                    grantee?: string;
                }): _21.EventRevoke;
            };
            GenericAuthorization: {
                encode(message: _20.GenericAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _20.GenericAuthorization;
                fromJSON(object: any): _20.GenericAuthorization;
                toJSON(message: _20.GenericAuthorization): unknown;
                fromPartial(object: {
                    msg?: string;
                }): _20.GenericAuthorization;
            };
            Grant: {
                encode(message: _20.Grant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _20.Grant;
                fromJSON(object: any): _20.Grant;
                toJSON(message: _20.Grant): unknown;
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
                        authorizationType?: _87.AuthorizationType;
                    } | {
                        msg?: string;
                    };
                    expiration?: {
                        seconds?: bigint;
                        nanos?: number;
                    };
                }): _20.Grant;
            };
            GrantAuthorization: {
                encode(message: _20.GrantAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _20.GrantAuthorization;
                fromJSON(object: any): _20.GrantAuthorization;
                toJSON(message: _20.GrantAuthorization): unknown;
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
                        authorizationType?: _87.AuthorizationType;
                    } | {
                        msg?: string;
                    };
                    expiration?: {
                        seconds?: bigint;
                        nanos?: number;
                    };
                }): _20.GrantAuthorization;
            };
            GrantQueueItem: {
                encode(message: _20.GrantQueueItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _20.GrantQueueItem;
                fromJSON(object: any): _20.GrantQueueItem;
                toJSON(message: _20.GrantQueueItem): unknown;
                fromPartial(object: {
                    msgTypeUrls?: string[];
                }): _20.GrantQueueItem;
            };
            Cosmos_authzv1beta1Authorization_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _28.SendAuthorization | _87.StakeAuthorization | _20.GenericAuthorization;
        };
    }
    namespace autocli {
        const v1: {
            QueryClientImpl: typeof _198.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                appOptions(request?: _26.AppOptionsRequest): Promise<_26.AppOptionsResponse>;
            };
            AppOptionsRequest: {
                encode(_: _26.AppOptionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _26.AppOptionsRequest;
                fromJSON(_: any): _26.AppOptionsRequest;
                toJSON(_: _26.AppOptionsRequest): unknown;
                fromPartial(_: {}): _26.AppOptionsRequest;
            };
            AppOptionsResponse_ModuleOptionsEntry: {
                encode(message: _26.AppOptionsResponse_ModuleOptionsEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _26.AppOptionsResponse_ModuleOptionsEntry;
                fromJSON(object: any): _26.AppOptionsResponse_ModuleOptionsEntry;
                toJSON(message: _26.AppOptionsResponse_ModuleOptionsEntry): unknown;
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
                }): _26.AppOptionsResponse_ModuleOptionsEntry;
            };
            AppOptionsResponse: {
                encode(message: _26.AppOptionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _26.AppOptionsResponse;
                fromJSON(object: any): _26.AppOptionsResponse;
                toJSON(message: _26.AppOptionsResponse): unknown;
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
                }): _26.AppOptionsResponse;
            };
            ModuleOptions: {
                encode(message: _25.ModuleOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _25.ModuleOptions;
                fromJSON(object: any): _25.ModuleOptions;
                toJSON(message: _25.ModuleOptions): unknown;
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
                }): _25.ModuleOptions;
            };
            ServiceCommandDescriptor_SubCommandsEntry: {
                encode(message: _25.ServiceCommandDescriptor_SubCommandsEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _25.ServiceCommandDescriptor_SubCommandsEntry;
                fromJSON(object: any): _25.ServiceCommandDescriptor_SubCommandsEntry;
                toJSON(message: _25.ServiceCommandDescriptor_SubCommandsEntry): unknown;
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
                }): _25.ServiceCommandDescriptor_SubCommandsEntry;
            };
            ServiceCommandDescriptor: {
                encode(message: _25.ServiceCommandDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _25.ServiceCommandDescriptor;
                fromJSON(object: any): _25.ServiceCommandDescriptor;
                toJSON(message: _25.ServiceCommandDescriptor): unknown;
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
                }): _25.ServiceCommandDescriptor;
            };
            RpcCommandOptions_FlagOptionsEntry: {
                encode(message: _25.RpcCommandOptions_FlagOptionsEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _25.RpcCommandOptions_FlagOptionsEntry;
                fromJSON(object: any): _25.RpcCommandOptions_FlagOptionsEntry;
                toJSON(message: _25.RpcCommandOptions_FlagOptionsEntry): unknown;
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
                }): _25.RpcCommandOptions_FlagOptionsEntry;
            };
            RpcCommandOptions: {
                encode(message: _25.RpcCommandOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _25.RpcCommandOptions;
                fromJSON(object: any): _25.RpcCommandOptions;
                toJSON(message: _25.RpcCommandOptions): unknown;
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
                }): _25.RpcCommandOptions;
            };
            FlagOptions: {
                encode(message: _25.FlagOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _25.FlagOptions;
                fromJSON(object: any): _25.FlagOptions;
                toJSON(message: _25.FlagOptions): unknown;
                fromPartial(object: {
                    name?: string;
                    shorthand?: string;
                    usage?: string;
                    defaultValue?: string;
                    noOptDefaultValue?: string;
                    deprecated?: string;
                    shorthandDeprecated?: string;
                    hidden?: boolean;
                }): _25.FlagOptions;
            };
            PositionalArgDescriptor: {
                encode(message: _25.PositionalArgDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _25.PositionalArgDescriptor;
                fromJSON(object: any): _25.PositionalArgDescriptor;
                toJSON(message: _25.PositionalArgDescriptor): unknown;
                fromPartial(object: {
                    protoField?: string;
                    varargs?: boolean;
                }): _25.PositionalArgDescriptor;
            };
        };
    }
    namespace bank {
        namespace module {
            const v1: {
                Module: {
                    encode(message: _27.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _27.Module;
                    fromJSON(object: any): _27.Module;
                    toJSON(message: _27.Module): unknown;
                    fromPartial(object: {
                        blockedModuleAccountsOverride?: string[];
                        authority?: string;
                    }): _27.Module;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _214.MsgClientImpl;
            QueryClientImpl: typeof _199.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _31.QueryBalanceRequest): Promise<_31.QueryBalanceResponse>;
                allBalances(request: _31.QueryAllBalancesRequest): Promise<_31.QueryAllBalancesResponse>;
                spendableBalances(request: _31.QuerySpendableBalancesRequest): Promise<_31.QuerySpendableBalancesResponse>;
                spendableBalanceByDenom(request: _31.QuerySpendableBalanceByDenomRequest): Promise<_31.QuerySpendableBalanceByDenomResponse>;
                totalSupply(request?: _31.QueryTotalSupplyRequest): Promise<_31.QueryTotalSupplyResponse>;
                supplyOf(request: _31.QuerySupplyOfRequest): Promise<_31.QuerySupplyOfResponse>;
                params(request?: _31.QueryParamsRequest): Promise<_31.QueryParamsResponse>;
                denomMetadata(request: _31.QueryDenomMetadataRequest): Promise<_31.QueryDenomMetadataResponse>;
                denomsMetadata(request?: _31.QueryDenomsMetadataRequest): Promise<_31.QueryDenomsMetadataResponse>;
                denomOwners(request: _31.QueryDenomOwnersRequest): Promise<_31.QueryDenomOwnersResponse>;
                sendEnabled(request: _31.QuerySendEnabledRequest): Promise<_31.QuerySendEnabledResponse>;
            };
            LCDQueryClient: typeof _184.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _32.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    multiSend(value: _32.MsgMultiSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _32.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setSendEnabled(value: _32.MsgSetSendEnabled): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _32.MsgSend): {
                        typeUrl: string;
                        value: _32.MsgSend;
                    };
                    multiSend(value: _32.MsgMultiSend): {
                        typeUrl: string;
                        value: _32.MsgMultiSend;
                    };
                    updateParams(value: _32.MsgUpdateParams): {
                        typeUrl: string;
                        value: _32.MsgUpdateParams;
                    };
                    setSendEnabled(value: _32.MsgSetSendEnabled): {
                        typeUrl: string;
                        value: _32.MsgSetSendEnabled;
                    };
                };
                toJSON: {
                    send(value: _32.MsgSend): {
                        typeUrl: string;
                        value: unknown;
                    };
                    multiSend(value: _32.MsgMultiSend): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateParams(value: _32.MsgUpdateParams): {
                        typeUrl: string;
                        value: unknown;
                    };
                    setSendEnabled(value: _32.MsgSetSendEnabled): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _32.MsgSend;
                    };
                    multiSend(value: any): {
                        typeUrl: string;
                        value: _32.MsgMultiSend;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _32.MsgUpdateParams;
                    };
                    setSendEnabled(value: any): {
                        typeUrl: string;
                        value: _32.MsgSetSendEnabled;
                    };
                };
                fromPartial: {
                    send(value: _32.MsgSend): {
                        typeUrl: string;
                        value: _32.MsgSend;
                    };
                    multiSend(value: _32.MsgMultiSend): {
                        typeUrl: string;
                        value: _32.MsgMultiSend;
                    };
                    updateParams(value: _32.MsgUpdateParams): {
                        typeUrl: string;
                        value: _32.MsgUpdateParams;
                    };
                    setSendEnabled(value: _32.MsgSetSendEnabled): {
                        typeUrl: string;
                        value: _32.MsgSetSendEnabled;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount }: _32.MsgSend) => {
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
                    }) => _32.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: ({ inputs, outputs }: _32.MsgMultiSend) => {
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
                    }) => _32.MsgMultiSend;
                };
                "/cosmos.bank.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: ({ authority, params }: _32.MsgUpdateParams) => {
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
                    }) => _32.MsgUpdateParams;
                };
                "/cosmos.bank.v1beta1.MsgSetSendEnabled": {
                    aminoType: string;
                    toAmino: ({ authority, sendEnabled, useDefaultFor }: _32.MsgSetSendEnabled) => {
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
                    }) => _32.MsgSetSendEnabled;
                };
            };
            MsgSend: {
                encode(message: _32.MsgSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _32.MsgSend;
                fromJSON(object: any): _32.MsgSend;
                toJSON(message: _32.MsgSend): unknown;
                fromPartial(object: {
                    fromAddress?: string;
                    toAddress?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _32.MsgSend;
            };
            MsgSendResponse: {
                encode(_: _32.MsgSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _32.MsgSendResponse;
                fromJSON(_: any): _32.MsgSendResponse;
                toJSON(_: _32.MsgSendResponse): unknown;
                fromPartial(_: {}): _32.MsgSendResponse;
            };
            MsgMultiSend: {
                encode(message: _32.MsgMultiSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _32.MsgMultiSend;
                fromJSON(object: any): _32.MsgMultiSend;
                toJSON(message: _32.MsgMultiSend): unknown;
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
                }): _32.MsgMultiSend;
            };
            MsgMultiSendResponse: {
                encode(_: _32.MsgMultiSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _32.MsgMultiSendResponse;
                fromJSON(_: any): _32.MsgMultiSendResponse;
                toJSON(_: _32.MsgMultiSendResponse): unknown;
                fromPartial(_: {}): _32.MsgMultiSendResponse;
            };
            MsgUpdateParams: {
                encode(message: _32.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _32.MsgUpdateParams;
                fromJSON(object: any): _32.MsgUpdateParams;
                toJSON(message: _32.MsgUpdateParams): unknown;
                fromPartial(object: {
                    authority?: string;
                    params?: {
                        sendEnabled?: {
                            denom?: string;
                            enabled?: boolean;
                        }[];
                        defaultSendEnabled?: boolean;
                    };
                }): _32.MsgUpdateParams;
            };
            MsgUpdateParamsResponse: {
                encode(_: _32.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _32.MsgUpdateParamsResponse;
                fromJSON(_: any): _32.MsgUpdateParamsResponse;
                toJSON(_: _32.MsgUpdateParamsResponse): unknown;
                fromPartial(_: {}): _32.MsgUpdateParamsResponse;
            };
            MsgSetSendEnabled: {
                encode(message: _32.MsgSetSendEnabled, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _32.MsgSetSendEnabled;
                fromJSON(object: any): _32.MsgSetSendEnabled;
                toJSON(message: _32.MsgSetSendEnabled): unknown;
                fromPartial(object: {
                    authority?: string;
                    sendEnabled?: {
                        denom?: string;
                        enabled?: boolean;
                    }[];
                    useDefaultFor?: string[];
                }): _32.MsgSetSendEnabled;
            };
            MsgSetSendEnabledResponse: {
                encode(_: _32.MsgSetSendEnabledResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _32.MsgSetSendEnabledResponse;
                fromJSON(_: any): _32.MsgSetSendEnabledResponse;
                toJSON(_: _32.MsgSetSendEnabledResponse): unknown;
                fromPartial(_: {}): _32.MsgSetSendEnabledResponse;
            };
            QueryBalanceRequest: {
                encode(message: _31.QueryBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _31.QueryBalanceRequest;
                fromJSON(object: any): _31.QueryBalanceRequest;
                toJSON(message: _31.QueryBalanceRequest): unknown;
                fromPartial(object: {
                    address?: string;
                    denom?: string;
                }): _31.QueryBalanceRequest;
            };
            QueryBalanceResponse: {
                encode(message: _31.QueryBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _31.QueryBalanceResponse;
                fromJSON(object: any): _31.QueryBalanceResponse;
                toJSON(message: _31.QueryBalanceResponse): unknown;
                fromPartial(object: {
                    balance?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _31.QueryBalanceResponse;
            };
            QueryAllBalancesRequest: {
                encode(message: _31.QueryAllBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _31.QueryAllBalancesRequest;
                fromJSON(object: any): _31.QueryAllBalancesRequest;
                toJSON(message: _31.QueryAllBalancesRequest): unknown;
                fromPartial(object: {
                    address?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: bigint;
                        limit?: bigint;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _31.QueryAllBalancesRequest;
            };
            QueryAllBalancesResponse: {
                encode(message: _31.QueryAllBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _31.QueryAllBalancesResponse;
                fromJSON(object: any): _31.QueryAllBalancesResponse;
                toJSON(message: _31.QueryAllBalancesResponse): unknown;
                fromPartial(object: {
                    balances?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: bigint;
                    };
                }): _31.QueryAllBalancesResponse;
            };
            QuerySpendableBalancesRequest: {
                encode(message: _31.QuerySpendableBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _31.QuerySpendableBalancesRequest;
                fromJSON(object: any): _31.QuerySpendableBalancesRequest;
                toJSON(message: _31.QuerySpendableBalancesRequest): unknown;
                fromPartial(object: {
                    address?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: bigint;
                        limit?: bigint;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _31.QuerySpendableBalancesRequest;
            };
            QuerySpendableBalancesResponse: {
                encode(message: _31.QuerySpendableBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _31.QuerySpendableBalancesResponse;
                fromJSON(object: any): _31.QuerySpendableBalancesResponse;
                toJSON(message: _31.QuerySpendableBalancesResponse): unknown;
                fromPartial(object: {
                    balances?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: bigint;
                    };
                }): _31.QuerySpendableBalancesResponse;
            };
            QuerySpendableBalanceByDenomRequest: {
                encode(message: _31.QuerySpendableBalanceByDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _31.QuerySpendableBalanceByDenomRequest;
                fromJSON(object: any): _31.QuerySpendableBalanceByDenomRequest;
                toJSON(message: _31.QuerySpendableBalanceByDenomRequest): unknown;
                fromPartial(object: {
                    address?: string;
                    denom?: string;
                }): _31.QuerySpendableBalanceByDenomRequest;
            };
            QuerySpendableBalanceByDenomResponse: {
                encode(message: _31.QuerySpendableBalanceByDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _31.QuerySpendableBalanceByDenomResponse;
                fromJSON(object: any): _31.QuerySpendableBalanceByDenomResponse;
                toJSON(message: _31.QuerySpendableBalanceByDenomResponse): unknown;
                fromPartial(object: {
                    balance?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _31.QuerySpendableBalanceByDenomResponse;
            };
            QueryTotalSupplyRequest: {
                encode(message: _31.QueryTotalSupplyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _31.QueryTotalSupplyRequest;
                fromJSON(object: any): _31.QueryTotalSupplyRequest;
                toJSON(message: _31.QueryTotalSupplyRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: bigint;
                        limit?: bigint;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _31.QueryTotalSupplyRequest;
            };
            QueryTotalSupplyResponse: {
                encode(message: _31.QueryTotalSupplyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _31.QueryTotalSupplyResponse;
                fromJSON(object: any): _31.QueryTotalSupplyResponse;
                toJSON(message: _31.QueryTotalSupplyResponse): unknown;
                fromPartial(object: {
                    supply?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: bigint;
                    };
                }): _31.QueryTotalSupplyResponse;
            };
            QuerySupplyOfRequest: {
                encode(message: _31.QuerySupplyOfRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _31.QuerySupplyOfRequest;
                fromJSON(object: any): _31.QuerySupplyOfRequest;
                toJSON(message: _31.QuerySupplyOfRequest): unknown;
                fromPartial(object: {
                    denom?: string;
                }): _31.QuerySupplyOfRequest;
            };
            QuerySupplyOfResponse: {
                encode(message: _31.QuerySupplyOfResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _31.QuerySupplyOfResponse;
                fromJSON(object: any): _31.QuerySupplyOfResponse;
                toJSON(message: _31.QuerySupplyOfResponse): unknown;
                fromPartial(object: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _31.QuerySupplyOfResponse;
            };
            QueryParamsRequest: {
                encode(_: _31.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _31.QueryParamsRequest;
                fromJSON(_: any): _31.QueryParamsRequest;
                toJSON(_: _31.QueryParamsRequest): unknown;
                fromPartial(_: {}): _31.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _31.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _31.QueryParamsResponse;
                fromJSON(object: any): _31.QueryParamsResponse;
                toJSON(message: _31.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        sendEnabled?: {
                            denom?: string;
                            enabled?: boolean;
                        }[];
                        defaultSendEnabled?: boolean;
                    };
                }): _31.QueryParamsResponse;
            };
            QueryDenomsMetadataRequest: {
                encode(message: _31.QueryDenomsMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _31.QueryDenomsMetadataRequest;
                fromJSON(object: any): _31.QueryDenomsMetadataRequest;
                toJSON(message: _31.QueryDenomsMetadataRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: bigint;
                        limit?: bigint;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _31.QueryDenomsMetadataRequest;
            };
            QueryDenomsMetadataResponse: {
                encode(message: _31.QueryDenomsMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _31.QueryDenomsMetadataResponse;
                fromJSON(object: any): _31.QueryDenomsMetadataResponse;
                toJSON(message: _31.QueryDenomsMetadataResponse): unknown;
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
                }): _31.QueryDenomsMetadataResponse;
            };
            QueryDenomMetadataRequest: {
                encode(message: _31.QueryDenomMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _31.QueryDenomMetadataRequest;
                fromJSON(object: any): _31.QueryDenomMetadataRequest;
                toJSON(message: _31.QueryDenomMetadataRequest): unknown;
                fromPartial(object: {
                    denom?: string;
                }): _31.QueryDenomMetadataRequest;
            };
            QueryDenomMetadataResponse: {
                encode(message: _31.QueryDenomMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _31.QueryDenomMetadataResponse;
                fromJSON(object: any): _31.QueryDenomMetadataResponse;
                toJSON(message: _31.QueryDenomMetadataResponse): unknown;
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
                }): _31.QueryDenomMetadataResponse;
            };
            QueryDenomOwnersRequest: {
                encode(message: _31.QueryDenomOwnersRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _31.QueryDenomOwnersRequest;
                fromJSON(object: any): _31.QueryDenomOwnersRequest;
                toJSON(message: _31.QueryDenomOwnersRequest): unknown;
                fromPartial(object: {
                    denom?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: bigint;
                        limit?: bigint;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _31.QueryDenomOwnersRequest;
            };
            DenomOwner: {
                encode(message: _31.DenomOwner, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _31.DenomOwner;
                fromJSON(object: any): _31.DenomOwner;
                toJSON(message: _31.DenomOwner): unknown;
                fromPartial(object: {
                    address?: string;
                    balance?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _31.DenomOwner;
            };
            QueryDenomOwnersResponse: {
                encode(message: _31.QueryDenomOwnersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _31.QueryDenomOwnersResponse;
                fromJSON(object: any): _31.QueryDenomOwnersResponse;
                toJSON(message: _31.QueryDenomOwnersResponse): unknown;
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
                }): _31.QueryDenomOwnersResponse;
            };
            QuerySendEnabledRequest: {
                encode(message: _31.QuerySendEnabledRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _31.QuerySendEnabledRequest;
                fromJSON(object: any): _31.QuerySendEnabledRequest;
                toJSON(message: _31.QuerySendEnabledRequest): unknown;
                fromPartial(object: {
                    denoms?: string[];
                    pagination?: {
                        key?: Uint8Array;
                        offset?: bigint;
                        limit?: bigint;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _31.QuerySendEnabledRequest;
            };
            QuerySendEnabledResponse: {
                encode(message: _31.QuerySendEnabledResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _31.QuerySendEnabledResponse;
                fromJSON(object: any): _31.QuerySendEnabledResponse;
                toJSON(message: _31.QuerySendEnabledResponse): unknown;
                fromPartial(object: {
                    sendEnabled?: {
                        denom?: string;
                        enabled?: boolean;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: bigint;
                    };
                }): _31.QuerySendEnabledResponse;
            };
            GenesisState: {
                encode(message: _30.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _30.GenesisState;
                fromJSON(object: any): _30.GenesisState;
                toJSON(message: _30.GenesisState): unknown;
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
                }): _30.GenesisState;
            };
            Balance: {
                encode(message: _30.Balance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _30.Balance;
                fromJSON(object: any): _30.Balance;
                toJSON(message: _30.Balance): unknown;
                fromPartial(object: {
                    address?: string;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _30.Balance;
            };
            Params: {
                encode(message: _29.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _29.Params;
                fromJSON(object: any): _29.Params;
                toJSON(message: _29.Params): unknown;
                fromPartial(object: {
                    sendEnabled?: {
                        denom?: string;
                        enabled?: boolean;
                    }[];
                    defaultSendEnabled?: boolean;
                }): _29.Params;
            };
            SendEnabled: {
                encode(message: _29.SendEnabled, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _29.SendEnabled;
                fromJSON(object: any): _29.SendEnabled;
                toJSON(message: _29.SendEnabled): unknown;
                fromPartial(object: {
                    denom?: string;
                    enabled?: boolean;
                }): _29.SendEnabled;
            };
            Input: {
                encode(message: _29.Input, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _29.Input;
                fromJSON(object: any): _29.Input;
                toJSON(message: _29.Input): unknown;
                fromPartial(object: {
                    address?: string;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _29.Input;
            };
            Output: {
                encode(message: _29.Output, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _29.Output;
                fromJSON(object: any): _29.Output;
                toJSON(message: _29.Output): unknown;
                fromPartial(object: {
                    address?: string;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _29.Output;
            };
            Supply: {
                encode(message: _29.Supply, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _29.Supply;
                fromJSON(object: any): _29.Supply;
                toJSON(message: _29.Supply): unknown;
                fromPartial(object: {
                    total?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _29.Supply;
            };
            DenomUnit: {
                encode(message: _29.DenomUnit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _29.DenomUnit;
                fromJSON(object: any): _29.DenomUnit;
                toJSON(message: _29.DenomUnit): unknown;
                fromPartial(object: {
                    denom?: string;
                    exponent?: number;
                    aliases?: string[];
                }): _29.DenomUnit;
            };
            Metadata: {
                encode(message: _29.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _29.Metadata;
                fromJSON(object: any): _29.Metadata;
                toJSON(message: _29.Metadata): unknown;
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
                }): _29.Metadata;
            };
            SendAuthorization: {
                encode(message: _28.SendAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _28.SendAuthorization;
                fromJSON(object: any): _28.SendAuthorization;
                toJSON(message: _28.SendAuthorization): unknown;
                fromPartial(object: {
                    spendLimit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    allowList?: string[];
                }): _28.SendAuthorization;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    encode(message: _33.TxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _33.TxResponse;
                    fromJSON(object: any): _33.TxResponse;
                    toJSON(message: _33.TxResponse): unknown;
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
                    }): _33.TxResponse;
                };
                ABCIMessageLog: {
                    encode(message: _33.ABCIMessageLog, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _33.ABCIMessageLog;
                    fromJSON(object: any): _33.ABCIMessageLog;
                    toJSON(message: _33.ABCIMessageLog): unknown;
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
                    }): _33.ABCIMessageLog;
                };
                StringEvent: {
                    encode(message: _33.StringEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _33.StringEvent;
                    fromJSON(object: any): _33.StringEvent;
                    toJSON(message: _33.StringEvent): unknown;
                    fromPartial(object: {
                        type?: string;
                        attributes?: {
                            key?: string;
                            value?: string;
                        }[];
                    }): _33.StringEvent;
                };
                Attribute: {
                    encode(message: _33.Attribute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _33.Attribute;
                    fromJSON(object: any): _33.Attribute;
                    toJSON(message: _33.Attribute): unknown;
                    fromPartial(object: {
                        key?: string;
                        value?: string;
                    }): _33.Attribute;
                };
                GasInfo: {
                    encode(message: _33.GasInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _33.GasInfo;
                    fromJSON(object: any): _33.GasInfo;
                    toJSON(message: _33.GasInfo): unknown;
                    fromPartial(object: {
                        gasWanted?: bigint;
                        gasUsed?: bigint;
                    }): _33.GasInfo;
                };
                Result: {
                    encode(message: _33.Result, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _33.Result;
                    fromJSON(object: any): _33.Result;
                    toJSON(message: _33.Result): unknown;
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
                    }): _33.Result;
                };
                SimulationResponse: {
                    encode(message: _33.SimulationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _33.SimulationResponse;
                    fromJSON(object: any): _33.SimulationResponse;
                    toJSON(message: _33.SimulationResponse): unknown;
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
                    }): _33.SimulationResponse;
                };
                MsgData: {
                    encode(message: _33.MsgData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _33.MsgData;
                    fromJSON(object: any): _33.MsgData;
                    toJSON(message: _33.MsgData): unknown;
                    fromPartial(object: {
                        msgType?: string;
                        data?: Uint8Array;
                    }): _33.MsgData;
                };
                TxMsgData: {
                    encode(message: _33.TxMsgData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _33.TxMsgData;
                    fromJSON(object: any): _33.TxMsgData;
                    toJSON(message: _33.TxMsgData): unknown;
                    fromPartial(object: {
                        data?: {
                            msgType?: string;
                            data?: Uint8Array;
                        }[];
                        msgResponses?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                    }): _33.TxMsgData;
                };
                SearchTxsResult: {
                    encode(message: _33.SearchTxsResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _33.SearchTxsResult;
                    fromJSON(object: any): _33.SearchTxsResult;
                    toJSON(message: _33.SearchTxsResult): unknown;
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
                    }): _33.SearchTxsResult;
                };
            };
        }
        namespace node {
            const v1beta1: {
                ServiceClientImpl: typeof _200.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    config(request?: _34.ConfigRequest): Promise<_34.ConfigResponse>;
                };
                LCDQueryClient: typeof _185.LCDQueryClient;
                ConfigRequest: {
                    encode(_: _34.ConfigRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _34.ConfigRequest;
                    fromJSON(_: any): _34.ConfigRequest;
                    toJSON(_: _34.ConfigRequest): unknown;
                    fromPartial(_: {}): _34.ConfigRequest;
                };
                ConfigResponse: {
                    encode(message: _34.ConfigResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _34.ConfigResponse;
                    fromJSON(object: any): _34.ConfigResponse;
                    toJSON(message: _34.ConfigResponse): unknown;
                    fromPartial(object: {
                        minimumGasPrice?: string;
                    }): _34.ConfigResponse;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    encode(message: _35.PageRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _35.PageRequest;
                    fromJSON(object: any): _35.PageRequest;
                    toJSON(message: _35.PageRequest): unknown;
                    fromPartial(object: {
                        key?: Uint8Array;
                        offset?: bigint;
                        limit?: bigint;
                        countTotal?: boolean;
                        reverse?: boolean;
                    }): _35.PageRequest;
                };
                PageResponse: {
                    encode(message: _35.PageResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _35.PageResponse;
                    fromJSON(object: any): _35.PageResponse;
                    toJSON(message: _35.PageResponse): unknown;
                    fromPartial(object: {
                        nextKey?: Uint8Array;
                        total?: bigint;
                    }): _35.PageResponse;
                };
            };
        }
        namespace reflection {
            const v2alpha1: {
                AppDescriptor: {
                    encode(message: _36.AppDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _36.AppDescriptor;
                    fromJSON(object: any): _36.AppDescriptor;
                    toJSON(message: _36.AppDescriptor): unknown;
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
                    }): _36.AppDescriptor;
                };
                TxDescriptor: {
                    encode(message: _36.TxDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _36.TxDescriptor;
                    fromJSON(object: any): _36.TxDescriptor;
                    toJSON(message: _36.TxDescriptor): unknown;
                    fromPartial(object: {
                        fullname?: string;
                        msgs?: {
                            msgTypeUrl?: string;
                        }[];
                    }): _36.TxDescriptor;
                };
                AuthnDescriptor: {
                    encode(message: _36.AuthnDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _36.AuthnDescriptor;
                    fromJSON(object: any): _36.AuthnDescriptor;
                    toJSON(message: _36.AuthnDescriptor): unknown;
                    fromPartial(object: {
                        signModes?: {
                            name?: string;
                            number?: number;
                            authnInfoProviderMethodFullname?: string;
                        }[];
                    }): _36.AuthnDescriptor;
                };
                SigningModeDescriptor: {
                    encode(message: _36.SigningModeDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _36.SigningModeDescriptor;
                    fromJSON(object: any): _36.SigningModeDescriptor;
                    toJSON(message: _36.SigningModeDescriptor): unknown;
                    fromPartial(object: {
                        name?: string;
                        number?: number;
                        authnInfoProviderMethodFullname?: string;
                    }): _36.SigningModeDescriptor;
                };
                ChainDescriptor: {
                    encode(message: _36.ChainDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _36.ChainDescriptor;
                    fromJSON(object: any): _36.ChainDescriptor;
                    toJSON(message: _36.ChainDescriptor): unknown;
                    fromPartial(object: {
                        id?: string;
                    }): _36.ChainDescriptor;
                };
                CodecDescriptor: {
                    encode(message: _36.CodecDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _36.CodecDescriptor;
                    fromJSON(object: any): _36.CodecDescriptor;
                    toJSON(message: _36.CodecDescriptor): unknown;
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
                    }): _36.CodecDescriptor;
                };
                InterfaceDescriptor: {
                    encode(message: _36.InterfaceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _36.InterfaceDescriptor;
                    fromJSON(object: any): _36.InterfaceDescriptor;
                    toJSON(message: _36.InterfaceDescriptor): unknown;
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
                    }): _36.InterfaceDescriptor;
                };
                InterfaceImplementerDescriptor: {
                    encode(message: _36.InterfaceImplementerDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _36.InterfaceImplementerDescriptor;
                    fromJSON(object: any): _36.InterfaceImplementerDescriptor;
                    toJSON(message: _36.InterfaceImplementerDescriptor): unknown;
                    fromPartial(object: {
                        fullname?: string;
                        typeUrl?: string;
                    }): _36.InterfaceImplementerDescriptor;
                };
                InterfaceAcceptingMessageDescriptor: {
                    encode(message: _36.InterfaceAcceptingMessageDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _36.InterfaceAcceptingMessageDescriptor;
                    fromJSON(object: any): _36.InterfaceAcceptingMessageDescriptor;
                    toJSON(message: _36.InterfaceAcceptingMessageDescriptor): unknown;
                    fromPartial(object: {
                        fullname?: string;
                        fieldDescriptorNames?: string[];
                    }): _36.InterfaceAcceptingMessageDescriptor;
                };
                ConfigurationDescriptor: {
                    encode(message: _36.ConfigurationDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _36.ConfigurationDescriptor;
                    fromJSON(object: any): _36.ConfigurationDescriptor;
                    toJSON(message: _36.ConfigurationDescriptor): unknown;
                    fromPartial(object: {
                        bech32AccountAddressPrefix?: string;
                    }): _36.ConfigurationDescriptor;
                };
                MsgDescriptor: {
                    encode(message: _36.MsgDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _36.MsgDescriptor;
                    fromJSON(object: any): _36.MsgDescriptor;
                    toJSON(message: _36.MsgDescriptor): unknown;
                    fromPartial(object: {
                        msgTypeUrl?: string;
                    }): _36.MsgDescriptor;
                };
                GetAuthnDescriptorRequest: {
                    encode(_: _36.GetAuthnDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _36.GetAuthnDescriptorRequest;
                    fromJSON(_: any): _36.GetAuthnDescriptorRequest;
                    toJSON(_: _36.GetAuthnDescriptorRequest): unknown;
                    fromPartial(_: {}): _36.GetAuthnDescriptorRequest;
                };
                GetAuthnDescriptorResponse: {
                    encode(message: _36.GetAuthnDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _36.GetAuthnDescriptorResponse;
                    fromJSON(object: any): _36.GetAuthnDescriptorResponse;
                    toJSON(message: _36.GetAuthnDescriptorResponse): unknown;
                    fromPartial(object: {
                        authn?: {
                            signModes?: {
                                name?: string;
                                number?: number;
                                authnInfoProviderMethodFullname?: string;
                            }[];
                        };
                    }): _36.GetAuthnDescriptorResponse;
                };
                GetChainDescriptorRequest: {
                    encode(_: _36.GetChainDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _36.GetChainDescriptorRequest;
                    fromJSON(_: any): _36.GetChainDescriptorRequest;
                    toJSON(_: _36.GetChainDescriptorRequest): unknown;
                    fromPartial(_: {}): _36.GetChainDescriptorRequest;
                };
                GetChainDescriptorResponse: {
                    encode(message: _36.GetChainDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _36.GetChainDescriptorResponse;
                    fromJSON(object: any): _36.GetChainDescriptorResponse;
                    toJSON(message: _36.GetChainDescriptorResponse): unknown;
                    fromPartial(object: {
                        chain?: {
                            id?: string;
                        };
                    }): _36.GetChainDescriptorResponse;
                };
                GetCodecDescriptorRequest: {
                    encode(_: _36.GetCodecDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _36.GetCodecDescriptorRequest;
                    fromJSON(_: any): _36.GetCodecDescriptorRequest;
                    toJSON(_: _36.GetCodecDescriptorRequest): unknown;
                    fromPartial(_: {}): _36.GetCodecDescriptorRequest;
                };
                GetCodecDescriptorResponse: {
                    encode(message: _36.GetCodecDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _36.GetCodecDescriptorResponse;
                    fromJSON(object: any): _36.GetCodecDescriptorResponse;
                    toJSON(message: _36.GetCodecDescriptorResponse): unknown;
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
                    }): _36.GetCodecDescriptorResponse;
                };
                GetConfigurationDescriptorRequest: {
                    encode(_: _36.GetConfigurationDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _36.GetConfigurationDescriptorRequest;
                    fromJSON(_: any): _36.GetConfigurationDescriptorRequest;
                    toJSON(_: _36.GetConfigurationDescriptorRequest): unknown;
                    fromPartial(_: {}): _36.GetConfigurationDescriptorRequest;
                };
                GetConfigurationDescriptorResponse: {
                    encode(message: _36.GetConfigurationDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _36.GetConfigurationDescriptorResponse;
                    fromJSON(object: any): _36.GetConfigurationDescriptorResponse;
                    toJSON(message: _36.GetConfigurationDescriptorResponse): unknown;
                    fromPartial(object: {
                        config?: {
                            bech32AccountAddressPrefix?: string;
                        };
                    }): _36.GetConfigurationDescriptorResponse;
                };
                GetQueryServicesDescriptorRequest: {
                    encode(_: _36.GetQueryServicesDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _36.GetQueryServicesDescriptorRequest;
                    fromJSON(_: any): _36.GetQueryServicesDescriptorRequest;
                    toJSON(_: _36.GetQueryServicesDescriptorRequest): unknown;
                    fromPartial(_: {}): _36.GetQueryServicesDescriptorRequest;
                };
                GetQueryServicesDescriptorResponse: {
                    encode(message: _36.GetQueryServicesDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _36.GetQueryServicesDescriptorResponse;
                    fromJSON(object: any): _36.GetQueryServicesDescriptorResponse;
                    toJSON(message: _36.GetQueryServicesDescriptorResponse): unknown;
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
                    }): _36.GetQueryServicesDescriptorResponse;
                };
                GetTxDescriptorRequest: {
                    encode(_: _36.GetTxDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _36.GetTxDescriptorRequest;
                    fromJSON(_: any): _36.GetTxDescriptorRequest;
                    toJSON(_: _36.GetTxDescriptorRequest): unknown;
                    fromPartial(_: {}): _36.GetTxDescriptorRequest;
                };
                GetTxDescriptorResponse: {
                    encode(message: _36.GetTxDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _36.GetTxDescriptorResponse;
                    fromJSON(object: any): _36.GetTxDescriptorResponse;
                    toJSON(message: _36.GetTxDescriptorResponse): unknown;
                    fromPartial(object: {
                        tx?: {
                            fullname?: string;
                            msgs?: {
                                msgTypeUrl?: string;
                            }[];
                        };
                    }): _36.GetTxDescriptorResponse;
                };
                QueryServicesDescriptor: {
                    encode(message: _36.QueryServicesDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _36.QueryServicesDescriptor;
                    fromJSON(object: any): _36.QueryServicesDescriptor;
                    toJSON(message: _36.QueryServicesDescriptor): unknown;
                    fromPartial(object: {
                        queryServices?: {
                            fullname?: string;
                            isModule?: boolean;
                            methods?: {
                                name?: string;
                                fullQueryPath?: string;
                            }[];
                        }[];
                    }): _36.QueryServicesDescriptor;
                };
                QueryServiceDescriptor: {
                    encode(message: _36.QueryServiceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _36.QueryServiceDescriptor;
                    fromJSON(object: any): _36.QueryServiceDescriptor;
                    toJSON(message: _36.QueryServiceDescriptor): unknown;
                    fromPartial(object: {
                        fullname?: string;
                        isModule?: boolean;
                        methods?: {
                            name?: string;
                            fullQueryPath?: string;
                        }[];
                    }): _36.QueryServiceDescriptor;
                };
                QueryMethodDescriptor: {
                    encode(message: _36.QueryMethodDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _36.QueryMethodDescriptor;
                    fromJSON(object: any): _36.QueryMethodDescriptor;
                    toJSON(message: _36.QueryMethodDescriptor): unknown;
                    fromPartial(object: {
                        name?: string;
                        fullQueryPath?: string;
                    }): _36.QueryMethodDescriptor;
                };
            };
        }
        const v1beta1: {
            Coin: {
                encode(message: _37.Coin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _37.Coin;
                fromJSON(object: any): _37.Coin;
                toJSON(message: _37.Coin): unknown;
                fromPartial(object: {
                    denom?: string;
                    amount?: string;
                }): _37.Coin;
            };
            DecCoin: {
                encode(message: _37.DecCoin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _37.DecCoin;
                fromJSON(object: any): _37.DecCoin;
                toJSON(message: _37.DecCoin): unknown;
                fromPartial(object: {
                    denom?: string;
                    amount?: string;
                }): _37.DecCoin;
            };
            IntProto: {
                encode(message: _37.IntProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _37.IntProto;
                fromJSON(object: any): _37.IntProto;
                toJSON(message: _37.IntProto): unknown;
                fromPartial(object: {
                    int?: string;
                }): _37.IntProto;
            };
            DecProto: {
                encode(message: _37.DecProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _37.DecProto;
                fromJSON(object: any): _37.DecProto;
                toJSON(message: _37.DecProto): unknown;
                fromPartial(object: {
                    dec?: string;
                }): _37.DecProto;
            };
        };
    }
    namespace capability {
        namespace module {
            const v1: {
                Module: {
                    encode(message: _38.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _38.Module;
                    fromJSON(object: any): _38.Module;
                    toJSON(message: _38.Module): unknown;
                    fromPartial(object: {
                        sealKeeper?: boolean;
                    }): _38.Module;
                };
            };
        }
    }
    namespace consensus {
        namespace module {
            const v1: {
                Module: {
                    encode(message: _39.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _39.Module;
                    fromJSON(object: any): _39.Module;
                    toJSON(message: _39.Module): unknown;
                    fromPartial(object: {
                        authority?: string;
                    }): _39.Module;
                };
            };
        }
        const v1: {
            MsgClientImpl: typeof _215.MsgClientImpl;
            QueryClientImpl: typeof _201.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _40.QueryParamsRequest): Promise<_40.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _186.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    updateParams(value: _41.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    updateParams(value: _41.MsgUpdateParams): {
                        typeUrl: string;
                        value: _41.MsgUpdateParams;
                    };
                };
                toJSON: {
                    updateParams(value: _41.MsgUpdateParams): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _41.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    updateParams(value: _41.MsgUpdateParams): {
                        typeUrl: string;
                        value: _41.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.consensus.v1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: ({ authority, block, evidence, validator }: _41.MsgUpdateParams) => {
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
                    }) => _41.MsgUpdateParams;
                };
            };
            MsgUpdateParams: {
                encode(message: _41.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _41.MsgUpdateParams;
                fromJSON(object: any): _41.MsgUpdateParams;
                toJSON(message: _41.MsgUpdateParams): unknown;
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
                }): _41.MsgUpdateParams;
            };
            MsgUpdateParamsResponse: {
                encode(_: _41.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _41.MsgUpdateParamsResponse;
                fromJSON(_: any): _41.MsgUpdateParamsResponse;
                toJSON(_: _41.MsgUpdateParamsResponse): unknown;
                fromPartial(_: {}): _41.MsgUpdateParamsResponse;
            };
            QueryParamsRequest: {
                encode(_: _40.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _40.QueryParamsRequest;
                fromJSON(_: any): _40.QueryParamsRequest;
                toJSON(_: _40.QueryParamsRequest): unknown;
                fromPartial(_: {}): _40.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _40.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _40.QueryParamsResponse;
                fromJSON(object: any): _40.QueryParamsResponse;
                toJSON(message: _40.QueryParamsResponse): unknown;
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
                }): _40.QueryParamsResponse;
            };
        };
    }
    namespace crisis {
        namespace module {
            const v1: {
                Module: {
                    encode(message: _42.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _42.Module;
                    fromJSON(object: any): _42.Module;
                    toJSON(message: _42.Module): unknown;
                    fromPartial(object: {
                        feeCollectorName?: string;
                        authority?: string;
                    }): _42.Module;
                };
            };
        }
    }
    namespace crypto {
        const ed25519: {
            PubKey: {
                encode(message: _43.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _43.PubKey;
                fromJSON(object: any): _43.PubKey;
                toJSON(message: _43.PubKey): unknown;
                fromPartial(object: {
                    key?: Uint8Array;
                }): _43.PubKey;
            };
            PrivKey: {
                encode(message: _43.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _43.PrivKey;
                fromJSON(object: any): _43.PrivKey;
                toJSON(message: _43.PrivKey): unknown;
                fromPartial(object: {
                    key?: Uint8Array;
                }): _43.PrivKey;
            };
        };
        namespace hd {
            const v1: {
                BIP44Params: {
                    encode(message: _44.BIP44Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _44.BIP44Params;
                    fromJSON(object: any): _44.BIP44Params;
                    toJSON(message: _44.BIP44Params): unknown;
                    fromPartial(object: {
                        purpose?: number;
                        coinType?: number;
                        account?: number;
                        change?: boolean;
                        addressIndex?: number;
                    }): _44.BIP44Params;
                };
            };
        }
        namespace keyring {
            const v1: {
                Record: {
                    encode(message: _45.Record, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _45.Record;
                    fromJSON(object: any): _45.Record;
                    toJSON(message: _45.Record): unknown;
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
                    }): _45.Record;
                };
                Record_Local: {
                    encode(message: _45.Record_Local, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _45.Record_Local;
                    fromJSON(object: any): _45.Record_Local;
                    toJSON(message: _45.Record_Local): unknown;
                    fromPartial(object: {
                        privKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }): _45.Record_Local;
                };
                Record_Ledger: {
                    encode(message: _45.Record_Ledger, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _45.Record_Ledger;
                    fromJSON(object: any): _45.Record_Ledger;
                    toJSON(message: _45.Record_Ledger): unknown;
                    fromPartial(object: {
                        path?: {
                            purpose?: number;
                            coinType?: number;
                            account?: number;
                            change?: boolean;
                            addressIndex?: number;
                        };
                    }): _45.Record_Ledger;
                };
                Record_Multi: {
                    encode(_: _45.Record_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _45.Record_Multi;
                    fromJSON(_: any): _45.Record_Multi;
                    toJSON(_: _45.Record_Multi): unknown;
                    fromPartial(_: {}): _45.Record_Multi;
                };
                Record_Offline: {
                    encode(_: _45.Record_Offline, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _45.Record_Offline;
                    fromJSON(_: any): _45.Record_Offline;
                    toJSON(_: _45.Record_Offline): unknown;
                    fromPartial(_: {}): _45.Record_Offline;
                };
            };
        }
        const multisig: {
            LegacyAminoPubKey: {
                encode(message: _46.LegacyAminoPubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _46.LegacyAminoPubKey;
                fromJSON(object: any): _46.LegacyAminoPubKey;
                toJSON(message: _46.LegacyAminoPubKey): unknown;
                fromPartial(object: {
                    threshold?: number;
                    publicKeys?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                }): _46.LegacyAminoPubKey;
            };
        };
        const secp256k1: {
            PubKey: {
                encode(message: _47.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _47.PubKey;
                fromJSON(object: any): _47.PubKey;
                toJSON(message: _47.PubKey): unknown;
                fromPartial(object: {
                    key?: Uint8Array;
                }): _47.PubKey;
            };
            PrivKey: {
                encode(message: _47.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _47.PrivKey;
                fromJSON(object: any): _47.PrivKey;
                toJSON(message: _47.PrivKey): unknown;
                fromPartial(object: {
                    key?: Uint8Array;
                }): _47.PrivKey;
            };
        };
        const secp256r1: {
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
                    secret?: Uint8Array;
                }): _48.PrivKey;
            };
        };
    }
    namespace distribution {
        namespace module {
            const v1: {
                Module: {
                    encode(message: _49.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _49.Module;
                    fromJSON(object: any): _49.Module;
                    toJSON(message: _49.Module): unknown;
                    fromPartial(object: {
                        feeCollectorName?: string;
                        authority?: string;
                    }): _49.Module;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _216.MsgClientImpl;
            QueryClientImpl: typeof _202.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _52.QueryParamsRequest): Promise<_52.QueryParamsResponse>;
                validatorDistributionInfo(request: _52.QueryValidatorDistributionInfoRequest): Promise<_52.QueryValidatorDistributionInfoResponse>;
                validatorOutstandingRewards(request: _52.QueryValidatorOutstandingRewardsRequest): Promise<_52.QueryValidatorOutstandingRewardsResponse>;
                validatorCommission(request: _52.QueryValidatorCommissionRequest): Promise<_52.QueryValidatorCommissionResponse>;
                validatorSlashes(request: _52.QueryValidatorSlashesRequest): Promise<_52.QueryValidatorSlashesResponse>;
                delegationRewards(request: _52.QueryDelegationRewardsRequest): Promise<_52.QueryDelegationRewardsResponse>;
                delegationTotalRewards(request: _52.QueryDelegationTotalRewardsRequest): Promise<_52.QueryDelegationTotalRewardsResponse>;
                delegatorValidators(request: _52.QueryDelegatorValidatorsRequest): Promise<_52.QueryDelegatorValidatorsResponse>;
                delegatorWithdrawAddress(request: _52.QueryDelegatorWithdrawAddressRequest): Promise<_52.QueryDelegatorWithdrawAddressResponse>;
                communityPool(request?: _52.QueryCommunityPoolRequest): Promise<_52.QueryCommunityPoolResponse>;
            };
            LCDQueryClient: typeof _187.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setWithdrawAddress(value: _53.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegatorReward(value: _53.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawValidatorCommission(value: _53.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    fundCommunityPool(value: _53.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _53.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    communityPoolSpend(value: _53.MsgCommunityPoolSpend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setWithdrawAddress(value: _53.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _53.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _53.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _53.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _53.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _53.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _53.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _53.MsgFundCommunityPool;
                    };
                    updateParams(value: _53.MsgUpdateParams): {
                        typeUrl: string;
                        value: _53.MsgUpdateParams;
                    };
                    communityPoolSpend(value: _53.MsgCommunityPoolSpend): {
                        typeUrl: string;
                        value: _53.MsgCommunityPoolSpend;
                    };
                };
                toJSON: {
                    setWithdrawAddress(value: _53.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: unknown;
                    };
                    withdrawDelegatorReward(value: _53.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: unknown;
                    };
                    withdrawValidatorCommission(value: _53.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: unknown;
                    };
                    fundCommunityPool(value: _53.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateParams(value: _53.MsgUpdateParams): {
                        typeUrl: string;
                        value: unknown;
                    };
                    communityPoolSpend(value: _53.MsgCommunityPoolSpend): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    setWithdrawAddress(value: any): {
                        typeUrl: string;
                        value: _53.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: any): {
                        typeUrl: string;
                        value: _53.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: any): {
                        typeUrl: string;
                        value: _53.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: any): {
                        typeUrl: string;
                        value: _53.MsgFundCommunityPool;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _53.MsgUpdateParams;
                    };
                    communityPoolSpend(value: any): {
                        typeUrl: string;
                        value: _53.MsgCommunityPoolSpend;
                    };
                };
                fromPartial: {
                    setWithdrawAddress(value: _53.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _53.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _53.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _53.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _53.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _53.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _53.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _53.MsgFundCommunityPool;
                    };
                    updateParams(value: _53.MsgUpdateParams): {
                        typeUrl: string;
                        value: _53.MsgUpdateParams;
                    };
                    communityPoolSpend(value: _53.MsgCommunityPoolSpend): {
                        typeUrl: string;
                        value: _53.MsgCommunityPoolSpend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, withdrawAddress }: _53.MsgSetWithdrawAddress) => {
                        delegator_address: string;
                        withdraw_address: string;
                    };
                    fromAmino: ({ delegator_address, withdraw_address }: {
                        delegator_address: string;
                        withdraw_address: string;
                    }) => _53.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress }: _53.MsgWithdrawDelegatorReward) => {
                        delegator_address: string;
                        validator_address: string;
                    };
                    fromAmino: ({ delegator_address, validator_address }: {
                        delegator_address: string;
                        validator_address: string;
                    }) => _53.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: ({ validatorAddress }: _53.MsgWithdrawValidatorCommission) => {
                        validator_address: string;
                    };
                    fromAmino: ({ validator_address }: {
                        validator_address: string;
                    }) => _53.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: ({ amount, depositor }: _53.MsgFundCommunityPool) => {
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
                    }) => _53.MsgFundCommunityPool;
                };
                "/cosmos.distribution.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: ({ authority, params }: _53.MsgUpdateParams) => {
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
                    }) => _53.MsgUpdateParams;
                };
                "/cosmos.distribution.v1beta1.MsgCommunityPoolSpend": {
                    aminoType: string;
                    toAmino: ({ authority, recipient, amount }: _53.MsgCommunityPoolSpend) => {
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
                    }) => _53.MsgCommunityPoolSpend;
                };
            };
            MsgSetWithdrawAddress: {
                encode(message: _53.MsgSetWithdrawAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _53.MsgSetWithdrawAddress;
                fromJSON(object: any): _53.MsgSetWithdrawAddress;
                toJSON(message: _53.MsgSetWithdrawAddress): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                    withdrawAddress?: string;
                }): _53.MsgSetWithdrawAddress;
            };
            MsgSetWithdrawAddressResponse: {
                encode(_: _53.MsgSetWithdrawAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _53.MsgSetWithdrawAddressResponse;
                fromJSON(_: any): _53.MsgSetWithdrawAddressResponse;
                toJSON(_: _53.MsgSetWithdrawAddressResponse): unknown;
                fromPartial(_: {}): _53.MsgSetWithdrawAddressResponse;
            };
            MsgWithdrawDelegatorReward: {
                encode(message: _53.MsgWithdrawDelegatorReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _53.MsgWithdrawDelegatorReward;
                fromJSON(object: any): _53.MsgWithdrawDelegatorReward;
                toJSON(message: _53.MsgWithdrawDelegatorReward): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                }): _53.MsgWithdrawDelegatorReward;
            };
            MsgWithdrawDelegatorRewardResponse: {
                encode(message: _53.MsgWithdrawDelegatorRewardResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _53.MsgWithdrawDelegatorRewardResponse;
                fromJSON(object: any): _53.MsgWithdrawDelegatorRewardResponse;
                toJSON(message: _53.MsgWithdrawDelegatorRewardResponse): unknown;
                fromPartial(object: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _53.MsgWithdrawDelegatorRewardResponse;
            };
            MsgWithdrawValidatorCommission: {
                encode(message: _53.MsgWithdrawValidatorCommission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _53.MsgWithdrawValidatorCommission;
                fromJSON(object: any): _53.MsgWithdrawValidatorCommission;
                toJSON(message: _53.MsgWithdrawValidatorCommission): unknown;
                fromPartial(object: {
                    validatorAddress?: string;
                }): _53.MsgWithdrawValidatorCommission;
            };
            MsgWithdrawValidatorCommissionResponse: {
                encode(message: _53.MsgWithdrawValidatorCommissionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _53.MsgWithdrawValidatorCommissionResponse;
                fromJSON(object: any): _53.MsgWithdrawValidatorCommissionResponse;
                toJSON(message: _53.MsgWithdrawValidatorCommissionResponse): unknown;
                fromPartial(object: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _53.MsgWithdrawValidatorCommissionResponse;
            };
            MsgFundCommunityPool: {
                encode(message: _53.MsgFundCommunityPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _53.MsgFundCommunityPool;
                fromJSON(object: any): _53.MsgFundCommunityPool;
                toJSON(message: _53.MsgFundCommunityPool): unknown;
                fromPartial(object: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    depositor?: string;
                }): _53.MsgFundCommunityPool;
            };
            MsgFundCommunityPoolResponse: {
                encode(_: _53.MsgFundCommunityPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _53.MsgFundCommunityPoolResponse;
                fromJSON(_: any): _53.MsgFundCommunityPoolResponse;
                toJSON(_: _53.MsgFundCommunityPoolResponse): unknown;
                fromPartial(_: {}): _53.MsgFundCommunityPoolResponse;
            };
            MsgUpdateParams: {
                encode(message: _53.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _53.MsgUpdateParams;
                fromJSON(object: any): _53.MsgUpdateParams;
                toJSON(message: _53.MsgUpdateParams): unknown;
                fromPartial(object: {
                    authority?: string;
                    params?: {
                        communityTax?: string;
                        baseProposerReward?: string;
                        bonusProposerReward?: string;
                        withdrawAddrEnabled?: boolean;
                    };
                }): _53.MsgUpdateParams;
            };
            MsgUpdateParamsResponse: {
                encode(_: _53.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _53.MsgUpdateParamsResponse;
                fromJSON(_: any): _53.MsgUpdateParamsResponse;
                toJSON(_: _53.MsgUpdateParamsResponse): unknown;
                fromPartial(_: {}): _53.MsgUpdateParamsResponse;
            };
            MsgCommunityPoolSpend: {
                encode(message: _53.MsgCommunityPoolSpend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _53.MsgCommunityPoolSpend;
                fromJSON(object: any): _53.MsgCommunityPoolSpend;
                toJSON(message: _53.MsgCommunityPoolSpend): unknown;
                fromPartial(object: {
                    authority?: string;
                    recipient?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _53.MsgCommunityPoolSpend;
            };
            MsgCommunityPoolSpendResponse: {
                encode(_: _53.MsgCommunityPoolSpendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _53.MsgCommunityPoolSpendResponse;
                fromJSON(_: any): _53.MsgCommunityPoolSpendResponse;
                toJSON(_: _53.MsgCommunityPoolSpendResponse): unknown;
                fromPartial(_: {}): _53.MsgCommunityPoolSpendResponse;
            };
            QueryParamsRequest: {
                encode(_: _52.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _52.QueryParamsRequest;
                fromJSON(_: any): _52.QueryParamsRequest;
                toJSON(_: _52.QueryParamsRequest): unknown;
                fromPartial(_: {}): _52.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _52.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _52.QueryParamsResponse;
                fromJSON(object: any): _52.QueryParamsResponse;
                toJSON(message: _52.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        communityTax?: string;
                        baseProposerReward?: string;
                        bonusProposerReward?: string;
                        withdrawAddrEnabled?: boolean;
                    };
                }): _52.QueryParamsResponse;
            };
            QueryValidatorDistributionInfoRequest: {
                encode(message: _52.QueryValidatorDistributionInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _52.QueryValidatorDistributionInfoRequest;
                fromJSON(object: any): _52.QueryValidatorDistributionInfoRequest;
                toJSON(message: _52.QueryValidatorDistributionInfoRequest): unknown;
                fromPartial(object: {
                    validatorAddress?: string;
                }): _52.QueryValidatorDistributionInfoRequest;
            };
            QueryValidatorDistributionInfoResponse: {
                encode(message: _52.QueryValidatorDistributionInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _52.QueryValidatorDistributionInfoResponse;
                fromJSON(object: any): _52.QueryValidatorDistributionInfoResponse;
                toJSON(message: _52.QueryValidatorDistributionInfoResponse): unknown;
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
                }): _52.QueryValidatorDistributionInfoResponse;
            };
            QueryValidatorOutstandingRewardsRequest: {
                encode(message: _52.QueryValidatorOutstandingRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _52.QueryValidatorOutstandingRewardsRequest;
                fromJSON(object: any): _52.QueryValidatorOutstandingRewardsRequest;
                toJSON(message: _52.QueryValidatorOutstandingRewardsRequest): unknown;
                fromPartial(object: {
                    validatorAddress?: string;
                }): _52.QueryValidatorOutstandingRewardsRequest;
            };
            QueryValidatorOutstandingRewardsResponse: {
                encode(message: _52.QueryValidatorOutstandingRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _52.QueryValidatorOutstandingRewardsResponse;
                fromJSON(object: any): _52.QueryValidatorOutstandingRewardsResponse;
                toJSON(message: _52.QueryValidatorOutstandingRewardsResponse): unknown;
                fromPartial(object: {
                    rewards?: {
                        rewards?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                }): _52.QueryValidatorOutstandingRewardsResponse;
            };
            QueryValidatorCommissionRequest: {
                encode(message: _52.QueryValidatorCommissionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _52.QueryValidatorCommissionRequest;
                fromJSON(object: any): _52.QueryValidatorCommissionRequest;
                toJSON(message: _52.QueryValidatorCommissionRequest): unknown;
                fromPartial(object: {
                    validatorAddress?: string;
                }): _52.QueryValidatorCommissionRequest;
            };
            QueryValidatorCommissionResponse: {
                encode(message: _52.QueryValidatorCommissionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _52.QueryValidatorCommissionResponse;
                fromJSON(object: any): _52.QueryValidatorCommissionResponse;
                toJSON(message: _52.QueryValidatorCommissionResponse): unknown;
                fromPartial(object: {
                    commission?: {
                        commission?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                }): _52.QueryValidatorCommissionResponse;
            };
            QueryValidatorSlashesRequest: {
                encode(message: _52.QueryValidatorSlashesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _52.QueryValidatorSlashesRequest;
                fromJSON(object: any): _52.QueryValidatorSlashesRequest;
                toJSON(message: _52.QueryValidatorSlashesRequest): unknown;
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
                }): _52.QueryValidatorSlashesRequest;
            };
            QueryValidatorSlashesResponse: {
                encode(message: _52.QueryValidatorSlashesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _52.QueryValidatorSlashesResponse;
                fromJSON(object: any): _52.QueryValidatorSlashesResponse;
                toJSON(message: _52.QueryValidatorSlashesResponse): unknown;
                fromPartial(object: {
                    slashes?: {
                        validatorPeriod?: bigint;
                        fraction?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: bigint;
                    };
                }): _52.QueryValidatorSlashesResponse;
            };
            QueryDelegationRewardsRequest: {
                encode(message: _52.QueryDelegationRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _52.QueryDelegationRewardsRequest;
                fromJSON(object: any): _52.QueryDelegationRewardsRequest;
                toJSON(message: _52.QueryDelegationRewardsRequest): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                }): _52.QueryDelegationRewardsRequest;
            };
            QueryDelegationRewardsResponse: {
                encode(message: _52.QueryDelegationRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _52.QueryDelegationRewardsResponse;
                fromJSON(object: any): _52.QueryDelegationRewardsResponse;
                toJSON(message: _52.QueryDelegationRewardsResponse): unknown;
                fromPartial(object: {
                    rewards?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _52.QueryDelegationRewardsResponse;
            };
            QueryDelegationTotalRewardsRequest: {
                encode(message: _52.QueryDelegationTotalRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _52.QueryDelegationTotalRewardsRequest;
                fromJSON(object: any): _52.QueryDelegationTotalRewardsRequest;
                toJSON(message: _52.QueryDelegationTotalRewardsRequest): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                }): _52.QueryDelegationTotalRewardsRequest;
            };
            QueryDelegationTotalRewardsResponse: {
                encode(message: _52.QueryDelegationTotalRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _52.QueryDelegationTotalRewardsResponse;
                fromJSON(object: any): _52.QueryDelegationTotalRewardsResponse;
                toJSON(message: _52.QueryDelegationTotalRewardsResponse): unknown;
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
                }): _52.QueryDelegationTotalRewardsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _52.QueryDelegatorValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _52.QueryDelegatorValidatorsRequest;
                fromJSON(object: any): _52.QueryDelegatorValidatorsRequest;
                toJSON(message: _52.QueryDelegatorValidatorsRequest): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                }): _52.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _52.QueryDelegatorValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _52.QueryDelegatorValidatorsResponse;
                fromJSON(object: any): _52.QueryDelegatorValidatorsResponse;
                toJSON(message: _52.QueryDelegatorValidatorsResponse): unknown;
                fromPartial(object: {
                    validators?: string[];
                }): _52.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorWithdrawAddressRequest: {
                encode(message: _52.QueryDelegatorWithdrawAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _52.QueryDelegatorWithdrawAddressRequest;
                fromJSON(object: any): _52.QueryDelegatorWithdrawAddressRequest;
                toJSON(message: _52.QueryDelegatorWithdrawAddressRequest): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                }): _52.QueryDelegatorWithdrawAddressRequest;
            };
            QueryDelegatorWithdrawAddressResponse: {
                encode(message: _52.QueryDelegatorWithdrawAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _52.QueryDelegatorWithdrawAddressResponse;
                fromJSON(object: any): _52.QueryDelegatorWithdrawAddressResponse;
                toJSON(message: _52.QueryDelegatorWithdrawAddressResponse): unknown;
                fromPartial(object: {
                    withdrawAddress?: string;
                }): _52.QueryDelegatorWithdrawAddressResponse;
            };
            QueryCommunityPoolRequest: {
                encode(_: _52.QueryCommunityPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _52.QueryCommunityPoolRequest;
                fromJSON(_: any): _52.QueryCommunityPoolRequest;
                toJSON(_: _52.QueryCommunityPoolRequest): unknown;
                fromPartial(_: {}): _52.QueryCommunityPoolRequest;
            };
            QueryCommunityPoolResponse: {
                encode(message: _52.QueryCommunityPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _52.QueryCommunityPoolResponse;
                fromJSON(object: any): _52.QueryCommunityPoolResponse;
                toJSON(message: _52.QueryCommunityPoolResponse): unknown;
                fromPartial(object: {
                    pool?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _52.QueryCommunityPoolResponse;
            };
            DelegatorWithdrawInfo: {
                encode(message: _51.DelegatorWithdrawInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _51.DelegatorWithdrawInfo;
                fromJSON(object: any): _51.DelegatorWithdrawInfo;
                toJSON(message: _51.DelegatorWithdrawInfo): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                    withdrawAddress?: string;
                }): _51.DelegatorWithdrawInfo;
            };
            ValidatorOutstandingRewardsRecord: {
                encode(message: _51.ValidatorOutstandingRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _51.ValidatorOutstandingRewardsRecord;
                fromJSON(object: any): _51.ValidatorOutstandingRewardsRecord;
                toJSON(message: _51.ValidatorOutstandingRewardsRecord): unknown;
                fromPartial(object: {
                    validatorAddress?: string;
                    outstandingRewards?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _51.ValidatorOutstandingRewardsRecord;
            };
            ValidatorAccumulatedCommissionRecord: {
                encode(message: _51.ValidatorAccumulatedCommissionRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _51.ValidatorAccumulatedCommissionRecord;
                fromJSON(object: any): _51.ValidatorAccumulatedCommissionRecord;
                toJSON(message: _51.ValidatorAccumulatedCommissionRecord): unknown;
                fromPartial(object: {
                    validatorAddress?: string;
                    accumulated?: {
                        commission?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                }): _51.ValidatorAccumulatedCommissionRecord;
            };
            ValidatorHistoricalRewardsRecord: {
                encode(message: _51.ValidatorHistoricalRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _51.ValidatorHistoricalRewardsRecord;
                fromJSON(object: any): _51.ValidatorHistoricalRewardsRecord;
                toJSON(message: _51.ValidatorHistoricalRewardsRecord): unknown;
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
                }): _51.ValidatorHistoricalRewardsRecord;
            };
            ValidatorCurrentRewardsRecord: {
                encode(message: _51.ValidatorCurrentRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _51.ValidatorCurrentRewardsRecord;
                fromJSON(object: any): _51.ValidatorCurrentRewardsRecord;
                toJSON(message: _51.ValidatorCurrentRewardsRecord): unknown;
                fromPartial(object: {
                    validatorAddress?: string;
                    rewards?: {
                        rewards?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        period?: bigint;
                    };
                }): _51.ValidatorCurrentRewardsRecord;
            };
            DelegatorStartingInfoRecord: {
                encode(message: _51.DelegatorStartingInfoRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _51.DelegatorStartingInfoRecord;
                fromJSON(object: any): _51.DelegatorStartingInfoRecord;
                toJSON(message: _51.DelegatorStartingInfoRecord): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                    startingInfo?: {
                        previousPeriod?: bigint;
                        stake?: string;
                        height?: bigint;
                    };
                }): _51.DelegatorStartingInfoRecord;
            };
            ValidatorSlashEventRecord: {
                encode(message: _51.ValidatorSlashEventRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _51.ValidatorSlashEventRecord;
                fromJSON(object: any): _51.ValidatorSlashEventRecord;
                toJSON(message: _51.ValidatorSlashEventRecord): unknown;
                fromPartial(object: {
                    validatorAddress?: string;
                    height?: bigint;
                    period?: bigint;
                    validatorSlashEvent?: {
                        validatorPeriod?: bigint;
                        fraction?: string;
                    };
                }): _51.ValidatorSlashEventRecord;
            };
            GenesisState: {
                encode(message: _51.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _51.GenesisState;
                fromJSON(object: any): _51.GenesisState;
                toJSON(message: _51.GenesisState): unknown;
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
                }): _51.GenesisState;
            };
            Params: {
                encode(message: _50.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _50.Params;
                fromJSON(object: any): _50.Params;
                toJSON(message: _50.Params): unknown;
                fromPartial(object: {
                    communityTax?: string;
                    baseProposerReward?: string;
                    bonusProposerReward?: string;
                    withdrawAddrEnabled?: boolean;
                }): _50.Params;
            };
            ValidatorHistoricalRewards: {
                encode(message: _50.ValidatorHistoricalRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _50.ValidatorHistoricalRewards;
                fromJSON(object: any): _50.ValidatorHistoricalRewards;
                toJSON(message: _50.ValidatorHistoricalRewards): unknown;
                fromPartial(object: {
                    cumulativeRewardRatio?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    referenceCount?: number;
                }): _50.ValidatorHistoricalRewards;
            };
            ValidatorCurrentRewards: {
                encode(message: _50.ValidatorCurrentRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _50.ValidatorCurrentRewards;
                fromJSON(object: any): _50.ValidatorCurrentRewards;
                toJSON(message: _50.ValidatorCurrentRewards): unknown;
                fromPartial(object: {
                    rewards?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    period?: bigint;
                }): _50.ValidatorCurrentRewards;
            };
            ValidatorAccumulatedCommission: {
                encode(message: _50.ValidatorAccumulatedCommission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _50.ValidatorAccumulatedCommission;
                fromJSON(object: any): _50.ValidatorAccumulatedCommission;
                toJSON(message: _50.ValidatorAccumulatedCommission): unknown;
                fromPartial(object: {
                    commission?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _50.ValidatorAccumulatedCommission;
            };
            ValidatorOutstandingRewards: {
                encode(message: _50.ValidatorOutstandingRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _50.ValidatorOutstandingRewards;
                fromJSON(object: any): _50.ValidatorOutstandingRewards;
                toJSON(message: _50.ValidatorOutstandingRewards): unknown;
                fromPartial(object: {
                    rewards?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _50.ValidatorOutstandingRewards;
            };
            ValidatorSlashEvent: {
                encode(message: _50.ValidatorSlashEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _50.ValidatorSlashEvent;
                fromJSON(object: any): _50.ValidatorSlashEvent;
                toJSON(message: _50.ValidatorSlashEvent): unknown;
                fromPartial(object: {
                    validatorPeriod?: bigint;
                    fraction?: string;
                }): _50.ValidatorSlashEvent;
            };
            ValidatorSlashEvents: {
                encode(message: _50.ValidatorSlashEvents, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _50.ValidatorSlashEvents;
                fromJSON(object: any): _50.ValidatorSlashEvents;
                toJSON(message: _50.ValidatorSlashEvents): unknown;
                fromPartial(object: {
                    validatorSlashEvents?: {
                        validatorPeriod?: bigint;
                        fraction?: string;
                    }[];
                }): _50.ValidatorSlashEvents;
            };
            FeePool: {
                encode(message: _50.FeePool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _50.FeePool;
                fromJSON(object: any): _50.FeePool;
                toJSON(message: _50.FeePool): unknown;
                fromPartial(object: {
                    communityPool?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _50.FeePool;
            };
            CommunityPoolSpendProposal: {
                encode(message: _50.CommunityPoolSpendProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _50.CommunityPoolSpendProposal;
                fromJSON(object: any): _50.CommunityPoolSpendProposal;
                toJSON(message: _50.CommunityPoolSpendProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    recipient?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _50.CommunityPoolSpendProposal;
            };
            DelegatorStartingInfo: {
                encode(message: _50.DelegatorStartingInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _50.DelegatorStartingInfo;
                fromJSON(object: any): _50.DelegatorStartingInfo;
                toJSON(message: _50.DelegatorStartingInfo): unknown;
                fromPartial(object: {
                    previousPeriod?: bigint;
                    stake?: string;
                    height?: bigint;
                }): _50.DelegatorStartingInfo;
            };
            DelegationDelegatorReward: {
                encode(message: _50.DelegationDelegatorReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _50.DelegationDelegatorReward;
                fromJSON(object: any): _50.DelegationDelegatorReward;
                toJSON(message: _50.DelegationDelegatorReward): unknown;
                fromPartial(object: {
                    validatorAddress?: string;
                    reward?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _50.DelegationDelegatorReward;
            };
            CommunityPoolSpendProposalWithDeposit: {
                encode(message: _50.CommunityPoolSpendProposalWithDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _50.CommunityPoolSpendProposalWithDeposit;
                fromJSON(object: any): _50.CommunityPoolSpendProposalWithDeposit;
                toJSON(message: _50.CommunityPoolSpendProposalWithDeposit): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    recipient?: string;
                    amount?: string;
                    deposit?: string;
                }): _50.CommunityPoolSpendProposalWithDeposit;
            };
        };
    }
    namespace evidence {
        namespace module {
            const v1: {
                Module: {
                    encode(_: _54.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _54.Module;
                    fromJSON(_: any): _54.Module;
                    toJSON(_: _54.Module): unknown;
                    fromPartial(_: {}): _54.Module;
                };
            };
        }
    }
    namespace feegrant {
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
        const v1beta1: {
            MsgClientImpl: typeof _217.MsgClientImpl;
            QueryClientImpl: typeof _203.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                allowance(request: _58.QueryAllowanceRequest): Promise<_58.QueryAllowanceResponse>;
                allowances(request: _58.QueryAllowancesRequest): Promise<_58.QueryAllowancesResponse>;
                allowancesByGranter(request: _58.QueryAllowancesByGranterRequest): Promise<_58.QueryAllowancesByGranterResponse>;
            };
            LCDQueryClient: typeof _188.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grantAllowance(value: _59.MsgGrantAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revokeAllowance(value: _59.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grantAllowance(value: _59.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _59.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _59.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _59.MsgRevokeAllowance;
                    };
                };
                toJSON: {
                    grantAllowance(value: _59.MsgGrantAllowance): {
                        typeUrl: string;
                        value: unknown;
                    };
                    revokeAllowance(value: _59.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    grantAllowance(value: any): {
                        typeUrl: string;
                        value: _59.MsgGrantAllowance;
                    };
                    revokeAllowance(value: any): {
                        typeUrl: string;
                        value: _59.MsgRevokeAllowance;
                    };
                };
                fromPartial: {
                    grantAllowance(value: _59.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _59.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _59.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _59.MsgRevokeAllowance;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, allowance }: _59.MsgGrantAllowance) => {
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
                    }) => _59.MsgGrantAllowance;
                };
                "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
                    aminoType: string;
                    toAmino: ({ granter, grantee }: _59.MsgRevokeAllowance) => {
                        granter: string;
                        grantee: string;
                    };
                    fromAmino: ({ granter, grantee }: {
                        granter: string;
                        grantee: string;
                    }) => _59.MsgRevokeAllowance;
                };
            };
            MsgGrantAllowance: {
                encode(message: _59.MsgGrantAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _59.MsgGrantAllowance;
                fromJSON(object: any): _59.MsgGrantAllowance;
                toJSON(message: _59.MsgGrantAllowance): unknown;
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
                }): _59.MsgGrantAllowance;
            };
            MsgGrantAllowanceResponse: {
                encode(_: _59.MsgGrantAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _59.MsgGrantAllowanceResponse;
                fromJSON(_: any): _59.MsgGrantAllowanceResponse;
                toJSON(_: _59.MsgGrantAllowanceResponse): unknown;
                fromPartial(_: {}): _59.MsgGrantAllowanceResponse;
            };
            MsgRevokeAllowance: {
                encode(message: _59.MsgRevokeAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _59.MsgRevokeAllowance;
                fromJSON(object: any): _59.MsgRevokeAllowance;
                toJSON(message: _59.MsgRevokeAllowance): unknown;
                fromPartial(object: {
                    granter?: string;
                    grantee?: string;
                }): _59.MsgRevokeAllowance;
            };
            MsgRevokeAllowanceResponse: {
                encode(_: _59.MsgRevokeAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _59.MsgRevokeAllowanceResponse;
                fromJSON(_: any): _59.MsgRevokeAllowanceResponse;
                toJSON(_: _59.MsgRevokeAllowanceResponse): unknown;
                fromPartial(_: {}): _59.MsgRevokeAllowanceResponse;
            };
            Cosmos_feegrantv1beta1FeeAllowanceI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _56.BasicAllowance | _56.PeriodicAllowance | _56.AllowedMsgAllowance;
            QueryAllowanceRequest: {
                encode(message: _58.QueryAllowanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _58.QueryAllowanceRequest;
                fromJSON(object: any): _58.QueryAllowanceRequest;
                toJSON(message: _58.QueryAllowanceRequest): unknown;
                fromPartial(object: {
                    granter?: string;
                    grantee?: string;
                }): _58.QueryAllowanceRequest;
            };
            QueryAllowanceResponse: {
                encode(message: _58.QueryAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _58.QueryAllowanceResponse;
                fromJSON(object: any): _58.QueryAllowanceResponse;
                toJSON(message: _58.QueryAllowanceResponse): unknown;
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
                }): _58.QueryAllowanceResponse;
            };
            QueryAllowancesRequest: {
                encode(message: _58.QueryAllowancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _58.QueryAllowancesRequest;
                fromJSON(object: any): _58.QueryAllowancesRequest;
                toJSON(message: _58.QueryAllowancesRequest): unknown;
                fromPartial(object: {
                    grantee?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: bigint;
                        limit?: bigint;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _58.QueryAllowancesRequest;
            };
            QueryAllowancesResponse: {
                encode(message: _58.QueryAllowancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _58.QueryAllowancesResponse;
                fromJSON(object: any): _58.QueryAllowancesResponse;
                toJSON(message: _58.QueryAllowancesResponse): unknown;
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
                }): _58.QueryAllowancesResponse;
            };
            QueryAllowancesByGranterRequest: {
                encode(message: _58.QueryAllowancesByGranterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _58.QueryAllowancesByGranterRequest;
                fromJSON(object: any): _58.QueryAllowancesByGranterRequest;
                toJSON(message: _58.QueryAllowancesByGranterRequest): unknown;
                fromPartial(object: {
                    granter?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: bigint;
                        limit?: bigint;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _58.QueryAllowancesByGranterRequest;
            };
            QueryAllowancesByGranterResponse: {
                encode(message: _58.QueryAllowancesByGranterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _58.QueryAllowancesByGranterResponse;
                fromJSON(object: any): _58.QueryAllowancesByGranterResponse;
                toJSON(message: _58.QueryAllowancesByGranterResponse): unknown;
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
                }): _58.QueryAllowancesByGranterResponse;
            };
            GenesisState: {
                encode(message: _57.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _57.GenesisState;
                fromJSON(object: any): _57.GenesisState;
                toJSON(message: _57.GenesisState): unknown;
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
                }): _57.GenesisState;
            };
            BasicAllowance: {
                encode(message: _56.BasicAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _56.BasicAllowance;
                fromJSON(object: any): _56.BasicAllowance;
                toJSON(message: _56.BasicAllowance): unknown;
                fromPartial(object: {
                    spendLimit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    expiration?: {
                        seconds?: bigint;
                        nanos?: number;
                    };
                }): _56.BasicAllowance;
            };
            PeriodicAllowance: {
                encode(message: _56.PeriodicAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _56.PeriodicAllowance;
                fromJSON(object: any): _56.PeriodicAllowance;
                toJSON(message: _56.PeriodicAllowance): unknown;
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
                }): _56.PeriodicAllowance;
            };
            AllowedMsgAllowance: {
                encode(message: _56.AllowedMsgAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _56.AllowedMsgAllowance;
                fromJSON(object: any): _56.AllowedMsgAllowance;
                toJSON(message: _56.AllowedMsgAllowance): unknown;
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
                }): _56.AllowedMsgAllowance;
            };
            Grant: {
                encode(message: _56.Grant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _56.Grant;
                fromJSON(object: any): _56.Grant;
                toJSON(message: _56.Grant): unknown;
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
                }): _56.Grant;
            };
        };
    }
    namespace genutil {
        namespace module {
            const v1: {
                Module: {
                    encode(_: _60.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _60.Module;
                    fromJSON(_: any): _60.Module;
                    toJSON(_: _60.Module): unknown;
                    fromPartial(_: {}): _60.Module;
                };
            };
        }
    }
    namespace gov {
        namespace module {
            const v1: {
                Module: {
                    encode(message: _61.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _61.Module;
                    fromJSON(object: any): _61.Module;
                    toJSON(message: _61.Module): unknown;
                    fromPartial(object: {
                        maxMetadataLen?: bigint;
                        authority?: string;
                    }): _61.Module;
                };
            };
        }
        const v1: {
            MsgClientImpl: typeof _218.MsgClientImpl;
            QueryClientImpl: typeof _204.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _64.QueryProposalRequest): Promise<_64.QueryProposalResponse>;
                proposals(request: _64.QueryProposalsRequest): Promise<_64.QueryProposalsResponse>;
                vote(request: _64.QueryVoteRequest): Promise<_64.QueryVoteResponse>;
                votes(request: _64.QueryVotesRequest): Promise<_64.QueryVotesResponse>;
                params(request: _64.QueryParamsRequest): Promise<_64.QueryParamsResponse>;
                deposit(request: _64.QueryDepositRequest): Promise<_64.QueryDepositResponse>;
                deposits(request: _64.QueryDepositsRequest): Promise<_64.QueryDepositsResponse>;
                tallyResult(request: _64.QueryTallyResultRequest): Promise<_64.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _189.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _65.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    execLegacyContent(value: _65.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _65.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _65.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _65.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _65.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _65.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _65.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _65.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _65.MsgExecLegacyContent;
                    };
                    vote(value: _65.MsgVote): {
                        typeUrl: string;
                        value: _65.MsgVote;
                    };
                    voteWeighted(value: _65.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _65.MsgVoteWeighted;
                    };
                    deposit(value: _65.MsgDeposit): {
                        typeUrl: string;
                        value: _65.MsgDeposit;
                    };
                    updateParams(value: _65.MsgUpdateParams): {
                        typeUrl: string;
                        value: _65.MsgUpdateParams;
                    };
                };
                toJSON: {
                    submitProposal(value: _65.MsgSubmitProposal): {
                        typeUrl: string;
                        value: unknown;
                    };
                    execLegacyContent(value: _65.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: unknown;
                    };
                    vote(value: _65.MsgVote): {
                        typeUrl: string;
                        value: unknown;
                    };
                    voteWeighted(value: _65.MsgVoteWeighted): {
                        typeUrl: string;
                        value: unknown;
                    };
                    deposit(value: _65.MsgDeposit): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateParams(value: _65.MsgUpdateParams): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _65.MsgSubmitProposal;
                    };
                    execLegacyContent(value: any): {
                        typeUrl: string;
                        value: _65.MsgExecLegacyContent;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _65.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _65.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _65.MsgDeposit;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _65.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    submitProposal(value: _65.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _65.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _65.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _65.MsgExecLegacyContent;
                    };
                    vote(value: _65.MsgVote): {
                        typeUrl: string;
                        value: _65.MsgVote;
                    };
                    voteWeighted(value: _65.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _65.MsgVoteWeighted;
                    };
                    deposit(value: _65.MsgDeposit): {
                        typeUrl: string;
                        value: _65.MsgDeposit;
                    };
                    updateParams(value: _65.MsgUpdateParams): {
                        typeUrl: string;
                        value: _65.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ messages, initialDeposit, proposer, metadata, title, summary }: _65.MsgSubmitProposal) => {
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
                    }) => _65.MsgSubmitProposal;
                };
                "/cosmos.gov.v1.MsgExecLegacyContent": {
                    aminoType: string;
                    toAmino: ({ content, authority }: _65.MsgExecLegacyContent) => {
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
                    }) => _65.MsgExecLegacyContent;
                };
                "/cosmos.gov.v1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, option, metadata }: _65.MsgVote) => {
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
                    }) => _65.MsgVote;
                };
                "/cosmos.gov.v1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, options, metadata }: _65.MsgVoteWeighted) => {
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
                    }) => _65.MsgVoteWeighted;
                };
                "/cosmos.gov.v1.MsgDeposit": {
                    aminoType: string;
                    toAmino: ({ proposalId, depositor, amount }: _65.MsgDeposit) => {
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
                    }) => _65.MsgDeposit;
                };
                "/cosmos.gov.v1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: ({ authority, params }: _65.MsgUpdateParams) => {
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
                    }) => _65.MsgUpdateParams;
                };
            };
            MsgSubmitProposal: {
                encode(message: _65.MsgSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _65.MsgSubmitProposal;
                fromJSON(object: any): _65.MsgSubmitProposal;
                toJSON(message: _65.MsgSubmitProposal): unknown;
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
                }): _65.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _65.MsgSubmitProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _65.MsgSubmitProposalResponse;
                fromJSON(object: any): _65.MsgSubmitProposalResponse;
                toJSON(message: _65.MsgSubmitProposalResponse): unknown;
                fromPartial(object: {
                    proposalId?: bigint;
                }): _65.MsgSubmitProposalResponse;
            };
            MsgExecLegacyContent: {
                encode(message: _65.MsgExecLegacyContent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _65.MsgExecLegacyContent;
                fromJSON(object: any): _65.MsgExecLegacyContent;
                toJSON(message: _65.MsgExecLegacyContent): unknown;
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
                    };
                    authority?: string;
                }): _65.MsgExecLegacyContent;
            };
            MsgExecLegacyContentResponse: {
                encode(_: _65.MsgExecLegacyContentResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _65.MsgExecLegacyContentResponse;
                fromJSON(_: any): _65.MsgExecLegacyContentResponse;
                toJSON(_: _65.MsgExecLegacyContentResponse): unknown;
                fromPartial(_: {}): _65.MsgExecLegacyContentResponse;
            };
            MsgVote: {
                encode(message: _65.MsgVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _65.MsgVote;
                fromJSON(object: any): _65.MsgVote;
                toJSON(message: _65.MsgVote): unknown;
                fromPartial(object: {
                    proposalId?: bigint;
                    voter?: string;
                    option?: _63.VoteOption;
                    metadata?: string;
                }): _65.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _65.MsgVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _65.MsgVoteResponse;
                fromJSON(_: any): _65.MsgVoteResponse;
                toJSON(_: _65.MsgVoteResponse): unknown;
                fromPartial(_: {}): _65.MsgVoteResponse;
            };
            MsgVoteWeighted: {
                encode(message: _65.MsgVoteWeighted, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _65.MsgVoteWeighted;
                fromJSON(object: any): _65.MsgVoteWeighted;
                toJSON(message: _65.MsgVoteWeighted): unknown;
                fromPartial(object: {
                    proposalId?: bigint;
                    voter?: string;
                    options?: {
                        option?: _63.VoteOption;
                        weight?: string;
                    }[];
                    metadata?: string;
                }): _65.MsgVoteWeighted;
            };
            MsgVoteWeightedResponse: {
                encode(_: _65.MsgVoteWeightedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _65.MsgVoteWeightedResponse;
                fromJSON(_: any): _65.MsgVoteWeightedResponse;
                toJSON(_: _65.MsgVoteWeightedResponse): unknown;
                fromPartial(_: {}): _65.MsgVoteWeightedResponse;
            };
            MsgDeposit: {
                encode(message: _65.MsgDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _65.MsgDeposit;
                fromJSON(object: any): _65.MsgDeposit;
                toJSON(message: _65.MsgDeposit): unknown;
                fromPartial(object: {
                    proposalId?: bigint;
                    depositor?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _65.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _65.MsgDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _65.MsgDepositResponse;
                fromJSON(_: any): _65.MsgDepositResponse;
                toJSON(_: _65.MsgDepositResponse): unknown;
                fromPartial(_: {}): _65.MsgDepositResponse;
            };
            MsgUpdateParams: {
                encode(message: _65.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _65.MsgUpdateParams;
                fromJSON(object: any): _65.MsgUpdateParams;
                toJSON(message: _65.MsgUpdateParams): unknown;
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
                }): _65.MsgUpdateParams;
            };
            MsgUpdateParamsResponse: {
                encode(_: _65.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _65.MsgUpdateParamsResponse;
                fromJSON(_: any): _65.MsgUpdateParamsResponse;
                toJSON(_: _65.MsgUpdateParamsResponse): unknown;
                fromPartial(_: {}): _65.MsgUpdateParamsResponse;
            };
            Cosmos_govv1beta1Content_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _50.CommunityPoolSpendProposal | _50.CommunityPoolSpendProposalWithDeposit | _81.ParameterChangeProposal | _99.SoftwareUpgradeProposal | _99.CancelSoftwareUpgradeProposal | _67.TextProposal;
            QueryProposalRequest: {
                encode(message: _64.QueryProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _64.QueryProposalRequest;
                fromJSON(object: any): _64.QueryProposalRequest;
                toJSON(message: _64.QueryProposalRequest): unknown;
                fromPartial(object: {
                    proposalId?: bigint;
                }): _64.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _64.QueryProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _64.QueryProposalResponse;
                fromJSON(object: any): _64.QueryProposalResponse;
                toJSON(message: _64.QueryProposalResponse): unknown;
                fromPartial(object: {
                    proposal?: {
                        id?: bigint;
                        messages?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                        status?: _63.ProposalStatus;
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
                }): _64.QueryProposalResponse;
            };
            QueryProposalsRequest: {
                encode(message: _64.QueryProposalsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _64.QueryProposalsRequest;
                fromJSON(object: any): _64.QueryProposalsRequest;
                toJSON(message: _64.QueryProposalsRequest): unknown;
                fromPartial(object: {
                    proposalStatus?: _63.ProposalStatus;
                    voter?: string;
                    depositor?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: bigint;
                        limit?: bigint;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _64.QueryProposalsRequest;
            };
            QueryProposalsResponse: {
                encode(message: _64.QueryProposalsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _64.QueryProposalsResponse;
                fromJSON(object: any): _64.QueryProposalsResponse;
                toJSON(message: _64.QueryProposalsResponse): unknown;
                fromPartial(object: {
                    proposals?: {
                        id?: bigint;
                        messages?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                        status?: _63.ProposalStatus;
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
                }): _64.QueryProposalsResponse;
            };
            QueryVoteRequest: {
                encode(message: _64.QueryVoteRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _64.QueryVoteRequest;
                fromJSON(object: any): _64.QueryVoteRequest;
                toJSON(message: _64.QueryVoteRequest): unknown;
                fromPartial(object: {
                    proposalId?: bigint;
                    voter?: string;
                }): _64.QueryVoteRequest;
            };
            QueryVoteResponse: {
                encode(message: _64.QueryVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _64.QueryVoteResponse;
                fromJSON(object: any): _64.QueryVoteResponse;
                toJSON(message: _64.QueryVoteResponse): unknown;
                fromPartial(object: {
                    vote?: {
                        proposalId?: bigint;
                        voter?: string;
                        options?: {
                            option?: _63.VoteOption;
                            weight?: string;
                        }[];
                        metadata?: string;
                    };
                }): _64.QueryVoteResponse;
            };
            QueryVotesRequest: {
                encode(message: _64.QueryVotesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _64.QueryVotesRequest;
                fromJSON(object: any): _64.QueryVotesRequest;
                toJSON(message: _64.QueryVotesRequest): unknown;
                fromPartial(object: {
                    proposalId?: bigint;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: bigint;
                        limit?: bigint;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _64.QueryVotesRequest;
            };
            QueryVotesResponse: {
                encode(message: _64.QueryVotesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _64.QueryVotesResponse;
                fromJSON(object: any): _64.QueryVotesResponse;
                toJSON(message: _64.QueryVotesResponse): unknown;
                fromPartial(object: {
                    votes?: {
                        proposalId?: bigint;
                        voter?: string;
                        options?: {
                            option?: _63.VoteOption;
                            weight?: string;
                        }[];
                        metadata?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: bigint;
                    };
                }): _64.QueryVotesResponse;
            };
            QueryParamsRequest: {
                encode(message: _64.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _64.QueryParamsRequest;
                fromJSON(object: any): _64.QueryParamsRequest;
                toJSON(message: _64.QueryParamsRequest): unknown;
                fromPartial(object: {
                    paramsType?: string;
                }): _64.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _64.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _64.QueryParamsResponse;
                fromJSON(object: any): _64.QueryParamsResponse;
                toJSON(message: _64.QueryParamsResponse): unknown;
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
                }): _64.QueryParamsResponse;
            };
            QueryDepositRequest: {
                encode(message: _64.QueryDepositRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _64.QueryDepositRequest;
                fromJSON(object: any): _64.QueryDepositRequest;
                toJSON(message: _64.QueryDepositRequest): unknown;
                fromPartial(object: {
                    proposalId?: bigint;
                    depositor?: string;
                }): _64.QueryDepositRequest;
            };
            QueryDepositResponse: {
                encode(message: _64.QueryDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _64.QueryDepositResponse;
                fromJSON(object: any): _64.QueryDepositResponse;
                toJSON(message: _64.QueryDepositResponse): unknown;
                fromPartial(object: {
                    deposit?: {
                        proposalId?: bigint;
                        depositor?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                }): _64.QueryDepositResponse;
            };
            QueryDepositsRequest: {
                encode(message: _64.QueryDepositsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _64.QueryDepositsRequest;
                fromJSON(object: any): _64.QueryDepositsRequest;
                toJSON(message: _64.QueryDepositsRequest): unknown;
                fromPartial(object: {
                    proposalId?: bigint;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: bigint;
                        limit?: bigint;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _64.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _64.QueryDepositsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _64.QueryDepositsResponse;
                fromJSON(object: any): _64.QueryDepositsResponse;
                toJSON(message: _64.QueryDepositsResponse): unknown;
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
                }): _64.QueryDepositsResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _64.QueryTallyResultRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _64.QueryTallyResultRequest;
                fromJSON(object: any): _64.QueryTallyResultRequest;
                toJSON(message: _64.QueryTallyResultRequest): unknown;
                fromPartial(object: {
                    proposalId?: bigint;
                }): _64.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _64.QueryTallyResultResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _64.QueryTallyResultResponse;
                fromJSON(object: any): _64.QueryTallyResultResponse;
                toJSON(message: _64.QueryTallyResultResponse): unknown;
                fromPartial(object: {
                    tally?: {
                        yesCount?: string;
                        abstainCount?: string;
                        noCount?: string;
                        noWithVetoCount?: string;
                    };
                }): _64.QueryTallyResultResponse;
            };
            voteOptionFromJSON(object: any): _63.VoteOption;
            voteOptionToJSON(object: _63.VoteOption): string;
            proposalStatusFromJSON(object: any): _63.ProposalStatus;
            proposalStatusToJSON(object: _63.ProposalStatus): string;
            VoteOption: typeof _63.VoteOption;
            ProposalStatus: typeof _63.ProposalStatus;
            WeightedVoteOption: {
                encode(message: _63.WeightedVoteOption, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _63.WeightedVoteOption;
                fromJSON(object: any): _63.WeightedVoteOption;
                toJSON(message: _63.WeightedVoteOption): unknown;
                fromPartial(object: {
                    option?: _63.VoteOption;
                    weight?: string;
                }): _63.WeightedVoteOption;
            };
            Deposit: {
                encode(message: _63.Deposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _63.Deposit;
                fromJSON(object: any): _63.Deposit;
                toJSON(message: _63.Deposit): unknown;
                fromPartial(object: {
                    proposalId?: bigint;
                    depositor?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _63.Deposit;
            };
            Proposal: {
                encode(message: _63.Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _63.Proposal;
                fromJSON(object: any): _63.Proposal;
                toJSON(message: _63.Proposal): unknown;
                fromPartial(object: {
                    id?: bigint;
                    messages?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                    status?: _63.ProposalStatus;
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
                }): _63.Proposal;
            };
            TallyResult: {
                encode(message: _63.TallyResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _63.TallyResult;
                fromJSON(object: any): _63.TallyResult;
                toJSON(message: _63.TallyResult): unknown;
                fromPartial(object: {
                    yesCount?: string;
                    abstainCount?: string;
                    noCount?: string;
                    noWithVetoCount?: string;
                }): _63.TallyResult;
            };
            Vote: {
                encode(message: _63.Vote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _63.Vote;
                fromJSON(object: any): _63.Vote;
                toJSON(message: _63.Vote): unknown;
                fromPartial(object: {
                    proposalId?: bigint;
                    voter?: string;
                    options?: {
                        option?: _63.VoteOption;
                        weight?: string;
                    }[];
                    metadata?: string;
                }): _63.Vote;
            };
            DepositParams: {
                encode(message: _63.DepositParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _63.DepositParams;
                fromJSON(object: any): _63.DepositParams;
                toJSON(message: _63.DepositParams): unknown;
                fromPartial(object: {
                    minDeposit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    maxDepositPeriod?: {
                        seconds?: bigint;
                        nanos?: number;
                    };
                }): _63.DepositParams;
            };
            VotingParams: {
                encode(message: _63.VotingParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _63.VotingParams;
                fromJSON(object: any): _63.VotingParams;
                toJSON(message: _63.VotingParams): unknown;
                fromPartial(object: {
                    votingPeriod?: {
                        seconds?: bigint;
                        nanos?: number;
                    };
                }): _63.VotingParams;
            };
            TallyParams: {
                encode(message: _63.TallyParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _63.TallyParams;
                fromJSON(object: any): _63.TallyParams;
                toJSON(message: _63.TallyParams): unknown;
                fromPartial(object: {
                    quorum?: string;
                    threshold?: string;
                    vetoThreshold?: string;
                }): _63.TallyParams;
            };
            Params: {
                encode(message: _63.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _63.Params;
                fromJSON(object: any): _63.Params;
                toJSON(message: _63.Params): unknown;
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
                }): _63.Params;
            };
            GenesisState: {
                encode(message: _62.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _62.GenesisState;
                fromJSON(object: any): _62.GenesisState;
                toJSON(message: _62.GenesisState): unknown;
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
                            option?: _63.VoteOption;
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
                        status?: _63.ProposalStatus;
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
                }): _62.GenesisState;
            };
        };
        const v1beta1: {
            MsgClientImpl: typeof _219.MsgClientImpl;
            QueryClientImpl: typeof _205.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _68.QueryProposalRequest): Promise<_68.QueryProposalResponse>;
                proposals(request: _68.QueryProposalsRequest): Promise<_68.QueryProposalsResponse>;
                vote(request: _68.QueryVoteRequest): Promise<_68.QueryVoteResponse>;
                votes(request: _68.QueryVotesRequest): Promise<_68.QueryVotesResponse>;
                params(request: _68.QueryParamsRequest): Promise<_68.QueryParamsResponse>;
                deposit(request: _68.QueryDepositRequest): Promise<_68.QueryDepositResponse>;
                deposits(request: _68.QueryDepositsRequest): Promise<_68.QueryDepositsResponse>;
                tallyResult(request: _68.QueryTallyResultRequest): Promise<_68.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _190.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _69.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _69.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _69.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _69.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _69.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _69.MsgSubmitProposal;
                    };
                    vote(value: _69.MsgVote): {
                        typeUrl: string;
                        value: _69.MsgVote;
                    };
                    voteWeighted(value: _69.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _69.MsgVoteWeighted;
                    };
                    deposit(value: _69.MsgDeposit): {
                        typeUrl: string;
                        value: _69.MsgDeposit;
                    };
                };
                toJSON: {
                    submitProposal(value: _69.MsgSubmitProposal): {
                        typeUrl: string;
                        value: unknown;
                    };
                    vote(value: _69.MsgVote): {
                        typeUrl: string;
                        value: unknown;
                    };
                    voteWeighted(value: _69.MsgVoteWeighted): {
                        typeUrl: string;
                        value: unknown;
                    };
                    deposit(value: _69.MsgDeposit): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _69.MsgSubmitProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _69.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _69.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _69.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _69.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _69.MsgSubmitProposal;
                    };
                    vote(value: _69.MsgVote): {
                        typeUrl: string;
                        value: _69.MsgVote;
                    };
                    voteWeighted(value: _69.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _69.MsgVoteWeighted;
                    };
                    deposit(value: _69.MsgDeposit): {
                        typeUrl: string;
                        value: _69.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ content, initialDeposit, proposer }: _69.MsgSubmitProposal) => {
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
                    }) => _69.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, option }: _69.MsgVote) => {
                        proposal_id: string;
                        voter: string;
                        option: number;
                    };
                    fromAmino: ({ proposal_id, voter, option }: {
                        proposal_id: string;
                        voter: string;
                        option: number;
                    }) => _69.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, options }: _69.MsgVoteWeighted) => {
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
                    }) => _69.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: ({ proposalId, depositor, amount }: _69.MsgDeposit) => {
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
                    }) => _69.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                encode(message: _69.MsgSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _69.MsgSubmitProposal;
                fromJSON(object: any): _69.MsgSubmitProposal;
                toJSON(message: _69.MsgSubmitProposal): unknown;
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
                    };
                    initialDeposit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    proposer?: string;
                }): _69.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _69.MsgSubmitProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _69.MsgSubmitProposalResponse;
                fromJSON(object: any): _69.MsgSubmitProposalResponse;
                toJSON(message: _69.MsgSubmitProposalResponse): unknown;
                fromPartial(object: {
                    proposalId?: bigint;
                }): _69.MsgSubmitProposalResponse;
            };
            MsgVote: {
                encode(message: _69.MsgVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _69.MsgVote;
                fromJSON(object: any): _69.MsgVote;
                toJSON(message: _69.MsgVote): unknown;
                fromPartial(object: {
                    proposalId?: bigint;
                    voter?: string;
                    option?: _67.VoteOption;
                }): _69.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _69.MsgVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _69.MsgVoteResponse;
                fromJSON(_: any): _69.MsgVoteResponse;
                toJSON(_: _69.MsgVoteResponse): unknown;
                fromPartial(_: {}): _69.MsgVoteResponse;
            };
            MsgVoteWeighted: {
                encode(message: _69.MsgVoteWeighted, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _69.MsgVoteWeighted;
                fromJSON(object: any): _69.MsgVoteWeighted;
                toJSON(message: _69.MsgVoteWeighted): unknown;
                fromPartial(object: {
                    proposalId?: bigint;
                    voter?: string;
                    options?: {
                        option?: _67.VoteOption;
                        weight?: string;
                    }[];
                }): _69.MsgVoteWeighted;
            };
            MsgVoteWeightedResponse: {
                encode(_: _69.MsgVoteWeightedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _69.MsgVoteWeightedResponse;
                fromJSON(_: any): _69.MsgVoteWeightedResponse;
                toJSON(_: _69.MsgVoteWeightedResponse): unknown;
                fromPartial(_: {}): _69.MsgVoteWeightedResponse;
            };
            MsgDeposit: {
                encode(message: _69.MsgDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _69.MsgDeposit;
                fromJSON(object: any): _69.MsgDeposit;
                toJSON(message: _69.MsgDeposit): unknown;
                fromPartial(object: {
                    proposalId?: bigint;
                    depositor?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _69.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _69.MsgDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _69.MsgDepositResponse;
                fromJSON(_: any): _69.MsgDepositResponse;
                toJSON(_: _69.MsgDepositResponse): unknown;
                fromPartial(_: {}): _69.MsgDepositResponse;
            };
            Cosmos_govv1beta1Content_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _50.CommunityPoolSpendProposal | _50.CommunityPoolSpendProposalWithDeposit | _81.ParameterChangeProposal | _99.SoftwareUpgradeProposal | _99.CancelSoftwareUpgradeProposal | _67.TextProposal;
            QueryProposalRequest: {
                encode(message: _68.QueryProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _68.QueryProposalRequest;
                fromJSON(object: any): _68.QueryProposalRequest;
                toJSON(message: _68.QueryProposalRequest): unknown;
                fromPartial(object: {
                    proposalId?: bigint;
                }): _68.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _68.QueryProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _68.QueryProposalResponse;
                fromJSON(object: any): _68.QueryProposalResponse;
                toJSON(message: _68.QueryProposalResponse): unknown;
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
                        };
                        status?: _67.ProposalStatus;
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
                }): _68.QueryProposalResponse;
            };
            QueryProposalsRequest: {
                encode(message: _68.QueryProposalsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _68.QueryProposalsRequest;
                fromJSON(object: any): _68.QueryProposalsRequest;
                toJSON(message: _68.QueryProposalsRequest): unknown;
                fromPartial(object: {
                    proposalStatus?: _67.ProposalStatus;
                    voter?: string;
                    depositor?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: bigint;
                        limit?: bigint;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _68.QueryProposalsRequest;
            };
            QueryProposalsResponse: {
                encode(message: _68.QueryProposalsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _68.QueryProposalsResponse;
                fromJSON(object: any): _68.QueryProposalsResponse;
                toJSON(message: _68.QueryProposalsResponse): unknown;
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
                        };
                        status?: _67.ProposalStatus;
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
                }): _68.QueryProposalsResponse;
            };
            QueryVoteRequest: {
                encode(message: _68.QueryVoteRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _68.QueryVoteRequest;
                fromJSON(object: any): _68.QueryVoteRequest;
                toJSON(message: _68.QueryVoteRequest): unknown;
                fromPartial(object: {
                    proposalId?: bigint;
                    voter?: string;
                }): _68.QueryVoteRequest;
            };
            QueryVoteResponse: {
                encode(message: _68.QueryVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _68.QueryVoteResponse;
                fromJSON(object: any): _68.QueryVoteResponse;
                toJSON(message: _68.QueryVoteResponse): unknown;
                fromPartial(object: {
                    vote?: {
                        proposalId?: bigint;
                        voter?: string;
                        option?: _67.VoteOption;
                        options?: {
                            option?: _67.VoteOption;
                            weight?: string;
                        }[];
                    };
                }): _68.QueryVoteResponse;
            };
            QueryVotesRequest: {
                encode(message: _68.QueryVotesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _68.QueryVotesRequest;
                fromJSON(object: any): _68.QueryVotesRequest;
                toJSON(message: _68.QueryVotesRequest): unknown;
                fromPartial(object: {
                    proposalId?: bigint;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: bigint;
                        limit?: bigint;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _68.QueryVotesRequest;
            };
            QueryVotesResponse: {
                encode(message: _68.QueryVotesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _68.QueryVotesResponse;
                fromJSON(object: any): _68.QueryVotesResponse;
                toJSON(message: _68.QueryVotesResponse): unknown;
                fromPartial(object: {
                    votes?: {
                        proposalId?: bigint;
                        voter?: string;
                        option?: _67.VoteOption;
                        options?: {
                            option?: _67.VoteOption;
                            weight?: string;
                        }[];
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: bigint;
                    };
                }): _68.QueryVotesResponse;
            };
            QueryParamsRequest: {
                encode(message: _68.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _68.QueryParamsRequest;
                fromJSON(object: any): _68.QueryParamsRequest;
                toJSON(message: _68.QueryParamsRequest): unknown;
                fromPartial(object: {
                    paramsType?: string;
                }): _68.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _68.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _68.QueryParamsResponse;
                fromJSON(object: any): _68.QueryParamsResponse;
                toJSON(message: _68.QueryParamsResponse): unknown;
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
                }): _68.QueryParamsResponse;
            };
            QueryDepositRequest: {
                encode(message: _68.QueryDepositRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _68.QueryDepositRequest;
                fromJSON(object: any): _68.QueryDepositRequest;
                toJSON(message: _68.QueryDepositRequest): unknown;
                fromPartial(object: {
                    proposalId?: bigint;
                    depositor?: string;
                }): _68.QueryDepositRequest;
            };
            QueryDepositResponse: {
                encode(message: _68.QueryDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _68.QueryDepositResponse;
                fromJSON(object: any): _68.QueryDepositResponse;
                toJSON(message: _68.QueryDepositResponse): unknown;
                fromPartial(object: {
                    deposit?: {
                        proposalId?: bigint;
                        depositor?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                }): _68.QueryDepositResponse;
            };
            QueryDepositsRequest: {
                encode(message: _68.QueryDepositsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _68.QueryDepositsRequest;
                fromJSON(object: any): _68.QueryDepositsRequest;
                toJSON(message: _68.QueryDepositsRequest): unknown;
                fromPartial(object: {
                    proposalId?: bigint;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: bigint;
                        limit?: bigint;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _68.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _68.QueryDepositsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _68.QueryDepositsResponse;
                fromJSON(object: any): _68.QueryDepositsResponse;
                toJSON(message: _68.QueryDepositsResponse): unknown;
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
                }): _68.QueryDepositsResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _68.QueryTallyResultRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _68.QueryTallyResultRequest;
                fromJSON(object: any): _68.QueryTallyResultRequest;
                toJSON(message: _68.QueryTallyResultRequest): unknown;
                fromPartial(object: {
                    proposalId?: bigint;
                }): _68.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _68.QueryTallyResultResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _68.QueryTallyResultResponse;
                fromJSON(object: any): _68.QueryTallyResultResponse;
                toJSON(message: _68.QueryTallyResultResponse): unknown;
                fromPartial(object: {
                    tally?: {
                        yes?: string;
                        abstain?: string;
                        no?: string;
                        noWithVeto?: string;
                    };
                }): _68.QueryTallyResultResponse;
            };
            voteOptionFromJSON(object: any): _67.VoteOption;
            voteOptionToJSON(object: _67.VoteOption): string;
            proposalStatusFromJSON(object: any): _67.ProposalStatus;
            proposalStatusToJSON(object: _67.ProposalStatus): string;
            VoteOption: typeof _67.VoteOption;
            ProposalStatus: typeof _67.ProposalStatus;
            WeightedVoteOption: {
                encode(message: _67.WeightedVoteOption, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _67.WeightedVoteOption;
                fromJSON(object: any): _67.WeightedVoteOption;
                toJSON(message: _67.WeightedVoteOption): unknown;
                fromPartial(object: {
                    option?: _67.VoteOption;
                    weight?: string;
                }): _67.WeightedVoteOption;
            };
            TextProposal: {
                encode(message: _67.TextProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _67.TextProposal;
                fromJSON(object: any): _67.TextProposal;
                toJSON(message: _67.TextProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                }): _67.TextProposal;
            };
            Deposit: {
                encode(message: _67.Deposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _67.Deposit;
                fromJSON(object: any): _67.Deposit;
                toJSON(message: _67.Deposit): unknown;
                fromPartial(object: {
                    proposalId?: bigint;
                    depositor?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _67.Deposit;
            };
            Proposal: {
                encode(message: _67.Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _67.Proposal;
                fromJSON(object: any): _67.Proposal;
                toJSON(message: _67.Proposal): unknown;
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
                    };
                    status?: _67.ProposalStatus;
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
                }): _67.Proposal;
            };
            TallyResult: {
                encode(message: _67.TallyResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _67.TallyResult;
                fromJSON(object: any): _67.TallyResult;
                toJSON(message: _67.TallyResult): unknown;
                fromPartial(object: {
                    yes?: string;
                    abstain?: string;
                    no?: string;
                    noWithVeto?: string;
                }): _67.TallyResult;
            };
            Vote: {
                encode(message: _67.Vote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _67.Vote;
                fromJSON(object: any): _67.Vote;
                toJSON(message: _67.Vote): unknown;
                fromPartial(object: {
                    proposalId?: bigint;
                    voter?: string;
                    option?: _67.VoteOption;
                    options?: {
                        option?: _67.VoteOption;
                        weight?: string;
                    }[];
                }): _67.Vote;
            };
            DepositParams: {
                encode(message: _67.DepositParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _67.DepositParams;
                fromJSON(object: any): _67.DepositParams;
                toJSON(message: _67.DepositParams): unknown;
                fromPartial(object: {
                    minDeposit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    maxDepositPeriod?: {
                        seconds?: bigint;
                        nanos?: number;
                    };
                }): _67.DepositParams;
            };
            VotingParams: {
                encode(message: _67.VotingParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _67.VotingParams;
                fromJSON(object: any): _67.VotingParams;
                toJSON(message: _67.VotingParams): unknown;
                fromPartial(object: {
                    votingPeriod?: {
                        seconds?: bigint;
                        nanos?: number;
                    };
                }): _67.VotingParams;
            };
            TallyParams: {
                encode(message: _67.TallyParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _67.TallyParams;
                fromJSON(object: any): _67.TallyParams;
                toJSON(message: _67.TallyParams): unknown;
                fromPartial(object: {
                    quorum?: Uint8Array;
                    threshold?: Uint8Array;
                    vetoThreshold?: Uint8Array;
                }): _67.TallyParams;
            };
            GenesisState: {
                encode(message: _66.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _66.GenesisState;
                fromJSON(object: any): _66.GenesisState;
                toJSON(message: _66.GenesisState): unknown;
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
                        option?: _67.VoteOption;
                        options?: {
                            option?: _67.VoteOption;
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
                        };
                        status?: _67.ProposalStatus;
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
                }): _66.GenesisState;
            };
        };
    }
    namespace group {
        namespace module {
            const v1: {
                Module: {
                    encode(message: _70.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _70.Module;
                    fromJSON(object: any): _70.Module;
                    toJSON(message: _70.Module): unknown;
                    fromPartial(object: {
                        maxExecutionPeriod?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        maxMetadataLen?: bigint;
                    }): _70.Module;
                };
            };
        }
    }
    namespace mint {
        namespace module {
            const v1: {
                Module: {
                    encode(message: _71.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _71.Module;
                    fromJSON(object: any): _71.Module;
                    toJSON(message: _71.Module): unknown;
                    fromPartial(object: {
                        feeCollectorName?: string;
                        authority?: string;
                    }): _71.Module;
                };
            };
        }
    }
    namespace nft {
        namespace module {
            const v1: {
                Module: {
                    encode(_: _72.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _72.Module;
                    fromJSON(_: any): _72.Module;
                    toJSON(_: _72.Module): unknown;
                    fromPartial(_: {}): _72.Module;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _220.MsgClientImpl;
            QueryClientImpl: typeof _206.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _76.QueryBalanceRequest): Promise<_76.QueryBalanceResponse>;
                owner(request: _76.QueryOwnerRequest): Promise<_76.QueryOwnerResponse>;
                supply(request: _76.QuerySupplyRequest): Promise<_76.QuerySupplyResponse>;
                nFTs(request: _76.QueryNFTsRequest): Promise<_76.QueryNFTsResponse>;
                nFT(request: _76.QueryNFTRequest): Promise<_76.QueryNFTResponse>;
                class(request: _76.QueryClassRequest): Promise<_76.QueryClassResponse>;
                classes(request?: _76.QueryClassesRequest): Promise<_76.QueryClassesResponse>;
            };
            LCDQueryClient: typeof _191.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _77.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _77.MsgSend): {
                        typeUrl: string;
                        value: _77.MsgSend;
                    };
                };
                toJSON: {
                    send(value: _77.MsgSend): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _77.MsgSend;
                    };
                };
                fromPartial: {
                    send(value: _77.MsgSend): {
                        typeUrl: string;
                        value: _77.MsgSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.nft.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: ({ classId, id, sender, receiver }: _77.MsgSend) => {
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
                    }) => _77.MsgSend;
                };
            };
            MsgSend: {
                encode(message: _77.MsgSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _77.MsgSend;
                fromJSON(object: any): _77.MsgSend;
                toJSON(message: _77.MsgSend): unknown;
                fromPartial(object: {
                    classId?: string;
                    id?: string;
                    sender?: string;
                    receiver?: string;
                }): _77.MsgSend;
            };
            MsgSendResponse: {
                encode(_: _77.MsgSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _77.MsgSendResponse;
                fromJSON(_: any): _77.MsgSendResponse;
                toJSON(_: _77.MsgSendResponse): unknown;
                fromPartial(_: {}): _77.MsgSendResponse;
            };
            QueryBalanceRequest: {
                encode(message: _76.QueryBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _76.QueryBalanceRequest;
                fromJSON(object: any): _76.QueryBalanceRequest;
                toJSON(message: _76.QueryBalanceRequest): unknown;
                fromPartial(object: {
                    classId?: string;
                    owner?: string;
                }): _76.QueryBalanceRequest;
            };
            QueryBalanceResponse: {
                encode(message: _76.QueryBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _76.QueryBalanceResponse;
                fromJSON(object: any): _76.QueryBalanceResponse;
                toJSON(message: _76.QueryBalanceResponse): unknown;
                fromPartial(object: {
                    amount?: bigint;
                }): _76.QueryBalanceResponse;
            };
            QueryOwnerRequest: {
                encode(message: _76.QueryOwnerRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _76.QueryOwnerRequest;
                fromJSON(object: any): _76.QueryOwnerRequest;
                toJSON(message: _76.QueryOwnerRequest): unknown;
                fromPartial(object: {
                    classId?: string;
                    id?: string;
                }): _76.QueryOwnerRequest;
            };
            QueryOwnerResponse: {
                encode(message: _76.QueryOwnerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _76.QueryOwnerResponse;
                fromJSON(object: any): _76.QueryOwnerResponse;
                toJSON(message: _76.QueryOwnerResponse): unknown;
                fromPartial(object: {
                    owner?: string;
                }): _76.QueryOwnerResponse;
            };
            QuerySupplyRequest: {
                encode(message: _76.QuerySupplyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _76.QuerySupplyRequest;
                fromJSON(object: any): _76.QuerySupplyRequest;
                toJSON(message: _76.QuerySupplyRequest): unknown;
                fromPartial(object: {
                    classId?: string;
                }): _76.QuerySupplyRequest;
            };
            QuerySupplyResponse: {
                encode(message: _76.QuerySupplyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _76.QuerySupplyResponse;
                fromJSON(object: any): _76.QuerySupplyResponse;
                toJSON(message: _76.QuerySupplyResponse): unknown;
                fromPartial(object: {
                    amount?: bigint;
                }): _76.QuerySupplyResponse;
            };
            QueryNFTsRequest: {
                encode(message: _76.QueryNFTsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _76.QueryNFTsRequest;
                fromJSON(object: any): _76.QueryNFTsRequest;
                toJSON(message: _76.QueryNFTsRequest): unknown;
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
                }): _76.QueryNFTsRequest;
            };
            QueryNFTsResponse: {
                encode(message: _76.QueryNFTsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _76.QueryNFTsResponse;
                fromJSON(object: any): _76.QueryNFTsResponse;
                toJSON(message: _76.QueryNFTsResponse): unknown;
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
                }): _76.QueryNFTsResponse;
            };
            QueryNFTRequest: {
                encode(message: _76.QueryNFTRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _76.QueryNFTRequest;
                fromJSON(object: any): _76.QueryNFTRequest;
                toJSON(message: _76.QueryNFTRequest): unknown;
                fromPartial(object: {
                    classId?: string;
                    id?: string;
                }): _76.QueryNFTRequest;
            };
            QueryNFTResponse: {
                encode(message: _76.QueryNFTResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _76.QueryNFTResponse;
                fromJSON(object: any): _76.QueryNFTResponse;
                toJSON(message: _76.QueryNFTResponse): unknown;
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
                }): _76.QueryNFTResponse;
            };
            QueryClassRequest: {
                encode(message: _76.QueryClassRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _76.QueryClassRequest;
                fromJSON(object: any): _76.QueryClassRequest;
                toJSON(message: _76.QueryClassRequest): unknown;
                fromPartial(object: {
                    classId?: string;
                }): _76.QueryClassRequest;
            };
            QueryClassResponse: {
                encode(message: _76.QueryClassResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _76.QueryClassResponse;
                fromJSON(object: any): _76.QueryClassResponse;
                toJSON(message: _76.QueryClassResponse): unknown;
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
                }): _76.QueryClassResponse;
            };
            QueryClassesRequest: {
                encode(message: _76.QueryClassesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _76.QueryClassesRequest;
                fromJSON(object: any): _76.QueryClassesRequest;
                toJSON(message: _76.QueryClassesRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: bigint;
                        limit?: bigint;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _76.QueryClassesRequest;
            };
            QueryClassesResponse: {
                encode(message: _76.QueryClassesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _76.QueryClassesResponse;
                fromJSON(object: any): _76.QueryClassesResponse;
                toJSON(message: _76.QueryClassesResponse): unknown;
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
                }): _76.QueryClassesResponse;
            };
            Class: {
                encode(message: _75.Class, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _75.Class;
                fromJSON(object: any): _75.Class;
                toJSON(message: _75.Class): unknown;
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
                }): _75.Class;
            };
            NFT: {
                encode(message: _75.NFT, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _75.NFT;
                fromJSON(object: any): _75.NFT;
                toJSON(message: _75.NFT): unknown;
                fromPartial(object: {
                    classId?: string;
                    id?: string;
                    uri?: string;
                    uriHash?: string;
                    data?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _75.NFT;
            };
            GenesisState: {
                encode(message: _74.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _74.GenesisState;
                fromJSON(object: any): _74.GenesisState;
                toJSON(message: _74.GenesisState): unknown;
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
                }): _74.GenesisState;
            };
            Entry: {
                encode(message: _74.Entry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _74.Entry;
                fromJSON(object: any): _74.Entry;
                toJSON(message: _74.Entry): unknown;
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
                }): _74.Entry;
            };
            EventSend: {
                encode(message: _73.EventSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _73.EventSend;
                fromJSON(object: any): _73.EventSend;
                toJSON(message: _73.EventSend): unknown;
                fromPartial(object: {
                    classId?: string;
                    id?: string;
                    sender?: string;
                    receiver?: string;
                }): _73.EventSend;
            };
            EventMint: {
                encode(message: _73.EventMint, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _73.EventMint;
                fromJSON(object: any): _73.EventMint;
                toJSON(message: _73.EventMint): unknown;
                fromPartial(object: {
                    classId?: string;
                    id?: string;
                    owner?: string;
                }): _73.EventMint;
            };
            EventBurn: {
                encode(message: _73.EventBurn, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _73.EventBurn;
                fromJSON(object: any): _73.EventBurn;
                toJSON(message: _73.EventBurn): unknown;
                fromPartial(object: {
                    classId?: string;
                    id?: string;
                    owner?: string;
                }): _73.EventBurn;
            };
        };
    }
    namespace orm {
        namespace module {
            const v1alpha1: {
                Module: {
                    encode(_: _78.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _78.Module;
                    fromJSON(_: any): _78.Module;
                    toJSON(_: _78.Module): unknown;
                    fromPartial(_: {}): _78.Module;
                };
            };
        }
        namespace query {
            const v1alpha1: {
                QueryClientImpl: typeof _207.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    get(request: _79.GetRequest): Promise<_79.GetResponse>;
                    list(request: _79.ListRequest): Promise<_79.ListResponse>;
                };
                GetRequest: {
                    encode(message: _79.GetRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _79.GetRequest;
                    fromJSON(object: any): _79.GetRequest;
                    toJSON(message: _79.GetRequest): unknown;
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
                    }): _79.GetRequest;
                };
                GetResponse: {
                    encode(message: _79.GetResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _79.GetResponse;
                    fromJSON(object: any): _79.GetResponse;
                    toJSON(message: _79.GetResponse): unknown;
                    fromPartial(object: {
                        result?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }): _79.GetResponse;
                };
                ListRequest: {
                    encode(message: _79.ListRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _79.ListRequest;
                    fromJSON(object: any): _79.ListRequest;
                    toJSON(message: _79.ListRequest): unknown;
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
                    }): _79.ListRequest;
                };
                ListRequest_Prefix: {
                    encode(message: _79.ListRequest_Prefix, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _79.ListRequest_Prefix;
                    fromJSON(object: any): _79.ListRequest_Prefix;
                    toJSON(message: _79.ListRequest_Prefix): unknown;
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
                    }): _79.ListRequest_Prefix;
                };
                ListRequest_Range: {
                    encode(message: _79.ListRequest_Range, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _79.ListRequest_Range;
                    fromJSON(object: any): _79.ListRequest_Range;
                    toJSON(message: _79.ListRequest_Range): unknown;
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
                    }): _79.ListRequest_Range;
                };
                ListResponse: {
                    encode(message: _79.ListResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _79.ListResponse;
                    fromJSON(object: any): _79.ListResponse;
                    toJSON(message: _79.ListResponse): unknown;
                    fromPartial(object: {
                        results?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: bigint;
                        };
                    }): _79.ListResponse;
                };
                IndexValue: {
                    encode(message: _79.IndexValue, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _79.IndexValue;
                    fromJSON(object: any): _79.IndexValue;
                    toJSON(message: _79.IndexValue): unknown;
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
                    }): _79.IndexValue;
                };
            };
        }
    }
    namespace params {
        namespace module {
            const v1: {
                Module: {
                    encode(_: _80.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _80.Module;
                    fromJSON(_: any): _80.Module;
                    toJSON(_: _80.Module): unknown;
                    fromPartial(_: {}): _80.Module;
                };
            };
        }
        const v1beta1: {
            QueryClientImpl: typeof _208.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request: _82.QueryParamsRequest): Promise<_82.QueryParamsResponse>;
                subspaces(request?: _82.QuerySubspacesRequest): Promise<_82.QuerySubspacesResponse>;
            };
            LCDQueryClient: typeof _192.LCDQueryClient;
            QueryParamsRequest: {
                encode(message: _82.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _82.QueryParamsRequest;
                fromJSON(object: any): _82.QueryParamsRequest;
                toJSON(message: _82.QueryParamsRequest): unknown;
                fromPartial(object: {
                    subspace?: string;
                    key?: string;
                }): _82.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _82.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _82.QueryParamsResponse;
                fromJSON(object: any): _82.QueryParamsResponse;
                toJSON(message: _82.QueryParamsResponse): unknown;
                fromPartial(object: {
                    param?: {
                        subspace?: string;
                        key?: string;
                        value?: string;
                    };
                }): _82.QueryParamsResponse;
            };
            QuerySubspacesRequest: {
                encode(_: _82.QuerySubspacesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _82.QuerySubspacesRequest;
                fromJSON(_: any): _82.QuerySubspacesRequest;
                toJSON(_: _82.QuerySubspacesRequest): unknown;
                fromPartial(_: {}): _82.QuerySubspacesRequest;
            };
            QuerySubspacesResponse: {
                encode(message: _82.QuerySubspacesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _82.QuerySubspacesResponse;
                fromJSON(object: any): _82.QuerySubspacesResponse;
                toJSON(message: _82.QuerySubspacesResponse): unknown;
                fromPartial(object: {
                    subspaces?: {
                        subspace?: string;
                        keys?: string[];
                    }[];
                }): _82.QuerySubspacesResponse;
            };
            Subspace: {
                encode(message: _82.Subspace, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _82.Subspace;
                fromJSON(object: any): _82.Subspace;
                toJSON(message: _82.Subspace): unknown;
                fromPartial(object: {
                    subspace?: string;
                    keys?: string[];
                }): _82.Subspace;
            };
            ParameterChangeProposal: {
                encode(message: _81.ParameterChangeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _81.ParameterChangeProposal;
                fromJSON(object: any): _81.ParameterChangeProposal;
                toJSON(message: _81.ParameterChangeProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    changes?: {
                        subspace?: string;
                        key?: string;
                        value?: string;
                    }[];
                }): _81.ParameterChangeProposal;
            };
            ParamChange: {
                encode(message: _81.ParamChange, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _81.ParamChange;
                fromJSON(object: any): _81.ParamChange;
                toJSON(message: _81.ParamChange): unknown;
                fromPartial(object: {
                    subspace?: string;
                    key?: string;
                    value?: string;
                }): _81.ParamChange;
            };
        };
    }
    namespace query {
        const v1: {};
    }
    namespace reflection {
        const v1: {
            FileDescriptorsRequest: {
                encode(_: _84.FileDescriptorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _84.FileDescriptorsRequest;
                fromJSON(_: any): _84.FileDescriptorsRequest;
                toJSON(_: _84.FileDescriptorsRequest): unknown;
                fromPartial(_: {}): _84.FileDescriptorsRequest;
            };
            FileDescriptorsResponse: {
                encode(message: _84.FileDescriptorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _84.FileDescriptorsResponse;
                fromJSON(object: any): _84.FileDescriptorsResponse;
                toJSON(message: _84.FileDescriptorsResponse): unknown;
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
                }): _84.FileDescriptorsResponse;
            };
        };
    }
    namespace slashing {
        namespace module {
            const v1: {
                Module: {
                    encode(message: _85.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _85.Module;
                    fromJSON(object: any): _85.Module;
                    toJSON(message: _85.Module): unknown;
                    fromPartial(object: {
                        authority?: string;
                    }): _85.Module;
                };
            };
        }
    }
    namespace staking {
        namespace module {
            const v1: {
                Module: {
                    encode(message: _86.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _86.Module;
                    fromJSON(object: any): _86.Module;
                    toJSON(message: _86.Module): unknown;
                    fromPartial(object: {
                        hooksOrder?: string[];
                        authority?: string;
                    }): _86.Module;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _221.MsgClientImpl;
            QueryClientImpl: typeof _209.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                validators(request: _89.QueryValidatorsRequest): Promise<_89.QueryValidatorsResponse>;
                validator(request: _89.QueryValidatorRequest): Promise<_89.QueryValidatorResponse>;
                validatorDelegations(request: _89.QueryValidatorDelegationsRequest): Promise<_89.QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: _89.QueryValidatorUnbondingDelegationsRequest): Promise<_89.QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: _89.QueryDelegationRequest): Promise<_89.QueryDelegationResponse>;
                unbondingDelegation(request: _89.QueryUnbondingDelegationRequest): Promise<_89.QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: _89.QueryDelegatorDelegationsRequest): Promise<_89.QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: _89.QueryDelegatorUnbondingDelegationsRequest): Promise<_89.QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: _89.QueryRedelegationsRequest): Promise<_89.QueryRedelegationsResponse>;
                delegatorValidators(request: _89.QueryDelegatorValidatorsRequest): Promise<_89.QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: _89.QueryDelegatorValidatorRequest): Promise<_89.QueryDelegatorValidatorResponse>;
                historicalInfo(request: _89.QueryHistoricalInfoRequest): Promise<_89.QueryHistoricalInfoResponse>;
                pool(request?: _89.QueryPoolRequest): Promise<_89.QueryPoolResponse>;
                params(request?: _89.QueryParamsRequest): Promise<_89.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _193.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createValidator(value: _91.MsgCreateValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editValidator(value: _91.MsgEditValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegate(value: _91.MsgDelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    beginRedelegate(value: _91.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegate(value: _91.MsgUndelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUnbondingDelegation(value: _91.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _91.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createValidator(value: _91.MsgCreateValidator): {
                        typeUrl: string;
                        value: _91.MsgCreateValidator;
                    };
                    editValidator(value: _91.MsgEditValidator): {
                        typeUrl: string;
                        value: _91.MsgEditValidator;
                    };
                    delegate(value: _91.MsgDelegate): {
                        typeUrl: string;
                        value: _91.MsgDelegate;
                    };
                    beginRedelegate(value: _91.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _91.MsgBeginRedelegate;
                    };
                    undelegate(value: _91.MsgUndelegate): {
                        typeUrl: string;
                        value: _91.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: _91.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: _91.MsgCancelUnbondingDelegation;
                    };
                    updateParams(value: _91.MsgUpdateParams): {
                        typeUrl: string;
                        value: _91.MsgUpdateParams;
                    };
                };
                toJSON: {
                    createValidator(value: _91.MsgCreateValidator): {
                        typeUrl: string;
                        value: unknown;
                    };
                    editValidator(value: _91.MsgEditValidator): {
                        typeUrl: string;
                        value: unknown;
                    };
                    delegate(value: _91.MsgDelegate): {
                        typeUrl: string;
                        value: unknown;
                    };
                    beginRedelegate(value: _91.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: unknown;
                    };
                    undelegate(value: _91.MsgUndelegate): {
                        typeUrl: string;
                        value: unknown;
                    };
                    cancelUnbondingDelegation(value: _91.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateParams(value: _91.MsgUpdateParams): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createValidator(value: any): {
                        typeUrl: string;
                        value: _91.MsgCreateValidator;
                    };
                    editValidator(value: any): {
                        typeUrl: string;
                        value: _91.MsgEditValidator;
                    };
                    delegate(value: any): {
                        typeUrl: string;
                        value: _91.MsgDelegate;
                    };
                    beginRedelegate(value: any): {
                        typeUrl: string;
                        value: _91.MsgBeginRedelegate;
                    };
                    undelegate(value: any): {
                        typeUrl: string;
                        value: _91.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: any): {
                        typeUrl: string;
                        value: _91.MsgCancelUnbondingDelegation;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _91.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    createValidator(value: _91.MsgCreateValidator): {
                        typeUrl: string;
                        value: _91.MsgCreateValidator;
                    };
                    editValidator(value: _91.MsgEditValidator): {
                        typeUrl: string;
                        value: _91.MsgEditValidator;
                    };
                    delegate(value: _91.MsgDelegate): {
                        typeUrl: string;
                        value: _91.MsgDelegate;
                    };
                    beginRedelegate(value: _91.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _91.MsgBeginRedelegate;
                    };
                    undelegate(value: _91.MsgUndelegate): {
                        typeUrl: string;
                        value: _91.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: _91.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: _91.MsgCancelUnbondingDelegation;
                    };
                    updateParams(value: _91.MsgUpdateParams): {
                        typeUrl: string;
                        value: _91.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: ({ description, commission, minSelfDelegation, delegatorAddress, validatorAddress, pubkey, value }: _91.MsgCreateValidator) => {
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
                    }) => _91.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: ({ description, validatorAddress, commissionRate, minSelfDelegation }: _91.MsgEditValidator) => {
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
                    }) => _91.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount }: _91.MsgDelegate) => {
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
                    }) => _91.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorSrcAddress, validatorDstAddress, amount }: _91.MsgBeginRedelegate) => {
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
                    }) => _91.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount }: _91.MsgUndelegate) => {
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
                    }) => _91.MsgUndelegate;
                };
                "/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount, creationHeight }: _91.MsgCancelUnbondingDelegation) => {
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
                    }) => _91.MsgCancelUnbondingDelegation;
                };
                "/cosmos.staking.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: ({ authority, params }: _91.MsgUpdateParams) => {
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
                    }) => _91.MsgUpdateParams;
                };
            };
            MsgCreateValidator: {
                encode(message: _91.MsgCreateValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _91.MsgCreateValidator;
                fromJSON(object: any): _91.MsgCreateValidator;
                toJSON(message: _91.MsgCreateValidator): unknown;
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
                }): _91.MsgCreateValidator;
            };
            MsgCreateValidatorResponse: {
                encode(_: _91.MsgCreateValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _91.MsgCreateValidatorResponse;
                fromJSON(_: any): _91.MsgCreateValidatorResponse;
                toJSON(_: _91.MsgCreateValidatorResponse): unknown;
                fromPartial(_: {}): _91.MsgCreateValidatorResponse;
            };
            MsgEditValidator: {
                encode(message: _91.MsgEditValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _91.MsgEditValidator;
                fromJSON(object: any): _91.MsgEditValidator;
                toJSON(message: _91.MsgEditValidator): unknown;
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
                }): _91.MsgEditValidator;
            };
            MsgEditValidatorResponse: {
                encode(_: _91.MsgEditValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _91.MsgEditValidatorResponse;
                fromJSON(_: any): _91.MsgEditValidatorResponse;
                toJSON(_: _91.MsgEditValidatorResponse): unknown;
                fromPartial(_: {}): _91.MsgEditValidatorResponse;
            };
            MsgDelegate: {
                encode(message: _91.MsgDelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _91.MsgDelegate;
                fromJSON(object: any): _91.MsgDelegate;
                toJSON(message: _91.MsgDelegate): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _91.MsgDelegate;
            };
            MsgDelegateResponse: {
                encode(_: _91.MsgDelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _91.MsgDelegateResponse;
                fromJSON(_: any): _91.MsgDelegateResponse;
                toJSON(_: _91.MsgDelegateResponse): unknown;
                fromPartial(_: {}): _91.MsgDelegateResponse;
            };
            MsgBeginRedelegate: {
                encode(message: _91.MsgBeginRedelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _91.MsgBeginRedelegate;
                fromJSON(object: any): _91.MsgBeginRedelegate;
                toJSON(message: _91.MsgBeginRedelegate): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorSrcAddress?: string;
                    validatorDstAddress?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _91.MsgBeginRedelegate;
            };
            MsgBeginRedelegateResponse: {
                encode(message: _91.MsgBeginRedelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _91.MsgBeginRedelegateResponse;
                fromJSON(object: any): _91.MsgBeginRedelegateResponse;
                toJSON(message: _91.MsgBeginRedelegateResponse): unknown;
                fromPartial(object: {
                    completionTime?: {
                        seconds?: bigint;
                        nanos?: number;
                    };
                }): _91.MsgBeginRedelegateResponse;
            };
            MsgUndelegate: {
                encode(message: _91.MsgUndelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _91.MsgUndelegate;
                fromJSON(object: any): _91.MsgUndelegate;
                toJSON(message: _91.MsgUndelegate): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _91.MsgUndelegate;
            };
            MsgUndelegateResponse: {
                encode(message: _91.MsgUndelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _91.MsgUndelegateResponse;
                fromJSON(object: any): _91.MsgUndelegateResponse;
                toJSON(message: _91.MsgUndelegateResponse): unknown;
                fromPartial(object: {
                    completionTime?: {
                        seconds?: bigint;
                        nanos?: number;
                    };
                }): _91.MsgUndelegateResponse;
            };
            MsgCancelUnbondingDelegation: {
                encode(message: _91.MsgCancelUnbondingDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _91.MsgCancelUnbondingDelegation;
                fromJSON(object: any): _91.MsgCancelUnbondingDelegation;
                toJSON(message: _91.MsgCancelUnbondingDelegation): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                    creationHeight?: bigint;
                }): _91.MsgCancelUnbondingDelegation;
            };
            MsgCancelUnbondingDelegationResponse: {
                encode(_: _91.MsgCancelUnbondingDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _91.MsgCancelUnbondingDelegationResponse;
                fromJSON(_: any): _91.MsgCancelUnbondingDelegationResponse;
                toJSON(_: _91.MsgCancelUnbondingDelegationResponse): unknown;
                fromPartial(_: {}): _91.MsgCancelUnbondingDelegationResponse;
            };
            MsgUpdateParams: {
                encode(message: _91.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _91.MsgUpdateParams;
                fromJSON(object: any): _91.MsgUpdateParams;
                toJSON(message: _91.MsgUpdateParams): unknown;
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
                }): _91.MsgUpdateParams;
            };
            MsgUpdateParamsResponse: {
                encode(_: _91.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _91.MsgUpdateParamsResponse;
                fromJSON(_: any): _91.MsgUpdateParamsResponse;
                toJSON(_: _91.MsgUpdateParamsResponse): unknown;
                fromPartial(_: {}): _91.MsgUpdateParamsResponse;
            };
            Cosmos_cryptoPubKey_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            bondStatusFromJSON(object: any): _90.BondStatus;
            bondStatusToJSON(object: _90.BondStatus): string;
            infractionFromJSON(object: any): _90.Infraction;
            infractionToJSON(object: _90.Infraction): string;
            BondStatus: typeof _90.BondStatus;
            Infraction: typeof _90.Infraction;
            HistoricalInfo: {
                encode(message: _90.HistoricalInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _90.HistoricalInfo;
                fromJSON(object: any): _90.HistoricalInfo;
                toJSON(message: _90.HistoricalInfo): unknown;
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
                        status?: _90.BondStatus;
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
                }): _90.HistoricalInfo;
            };
            CommissionRates: {
                encode(message: _90.CommissionRates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _90.CommissionRates;
                fromJSON(object: any): _90.CommissionRates;
                toJSON(message: _90.CommissionRates): unknown;
                fromPartial(object: {
                    rate?: string;
                    maxRate?: string;
                    maxChangeRate?: string;
                }): _90.CommissionRates;
            };
            Commission: {
                encode(message: _90.Commission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _90.Commission;
                fromJSON(object: any): _90.Commission;
                toJSON(message: _90.Commission): unknown;
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
                }): _90.Commission;
            };
            Description: {
                encode(message: _90.Description, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _90.Description;
                fromJSON(object: any): _90.Description;
                toJSON(message: _90.Description): unknown;
                fromPartial(object: {
                    moniker?: string;
                    identity?: string;
                    website?: string;
                    securityContact?: string;
                    details?: string;
                }): _90.Description;
            };
            Validator: {
                encode(message: _90.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _90.Validator;
                fromJSON(object: any): _90.Validator;
                toJSON(message: _90.Validator): unknown;
                fromPartial(object: {
                    operatorAddress?: string;
                    consensusPubkey?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    jailed?: boolean;
                    status?: _90.BondStatus;
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
                }): _90.Validator;
            };
            ValAddresses: {
                encode(message: _90.ValAddresses, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _90.ValAddresses;
                fromJSON(object: any): _90.ValAddresses;
                toJSON(message: _90.ValAddresses): unknown;
                fromPartial(object: {
                    addresses?: string[];
                }): _90.ValAddresses;
            };
            DVPair: {
                encode(message: _90.DVPair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _90.DVPair;
                fromJSON(object: any): _90.DVPair;
                toJSON(message: _90.DVPair): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                }): _90.DVPair;
            };
            DVPairs: {
                encode(message: _90.DVPairs, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _90.DVPairs;
                fromJSON(object: any): _90.DVPairs;
                toJSON(message: _90.DVPairs): unknown;
                fromPartial(object: {
                    pairs?: {
                        delegatorAddress?: string;
                        validatorAddress?: string;
                    }[];
                }): _90.DVPairs;
            };
            DVVTriplet: {
                encode(message: _90.DVVTriplet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _90.DVVTriplet;
                fromJSON(object: any): _90.DVVTriplet;
                toJSON(message: _90.DVVTriplet): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorSrcAddress?: string;
                    validatorDstAddress?: string;
                }): _90.DVVTriplet;
            };
            DVVTriplets: {
                encode(message: _90.DVVTriplets, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _90.DVVTriplets;
                fromJSON(object: any): _90.DVVTriplets;
                toJSON(message: _90.DVVTriplets): unknown;
                fromPartial(object: {
                    triplets?: {
                        delegatorAddress?: string;
                        validatorSrcAddress?: string;
                        validatorDstAddress?: string;
                    }[];
                }): _90.DVVTriplets;
            };
            Delegation: {
                encode(message: _90.Delegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _90.Delegation;
                fromJSON(object: any): _90.Delegation;
                toJSON(message: _90.Delegation): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                    shares?: string;
                }): _90.Delegation;
            };
            UnbondingDelegation: {
                encode(message: _90.UnbondingDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _90.UnbondingDelegation;
                fromJSON(object: any): _90.UnbondingDelegation;
                toJSON(message: _90.UnbondingDelegation): unknown;
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
                }): _90.UnbondingDelegation;
            };
            UnbondingDelegationEntry: {
                encode(message: _90.UnbondingDelegationEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _90.UnbondingDelegationEntry;
                fromJSON(object: any): _90.UnbondingDelegationEntry;
                toJSON(message: _90.UnbondingDelegationEntry): unknown;
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
                }): _90.UnbondingDelegationEntry;
            };
            RedelegationEntry: {
                encode(message: _90.RedelegationEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _90.RedelegationEntry;
                fromJSON(object: any): _90.RedelegationEntry;
                toJSON(message: _90.RedelegationEntry): unknown;
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
                }): _90.RedelegationEntry;
            };
            Redelegation: {
                encode(message: _90.Redelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _90.Redelegation;
                fromJSON(object: any): _90.Redelegation;
                toJSON(message: _90.Redelegation): unknown;
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
                }): _90.Redelegation;
            };
            Params: {
                encode(message: _90.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _90.Params;
                fromJSON(object: any): _90.Params;
                toJSON(message: _90.Params): unknown;
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
                }): _90.Params;
            };
            DelegationResponse: {
                encode(message: _90.DelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _90.DelegationResponse;
                fromJSON(object: any): _90.DelegationResponse;
                toJSON(message: _90.DelegationResponse): unknown;
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
                }): _90.DelegationResponse;
            };
            RedelegationEntryResponse: {
                encode(message: _90.RedelegationEntryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _90.RedelegationEntryResponse;
                fromJSON(object: any): _90.RedelegationEntryResponse;
                toJSON(message: _90.RedelegationEntryResponse): unknown;
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
                }): _90.RedelegationEntryResponse;
            };
            RedelegationResponse: {
                encode(message: _90.RedelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _90.RedelegationResponse;
                fromJSON(object: any): _90.RedelegationResponse;
                toJSON(message: _90.RedelegationResponse): unknown;
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
                }): _90.RedelegationResponse;
            };
            Pool: {
                encode(message: _90.Pool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _90.Pool;
                fromJSON(object: any): _90.Pool;
                toJSON(message: _90.Pool): unknown;
                fromPartial(object: {
                    notBondedTokens?: string;
                    bondedTokens?: string;
                }): _90.Pool;
            };
            ValidatorUpdates: {
                encode(message: _90.ValidatorUpdates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _90.ValidatorUpdates;
                fromJSON(object: any): _90.ValidatorUpdates;
                toJSON(message: _90.ValidatorUpdates): unknown;
                fromPartial(object: {
                    updates?: {
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        power?: bigint;
                    }[];
                }): _90.ValidatorUpdates;
            };
            QueryValidatorsRequest: {
                encode(message: _89.QueryValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _89.QueryValidatorsRequest;
                fromJSON(object: any): _89.QueryValidatorsRequest;
                toJSON(message: _89.QueryValidatorsRequest): unknown;
                fromPartial(object: {
                    status?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: bigint;
                        limit?: bigint;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _89.QueryValidatorsRequest;
            };
            QueryValidatorsResponse: {
                encode(message: _89.QueryValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _89.QueryValidatorsResponse;
                fromJSON(object: any): _89.QueryValidatorsResponse;
                toJSON(message: _89.QueryValidatorsResponse): unknown;
                fromPartial(object: {
                    validators?: {
                        operatorAddress?: string;
                        consensusPubkey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        jailed?: boolean;
                        status?: _90.BondStatus;
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
                }): _89.QueryValidatorsResponse;
            };
            QueryValidatorRequest: {
                encode(message: _89.QueryValidatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _89.QueryValidatorRequest;
                fromJSON(object: any): _89.QueryValidatorRequest;
                toJSON(message: _89.QueryValidatorRequest): unknown;
                fromPartial(object: {
                    validatorAddr?: string;
                }): _89.QueryValidatorRequest;
            };
            QueryValidatorResponse: {
                encode(message: _89.QueryValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _89.QueryValidatorResponse;
                fromJSON(object: any): _89.QueryValidatorResponse;
                toJSON(message: _89.QueryValidatorResponse): unknown;
                fromPartial(object: {
                    validator?: {
                        operatorAddress?: string;
                        consensusPubkey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        jailed?: boolean;
                        status?: _90.BondStatus;
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
                }): _89.QueryValidatorResponse;
            };
            QueryValidatorDelegationsRequest: {
                encode(message: _89.QueryValidatorDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _89.QueryValidatorDelegationsRequest;
                fromJSON(object: any): _89.QueryValidatorDelegationsRequest;
                toJSON(message: _89.QueryValidatorDelegationsRequest): unknown;
                fromPartial(object: {
                    validatorAddr?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: bigint;
                        limit?: bigint;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _89.QueryValidatorDelegationsRequest;
            };
            QueryValidatorDelegationsResponse: {
                encode(message: _89.QueryValidatorDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _89.QueryValidatorDelegationsResponse;
                fromJSON(object: any): _89.QueryValidatorDelegationsResponse;
                toJSON(message: _89.QueryValidatorDelegationsResponse): unknown;
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
                }): _89.QueryValidatorDelegationsResponse;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                encode(message: _89.QueryValidatorUnbondingDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _89.QueryValidatorUnbondingDelegationsRequest;
                fromJSON(object: any): _89.QueryValidatorUnbondingDelegationsRequest;
                toJSON(message: _89.QueryValidatorUnbondingDelegationsRequest): unknown;
                fromPartial(object: {
                    validatorAddr?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: bigint;
                        limit?: bigint;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _89.QueryValidatorUnbondingDelegationsRequest;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                encode(message: _89.QueryValidatorUnbondingDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _89.QueryValidatorUnbondingDelegationsResponse;
                fromJSON(object: any): _89.QueryValidatorUnbondingDelegationsResponse;
                toJSON(message: _89.QueryValidatorUnbondingDelegationsResponse): unknown;
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
                }): _89.QueryValidatorUnbondingDelegationsResponse;
            };
            QueryDelegationRequest: {
                encode(message: _89.QueryDelegationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _89.QueryDelegationRequest;
                fromJSON(object: any): _89.QueryDelegationRequest;
                toJSON(message: _89.QueryDelegationRequest): unknown;
                fromPartial(object: {
                    delegatorAddr?: string;
                    validatorAddr?: string;
                }): _89.QueryDelegationRequest;
            };
            QueryDelegationResponse: {
                encode(message: _89.QueryDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _89.QueryDelegationResponse;
                fromJSON(object: any): _89.QueryDelegationResponse;
                toJSON(message: _89.QueryDelegationResponse): unknown;
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
                }): _89.QueryDelegationResponse;
            };
            QueryUnbondingDelegationRequest: {
                encode(message: _89.QueryUnbondingDelegationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _89.QueryUnbondingDelegationRequest;
                fromJSON(object: any): _89.QueryUnbondingDelegationRequest;
                toJSON(message: _89.QueryUnbondingDelegationRequest): unknown;
                fromPartial(object: {
                    delegatorAddr?: string;
                    validatorAddr?: string;
                }): _89.QueryUnbondingDelegationRequest;
            };
            QueryUnbondingDelegationResponse: {
                encode(message: _89.QueryUnbondingDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _89.QueryUnbondingDelegationResponse;
                fromJSON(object: any): _89.QueryUnbondingDelegationResponse;
                toJSON(message: _89.QueryUnbondingDelegationResponse): unknown;
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
                }): _89.QueryUnbondingDelegationResponse;
            };
            QueryDelegatorDelegationsRequest: {
                encode(message: _89.QueryDelegatorDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _89.QueryDelegatorDelegationsRequest;
                fromJSON(object: any): _89.QueryDelegatorDelegationsRequest;
                toJSON(message: _89.QueryDelegatorDelegationsRequest): unknown;
                fromPartial(object: {
                    delegatorAddr?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: bigint;
                        limit?: bigint;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _89.QueryDelegatorDelegationsRequest;
            };
            QueryDelegatorDelegationsResponse: {
                encode(message: _89.QueryDelegatorDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _89.QueryDelegatorDelegationsResponse;
                fromJSON(object: any): _89.QueryDelegatorDelegationsResponse;
                toJSON(message: _89.QueryDelegatorDelegationsResponse): unknown;
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
                }): _89.QueryDelegatorDelegationsResponse;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                encode(message: _89.QueryDelegatorUnbondingDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _89.QueryDelegatorUnbondingDelegationsRequest;
                fromJSON(object: any): _89.QueryDelegatorUnbondingDelegationsRequest;
                toJSON(message: _89.QueryDelegatorUnbondingDelegationsRequest): unknown;
                fromPartial(object: {
                    delegatorAddr?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: bigint;
                        limit?: bigint;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _89.QueryDelegatorUnbondingDelegationsRequest;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                encode(message: _89.QueryDelegatorUnbondingDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _89.QueryDelegatorUnbondingDelegationsResponse;
                fromJSON(object: any): _89.QueryDelegatorUnbondingDelegationsResponse;
                toJSON(message: _89.QueryDelegatorUnbondingDelegationsResponse): unknown;
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
                }): _89.QueryDelegatorUnbondingDelegationsResponse;
            };
            QueryRedelegationsRequest: {
                encode(message: _89.QueryRedelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _89.QueryRedelegationsRequest;
                fromJSON(object: any): _89.QueryRedelegationsRequest;
                toJSON(message: _89.QueryRedelegationsRequest): unknown;
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
                }): _89.QueryRedelegationsRequest;
            };
            QueryRedelegationsResponse: {
                encode(message: _89.QueryRedelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _89.QueryRedelegationsResponse;
                fromJSON(object: any): _89.QueryRedelegationsResponse;
                toJSON(message: _89.QueryRedelegationsResponse): unknown;
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
                }): _89.QueryRedelegationsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _89.QueryDelegatorValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _89.QueryDelegatorValidatorsRequest;
                fromJSON(object: any): _89.QueryDelegatorValidatorsRequest;
                toJSON(message: _89.QueryDelegatorValidatorsRequest): unknown;
                fromPartial(object: {
                    delegatorAddr?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: bigint;
                        limit?: bigint;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _89.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _89.QueryDelegatorValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _89.QueryDelegatorValidatorsResponse;
                fromJSON(object: any): _89.QueryDelegatorValidatorsResponse;
                toJSON(message: _89.QueryDelegatorValidatorsResponse): unknown;
                fromPartial(object: {
                    validators?: {
                        operatorAddress?: string;
                        consensusPubkey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        jailed?: boolean;
                        status?: _90.BondStatus;
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
                }): _89.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorValidatorRequest: {
                encode(message: _89.QueryDelegatorValidatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _89.QueryDelegatorValidatorRequest;
                fromJSON(object: any): _89.QueryDelegatorValidatorRequest;
                toJSON(message: _89.QueryDelegatorValidatorRequest): unknown;
                fromPartial(object: {
                    delegatorAddr?: string;
                    validatorAddr?: string;
                }): _89.QueryDelegatorValidatorRequest;
            };
            QueryDelegatorValidatorResponse: {
                encode(message: _89.QueryDelegatorValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _89.QueryDelegatorValidatorResponse;
                fromJSON(object: any): _89.QueryDelegatorValidatorResponse;
                toJSON(message: _89.QueryDelegatorValidatorResponse): unknown;
                fromPartial(object: {
                    validator?: {
                        operatorAddress?: string;
                        consensusPubkey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        jailed?: boolean;
                        status?: _90.BondStatus;
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
                }): _89.QueryDelegatorValidatorResponse;
            };
            QueryHistoricalInfoRequest: {
                encode(message: _89.QueryHistoricalInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _89.QueryHistoricalInfoRequest;
                fromJSON(object: any): _89.QueryHistoricalInfoRequest;
                toJSON(message: _89.QueryHistoricalInfoRequest): unknown;
                fromPartial(object: {
                    height?: bigint;
                }): _89.QueryHistoricalInfoRequest;
            };
            QueryHistoricalInfoResponse: {
                encode(message: _89.QueryHistoricalInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _89.QueryHistoricalInfoResponse;
                fromJSON(object: any): _89.QueryHistoricalInfoResponse;
                toJSON(message: _89.QueryHistoricalInfoResponse): unknown;
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
                            status?: _90.BondStatus;
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
                }): _89.QueryHistoricalInfoResponse;
            };
            QueryPoolRequest: {
                encode(_: _89.QueryPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _89.QueryPoolRequest;
                fromJSON(_: any): _89.QueryPoolRequest;
                toJSON(_: _89.QueryPoolRequest): unknown;
                fromPartial(_: {}): _89.QueryPoolRequest;
            };
            QueryPoolResponse: {
                encode(message: _89.QueryPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _89.QueryPoolResponse;
                fromJSON(object: any): _89.QueryPoolResponse;
                toJSON(message: _89.QueryPoolResponse): unknown;
                fromPartial(object: {
                    pool?: {
                        notBondedTokens?: string;
                        bondedTokens?: string;
                    };
                }): _89.QueryPoolResponse;
            };
            QueryParamsRequest: {
                encode(_: _89.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _89.QueryParamsRequest;
                fromJSON(_: any): _89.QueryParamsRequest;
                toJSON(_: _89.QueryParamsRequest): unknown;
                fromPartial(_: {}): _89.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _89.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _89.QueryParamsResponse;
                fromJSON(object: any): _89.QueryParamsResponse;
                toJSON(message: _89.QueryParamsResponse): unknown;
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
                }): _89.QueryParamsResponse;
            };
            GenesisState: {
                encode(message: _88.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _88.GenesisState;
                fromJSON(object: any): _88.GenesisState;
                toJSON(message: _88.GenesisState): unknown;
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
                        status?: _90.BondStatus;
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
                }): _88.GenesisState;
            };
            LastValidatorPower: {
                encode(message: _88.LastValidatorPower, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _88.LastValidatorPower;
                fromJSON(object: any): _88.LastValidatorPower;
                toJSON(message: _88.LastValidatorPower): unknown;
                fromPartial(object: {
                    address?: string;
                    power?: bigint;
                }): _88.LastValidatorPower;
            };
            authorizationTypeFromJSON(object: any): _87.AuthorizationType;
            authorizationTypeToJSON(object: _87.AuthorizationType): string;
            AuthorizationType: typeof _87.AuthorizationType;
            StakeAuthorization: {
                encode(message: _87.StakeAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _87.StakeAuthorization;
                fromJSON(object: any): _87.StakeAuthorization;
                toJSON(message: _87.StakeAuthorization): unknown;
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
                    authorizationType?: _87.AuthorizationType;
                }): _87.StakeAuthorization;
            };
            StakeAuthorization_Validators: {
                encode(message: _87.StakeAuthorization_Validators, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _87.StakeAuthorization_Validators;
                fromJSON(object: any): _87.StakeAuthorization_Validators;
                toJSON(message: _87.StakeAuthorization_Validators): unknown;
                fromPartial(object: {
                    address?: string[];
                }): _87.StakeAuthorization_Validators;
            };
        };
    }
    namespace tx {
        namespace config {
            const v1: {
                Config: {
                    encode(message: _92.Config, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _92.Config;
                    fromJSON(object: any): _92.Config;
                    toJSON(message: _92.Config): unknown;
                    fromPartial(object: {
                        skipAnteHandler?: boolean;
                        skipPostHandler?: boolean;
                    }): _92.Config;
                };
            };
        }
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _93.SignMode;
                signModeToJSON(object: _93.SignMode): string;
                SignMode: typeof _93.SignMode;
                SignatureDescriptors: {
                    encode(message: _93.SignatureDescriptors, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _93.SignatureDescriptors;
                    fromJSON(object: any): _93.SignatureDescriptors;
                    toJSON(message: _93.SignatureDescriptors): unknown;
                    fromPartial(object: {
                        signatures?: {
                            publicKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            data?: {
                                single?: {
                                    mode?: _93.SignMode;
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
                    }): _93.SignatureDescriptors;
                };
                SignatureDescriptor: {
                    encode(message: _93.SignatureDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _93.SignatureDescriptor;
                    fromJSON(object: any): _93.SignatureDescriptor;
                    toJSON(message: _93.SignatureDescriptor): unknown;
                    fromPartial(object: {
                        publicKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        data?: {
                            single?: {
                                mode?: _93.SignMode;
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
                    }): _93.SignatureDescriptor;
                };
                SignatureDescriptor_Data: {
                    encode(message: _93.SignatureDescriptor_Data, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _93.SignatureDescriptor_Data;
                    fromJSON(object: any): _93.SignatureDescriptor_Data;
                    toJSON(message: _93.SignatureDescriptor_Data): unknown;
                    fromPartial(object: {
                        single?: {
                            mode?: _93.SignMode;
                            signature?: Uint8Array;
                        };
                        multi?: {
                            bitarray?: {
                                extraBitsStored?: number;
                                elems?: Uint8Array;
                            };
                            signatures?: any[];
                        };
                    }): _93.SignatureDescriptor_Data;
                };
                SignatureDescriptor_Data_Single: {
                    encode(message: _93.SignatureDescriptor_Data_Single, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _93.SignatureDescriptor_Data_Single;
                    fromJSON(object: any): _93.SignatureDescriptor_Data_Single;
                    toJSON(message: _93.SignatureDescriptor_Data_Single): unknown;
                    fromPartial(object: {
                        mode?: _93.SignMode;
                        signature?: Uint8Array;
                    }): _93.SignatureDescriptor_Data_Single;
                };
                SignatureDescriptor_Data_Multi: {
                    encode(message: _93.SignatureDescriptor_Data_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _93.SignatureDescriptor_Data_Multi;
                    fromJSON(object: any): _93.SignatureDescriptor_Data_Multi;
                    toJSON(message: _93.SignatureDescriptor_Data_Multi): unknown;
                    fromPartial(object: {
                        bitarray?: {
                            extraBitsStored?: number;
                            elems?: Uint8Array;
                        };
                        signatures?: {
                            single?: {
                                mode?: _93.SignMode;
                                signature?: Uint8Array;
                            };
                            multi?: any;
                        }[];
                    }): _93.SignatureDescriptor_Data_Multi;
                };
            };
        }
        const v1beta1: {
            ServiceClientImpl: typeof _210.ServiceClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                simulate(request: _94.SimulateRequest): Promise<_94.SimulateResponse>;
                getTx(request: _94.GetTxRequest): Promise<_94.GetTxResponse>;
                broadcastTx(request: _94.BroadcastTxRequest): Promise<_94.BroadcastTxResponse>;
                getTxsEvent(request: _94.GetTxsEventRequest): Promise<_94.GetTxsEventResponse>;
                getBlockWithTxs(request: _94.GetBlockWithTxsRequest): Promise<_94.GetBlockWithTxsResponse>;
                txDecode(request: _94.TxDecodeRequest): Promise<_94.TxDecodeResponse>;
                txEncode(request: _94.TxEncodeRequest): Promise<_94.TxEncodeResponse>;
                txEncodeAmino(request: _94.TxEncodeAminoRequest): Promise<_94.TxEncodeAminoResponse>;
                txDecodeAmino(request: _94.TxDecodeAminoRequest): Promise<_94.TxDecodeAminoResponse>;
            };
            LCDQueryClient: typeof _194.LCDQueryClient;
            Tx: {
                encode(message: _95.Tx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.Tx;
                fromJSON(object: any): _95.Tx;
                toJSON(message: _95.Tx): unknown;
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
                                    mode?: _93.SignMode;
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
                }): _95.Tx;
            };
            TxRaw: {
                encode(message: _95.TxRaw, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.TxRaw;
                fromJSON(object: any): _95.TxRaw;
                toJSON(message: _95.TxRaw): unknown;
                fromPartial(object: {
                    bodyBytes?: Uint8Array;
                    authInfoBytes?: Uint8Array;
                    signatures?: Uint8Array[];
                }): _95.TxRaw;
            };
            SignDoc: {
                encode(message: _95.SignDoc, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.SignDoc;
                fromJSON(object: any): _95.SignDoc;
                toJSON(message: _95.SignDoc): unknown;
                fromPartial(object: {
                    bodyBytes?: Uint8Array;
                    authInfoBytes?: Uint8Array;
                    chainId?: string;
                    accountNumber?: bigint;
                }): _95.SignDoc;
            };
            SignDocDirectAux: {
                encode(message: _95.SignDocDirectAux, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.SignDocDirectAux;
                fromJSON(object: any): _95.SignDocDirectAux;
                toJSON(message: _95.SignDocDirectAux): unknown;
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
                }): _95.SignDocDirectAux;
            };
            TxBody: {
                encode(message: _95.TxBody, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.TxBody;
                fromJSON(object: any): _95.TxBody;
                toJSON(message: _95.TxBody): unknown;
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
                }): _95.TxBody;
            };
            AuthInfo: {
                encode(message: _95.AuthInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.AuthInfo;
                fromJSON(object: any): _95.AuthInfo;
                toJSON(message: _95.AuthInfo): unknown;
                fromPartial(object: {
                    signerInfos?: {
                        publicKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        modeInfo?: {
                            single?: {
                                mode?: _93.SignMode;
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
                }): _95.AuthInfo;
            };
            SignerInfo: {
                encode(message: _95.SignerInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.SignerInfo;
                fromJSON(object: any): _95.SignerInfo;
                toJSON(message: _95.SignerInfo): unknown;
                fromPartial(object: {
                    publicKey?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    modeInfo?: {
                        single?: {
                            mode?: _93.SignMode;
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
                }): _95.SignerInfo;
            };
            ModeInfo: {
                encode(message: _95.ModeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.ModeInfo;
                fromJSON(object: any): _95.ModeInfo;
                toJSON(message: _95.ModeInfo): unknown;
                fromPartial(object: {
                    single?: {
                        mode?: _93.SignMode;
                    };
                    multi?: {
                        bitarray?: {
                            extraBitsStored?: number;
                            elems?: Uint8Array;
                        };
                        modeInfos?: any[];
                    };
                }): _95.ModeInfo;
            };
            ModeInfo_Single: {
                encode(message: _95.ModeInfo_Single, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.ModeInfo_Single;
                fromJSON(object: any): _95.ModeInfo_Single;
                toJSON(message: _95.ModeInfo_Single): unknown;
                fromPartial(object: {
                    mode?: _93.SignMode;
                }): _95.ModeInfo_Single;
            };
            ModeInfo_Multi: {
                encode(message: _95.ModeInfo_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.ModeInfo_Multi;
                fromJSON(object: any): _95.ModeInfo_Multi;
                toJSON(message: _95.ModeInfo_Multi): unknown;
                fromPartial(object: {
                    bitarray?: {
                        extraBitsStored?: number;
                        elems?: Uint8Array;
                    };
                    modeInfos?: {
                        single?: {
                            mode?: _93.SignMode;
                        };
                        multi?: any;
                    }[];
                }): _95.ModeInfo_Multi;
            };
            Fee: {
                encode(message: _95.Fee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.Fee;
                fromJSON(object: any): _95.Fee;
                toJSON(message: _95.Fee): unknown;
                fromPartial(object: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    gasLimit?: bigint;
                    payer?: string;
                    granter?: string;
                }): _95.Fee;
            };
            Tip: {
                encode(message: _95.Tip, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.Tip;
                fromJSON(object: any): _95.Tip;
                toJSON(message: _95.Tip): unknown;
                fromPartial(object: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    tipper?: string;
                }): _95.Tip;
            };
            AuxSignerData: {
                encode(message: _95.AuxSignerData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.AuxSignerData;
                fromJSON(object: any): _95.AuxSignerData;
                toJSON(message: _95.AuxSignerData): unknown;
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
                    mode?: _93.SignMode;
                    sig?: Uint8Array;
                }): _95.AuxSignerData;
            };
            orderByFromJSON(object: any): _94.OrderBy;
            orderByToJSON(object: _94.OrderBy): string;
            broadcastModeFromJSON(object: any): _94.BroadcastMode;
            broadcastModeToJSON(object: _94.BroadcastMode): string;
            OrderBy: typeof _94.OrderBy;
            BroadcastMode: typeof _94.BroadcastMode;
            GetTxsEventRequest: {
                encode(message: _94.GetTxsEventRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _94.GetTxsEventRequest;
                fromJSON(object: any): _94.GetTxsEventRequest;
                toJSON(message: _94.GetTxsEventRequest): unknown;
                fromPartial(object: {
                    events?: string[];
                    pagination?: {
                        key?: Uint8Array;
                        offset?: bigint;
                        limit?: bigint;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                    orderBy?: _94.OrderBy;
                    page?: bigint;
                    limit?: bigint;
                }): _94.GetTxsEventRequest;
            };
            GetTxsEventResponse: {
                encode(message: _94.GetTxsEventResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _94.GetTxsEventResponse;
                fromJSON(object: any): _94.GetTxsEventResponse;
                toJSON(message: _94.GetTxsEventResponse): unknown;
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
                                        mode?: _93.SignMode;
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
                }): _94.GetTxsEventResponse;
            };
            BroadcastTxRequest: {
                encode(message: _94.BroadcastTxRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _94.BroadcastTxRequest;
                fromJSON(object: any): _94.BroadcastTxRequest;
                toJSON(message: _94.BroadcastTxRequest): unknown;
                fromPartial(object: {
                    txBytes?: Uint8Array;
                    mode?: _94.BroadcastMode;
                }): _94.BroadcastTxRequest;
            };
            BroadcastTxResponse: {
                encode(message: _94.BroadcastTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _94.BroadcastTxResponse;
                fromJSON(object: any): _94.BroadcastTxResponse;
                toJSON(message: _94.BroadcastTxResponse): unknown;
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
                }): _94.BroadcastTxResponse;
            };
            SimulateRequest: {
                encode(message: _94.SimulateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _94.SimulateRequest;
                fromJSON(object: any): _94.SimulateRequest;
                toJSON(message: _94.SimulateRequest): unknown;
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
                                        mode?: _93.SignMode;
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
                }): _94.SimulateRequest;
            };
            SimulateResponse: {
                encode(message: _94.SimulateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _94.SimulateResponse;
                fromJSON(object: any): _94.SimulateResponse;
                toJSON(message: _94.SimulateResponse): unknown;
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
                }): _94.SimulateResponse;
            };
            GetTxRequest: {
                encode(message: _94.GetTxRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _94.GetTxRequest;
                fromJSON(object: any): _94.GetTxRequest;
                toJSON(message: _94.GetTxRequest): unknown;
                fromPartial(object: {
                    hash?: string;
                }): _94.GetTxRequest;
            };
            GetTxResponse: {
                encode(message: _94.GetTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _94.GetTxResponse;
                fromJSON(object: any): _94.GetTxResponse;
                toJSON(message: _94.GetTxResponse): unknown;
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
                                        mode?: _93.SignMode;
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
                }): _94.GetTxResponse;
            };
            GetBlockWithTxsRequest: {
                encode(message: _94.GetBlockWithTxsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _94.GetBlockWithTxsRequest;
                fromJSON(object: any): _94.GetBlockWithTxsRequest;
                toJSON(message: _94.GetBlockWithTxsRequest): unknown;
                fromPartial(object: {
                    height?: bigint;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: bigint;
                        limit?: bigint;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _94.GetBlockWithTxsRequest;
            };
            GetBlockWithTxsResponse: {
                encode(message: _94.GetBlockWithTxsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _94.GetBlockWithTxsResponse;
                fromJSON(object: any): _94.GetBlockWithTxsResponse;
                toJSON(message: _94.GetBlockWithTxsResponse): unknown;
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
                                        mode?: _93.SignMode;
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
                }): _94.GetBlockWithTxsResponse;
            };
            TxDecodeRequest: {
                encode(message: _94.TxDecodeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _94.TxDecodeRequest;
                fromJSON(object: any): _94.TxDecodeRequest;
                toJSON(message: _94.TxDecodeRequest): unknown;
                fromPartial(object: {
                    txBytes?: Uint8Array;
                }): _94.TxDecodeRequest;
            };
            TxDecodeResponse: {
                encode(message: _94.TxDecodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _94.TxDecodeResponse;
                fromJSON(object: any): _94.TxDecodeResponse;
                toJSON(message: _94.TxDecodeResponse): unknown;
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
                                        mode?: _93.SignMode;
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
                }): _94.TxDecodeResponse;
            };
            TxEncodeRequest: {
                encode(message: _94.TxEncodeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _94.TxEncodeRequest;
                fromJSON(object: any): _94.TxEncodeRequest;
                toJSON(message: _94.TxEncodeRequest): unknown;
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
                                        mode?: _93.SignMode;
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
                }): _94.TxEncodeRequest;
            };
            TxEncodeResponse: {
                encode(message: _94.TxEncodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _94.TxEncodeResponse;
                fromJSON(object: any): _94.TxEncodeResponse;
                toJSON(message: _94.TxEncodeResponse): unknown;
                fromPartial(object: {
                    txBytes?: Uint8Array;
                }): _94.TxEncodeResponse;
            };
            TxEncodeAminoRequest: {
                encode(message: _94.TxEncodeAminoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _94.TxEncodeAminoRequest;
                fromJSON(object: any): _94.TxEncodeAminoRequest;
                toJSON(message: _94.TxEncodeAminoRequest): unknown;
                fromPartial(object: {
                    aminoJson?: string;
                }): _94.TxEncodeAminoRequest;
            };
            TxEncodeAminoResponse: {
                encode(message: _94.TxEncodeAminoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _94.TxEncodeAminoResponse;
                fromJSON(object: any): _94.TxEncodeAminoResponse;
                toJSON(message: _94.TxEncodeAminoResponse): unknown;
                fromPartial(object: {
                    aminoBinary?: Uint8Array;
                }): _94.TxEncodeAminoResponse;
            };
            TxDecodeAminoRequest: {
                encode(message: _94.TxDecodeAminoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _94.TxDecodeAminoRequest;
                fromJSON(object: any): _94.TxDecodeAminoRequest;
                toJSON(message: _94.TxDecodeAminoRequest): unknown;
                fromPartial(object: {
                    aminoBinary?: Uint8Array;
                }): _94.TxDecodeAminoRequest;
            };
            TxDecodeAminoResponse: {
                encode(message: _94.TxDecodeAminoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _94.TxDecodeAminoResponse;
                fromJSON(object: any): _94.TxDecodeAminoResponse;
                toJSON(message: _94.TxDecodeAminoResponse): unknown;
                fromPartial(object: {
                    aminoJson?: string;
                }): _94.TxDecodeAminoResponse;
            };
        };
    }
    namespace upgrade {
        namespace module {
            const v1: {
                Module: {
                    encode(message: _96.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _96.Module;
                    fromJSON(object: any): _96.Module;
                    toJSON(message: _96.Module): unknown;
                    fromPartial(object: {
                        authority?: string;
                    }): _96.Module;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _222.MsgClientImpl;
            QueryClientImpl: typeof _211.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                currentPlan(request?: _97.QueryCurrentPlanRequest): Promise<_97.QueryCurrentPlanResponse>;
                appliedPlan(request: _97.QueryAppliedPlanRequest): Promise<_97.QueryAppliedPlanResponse>;
                upgradedConsensusState(request: _97.QueryUpgradedConsensusStateRequest): Promise<_97.QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: _97.QueryModuleVersionsRequest): Promise<_97.QueryModuleVersionsResponse>;
                authority(request?: _97.QueryAuthorityRequest): Promise<_97.QueryAuthorityResponse>;
            };
            LCDQueryClient: typeof _195.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    softwareUpgrade(value: _98.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUpgrade(value: _98.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    softwareUpgrade(value: _98.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _98.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _98.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _98.MsgCancelUpgrade;
                    };
                };
                toJSON: {
                    softwareUpgrade(value: _98.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: unknown;
                    };
                    cancelUpgrade(value: _98.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    softwareUpgrade(value: any): {
                        typeUrl: string;
                        value: _98.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: any): {
                        typeUrl: string;
                        value: _98.MsgCancelUpgrade;
                    };
                };
                fromPartial: {
                    softwareUpgrade(value: _98.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _98.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _98.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _98.MsgCancelUpgrade;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade": {
                    aminoType: string;
                    toAmino: ({ authority, plan }: _98.MsgSoftwareUpgrade) => {
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
                    }) => _98.MsgSoftwareUpgrade;
                };
                "/cosmos.upgrade.v1beta1.MsgCancelUpgrade": {
                    aminoType: string;
                    toAmino: ({ authority }: _98.MsgCancelUpgrade) => {
                        authority: string;
                    };
                    fromAmino: ({ authority }: {
                        authority: string;
                    }) => _98.MsgCancelUpgrade;
                };
            };
            Plan: {
                encode(message: _99.Plan, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _99.Plan;
                fromJSON(object: any): _99.Plan;
                toJSON(message: _99.Plan): unknown;
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
                }): _99.Plan;
            };
            SoftwareUpgradeProposal: {
                encode(message: _99.SoftwareUpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _99.SoftwareUpgradeProposal;
                fromJSON(object: any): _99.SoftwareUpgradeProposal;
                toJSON(message: _99.SoftwareUpgradeProposal): unknown;
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
                }): _99.SoftwareUpgradeProposal;
            };
            CancelSoftwareUpgradeProposal: {
                encode(message: _99.CancelSoftwareUpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _99.CancelSoftwareUpgradeProposal;
                fromJSON(object: any): _99.CancelSoftwareUpgradeProposal;
                toJSON(message: _99.CancelSoftwareUpgradeProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                }): _99.CancelSoftwareUpgradeProposal;
            };
            ModuleVersion: {
                encode(message: _99.ModuleVersion, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _99.ModuleVersion;
                fromJSON(object: any): _99.ModuleVersion;
                toJSON(message: _99.ModuleVersion): unknown;
                fromPartial(object: {
                    name?: string;
                    version?: bigint;
                }): _99.ModuleVersion;
            };
            MsgSoftwareUpgrade: {
                encode(message: _98.MsgSoftwareUpgrade, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _98.MsgSoftwareUpgrade;
                fromJSON(object: any): _98.MsgSoftwareUpgrade;
                toJSON(message: _98.MsgSoftwareUpgrade): unknown;
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
                }): _98.MsgSoftwareUpgrade;
            };
            MsgSoftwareUpgradeResponse: {
                encode(_: _98.MsgSoftwareUpgradeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _98.MsgSoftwareUpgradeResponse;
                fromJSON(_: any): _98.MsgSoftwareUpgradeResponse;
                toJSON(_: _98.MsgSoftwareUpgradeResponse): unknown;
                fromPartial(_: {}): _98.MsgSoftwareUpgradeResponse;
            };
            MsgCancelUpgrade: {
                encode(message: _98.MsgCancelUpgrade, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _98.MsgCancelUpgrade;
                fromJSON(object: any): _98.MsgCancelUpgrade;
                toJSON(message: _98.MsgCancelUpgrade): unknown;
                fromPartial(object: {
                    authority?: string;
                }): _98.MsgCancelUpgrade;
            };
            MsgCancelUpgradeResponse: {
                encode(_: _98.MsgCancelUpgradeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _98.MsgCancelUpgradeResponse;
                fromJSON(_: any): _98.MsgCancelUpgradeResponse;
                toJSON(_: _98.MsgCancelUpgradeResponse): unknown;
                fromPartial(_: {}): _98.MsgCancelUpgradeResponse;
            };
            QueryCurrentPlanRequest: {
                encode(_: _97.QueryCurrentPlanRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _97.QueryCurrentPlanRequest;
                fromJSON(_: any): _97.QueryCurrentPlanRequest;
                toJSON(_: _97.QueryCurrentPlanRequest): unknown;
                fromPartial(_: {}): _97.QueryCurrentPlanRequest;
            };
            QueryCurrentPlanResponse: {
                encode(message: _97.QueryCurrentPlanResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _97.QueryCurrentPlanResponse;
                fromJSON(object: any): _97.QueryCurrentPlanResponse;
                toJSON(message: _97.QueryCurrentPlanResponse): unknown;
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
                }): _97.QueryCurrentPlanResponse;
            };
            QueryAppliedPlanRequest: {
                encode(message: _97.QueryAppliedPlanRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _97.QueryAppliedPlanRequest;
                fromJSON(object: any): _97.QueryAppliedPlanRequest;
                toJSON(message: _97.QueryAppliedPlanRequest): unknown;
                fromPartial(object: {
                    name?: string;
                }): _97.QueryAppliedPlanRequest;
            };
            QueryAppliedPlanResponse: {
                encode(message: _97.QueryAppliedPlanResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _97.QueryAppliedPlanResponse;
                fromJSON(object: any): _97.QueryAppliedPlanResponse;
                toJSON(message: _97.QueryAppliedPlanResponse): unknown;
                fromPartial(object: {
                    height?: bigint;
                }): _97.QueryAppliedPlanResponse;
            };
            QueryUpgradedConsensusStateRequest: {
                encode(message: _97.QueryUpgradedConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _97.QueryUpgradedConsensusStateRequest;
                fromJSON(object: any): _97.QueryUpgradedConsensusStateRequest;
                toJSON(message: _97.QueryUpgradedConsensusStateRequest): unknown;
                fromPartial(object: {
                    lastHeight?: bigint;
                }): _97.QueryUpgradedConsensusStateRequest;
            };
            QueryUpgradedConsensusStateResponse: {
                encode(message: _97.QueryUpgradedConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _97.QueryUpgradedConsensusStateResponse;
                fromJSON(object: any): _97.QueryUpgradedConsensusStateResponse;
                toJSON(message: _97.QueryUpgradedConsensusStateResponse): unknown;
                fromPartial(object: {
                    upgradedConsensusState?: Uint8Array;
                }): _97.QueryUpgradedConsensusStateResponse;
            };
            QueryModuleVersionsRequest: {
                encode(message: _97.QueryModuleVersionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _97.QueryModuleVersionsRequest;
                fromJSON(object: any): _97.QueryModuleVersionsRequest;
                toJSON(message: _97.QueryModuleVersionsRequest): unknown;
                fromPartial(object: {
                    moduleName?: string;
                }): _97.QueryModuleVersionsRequest;
            };
            QueryModuleVersionsResponse: {
                encode(message: _97.QueryModuleVersionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _97.QueryModuleVersionsResponse;
                fromJSON(object: any): _97.QueryModuleVersionsResponse;
                toJSON(message: _97.QueryModuleVersionsResponse): unknown;
                fromPartial(object: {
                    moduleVersions?: {
                        name?: string;
                        version?: bigint;
                    }[];
                }): _97.QueryModuleVersionsResponse;
            };
            QueryAuthorityRequest: {
                encode(_: _97.QueryAuthorityRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _97.QueryAuthorityRequest;
                fromJSON(_: any): _97.QueryAuthorityRequest;
                toJSON(_: _97.QueryAuthorityRequest): unknown;
                fromPartial(_: {}): _97.QueryAuthorityRequest;
            };
            QueryAuthorityResponse: {
                encode(message: _97.QueryAuthorityResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _97.QueryAuthorityResponse;
                fromJSON(object: any): _97.QueryAuthorityResponse;
                toJSON(message: _97.QueryAuthorityResponse): unknown;
                fromPartial(object: {
                    address?: string;
                }): _97.QueryAuthorityResponse;
            };
        };
    }
    namespace vesting {
        namespace module {
            const v1: {
                Module: {
                    encode(_: _100.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _100.Module;
                    fromJSON(_: any): _100.Module;
                    toJSON(_: _100.Module): unknown;
                    fromPartial(_: {}): _100.Module;
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
                    v1beta1: _212.MsgClientImpl;
                };
                authz: {
                    v1beta1: _213.MsgClientImpl;
                };
                bank: {
                    v1beta1: _214.MsgClientImpl;
                };
                consensus: {
                    v1: _215.MsgClientImpl;
                };
                distribution: {
                    v1beta1: _216.MsgClientImpl;
                };
                feegrant: {
                    v1beta1: _217.MsgClientImpl;
                };
                gov: {
                    v1: _218.MsgClientImpl;
                    v1beta1: _219.MsgClientImpl;
                };
                nft: {
                    v1beta1: _220.MsgClientImpl;
                };
                staking: {
                    v1beta1: _221.MsgClientImpl;
                };
                upgrade: {
                    v1beta1: _222.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: {
                        accounts(request?: _17.QueryAccountsRequest): Promise<_17.QueryAccountsResponse>;
                        account(request: _17.QueryAccountRequest): Promise<_17.QueryAccountResponse>;
                        accountAddressByID(request: _17.QueryAccountAddressByIDRequest): Promise<_17.QueryAccountAddressByIDResponse>;
                        params(request?: _17.QueryParamsRequest): Promise<_17.QueryParamsResponse>;
                        moduleAccounts(request?: _17.QueryModuleAccountsRequest): Promise<_17.QueryModuleAccountsResponse>;
                        moduleAccountByName(request: _17.QueryModuleAccountByNameRequest): Promise<_17.QueryModuleAccountByNameResponse>;
                        bech32Prefix(request?: _17.Bech32PrefixRequest): Promise<_17.Bech32PrefixResponse>;
                        addressBytesToString(request: _17.AddressBytesToStringRequest): Promise<_17.AddressBytesToStringResponse>;
                        addressStringToBytes(request: _17.AddressStringToBytesRequest): Promise<_17.AddressStringToBytesResponse>;
                        accountInfo(request: _17.QueryAccountInfoRequest): Promise<_17.QueryAccountInfoResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: _23.QueryGrantsRequest): Promise<_23.QueryGrantsResponse>;
                        granterGrants(request: _23.QueryGranterGrantsRequest): Promise<_23.QueryGranterGrantsResponse>;
                        granteeGrants(request: _23.QueryGranteeGrantsRequest): Promise<_23.QueryGranteeGrantsResponse>;
                    };
                };
                autocli: {
                    v1: {
                        appOptions(request?: _26.AppOptionsRequest): Promise<_26.AppOptionsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: _31.QueryBalanceRequest): Promise<_31.QueryBalanceResponse>;
                        allBalances(request: _31.QueryAllBalancesRequest): Promise<_31.QueryAllBalancesResponse>;
                        spendableBalances(request: _31.QuerySpendableBalancesRequest): Promise<_31.QuerySpendableBalancesResponse>;
                        spendableBalanceByDenom(request: _31.QuerySpendableBalanceByDenomRequest): Promise<_31.QuerySpendableBalanceByDenomResponse>;
                        totalSupply(request?: _31.QueryTotalSupplyRequest): Promise<_31.QueryTotalSupplyResponse>;
                        supplyOf(request: _31.QuerySupplyOfRequest): Promise<_31.QuerySupplyOfResponse>;
                        params(request?: _31.QueryParamsRequest): Promise<_31.QueryParamsResponse>;
                        denomMetadata(request: _31.QueryDenomMetadataRequest): Promise<_31.QueryDenomMetadataResponse>;
                        denomsMetadata(request?: _31.QueryDenomsMetadataRequest): Promise<_31.QueryDenomsMetadataResponse>;
                        denomOwners(request: _31.QueryDenomOwnersRequest): Promise<_31.QueryDenomOwnersResponse>;
                        sendEnabled(request: _31.QuerySendEnabledRequest): Promise<_31.QuerySendEnabledResponse>;
                    };
                };
                base: {
                    node: {
                        v1beta1: {
                            config(request?: _34.ConfigRequest): Promise<_34.ConfigResponse>;
                        };
                    };
                };
                consensus: {
                    v1: {
                        params(request?: _40.QueryParamsRequest): Promise<_40.QueryParamsResponse>;
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: _52.QueryParamsRequest): Promise<_52.QueryParamsResponse>;
                        validatorDistributionInfo(request: _52.QueryValidatorDistributionInfoRequest): Promise<_52.QueryValidatorDistributionInfoResponse>;
                        validatorOutstandingRewards(request: _52.QueryValidatorOutstandingRewardsRequest): Promise<_52.QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: _52.QueryValidatorCommissionRequest): Promise<_52.QueryValidatorCommissionResponse>;
                        validatorSlashes(request: _52.QueryValidatorSlashesRequest): Promise<_52.QueryValidatorSlashesResponse>;
                        delegationRewards(request: _52.QueryDelegationRewardsRequest): Promise<_52.QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: _52.QueryDelegationTotalRewardsRequest): Promise<_52.QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: _52.QueryDelegatorValidatorsRequest): Promise<_52.QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: _52.QueryDelegatorWithdrawAddressRequest): Promise<_52.QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: _52.QueryCommunityPoolRequest): Promise<_52.QueryCommunityPoolResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: _58.QueryAllowanceRequest): Promise<_58.QueryAllowanceResponse>;
                        allowances(request: _58.QueryAllowancesRequest): Promise<_58.QueryAllowancesResponse>;
                        allowancesByGranter(request: _58.QueryAllowancesByGranterRequest): Promise<_58.QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1: {
                        proposal(request: _64.QueryProposalRequest): Promise<_64.QueryProposalResponse>;
                        proposals(request: _64.QueryProposalsRequest): Promise<_64.QueryProposalsResponse>;
                        vote(request: _64.QueryVoteRequest): Promise<_64.QueryVoteResponse>;
                        votes(request: _64.QueryVotesRequest): Promise<_64.QueryVotesResponse>;
                        params(request: _64.QueryParamsRequest): Promise<_64.QueryParamsResponse>;
                        deposit(request: _64.QueryDepositRequest): Promise<_64.QueryDepositResponse>;
                        deposits(request: _64.QueryDepositsRequest): Promise<_64.QueryDepositsResponse>;
                        tallyResult(request: _64.QueryTallyResultRequest): Promise<_64.QueryTallyResultResponse>;
                    };
                    v1beta1: {
                        proposal(request: _68.QueryProposalRequest): Promise<_68.QueryProposalResponse>;
                        proposals(request: _68.QueryProposalsRequest): Promise<_68.QueryProposalsResponse>;
                        vote(request: _68.QueryVoteRequest): Promise<_68.QueryVoteResponse>;
                        votes(request: _68.QueryVotesRequest): Promise<_68.QueryVotesResponse>;
                        params(request: _68.QueryParamsRequest): Promise<_68.QueryParamsResponse>;
                        deposit(request: _68.QueryDepositRequest): Promise<_68.QueryDepositResponse>;
                        deposits(request: _68.QueryDepositsRequest): Promise<_68.QueryDepositsResponse>;
                        tallyResult(request: _68.QueryTallyResultRequest): Promise<_68.QueryTallyResultResponse>;
                    };
                };
                nft: {
                    v1beta1: {
                        balance(request: _76.QueryBalanceRequest): Promise<_76.QueryBalanceResponse>;
                        owner(request: _76.QueryOwnerRequest): Promise<_76.QueryOwnerResponse>;
                        supply(request: _76.QuerySupplyRequest): Promise<_76.QuerySupplyResponse>;
                        nFTs(request: _76.QueryNFTsRequest): Promise<_76.QueryNFTsResponse>;
                        nFT(request: _76.QueryNFTRequest): Promise<_76.QueryNFTResponse>;
                        class(request: _76.QueryClassRequest): Promise<_76.QueryClassResponse>;
                        classes(request?: _76.QueryClassesRequest): Promise<_76.QueryClassesResponse>;
                    };
                };
                orm: {
                    query: {
                        v1alpha1: {
                            get(request: _79.GetRequest): Promise<_79.GetResponse>;
                            list(request: _79.ListRequest): Promise<_79.ListResponse>;
                        };
                    };
                };
                params: {
                    v1beta1: {
                        params(request: _82.QueryParamsRequest): Promise<_82.QueryParamsResponse>;
                        subspaces(request?: _82.QuerySubspacesRequest): Promise<_82.QuerySubspacesResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: _89.QueryValidatorsRequest): Promise<_89.QueryValidatorsResponse>;
                        validator(request: _89.QueryValidatorRequest): Promise<_89.QueryValidatorResponse>;
                        validatorDelegations(request: _89.QueryValidatorDelegationsRequest): Promise<_89.QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: _89.QueryValidatorUnbondingDelegationsRequest): Promise<_89.QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: _89.QueryDelegationRequest): Promise<_89.QueryDelegationResponse>;
                        unbondingDelegation(request: _89.QueryUnbondingDelegationRequest): Promise<_89.QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: _89.QueryDelegatorDelegationsRequest): Promise<_89.QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: _89.QueryDelegatorUnbondingDelegationsRequest): Promise<_89.QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: _89.QueryRedelegationsRequest): Promise<_89.QueryRedelegationsResponse>;
                        delegatorValidators(request: _89.QueryDelegatorValidatorsRequest): Promise<_89.QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: _89.QueryDelegatorValidatorRequest): Promise<_89.QueryDelegatorValidatorResponse>;
                        historicalInfo(request: _89.QueryHistoricalInfoRequest): Promise<_89.QueryHistoricalInfoResponse>;
                        pool(request?: _89.QueryPoolRequest): Promise<_89.QueryPoolResponse>;
                        params(request?: _89.QueryParamsRequest): Promise<_89.QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: _94.SimulateRequest): Promise<_94.SimulateResponse>;
                        getTx(request: _94.GetTxRequest): Promise<_94.GetTxResponse>;
                        broadcastTx(request: _94.BroadcastTxRequest): Promise<_94.BroadcastTxResponse>;
                        getTxsEvent(request: _94.GetTxsEventRequest): Promise<_94.GetTxsEventResponse>;
                        getBlockWithTxs(request: _94.GetBlockWithTxsRequest): Promise<_94.GetBlockWithTxsResponse>;
                        txDecode(request: _94.TxDecodeRequest): Promise<_94.TxDecodeResponse>;
                        txEncode(request: _94.TxEncodeRequest): Promise<_94.TxEncodeResponse>;
                        txEncodeAmino(request: _94.TxEncodeAminoRequest): Promise<_94.TxEncodeAminoResponse>;
                        txDecodeAmino(request: _94.TxDecodeAminoRequest): Promise<_94.TxDecodeAminoResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: _97.QueryCurrentPlanRequest): Promise<_97.QueryCurrentPlanResponse>;
                        appliedPlan(request: _97.QueryAppliedPlanRequest): Promise<_97.QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: _97.QueryUpgradedConsensusStateRequest): Promise<_97.QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: _97.QueryModuleVersionsRequest): Promise<_97.QueryModuleVersionsResponse>;
                        authority(request?: _97.QueryAuthorityRequest): Promise<_97.QueryAuthorityResponse>;
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: _182.LCDQueryClient;
                };
                authz: {
                    v1beta1: _183.LCDQueryClient;
                };
                bank: {
                    v1beta1: _184.LCDQueryClient;
                };
                base: {
                    node: {
                        v1beta1: _185.LCDQueryClient;
                    };
                };
                consensus: {
                    v1: _186.LCDQueryClient;
                };
                distribution: {
                    v1beta1: _187.LCDQueryClient;
                };
                feegrant: {
                    v1beta1: _188.LCDQueryClient;
                };
                gov: {
                    v1: _189.LCDQueryClient;
                    v1beta1: _190.LCDQueryClient;
                };
                nft: {
                    v1beta1: _191.LCDQueryClient;
                };
                params: {
                    v1beta1: _192.LCDQueryClient;
                };
                staking: {
                    v1beta1: _193.LCDQueryClient;
                };
                tx: {
                    v1beta1: _194.LCDQueryClient;
                };
                upgrade: {
                    v1beta1: _195.LCDQueryClient;
                };
            };
        }>;
    };
}
