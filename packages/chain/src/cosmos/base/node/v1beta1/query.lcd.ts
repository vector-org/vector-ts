import { LCDClient } from "@osmonauts/lcd";
import { ConfigRequest, ConfigResponse } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
  }
  /* Config queries for the operator configuration. */
  config = async (_params: ConfigRequest = {}): Promise<ConfigResponse> => {
    const endpoint = `cosmos/base/node/v1beta1/config`;
    return ConfigResponse.fromJSON(await this.req.get<ConfigResponse>(endpoint));
  };
}