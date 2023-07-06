import { Rpc } from "../../../helpers";
import { MsgClaimFor, MsgClaimForResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
    /** CosmWasm Contract Claimer */
    claimFor(request: MsgClaimFor): Promise<MsgClaimForResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    claimFor: (request: MsgClaimFor) => Promise<MsgClaimForResponse>;
}
