import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponse } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    params: (_params?: QueryParamsRequest) => Promise<QueryParamsResponse>;
}
