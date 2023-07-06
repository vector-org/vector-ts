import * as _13 from "./app/runtime/v1alpha1/module";
import * as _14 from "./auth/module/v1/module";
import * as _15 from "./authz/module/v1/module";
import * as _16 from "./authz/v1beta1/authz";
import * as _17 from "./authz/v1beta1/event";
import * as _18 from "./authz/v1beta1/genesis";
import * as _19 from "./authz/v1beta1/query";
import * as _20 from "./authz/v1beta1/tx";
import * as _21 from "./autocli/v1/options";
import * as _22 from "./autocli/v1/query";
import * as _23 from "./bank/module/v1/module";
import * as _24 from "./bank/v1beta1/authz";
import * as _25 from "./bank/v1beta1/bank";
import * as _26 from "./bank/v1beta1/genesis";
import * as _27 from "./bank/v1beta1/query";
import * as _28 from "./bank/v1beta1/tx";
import * as _29 from "./base/abci/v1beta1/abci";
import * as _30 from "./base/node/v1beta1/query";
import * as _31 from "./base/query/v1beta1/pagination";
import * as _32 from "./base/reflection/v2alpha1/reflection";
import * as _33 from "./base/v1beta1/coin";
import * as _34 from "./capability/module/v1/module";
import * as _35 from "./consensus/module/v1/module";
import * as _36 from "./consensus/v1/query";
import * as _37 from "./consensus/v1/tx";
import * as _38 from "./crisis/module/v1/module";
import * as _39 from "./crypto/ed25519/keys";
import * as _40 from "./crypto/hd/v1/hd";
import * as _41 from "./crypto/keyring/v1/record";
import * as _42 from "./crypto/multisig/keys";
import * as _43 from "./crypto/secp256k1/keys";
import * as _44 from "./crypto/secp256r1/keys";
import * as _45 from "./distribution/module/v1/module";
import * as _46 from "./distribution/v1beta1/distribution";
import * as _47 from "./distribution/v1beta1/genesis";
import * as _48 from "./distribution/v1beta1/query";
import * as _49 from "./distribution/v1beta1/tx";
import * as _50 from "./evidence/module/v1/module";
import * as _51 from "./feegrant/module/v1/module";
import * as _52 from "./feegrant/v1beta1/feegrant";
import * as _53 from "./feegrant/v1beta1/genesis";
import * as _54 from "./feegrant/v1beta1/query";
import * as _55 from "./feegrant/v1beta1/tx";
import * as _56 from "./genutil/module/v1/module";
import * as _57 from "./gov/module/v1/module";
import * as _58 from "./gov/v1/genesis";
import * as _59 from "./gov/v1/gov";
import * as _60 from "./gov/v1/query";
import * as _61 from "./gov/v1/tx";
import * as _62 from "./gov/v1beta1/genesis";
import * as _63 from "./gov/v1beta1/gov";
import * as _64 from "./gov/v1beta1/query";
import * as _65 from "./gov/v1beta1/tx";
import * as _66 from "./group/module/v1/module";
import * as _67 from "./mint/module/v1/module";
import * as _68 from "./nft/module/v1/module";
import * as _69 from "./nft/v1beta1/event";
import * as _70 from "./nft/v1beta1/genesis";
import * as _71 from "./nft/v1beta1/nft";
import * as _72 from "./nft/v1beta1/query";
import * as _73 from "./nft/v1beta1/tx";
import * as _74 from "./orm/module/v1alpha1/module";
import * as _75 from "./orm/query/v1alpha1/query";
import * as _76 from "./params/module/v1/module";
import * as _78 from "./reflection/v1/reflection";
import * as _79 from "./slashing/module/v1/module";
import * as _80 from "./staking/module/v1/module";
import * as _81 from "./staking/v1beta1/authz";
import * as _82 from "./staking/v1beta1/genesis";
import * as _83 from "./staking/v1beta1/query";
import * as _84 from "./staking/v1beta1/staking";
import * as _85 from "./staking/v1beta1/tx";
import * as _86 from "./tx/config/v1/config";
import * as _87 from "./tx/signing/v1beta1/signing";
import * as _88 from "./tx/v1beta1/service";
import * as _89 from "./tx/v1beta1/tx";
import * as _90 from "./upgrade/module/v1/module";
import * as _91 from "./upgrade/v1beta1/query";
import * as _92 from "./upgrade/v1beta1/tx";
import * as _93 from "./upgrade/v1beta1/upgrade";
import * as _94 from "./vesting/module/v1/module";
import * as _174 from "./authz/v1beta1/query.lcd";
import * as _175 from "./bank/v1beta1/query.lcd";
import * as _176 from "./base/node/v1beta1/query.lcd";
import * as _177 from "./consensus/v1/query.lcd";
import * as _178 from "./distribution/v1beta1/query.lcd";
import * as _179 from "./feegrant/v1beta1/query.lcd";
import * as _180 from "./gov/v1/query.lcd";
import * as _181 from "./gov/v1beta1/query.lcd";
import * as _182 from "./nft/v1beta1/query.lcd";
import * as _183 from "./staking/v1beta1/query.lcd";
import * as _184 from "./tx/v1beta1/service.lcd";
import * as _185 from "./upgrade/v1beta1/query.lcd";
import * as _186 from "./authz/v1beta1/query.rpc.Query";
import * as _187 from "./autocli/v1/query.rpc.Query";
import * as _188 from "./bank/v1beta1/query.rpc.Query";
import * as _189 from "./base/node/v1beta1/query.rpc.Service";
import * as _190 from "./consensus/v1/query.rpc.Query";
import * as _191 from "./distribution/v1beta1/query.rpc.Query";
import * as _192 from "./feegrant/v1beta1/query.rpc.Query";
import * as _193 from "./gov/v1/query.rpc.Query";
import * as _194 from "./gov/v1beta1/query.rpc.Query";
import * as _195 from "./nft/v1beta1/query.rpc.Query";
import * as _196 from "./orm/query/v1alpha1/query.rpc.Query";
import * as _197 from "./staking/v1beta1/query.rpc.Query";
import * as _198 from "./tx/v1beta1/service.rpc.Service";
import * as _199 from "./upgrade/v1beta1/query.rpc.Query";
import * as _200 from "./authz/v1beta1/tx.rpc.msg";
import * as _201 from "./bank/v1beta1/tx.rpc.msg";
import * as _202 from "./consensus/v1/tx.rpc.msg";
import * as _203 from "./distribution/v1beta1/tx.rpc.msg";
import * as _204 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _205 from "./gov/v1/tx.rpc.msg";
import * as _206 from "./gov/v1beta1/tx.rpc.msg";
import * as _207 from "./nft/v1beta1/tx.rpc.msg";
import * as _208 from "./staking/v1beta1/tx.rpc.msg";
import * as _209 from "./upgrade/v1beta1/tx.rpc.msg";
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
    }
    namespace authz {
        namespace module {
            const v1: {
                Module: {
                    encode(_: _15.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _15.Module;
                    fromJSON(_: any): _15.Module;
                    toJSON(_: _15.Module): unknown;
                    fromPartial(_: {}): _15.Module;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _200.MsgClientImpl;
            QueryClientImpl: typeof _186.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                grants(request: _19.QueryGrantsRequest): Promise<_19.QueryGrantsResponse>;
                granterGrants(request: _19.QueryGranterGrantsRequest): Promise<_19.QueryGranterGrantsResponse>;
                granteeGrants(request: _19.QueryGranteeGrantsRequest): Promise<_19.QueryGranteeGrantsResponse>;
            };
            LCDQueryClient: typeof _174.LCDQueryClient;
            MsgGrant: {
                encode(message: _20.MsgGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _20.MsgGrant;
                fromJSON(object: any): _20.MsgGrant;
                toJSON(message: _20.MsgGrant): unknown;
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
                            authorizationType?: _81.AuthorizationType;
                        } | {
                            msg?: string;
                        };
                        expiration?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                    };
                }): _20.MsgGrant;
            };
            MsgExecResponse: {
                encode(message: _20.MsgExecResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _20.MsgExecResponse;
                fromJSON(object: any): _20.MsgExecResponse;
                toJSON(message: _20.MsgExecResponse): unknown;
                fromPartial(object: {
                    results?: Uint8Array[];
                }): _20.MsgExecResponse;
            };
            MsgExec: {
                encode(message: _20.MsgExec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _20.MsgExec;
                fromJSON(object: any): _20.MsgExec;
                toJSON(message: _20.MsgExec): unknown;
                fromPartial(object: {
                    grantee?: string;
                    msgs?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                }): _20.MsgExec;
            };
            MsgGrantResponse: {
                encode(_: _20.MsgGrantResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _20.MsgGrantResponse;
                fromJSON(_: any): _20.MsgGrantResponse;
                toJSON(_: _20.MsgGrantResponse): unknown;
                fromPartial(_: {}): _20.MsgGrantResponse;
            };
            MsgRevoke: {
                encode(message: _20.MsgRevoke, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _20.MsgRevoke;
                fromJSON(object: any): _20.MsgRevoke;
                toJSON(message: _20.MsgRevoke): unknown;
                fromPartial(object: {
                    granter?: string;
                    grantee?: string;
                    msgTypeUrl?: string;
                }): _20.MsgRevoke;
            };
            MsgRevokeResponse: {
                encode(_: _20.MsgRevokeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _20.MsgRevokeResponse;
                fromJSON(_: any): _20.MsgRevokeResponse;
                toJSON(_: _20.MsgRevokeResponse): unknown;
                fromPartial(_: {}): _20.MsgRevokeResponse;
            };
            Cosmos_basev1beta1Msg_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            QueryGrantsRequest: {
                encode(message: _19.QueryGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _19.QueryGrantsRequest;
                fromJSON(object: any): _19.QueryGrantsRequest;
                toJSON(message: _19.QueryGrantsRequest): unknown;
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
                }): _19.QueryGrantsRequest;
            };
            QueryGrantsResponse: {
                encode(message: _19.QueryGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _19.QueryGrantsResponse;
                fromJSON(object: any): _19.QueryGrantsResponse;
                toJSON(message: _19.QueryGrantsResponse): unknown;
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
                            authorizationType?: _81.AuthorizationType;
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
                }): _19.QueryGrantsResponse;
            };
            QueryGranterGrantsRequest: {
                encode(message: _19.QueryGranterGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _19.QueryGranterGrantsRequest;
                fromJSON(object: any): _19.QueryGranterGrantsRequest;
                toJSON(message: _19.QueryGranterGrantsRequest): unknown;
                fromPartial(object: {
                    granter?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: bigint;
                        limit?: bigint;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _19.QueryGranterGrantsRequest;
            };
            QueryGranterGrantsResponse: {
                encode(message: _19.QueryGranterGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _19.QueryGranterGrantsResponse;
                fromJSON(object: any): _19.QueryGranterGrantsResponse;
                toJSON(message: _19.QueryGranterGrantsResponse): unknown;
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
                            authorizationType?: _81.AuthorizationType;
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
                }): _19.QueryGranterGrantsResponse;
            };
            QueryGranteeGrantsRequest: {
                encode(message: _19.QueryGranteeGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _19.QueryGranteeGrantsRequest;
                fromJSON(object: any): _19.QueryGranteeGrantsRequest;
                toJSON(message: _19.QueryGranteeGrantsRequest): unknown;
                fromPartial(object: {
                    grantee?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: bigint;
                        limit?: bigint;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _19.QueryGranteeGrantsRequest;
            };
            QueryGranteeGrantsResponse: {
                encode(message: _19.QueryGranteeGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _19.QueryGranteeGrantsResponse;
                fromJSON(object: any): _19.QueryGranteeGrantsResponse;
                toJSON(message: _19.QueryGranteeGrantsResponse): unknown;
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
                            authorizationType?: _81.AuthorizationType;
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
                }): _19.QueryGranteeGrantsResponse;
            };
            GenesisState: {
                encode(message: _18.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _18.GenesisState;
                fromJSON(object: any): _18.GenesisState;
                toJSON(message: _18.GenesisState): unknown;
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
                            authorizationType?: _81.AuthorizationType;
                        } | {
                            msg?: string;
                        };
                        expiration?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                    }[];
                }): _18.GenesisState;
            };
            EventGrant: {
                encode(message: _17.EventGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _17.EventGrant;
                fromJSON(object: any): _17.EventGrant;
                toJSON(message: _17.EventGrant): unknown;
                fromPartial(object: {
                    msgTypeUrl?: string;
                    granter?: string;
                    grantee?: string;
                }): _17.EventGrant;
            };
            EventRevoke: {
                encode(message: _17.EventRevoke, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _17.EventRevoke;
                fromJSON(object: any): _17.EventRevoke;
                toJSON(message: _17.EventRevoke): unknown;
                fromPartial(object: {
                    msgTypeUrl?: string;
                    granter?: string;
                    grantee?: string;
                }): _17.EventRevoke;
            };
            GenericAuthorization: {
                encode(message: _16.GenericAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _16.GenericAuthorization;
                fromJSON(object: any): _16.GenericAuthorization;
                toJSON(message: _16.GenericAuthorization): unknown;
                fromPartial(object: {
                    msg?: string;
                }): _16.GenericAuthorization;
            };
            Grant: {
                encode(message: _16.Grant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _16.Grant;
                fromJSON(object: any): _16.Grant;
                toJSON(message: _16.Grant): unknown;
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
                        authorizationType?: _81.AuthorizationType;
                    } | {
                        msg?: string;
                    };
                    expiration?: {
                        seconds?: bigint;
                        nanos?: number;
                    };
                }): _16.Grant;
            };
            GrantAuthorization: {
                encode(message: _16.GrantAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _16.GrantAuthorization;
                fromJSON(object: any): _16.GrantAuthorization;
                toJSON(message: _16.GrantAuthorization): unknown;
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
                        authorizationType?: _81.AuthorizationType;
                    } | {
                        msg?: string;
                    };
                    expiration?: {
                        seconds?: bigint;
                        nanos?: number;
                    };
                }): _16.GrantAuthorization;
            };
            GrantQueueItem: {
                encode(message: _16.GrantQueueItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _16.GrantQueueItem;
                fromJSON(object: any): _16.GrantQueueItem;
                toJSON(message: _16.GrantQueueItem): unknown;
                fromPartial(object: {
                    msgTypeUrls?: string[];
                }): _16.GrantQueueItem;
            };
            Cosmos_authzv1beta1Authorization_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _24.SendAuthorization | _81.StakeAuthorization | _16.GenericAuthorization;
        };
    }
    namespace autocli {
        const v1: {
            QueryClientImpl: typeof _187.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                appOptions(request?: _22.AppOptionsRequest): Promise<_22.AppOptionsResponse>;
            };
            AppOptionsRequest: {
                encode(_: _22.AppOptionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _22.AppOptionsRequest;
                fromJSON(_: any): _22.AppOptionsRequest;
                toJSON(_: _22.AppOptionsRequest): unknown;
                fromPartial(_: {}): _22.AppOptionsRequest;
            };
            AppOptionsResponse_ModuleOptionsEntry: {
                encode(message: _22.AppOptionsResponse_ModuleOptionsEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _22.AppOptionsResponse_ModuleOptionsEntry;
                fromJSON(object: any): _22.AppOptionsResponse_ModuleOptionsEntry;
                toJSON(message: _22.AppOptionsResponse_ModuleOptionsEntry): unknown;
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
                }): _22.AppOptionsResponse_ModuleOptionsEntry;
            };
            AppOptionsResponse: {
                encode(message: _22.AppOptionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _22.AppOptionsResponse;
                fromJSON(object: any): _22.AppOptionsResponse;
                toJSON(message: _22.AppOptionsResponse): unknown;
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
                }): _22.AppOptionsResponse;
            };
            ModuleOptions: {
                encode(message: _21.ModuleOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _21.ModuleOptions;
                fromJSON(object: any): _21.ModuleOptions;
                toJSON(message: _21.ModuleOptions): unknown;
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
                }): _21.ModuleOptions;
            };
            ServiceCommandDescriptor_SubCommandsEntry: {
                encode(message: _21.ServiceCommandDescriptor_SubCommandsEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _21.ServiceCommandDescriptor_SubCommandsEntry;
                fromJSON(object: any): _21.ServiceCommandDescriptor_SubCommandsEntry;
                toJSON(message: _21.ServiceCommandDescriptor_SubCommandsEntry): unknown;
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
                }): _21.ServiceCommandDescriptor_SubCommandsEntry;
            };
            ServiceCommandDescriptor: {
                encode(message: _21.ServiceCommandDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _21.ServiceCommandDescriptor;
                fromJSON(object: any): _21.ServiceCommandDescriptor;
                toJSON(message: _21.ServiceCommandDescriptor): unknown;
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
                }): _21.ServiceCommandDescriptor;
            };
            RpcCommandOptions_FlagOptionsEntry: {
                encode(message: _21.RpcCommandOptions_FlagOptionsEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _21.RpcCommandOptions_FlagOptionsEntry;
                fromJSON(object: any): _21.RpcCommandOptions_FlagOptionsEntry;
                toJSON(message: _21.RpcCommandOptions_FlagOptionsEntry): unknown;
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
                }): _21.RpcCommandOptions_FlagOptionsEntry;
            };
            RpcCommandOptions: {
                encode(message: _21.RpcCommandOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _21.RpcCommandOptions;
                fromJSON(object: any): _21.RpcCommandOptions;
                toJSON(message: _21.RpcCommandOptions): unknown;
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
                }): _21.RpcCommandOptions;
            };
            FlagOptions: {
                encode(message: _21.FlagOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _21.FlagOptions;
                fromJSON(object: any): _21.FlagOptions;
                toJSON(message: _21.FlagOptions): unknown;
                fromPartial(object: {
                    name?: string;
                    shorthand?: string;
                    usage?: string;
                    defaultValue?: string;
                    noOptDefaultValue?: string;
                    deprecated?: string;
                    shorthandDeprecated?: string;
                    hidden?: boolean;
                }): _21.FlagOptions;
            };
            PositionalArgDescriptor: {
                encode(message: _21.PositionalArgDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _21.PositionalArgDescriptor;
                fromJSON(object: any): _21.PositionalArgDescriptor;
                toJSON(message: _21.PositionalArgDescriptor): unknown;
                fromPartial(object: {
                    protoField?: string;
                    varargs?: boolean;
                }): _21.PositionalArgDescriptor;
            };
        };
    }
    namespace bank {
        namespace module {
            const v1: {
                Module: {
                    encode(message: _23.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _23.Module;
                    fromJSON(object: any): _23.Module;
                    toJSON(message: _23.Module): unknown;
                    fromPartial(object: {
                        blockedModuleAccountsOverride?: string[];
                        authority?: string;
                    }): _23.Module;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _201.MsgClientImpl;
            QueryClientImpl: typeof _188.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _27.QueryBalanceRequest): Promise<_27.QueryBalanceResponse>;
                allBalances(request: _27.QueryAllBalancesRequest): Promise<_27.QueryAllBalancesResponse>;
                spendableBalances(request: _27.QuerySpendableBalancesRequest): Promise<_27.QuerySpendableBalancesResponse>;
                spendableBalanceByDenom(request: _27.QuerySpendableBalanceByDenomRequest): Promise<_27.QuerySpendableBalanceByDenomResponse>;
                totalSupply(request?: _27.QueryTotalSupplyRequest): Promise<_27.QueryTotalSupplyResponse>;
                supplyOf(request: _27.QuerySupplyOfRequest): Promise<_27.QuerySupplyOfResponse>;
                params(request?: _27.QueryParamsRequest): Promise<_27.QueryParamsResponse>;
                denomMetadata(request: _27.QueryDenomMetadataRequest): Promise<_27.QueryDenomMetadataResponse>;
                denomsMetadata(request?: _27.QueryDenomsMetadataRequest): Promise<_27.QueryDenomsMetadataResponse>;
                denomOwners(request: _27.QueryDenomOwnersRequest): Promise<_27.QueryDenomOwnersResponse>;
                sendEnabled(request: _27.QuerySendEnabledRequest): Promise<_27.QuerySendEnabledResponse>;
            };
            LCDQueryClient: typeof _175.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _28.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    multiSend(value: _28.MsgMultiSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _28.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setSendEnabled(value: _28.MsgSetSendEnabled): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _28.MsgSend): {
                        typeUrl: string;
                        value: _28.MsgSend;
                    };
                    multiSend(value: _28.MsgMultiSend): {
                        typeUrl: string;
                        value: _28.MsgMultiSend;
                    };
                    updateParams(value: _28.MsgUpdateParams): {
                        typeUrl: string;
                        value: _28.MsgUpdateParams;
                    };
                    setSendEnabled(value: _28.MsgSetSendEnabled): {
                        typeUrl: string;
                        value: _28.MsgSetSendEnabled;
                    };
                };
                toJSON: {
                    send(value: _28.MsgSend): {
                        typeUrl: string;
                        value: unknown;
                    };
                    multiSend(value: _28.MsgMultiSend): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateParams(value: _28.MsgUpdateParams): {
                        typeUrl: string;
                        value: unknown;
                    };
                    setSendEnabled(value: _28.MsgSetSendEnabled): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _28.MsgSend;
                    };
                    multiSend(value: any): {
                        typeUrl: string;
                        value: _28.MsgMultiSend;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _28.MsgUpdateParams;
                    };
                    setSendEnabled(value: any): {
                        typeUrl: string;
                        value: _28.MsgSetSendEnabled;
                    };
                };
                fromPartial: {
                    send(value: _28.MsgSend): {
                        typeUrl: string;
                        value: _28.MsgSend;
                    };
                    multiSend(value: _28.MsgMultiSend): {
                        typeUrl: string;
                        value: _28.MsgMultiSend;
                    };
                    updateParams(value: _28.MsgUpdateParams): {
                        typeUrl: string;
                        value: _28.MsgUpdateParams;
                    };
                    setSendEnabled(value: _28.MsgSetSendEnabled): {
                        typeUrl: string;
                        value: _28.MsgSetSendEnabled;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount }: _28.MsgSend) => {
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
                    }) => _28.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: ({ inputs, outputs }: _28.MsgMultiSend) => {
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
                    }) => _28.MsgMultiSend;
                };
                "/cosmos.bank.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: ({ authority, params }: _28.MsgUpdateParams) => {
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
                    }) => _28.MsgUpdateParams;
                };
                "/cosmos.bank.v1beta1.MsgSetSendEnabled": {
                    aminoType: string;
                    toAmino: ({ authority, sendEnabled, useDefaultFor }: _28.MsgSetSendEnabled) => {
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
                    }) => _28.MsgSetSendEnabled;
                };
            };
            MsgSend: {
                encode(message: _28.MsgSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _28.MsgSend;
                fromJSON(object: any): _28.MsgSend;
                toJSON(message: _28.MsgSend): unknown;
                fromPartial(object: {
                    fromAddress?: string;
                    toAddress?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _28.MsgSend;
            };
            MsgSendResponse: {
                encode(_: _28.MsgSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _28.MsgSendResponse;
                fromJSON(_: any): _28.MsgSendResponse;
                toJSON(_: _28.MsgSendResponse): unknown;
                fromPartial(_: {}): _28.MsgSendResponse;
            };
            MsgMultiSend: {
                encode(message: _28.MsgMultiSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _28.MsgMultiSend;
                fromJSON(object: any): _28.MsgMultiSend;
                toJSON(message: _28.MsgMultiSend): unknown;
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
                }): _28.MsgMultiSend;
            };
            MsgMultiSendResponse: {
                encode(_: _28.MsgMultiSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _28.MsgMultiSendResponse;
                fromJSON(_: any): _28.MsgMultiSendResponse;
                toJSON(_: _28.MsgMultiSendResponse): unknown;
                fromPartial(_: {}): _28.MsgMultiSendResponse;
            };
            MsgUpdateParams: {
                encode(message: _28.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _28.MsgUpdateParams;
                fromJSON(object: any): _28.MsgUpdateParams;
                toJSON(message: _28.MsgUpdateParams): unknown;
                fromPartial(object: {
                    authority?: string;
                    params?: {
                        sendEnabled?: {
                            denom?: string;
                            enabled?: boolean;
                        }[];
                        defaultSendEnabled?: boolean;
                    };
                }): _28.MsgUpdateParams;
            };
            MsgUpdateParamsResponse: {
                encode(_: _28.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _28.MsgUpdateParamsResponse;
                fromJSON(_: any): _28.MsgUpdateParamsResponse;
                toJSON(_: _28.MsgUpdateParamsResponse): unknown;
                fromPartial(_: {}): _28.MsgUpdateParamsResponse;
            };
            MsgSetSendEnabled: {
                encode(message: _28.MsgSetSendEnabled, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _28.MsgSetSendEnabled;
                fromJSON(object: any): _28.MsgSetSendEnabled;
                toJSON(message: _28.MsgSetSendEnabled): unknown;
                fromPartial(object: {
                    authority?: string;
                    sendEnabled?: {
                        denom?: string;
                        enabled?: boolean;
                    }[];
                    useDefaultFor?: string[];
                }): _28.MsgSetSendEnabled;
            };
            MsgSetSendEnabledResponse: {
                encode(_: _28.MsgSetSendEnabledResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _28.MsgSetSendEnabledResponse;
                fromJSON(_: any): _28.MsgSetSendEnabledResponse;
                toJSON(_: _28.MsgSetSendEnabledResponse): unknown;
                fromPartial(_: {}): _28.MsgSetSendEnabledResponse;
            };
            QueryBalanceRequest: {
                encode(message: _27.QueryBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _27.QueryBalanceRequest;
                fromJSON(object: any): _27.QueryBalanceRequest;
                toJSON(message: _27.QueryBalanceRequest): unknown;
                fromPartial(object: {
                    address?: string;
                    denom?: string;
                }): _27.QueryBalanceRequest;
            };
            QueryBalanceResponse: {
                encode(message: _27.QueryBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _27.QueryBalanceResponse;
                fromJSON(object: any): _27.QueryBalanceResponse;
                toJSON(message: _27.QueryBalanceResponse): unknown;
                fromPartial(object: {
                    balance?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _27.QueryBalanceResponse;
            };
            QueryAllBalancesRequest: {
                encode(message: _27.QueryAllBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _27.QueryAllBalancesRequest;
                fromJSON(object: any): _27.QueryAllBalancesRequest;
                toJSON(message: _27.QueryAllBalancesRequest): unknown;
                fromPartial(object: {
                    address?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: bigint;
                        limit?: bigint;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _27.QueryAllBalancesRequest;
            };
            QueryAllBalancesResponse: {
                encode(message: _27.QueryAllBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _27.QueryAllBalancesResponse;
                fromJSON(object: any): _27.QueryAllBalancesResponse;
                toJSON(message: _27.QueryAllBalancesResponse): unknown;
                fromPartial(object: {
                    balances?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: bigint;
                    };
                }): _27.QueryAllBalancesResponse;
            };
            QuerySpendableBalancesRequest: {
                encode(message: _27.QuerySpendableBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _27.QuerySpendableBalancesRequest;
                fromJSON(object: any): _27.QuerySpendableBalancesRequest;
                toJSON(message: _27.QuerySpendableBalancesRequest): unknown;
                fromPartial(object: {
                    address?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: bigint;
                        limit?: bigint;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _27.QuerySpendableBalancesRequest;
            };
            QuerySpendableBalancesResponse: {
                encode(message: _27.QuerySpendableBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _27.QuerySpendableBalancesResponse;
                fromJSON(object: any): _27.QuerySpendableBalancesResponse;
                toJSON(message: _27.QuerySpendableBalancesResponse): unknown;
                fromPartial(object: {
                    balances?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: bigint;
                    };
                }): _27.QuerySpendableBalancesResponse;
            };
            QuerySpendableBalanceByDenomRequest: {
                encode(message: _27.QuerySpendableBalanceByDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _27.QuerySpendableBalanceByDenomRequest;
                fromJSON(object: any): _27.QuerySpendableBalanceByDenomRequest;
                toJSON(message: _27.QuerySpendableBalanceByDenomRequest): unknown;
                fromPartial(object: {
                    address?: string;
                    denom?: string;
                }): _27.QuerySpendableBalanceByDenomRequest;
            };
            QuerySpendableBalanceByDenomResponse: {
                encode(message: _27.QuerySpendableBalanceByDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _27.QuerySpendableBalanceByDenomResponse;
                fromJSON(object: any): _27.QuerySpendableBalanceByDenomResponse;
                toJSON(message: _27.QuerySpendableBalanceByDenomResponse): unknown;
                fromPartial(object: {
                    balance?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _27.QuerySpendableBalanceByDenomResponse;
            };
            QueryTotalSupplyRequest: {
                encode(message: _27.QueryTotalSupplyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _27.QueryTotalSupplyRequest;
                fromJSON(object: any): _27.QueryTotalSupplyRequest;
                toJSON(message: _27.QueryTotalSupplyRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: bigint;
                        limit?: bigint;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _27.QueryTotalSupplyRequest;
            };
            QueryTotalSupplyResponse: {
                encode(message: _27.QueryTotalSupplyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _27.QueryTotalSupplyResponse;
                fromJSON(object: any): _27.QueryTotalSupplyResponse;
                toJSON(message: _27.QueryTotalSupplyResponse): unknown;
                fromPartial(object: {
                    supply?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: bigint;
                    };
                }): _27.QueryTotalSupplyResponse;
            };
            QuerySupplyOfRequest: {
                encode(message: _27.QuerySupplyOfRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _27.QuerySupplyOfRequest;
                fromJSON(object: any): _27.QuerySupplyOfRequest;
                toJSON(message: _27.QuerySupplyOfRequest): unknown;
                fromPartial(object: {
                    denom?: string;
                }): _27.QuerySupplyOfRequest;
            };
            QuerySupplyOfResponse: {
                encode(message: _27.QuerySupplyOfResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _27.QuerySupplyOfResponse;
                fromJSON(object: any): _27.QuerySupplyOfResponse;
                toJSON(message: _27.QuerySupplyOfResponse): unknown;
                fromPartial(object: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _27.QuerySupplyOfResponse;
            };
            QueryParamsRequest: {
                encode(_: _27.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _27.QueryParamsRequest;
                fromJSON(_: any): _27.QueryParamsRequest;
                toJSON(_: _27.QueryParamsRequest): unknown;
                fromPartial(_: {}): _27.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _27.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _27.QueryParamsResponse;
                fromJSON(object: any): _27.QueryParamsResponse;
                toJSON(message: _27.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        sendEnabled?: {
                            denom?: string;
                            enabled?: boolean;
                        }[];
                        defaultSendEnabled?: boolean;
                    };
                }): _27.QueryParamsResponse;
            };
            QueryDenomsMetadataRequest: {
                encode(message: _27.QueryDenomsMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _27.QueryDenomsMetadataRequest;
                fromJSON(object: any): _27.QueryDenomsMetadataRequest;
                toJSON(message: _27.QueryDenomsMetadataRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: bigint;
                        limit?: bigint;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _27.QueryDenomsMetadataRequest;
            };
            QueryDenomsMetadataResponse: {
                encode(message: _27.QueryDenomsMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _27.QueryDenomsMetadataResponse;
                fromJSON(object: any): _27.QueryDenomsMetadataResponse;
                toJSON(message: _27.QueryDenomsMetadataResponse): unknown;
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
                }): _27.QueryDenomsMetadataResponse;
            };
            QueryDenomMetadataRequest: {
                encode(message: _27.QueryDenomMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _27.QueryDenomMetadataRequest;
                fromJSON(object: any): _27.QueryDenomMetadataRequest;
                toJSON(message: _27.QueryDenomMetadataRequest): unknown;
                fromPartial(object: {
                    denom?: string;
                }): _27.QueryDenomMetadataRequest;
            };
            QueryDenomMetadataResponse: {
                encode(message: _27.QueryDenomMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _27.QueryDenomMetadataResponse;
                fromJSON(object: any): _27.QueryDenomMetadataResponse;
                toJSON(message: _27.QueryDenomMetadataResponse): unknown;
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
                }): _27.QueryDenomMetadataResponse;
            };
            QueryDenomOwnersRequest: {
                encode(message: _27.QueryDenomOwnersRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _27.QueryDenomOwnersRequest;
                fromJSON(object: any): _27.QueryDenomOwnersRequest;
                toJSON(message: _27.QueryDenomOwnersRequest): unknown;
                fromPartial(object: {
                    denom?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: bigint;
                        limit?: bigint;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _27.QueryDenomOwnersRequest;
            };
            DenomOwner: {
                encode(message: _27.DenomOwner, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _27.DenomOwner;
                fromJSON(object: any): _27.DenomOwner;
                toJSON(message: _27.DenomOwner): unknown;
                fromPartial(object: {
                    address?: string;
                    balance?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _27.DenomOwner;
            };
            QueryDenomOwnersResponse: {
                encode(message: _27.QueryDenomOwnersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _27.QueryDenomOwnersResponse;
                fromJSON(object: any): _27.QueryDenomOwnersResponse;
                toJSON(message: _27.QueryDenomOwnersResponse): unknown;
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
                }): _27.QueryDenomOwnersResponse;
            };
            QuerySendEnabledRequest: {
                encode(message: _27.QuerySendEnabledRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _27.QuerySendEnabledRequest;
                fromJSON(object: any): _27.QuerySendEnabledRequest;
                toJSON(message: _27.QuerySendEnabledRequest): unknown;
                fromPartial(object: {
                    denoms?: string[];
                    pagination?: {
                        key?: Uint8Array;
                        offset?: bigint;
                        limit?: bigint;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _27.QuerySendEnabledRequest;
            };
            QuerySendEnabledResponse: {
                encode(message: _27.QuerySendEnabledResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _27.QuerySendEnabledResponse;
                fromJSON(object: any): _27.QuerySendEnabledResponse;
                toJSON(message: _27.QuerySendEnabledResponse): unknown;
                fromPartial(object: {
                    sendEnabled?: {
                        denom?: string;
                        enabled?: boolean;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: bigint;
                    };
                }): _27.QuerySendEnabledResponse;
            };
            GenesisState: {
                encode(message: _26.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _26.GenesisState;
                fromJSON(object: any): _26.GenesisState;
                toJSON(message: _26.GenesisState): unknown;
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
                }): _26.GenesisState;
            };
            Balance: {
                encode(message: _26.Balance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _26.Balance;
                fromJSON(object: any): _26.Balance;
                toJSON(message: _26.Balance): unknown;
                fromPartial(object: {
                    address?: string;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _26.Balance;
            };
            Params: {
                encode(message: _25.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _25.Params;
                fromJSON(object: any): _25.Params;
                toJSON(message: _25.Params): unknown;
                fromPartial(object: {
                    sendEnabled?: {
                        denom?: string;
                        enabled?: boolean;
                    }[];
                    defaultSendEnabled?: boolean;
                }): _25.Params;
            };
            SendEnabled: {
                encode(message: _25.SendEnabled, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _25.SendEnabled;
                fromJSON(object: any): _25.SendEnabled;
                toJSON(message: _25.SendEnabled): unknown;
                fromPartial(object: {
                    denom?: string;
                    enabled?: boolean;
                }): _25.SendEnabled;
            };
            Input: {
                encode(message: _25.Input, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _25.Input;
                fromJSON(object: any): _25.Input;
                toJSON(message: _25.Input): unknown;
                fromPartial(object: {
                    address?: string;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _25.Input;
            };
            Output: {
                encode(message: _25.Output, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _25.Output;
                fromJSON(object: any): _25.Output;
                toJSON(message: _25.Output): unknown;
                fromPartial(object: {
                    address?: string;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _25.Output;
            };
            Supply: {
                encode(message: _25.Supply, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _25.Supply;
                fromJSON(object: any): _25.Supply;
                toJSON(message: _25.Supply): unknown;
                fromPartial(object: {
                    total?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _25.Supply;
            };
            DenomUnit: {
                encode(message: _25.DenomUnit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _25.DenomUnit;
                fromJSON(object: any): _25.DenomUnit;
                toJSON(message: _25.DenomUnit): unknown;
                fromPartial(object: {
                    denom?: string;
                    exponent?: number;
                    aliases?: string[];
                }): _25.DenomUnit;
            };
            Metadata: {
                encode(message: _25.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _25.Metadata;
                fromJSON(object: any): _25.Metadata;
                toJSON(message: _25.Metadata): unknown;
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
                }): _25.Metadata;
            };
            SendAuthorization: {
                encode(message: _24.SendAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _24.SendAuthorization;
                fromJSON(object: any): _24.SendAuthorization;
                toJSON(message: _24.SendAuthorization): unknown;
                fromPartial(object: {
                    spendLimit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    allowList?: string[];
                }): _24.SendAuthorization;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    encode(message: _29.TxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _29.TxResponse;
                    fromJSON(object: any): _29.TxResponse;
                    toJSON(message: _29.TxResponse): unknown;
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
                    }): _29.TxResponse;
                };
                ABCIMessageLog: {
                    encode(message: _29.ABCIMessageLog, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _29.ABCIMessageLog;
                    fromJSON(object: any): _29.ABCIMessageLog;
                    toJSON(message: _29.ABCIMessageLog): unknown;
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
                    }): _29.ABCIMessageLog;
                };
                StringEvent: {
                    encode(message: _29.StringEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _29.StringEvent;
                    fromJSON(object: any): _29.StringEvent;
                    toJSON(message: _29.StringEvent): unknown;
                    fromPartial(object: {
                        type?: string;
                        attributes?: {
                            key?: string;
                            value?: string;
                        }[];
                    }): _29.StringEvent;
                };
                Attribute: {
                    encode(message: _29.Attribute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _29.Attribute;
                    fromJSON(object: any): _29.Attribute;
                    toJSON(message: _29.Attribute): unknown;
                    fromPartial(object: {
                        key?: string;
                        value?: string;
                    }): _29.Attribute;
                };
                GasInfo: {
                    encode(message: _29.GasInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _29.GasInfo;
                    fromJSON(object: any): _29.GasInfo;
                    toJSON(message: _29.GasInfo): unknown;
                    fromPartial(object: {
                        gasWanted?: bigint;
                        gasUsed?: bigint;
                    }): _29.GasInfo;
                };
                Result: {
                    encode(message: _29.Result, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _29.Result;
                    fromJSON(object: any): _29.Result;
                    toJSON(message: _29.Result): unknown;
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
                    }): _29.Result;
                };
                SimulationResponse: {
                    encode(message: _29.SimulationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _29.SimulationResponse;
                    fromJSON(object: any): _29.SimulationResponse;
                    toJSON(message: _29.SimulationResponse): unknown;
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
                    }): _29.SimulationResponse;
                };
                MsgData: {
                    encode(message: _29.MsgData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _29.MsgData;
                    fromJSON(object: any): _29.MsgData;
                    toJSON(message: _29.MsgData): unknown;
                    fromPartial(object: {
                        msgType?: string;
                        data?: Uint8Array;
                    }): _29.MsgData;
                };
                TxMsgData: {
                    encode(message: _29.TxMsgData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _29.TxMsgData;
                    fromJSON(object: any): _29.TxMsgData;
                    toJSON(message: _29.TxMsgData): unknown;
                    fromPartial(object: {
                        data?: {
                            msgType?: string;
                            data?: Uint8Array;
                        }[];
                        msgResponses?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                    }): _29.TxMsgData;
                };
                SearchTxsResult: {
                    encode(message: _29.SearchTxsResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _29.SearchTxsResult;
                    fromJSON(object: any): _29.SearchTxsResult;
                    toJSON(message: _29.SearchTxsResult): unknown;
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
                    }): _29.SearchTxsResult;
                };
            };
        }
        namespace node {
            const v1beta1: {
                ServiceClientImpl: typeof _189.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    config(request?: _30.ConfigRequest): Promise<_30.ConfigResponse>;
                };
                LCDQueryClient: typeof _176.LCDQueryClient;
                ConfigRequest: {
                    encode(_: _30.ConfigRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _30.ConfigRequest;
                    fromJSON(_: any): _30.ConfigRequest;
                    toJSON(_: _30.ConfigRequest): unknown;
                    fromPartial(_: {}): _30.ConfigRequest;
                };
                ConfigResponse: {
                    encode(message: _30.ConfigResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _30.ConfigResponse;
                    fromJSON(object: any): _30.ConfigResponse;
                    toJSON(message: _30.ConfigResponse): unknown;
                    fromPartial(object: {
                        minimumGasPrice?: string;
                    }): _30.ConfigResponse;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    encode(message: _31.PageRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _31.PageRequest;
                    fromJSON(object: any): _31.PageRequest;
                    toJSON(message: _31.PageRequest): unknown;
                    fromPartial(object: {
                        key?: Uint8Array;
                        offset?: bigint;
                        limit?: bigint;
                        countTotal?: boolean;
                        reverse?: boolean;
                    }): _31.PageRequest;
                };
                PageResponse: {
                    encode(message: _31.PageResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _31.PageResponse;
                    fromJSON(object: any): _31.PageResponse;
                    toJSON(message: _31.PageResponse): unknown;
                    fromPartial(object: {
                        nextKey?: Uint8Array;
                        total?: bigint;
                    }): _31.PageResponse;
                };
            };
        }
        namespace reflection {
            const v2alpha1: {
                AppDescriptor: {
                    encode(message: _32.AppDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _32.AppDescriptor;
                    fromJSON(object: any): _32.AppDescriptor;
                    toJSON(message: _32.AppDescriptor): unknown;
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
                    }): _32.AppDescriptor;
                };
                TxDescriptor: {
                    encode(message: _32.TxDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _32.TxDescriptor;
                    fromJSON(object: any): _32.TxDescriptor;
                    toJSON(message: _32.TxDescriptor): unknown;
                    fromPartial(object: {
                        fullname?: string;
                        msgs?: {
                            msgTypeUrl?: string;
                        }[];
                    }): _32.TxDescriptor;
                };
                AuthnDescriptor: {
                    encode(message: _32.AuthnDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _32.AuthnDescriptor;
                    fromJSON(object: any): _32.AuthnDescriptor;
                    toJSON(message: _32.AuthnDescriptor): unknown;
                    fromPartial(object: {
                        signModes?: {
                            name?: string;
                            number?: number;
                            authnInfoProviderMethodFullname?: string;
                        }[];
                    }): _32.AuthnDescriptor;
                };
                SigningModeDescriptor: {
                    encode(message: _32.SigningModeDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _32.SigningModeDescriptor;
                    fromJSON(object: any): _32.SigningModeDescriptor;
                    toJSON(message: _32.SigningModeDescriptor): unknown;
                    fromPartial(object: {
                        name?: string;
                        number?: number;
                        authnInfoProviderMethodFullname?: string;
                    }): _32.SigningModeDescriptor;
                };
                ChainDescriptor: {
                    encode(message: _32.ChainDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _32.ChainDescriptor;
                    fromJSON(object: any): _32.ChainDescriptor;
                    toJSON(message: _32.ChainDescriptor): unknown;
                    fromPartial(object: {
                        id?: string;
                    }): _32.ChainDescriptor;
                };
                CodecDescriptor: {
                    encode(message: _32.CodecDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _32.CodecDescriptor;
                    fromJSON(object: any): _32.CodecDescriptor;
                    toJSON(message: _32.CodecDescriptor): unknown;
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
                    }): _32.CodecDescriptor;
                };
                InterfaceDescriptor: {
                    encode(message: _32.InterfaceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _32.InterfaceDescriptor;
                    fromJSON(object: any): _32.InterfaceDescriptor;
                    toJSON(message: _32.InterfaceDescriptor): unknown;
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
                    }): _32.InterfaceDescriptor;
                };
                InterfaceImplementerDescriptor: {
                    encode(message: _32.InterfaceImplementerDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _32.InterfaceImplementerDescriptor;
                    fromJSON(object: any): _32.InterfaceImplementerDescriptor;
                    toJSON(message: _32.InterfaceImplementerDescriptor): unknown;
                    fromPartial(object: {
                        fullname?: string;
                        typeUrl?: string;
                    }): _32.InterfaceImplementerDescriptor;
                };
                InterfaceAcceptingMessageDescriptor: {
                    encode(message: _32.InterfaceAcceptingMessageDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _32.InterfaceAcceptingMessageDescriptor;
                    fromJSON(object: any): _32.InterfaceAcceptingMessageDescriptor;
                    toJSON(message: _32.InterfaceAcceptingMessageDescriptor): unknown;
                    fromPartial(object: {
                        fullname?: string;
                        fieldDescriptorNames?: string[];
                    }): _32.InterfaceAcceptingMessageDescriptor;
                };
                ConfigurationDescriptor: {
                    encode(message: _32.ConfigurationDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _32.ConfigurationDescriptor;
                    fromJSON(object: any): _32.ConfigurationDescriptor;
                    toJSON(message: _32.ConfigurationDescriptor): unknown;
                    fromPartial(object: {
                        bech32AccountAddressPrefix?: string;
                    }): _32.ConfigurationDescriptor;
                };
                MsgDescriptor: {
                    encode(message: _32.MsgDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _32.MsgDescriptor;
                    fromJSON(object: any): _32.MsgDescriptor;
                    toJSON(message: _32.MsgDescriptor): unknown;
                    fromPartial(object: {
                        msgTypeUrl?: string;
                    }): _32.MsgDescriptor;
                };
                GetAuthnDescriptorRequest: {
                    encode(_: _32.GetAuthnDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _32.GetAuthnDescriptorRequest;
                    fromJSON(_: any): _32.GetAuthnDescriptorRequest;
                    toJSON(_: _32.GetAuthnDescriptorRequest): unknown;
                    fromPartial(_: {}): _32.GetAuthnDescriptorRequest;
                };
                GetAuthnDescriptorResponse: {
                    encode(message: _32.GetAuthnDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _32.GetAuthnDescriptorResponse;
                    fromJSON(object: any): _32.GetAuthnDescriptorResponse;
                    toJSON(message: _32.GetAuthnDescriptorResponse): unknown;
                    fromPartial(object: {
                        authn?: {
                            signModes?: {
                                name?: string;
                                number?: number;
                                authnInfoProviderMethodFullname?: string;
                            }[];
                        };
                    }): _32.GetAuthnDescriptorResponse;
                };
                GetChainDescriptorRequest: {
                    encode(_: _32.GetChainDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _32.GetChainDescriptorRequest;
                    fromJSON(_: any): _32.GetChainDescriptorRequest;
                    toJSON(_: _32.GetChainDescriptorRequest): unknown;
                    fromPartial(_: {}): _32.GetChainDescriptorRequest;
                };
                GetChainDescriptorResponse: {
                    encode(message: _32.GetChainDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _32.GetChainDescriptorResponse;
                    fromJSON(object: any): _32.GetChainDescriptorResponse;
                    toJSON(message: _32.GetChainDescriptorResponse): unknown;
                    fromPartial(object: {
                        chain?: {
                            id?: string;
                        };
                    }): _32.GetChainDescriptorResponse;
                };
                GetCodecDescriptorRequest: {
                    encode(_: _32.GetCodecDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _32.GetCodecDescriptorRequest;
                    fromJSON(_: any): _32.GetCodecDescriptorRequest;
                    toJSON(_: _32.GetCodecDescriptorRequest): unknown;
                    fromPartial(_: {}): _32.GetCodecDescriptorRequest;
                };
                GetCodecDescriptorResponse: {
                    encode(message: _32.GetCodecDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _32.GetCodecDescriptorResponse;
                    fromJSON(object: any): _32.GetCodecDescriptorResponse;
                    toJSON(message: _32.GetCodecDescriptorResponse): unknown;
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
                    }): _32.GetCodecDescriptorResponse;
                };
                GetConfigurationDescriptorRequest: {
                    encode(_: _32.GetConfigurationDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _32.GetConfigurationDescriptorRequest;
                    fromJSON(_: any): _32.GetConfigurationDescriptorRequest;
                    toJSON(_: _32.GetConfigurationDescriptorRequest): unknown;
                    fromPartial(_: {}): _32.GetConfigurationDescriptorRequest;
                };
                GetConfigurationDescriptorResponse: {
                    encode(message: _32.GetConfigurationDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _32.GetConfigurationDescriptorResponse;
                    fromJSON(object: any): _32.GetConfigurationDescriptorResponse;
                    toJSON(message: _32.GetConfigurationDescriptorResponse): unknown;
                    fromPartial(object: {
                        config?: {
                            bech32AccountAddressPrefix?: string;
                        };
                    }): _32.GetConfigurationDescriptorResponse;
                };
                GetQueryServicesDescriptorRequest: {
                    encode(_: _32.GetQueryServicesDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _32.GetQueryServicesDescriptorRequest;
                    fromJSON(_: any): _32.GetQueryServicesDescriptorRequest;
                    toJSON(_: _32.GetQueryServicesDescriptorRequest): unknown;
                    fromPartial(_: {}): _32.GetQueryServicesDescriptorRequest;
                };
                GetQueryServicesDescriptorResponse: {
                    encode(message: _32.GetQueryServicesDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _32.GetQueryServicesDescriptorResponse;
                    fromJSON(object: any): _32.GetQueryServicesDescriptorResponse;
                    toJSON(message: _32.GetQueryServicesDescriptorResponse): unknown;
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
                    }): _32.GetQueryServicesDescriptorResponse;
                };
                GetTxDescriptorRequest: {
                    encode(_: _32.GetTxDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _32.GetTxDescriptorRequest;
                    fromJSON(_: any): _32.GetTxDescriptorRequest;
                    toJSON(_: _32.GetTxDescriptorRequest): unknown;
                    fromPartial(_: {}): _32.GetTxDescriptorRequest;
                };
                GetTxDescriptorResponse: {
                    encode(message: _32.GetTxDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _32.GetTxDescriptorResponse;
                    fromJSON(object: any): _32.GetTxDescriptorResponse;
                    toJSON(message: _32.GetTxDescriptorResponse): unknown;
                    fromPartial(object: {
                        tx?: {
                            fullname?: string;
                            msgs?: {
                                msgTypeUrl?: string;
                            }[];
                        };
                    }): _32.GetTxDescriptorResponse;
                };
                QueryServicesDescriptor: {
                    encode(message: _32.QueryServicesDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _32.QueryServicesDescriptor;
                    fromJSON(object: any): _32.QueryServicesDescriptor;
                    toJSON(message: _32.QueryServicesDescriptor): unknown;
                    fromPartial(object: {
                        queryServices?: {
                            fullname?: string;
                            isModule?: boolean;
                            methods?: {
                                name?: string;
                                fullQueryPath?: string;
                            }[];
                        }[];
                    }): _32.QueryServicesDescriptor;
                };
                QueryServiceDescriptor: {
                    encode(message: _32.QueryServiceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _32.QueryServiceDescriptor;
                    fromJSON(object: any): _32.QueryServiceDescriptor;
                    toJSON(message: _32.QueryServiceDescriptor): unknown;
                    fromPartial(object: {
                        fullname?: string;
                        isModule?: boolean;
                        methods?: {
                            name?: string;
                            fullQueryPath?: string;
                        }[];
                    }): _32.QueryServiceDescriptor;
                };
                QueryMethodDescriptor: {
                    encode(message: _32.QueryMethodDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _32.QueryMethodDescriptor;
                    fromJSON(object: any): _32.QueryMethodDescriptor;
                    toJSON(message: _32.QueryMethodDescriptor): unknown;
                    fromPartial(object: {
                        name?: string;
                        fullQueryPath?: string;
                    }): _32.QueryMethodDescriptor;
                };
            };
        }
        const v1beta1: {
            Coin: {
                encode(message: _33.Coin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _33.Coin;
                fromJSON(object: any): _33.Coin;
                toJSON(message: _33.Coin): unknown;
                fromPartial(object: {
                    denom?: string;
                    amount?: string;
                }): _33.Coin;
            };
            DecCoin: {
                encode(message: _33.DecCoin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _33.DecCoin;
                fromJSON(object: any): _33.DecCoin;
                toJSON(message: _33.DecCoin): unknown;
                fromPartial(object: {
                    denom?: string;
                    amount?: string;
                }): _33.DecCoin;
            };
            IntProto: {
                encode(message: _33.IntProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _33.IntProto;
                fromJSON(object: any): _33.IntProto;
                toJSON(message: _33.IntProto): unknown;
                fromPartial(object: {
                    int?: string;
                }): _33.IntProto;
            };
            DecProto: {
                encode(message: _33.DecProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _33.DecProto;
                fromJSON(object: any): _33.DecProto;
                toJSON(message: _33.DecProto): unknown;
                fromPartial(object: {
                    dec?: string;
                }): _33.DecProto;
            };
        };
    }
    namespace capability {
        namespace module {
            const v1: {
                Module: {
                    encode(message: _34.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _34.Module;
                    fromJSON(object: any): _34.Module;
                    toJSON(message: _34.Module): unknown;
                    fromPartial(object: {
                        sealKeeper?: boolean;
                    }): _34.Module;
                };
            };
        }
    }
    namespace consensus {
        namespace module {
            const v1: {
                Module: {
                    encode(message: _35.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _35.Module;
                    fromJSON(object: any): _35.Module;
                    toJSON(message: _35.Module): unknown;
                    fromPartial(object: {
                        authority?: string;
                    }): _35.Module;
                };
            };
        }
        const v1: {
            MsgClientImpl: typeof _202.MsgClientImpl;
            QueryClientImpl: typeof _190.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _36.QueryParamsRequest): Promise<_36.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _177.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    updateParams(value: _37.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    updateParams(value: _37.MsgUpdateParams): {
                        typeUrl: string;
                        value: _37.MsgUpdateParams;
                    };
                };
                toJSON: {
                    updateParams(value: _37.MsgUpdateParams): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _37.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    updateParams(value: _37.MsgUpdateParams): {
                        typeUrl: string;
                        value: _37.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.consensus.v1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: ({ authority, block, evidence, validator }: _37.MsgUpdateParams) => {
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
                    }) => _37.MsgUpdateParams;
                };
            };
            MsgUpdateParams: {
                encode(message: _37.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _37.MsgUpdateParams;
                fromJSON(object: any): _37.MsgUpdateParams;
                toJSON(message: _37.MsgUpdateParams): unknown;
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
                }): _37.MsgUpdateParams;
            };
            MsgUpdateParamsResponse: {
                encode(_: _37.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _37.MsgUpdateParamsResponse;
                fromJSON(_: any): _37.MsgUpdateParamsResponse;
                toJSON(_: _37.MsgUpdateParamsResponse): unknown;
                fromPartial(_: {}): _37.MsgUpdateParamsResponse;
            };
            QueryParamsRequest: {
                encode(_: _36.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _36.QueryParamsRequest;
                fromJSON(_: any): _36.QueryParamsRequest;
                toJSON(_: _36.QueryParamsRequest): unknown;
                fromPartial(_: {}): _36.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _36.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _36.QueryParamsResponse;
                fromJSON(object: any): _36.QueryParamsResponse;
                toJSON(message: _36.QueryParamsResponse): unknown;
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
                }): _36.QueryParamsResponse;
            };
        };
    }
    namespace crisis {
        namespace module {
            const v1: {
                Module: {
                    encode(message: _38.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _38.Module;
                    fromJSON(object: any): _38.Module;
                    toJSON(message: _38.Module): unknown;
                    fromPartial(object: {
                        feeCollectorName?: string;
                        authority?: string;
                    }): _38.Module;
                };
            };
        }
    }
    namespace crypto {
        const ed25519: {
            PubKey: {
                encode(message: _39.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _39.PubKey;
                fromJSON(object: any): _39.PubKey;
                toJSON(message: _39.PubKey): unknown;
                fromPartial(object: {
                    key?: Uint8Array;
                }): _39.PubKey;
            };
            PrivKey: {
                encode(message: _39.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _39.PrivKey;
                fromJSON(object: any): _39.PrivKey;
                toJSON(message: _39.PrivKey): unknown;
                fromPartial(object: {
                    key?: Uint8Array;
                }): _39.PrivKey;
            };
        };
        namespace hd {
            const v1: {
                BIP44Params: {
                    encode(message: _40.BIP44Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _40.BIP44Params;
                    fromJSON(object: any): _40.BIP44Params;
                    toJSON(message: _40.BIP44Params): unknown;
                    fromPartial(object: {
                        purpose?: number;
                        coinType?: number;
                        account?: number;
                        change?: boolean;
                        addressIndex?: number;
                    }): _40.BIP44Params;
                };
            };
        }
        namespace keyring {
            const v1: {
                Record: {
                    encode(message: _41.Record, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _41.Record;
                    fromJSON(object: any): _41.Record;
                    toJSON(message: _41.Record): unknown;
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
                    }): _41.Record;
                };
                Record_Local: {
                    encode(message: _41.Record_Local, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _41.Record_Local;
                    fromJSON(object: any): _41.Record_Local;
                    toJSON(message: _41.Record_Local): unknown;
                    fromPartial(object: {
                        privKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }): _41.Record_Local;
                };
                Record_Ledger: {
                    encode(message: _41.Record_Ledger, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _41.Record_Ledger;
                    fromJSON(object: any): _41.Record_Ledger;
                    toJSON(message: _41.Record_Ledger): unknown;
                    fromPartial(object: {
                        path?: {
                            purpose?: number;
                            coinType?: number;
                            account?: number;
                            change?: boolean;
                            addressIndex?: number;
                        };
                    }): _41.Record_Ledger;
                };
                Record_Multi: {
                    encode(_: _41.Record_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _41.Record_Multi;
                    fromJSON(_: any): _41.Record_Multi;
                    toJSON(_: _41.Record_Multi): unknown;
                    fromPartial(_: {}): _41.Record_Multi;
                };
                Record_Offline: {
                    encode(_: _41.Record_Offline, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _41.Record_Offline;
                    fromJSON(_: any): _41.Record_Offline;
                    toJSON(_: _41.Record_Offline): unknown;
                    fromPartial(_: {}): _41.Record_Offline;
                };
            };
        }
        const multisig: {
            LegacyAminoPubKey: {
                encode(message: _42.LegacyAminoPubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _42.LegacyAminoPubKey;
                fromJSON(object: any): _42.LegacyAminoPubKey;
                toJSON(message: _42.LegacyAminoPubKey): unknown;
                fromPartial(object: {
                    threshold?: number;
                    publicKeys?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                }): _42.LegacyAminoPubKey;
            };
        };
        const secp256k1: {
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
        const secp256r1: {
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
                    secret?: Uint8Array;
                }): _44.PrivKey;
            };
        };
    }
    namespace distribution {
        namespace module {
            const v1: {
                Module: {
                    encode(message: _45.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _45.Module;
                    fromJSON(object: any): _45.Module;
                    toJSON(message: _45.Module): unknown;
                    fromPartial(object: {
                        feeCollectorName?: string;
                        authority?: string;
                    }): _45.Module;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _203.MsgClientImpl;
            QueryClientImpl: typeof _191.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _48.QueryParamsRequest): Promise<_48.QueryParamsResponse>;
                validatorDistributionInfo(request: _48.QueryValidatorDistributionInfoRequest): Promise<_48.QueryValidatorDistributionInfoResponse>;
                validatorOutstandingRewards(request: _48.QueryValidatorOutstandingRewardsRequest): Promise<_48.QueryValidatorOutstandingRewardsResponse>;
                validatorCommission(request: _48.QueryValidatorCommissionRequest): Promise<_48.QueryValidatorCommissionResponse>;
                validatorSlashes(request: _48.QueryValidatorSlashesRequest): Promise<_48.QueryValidatorSlashesResponse>;
                delegationRewards(request: _48.QueryDelegationRewardsRequest): Promise<_48.QueryDelegationRewardsResponse>;
                delegationTotalRewards(request: _48.QueryDelegationTotalRewardsRequest): Promise<_48.QueryDelegationTotalRewardsResponse>;
                delegatorValidators(request: _48.QueryDelegatorValidatorsRequest): Promise<_48.QueryDelegatorValidatorsResponse>;
                delegatorWithdrawAddress(request: _48.QueryDelegatorWithdrawAddressRequest): Promise<_48.QueryDelegatorWithdrawAddressResponse>;
                communityPool(request?: _48.QueryCommunityPoolRequest): Promise<_48.QueryCommunityPoolResponse>;
            };
            LCDQueryClient: typeof _178.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setWithdrawAddress(value: _49.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegatorReward(value: _49.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawValidatorCommission(value: _49.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    fundCommunityPool(value: _49.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _49.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    communityPoolSpend(value: _49.MsgCommunityPoolSpend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setWithdrawAddress(value: _49.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _49.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _49.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _49.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _49.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _49.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _49.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _49.MsgFundCommunityPool;
                    };
                    updateParams(value: _49.MsgUpdateParams): {
                        typeUrl: string;
                        value: _49.MsgUpdateParams;
                    };
                    communityPoolSpend(value: _49.MsgCommunityPoolSpend): {
                        typeUrl: string;
                        value: _49.MsgCommunityPoolSpend;
                    };
                };
                toJSON: {
                    setWithdrawAddress(value: _49.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: unknown;
                    };
                    withdrawDelegatorReward(value: _49.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: unknown;
                    };
                    withdrawValidatorCommission(value: _49.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: unknown;
                    };
                    fundCommunityPool(value: _49.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateParams(value: _49.MsgUpdateParams): {
                        typeUrl: string;
                        value: unknown;
                    };
                    communityPoolSpend(value: _49.MsgCommunityPoolSpend): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    setWithdrawAddress(value: any): {
                        typeUrl: string;
                        value: _49.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: any): {
                        typeUrl: string;
                        value: _49.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: any): {
                        typeUrl: string;
                        value: _49.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: any): {
                        typeUrl: string;
                        value: _49.MsgFundCommunityPool;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _49.MsgUpdateParams;
                    };
                    communityPoolSpend(value: any): {
                        typeUrl: string;
                        value: _49.MsgCommunityPoolSpend;
                    };
                };
                fromPartial: {
                    setWithdrawAddress(value: _49.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _49.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _49.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _49.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _49.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _49.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _49.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _49.MsgFundCommunityPool;
                    };
                    updateParams(value: _49.MsgUpdateParams): {
                        typeUrl: string;
                        value: _49.MsgUpdateParams;
                    };
                    communityPoolSpend(value: _49.MsgCommunityPoolSpend): {
                        typeUrl: string;
                        value: _49.MsgCommunityPoolSpend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, withdrawAddress }: _49.MsgSetWithdrawAddress) => {
                        delegator_address: string;
                        withdraw_address: string;
                    };
                    fromAmino: ({ delegator_address, withdraw_address }: {
                        delegator_address: string;
                        withdraw_address: string;
                    }) => _49.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress }: _49.MsgWithdrawDelegatorReward) => {
                        delegator_address: string;
                        validator_address: string;
                    };
                    fromAmino: ({ delegator_address, validator_address }: {
                        delegator_address: string;
                        validator_address: string;
                    }) => _49.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: ({ validatorAddress }: _49.MsgWithdrawValidatorCommission) => {
                        validator_address: string;
                    };
                    fromAmino: ({ validator_address }: {
                        validator_address: string;
                    }) => _49.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: ({ amount, depositor }: _49.MsgFundCommunityPool) => {
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
                    }) => _49.MsgFundCommunityPool;
                };
                "/cosmos.distribution.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: ({ authority, params }: _49.MsgUpdateParams) => {
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
                    }) => _49.MsgUpdateParams;
                };
                "/cosmos.distribution.v1beta1.MsgCommunityPoolSpend": {
                    aminoType: string;
                    toAmino: ({ authority, recipient, amount }: _49.MsgCommunityPoolSpend) => {
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
                    }) => _49.MsgCommunityPoolSpend;
                };
            };
            MsgSetWithdrawAddress: {
                encode(message: _49.MsgSetWithdrawAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _49.MsgSetWithdrawAddress;
                fromJSON(object: any): _49.MsgSetWithdrawAddress;
                toJSON(message: _49.MsgSetWithdrawAddress): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                    withdrawAddress?: string;
                }): _49.MsgSetWithdrawAddress;
            };
            MsgSetWithdrawAddressResponse: {
                encode(_: _49.MsgSetWithdrawAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _49.MsgSetWithdrawAddressResponse;
                fromJSON(_: any): _49.MsgSetWithdrawAddressResponse;
                toJSON(_: _49.MsgSetWithdrawAddressResponse): unknown;
                fromPartial(_: {}): _49.MsgSetWithdrawAddressResponse;
            };
            MsgWithdrawDelegatorReward: {
                encode(message: _49.MsgWithdrawDelegatorReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _49.MsgWithdrawDelegatorReward;
                fromJSON(object: any): _49.MsgWithdrawDelegatorReward;
                toJSON(message: _49.MsgWithdrawDelegatorReward): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                }): _49.MsgWithdrawDelegatorReward;
            };
            MsgWithdrawDelegatorRewardResponse: {
                encode(message: _49.MsgWithdrawDelegatorRewardResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _49.MsgWithdrawDelegatorRewardResponse;
                fromJSON(object: any): _49.MsgWithdrawDelegatorRewardResponse;
                toJSON(message: _49.MsgWithdrawDelegatorRewardResponse): unknown;
                fromPartial(object: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _49.MsgWithdrawDelegatorRewardResponse;
            };
            MsgWithdrawValidatorCommission: {
                encode(message: _49.MsgWithdrawValidatorCommission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _49.MsgWithdrawValidatorCommission;
                fromJSON(object: any): _49.MsgWithdrawValidatorCommission;
                toJSON(message: _49.MsgWithdrawValidatorCommission): unknown;
                fromPartial(object: {
                    validatorAddress?: string;
                }): _49.MsgWithdrawValidatorCommission;
            };
            MsgWithdrawValidatorCommissionResponse: {
                encode(message: _49.MsgWithdrawValidatorCommissionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _49.MsgWithdrawValidatorCommissionResponse;
                fromJSON(object: any): _49.MsgWithdrawValidatorCommissionResponse;
                toJSON(message: _49.MsgWithdrawValidatorCommissionResponse): unknown;
                fromPartial(object: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _49.MsgWithdrawValidatorCommissionResponse;
            };
            MsgFundCommunityPool: {
                encode(message: _49.MsgFundCommunityPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _49.MsgFundCommunityPool;
                fromJSON(object: any): _49.MsgFundCommunityPool;
                toJSON(message: _49.MsgFundCommunityPool): unknown;
                fromPartial(object: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    depositor?: string;
                }): _49.MsgFundCommunityPool;
            };
            MsgFundCommunityPoolResponse: {
                encode(_: _49.MsgFundCommunityPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _49.MsgFundCommunityPoolResponse;
                fromJSON(_: any): _49.MsgFundCommunityPoolResponse;
                toJSON(_: _49.MsgFundCommunityPoolResponse): unknown;
                fromPartial(_: {}): _49.MsgFundCommunityPoolResponse;
            };
            MsgUpdateParams: {
                encode(message: _49.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _49.MsgUpdateParams;
                fromJSON(object: any): _49.MsgUpdateParams;
                toJSON(message: _49.MsgUpdateParams): unknown;
                fromPartial(object: {
                    authority?: string;
                    params?: {
                        communityTax?: string;
                        baseProposerReward?: string;
                        bonusProposerReward?: string;
                        withdrawAddrEnabled?: boolean;
                    };
                }): _49.MsgUpdateParams;
            };
            MsgUpdateParamsResponse: {
                encode(_: _49.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _49.MsgUpdateParamsResponse;
                fromJSON(_: any): _49.MsgUpdateParamsResponse;
                toJSON(_: _49.MsgUpdateParamsResponse): unknown;
                fromPartial(_: {}): _49.MsgUpdateParamsResponse;
            };
            MsgCommunityPoolSpend: {
                encode(message: _49.MsgCommunityPoolSpend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _49.MsgCommunityPoolSpend;
                fromJSON(object: any): _49.MsgCommunityPoolSpend;
                toJSON(message: _49.MsgCommunityPoolSpend): unknown;
                fromPartial(object: {
                    authority?: string;
                    recipient?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _49.MsgCommunityPoolSpend;
            };
            MsgCommunityPoolSpendResponse: {
                encode(_: _49.MsgCommunityPoolSpendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _49.MsgCommunityPoolSpendResponse;
                fromJSON(_: any): _49.MsgCommunityPoolSpendResponse;
                toJSON(_: _49.MsgCommunityPoolSpendResponse): unknown;
                fromPartial(_: {}): _49.MsgCommunityPoolSpendResponse;
            };
            QueryParamsRequest: {
                encode(_: _48.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _48.QueryParamsRequest;
                fromJSON(_: any): _48.QueryParamsRequest;
                toJSON(_: _48.QueryParamsRequest): unknown;
                fromPartial(_: {}): _48.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _48.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _48.QueryParamsResponse;
                fromJSON(object: any): _48.QueryParamsResponse;
                toJSON(message: _48.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        communityTax?: string;
                        baseProposerReward?: string;
                        bonusProposerReward?: string;
                        withdrawAddrEnabled?: boolean;
                    };
                }): _48.QueryParamsResponse;
            };
            QueryValidatorDistributionInfoRequest: {
                encode(message: _48.QueryValidatorDistributionInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _48.QueryValidatorDistributionInfoRequest;
                fromJSON(object: any): _48.QueryValidatorDistributionInfoRequest;
                toJSON(message: _48.QueryValidatorDistributionInfoRequest): unknown;
                fromPartial(object: {
                    validatorAddress?: string;
                }): _48.QueryValidatorDistributionInfoRequest;
            };
            QueryValidatorDistributionInfoResponse: {
                encode(message: _48.QueryValidatorDistributionInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _48.QueryValidatorDistributionInfoResponse;
                fromJSON(object: any): _48.QueryValidatorDistributionInfoResponse;
                toJSON(message: _48.QueryValidatorDistributionInfoResponse): unknown;
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
                }): _48.QueryValidatorDistributionInfoResponse;
            };
            QueryValidatorOutstandingRewardsRequest: {
                encode(message: _48.QueryValidatorOutstandingRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _48.QueryValidatorOutstandingRewardsRequest;
                fromJSON(object: any): _48.QueryValidatorOutstandingRewardsRequest;
                toJSON(message: _48.QueryValidatorOutstandingRewardsRequest): unknown;
                fromPartial(object: {
                    validatorAddress?: string;
                }): _48.QueryValidatorOutstandingRewardsRequest;
            };
            QueryValidatorOutstandingRewardsResponse: {
                encode(message: _48.QueryValidatorOutstandingRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _48.QueryValidatorOutstandingRewardsResponse;
                fromJSON(object: any): _48.QueryValidatorOutstandingRewardsResponse;
                toJSON(message: _48.QueryValidatorOutstandingRewardsResponse): unknown;
                fromPartial(object: {
                    rewards?: {
                        rewards?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                }): _48.QueryValidatorOutstandingRewardsResponse;
            };
            QueryValidatorCommissionRequest: {
                encode(message: _48.QueryValidatorCommissionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _48.QueryValidatorCommissionRequest;
                fromJSON(object: any): _48.QueryValidatorCommissionRequest;
                toJSON(message: _48.QueryValidatorCommissionRequest): unknown;
                fromPartial(object: {
                    validatorAddress?: string;
                }): _48.QueryValidatorCommissionRequest;
            };
            QueryValidatorCommissionResponse: {
                encode(message: _48.QueryValidatorCommissionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _48.QueryValidatorCommissionResponse;
                fromJSON(object: any): _48.QueryValidatorCommissionResponse;
                toJSON(message: _48.QueryValidatorCommissionResponse): unknown;
                fromPartial(object: {
                    commission?: {
                        commission?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                }): _48.QueryValidatorCommissionResponse;
            };
            QueryValidatorSlashesRequest: {
                encode(message: _48.QueryValidatorSlashesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _48.QueryValidatorSlashesRequest;
                fromJSON(object: any): _48.QueryValidatorSlashesRequest;
                toJSON(message: _48.QueryValidatorSlashesRequest): unknown;
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
                }): _48.QueryValidatorSlashesRequest;
            };
            QueryValidatorSlashesResponse: {
                encode(message: _48.QueryValidatorSlashesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _48.QueryValidatorSlashesResponse;
                fromJSON(object: any): _48.QueryValidatorSlashesResponse;
                toJSON(message: _48.QueryValidatorSlashesResponse): unknown;
                fromPartial(object: {
                    slashes?: {
                        validatorPeriod?: bigint;
                        fraction?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: bigint;
                    };
                }): _48.QueryValidatorSlashesResponse;
            };
            QueryDelegationRewardsRequest: {
                encode(message: _48.QueryDelegationRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _48.QueryDelegationRewardsRequest;
                fromJSON(object: any): _48.QueryDelegationRewardsRequest;
                toJSON(message: _48.QueryDelegationRewardsRequest): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                }): _48.QueryDelegationRewardsRequest;
            };
            QueryDelegationRewardsResponse: {
                encode(message: _48.QueryDelegationRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _48.QueryDelegationRewardsResponse;
                fromJSON(object: any): _48.QueryDelegationRewardsResponse;
                toJSON(message: _48.QueryDelegationRewardsResponse): unknown;
                fromPartial(object: {
                    rewards?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _48.QueryDelegationRewardsResponse;
            };
            QueryDelegationTotalRewardsRequest: {
                encode(message: _48.QueryDelegationTotalRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _48.QueryDelegationTotalRewardsRequest;
                fromJSON(object: any): _48.QueryDelegationTotalRewardsRequest;
                toJSON(message: _48.QueryDelegationTotalRewardsRequest): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                }): _48.QueryDelegationTotalRewardsRequest;
            };
            QueryDelegationTotalRewardsResponse: {
                encode(message: _48.QueryDelegationTotalRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _48.QueryDelegationTotalRewardsResponse;
                fromJSON(object: any): _48.QueryDelegationTotalRewardsResponse;
                toJSON(message: _48.QueryDelegationTotalRewardsResponse): unknown;
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
                }): _48.QueryDelegationTotalRewardsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _48.QueryDelegatorValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _48.QueryDelegatorValidatorsRequest;
                fromJSON(object: any): _48.QueryDelegatorValidatorsRequest;
                toJSON(message: _48.QueryDelegatorValidatorsRequest): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                }): _48.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _48.QueryDelegatorValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _48.QueryDelegatorValidatorsResponse;
                fromJSON(object: any): _48.QueryDelegatorValidatorsResponse;
                toJSON(message: _48.QueryDelegatorValidatorsResponse): unknown;
                fromPartial(object: {
                    validators?: string[];
                }): _48.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorWithdrawAddressRequest: {
                encode(message: _48.QueryDelegatorWithdrawAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _48.QueryDelegatorWithdrawAddressRequest;
                fromJSON(object: any): _48.QueryDelegatorWithdrawAddressRequest;
                toJSON(message: _48.QueryDelegatorWithdrawAddressRequest): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                }): _48.QueryDelegatorWithdrawAddressRequest;
            };
            QueryDelegatorWithdrawAddressResponse: {
                encode(message: _48.QueryDelegatorWithdrawAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _48.QueryDelegatorWithdrawAddressResponse;
                fromJSON(object: any): _48.QueryDelegatorWithdrawAddressResponse;
                toJSON(message: _48.QueryDelegatorWithdrawAddressResponse): unknown;
                fromPartial(object: {
                    withdrawAddress?: string;
                }): _48.QueryDelegatorWithdrawAddressResponse;
            };
            QueryCommunityPoolRequest: {
                encode(_: _48.QueryCommunityPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _48.QueryCommunityPoolRequest;
                fromJSON(_: any): _48.QueryCommunityPoolRequest;
                toJSON(_: _48.QueryCommunityPoolRequest): unknown;
                fromPartial(_: {}): _48.QueryCommunityPoolRequest;
            };
            QueryCommunityPoolResponse: {
                encode(message: _48.QueryCommunityPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _48.QueryCommunityPoolResponse;
                fromJSON(object: any): _48.QueryCommunityPoolResponse;
                toJSON(message: _48.QueryCommunityPoolResponse): unknown;
                fromPartial(object: {
                    pool?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _48.QueryCommunityPoolResponse;
            };
            DelegatorWithdrawInfo: {
                encode(message: _47.DelegatorWithdrawInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _47.DelegatorWithdrawInfo;
                fromJSON(object: any): _47.DelegatorWithdrawInfo;
                toJSON(message: _47.DelegatorWithdrawInfo): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                    withdrawAddress?: string;
                }): _47.DelegatorWithdrawInfo;
            };
            ValidatorOutstandingRewardsRecord: {
                encode(message: _47.ValidatorOutstandingRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _47.ValidatorOutstandingRewardsRecord;
                fromJSON(object: any): _47.ValidatorOutstandingRewardsRecord;
                toJSON(message: _47.ValidatorOutstandingRewardsRecord): unknown;
                fromPartial(object: {
                    validatorAddress?: string;
                    outstandingRewards?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _47.ValidatorOutstandingRewardsRecord;
            };
            ValidatorAccumulatedCommissionRecord: {
                encode(message: _47.ValidatorAccumulatedCommissionRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _47.ValidatorAccumulatedCommissionRecord;
                fromJSON(object: any): _47.ValidatorAccumulatedCommissionRecord;
                toJSON(message: _47.ValidatorAccumulatedCommissionRecord): unknown;
                fromPartial(object: {
                    validatorAddress?: string;
                    accumulated?: {
                        commission?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                }): _47.ValidatorAccumulatedCommissionRecord;
            };
            ValidatorHistoricalRewardsRecord: {
                encode(message: _47.ValidatorHistoricalRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _47.ValidatorHistoricalRewardsRecord;
                fromJSON(object: any): _47.ValidatorHistoricalRewardsRecord;
                toJSON(message: _47.ValidatorHistoricalRewardsRecord): unknown;
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
                }): _47.ValidatorHistoricalRewardsRecord;
            };
            ValidatorCurrentRewardsRecord: {
                encode(message: _47.ValidatorCurrentRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _47.ValidatorCurrentRewardsRecord;
                fromJSON(object: any): _47.ValidatorCurrentRewardsRecord;
                toJSON(message: _47.ValidatorCurrentRewardsRecord): unknown;
                fromPartial(object: {
                    validatorAddress?: string;
                    rewards?: {
                        rewards?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        period?: bigint;
                    };
                }): _47.ValidatorCurrentRewardsRecord;
            };
            DelegatorStartingInfoRecord: {
                encode(message: _47.DelegatorStartingInfoRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _47.DelegatorStartingInfoRecord;
                fromJSON(object: any): _47.DelegatorStartingInfoRecord;
                toJSON(message: _47.DelegatorStartingInfoRecord): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                    startingInfo?: {
                        previousPeriod?: bigint;
                        stake?: string;
                        height?: bigint;
                    };
                }): _47.DelegatorStartingInfoRecord;
            };
            ValidatorSlashEventRecord: {
                encode(message: _47.ValidatorSlashEventRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _47.ValidatorSlashEventRecord;
                fromJSON(object: any): _47.ValidatorSlashEventRecord;
                toJSON(message: _47.ValidatorSlashEventRecord): unknown;
                fromPartial(object: {
                    validatorAddress?: string;
                    height?: bigint;
                    period?: bigint;
                    validatorSlashEvent?: {
                        validatorPeriod?: bigint;
                        fraction?: string;
                    };
                }): _47.ValidatorSlashEventRecord;
            };
            GenesisState: {
                encode(message: _47.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _47.GenesisState;
                fromJSON(object: any): _47.GenesisState;
                toJSON(message: _47.GenesisState): unknown;
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
                }): _47.GenesisState;
            };
            Params: {
                encode(message: _46.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _46.Params;
                fromJSON(object: any): _46.Params;
                toJSON(message: _46.Params): unknown;
                fromPartial(object: {
                    communityTax?: string;
                    baseProposerReward?: string;
                    bonusProposerReward?: string;
                    withdrawAddrEnabled?: boolean;
                }): _46.Params;
            };
            ValidatorHistoricalRewards: {
                encode(message: _46.ValidatorHistoricalRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _46.ValidatorHistoricalRewards;
                fromJSON(object: any): _46.ValidatorHistoricalRewards;
                toJSON(message: _46.ValidatorHistoricalRewards): unknown;
                fromPartial(object: {
                    cumulativeRewardRatio?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    referenceCount?: number;
                }): _46.ValidatorHistoricalRewards;
            };
            ValidatorCurrentRewards: {
                encode(message: _46.ValidatorCurrentRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _46.ValidatorCurrentRewards;
                fromJSON(object: any): _46.ValidatorCurrentRewards;
                toJSON(message: _46.ValidatorCurrentRewards): unknown;
                fromPartial(object: {
                    rewards?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    period?: bigint;
                }): _46.ValidatorCurrentRewards;
            };
            ValidatorAccumulatedCommission: {
                encode(message: _46.ValidatorAccumulatedCommission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _46.ValidatorAccumulatedCommission;
                fromJSON(object: any): _46.ValidatorAccumulatedCommission;
                toJSON(message: _46.ValidatorAccumulatedCommission): unknown;
                fromPartial(object: {
                    commission?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _46.ValidatorAccumulatedCommission;
            };
            ValidatorOutstandingRewards: {
                encode(message: _46.ValidatorOutstandingRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _46.ValidatorOutstandingRewards;
                fromJSON(object: any): _46.ValidatorOutstandingRewards;
                toJSON(message: _46.ValidatorOutstandingRewards): unknown;
                fromPartial(object: {
                    rewards?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _46.ValidatorOutstandingRewards;
            };
            ValidatorSlashEvent: {
                encode(message: _46.ValidatorSlashEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _46.ValidatorSlashEvent;
                fromJSON(object: any): _46.ValidatorSlashEvent;
                toJSON(message: _46.ValidatorSlashEvent): unknown;
                fromPartial(object: {
                    validatorPeriod?: bigint;
                    fraction?: string;
                }): _46.ValidatorSlashEvent;
            };
            ValidatorSlashEvents: {
                encode(message: _46.ValidatorSlashEvents, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _46.ValidatorSlashEvents;
                fromJSON(object: any): _46.ValidatorSlashEvents;
                toJSON(message: _46.ValidatorSlashEvents): unknown;
                fromPartial(object: {
                    validatorSlashEvents?: {
                        validatorPeriod?: bigint;
                        fraction?: string;
                    }[];
                }): _46.ValidatorSlashEvents;
            };
            FeePool: {
                encode(message: _46.FeePool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _46.FeePool;
                fromJSON(object: any): _46.FeePool;
                toJSON(message: _46.FeePool): unknown;
                fromPartial(object: {
                    communityPool?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _46.FeePool;
            };
            CommunityPoolSpendProposal: {
                encode(message: _46.CommunityPoolSpendProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _46.CommunityPoolSpendProposal;
                fromJSON(object: any): _46.CommunityPoolSpendProposal;
                toJSON(message: _46.CommunityPoolSpendProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    recipient?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _46.CommunityPoolSpendProposal;
            };
            DelegatorStartingInfo: {
                encode(message: _46.DelegatorStartingInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _46.DelegatorStartingInfo;
                fromJSON(object: any): _46.DelegatorStartingInfo;
                toJSON(message: _46.DelegatorStartingInfo): unknown;
                fromPartial(object: {
                    previousPeriod?: bigint;
                    stake?: string;
                    height?: bigint;
                }): _46.DelegatorStartingInfo;
            };
            DelegationDelegatorReward: {
                encode(message: _46.DelegationDelegatorReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _46.DelegationDelegatorReward;
                fromJSON(object: any): _46.DelegationDelegatorReward;
                toJSON(message: _46.DelegationDelegatorReward): unknown;
                fromPartial(object: {
                    validatorAddress?: string;
                    reward?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _46.DelegationDelegatorReward;
            };
            CommunityPoolSpendProposalWithDeposit: {
                encode(message: _46.CommunityPoolSpendProposalWithDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _46.CommunityPoolSpendProposalWithDeposit;
                fromJSON(object: any): _46.CommunityPoolSpendProposalWithDeposit;
                toJSON(message: _46.CommunityPoolSpendProposalWithDeposit): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    recipient?: string;
                    amount?: string;
                    deposit?: string;
                }): _46.CommunityPoolSpendProposalWithDeposit;
            };
        };
    }
    namespace evidence {
        namespace module {
            const v1: {
                Module: {
                    encode(_: _50.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _50.Module;
                    fromJSON(_: any): _50.Module;
                    toJSON(_: _50.Module): unknown;
                    fromPartial(_: {}): _50.Module;
                };
            };
        }
    }
    namespace feegrant {
        namespace module {
            const v1: {
                Module: {
                    encode(_: _51.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _51.Module;
                    fromJSON(_: any): _51.Module;
                    toJSON(_: _51.Module): unknown;
                    fromPartial(_: {}): _51.Module;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _204.MsgClientImpl;
            QueryClientImpl: typeof _192.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                allowance(request: _54.QueryAllowanceRequest): Promise<_54.QueryAllowanceResponse>;
                allowances(request: _54.QueryAllowancesRequest): Promise<_54.QueryAllowancesResponse>;
                allowancesByGranter(request: _54.QueryAllowancesByGranterRequest): Promise<_54.QueryAllowancesByGranterResponse>;
            };
            LCDQueryClient: typeof _179.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grantAllowance(value: _55.MsgGrantAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revokeAllowance(value: _55.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grantAllowance(value: _55.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _55.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _55.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _55.MsgRevokeAllowance;
                    };
                };
                toJSON: {
                    grantAllowance(value: _55.MsgGrantAllowance): {
                        typeUrl: string;
                        value: unknown;
                    };
                    revokeAllowance(value: _55.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    grantAllowance(value: any): {
                        typeUrl: string;
                        value: _55.MsgGrantAllowance;
                    };
                    revokeAllowance(value: any): {
                        typeUrl: string;
                        value: _55.MsgRevokeAllowance;
                    };
                };
                fromPartial: {
                    grantAllowance(value: _55.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _55.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _55.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _55.MsgRevokeAllowance;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, allowance }: _55.MsgGrantAllowance) => {
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
                    }) => _55.MsgGrantAllowance;
                };
                "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
                    aminoType: string;
                    toAmino: ({ granter, grantee }: _55.MsgRevokeAllowance) => {
                        granter: string;
                        grantee: string;
                    };
                    fromAmino: ({ granter, grantee }: {
                        granter: string;
                        grantee: string;
                    }) => _55.MsgRevokeAllowance;
                };
            };
            MsgGrantAllowance: {
                encode(message: _55.MsgGrantAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _55.MsgGrantAllowance;
                fromJSON(object: any): _55.MsgGrantAllowance;
                toJSON(message: _55.MsgGrantAllowance): unknown;
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
                }): _55.MsgGrantAllowance;
            };
            MsgGrantAllowanceResponse: {
                encode(_: _55.MsgGrantAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _55.MsgGrantAllowanceResponse;
                fromJSON(_: any): _55.MsgGrantAllowanceResponse;
                toJSON(_: _55.MsgGrantAllowanceResponse): unknown;
                fromPartial(_: {}): _55.MsgGrantAllowanceResponse;
            };
            MsgRevokeAllowance: {
                encode(message: _55.MsgRevokeAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _55.MsgRevokeAllowance;
                fromJSON(object: any): _55.MsgRevokeAllowance;
                toJSON(message: _55.MsgRevokeAllowance): unknown;
                fromPartial(object: {
                    granter?: string;
                    grantee?: string;
                }): _55.MsgRevokeAllowance;
            };
            MsgRevokeAllowanceResponse: {
                encode(_: _55.MsgRevokeAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _55.MsgRevokeAllowanceResponse;
                fromJSON(_: any): _55.MsgRevokeAllowanceResponse;
                toJSON(_: _55.MsgRevokeAllowanceResponse): unknown;
                fromPartial(_: {}): _55.MsgRevokeAllowanceResponse;
            };
            Cosmos_feegrantv1beta1FeeAllowanceI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _52.BasicAllowance | _52.PeriodicAllowance | _52.AllowedMsgAllowance;
            QueryAllowanceRequest: {
                encode(message: _54.QueryAllowanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _54.QueryAllowanceRequest;
                fromJSON(object: any): _54.QueryAllowanceRequest;
                toJSON(message: _54.QueryAllowanceRequest): unknown;
                fromPartial(object: {
                    granter?: string;
                    grantee?: string;
                }): _54.QueryAllowanceRequest;
            };
            QueryAllowanceResponse: {
                encode(message: _54.QueryAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _54.QueryAllowanceResponse;
                fromJSON(object: any): _54.QueryAllowanceResponse;
                toJSON(message: _54.QueryAllowanceResponse): unknown;
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
                }): _54.QueryAllowanceResponse;
            };
            QueryAllowancesRequest: {
                encode(message: _54.QueryAllowancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _54.QueryAllowancesRequest;
                fromJSON(object: any): _54.QueryAllowancesRequest;
                toJSON(message: _54.QueryAllowancesRequest): unknown;
                fromPartial(object: {
                    grantee?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: bigint;
                        limit?: bigint;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _54.QueryAllowancesRequest;
            };
            QueryAllowancesResponse: {
                encode(message: _54.QueryAllowancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _54.QueryAllowancesResponse;
                fromJSON(object: any): _54.QueryAllowancesResponse;
                toJSON(message: _54.QueryAllowancesResponse): unknown;
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
                }): _54.QueryAllowancesResponse;
            };
            QueryAllowancesByGranterRequest: {
                encode(message: _54.QueryAllowancesByGranterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _54.QueryAllowancesByGranterRequest;
                fromJSON(object: any): _54.QueryAllowancesByGranterRequest;
                toJSON(message: _54.QueryAllowancesByGranterRequest): unknown;
                fromPartial(object: {
                    granter?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: bigint;
                        limit?: bigint;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _54.QueryAllowancesByGranterRequest;
            };
            QueryAllowancesByGranterResponse: {
                encode(message: _54.QueryAllowancesByGranterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _54.QueryAllowancesByGranterResponse;
                fromJSON(object: any): _54.QueryAllowancesByGranterResponse;
                toJSON(message: _54.QueryAllowancesByGranterResponse): unknown;
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
                }): _54.QueryAllowancesByGranterResponse;
            };
            GenesisState: {
                encode(message: _53.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _53.GenesisState;
                fromJSON(object: any): _53.GenesisState;
                toJSON(message: _53.GenesisState): unknown;
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
                }): _53.GenesisState;
            };
            BasicAllowance: {
                encode(message: _52.BasicAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _52.BasicAllowance;
                fromJSON(object: any): _52.BasicAllowance;
                toJSON(message: _52.BasicAllowance): unknown;
                fromPartial(object: {
                    spendLimit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    expiration?: {
                        seconds?: bigint;
                        nanos?: number;
                    };
                }): _52.BasicAllowance;
            };
            PeriodicAllowance: {
                encode(message: _52.PeriodicAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _52.PeriodicAllowance;
                fromJSON(object: any): _52.PeriodicAllowance;
                toJSON(message: _52.PeriodicAllowance): unknown;
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
                }): _52.PeriodicAllowance;
            };
            AllowedMsgAllowance: {
                encode(message: _52.AllowedMsgAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _52.AllowedMsgAllowance;
                fromJSON(object: any): _52.AllowedMsgAllowance;
                toJSON(message: _52.AllowedMsgAllowance): unknown;
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
                }): _52.AllowedMsgAllowance;
            };
            Grant: {
                encode(message: _52.Grant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _52.Grant;
                fromJSON(object: any): _52.Grant;
                toJSON(message: _52.Grant): unknown;
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
                }): _52.Grant;
            };
        };
    }
    namespace genutil {
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
    }
    namespace gov {
        namespace module {
            const v1: {
                Module: {
                    encode(message: _57.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _57.Module;
                    fromJSON(object: any): _57.Module;
                    toJSON(message: _57.Module): unknown;
                    fromPartial(object: {
                        maxMetadataLen?: bigint;
                        authority?: string;
                    }): _57.Module;
                };
            };
        }
        const v1: {
            MsgClientImpl: typeof _205.MsgClientImpl;
            QueryClientImpl: typeof _193.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _60.QueryProposalRequest): Promise<_60.QueryProposalResponse>;
                proposals(request: _60.QueryProposalsRequest): Promise<_60.QueryProposalsResponse>;
                vote(request: _60.QueryVoteRequest): Promise<_60.QueryVoteResponse>;
                votes(request: _60.QueryVotesRequest): Promise<_60.QueryVotesResponse>;
                params(request: _60.QueryParamsRequest): Promise<_60.QueryParamsResponse>;
                deposit(request: _60.QueryDepositRequest): Promise<_60.QueryDepositResponse>;
                deposits(request: _60.QueryDepositsRequest): Promise<_60.QueryDepositsResponse>;
                tallyResult(request: _60.QueryTallyResultRequest): Promise<_60.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _180.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _61.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    execLegacyContent(value: _61.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _61.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _61.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _61.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _61.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _61.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _61.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _61.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _61.MsgExecLegacyContent;
                    };
                    vote(value: _61.MsgVote): {
                        typeUrl: string;
                        value: _61.MsgVote;
                    };
                    voteWeighted(value: _61.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _61.MsgVoteWeighted;
                    };
                    deposit(value: _61.MsgDeposit): {
                        typeUrl: string;
                        value: _61.MsgDeposit;
                    };
                    updateParams(value: _61.MsgUpdateParams): {
                        typeUrl: string;
                        value: _61.MsgUpdateParams;
                    };
                };
                toJSON: {
                    submitProposal(value: _61.MsgSubmitProposal): {
                        typeUrl: string;
                        value: unknown;
                    };
                    execLegacyContent(value: _61.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: unknown;
                    };
                    vote(value: _61.MsgVote): {
                        typeUrl: string;
                        value: unknown;
                    };
                    voteWeighted(value: _61.MsgVoteWeighted): {
                        typeUrl: string;
                        value: unknown;
                    };
                    deposit(value: _61.MsgDeposit): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateParams(value: _61.MsgUpdateParams): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _61.MsgSubmitProposal;
                    };
                    execLegacyContent(value: any): {
                        typeUrl: string;
                        value: _61.MsgExecLegacyContent;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _61.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _61.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _61.MsgDeposit;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _61.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    submitProposal(value: _61.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _61.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _61.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _61.MsgExecLegacyContent;
                    };
                    vote(value: _61.MsgVote): {
                        typeUrl: string;
                        value: _61.MsgVote;
                    };
                    voteWeighted(value: _61.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _61.MsgVoteWeighted;
                    };
                    deposit(value: _61.MsgDeposit): {
                        typeUrl: string;
                        value: _61.MsgDeposit;
                    };
                    updateParams(value: _61.MsgUpdateParams): {
                        typeUrl: string;
                        value: _61.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ messages, initialDeposit, proposer, metadata, title, summary }: _61.MsgSubmitProposal) => {
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
                    }) => _61.MsgSubmitProposal;
                };
                "/cosmos.gov.v1.MsgExecLegacyContent": {
                    aminoType: string;
                    toAmino: ({ content, authority }: _61.MsgExecLegacyContent) => {
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
                    }) => _61.MsgExecLegacyContent;
                };
                "/cosmos.gov.v1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, option, metadata }: _61.MsgVote) => {
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
                    }) => _61.MsgVote;
                };
                "/cosmos.gov.v1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, options, metadata }: _61.MsgVoteWeighted) => {
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
                    }) => _61.MsgVoteWeighted;
                };
                "/cosmos.gov.v1.MsgDeposit": {
                    aminoType: string;
                    toAmino: ({ proposalId, depositor, amount }: _61.MsgDeposit) => {
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
                    }) => _61.MsgDeposit;
                };
                "/cosmos.gov.v1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: ({ authority, params }: _61.MsgUpdateParams) => {
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
                    }) => _61.MsgUpdateParams;
                };
            };
            MsgSubmitProposal: {
                encode(message: _61.MsgSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _61.MsgSubmitProposal;
                fromJSON(object: any): _61.MsgSubmitProposal;
                toJSON(message: _61.MsgSubmitProposal): unknown;
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
                }): _61.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _61.MsgSubmitProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _61.MsgSubmitProposalResponse;
                fromJSON(object: any): _61.MsgSubmitProposalResponse;
                toJSON(message: _61.MsgSubmitProposalResponse): unknown;
                fromPartial(object: {
                    proposalId?: bigint;
                }): _61.MsgSubmitProposalResponse;
            };
            MsgExecLegacyContent: {
                encode(message: _61.MsgExecLegacyContent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _61.MsgExecLegacyContent;
                fromJSON(object: any): _61.MsgExecLegacyContent;
                toJSON(message: _61.MsgExecLegacyContent): unknown;
                fromPartial(object: {
                    content?: any;
                    authority?: string;
                }): _61.MsgExecLegacyContent;
            };
            MsgExecLegacyContentResponse: {
                encode(_: _61.MsgExecLegacyContentResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _61.MsgExecLegacyContentResponse;
                fromJSON(_: any): _61.MsgExecLegacyContentResponse;
                toJSON(_: _61.MsgExecLegacyContentResponse): unknown;
                fromPartial(_: {}): _61.MsgExecLegacyContentResponse;
            };
            MsgVote: {
                encode(message: _61.MsgVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _61.MsgVote;
                fromJSON(object: any): _61.MsgVote;
                toJSON(message: _61.MsgVote): unknown;
                fromPartial(object: {
                    proposalId?: bigint;
                    voter?: string;
                    option?: _59.VoteOption;
                    metadata?: string;
                }): _61.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _61.MsgVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _61.MsgVoteResponse;
                fromJSON(_: any): _61.MsgVoteResponse;
                toJSON(_: _61.MsgVoteResponse): unknown;
                fromPartial(_: {}): _61.MsgVoteResponse;
            };
            MsgVoteWeighted: {
                encode(message: _61.MsgVoteWeighted, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _61.MsgVoteWeighted;
                fromJSON(object: any): _61.MsgVoteWeighted;
                toJSON(message: _61.MsgVoteWeighted): unknown;
                fromPartial(object: {
                    proposalId?: bigint;
                    voter?: string;
                    options?: {
                        option?: _59.VoteOption;
                        weight?: string;
                    }[];
                    metadata?: string;
                }): _61.MsgVoteWeighted;
            };
            MsgVoteWeightedResponse: {
                encode(_: _61.MsgVoteWeightedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _61.MsgVoteWeightedResponse;
                fromJSON(_: any): _61.MsgVoteWeightedResponse;
                toJSON(_: _61.MsgVoteWeightedResponse): unknown;
                fromPartial(_: {}): _61.MsgVoteWeightedResponse;
            };
            MsgDeposit: {
                encode(message: _61.MsgDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _61.MsgDeposit;
                fromJSON(object: any): _61.MsgDeposit;
                toJSON(message: _61.MsgDeposit): unknown;
                fromPartial(object: {
                    proposalId?: bigint;
                    depositor?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _61.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _61.MsgDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _61.MsgDepositResponse;
                fromJSON(_: any): _61.MsgDepositResponse;
                toJSON(_: _61.MsgDepositResponse): unknown;
                fromPartial(_: {}): _61.MsgDepositResponse;
            };
            MsgUpdateParams: {
                encode(message: _61.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _61.MsgUpdateParams;
                fromJSON(object: any): _61.MsgUpdateParams;
                toJSON(message: _61.MsgUpdateParams): unknown;
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
                }): _61.MsgUpdateParams;
            };
            MsgUpdateParamsResponse: {
                encode(_: _61.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _61.MsgUpdateParamsResponse;
                fromJSON(_: any): _61.MsgUpdateParamsResponse;
                toJSON(_: _61.MsgUpdateParamsResponse): unknown;
                fromPartial(_: {}): _61.MsgUpdateParamsResponse;
            };
            Cosmos_govv1beta1Content_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _46.CommunityPoolSpendProposal | _46.CommunityPoolSpendProposalWithDeposit | _93.SoftwareUpgradeProposal | _93.CancelSoftwareUpgradeProposal | _63.TextProposal;
            QueryProposalRequest: {
                encode(message: _60.QueryProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _60.QueryProposalRequest;
                fromJSON(object: any): _60.QueryProposalRequest;
                toJSON(message: _60.QueryProposalRequest): unknown;
                fromPartial(object: {
                    proposalId?: bigint;
                }): _60.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _60.QueryProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _60.QueryProposalResponse;
                fromJSON(object: any): _60.QueryProposalResponse;
                toJSON(message: _60.QueryProposalResponse): unknown;
                fromPartial(object: {
                    proposal?: {
                        id?: bigint;
                        messages?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                        status?: _59.ProposalStatus;
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
                }): _60.QueryProposalResponse;
            };
            QueryProposalsRequest: {
                encode(message: _60.QueryProposalsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _60.QueryProposalsRequest;
                fromJSON(object: any): _60.QueryProposalsRequest;
                toJSON(message: _60.QueryProposalsRequest): unknown;
                fromPartial(object: {
                    proposalStatus?: _59.ProposalStatus;
                    voter?: string;
                    depositor?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: bigint;
                        limit?: bigint;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _60.QueryProposalsRequest;
            };
            QueryProposalsResponse: {
                encode(message: _60.QueryProposalsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _60.QueryProposalsResponse;
                fromJSON(object: any): _60.QueryProposalsResponse;
                toJSON(message: _60.QueryProposalsResponse): unknown;
                fromPartial(object: {
                    proposals?: {
                        id?: bigint;
                        messages?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                        status?: _59.ProposalStatus;
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
                }): _60.QueryProposalsResponse;
            };
            QueryVoteRequest: {
                encode(message: _60.QueryVoteRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _60.QueryVoteRequest;
                fromJSON(object: any): _60.QueryVoteRequest;
                toJSON(message: _60.QueryVoteRequest): unknown;
                fromPartial(object: {
                    proposalId?: bigint;
                    voter?: string;
                }): _60.QueryVoteRequest;
            };
            QueryVoteResponse: {
                encode(message: _60.QueryVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _60.QueryVoteResponse;
                fromJSON(object: any): _60.QueryVoteResponse;
                toJSON(message: _60.QueryVoteResponse): unknown;
                fromPartial(object: {
                    vote?: {
                        proposalId?: bigint;
                        voter?: string;
                        options?: {
                            option?: _59.VoteOption;
                            weight?: string;
                        }[];
                        metadata?: string;
                    };
                }): _60.QueryVoteResponse;
            };
            QueryVotesRequest: {
                encode(message: _60.QueryVotesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _60.QueryVotesRequest;
                fromJSON(object: any): _60.QueryVotesRequest;
                toJSON(message: _60.QueryVotesRequest): unknown;
                fromPartial(object: {
                    proposalId?: bigint;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: bigint;
                        limit?: bigint;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _60.QueryVotesRequest;
            };
            QueryVotesResponse: {
                encode(message: _60.QueryVotesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _60.QueryVotesResponse;
                fromJSON(object: any): _60.QueryVotesResponse;
                toJSON(message: _60.QueryVotesResponse): unknown;
                fromPartial(object: {
                    votes?: {
                        proposalId?: bigint;
                        voter?: string;
                        options?: {
                            option?: _59.VoteOption;
                            weight?: string;
                        }[];
                        metadata?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: bigint;
                    };
                }): _60.QueryVotesResponse;
            };
            QueryParamsRequest: {
                encode(message: _60.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _60.QueryParamsRequest;
                fromJSON(object: any): _60.QueryParamsRequest;
                toJSON(message: _60.QueryParamsRequest): unknown;
                fromPartial(object: {
                    paramsType?: string;
                }): _60.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _60.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _60.QueryParamsResponse;
                fromJSON(object: any): _60.QueryParamsResponse;
                toJSON(message: _60.QueryParamsResponse): unknown;
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
                }): _60.QueryParamsResponse;
            };
            QueryDepositRequest: {
                encode(message: _60.QueryDepositRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _60.QueryDepositRequest;
                fromJSON(object: any): _60.QueryDepositRequest;
                toJSON(message: _60.QueryDepositRequest): unknown;
                fromPartial(object: {
                    proposalId?: bigint;
                    depositor?: string;
                }): _60.QueryDepositRequest;
            };
            QueryDepositResponse: {
                encode(message: _60.QueryDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _60.QueryDepositResponse;
                fromJSON(object: any): _60.QueryDepositResponse;
                toJSON(message: _60.QueryDepositResponse): unknown;
                fromPartial(object: {
                    deposit?: {
                        proposalId?: bigint;
                        depositor?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                }): _60.QueryDepositResponse;
            };
            QueryDepositsRequest: {
                encode(message: _60.QueryDepositsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _60.QueryDepositsRequest;
                fromJSON(object: any): _60.QueryDepositsRequest;
                toJSON(message: _60.QueryDepositsRequest): unknown;
                fromPartial(object: {
                    proposalId?: bigint;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: bigint;
                        limit?: bigint;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _60.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _60.QueryDepositsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _60.QueryDepositsResponse;
                fromJSON(object: any): _60.QueryDepositsResponse;
                toJSON(message: _60.QueryDepositsResponse): unknown;
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
                }): _60.QueryDepositsResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _60.QueryTallyResultRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _60.QueryTallyResultRequest;
                fromJSON(object: any): _60.QueryTallyResultRequest;
                toJSON(message: _60.QueryTallyResultRequest): unknown;
                fromPartial(object: {
                    proposalId?: bigint;
                }): _60.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _60.QueryTallyResultResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _60.QueryTallyResultResponse;
                fromJSON(object: any): _60.QueryTallyResultResponse;
                toJSON(message: _60.QueryTallyResultResponse): unknown;
                fromPartial(object: {
                    tally?: {
                        yesCount?: string;
                        abstainCount?: string;
                        noCount?: string;
                        noWithVetoCount?: string;
                    };
                }): _60.QueryTallyResultResponse;
            };
            voteOptionFromJSON(object: any): _59.VoteOption;
            voteOptionToJSON(object: _59.VoteOption): string;
            proposalStatusFromJSON(object: any): _59.ProposalStatus;
            proposalStatusToJSON(object: _59.ProposalStatus): string;
            VoteOption: typeof _59.VoteOption;
            ProposalStatus: typeof _59.ProposalStatus;
            WeightedVoteOption: {
                encode(message: _59.WeightedVoteOption, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _59.WeightedVoteOption;
                fromJSON(object: any): _59.WeightedVoteOption;
                toJSON(message: _59.WeightedVoteOption): unknown;
                fromPartial(object: {
                    option?: _59.VoteOption;
                    weight?: string;
                }): _59.WeightedVoteOption;
            };
            Deposit: {
                encode(message: _59.Deposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _59.Deposit;
                fromJSON(object: any): _59.Deposit;
                toJSON(message: _59.Deposit): unknown;
                fromPartial(object: {
                    proposalId?: bigint;
                    depositor?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _59.Deposit;
            };
            Proposal: {
                encode(message: _59.Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _59.Proposal;
                fromJSON(object: any): _59.Proposal;
                toJSON(message: _59.Proposal): unknown;
                fromPartial(object: {
                    id?: bigint;
                    messages?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                    status?: _59.ProposalStatus;
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
                }): _59.Proposal;
            };
            TallyResult: {
                encode(message: _59.TallyResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _59.TallyResult;
                fromJSON(object: any): _59.TallyResult;
                toJSON(message: _59.TallyResult): unknown;
                fromPartial(object: {
                    yesCount?: string;
                    abstainCount?: string;
                    noCount?: string;
                    noWithVetoCount?: string;
                }): _59.TallyResult;
            };
            Vote: {
                encode(message: _59.Vote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _59.Vote;
                fromJSON(object: any): _59.Vote;
                toJSON(message: _59.Vote): unknown;
                fromPartial(object: {
                    proposalId?: bigint;
                    voter?: string;
                    options?: {
                        option?: _59.VoteOption;
                        weight?: string;
                    }[];
                    metadata?: string;
                }): _59.Vote;
            };
            DepositParams: {
                encode(message: _59.DepositParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _59.DepositParams;
                fromJSON(object: any): _59.DepositParams;
                toJSON(message: _59.DepositParams): unknown;
                fromPartial(object: {
                    minDeposit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    maxDepositPeriod?: {
                        seconds?: bigint;
                        nanos?: number;
                    };
                }): _59.DepositParams;
            };
            VotingParams: {
                encode(message: _59.VotingParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _59.VotingParams;
                fromJSON(object: any): _59.VotingParams;
                toJSON(message: _59.VotingParams): unknown;
                fromPartial(object: {
                    votingPeriod?: {
                        seconds?: bigint;
                        nanos?: number;
                    };
                }): _59.VotingParams;
            };
            TallyParams: {
                encode(message: _59.TallyParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _59.TallyParams;
                fromJSON(object: any): _59.TallyParams;
                toJSON(message: _59.TallyParams): unknown;
                fromPartial(object: {
                    quorum?: string;
                    threshold?: string;
                    vetoThreshold?: string;
                }): _59.TallyParams;
            };
            Params: {
                encode(message: _59.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _59.Params;
                fromJSON(object: any): _59.Params;
                toJSON(message: _59.Params): unknown;
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
                }): _59.Params;
            };
            GenesisState: {
                encode(message: _58.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _58.GenesisState;
                fromJSON(object: any): _58.GenesisState;
                toJSON(message: _58.GenesisState): unknown;
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
                            option?: _59.VoteOption;
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
                        status?: _59.ProposalStatus;
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
                }): _58.GenesisState;
            };
        };
        const v1beta1: {
            MsgClientImpl: typeof _206.MsgClientImpl;
            QueryClientImpl: typeof _194.QueryClientImpl;
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
            LCDQueryClient: typeof _181.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _65.MsgSubmitProposal): {
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
                };
                withTypeUrl: {
                    submitProposal(value: _65.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _65.MsgSubmitProposal;
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
                };
                toJSON: {
                    submitProposal(value: _65.MsgSubmitProposal): {
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
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _65.MsgSubmitProposal;
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
                };
                fromPartial: {
                    submitProposal(value: _65.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _65.MsgSubmitProposal;
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
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ content, initialDeposit, proposer }: _65.MsgSubmitProposal) => {
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
                    }) => _65.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, option }: _65.MsgVote) => {
                        proposal_id: string;
                        voter: string;
                        option: number;
                    };
                    fromAmino: ({ proposal_id, voter, option }: {
                        proposal_id: string;
                        voter: string;
                        option: number;
                    }) => _65.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, options }: _65.MsgVoteWeighted) => {
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
                    }) => _65.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
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
            };
            MsgSubmitProposal: {
                encode(message: _65.MsgSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _65.MsgSubmitProposal;
                fromJSON(object: any): _65.MsgSubmitProposal;
                toJSON(message: _65.MsgSubmitProposal): unknown;
                fromPartial(object: {
                    content?: any;
                    initialDeposit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    proposer?: string;
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
            MsgVote: {
                encode(message: _65.MsgVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _65.MsgVote;
                fromJSON(object: any): _65.MsgVote;
                toJSON(message: _65.MsgVote): unknown;
                fromPartial(object: {
                    proposalId?: bigint;
                    voter?: string;
                    option?: _63.VoteOption;
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
            Cosmos_govv1beta1Content_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _46.CommunityPoolSpendProposal | _46.CommunityPoolSpendProposalWithDeposit | _93.SoftwareUpgradeProposal | _93.CancelSoftwareUpgradeProposal | _63.TextProposal;
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
                        proposalId?: bigint;
                        content?: any;
                        status?: _63.ProposalStatus;
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
                        proposalId?: bigint;
                        content?: any;
                        status?: _63.ProposalStatus;
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
                        option?: _63.VoteOption;
                        options?: {
                            option?: _63.VoteOption;
                            weight?: string;
                        }[];
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
                        option?: _63.VoteOption;
                        options?: {
                            option?: _63.VoteOption;
                            weight?: string;
                        }[];
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
                        quorum?: Uint8Array;
                        threshold?: Uint8Array;
                        vetoThreshold?: Uint8Array;
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
                        yes?: string;
                        abstain?: string;
                        no?: string;
                        noWithVeto?: string;
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
            TextProposal: {
                encode(message: _63.TextProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _63.TextProposal;
                fromJSON(object: any): _63.TextProposal;
                toJSON(message: _63.TextProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                }): _63.TextProposal;
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
                    proposalId?: bigint;
                    content?: any;
                    status?: _63.ProposalStatus;
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
                }): _63.Proposal;
            };
            TallyResult: {
                encode(message: _63.TallyResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _63.TallyResult;
                fromJSON(object: any): _63.TallyResult;
                toJSON(message: _63.TallyResult): unknown;
                fromPartial(object: {
                    yes?: string;
                    abstain?: string;
                    no?: string;
                    noWithVeto?: string;
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
                    option?: _63.VoteOption;
                    options?: {
                        option?: _63.VoteOption;
                        weight?: string;
                    }[];
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
                    quorum?: Uint8Array;
                    threshold?: Uint8Array;
                    vetoThreshold?: Uint8Array;
                }): _63.TallyParams;
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
                        option?: _63.VoteOption;
                        options?: {
                            option?: _63.VoteOption;
                            weight?: string;
                        }[];
                    }[];
                    proposals?: {
                        proposalId?: bigint;
                        content?: any;
                        status?: _63.ProposalStatus;
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
                }): _62.GenesisState;
            };
        };
    }
    namespace group {
        namespace module {
            const v1: {
                Module: {
                    encode(message: _66.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _66.Module;
                    fromJSON(object: any): _66.Module;
                    toJSON(message: _66.Module): unknown;
                    fromPartial(object: {
                        maxExecutionPeriod?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        maxMetadataLen?: bigint;
                    }): _66.Module;
                };
            };
        }
    }
    namespace mint {
        namespace module {
            const v1: {
                Module: {
                    encode(message: _67.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _67.Module;
                    fromJSON(object: any): _67.Module;
                    toJSON(message: _67.Module): unknown;
                    fromPartial(object: {
                        feeCollectorName?: string;
                        authority?: string;
                    }): _67.Module;
                };
            };
        }
    }
    namespace nft {
        namespace module {
            const v1: {
                Module: {
                    encode(_: _68.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _68.Module;
                    fromJSON(_: any): _68.Module;
                    toJSON(_: _68.Module): unknown;
                    fromPartial(_: {}): _68.Module;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _207.MsgClientImpl;
            QueryClientImpl: typeof _195.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _72.QueryBalanceRequest): Promise<_72.QueryBalanceResponse>;
                owner(request: _72.QueryOwnerRequest): Promise<_72.QueryOwnerResponse>;
                supply(request: _72.QuerySupplyRequest): Promise<_72.QuerySupplyResponse>;
                nFTs(request: _72.QueryNFTsRequest): Promise<_72.QueryNFTsResponse>;
                nFT(request: _72.QueryNFTRequest): Promise<_72.QueryNFTResponse>;
                class(request: _72.QueryClassRequest): Promise<_72.QueryClassResponse>;
                classes(request?: _72.QueryClassesRequest): Promise<_72.QueryClassesResponse>;
            };
            LCDQueryClient: typeof _182.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _73.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _73.MsgSend): {
                        typeUrl: string;
                        value: _73.MsgSend;
                    };
                };
                toJSON: {
                    send(value: _73.MsgSend): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _73.MsgSend;
                    };
                };
                fromPartial: {
                    send(value: _73.MsgSend): {
                        typeUrl: string;
                        value: _73.MsgSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.nft.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: ({ classId, id, sender, receiver }: _73.MsgSend) => {
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
                    }) => _73.MsgSend;
                };
            };
            MsgSend: {
                encode(message: _73.MsgSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _73.MsgSend;
                fromJSON(object: any): _73.MsgSend;
                toJSON(message: _73.MsgSend): unknown;
                fromPartial(object: {
                    classId?: string;
                    id?: string;
                    sender?: string;
                    receiver?: string;
                }): _73.MsgSend;
            };
            MsgSendResponse: {
                encode(_: _73.MsgSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _73.MsgSendResponse;
                fromJSON(_: any): _73.MsgSendResponse;
                toJSON(_: _73.MsgSendResponse): unknown;
                fromPartial(_: {}): _73.MsgSendResponse;
            };
            QueryBalanceRequest: {
                encode(message: _72.QueryBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _72.QueryBalanceRequest;
                fromJSON(object: any): _72.QueryBalanceRequest;
                toJSON(message: _72.QueryBalanceRequest): unknown;
                fromPartial(object: {
                    classId?: string;
                    owner?: string;
                }): _72.QueryBalanceRequest;
            };
            QueryBalanceResponse: {
                encode(message: _72.QueryBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _72.QueryBalanceResponse;
                fromJSON(object: any): _72.QueryBalanceResponse;
                toJSON(message: _72.QueryBalanceResponse): unknown;
                fromPartial(object: {
                    amount?: bigint;
                }): _72.QueryBalanceResponse;
            };
            QueryOwnerRequest: {
                encode(message: _72.QueryOwnerRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _72.QueryOwnerRequest;
                fromJSON(object: any): _72.QueryOwnerRequest;
                toJSON(message: _72.QueryOwnerRequest): unknown;
                fromPartial(object: {
                    classId?: string;
                    id?: string;
                }): _72.QueryOwnerRequest;
            };
            QueryOwnerResponse: {
                encode(message: _72.QueryOwnerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _72.QueryOwnerResponse;
                fromJSON(object: any): _72.QueryOwnerResponse;
                toJSON(message: _72.QueryOwnerResponse): unknown;
                fromPartial(object: {
                    owner?: string;
                }): _72.QueryOwnerResponse;
            };
            QuerySupplyRequest: {
                encode(message: _72.QuerySupplyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _72.QuerySupplyRequest;
                fromJSON(object: any): _72.QuerySupplyRequest;
                toJSON(message: _72.QuerySupplyRequest): unknown;
                fromPartial(object: {
                    classId?: string;
                }): _72.QuerySupplyRequest;
            };
            QuerySupplyResponse: {
                encode(message: _72.QuerySupplyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _72.QuerySupplyResponse;
                fromJSON(object: any): _72.QuerySupplyResponse;
                toJSON(message: _72.QuerySupplyResponse): unknown;
                fromPartial(object: {
                    amount?: bigint;
                }): _72.QuerySupplyResponse;
            };
            QueryNFTsRequest: {
                encode(message: _72.QueryNFTsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _72.QueryNFTsRequest;
                fromJSON(object: any): _72.QueryNFTsRequest;
                toJSON(message: _72.QueryNFTsRequest): unknown;
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
                }): _72.QueryNFTsRequest;
            };
            QueryNFTsResponse: {
                encode(message: _72.QueryNFTsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _72.QueryNFTsResponse;
                fromJSON(object: any): _72.QueryNFTsResponse;
                toJSON(message: _72.QueryNFTsResponse): unknown;
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
                }): _72.QueryNFTsResponse;
            };
            QueryNFTRequest: {
                encode(message: _72.QueryNFTRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _72.QueryNFTRequest;
                fromJSON(object: any): _72.QueryNFTRequest;
                toJSON(message: _72.QueryNFTRequest): unknown;
                fromPartial(object: {
                    classId?: string;
                    id?: string;
                }): _72.QueryNFTRequest;
            };
            QueryNFTResponse: {
                encode(message: _72.QueryNFTResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _72.QueryNFTResponse;
                fromJSON(object: any): _72.QueryNFTResponse;
                toJSON(message: _72.QueryNFTResponse): unknown;
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
                }): _72.QueryNFTResponse;
            };
            QueryClassRequest: {
                encode(message: _72.QueryClassRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _72.QueryClassRequest;
                fromJSON(object: any): _72.QueryClassRequest;
                toJSON(message: _72.QueryClassRequest): unknown;
                fromPartial(object: {
                    classId?: string;
                }): _72.QueryClassRequest;
            };
            QueryClassResponse: {
                encode(message: _72.QueryClassResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _72.QueryClassResponse;
                fromJSON(object: any): _72.QueryClassResponse;
                toJSON(message: _72.QueryClassResponse): unknown;
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
                }): _72.QueryClassResponse;
            };
            QueryClassesRequest: {
                encode(message: _72.QueryClassesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _72.QueryClassesRequest;
                fromJSON(object: any): _72.QueryClassesRequest;
                toJSON(message: _72.QueryClassesRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: bigint;
                        limit?: bigint;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _72.QueryClassesRequest;
            };
            QueryClassesResponse: {
                encode(message: _72.QueryClassesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _72.QueryClassesResponse;
                fromJSON(object: any): _72.QueryClassesResponse;
                toJSON(message: _72.QueryClassesResponse): unknown;
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
                }): _72.QueryClassesResponse;
            };
            Class: {
                encode(message: _71.Class, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _71.Class;
                fromJSON(object: any): _71.Class;
                toJSON(message: _71.Class): unknown;
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
                }): _71.Class;
            };
            NFT: {
                encode(message: _71.NFT, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _71.NFT;
                fromJSON(object: any): _71.NFT;
                toJSON(message: _71.NFT): unknown;
                fromPartial(object: {
                    classId?: string;
                    id?: string;
                    uri?: string;
                    uriHash?: string;
                    data?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _71.NFT;
            };
            GenesisState: {
                encode(message: _70.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _70.GenesisState;
                fromJSON(object: any): _70.GenesisState;
                toJSON(message: _70.GenesisState): unknown;
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
                }): _70.GenesisState;
            };
            Entry: {
                encode(message: _70.Entry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _70.Entry;
                fromJSON(object: any): _70.Entry;
                toJSON(message: _70.Entry): unknown;
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
                }): _70.Entry;
            };
            EventSend: {
                encode(message: _69.EventSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _69.EventSend;
                fromJSON(object: any): _69.EventSend;
                toJSON(message: _69.EventSend): unknown;
                fromPartial(object: {
                    classId?: string;
                    id?: string;
                    sender?: string;
                    receiver?: string;
                }): _69.EventSend;
            };
            EventMint: {
                encode(message: _69.EventMint, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _69.EventMint;
                fromJSON(object: any): _69.EventMint;
                toJSON(message: _69.EventMint): unknown;
                fromPartial(object: {
                    classId?: string;
                    id?: string;
                    owner?: string;
                }): _69.EventMint;
            };
            EventBurn: {
                encode(message: _69.EventBurn, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _69.EventBurn;
                fromJSON(object: any): _69.EventBurn;
                toJSON(message: _69.EventBurn): unknown;
                fromPartial(object: {
                    classId?: string;
                    id?: string;
                    owner?: string;
                }): _69.EventBurn;
            };
        };
    }
    namespace orm {
        namespace module {
            const v1alpha1: {
                Module: {
                    encode(_: _74.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _74.Module;
                    fromJSON(_: any): _74.Module;
                    toJSON(_: _74.Module): unknown;
                    fromPartial(_: {}): _74.Module;
                };
            };
        }
        namespace query {
            const v1alpha1: {
                QueryClientImpl: typeof _196.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    get(request: _75.GetRequest): Promise<_75.GetResponse>;
                    list(request: _75.ListRequest): Promise<_75.ListResponse>;
                };
                GetRequest: {
                    encode(message: _75.GetRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _75.GetRequest;
                    fromJSON(object: any): _75.GetRequest;
                    toJSON(message: _75.GetRequest): unknown;
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
                    }): _75.GetRequest;
                };
                GetResponse: {
                    encode(message: _75.GetResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _75.GetResponse;
                    fromJSON(object: any): _75.GetResponse;
                    toJSON(message: _75.GetResponse): unknown;
                    fromPartial(object: {
                        result?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }): _75.GetResponse;
                };
                ListRequest: {
                    encode(message: _75.ListRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _75.ListRequest;
                    fromJSON(object: any): _75.ListRequest;
                    toJSON(message: _75.ListRequest): unknown;
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
                    }): _75.ListRequest;
                };
                ListRequest_Prefix: {
                    encode(message: _75.ListRequest_Prefix, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _75.ListRequest_Prefix;
                    fromJSON(object: any): _75.ListRequest_Prefix;
                    toJSON(message: _75.ListRequest_Prefix): unknown;
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
                    }): _75.ListRequest_Prefix;
                };
                ListRequest_Range: {
                    encode(message: _75.ListRequest_Range, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _75.ListRequest_Range;
                    fromJSON(object: any): _75.ListRequest_Range;
                    toJSON(message: _75.ListRequest_Range): unknown;
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
                    }): _75.ListRequest_Range;
                };
                ListResponse: {
                    encode(message: _75.ListResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _75.ListResponse;
                    fromJSON(object: any): _75.ListResponse;
                    toJSON(message: _75.ListResponse): unknown;
                    fromPartial(object: {
                        results?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: bigint;
                        };
                    }): _75.ListResponse;
                };
                IndexValue: {
                    encode(message: _75.IndexValue, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _75.IndexValue;
                    fromJSON(object: any): _75.IndexValue;
                    toJSON(message: _75.IndexValue): unknown;
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
                    }): _75.IndexValue;
                };
            };
        }
    }
    namespace params {
        namespace module {
            const v1: {
                Module: {
                    encode(_: _76.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _76.Module;
                    fromJSON(_: any): _76.Module;
                    toJSON(_: _76.Module): unknown;
                    fromPartial(_: {}): _76.Module;
                };
            };
        }
    }
    namespace query {
        const v1: {};
    }
    namespace reflection {
        const v1: {
            FileDescriptorsRequest: {
                encode(_: _78.FileDescriptorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _78.FileDescriptorsRequest;
                fromJSON(_: any): _78.FileDescriptorsRequest;
                toJSON(_: _78.FileDescriptorsRequest): unknown;
                fromPartial(_: {}): _78.FileDescriptorsRequest;
            };
            FileDescriptorsResponse: {
                encode(message: _78.FileDescriptorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _78.FileDescriptorsResponse;
                fromJSON(object: any): _78.FileDescriptorsResponse;
                toJSON(message: _78.FileDescriptorsResponse): unknown;
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
                }): _78.FileDescriptorsResponse;
            };
        };
    }
    namespace slashing {
        namespace module {
            const v1: {
                Module: {
                    encode(message: _79.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _79.Module;
                    fromJSON(object: any): _79.Module;
                    toJSON(message: _79.Module): unknown;
                    fromPartial(object: {
                        authority?: string;
                    }): _79.Module;
                };
            };
        }
    }
    namespace staking {
        namespace module {
            const v1: {
                Module: {
                    encode(message: _80.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _80.Module;
                    fromJSON(object: any): _80.Module;
                    toJSON(message: _80.Module): unknown;
                    fromPartial(object: {
                        hooksOrder?: string[];
                        authority?: string;
                    }): _80.Module;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _208.MsgClientImpl;
            QueryClientImpl: typeof _197.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                validators(request: _83.QueryValidatorsRequest): Promise<_83.QueryValidatorsResponse>;
                validator(request: _83.QueryValidatorRequest): Promise<_83.QueryValidatorResponse>;
                validatorDelegations(request: _83.QueryValidatorDelegationsRequest): Promise<_83.QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: _83.QueryValidatorUnbondingDelegationsRequest): Promise<_83.QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: _83.QueryDelegationRequest): Promise<_83.QueryDelegationResponse>;
                unbondingDelegation(request: _83.QueryUnbondingDelegationRequest): Promise<_83.QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: _83.QueryDelegatorDelegationsRequest): Promise<_83.QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: _83.QueryDelegatorUnbondingDelegationsRequest): Promise<_83.QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: _83.QueryRedelegationsRequest): Promise<_83.QueryRedelegationsResponse>;
                delegatorValidators(request: _83.QueryDelegatorValidatorsRequest): Promise<_83.QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: _83.QueryDelegatorValidatorRequest): Promise<_83.QueryDelegatorValidatorResponse>;
                historicalInfo(request: _83.QueryHistoricalInfoRequest): Promise<_83.QueryHistoricalInfoResponse>;
                pool(request?: _83.QueryPoolRequest): Promise<_83.QueryPoolResponse>;
                params(request?: _83.QueryParamsRequest): Promise<_83.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _183.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createValidator(value: _85.MsgCreateValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editValidator(value: _85.MsgEditValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegate(value: _85.MsgDelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    beginRedelegate(value: _85.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegate(value: _85.MsgUndelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUnbondingDelegation(value: _85.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _85.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createValidator(value: _85.MsgCreateValidator): {
                        typeUrl: string;
                        value: _85.MsgCreateValidator;
                    };
                    editValidator(value: _85.MsgEditValidator): {
                        typeUrl: string;
                        value: _85.MsgEditValidator;
                    };
                    delegate(value: _85.MsgDelegate): {
                        typeUrl: string;
                        value: _85.MsgDelegate;
                    };
                    beginRedelegate(value: _85.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _85.MsgBeginRedelegate;
                    };
                    undelegate(value: _85.MsgUndelegate): {
                        typeUrl: string;
                        value: _85.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: _85.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: _85.MsgCancelUnbondingDelegation;
                    };
                    updateParams(value: _85.MsgUpdateParams): {
                        typeUrl: string;
                        value: _85.MsgUpdateParams;
                    };
                };
                toJSON: {
                    createValidator(value: _85.MsgCreateValidator): {
                        typeUrl: string;
                        value: unknown;
                    };
                    editValidator(value: _85.MsgEditValidator): {
                        typeUrl: string;
                        value: unknown;
                    };
                    delegate(value: _85.MsgDelegate): {
                        typeUrl: string;
                        value: unknown;
                    };
                    beginRedelegate(value: _85.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: unknown;
                    };
                    undelegate(value: _85.MsgUndelegate): {
                        typeUrl: string;
                        value: unknown;
                    };
                    cancelUnbondingDelegation(value: _85.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateParams(value: _85.MsgUpdateParams): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createValidator(value: any): {
                        typeUrl: string;
                        value: _85.MsgCreateValidator;
                    };
                    editValidator(value: any): {
                        typeUrl: string;
                        value: _85.MsgEditValidator;
                    };
                    delegate(value: any): {
                        typeUrl: string;
                        value: _85.MsgDelegate;
                    };
                    beginRedelegate(value: any): {
                        typeUrl: string;
                        value: _85.MsgBeginRedelegate;
                    };
                    undelegate(value: any): {
                        typeUrl: string;
                        value: _85.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: any): {
                        typeUrl: string;
                        value: _85.MsgCancelUnbondingDelegation;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _85.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    createValidator(value: _85.MsgCreateValidator): {
                        typeUrl: string;
                        value: _85.MsgCreateValidator;
                    };
                    editValidator(value: _85.MsgEditValidator): {
                        typeUrl: string;
                        value: _85.MsgEditValidator;
                    };
                    delegate(value: _85.MsgDelegate): {
                        typeUrl: string;
                        value: _85.MsgDelegate;
                    };
                    beginRedelegate(value: _85.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _85.MsgBeginRedelegate;
                    };
                    undelegate(value: _85.MsgUndelegate): {
                        typeUrl: string;
                        value: _85.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: _85.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: _85.MsgCancelUnbondingDelegation;
                    };
                    updateParams(value: _85.MsgUpdateParams): {
                        typeUrl: string;
                        value: _85.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: ({ description, commission, minSelfDelegation, delegatorAddress, validatorAddress, pubkey, value }: _85.MsgCreateValidator) => {
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
                    }) => _85.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: ({ description, validatorAddress, commissionRate, minSelfDelegation }: _85.MsgEditValidator) => {
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
                    }) => _85.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount }: _85.MsgDelegate) => {
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
                    }) => _85.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorSrcAddress, validatorDstAddress, amount }: _85.MsgBeginRedelegate) => {
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
                    }) => _85.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount }: _85.MsgUndelegate) => {
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
                    }) => _85.MsgUndelegate;
                };
                "/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount, creationHeight }: _85.MsgCancelUnbondingDelegation) => {
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
                    }) => _85.MsgCancelUnbondingDelegation;
                };
                "/cosmos.staking.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: ({ authority, params }: _85.MsgUpdateParams) => {
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
                    }) => _85.MsgUpdateParams;
                };
            };
            MsgCreateValidator: {
                encode(message: _85.MsgCreateValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _85.MsgCreateValidator;
                fromJSON(object: any): _85.MsgCreateValidator;
                toJSON(message: _85.MsgCreateValidator): unknown;
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
                }): _85.MsgCreateValidator;
            };
            MsgCreateValidatorResponse: {
                encode(_: _85.MsgCreateValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _85.MsgCreateValidatorResponse;
                fromJSON(_: any): _85.MsgCreateValidatorResponse;
                toJSON(_: _85.MsgCreateValidatorResponse): unknown;
                fromPartial(_: {}): _85.MsgCreateValidatorResponse;
            };
            MsgEditValidator: {
                encode(message: _85.MsgEditValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _85.MsgEditValidator;
                fromJSON(object: any): _85.MsgEditValidator;
                toJSON(message: _85.MsgEditValidator): unknown;
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
                }): _85.MsgEditValidator;
            };
            MsgEditValidatorResponse: {
                encode(_: _85.MsgEditValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _85.MsgEditValidatorResponse;
                fromJSON(_: any): _85.MsgEditValidatorResponse;
                toJSON(_: _85.MsgEditValidatorResponse): unknown;
                fromPartial(_: {}): _85.MsgEditValidatorResponse;
            };
            MsgDelegate: {
                encode(message: _85.MsgDelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _85.MsgDelegate;
                fromJSON(object: any): _85.MsgDelegate;
                toJSON(message: _85.MsgDelegate): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _85.MsgDelegate;
            };
            MsgDelegateResponse: {
                encode(_: _85.MsgDelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _85.MsgDelegateResponse;
                fromJSON(_: any): _85.MsgDelegateResponse;
                toJSON(_: _85.MsgDelegateResponse): unknown;
                fromPartial(_: {}): _85.MsgDelegateResponse;
            };
            MsgBeginRedelegate: {
                encode(message: _85.MsgBeginRedelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _85.MsgBeginRedelegate;
                fromJSON(object: any): _85.MsgBeginRedelegate;
                toJSON(message: _85.MsgBeginRedelegate): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorSrcAddress?: string;
                    validatorDstAddress?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _85.MsgBeginRedelegate;
            };
            MsgBeginRedelegateResponse: {
                encode(message: _85.MsgBeginRedelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _85.MsgBeginRedelegateResponse;
                fromJSON(object: any): _85.MsgBeginRedelegateResponse;
                toJSON(message: _85.MsgBeginRedelegateResponse): unknown;
                fromPartial(object: {
                    completionTime?: {
                        seconds?: bigint;
                        nanos?: number;
                    };
                }): _85.MsgBeginRedelegateResponse;
            };
            MsgUndelegate: {
                encode(message: _85.MsgUndelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _85.MsgUndelegate;
                fromJSON(object: any): _85.MsgUndelegate;
                toJSON(message: _85.MsgUndelegate): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _85.MsgUndelegate;
            };
            MsgUndelegateResponse: {
                encode(message: _85.MsgUndelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _85.MsgUndelegateResponse;
                fromJSON(object: any): _85.MsgUndelegateResponse;
                toJSON(message: _85.MsgUndelegateResponse): unknown;
                fromPartial(object: {
                    completionTime?: {
                        seconds?: bigint;
                        nanos?: number;
                    };
                }): _85.MsgUndelegateResponse;
            };
            MsgCancelUnbondingDelegation: {
                encode(message: _85.MsgCancelUnbondingDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _85.MsgCancelUnbondingDelegation;
                fromJSON(object: any): _85.MsgCancelUnbondingDelegation;
                toJSON(message: _85.MsgCancelUnbondingDelegation): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                    creationHeight?: bigint;
                }): _85.MsgCancelUnbondingDelegation;
            };
            MsgCancelUnbondingDelegationResponse: {
                encode(_: _85.MsgCancelUnbondingDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _85.MsgCancelUnbondingDelegationResponse;
                fromJSON(_: any): _85.MsgCancelUnbondingDelegationResponse;
                toJSON(_: _85.MsgCancelUnbondingDelegationResponse): unknown;
                fromPartial(_: {}): _85.MsgCancelUnbondingDelegationResponse;
            };
            MsgUpdateParams: {
                encode(message: _85.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _85.MsgUpdateParams;
                fromJSON(object: any): _85.MsgUpdateParams;
                toJSON(message: _85.MsgUpdateParams): unknown;
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
                }): _85.MsgUpdateParams;
            };
            MsgUpdateParamsResponse: {
                encode(_: _85.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _85.MsgUpdateParamsResponse;
                fromJSON(_: any): _85.MsgUpdateParamsResponse;
                toJSON(_: _85.MsgUpdateParamsResponse): unknown;
                fromPartial(_: {}): _85.MsgUpdateParamsResponse;
            };
            Cosmos_cryptoPubKey_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            bondStatusFromJSON(object: any): _84.BondStatus;
            bondStatusToJSON(object: _84.BondStatus): string;
            infractionFromJSON(object: any): _84.Infraction;
            infractionToJSON(object: _84.Infraction): string;
            BondStatus: typeof _84.BondStatus;
            Infraction: typeof _84.Infraction;
            HistoricalInfo: {
                encode(message: _84.HistoricalInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _84.HistoricalInfo;
                fromJSON(object: any): _84.HistoricalInfo;
                toJSON(message: _84.HistoricalInfo): unknown;
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
                        status?: _84.BondStatus;
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
                }): _84.HistoricalInfo;
            };
            CommissionRates: {
                encode(message: _84.CommissionRates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _84.CommissionRates;
                fromJSON(object: any): _84.CommissionRates;
                toJSON(message: _84.CommissionRates): unknown;
                fromPartial(object: {
                    rate?: string;
                    maxRate?: string;
                    maxChangeRate?: string;
                }): _84.CommissionRates;
            };
            Commission: {
                encode(message: _84.Commission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _84.Commission;
                fromJSON(object: any): _84.Commission;
                toJSON(message: _84.Commission): unknown;
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
                }): _84.Commission;
            };
            Description: {
                encode(message: _84.Description, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _84.Description;
                fromJSON(object: any): _84.Description;
                toJSON(message: _84.Description): unknown;
                fromPartial(object: {
                    moniker?: string;
                    identity?: string;
                    website?: string;
                    securityContact?: string;
                    details?: string;
                }): _84.Description;
            };
            Validator: {
                encode(message: _84.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _84.Validator;
                fromJSON(object: any): _84.Validator;
                toJSON(message: _84.Validator): unknown;
                fromPartial(object: {
                    operatorAddress?: string;
                    consensusPubkey?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    jailed?: boolean;
                    status?: _84.BondStatus;
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
                }): _84.Validator;
            };
            ValAddresses: {
                encode(message: _84.ValAddresses, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _84.ValAddresses;
                fromJSON(object: any): _84.ValAddresses;
                toJSON(message: _84.ValAddresses): unknown;
                fromPartial(object: {
                    addresses?: string[];
                }): _84.ValAddresses;
            };
            DVPair: {
                encode(message: _84.DVPair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _84.DVPair;
                fromJSON(object: any): _84.DVPair;
                toJSON(message: _84.DVPair): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                }): _84.DVPair;
            };
            DVPairs: {
                encode(message: _84.DVPairs, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _84.DVPairs;
                fromJSON(object: any): _84.DVPairs;
                toJSON(message: _84.DVPairs): unknown;
                fromPartial(object: {
                    pairs?: {
                        delegatorAddress?: string;
                        validatorAddress?: string;
                    }[];
                }): _84.DVPairs;
            };
            DVVTriplet: {
                encode(message: _84.DVVTriplet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _84.DVVTriplet;
                fromJSON(object: any): _84.DVVTriplet;
                toJSON(message: _84.DVVTriplet): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorSrcAddress?: string;
                    validatorDstAddress?: string;
                }): _84.DVVTriplet;
            };
            DVVTriplets: {
                encode(message: _84.DVVTriplets, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _84.DVVTriplets;
                fromJSON(object: any): _84.DVVTriplets;
                toJSON(message: _84.DVVTriplets): unknown;
                fromPartial(object: {
                    triplets?: {
                        delegatorAddress?: string;
                        validatorSrcAddress?: string;
                        validatorDstAddress?: string;
                    }[];
                }): _84.DVVTriplets;
            };
            Delegation: {
                encode(message: _84.Delegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _84.Delegation;
                fromJSON(object: any): _84.Delegation;
                toJSON(message: _84.Delegation): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                    shares?: string;
                }): _84.Delegation;
            };
            UnbondingDelegation: {
                encode(message: _84.UnbondingDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _84.UnbondingDelegation;
                fromJSON(object: any): _84.UnbondingDelegation;
                toJSON(message: _84.UnbondingDelegation): unknown;
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
                }): _84.UnbondingDelegation;
            };
            UnbondingDelegationEntry: {
                encode(message: _84.UnbondingDelegationEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _84.UnbondingDelegationEntry;
                fromJSON(object: any): _84.UnbondingDelegationEntry;
                toJSON(message: _84.UnbondingDelegationEntry): unknown;
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
                }): _84.UnbondingDelegationEntry;
            };
            RedelegationEntry: {
                encode(message: _84.RedelegationEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _84.RedelegationEntry;
                fromJSON(object: any): _84.RedelegationEntry;
                toJSON(message: _84.RedelegationEntry): unknown;
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
                }): _84.RedelegationEntry;
            };
            Redelegation: {
                encode(message: _84.Redelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _84.Redelegation;
                fromJSON(object: any): _84.Redelegation;
                toJSON(message: _84.Redelegation): unknown;
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
                }): _84.Redelegation;
            };
            Params: {
                encode(message: _84.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _84.Params;
                fromJSON(object: any): _84.Params;
                toJSON(message: _84.Params): unknown;
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
                }): _84.Params;
            };
            DelegationResponse: {
                encode(message: _84.DelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _84.DelegationResponse;
                fromJSON(object: any): _84.DelegationResponse;
                toJSON(message: _84.DelegationResponse): unknown;
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
                }): _84.DelegationResponse;
            };
            RedelegationEntryResponse: {
                encode(message: _84.RedelegationEntryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _84.RedelegationEntryResponse;
                fromJSON(object: any): _84.RedelegationEntryResponse;
                toJSON(message: _84.RedelegationEntryResponse): unknown;
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
                }): _84.RedelegationEntryResponse;
            };
            RedelegationResponse: {
                encode(message: _84.RedelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _84.RedelegationResponse;
                fromJSON(object: any): _84.RedelegationResponse;
                toJSON(message: _84.RedelegationResponse): unknown;
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
                }): _84.RedelegationResponse;
            };
            Pool: {
                encode(message: _84.Pool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _84.Pool;
                fromJSON(object: any): _84.Pool;
                toJSON(message: _84.Pool): unknown;
                fromPartial(object: {
                    notBondedTokens?: string;
                    bondedTokens?: string;
                }): _84.Pool;
            };
            ValidatorUpdates: {
                encode(message: _84.ValidatorUpdates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _84.ValidatorUpdates;
                fromJSON(object: any): _84.ValidatorUpdates;
                toJSON(message: _84.ValidatorUpdates): unknown;
                fromPartial(object: {
                    updates?: {
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        power?: bigint;
                    }[];
                }): _84.ValidatorUpdates;
            };
            QueryValidatorsRequest: {
                encode(message: _83.QueryValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _83.QueryValidatorsRequest;
                fromJSON(object: any): _83.QueryValidatorsRequest;
                toJSON(message: _83.QueryValidatorsRequest): unknown;
                fromPartial(object: {
                    status?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: bigint;
                        limit?: bigint;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _83.QueryValidatorsRequest;
            };
            QueryValidatorsResponse: {
                encode(message: _83.QueryValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _83.QueryValidatorsResponse;
                fromJSON(object: any): _83.QueryValidatorsResponse;
                toJSON(message: _83.QueryValidatorsResponse): unknown;
                fromPartial(object: {
                    validators?: {
                        operatorAddress?: string;
                        consensusPubkey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        jailed?: boolean;
                        status?: _84.BondStatus;
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
                }): _83.QueryValidatorsResponse;
            };
            QueryValidatorRequest: {
                encode(message: _83.QueryValidatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _83.QueryValidatorRequest;
                fromJSON(object: any): _83.QueryValidatorRequest;
                toJSON(message: _83.QueryValidatorRequest): unknown;
                fromPartial(object: {
                    validatorAddr?: string;
                }): _83.QueryValidatorRequest;
            };
            QueryValidatorResponse: {
                encode(message: _83.QueryValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _83.QueryValidatorResponse;
                fromJSON(object: any): _83.QueryValidatorResponse;
                toJSON(message: _83.QueryValidatorResponse): unknown;
                fromPartial(object: {
                    validator?: {
                        operatorAddress?: string;
                        consensusPubkey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        jailed?: boolean;
                        status?: _84.BondStatus;
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
                }): _83.QueryValidatorResponse;
            };
            QueryValidatorDelegationsRequest: {
                encode(message: _83.QueryValidatorDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _83.QueryValidatorDelegationsRequest;
                fromJSON(object: any): _83.QueryValidatorDelegationsRequest;
                toJSON(message: _83.QueryValidatorDelegationsRequest): unknown;
                fromPartial(object: {
                    validatorAddr?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: bigint;
                        limit?: bigint;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _83.QueryValidatorDelegationsRequest;
            };
            QueryValidatorDelegationsResponse: {
                encode(message: _83.QueryValidatorDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _83.QueryValidatorDelegationsResponse;
                fromJSON(object: any): _83.QueryValidatorDelegationsResponse;
                toJSON(message: _83.QueryValidatorDelegationsResponse): unknown;
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
                }): _83.QueryValidatorDelegationsResponse;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                encode(message: _83.QueryValidatorUnbondingDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _83.QueryValidatorUnbondingDelegationsRequest;
                fromJSON(object: any): _83.QueryValidatorUnbondingDelegationsRequest;
                toJSON(message: _83.QueryValidatorUnbondingDelegationsRequest): unknown;
                fromPartial(object: {
                    validatorAddr?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: bigint;
                        limit?: bigint;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _83.QueryValidatorUnbondingDelegationsRequest;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                encode(message: _83.QueryValidatorUnbondingDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _83.QueryValidatorUnbondingDelegationsResponse;
                fromJSON(object: any): _83.QueryValidatorUnbondingDelegationsResponse;
                toJSON(message: _83.QueryValidatorUnbondingDelegationsResponse): unknown;
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
                }): _83.QueryValidatorUnbondingDelegationsResponse;
            };
            QueryDelegationRequest: {
                encode(message: _83.QueryDelegationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _83.QueryDelegationRequest;
                fromJSON(object: any): _83.QueryDelegationRequest;
                toJSON(message: _83.QueryDelegationRequest): unknown;
                fromPartial(object: {
                    delegatorAddr?: string;
                    validatorAddr?: string;
                }): _83.QueryDelegationRequest;
            };
            QueryDelegationResponse: {
                encode(message: _83.QueryDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _83.QueryDelegationResponse;
                fromJSON(object: any): _83.QueryDelegationResponse;
                toJSON(message: _83.QueryDelegationResponse): unknown;
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
                }): _83.QueryDelegationResponse;
            };
            QueryUnbondingDelegationRequest: {
                encode(message: _83.QueryUnbondingDelegationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _83.QueryUnbondingDelegationRequest;
                fromJSON(object: any): _83.QueryUnbondingDelegationRequest;
                toJSON(message: _83.QueryUnbondingDelegationRequest): unknown;
                fromPartial(object: {
                    delegatorAddr?: string;
                    validatorAddr?: string;
                }): _83.QueryUnbondingDelegationRequest;
            };
            QueryUnbondingDelegationResponse: {
                encode(message: _83.QueryUnbondingDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _83.QueryUnbondingDelegationResponse;
                fromJSON(object: any): _83.QueryUnbondingDelegationResponse;
                toJSON(message: _83.QueryUnbondingDelegationResponse): unknown;
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
                }): _83.QueryUnbondingDelegationResponse;
            };
            QueryDelegatorDelegationsRequest: {
                encode(message: _83.QueryDelegatorDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _83.QueryDelegatorDelegationsRequest;
                fromJSON(object: any): _83.QueryDelegatorDelegationsRequest;
                toJSON(message: _83.QueryDelegatorDelegationsRequest): unknown;
                fromPartial(object: {
                    delegatorAddr?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: bigint;
                        limit?: bigint;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _83.QueryDelegatorDelegationsRequest;
            };
            QueryDelegatorDelegationsResponse: {
                encode(message: _83.QueryDelegatorDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _83.QueryDelegatorDelegationsResponse;
                fromJSON(object: any): _83.QueryDelegatorDelegationsResponse;
                toJSON(message: _83.QueryDelegatorDelegationsResponse): unknown;
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
                }): _83.QueryDelegatorDelegationsResponse;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                encode(message: _83.QueryDelegatorUnbondingDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _83.QueryDelegatorUnbondingDelegationsRequest;
                fromJSON(object: any): _83.QueryDelegatorUnbondingDelegationsRequest;
                toJSON(message: _83.QueryDelegatorUnbondingDelegationsRequest): unknown;
                fromPartial(object: {
                    delegatorAddr?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: bigint;
                        limit?: bigint;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _83.QueryDelegatorUnbondingDelegationsRequest;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                encode(message: _83.QueryDelegatorUnbondingDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _83.QueryDelegatorUnbondingDelegationsResponse;
                fromJSON(object: any): _83.QueryDelegatorUnbondingDelegationsResponse;
                toJSON(message: _83.QueryDelegatorUnbondingDelegationsResponse): unknown;
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
                }): _83.QueryDelegatorUnbondingDelegationsResponse;
            };
            QueryRedelegationsRequest: {
                encode(message: _83.QueryRedelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _83.QueryRedelegationsRequest;
                fromJSON(object: any): _83.QueryRedelegationsRequest;
                toJSON(message: _83.QueryRedelegationsRequest): unknown;
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
                }): _83.QueryRedelegationsRequest;
            };
            QueryRedelegationsResponse: {
                encode(message: _83.QueryRedelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _83.QueryRedelegationsResponse;
                fromJSON(object: any): _83.QueryRedelegationsResponse;
                toJSON(message: _83.QueryRedelegationsResponse): unknown;
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
                }): _83.QueryRedelegationsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _83.QueryDelegatorValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _83.QueryDelegatorValidatorsRequest;
                fromJSON(object: any): _83.QueryDelegatorValidatorsRequest;
                toJSON(message: _83.QueryDelegatorValidatorsRequest): unknown;
                fromPartial(object: {
                    delegatorAddr?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: bigint;
                        limit?: bigint;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _83.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _83.QueryDelegatorValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _83.QueryDelegatorValidatorsResponse;
                fromJSON(object: any): _83.QueryDelegatorValidatorsResponse;
                toJSON(message: _83.QueryDelegatorValidatorsResponse): unknown;
                fromPartial(object: {
                    validators?: {
                        operatorAddress?: string;
                        consensusPubkey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        jailed?: boolean;
                        status?: _84.BondStatus;
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
                }): _83.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorValidatorRequest: {
                encode(message: _83.QueryDelegatorValidatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _83.QueryDelegatorValidatorRequest;
                fromJSON(object: any): _83.QueryDelegatorValidatorRequest;
                toJSON(message: _83.QueryDelegatorValidatorRequest): unknown;
                fromPartial(object: {
                    delegatorAddr?: string;
                    validatorAddr?: string;
                }): _83.QueryDelegatorValidatorRequest;
            };
            QueryDelegatorValidatorResponse: {
                encode(message: _83.QueryDelegatorValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _83.QueryDelegatorValidatorResponse;
                fromJSON(object: any): _83.QueryDelegatorValidatorResponse;
                toJSON(message: _83.QueryDelegatorValidatorResponse): unknown;
                fromPartial(object: {
                    validator?: {
                        operatorAddress?: string;
                        consensusPubkey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        jailed?: boolean;
                        status?: _84.BondStatus;
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
                }): _83.QueryDelegatorValidatorResponse;
            };
            QueryHistoricalInfoRequest: {
                encode(message: _83.QueryHistoricalInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _83.QueryHistoricalInfoRequest;
                fromJSON(object: any): _83.QueryHistoricalInfoRequest;
                toJSON(message: _83.QueryHistoricalInfoRequest): unknown;
                fromPartial(object: {
                    height?: bigint;
                }): _83.QueryHistoricalInfoRequest;
            };
            QueryHistoricalInfoResponse: {
                encode(message: _83.QueryHistoricalInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _83.QueryHistoricalInfoResponse;
                fromJSON(object: any): _83.QueryHistoricalInfoResponse;
                toJSON(message: _83.QueryHistoricalInfoResponse): unknown;
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
                            status?: _84.BondStatus;
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
                }): _83.QueryHistoricalInfoResponse;
            };
            QueryPoolRequest: {
                encode(_: _83.QueryPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _83.QueryPoolRequest;
                fromJSON(_: any): _83.QueryPoolRequest;
                toJSON(_: _83.QueryPoolRequest): unknown;
                fromPartial(_: {}): _83.QueryPoolRequest;
            };
            QueryPoolResponse: {
                encode(message: _83.QueryPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _83.QueryPoolResponse;
                fromJSON(object: any): _83.QueryPoolResponse;
                toJSON(message: _83.QueryPoolResponse): unknown;
                fromPartial(object: {
                    pool?: {
                        notBondedTokens?: string;
                        bondedTokens?: string;
                    };
                }): _83.QueryPoolResponse;
            };
            QueryParamsRequest: {
                encode(_: _83.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _83.QueryParamsRequest;
                fromJSON(_: any): _83.QueryParamsRequest;
                toJSON(_: _83.QueryParamsRequest): unknown;
                fromPartial(_: {}): _83.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _83.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _83.QueryParamsResponse;
                fromJSON(object: any): _83.QueryParamsResponse;
                toJSON(message: _83.QueryParamsResponse): unknown;
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
                }): _83.QueryParamsResponse;
            };
            GenesisState: {
                encode(message: _82.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _82.GenesisState;
                fromJSON(object: any): _82.GenesisState;
                toJSON(message: _82.GenesisState): unknown;
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
                        status?: _84.BondStatus;
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
                }): _82.GenesisState;
            };
            LastValidatorPower: {
                encode(message: _82.LastValidatorPower, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _82.LastValidatorPower;
                fromJSON(object: any): _82.LastValidatorPower;
                toJSON(message: _82.LastValidatorPower): unknown;
                fromPartial(object: {
                    address?: string;
                    power?: bigint;
                }): _82.LastValidatorPower;
            };
            authorizationTypeFromJSON(object: any): _81.AuthorizationType;
            authorizationTypeToJSON(object: _81.AuthorizationType): string;
            AuthorizationType: typeof _81.AuthorizationType;
            StakeAuthorization: {
                encode(message: _81.StakeAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _81.StakeAuthorization;
                fromJSON(object: any): _81.StakeAuthorization;
                toJSON(message: _81.StakeAuthorization): unknown;
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
                    authorizationType?: _81.AuthorizationType;
                }): _81.StakeAuthorization;
            };
            StakeAuthorization_Validators: {
                encode(message: _81.StakeAuthorization_Validators, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _81.StakeAuthorization_Validators;
                fromJSON(object: any): _81.StakeAuthorization_Validators;
                toJSON(message: _81.StakeAuthorization_Validators): unknown;
                fromPartial(object: {
                    address?: string[];
                }): _81.StakeAuthorization_Validators;
            };
        };
    }
    namespace tx {
        namespace config {
            const v1: {
                Config: {
                    encode(message: _86.Config, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _86.Config;
                    fromJSON(object: any): _86.Config;
                    toJSON(message: _86.Config): unknown;
                    fromPartial(object: {
                        skipAnteHandler?: boolean;
                        skipPostHandler?: boolean;
                    }): _86.Config;
                };
            };
        }
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _87.SignMode;
                signModeToJSON(object: _87.SignMode): string;
                SignMode: typeof _87.SignMode;
                SignatureDescriptors: {
                    encode(message: _87.SignatureDescriptors, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _87.SignatureDescriptors;
                    fromJSON(object: any): _87.SignatureDescriptors;
                    toJSON(message: _87.SignatureDescriptors): unknown;
                    fromPartial(object: {
                        signatures?: {
                            publicKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            data?: {
                                single?: {
                                    mode?: _87.SignMode;
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
                    }): _87.SignatureDescriptors;
                };
                SignatureDescriptor: {
                    encode(message: _87.SignatureDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _87.SignatureDescriptor;
                    fromJSON(object: any): _87.SignatureDescriptor;
                    toJSON(message: _87.SignatureDescriptor): unknown;
                    fromPartial(object: {
                        publicKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        data?: {
                            single?: {
                                mode?: _87.SignMode;
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
                    }): _87.SignatureDescriptor;
                };
                SignatureDescriptor_Data: {
                    encode(message: _87.SignatureDescriptor_Data, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _87.SignatureDescriptor_Data;
                    fromJSON(object: any): _87.SignatureDescriptor_Data;
                    toJSON(message: _87.SignatureDescriptor_Data): unknown;
                    fromPartial(object: {
                        single?: {
                            mode?: _87.SignMode;
                            signature?: Uint8Array;
                        };
                        multi?: {
                            bitarray?: {
                                extraBitsStored?: number;
                                elems?: Uint8Array;
                            };
                            signatures?: any[];
                        };
                    }): _87.SignatureDescriptor_Data;
                };
                SignatureDescriptor_Data_Single: {
                    encode(message: _87.SignatureDescriptor_Data_Single, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _87.SignatureDescriptor_Data_Single;
                    fromJSON(object: any): _87.SignatureDescriptor_Data_Single;
                    toJSON(message: _87.SignatureDescriptor_Data_Single): unknown;
                    fromPartial(object: {
                        mode?: _87.SignMode;
                        signature?: Uint8Array;
                    }): _87.SignatureDescriptor_Data_Single;
                };
                SignatureDescriptor_Data_Multi: {
                    encode(message: _87.SignatureDescriptor_Data_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _87.SignatureDescriptor_Data_Multi;
                    fromJSON(object: any): _87.SignatureDescriptor_Data_Multi;
                    toJSON(message: _87.SignatureDescriptor_Data_Multi): unknown;
                    fromPartial(object: {
                        bitarray?: {
                            extraBitsStored?: number;
                            elems?: Uint8Array;
                        };
                        signatures?: {
                            single?: {
                                mode?: _87.SignMode;
                                signature?: Uint8Array;
                            };
                            multi?: any;
                        }[];
                    }): _87.SignatureDescriptor_Data_Multi;
                };
            };
        }
        const v1beta1: {
            ServiceClientImpl: typeof _198.ServiceClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                simulate(request: _88.SimulateRequest): Promise<_88.SimulateResponse>;
                getTx(request: _88.GetTxRequest): Promise<_88.GetTxResponse>;
                broadcastTx(request: _88.BroadcastTxRequest): Promise<_88.BroadcastTxResponse>;
                getTxsEvent(request: _88.GetTxsEventRequest): Promise<_88.GetTxsEventResponse>;
                getBlockWithTxs(request: _88.GetBlockWithTxsRequest): Promise<_88.GetBlockWithTxsResponse>;
                txDecode(request: _88.TxDecodeRequest): Promise<_88.TxDecodeResponse>;
                txEncode(request: _88.TxEncodeRequest): Promise<_88.TxEncodeResponse>;
                txEncodeAmino(request: _88.TxEncodeAminoRequest): Promise<_88.TxEncodeAminoResponse>;
                txDecodeAmino(request: _88.TxDecodeAminoRequest): Promise<_88.TxDecodeAminoResponse>;
            };
            LCDQueryClient: typeof _184.LCDQueryClient;
            Tx: {
                encode(message: _89.Tx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _89.Tx;
                fromJSON(object: any): _89.Tx;
                toJSON(message: _89.Tx): unknown;
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
                                    mode?: _87.SignMode;
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
                }): _89.Tx;
            };
            TxRaw: {
                encode(message: _89.TxRaw, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _89.TxRaw;
                fromJSON(object: any): _89.TxRaw;
                toJSON(message: _89.TxRaw): unknown;
                fromPartial(object: {
                    bodyBytes?: Uint8Array;
                    authInfoBytes?: Uint8Array;
                    signatures?: Uint8Array[];
                }): _89.TxRaw;
            };
            SignDoc: {
                encode(message: _89.SignDoc, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _89.SignDoc;
                fromJSON(object: any): _89.SignDoc;
                toJSON(message: _89.SignDoc): unknown;
                fromPartial(object: {
                    bodyBytes?: Uint8Array;
                    authInfoBytes?: Uint8Array;
                    chainId?: string;
                    accountNumber?: bigint;
                }): _89.SignDoc;
            };
            SignDocDirectAux: {
                encode(message: _89.SignDocDirectAux, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _89.SignDocDirectAux;
                fromJSON(object: any): _89.SignDocDirectAux;
                toJSON(message: _89.SignDocDirectAux): unknown;
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
                }): _89.SignDocDirectAux;
            };
            TxBody: {
                encode(message: _89.TxBody, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _89.TxBody;
                fromJSON(object: any): _89.TxBody;
                toJSON(message: _89.TxBody): unknown;
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
                }): _89.TxBody;
            };
            AuthInfo: {
                encode(message: _89.AuthInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _89.AuthInfo;
                fromJSON(object: any): _89.AuthInfo;
                toJSON(message: _89.AuthInfo): unknown;
                fromPartial(object: {
                    signerInfos?: {
                        publicKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        modeInfo?: {
                            single?: {
                                mode?: _87.SignMode;
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
                }): _89.AuthInfo;
            };
            SignerInfo: {
                encode(message: _89.SignerInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _89.SignerInfo;
                fromJSON(object: any): _89.SignerInfo;
                toJSON(message: _89.SignerInfo): unknown;
                fromPartial(object: {
                    publicKey?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    modeInfo?: {
                        single?: {
                            mode?: _87.SignMode;
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
                }): _89.SignerInfo;
            };
            ModeInfo: {
                encode(message: _89.ModeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _89.ModeInfo;
                fromJSON(object: any): _89.ModeInfo;
                toJSON(message: _89.ModeInfo): unknown;
                fromPartial(object: {
                    single?: {
                        mode?: _87.SignMode;
                    };
                    multi?: {
                        bitarray?: {
                            extraBitsStored?: number;
                            elems?: Uint8Array;
                        };
                        modeInfos?: any[];
                    };
                }): _89.ModeInfo;
            };
            ModeInfo_Single: {
                encode(message: _89.ModeInfo_Single, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _89.ModeInfo_Single;
                fromJSON(object: any): _89.ModeInfo_Single;
                toJSON(message: _89.ModeInfo_Single): unknown;
                fromPartial(object: {
                    mode?: _87.SignMode;
                }): _89.ModeInfo_Single;
            };
            ModeInfo_Multi: {
                encode(message: _89.ModeInfo_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _89.ModeInfo_Multi;
                fromJSON(object: any): _89.ModeInfo_Multi;
                toJSON(message: _89.ModeInfo_Multi): unknown;
                fromPartial(object: {
                    bitarray?: {
                        extraBitsStored?: number;
                        elems?: Uint8Array;
                    };
                    modeInfos?: {
                        single?: {
                            mode?: _87.SignMode;
                        };
                        multi?: any;
                    }[];
                }): _89.ModeInfo_Multi;
            };
            Fee: {
                encode(message: _89.Fee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _89.Fee;
                fromJSON(object: any): _89.Fee;
                toJSON(message: _89.Fee): unknown;
                fromPartial(object: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    gasLimit?: bigint;
                    payer?: string;
                    granter?: string;
                }): _89.Fee;
            };
            Tip: {
                encode(message: _89.Tip, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _89.Tip;
                fromJSON(object: any): _89.Tip;
                toJSON(message: _89.Tip): unknown;
                fromPartial(object: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    tipper?: string;
                }): _89.Tip;
            };
            AuxSignerData: {
                encode(message: _89.AuxSignerData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _89.AuxSignerData;
                fromJSON(object: any): _89.AuxSignerData;
                toJSON(message: _89.AuxSignerData): unknown;
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
                    mode?: _87.SignMode;
                    sig?: Uint8Array;
                }): _89.AuxSignerData;
            };
            orderByFromJSON(object: any): _88.OrderBy;
            orderByToJSON(object: _88.OrderBy): string;
            broadcastModeFromJSON(object: any): _88.BroadcastMode;
            broadcastModeToJSON(object: _88.BroadcastMode): string;
            OrderBy: typeof _88.OrderBy;
            BroadcastMode: typeof _88.BroadcastMode;
            GetTxsEventRequest: {
                encode(message: _88.GetTxsEventRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _88.GetTxsEventRequest;
                fromJSON(object: any): _88.GetTxsEventRequest;
                toJSON(message: _88.GetTxsEventRequest): unknown;
                fromPartial(object: {
                    events?: string[];
                    pagination?: {
                        key?: Uint8Array;
                        offset?: bigint;
                        limit?: bigint;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                    orderBy?: _88.OrderBy;
                    page?: bigint;
                    limit?: bigint;
                }): _88.GetTxsEventRequest;
            };
            GetTxsEventResponse: {
                encode(message: _88.GetTxsEventResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _88.GetTxsEventResponse;
                fromJSON(object: any): _88.GetTxsEventResponse;
                toJSON(message: _88.GetTxsEventResponse): unknown;
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
                                        mode?: _87.SignMode;
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
                }): _88.GetTxsEventResponse;
            };
            BroadcastTxRequest: {
                encode(message: _88.BroadcastTxRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _88.BroadcastTxRequest;
                fromJSON(object: any): _88.BroadcastTxRequest;
                toJSON(message: _88.BroadcastTxRequest): unknown;
                fromPartial(object: {
                    txBytes?: Uint8Array;
                    mode?: _88.BroadcastMode;
                }): _88.BroadcastTxRequest;
            };
            BroadcastTxResponse: {
                encode(message: _88.BroadcastTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _88.BroadcastTxResponse;
                fromJSON(object: any): _88.BroadcastTxResponse;
                toJSON(message: _88.BroadcastTxResponse): unknown;
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
                }): _88.BroadcastTxResponse;
            };
            SimulateRequest: {
                encode(message: _88.SimulateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _88.SimulateRequest;
                fromJSON(object: any): _88.SimulateRequest;
                toJSON(message: _88.SimulateRequest): unknown;
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
                                        mode?: _87.SignMode;
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
                }): _88.SimulateRequest;
            };
            SimulateResponse: {
                encode(message: _88.SimulateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _88.SimulateResponse;
                fromJSON(object: any): _88.SimulateResponse;
                toJSON(message: _88.SimulateResponse): unknown;
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
                }): _88.SimulateResponse;
            };
            GetTxRequest: {
                encode(message: _88.GetTxRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _88.GetTxRequest;
                fromJSON(object: any): _88.GetTxRequest;
                toJSON(message: _88.GetTxRequest): unknown;
                fromPartial(object: {
                    hash?: string;
                }): _88.GetTxRequest;
            };
            GetTxResponse: {
                encode(message: _88.GetTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _88.GetTxResponse;
                fromJSON(object: any): _88.GetTxResponse;
                toJSON(message: _88.GetTxResponse): unknown;
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
                                        mode?: _87.SignMode;
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
                }): _88.GetTxResponse;
            };
            GetBlockWithTxsRequest: {
                encode(message: _88.GetBlockWithTxsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _88.GetBlockWithTxsRequest;
                fromJSON(object: any): _88.GetBlockWithTxsRequest;
                toJSON(message: _88.GetBlockWithTxsRequest): unknown;
                fromPartial(object: {
                    height?: bigint;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: bigint;
                        limit?: bigint;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _88.GetBlockWithTxsRequest;
            };
            GetBlockWithTxsResponse: {
                encode(message: _88.GetBlockWithTxsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _88.GetBlockWithTxsResponse;
                fromJSON(object: any): _88.GetBlockWithTxsResponse;
                toJSON(message: _88.GetBlockWithTxsResponse): unknown;
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
                                        mode?: _87.SignMode;
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
                }): _88.GetBlockWithTxsResponse;
            };
            TxDecodeRequest: {
                encode(message: _88.TxDecodeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _88.TxDecodeRequest;
                fromJSON(object: any): _88.TxDecodeRequest;
                toJSON(message: _88.TxDecodeRequest): unknown;
                fromPartial(object: {
                    txBytes?: Uint8Array;
                }): _88.TxDecodeRequest;
            };
            TxDecodeResponse: {
                encode(message: _88.TxDecodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _88.TxDecodeResponse;
                fromJSON(object: any): _88.TxDecodeResponse;
                toJSON(message: _88.TxDecodeResponse): unknown;
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
                                        mode?: _87.SignMode;
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
                }): _88.TxDecodeResponse;
            };
            TxEncodeRequest: {
                encode(message: _88.TxEncodeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _88.TxEncodeRequest;
                fromJSON(object: any): _88.TxEncodeRequest;
                toJSON(message: _88.TxEncodeRequest): unknown;
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
                                        mode?: _87.SignMode;
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
                }): _88.TxEncodeRequest;
            };
            TxEncodeResponse: {
                encode(message: _88.TxEncodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _88.TxEncodeResponse;
                fromJSON(object: any): _88.TxEncodeResponse;
                toJSON(message: _88.TxEncodeResponse): unknown;
                fromPartial(object: {
                    txBytes?: Uint8Array;
                }): _88.TxEncodeResponse;
            };
            TxEncodeAminoRequest: {
                encode(message: _88.TxEncodeAminoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _88.TxEncodeAminoRequest;
                fromJSON(object: any): _88.TxEncodeAminoRequest;
                toJSON(message: _88.TxEncodeAminoRequest): unknown;
                fromPartial(object: {
                    aminoJson?: string;
                }): _88.TxEncodeAminoRequest;
            };
            TxEncodeAminoResponse: {
                encode(message: _88.TxEncodeAminoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _88.TxEncodeAminoResponse;
                fromJSON(object: any): _88.TxEncodeAminoResponse;
                toJSON(message: _88.TxEncodeAminoResponse): unknown;
                fromPartial(object: {
                    aminoBinary?: Uint8Array;
                }): _88.TxEncodeAminoResponse;
            };
            TxDecodeAminoRequest: {
                encode(message: _88.TxDecodeAminoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _88.TxDecodeAminoRequest;
                fromJSON(object: any): _88.TxDecodeAminoRequest;
                toJSON(message: _88.TxDecodeAminoRequest): unknown;
                fromPartial(object: {
                    aminoBinary?: Uint8Array;
                }): _88.TxDecodeAminoRequest;
            };
            TxDecodeAminoResponse: {
                encode(message: _88.TxDecodeAminoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _88.TxDecodeAminoResponse;
                fromJSON(object: any): _88.TxDecodeAminoResponse;
                toJSON(message: _88.TxDecodeAminoResponse): unknown;
                fromPartial(object: {
                    aminoJson?: string;
                }): _88.TxDecodeAminoResponse;
            };
        };
    }
    namespace upgrade {
        namespace module {
            const v1: {
                Module: {
                    encode(message: _90.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _90.Module;
                    fromJSON(object: any): _90.Module;
                    toJSON(message: _90.Module): unknown;
                    fromPartial(object: {
                        authority?: string;
                    }): _90.Module;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _209.MsgClientImpl;
            QueryClientImpl: typeof _199.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                currentPlan(request?: _91.QueryCurrentPlanRequest): Promise<_91.QueryCurrentPlanResponse>;
                appliedPlan(request: _91.QueryAppliedPlanRequest): Promise<_91.QueryAppliedPlanResponse>;
                upgradedConsensusState(request: _91.QueryUpgradedConsensusStateRequest): Promise<_91.QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: _91.QueryModuleVersionsRequest): Promise<_91.QueryModuleVersionsResponse>;
                authority(request?: _91.QueryAuthorityRequest): Promise<_91.QueryAuthorityResponse>;
            };
            LCDQueryClient: typeof _185.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    softwareUpgrade(value: _92.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUpgrade(value: _92.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    softwareUpgrade(value: _92.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _92.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _92.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _92.MsgCancelUpgrade;
                    };
                };
                toJSON: {
                    softwareUpgrade(value: _92.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: unknown;
                    };
                    cancelUpgrade(value: _92.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    softwareUpgrade(value: any): {
                        typeUrl: string;
                        value: _92.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: any): {
                        typeUrl: string;
                        value: _92.MsgCancelUpgrade;
                    };
                };
                fromPartial: {
                    softwareUpgrade(value: _92.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _92.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _92.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _92.MsgCancelUpgrade;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade": {
                    aminoType: string;
                    toAmino: ({ authority, plan }: _92.MsgSoftwareUpgrade) => {
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
                    }) => _92.MsgSoftwareUpgrade;
                };
                "/cosmos.upgrade.v1beta1.MsgCancelUpgrade": {
                    aminoType: string;
                    toAmino: ({ authority }: _92.MsgCancelUpgrade) => {
                        authority: string;
                    };
                    fromAmino: ({ authority }: {
                        authority: string;
                    }) => _92.MsgCancelUpgrade;
                };
            };
            Plan: {
                encode(message: _93.Plan, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _93.Plan;
                fromJSON(object: any): _93.Plan;
                toJSON(message: _93.Plan): unknown;
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
                }): _93.Plan;
            };
            SoftwareUpgradeProposal: {
                encode(message: _93.SoftwareUpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _93.SoftwareUpgradeProposal;
                fromJSON(object: any): _93.SoftwareUpgradeProposal;
                toJSON(message: _93.SoftwareUpgradeProposal): unknown;
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
                }): _93.SoftwareUpgradeProposal;
            };
            CancelSoftwareUpgradeProposal: {
                encode(message: _93.CancelSoftwareUpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _93.CancelSoftwareUpgradeProposal;
                fromJSON(object: any): _93.CancelSoftwareUpgradeProposal;
                toJSON(message: _93.CancelSoftwareUpgradeProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                }): _93.CancelSoftwareUpgradeProposal;
            };
            ModuleVersion: {
                encode(message: _93.ModuleVersion, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _93.ModuleVersion;
                fromJSON(object: any): _93.ModuleVersion;
                toJSON(message: _93.ModuleVersion): unknown;
                fromPartial(object: {
                    name?: string;
                    version?: bigint;
                }): _93.ModuleVersion;
            };
            MsgSoftwareUpgrade: {
                encode(message: _92.MsgSoftwareUpgrade, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _92.MsgSoftwareUpgrade;
                fromJSON(object: any): _92.MsgSoftwareUpgrade;
                toJSON(message: _92.MsgSoftwareUpgrade): unknown;
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
                }): _92.MsgSoftwareUpgrade;
            };
            MsgSoftwareUpgradeResponse: {
                encode(_: _92.MsgSoftwareUpgradeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _92.MsgSoftwareUpgradeResponse;
                fromJSON(_: any): _92.MsgSoftwareUpgradeResponse;
                toJSON(_: _92.MsgSoftwareUpgradeResponse): unknown;
                fromPartial(_: {}): _92.MsgSoftwareUpgradeResponse;
            };
            MsgCancelUpgrade: {
                encode(message: _92.MsgCancelUpgrade, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _92.MsgCancelUpgrade;
                fromJSON(object: any): _92.MsgCancelUpgrade;
                toJSON(message: _92.MsgCancelUpgrade): unknown;
                fromPartial(object: {
                    authority?: string;
                }): _92.MsgCancelUpgrade;
            };
            MsgCancelUpgradeResponse: {
                encode(_: _92.MsgCancelUpgradeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _92.MsgCancelUpgradeResponse;
                fromJSON(_: any): _92.MsgCancelUpgradeResponse;
                toJSON(_: _92.MsgCancelUpgradeResponse): unknown;
                fromPartial(_: {}): _92.MsgCancelUpgradeResponse;
            };
            QueryCurrentPlanRequest: {
                encode(_: _91.QueryCurrentPlanRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _91.QueryCurrentPlanRequest;
                fromJSON(_: any): _91.QueryCurrentPlanRequest;
                toJSON(_: _91.QueryCurrentPlanRequest): unknown;
                fromPartial(_: {}): _91.QueryCurrentPlanRequest;
            };
            QueryCurrentPlanResponse: {
                encode(message: _91.QueryCurrentPlanResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _91.QueryCurrentPlanResponse;
                fromJSON(object: any): _91.QueryCurrentPlanResponse;
                toJSON(message: _91.QueryCurrentPlanResponse): unknown;
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
                }): _91.QueryCurrentPlanResponse;
            };
            QueryAppliedPlanRequest: {
                encode(message: _91.QueryAppliedPlanRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _91.QueryAppliedPlanRequest;
                fromJSON(object: any): _91.QueryAppliedPlanRequest;
                toJSON(message: _91.QueryAppliedPlanRequest): unknown;
                fromPartial(object: {
                    name?: string;
                }): _91.QueryAppliedPlanRequest;
            };
            QueryAppliedPlanResponse: {
                encode(message: _91.QueryAppliedPlanResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _91.QueryAppliedPlanResponse;
                fromJSON(object: any): _91.QueryAppliedPlanResponse;
                toJSON(message: _91.QueryAppliedPlanResponse): unknown;
                fromPartial(object: {
                    height?: bigint;
                }): _91.QueryAppliedPlanResponse;
            };
            QueryUpgradedConsensusStateRequest: {
                encode(message: _91.QueryUpgradedConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _91.QueryUpgradedConsensusStateRequest;
                fromJSON(object: any): _91.QueryUpgradedConsensusStateRequest;
                toJSON(message: _91.QueryUpgradedConsensusStateRequest): unknown;
                fromPartial(object: {
                    lastHeight?: bigint;
                }): _91.QueryUpgradedConsensusStateRequest;
            };
            QueryUpgradedConsensusStateResponse: {
                encode(message: _91.QueryUpgradedConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _91.QueryUpgradedConsensusStateResponse;
                fromJSON(object: any): _91.QueryUpgradedConsensusStateResponse;
                toJSON(message: _91.QueryUpgradedConsensusStateResponse): unknown;
                fromPartial(object: {
                    upgradedConsensusState?: Uint8Array;
                }): _91.QueryUpgradedConsensusStateResponse;
            };
            QueryModuleVersionsRequest: {
                encode(message: _91.QueryModuleVersionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _91.QueryModuleVersionsRequest;
                fromJSON(object: any): _91.QueryModuleVersionsRequest;
                toJSON(message: _91.QueryModuleVersionsRequest): unknown;
                fromPartial(object: {
                    moduleName?: string;
                }): _91.QueryModuleVersionsRequest;
            };
            QueryModuleVersionsResponse: {
                encode(message: _91.QueryModuleVersionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _91.QueryModuleVersionsResponse;
                fromJSON(object: any): _91.QueryModuleVersionsResponse;
                toJSON(message: _91.QueryModuleVersionsResponse): unknown;
                fromPartial(object: {
                    moduleVersions?: {
                        name?: string;
                        version?: bigint;
                    }[];
                }): _91.QueryModuleVersionsResponse;
            };
            QueryAuthorityRequest: {
                encode(_: _91.QueryAuthorityRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _91.QueryAuthorityRequest;
                fromJSON(_: any): _91.QueryAuthorityRequest;
                toJSON(_: _91.QueryAuthorityRequest): unknown;
                fromPartial(_: {}): _91.QueryAuthorityRequest;
            };
            QueryAuthorityResponse: {
                encode(message: _91.QueryAuthorityResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _91.QueryAuthorityResponse;
                fromJSON(object: any): _91.QueryAuthorityResponse;
                toJSON(message: _91.QueryAuthorityResponse): unknown;
                fromPartial(object: {
                    address?: string;
                }): _91.QueryAuthorityResponse;
            };
        };
    }
    namespace vesting {
        namespace module {
            const v1: {
                Module: {
                    encode(_: _94.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _94.Module;
                    fromJSON(_: any): _94.Module;
                    toJSON(_: _94.Module): unknown;
                    fromPartial(_: {}): _94.Module;
                };
            };
        }
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: _200.MsgClientImpl;
                };
                bank: {
                    v1beta1: _201.MsgClientImpl;
                };
                consensus: {
                    v1: _202.MsgClientImpl;
                };
                distribution: {
                    v1beta1: _203.MsgClientImpl;
                };
                feegrant: {
                    v1beta1: _204.MsgClientImpl;
                };
                gov: {
                    v1: _205.MsgClientImpl;
                    v1beta1: _206.MsgClientImpl;
                };
                nft: {
                    v1beta1: _207.MsgClientImpl;
                };
                staking: {
                    v1beta1: _208.MsgClientImpl;
                };
                upgrade: {
                    v1beta1: _209.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: {
                        grants(request: _19.QueryGrantsRequest): Promise<_19.QueryGrantsResponse>;
                        granterGrants(request: _19.QueryGranterGrantsRequest): Promise<_19.QueryGranterGrantsResponse>;
                        granteeGrants(request: _19.QueryGranteeGrantsRequest): Promise<_19.QueryGranteeGrantsResponse>;
                    };
                };
                autocli: {
                    v1: {
                        appOptions(request?: _22.AppOptionsRequest): Promise<_22.AppOptionsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: _27.QueryBalanceRequest): Promise<_27.QueryBalanceResponse>;
                        allBalances(request: _27.QueryAllBalancesRequest): Promise<_27.QueryAllBalancesResponse>;
                        spendableBalances(request: _27.QuerySpendableBalancesRequest): Promise<_27.QuerySpendableBalancesResponse>;
                        spendableBalanceByDenom(request: _27.QuerySpendableBalanceByDenomRequest): Promise<_27.QuerySpendableBalanceByDenomResponse>;
                        totalSupply(request?: _27.QueryTotalSupplyRequest): Promise<_27.QueryTotalSupplyResponse>;
                        supplyOf(request: _27.QuerySupplyOfRequest): Promise<_27.QuerySupplyOfResponse>;
                        params(request?: _27.QueryParamsRequest): Promise<_27.QueryParamsResponse>;
                        denomMetadata(request: _27.QueryDenomMetadataRequest): Promise<_27.QueryDenomMetadataResponse>;
                        denomsMetadata(request?: _27.QueryDenomsMetadataRequest): Promise<_27.QueryDenomsMetadataResponse>;
                        denomOwners(request: _27.QueryDenomOwnersRequest): Promise<_27.QueryDenomOwnersResponse>;
                        sendEnabled(request: _27.QuerySendEnabledRequest): Promise<_27.QuerySendEnabledResponse>;
                    };
                };
                base: {
                    node: {
                        v1beta1: {
                            config(request?: _30.ConfigRequest): Promise<_30.ConfigResponse>;
                        };
                    };
                };
                consensus: {
                    v1: {
                        params(request?: _36.QueryParamsRequest): Promise<_36.QueryParamsResponse>;
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: _48.QueryParamsRequest): Promise<_48.QueryParamsResponse>;
                        validatorDistributionInfo(request: _48.QueryValidatorDistributionInfoRequest): Promise<_48.QueryValidatorDistributionInfoResponse>;
                        validatorOutstandingRewards(request: _48.QueryValidatorOutstandingRewardsRequest): Promise<_48.QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: _48.QueryValidatorCommissionRequest): Promise<_48.QueryValidatorCommissionResponse>;
                        validatorSlashes(request: _48.QueryValidatorSlashesRequest): Promise<_48.QueryValidatorSlashesResponse>;
                        delegationRewards(request: _48.QueryDelegationRewardsRequest): Promise<_48.QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: _48.QueryDelegationTotalRewardsRequest): Promise<_48.QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: _48.QueryDelegatorValidatorsRequest): Promise<_48.QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: _48.QueryDelegatorWithdrawAddressRequest): Promise<_48.QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: _48.QueryCommunityPoolRequest): Promise<_48.QueryCommunityPoolResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: _54.QueryAllowanceRequest): Promise<_54.QueryAllowanceResponse>;
                        allowances(request: _54.QueryAllowancesRequest): Promise<_54.QueryAllowancesResponse>;
                        allowancesByGranter(request: _54.QueryAllowancesByGranterRequest): Promise<_54.QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1: {
                        proposal(request: _60.QueryProposalRequest): Promise<_60.QueryProposalResponse>;
                        proposals(request: _60.QueryProposalsRequest): Promise<_60.QueryProposalsResponse>;
                        vote(request: _60.QueryVoteRequest): Promise<_60.QueryVoteResponse>;
                        votes(request: _60.QueryVotesRequest): Promise<_60.QueryVotesResponse>;
                        params(request: _60.QueryParamsRequest): Promise<_60.QueryParamsResponse>;
                        deposit(request: _60.QueryDepositRequest): Promise<_60.QueryDepositResponse>;
                        deposits(request: _60.QueryDepositsRequest): Promise<_60.QueryDepositsResponse>;
                        tallyResult(request: _60.QueryTallyResultRequest): Promise<_60.QueryTallyResultResponse>;
                    };
                    v1beta1: {
                        proposal(request: _64.QueryProposalRequest): Promise<_64.QueryProposalResponse>;
                        proposals(request: _64.QueryProposalsRequest): Promise<_64.QueryProposalsResponse>;
                        vote(request: _64.QueryVoteRequest): Promise<_64.QueryVoteResponse>;
                        votes(request: _64.QueryVotesRequest): Promise<_64.QueryVotesResponse>;
                        params(request: _64.QueryParamsRequest): Promise<_64.QueryParamsResponse>;
                        deposit(request: _64.QueryDepositRequest): Promise<_64.QueryDepositResponse>;
                        deposits(request: _64.QueryDepositsRequest): Promise<_64.QueryDepositsResponse>;
                        tallyResult(request: _64.QueryTallyResultRequest): Promise<_64.QueryTallyResultResponse>;
                    };
                };
                nft: {
                    v1beta1: {
                        balance(request: _72.QueryBalanceRequest): Promise<_72.QueryBalanceResponse>;
                        owner(request: _72.QueryOwnerRequest): Promise<_72.QueryOwnerResponse>;
                        supply(request: _72.QuerySupplyRequest): Promise<_72.QuerySupplyResponse>;
                        nFTs(request: _72.QueryNFTsRequest): Promise<_72.QueryNFTsResponse>;
                        nFT(request: _72.QueryNFTRequest): Promise<_72.QueryNFTResponse>;
                        class(request: _72.QueryClassRequest): Promise<_72.QueryClassResponse>;
                        classes(request?: _72.QueryClassesRequest): Promise<_72.QueryClassesResponse>;
                    };
                };
                orm: {
                    query: {
                        v1alpha1: {
                            get(request: _75.GetRequest): Promise<_75.GetResponse>;
                            list(request: _75.ListRequest): Promise<_75.ListResponse>;
                        };
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: _83.QueryValidatorsRequest): Promise<_83.QueryValidatorsResponse>;
                        validator(request: _83.QueryValidatorRequest): Promise<_83.QueryValidatorResponse>;
                        validatorDelegations(request: _83.QueryValidatorDelegationsRequest): Promise<_83.QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: _83.QueryValidatorUnbondingDelegationsRequest): Promise<_83.QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: _83.QueryDelegationRequest): Promise<_83.QueryDelegationResponse>;
                        unbondingDelegation(request: _83.QueryUnbondingDelegationRequest): Promise<_83.QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: _83.QueryDelegatorDelegationsRequest): Promise<_83.QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: _83.QueryDelegatorUnbondingDelegationsRequest): Promise<_83.QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: _83.QueryRedelegationsRequest): Promise<_83.QueryRedelegationsResponse>;
                        delegatorValidators(request: _83.QueryDelegatorValidatorsRequest): Promise<_83.QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: _83.QueryDelegatorValidatorRequest): Promise<_83.QueryDelegatorValidatorResponse>;
                        historicalInfo(request: _83.QueryHistoricalInfoRequest): Promise<_83.QueryHistoricalInfoResponse>;
                        pool(request?: _83.QueryPoolRequest): Promise<_83.QueryPoolResponse>;
                        params(request?: _83.QueryParamsRequest): Promise<_83.QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: _88.SimulateRequest): Promise<_88.SimulateResponse>;
                        getTx(request: _88.GetTxRequest): Promise<_88.GetTxResponse>;
                        broadcastTx(request: _88.BroadcastTxRequest): Promise<_88.BroadcastTxResponse>;
                        getTxsEvent(request: _88.GetTxsEventRequest): Promise<_88.GetTxsEventResponse>;
                        getBlockWithTxs(request: _88.GetBlockWithTxsRequest): Promise<_88.GetBlockWithTxsResponse>;
                        txDecode(request: _88.TxDecodeRequest): Promise<_88.TxDecodeResponse>;
                        txEncode(request: _88.TxEncodeRequest): Promise<_88.TxEncodeResponse>;
                        txEncodeAmino(request: _88.TxEncodeAminoRequest): Promise<_88.TxEncodeAminoResponse>;
                        txDecodeAmino(request: _88.TxDecodeAminoRequest): Promise<_88.TxDecodeAminoResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: _91.QueryCurrentPlanRequest): Promise<_91.QueryCurrentPlanResponse>;
                        appliedPlan(request: _91.QueryAppliedPlanRequest): Promise<_91.QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: _91.QueryUpgradedConsensusStateRequest): Promise<_91.QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: _91.QueryModuleVersionsRequest): Promise<_91.QueryModuleVersionsResponse>;
                        authority(request?: _91.QueryAuthorityRequest): Promise<_91.QueryAuthorityResponse>;
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: _174.LCDQueryClient;
                };
                bank: {
                    v1beta1: _175.LCDQueryClient;
                };
                base: {
                    node: {
                        v1beta1: _176.LCDQueryClient;
                    };
                };
                consensus: {
                    v1: _177.LCDQueryClient;
                };
                distribution: {
                    v1beta1: _178.LCDQueryClient;
                };
                feegrant: {
                    v1beta1: _179.LCDQueryClient;
                };
                gov: {
                    v1: _180.LCDQueryClient;
                    v1beta1: _181.LCDQueryClient;
                };
                nft: {
                    v1beta1: _182.LCDQueryClient;
                };
                staking: {
                    v1beta1: _183.LCDQueryClient;
                };
                tx: {
                    v1beta1: _184.LCDQueryClient;
                };
                upgrade: {
                    v1beta1: _185.LCDQueryClient;
                };
            };
        }>;
    };
}
