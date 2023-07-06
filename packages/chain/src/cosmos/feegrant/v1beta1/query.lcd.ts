import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@osmonauts/lcd";
import { QueryAllowanceRequest, QueryAllowanceResponse, QueryAllowancesRequest, QueryAllowancesResponse, QueryAllowancesByGranterRequest, QueryAllowancesByGranterResponse } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
  }
  /* Allowance returns fee granted to the grantee by the granter. */
  allowance = async (params: QueryAllowanceRequest): Promise<QueryAllowanceResponse> => {
    const endpoint = `cosmos/feegrant/v1beta1/allowance/${params.granter}/${params.grantee}`;
    return QueryAllowanceResponse.fromJSON(await this.req.get<QueryAllowanceResponse>(endpoint));
  };
  /* Allowances returns all the grants for address. */
  allowances = async (params: QueryAllowancesRequest): Promise<QueryAllowancesResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/feegrant/v1beta1/allowances/${params.grantee}`;
    return QueryAllowancesResponse.fromJSON(await this.req.get<QueryAllowancesResponse>(endpoint, options));
  };
  /* AllowancesByGranter returns all the grants given by an address
  
   Since: cosmos-sdk 0.46 */
  allowancesByGranter = async (params: QueryAllowancesByGranterRequest): Promise<QueryAllowancesByGranterResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/feegrant/v1beta1/issued/${params.granter}`;
    return QueryAllowancesByGranterResponse.fromJSON(await this.req.get<QueryAllowancesByGranterResponse>(endpoint, options));
  };
}