import * as _1 from "./alloc/v1/genesis";
import * as _2 from "./alloc/v1/params";
import * as _3 from "./alloc/v1/query";
import * as _4 from "./catdrop/v1/claim_record";
import * as _5 from "./catdrop/v1/genesis";
import * as _6 from "./catdrop/v1/params";
import * as _7 from "./catdrop/v1/query";
import * as _8 from "./catdrop/v1/tx";
import * as _9 from "./mint/v1/genesis";
import * as _10 from "./mint/v1/mint";
import * as _11 from "./mint/v1/query";
import * as _149 from "./alloc/v1/query.lcd";
import * as _150 from "./catdrop/v1/query.lcd";
import * as _151 from "./mint/v1/query.lcd";
import * as _152 from "./alloc/v1/query.rpc.Query";
import * as _153 from "./catdrop/v1/query.rpc.Query";
import * as _154 from "./mint/v1/query.rpc.Query";
import * as _155 from "./catdrop/v1/tx.rpc.msg";
export declare namespace coolcat {
    namespace alloc {
        const v1: {
            QueryClientImpl: typeof _152.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _3.QueryParamsRequest): Promise<_3.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _149.LCDQueryClient;
            QueryParamsRequest: {
                encode(_: _3.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _3.QueryParamsRequest;
                fromJSON(_: any): _3.QueryParamsRequest;
                toJSON(_: _3.QueryParamsRequest): unknown;
                fromPartial(_: {}): _3.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _3.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _3.QueryParamsResponse;
                fromJSON(object: any): _3.QueryParamsResponse;
                toJSON(message: _3.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        distributionProportions?: {
                            communityPool?: string;
                        };
                    };
                }): _3.QueryParamsResponse;
            };
            DistributionProportions: {
                encode(message: _2.DistributionProportions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _2.DistributionProportions;
                fromJSON(object: any): _2.DistributionProportions;
                toJSON(message: _2.DistributionProportions): unknown;
                fromPartial(object: {
                    communityPool?: string;
                }): _2.DistributionProportions;
            };
            Params: {
                encode(message: _2.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _2.Params;
                fromJSON(object: any): _2.Params;
                toJSON(message: _2.Params): unknown;
                fromPartial(object: {
                    distributionProportions?: {
                        communityPool?: string;
                    };
                }): _2.Params;
            };
            GenesisState: {
                encode(message: _1.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _1.GenesisState;
                fromJSON(object: any): _1.GenesisState;
                toJSON(message: _1.GenesisState): unknown;
                fromPartial(object: {
                    params?: {
                        distributionProportions?: {
                            communityPool?: string;
                        };
                    };
                }): _1.GenesisState;
            };
        };
    }
    namespace catdrop {
        const v1: {
            MsgClientImpl: typeof _155.MsgClientImpl;
            QueryClientImpl: typeof _153.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                moduleAccountBalance(request?: _7.QueryModuleAccountBalanceRequest): Promise<_7.QueryModuleAccountBalanceResponse>;
                params(request?: _7.QueryParamsRequest): Promise<_7.QueryParamsResponse>;
                claimRecord(request: _7.QueryClaimRecordRequest): Promise<_7.QueryClaimRecordResponse>;
                claimableForAction(request: _7.QueryClaimableForActionRequest): Promise<_7.QueryClaimableForActionResponse>;
                totalClaimable(request: _7.QueryTotalClaimableRequest): Promise<_7.QueryTotalClaimableResponse>;
            };
            LCDQueryClient: typeof _150.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    claimFor(value: _8.MsgClaimFor): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    claimFor(value: _8.MsgClaimFor): {
                        typeUrl: string;
                        value: _8.MsgClaimFor;
                    };
                };
                toJSON: {
                    claimFor(value: _8.MsgClaimFor): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    claimFor(value: any): {
                        typeUrl: string;
                        value: _8.MsgClaimFor;
                    };
                };
                fromPartial: {
                    claimFor(value: _8.MsgClaimFor): {
                        typeUrl: string;
                        value: _8.MsgClaimFor;
                    };
                };
            };
            AminoConverter: {
                "/coolcat.catdrop.v1.MsgClaimFor": {
                    aminoType: string;
                    toAmino: ({ sender, address, action }: _8.MsgClaimFor) => {
                        sender: string;
                        address: string;
                        action: number;
                    };
                    fromAmino: ({ sender, address, action }: {
                        sender: string;
                        address: string;
                        action: number;
                    }) => _8.MsgClaimFor;
                };
            };
            MsgClaimFor: {
                encode(message: _8.MsgClaimFor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _8.MsgClaimFor;
                fromJSON(object: any): _8.MsgClaimFor;
                toJSON(message: _8.MsgClaimFor): unknown;
                fromPartial(object: {
                    sender?: string;
                    address?: string;
                    action?: _4.Action;
                }): _8.MsgClaimFor;
            };
            MsgClaimForResponse: {
                encode(message: _8.MsgClaimForResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _8.MsgClaimForResponse;
                fromJSON(object: any): _8.MsgClaimForResponse;
                toJSON(message: _8.MsgClaimForResponse): unknown;
                fromPartial(object: {
                    address?: string;
                    claimedAmount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _8.MsgClaimForResponse;
            };
            QueryModuleAccountBalanceRequest: {
                encode(_: _7.QueryModuleAccountBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _7.QueryModuleAccountBalanceRequest;
                fromJSON(_: any): _7.QueryModuleAccountBalanceRequest;
                toJSON(_: _7.QueryModuleAccountBalanceRequest): unknown;
                fromPartial(_: {}): _7.QueryModuleAccountBalanceRequest;
            };
            QueryModuleAccountBalanceResponse: {
                encode(message: _7.QueryModuleAccountBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _7.QueryModuleAccountBalanceResponse;
                fromJSON(object: any): _7.QueryModuleAccountBalanceResponse;
                toJSON(message: _7.QueryModuleAccountBalanceResponse): unknown;
                fromPartial(object: {
                    moduleAccountBalance?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _7.QueryModuleAccountBalanceResponse;
            };
            QueryParamsRequest: {
                encode(_: _7.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _7.QueryParamsRequest;
                fromJSON(_: any): _7.QueryParamsRequest;
                toJSON(_: _7.QueryParamsRequest): unknown;
                fromPartial(_: {}): _7.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _7.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _7.QueryParamsResponse;
                fromJSON(object: any): _7.QueryParamsResponse;
                toJSON(message: _7.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        airdropEnabled?: boolean;
                        airdropStartTime?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        durationUntilDecay?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        durationOfDecay?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        claimDenom?: string;
                        allowedClaimers?: {
                            contractAddress?: string;
                            action?: _4.Action;
                        }[];
                    };
                }): _7.QueryParamsResponse;
            };
            QueryClaimRecordRequest: {
                encode(message: _7.QueryClaimRecordRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _7.QueryClaimRecordRequest;
                fromJSON(object: any): _7.QueryClaimRecordRequest;
                toJSON(message: _7.QueryClaimRecordRequest): unknown;
                fromPartial(object: {
                    address?: string;
                }): _7.QueryClaimRecordRequest;
            };
            QueryClaimRecordResponse: {
                encode(message: _7.QueryClaimRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _7.QueryClaimRecordResponse;
                fromJSON(object: any): _7.QueryClaimRecordResponse;
                toJSON(message: _7.QueryClaimRecordResponse): unknown;
                fromPartial(object: {
                    claimRecord?: {
                        address?: string;
                        initialClaimableAmount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        actionCompleted?: boolean[];
                    };
                }): _7.QueryClaimRecordResponse;
            };
            QueryClaimableForActionRequest: {
                encode(message: _7.QueryClaimableForActionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _7.QueryClaimableForActionRequest;
                fromJSON(object: any): _7.QueryClaimableForActionRequest;
                toJSON(message: _7.QueryClaimableForActionRequest): unknown;
                fromPartial(object: {
                    address?: string;
                    action?: _4.Action;
                }): _7.QueryClaimableForActionRequest;
            };
            QueryClaimableForActionResponse: {
                encode(message: _7.QueryClaimableForActionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _7.QueryClaimableForActionResponse;
                fromJSON(object: any): _7.QueryClaimableForActionResponse;
                toJSON(message: _7.QueryClaimableForActionResponse): unknown;
                fromPartial(object: {
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _7.QueryClaimableForActionResponse;
            };
            QueryTotalClaimableRequest: {
                encode(message: _7.QueryTotalClaimableRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _7.QueryTotalClaimableRequest;
                fromJSON(object: any): _7.QueryTotalClaimableRequest;
                toJSON(message: _7.QueryTotalClaimableRequest): unknown;
                fromPartial(object: {
                    address?: string;
                }): _7.QueryTotalClaimableRequest;
            };
            QueryTotalClaimableResponse: {
                encode(message: _7.QueryTotalClaimableResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _7.QueryTotalClaimableResponse;
                fromJSON(object: any): _7.QueryTotalClaimableResponse;
                toJSON(message: _7.QueryTotalClaimableResponse): unknown;
                fromPartial(object: {
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _7.QueryTotalClaimableResponse;
            };
            ClaimAuthorization: {
                encode(message: _6.ClaimAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _6.ClaimAuthorization;
                fromJSON(object: any): _6.ClaimAuthorization;
                toJSON(message: _6.ClaimAuthorization): unknown;
                fromPartial(object: {
                    contractAddress?: string;
                    action?: _4.Action;
                }): _6.ClaimAuthorization;
            };
            Params: {
                encode(message: _6.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _6.Params;
                fromJSON(object: any): _6.Params;
                toJSON(message: _6.Params): unknown;
                fromPartial(object: {
                    airdropEnabled?: boolean;
                    airdropStartTime?: {
                        seconds?: bigint;
                        nanos?: number;
                    };
                    durationUntilDecay?: {
                        seconds?: bigint;
                        nanos?: number;
                    };
                    durationOfDecay?: {
                        seconds?: bigint;
                        nanos?: number;
                    };
                    claimDenom?: string;
                    allowedClaimers?: {
                        contractAddress?: string;
                        action?: _4.Action;
                    }[];
                }): _6.Params;
            };
            GenesisState: {
                encode(message: _5.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _5.GenesisState;
                fromJSON(object: any): _5.GenesisState;
                toJSON(message: _5.GenesisState): unknown;
                fromPartial(object: {
                    moduleAccountBalance?: {
                        denom?: string;
                        amount?: string;
                    };
                    params?: {
                        airdropEnabled?: boolean;
                        airdropStartTime?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        durationUntilDecay?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        durationOfDecay?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        claimDenom?: string;
                        allowedClaimers?: {
                            contractAddress?: string;
                            action?: _4.Action;
                        }[];
                    };
                    claimRecords?: {
                        address?: string;
                        initialClaimableAmount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        actionCompleted?: boolean[];
                    }[];
                }): _5.GenesisState;
            };
            actionFromJSON(object: any): _4.Action;
            actionToJSON(object: _4.Action): string;
            Action: typeof _4.Action;
            ClaimRecord: {
                encode(message: _4.ClaimRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _4.ClaimRecord;
                fromJSON(object: any): _4.ClaimRecord;
                toJSON(message: _4.ClaimRecord): unknown;
                fromPartial(object: {
                    address?: string;
                    initialClaimableAmount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    actionCompleted?: boolean[];
                }): _4.ClaimRecord;
            };
        };
    }
    namespace mint {
        const v1: {
            QueryClientImpl: typeof _154.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _11.QueryParamsRequest): Promise<_11.QueryParamsResponse>;
                inflation(request?: _11.QueryInflationRequest): Promise<_11.QueryInflationResponse>;
                annualProvisions(request?: _11.QueryAnnualProvisionsRequest): Promise<_11.QueryAnnualProvisionsResponse>;
            };
            LCDQueryClient: typeof _151.LCDQueryClient;
            QueryParamsRequest: {
                encode(_: _11.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _11.QueryParamsRequest;
                fromJSON(_: any): _11.QueryParamsRequest;
                toJSON(_: _11.QueryParamsRequest): unknown;
                fromPartial(_: {}): _11.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _11.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _11.QueryParamsResponse;
                fromJSON(object: any): _11.QueryParamsResponse;
                toJSON(message: _11.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        mintDenom?: string;
                        blocksPerYear?: bigint;
                    };
                }): _11.QueryParamsResponse;
            };
            QueryInflationRequest: {
                encode(_: _11.QueryInflationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _11.QueryInflationRequest;
                fromJSON(_: any): _11.QueryInflationRequest;
                toJSON(_: _11.QueryInflationRequest): unknown;
                fromPartial(_: {}): _11.QueryInflationRequest;
            };
            QueryInflationResponse: {
                encode(message: _11.QueryInflationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _11.QueryInflationResponse;
                fromJSON(object: any): _11.QueryInflationResponse;
                toJSON(message: _11.QueryInflationResponse): unknown;
                fromPartial(object: {
                    inflation?: Uint8Array;
                }): _11.QueryInflationResponse;
            };
            QueryAnnualProvisionsRequest: {
                encode(_: _11.QueryAnnualProvisionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _11.QueryAnnualProvisionsRequest;
                fromJSON(_: any): _11.QueryAnnualProvisionsRequest;
                toJSON(_: _11.QueryAnnualProvisionsRequest): unknown;
                fromPartial(_: {}): _11.QueryAnnualProvisionsRequest;
            };
            QueryAnnualProvisionsResponse: {
                encode(message: _11.QueryAnnualProvisionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _11.QueryAnnualProvisionsResponse;
                fromJSON(object: any): _11.QueryAnnualProvisionsResponse;
                toJSON(message: _11.QueryAnnualProvisionsResponse): unknown;
                fromPartial(object: {
                    annualProvisions?: Uint8Array;
                }): _11.QueryAnnualProvisionsResponse;
            };
            Minter: {
                encode(message: _10.Minter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _10.Minter;
                fromJSON(object: any): _10.Minter;
                toJSON(message: _10.Minter): unknown;
                fromPartial(object: {
                    inflation?: string;
                    phase?: bigint;
                    startPhaseBlock?: bigint;
                    annualProvisions?: string;
                }): _10.Minter;
            };
            Params: {
                encode(message: _10.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _10.Params;
                fromJSON(object: any): _10.Params;
                toJSON(message: _10.Params): unknown;
                fromPartial(object: {
                    mintDenom?: string;
                    blocksPerYear?: bigint;
                }): _10.Params;
            };
            GenesisState: {
                encode(message: _9.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _9.GenesisState;
                fromJSON(object: any): _9.GenesisState;
                toJSON(message: _9.GenesisState): unknown;
                fromPartial(object: {
                    minter?: {
                        inflation?: string;
                        phase?: bigint;
                        startPhaseBlock?: bigint;
                        annualProvisions?: string;
                    };
                    params?: {
                        mintDenom?: string;
                        blocksPerYear?: bigint;
                    };
                }): _9.GenesisState;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            coolcat: {
                catdrop: {
                    v1: _155.MsgClientImpl;
                };
            };
            cosmos: {
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
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            coolcat: {
                alloc: {
                    v1: {
                        params(request?: _3.QueryParamsRequest): Promise<_3.QueryParamsResponse>;
                    };
                };
                catdrop: {
                    v1: {
                        moduleAccountBalance(request?: _7.QueryModuleAccountBalanceRequest): Promise<_7.QueryModuleAccountBalanceResponse>;
                        params(request?: _7.QueryParamsRequest): Promise<_7.QueryParamsResponse>;
                        claimRecord(request: _7.QueryClaimRecordRequest): Promise<_7.QueryClaimRecordResponse>;
                        claimableForAction(request: _7.QueryClaimableForActionRequest): Promise<_7.QueryClaimableForActionResponse>;
                        totalClaimable(request: _7.QueryTotalClaimableRequest): Promise<_7.QueryTotalClaimableResponse>;
                    };
                };
                mint: {
                    v1: {
                        params(request?: _11.QueryParamsRequest): Promise<_11.QueryParamsResponse>;
                        inflation(request?: _11.QueryInflationRequest): Promise<_11.QueryInflationResponse>;
                        annualProvisions(request?: _11.QueryAnnualProvisionsRequest): Promise<_11.QueryAnnualProvisionsResponse>;
                    };
                };
            };
            cosmos: {
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
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            coolcat: {
                alloc: {
                    v1: _149.LCDQueryClient;
                };
                catdrop: {
                    v1: _150.LCDQueryClient;
                };
                mint: {
                    v1: _151.LCDQueryClient;
                };
            };
            cosmos: {
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
        }>;
    };
}
