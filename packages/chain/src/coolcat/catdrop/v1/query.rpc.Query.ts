import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryModuleAccountBalanceRequest, QueryModuleAccountBalanceResponse, QueryParamsRequest, QueryParamsResponse, QueryClaimRecordRequest, QueryClaimRecordResponse, QueryHookRecordRequest, QueryHookRecordResponse, QueryClaimableForActionRequest, QueryClaimableForActionResponse, QueryTotalClaimableRequest, QueryTotalClaimableResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Queries the unclaimed amount of CCAT in the catdrop module */
  moduleAccountBalance(request?: QueryModuleAccountBalanceRequest): Promise<QueryModuleAccountBalanceResponse>;
  /** Queries the params of the catdrop module */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries the claim record for a provided address */
  claimRecord(request: QueryClaimRecordRequest): Promise<QueryClaimRecordResponse>;
  /** Queries the claim record for a provided address */
  hookRecord(request: QueryHookRecordRequest): Promise<QueryHookRecordResponse>;
  /** Queries the reward for a single provided action for a provided address */
  claimableForAction(request: QueryClaimableForActionRequest): Promise<QueryClaimableForActionResponse>;
  /** Queries the total reward for a provided address */
  totalClaimable(request: QueryTotalClaimableRequest): Promise<QueryTotalClaimableResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  /* Queries the unclaimed amount of CCAT in the catdrop module */
  moduleAccountBalance = async (request: QueryModuleAccountBalanceRequest = {}): Promise<QueryModuleAccountBalanceResponse> => {
    const data = QueryModuleAccountBalanceRequest.encode(request).finish();
    const promise = this.rpc.request("coolcat.catdrop.v1.Query", "ModuleAccountBalance", data);
    return promise.then(data => QueryModuleAccountBalanceResponse.decode(new BinaryReader(data)));
  };
  /* Queries the params of the catdrop module */
  params = async (request: QueryParamsRequest = {}): Promise<QueryParamsResponse> => {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("coolcat.catdrop.v1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  };
  /* Queries the claim record for a provided address */
  claimRecord = async (request: QueryClaimRecordRequest): Promise<QueryClaimRecordResponse> => {
    const data = QueryClaimRecordRequest.encode(request).finish();
    const promise = this.rpc.request("coolcat.catdrop.v1.Query", "ClaimRecord", data);
    return promise.then(data => QueryClaimRecordResponse.decode(new BinaryReader(data)));
  };
  /* Queries the claim record for a provided address */
  hookRecord = async (request: QueryHookRecordRequest): Promise<QueryHookRecordResponse> => {
    const data = QueryHookRecordRequest.encode(request).finish();
    const promise = this.rpc.request("coolcat.catdrop.v1.Query", "HookRecord", data);
    return promise.then(data => QueryHookRecordResponse.decode(new BinaryReader(data)));
  };
  /* Queries the reward for a single provided action for a provided address */
  claimableForAction = async (request: QueryClaimableForActionRequest): Promise<QueryClaimableForActionResponse> => {
    const data = QueryClaimableForActionRequest.encode(request).finish();
    const promise = this.rpc.request("coolcat.catdrop.v1.Query", "ClaimableForAction", data);
    return promise.then(data => QueryClaimableForActionResponse.decode(new BinaryReader(data)));
  };
  /* Queries the total reward for a provided address */
  totalClaimable = async (request: QueryTotalClaimableRequest): Promise<QueryTotalClaimableResponse> => {
    const data = QueryTotalClaimableRequest.encode(request).finish();
    const promise = this.rpc.request("coolcat.catdrop.v1.Query", "TotalClaimable", data);
    return promise.then(data => QueryTotalClaimableResponse.decode(new BinaryReader(data)));
  };
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    moduleAccountBalance(request?: QueryModuleAccountBalanceRequest): Promise<QueryModuleAccountBalanceResponse> {
      return queryService.moduleAccountBalance(request);
    },
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    claimRecord(request: QueryClaimRecordRequest): Promise<QueryClaimRecordResponse> {
      return queryService.claimRecord(request);
    },
    hookRecord(request: QueryHookRecordRequest): Promise<QueryHookRecordResponse> {
      return queryService.hookRecord(request);
    },
    claimableForAction(request: QueryClaimableForActionRequest): Promise<QueryClaimableForActionResponse> {
      return queryService.claimableForAction(request);
    },
    totalClaimable(request: QueryTotalClaimableRequest): Promise<QueryTotalClaimableResponse> {
      return queryService.totalClaimable(request);
    }
  };
};