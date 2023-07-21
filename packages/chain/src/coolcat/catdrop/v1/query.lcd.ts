import { LCDClient } from "@osmonauts/lcd";
import { QueryModuleAccountBalanceRequest, QueryModuleAccountBalanceResponse, QueryParamsRequest, QueryParamsResponse, QueryClaimRecordRequest, QueryClaimRecordResponse, QueryHookRecordRequest, QueryHookRecordResponse, QueryClaimableForActionRequest, QueryClaimableForActionResponse, QueryTotalClaimableRequest, QueryTotalClaimableResponse } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
  }
  /* Queries the unclaimed amount of CCAT in the catdrop module */
  moduleAccountBalance = async (_params: QueryModuleAccountBalanceRequest = {}): Promise<QueryModuleAccountBalanceResponse> => {
    const endpoint = `coolcat/catdrop/v1/module_account_balance`;
    return QueryModuleAccountBalanceResponse.fromJSON(await this.req.get<QueryModuleAccountBalanceResponse>(endpoint));
  };
  /* Queries the params of the catdrop module */
  params = async (_params: QueryParamsRequest = {}): Promise<QueryParamsResponse> => {
    const endpoint = `coolcat/catdrop/v1/params`;
    return QueryParamsResponse.fromJSON(await this.req.get<QueryParamsResponse>(endpoint));
  };
  /* Queries the claim record for a provided address */
  claimRecord = async (params: QueryClaimRecordRequest): Promise<QueryClaimRecordResponse> => {
    const endpoint = `coolcat/catdrop/v1/claim_record/${params.address}`;
    return QueryClaimRecordResponse.fromJSON(await this.req.get<QueryClaimRecordResponse>(endpoint));
  };
  /* Queries the claim record for a provided address */
  hookRecord = async (params: QueryHookRecordRequest): Promise<QueryHookRecordResponse> => {
    const endpoint = `coolcat/catdrop/v1/hook_record/${params.address}`;
    return QueryHookRecordResponse.fromJSON(await this.req.get<QueryHookRecordResponse>(endpoint));
  };
  /* Queries the reward for a single provided action for a provided address */
  claimableForAction = async (params: QueryClaimableForActionRequest): Promise<QueryClaimableForActionResponse> => {
    const endpoint = `coolcat/catdrop/v1/claimable_for_action/${params.address}/${params.action}`;
    return QueryClaimableForActionResponse.fromJSON(await this.req.get<QueryClaimableForActionResponse>(endpoint));
  };
  /* Queries the total reward for a provided address */
  totalClaimable = async (params: QueryTotalClaimableRequest): Promise<QueryTotalClaimableResponse> => {
    const endpoint = `coolcat/catdrop/v1/total_claimable/${params.address}`;
    return QueryTotalClaimableResponse.fromJSON(await this.req.get<QueryTotalClaimableResponse>(endpoint));
  };
}