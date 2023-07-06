import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { MsgClaimFor, MsgClaimForResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  /** CosmWasm Contract Claimer */
  claimFor(request: MsgClaimFor): Promise<MsgClaimForResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  /* CosmWasm Contract Claimer */
  claimFor = async (request: MsgClaimFor): Promise<MsgClaimForResponse> => {
    const data = MsgClaimFor.encode(request).finish();
    const promise = this.rpc.request("coolcat.catdrop.v1.Msg", "ClaimFor", data);
    return promise.then(data => MsgClaimForResponse.decode(new BinaryReader(data)));
  };
}