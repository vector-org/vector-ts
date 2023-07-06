import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponse } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
  }
  /* Params queries the parameters of x/consensus_param module. */
  params = async (_params: QueryParamsRequest = {}): Promise<QueryParamsResponse> => {
    const endpoint = `cosmos/consensus/v1/params`;
    return QueryParamsResponse.fromJSON(await this.req.get<QueryParamsResponse>(endpoint));
  };
}