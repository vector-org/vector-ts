import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryModuleAccountBalanceRequest, QueryModuleAccountBalanceResponse, QueryParamsRequest, QueryParamsResponse, QueryClaimRecordRequest, QueryClaimRecordResponse, QueryClaimableForActionRequest, QueryClaimableForActionResponse, QueryTotalClaimableRequest, QueryTotalClaimableResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    /** Queries the unclaimed amount of CCAT in the catdrop module */
    moduleAccountBalance(request?: QueryModuleAccountBalanceRequest): Promise<QueryModuleAccountBalanceResponse>;
    /** Queries the params of the catdrop module */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** Queries the claim record for a provided address */
    claimRecord(request: QueryClaimRecordRequest): Promise<QueryClaimRecordResponse>;
    /** Queries the reward for a single provided action for a provided address */
    claimableForAction(request: QueryClaimableForActionRequest): Promise<QueryClaimableForActionResponse>;
    /** Queries the total reward for a provided address */
    totalClaimable(request: QueryTotalClaimableRequest): Promise<QueryTotalClaimableResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    moduleAccountBalance: (request?: QueryModuleAccountBalanceRequest) => Promise<QueryModuleAccountBalanceResponse>;
    params: (request?: QueryParamsRequest) => Promise<QueryParamsResponse>;
    claimRecord: (request: QueryClaimRecordRequest) => Promise<QueryClaimRecordResponse>;
    claimableForAction: (request: QueryClaimableForActionRequest) => Promise<QueryClaimableForActionResponse>;
    totalClaimable: (request: QueryTotalClaimableRequest) => Promise<QueryTotalClaimableResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    moduleAccountBalance(request?: QueryModuleAccountBalanceRequest): Promise<QueryModuleAccountBalanceResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    claimRecord(request: QueryClaimRecordRequest): Promise<QueryClaimRecordResponse>;
    claimableForAction(request: QueryClaimableForActionRequest): Promise<QueryClaimableForActionResponse>;
    totalClaimable(request: QueryTotalClaimableRequest): Promise<QueryTotalClaimableResponse>;
};
