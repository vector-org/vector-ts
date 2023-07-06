import { LCDClient } from "@osmonauts/lcd";
import { QueryModuleAccountBalanceRequest, QueryModuleAccountBalanceResponse, QueryParamsRequest, QueryParamsResponse, QueryClaimRecordRequest, QueryClaimRecordResponse, QueryClaimableForActionRequest, QueryClaimableForActionResponse, QueryTotalClaimableRequest, QueryTotalClaimableResponse } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    moduleAccountBalance: (_params?: QueryModuleAccountBalanceRequest) => Promise<QueryModuleAccountBalanceResponse>;
    params: (_params?: QueryParamsRequest) => Promise<QueryParamsResponse>;
    claimRecord: (params: QueryClaimRecordRequest) => Promise<QueryClaimRecordResponse>;
    claimableForAction: (params: QueryClaimableForActionRequest) => Promise<QueryClaimableForActionResponse>;
    totalClaimable: (params: QueryTotalClaimableRequest) => Promise<QueryTotalClaimableResponse>;
}
