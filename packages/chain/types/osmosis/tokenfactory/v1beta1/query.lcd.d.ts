import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponse, QueryDenomAuthorityMetadataRequest, QueryDenomAuthorityMetadataResponse, QueryDenomsFromCreatorRequest, QueryDenomsFromCreatorResponse } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    params: (_params?: QueryParamsRequest) => Promise<QueryParamsResponse>;
    denomAuthorityMetadata: (params: QueryDenomAuthorityMetadataRequest) => Promise<QueryDenomAuthorityMetadataResponse>;
    denomsFromCreator: (params: QueryDenomsFromCreatorRequest) => Promise<QueryDenomsFromCreatorResponse>;
}
