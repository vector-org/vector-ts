import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@osmonauts/lcd";
import { QueryProposalRequest, QueryProposalResponse, QueryProposalsRequest, QueryProposalsResponse, QueryVoteRequest, QueryVoteResponse, QueryVotesRequest, QueryVotesResponse, QueryParamsRequest, QueryParamsResponse, QueryDepositRequest, QueryDepositResponse, QueryDepositsRequest, QueryDepositsResponse, QueryTallyResultRequest, QueryTallyResultResponse } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
  }
  /* Proposal queries proposal details based on ProposalID. */
  proposal = async (params: QueryProposalRequest): Promise<QueryProposalResponse> => {
    const endpoint = `cosmos/gov/v1/proposals/${params.proposalId}`;
    return QueryProposalResponse.fromJSON(await this.req.get<QueryProposalResponse>(endpoint));
  };
  /* Proposals queries all proposals based on given status. */
  proposals = async (params: QueryProposalsRequest): Promise<QueryProposalsResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.proposalStatus !== "undefined") {
      options.params.proposal_status = params.proposalStatus;
    }
    if (typeof params?.voter !== "undefined") {
      options.params.voter = params.voter;
    }
    if (typeof params?.depositor !== "undefined") {
      options.params.depositor = params.depositor;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/gov/v1/proposals`;
    return QueryProposalsResponse.fromJSON(await this.req.get<QueryProposalsResponse>(endpoint, options));
  };
  /* Vote queries voted information based on proposalID, voterAddr. */
  vote = async (params: QueryVoteRequest): Promise<QueryVoteResponse> => {
    const endpoint = `cosmos/gov/v1/proposals/${params.proposalId}/votes/${params.voter}`;
    return QueryVoteResponse.fromJSON(await this.req.get<QueryVoteResponse>(endpoint));
  };
  /* Votes queries votes of a given proposal. */
  votes = async (params: QueryVotesRequest): Promise<QueryVotesResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/gov/v1/proposals/${params.proposalId}/votes`;
    return QueryVotesResponse.fromJSON(await this.req.get<QueryVotesResponse>(endpoint, options));
  };
  /* Params queries all parameters of the gov module. */
  params = async (params: QueryParamsRequest): Promise<QueryParamsResponse> => {
    const endpoint = `cosmos/gov/v1/params/${params.paramsType}`;
    return QueryParamsResponse.fromJSON(await this.req.get<QueryParamsResponse>(endpoint));
  };
  /* Deposit queries single deposit information based proposalID, depositAddr. */
  deposit = async (params: QueryDepositRequest): Promise<QueryDepositResponse> => {
    const endpoint = `cosmos/gov/v1/proposals/${params.proposalId}/deposits/${params.depositor}`;
    return QueryDepositResponse.fromJSON(await this.req.get<QueryDepositResponse>(endpoint));
  };
  /* Deposits queries all deposits of a single proposal. */
  deposits = async (params: QueryDepositsRequest): Promise<QueryDepositsResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/gov/v1/proposals/${params.proposalId}/deposits`;
    return QueryDepositsResponse.fromJSON(await this.req.get<QueryDepositsResponse>(endpoint, options));
  };
  /* TallyResult queries the tally of a proposal vote. */
  tallyResult = async (params: QueryTallyResultRequest): Promise<QueryTallyResultResponse> => {
    const endpoint = `cosmos/gov/v1/proposals/${params.proposalId}/tally`;
    return QueryTallyResultResponse.fromJSON(await this.req.get<QueryTallyResultResponse>(endpoint));
  };
}