import { Any } from "../../../google/protobuf/any";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * ContractExecutionAuthorization defines authorization for wasm execute.
 * Since: wasmd 0.30
 */
export interface ContractExecutionAuthorization {
    /** Grants for contract executions */
    grants: ContractGrant[];
}
/**
 * ContractMigrationAuthorization defines authorization for wasm contract
 * migration. Since: wasmd 0.30
 */
export interface ContractMigrationAuthorization {
    /** Grants for contract migrations */
    grants: ContractGrant[];
}
/**
 * ContractGrant a granted permission for a single contract
 * Since: wasmd 0.30
 */
export interface ContractGrant {
    /** Contract is the bech32 address of the smart contract */
    contract: string;
    /**
     * Limit defines execution limits that are enforced and updated when the grant
     * is applied. When the limit lapsed the grant is removed.
     */
    limit: MaxCallsLimit | MaxFundsLimit | CombinedLimit | Any | undefined;
    /**
     * Filter define more fine-grained control on the message payload passed
     * to the contract in the operation. When no filter applies on execution, the
     * operation is prohibited.
     */
    filter: AllowAllMessagesFilter | AcceptedMessageKeysFilter | AcceptedMessagesFilter | Any | undefined;
}
/**
 * MaxCallsLimit limited number of calls to the contract. No funds transferable.
 * Since: wasmd 0.30
 */
export interface MaxCallsLimit {
    /** Remaining number that is decremented on each execution */
    remaining: bigint;
}
/**
 * MaxFundsLimit defines the maximal amounts that can be sent to the contract.
 * Since: wasmd 0.30
 */
export interface MaxFundsLimit {
    /** Amounts is the maximal amount of tokens transferable to the contract. */
    amounts: Coin[];
}
/**
 * CombinedLimit defines the maximal amounts that can be sent to a contract and
 * the maximal number of calls executable. Both need to remain >0 to be valid.
 * Since: wasmd 0.30
 */
export interface CombinedLimit {
    /** Remaining number that is decremented on each execution */
    callsRemaining: bigint;
    /** Amounts is the maximal amount of tokens transferable to the contract. */
    amounts: Coin[];
}
/**
 * AllowAllMessagesFilter is a wildcard to allow any type of contract payload
 * message.
 * Since: wasmd 0.30
 */
export interface AllowAllMessagesFilter {
}
/**
 * AcceptedMessageKeysFilter accept only the specific contract message keys in
 * the json object to be executed.
 * Since: wasmd 0.30
 */
export interface AcceptedMessageKeysFilter {
    /** Messages is the list of unique keys */
    keys: string[];
}
/**
 * AcceptedMessagesFilter accept only the specific raw contract messages to be
 * executed.
 * Since: wasmd 0.30
 */
export interface AcceptedMessagesFilter {
    /** Messages is the list of raw contract messages */
    messages: Uint8Array[];
}
export declare const ContractExecutionAuthorization: {
    encode(message: ContractExecutionAuthorization, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ContractExecutionAuthorization;
    fromJSON(object: any): ContractExecutionAuthorization;
    toJSON(message: ContractExecutionAuthorization): unknown;
    fromPartial(object: DeepPartial<ContractExecutionAuthorization>): ContractExecutionAuthorization;
};
export declare const ContractMigrationAuthorization: {
    encode(message: ContractMigrationAuthorization, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ContractMigrationAuthorization;
    fromJSON(object: any): ContractMigrationAuthorization;
    toJSON(message: ContractMigrationAuthorization): unknown;
    fromPartial(object: DeepPartial<ContractMigrationAuthorization>): ContractMigrationAuthorization;
};
export declare const ContractGrant: {
    encode(message: ContractGrant, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ContractGrant;
    fromJSON(object: any): ContractGrant;
    toJSON(message: ContractGrant): unknown;
    fromPartial(object: DeepPartial<ContractGrant>): ContractGrant;
};
export declare const MaxCallsLimit: {
    encode(message: MaxCallsLimit, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MaxCallsLimit;
    fromJSON(object: any): MaxCallsLimit;
    toJSON(message: MaxCallsLimit): unknown;
    fromPartial(object: DeepPartial<MaxCallsLimit>): MaxCallsLimit;
};
export declare const MaxFundsLimit: {
    encode(message: MaxFundsLimit, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MaxFundsLimit;
    fromJSON(object: any): MaxFundsLimit;
    toJSON(message: MaxFundsLimit): unknown;
    fromPartial(object: DeepPartial<MaxFundsLimit>): MaxFundsLimit;
};
export declare const CombinedLimit: {
    encode(message: CombinedLimit, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): CombinedLimit;
    fromJSON(object: any): CombinedLimit;
    toJSON(message: CombinedLimit): unknown;
    fromPartial(object: DeepPartial<CombinedLimit>): CombinedLimit;
};
export declare const AllowAllMessagesFilter: {
    encode(_: AllowAllMessagesFilter, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): AllowAllMessagesFilter;
    fromJSON(_: any): AllowAllMessagesFilter;
    toJSON(_: AllowAllMessagesFilter): unknown;
    fromPartial(_: DeepPartial<AllowAllMessagesFilter>): AllowAllMessagesFilter;
};
export declare const AcceptedMessageKeysFilter: {
    encode(message: AcceptedMessageKeysFilter, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): AcceptedMessageKeysFilter;
    fromJSON(object: any): AcceptedMessageKeysFilter;
    toJSON(message: AcceptedMessageKeysFilter): unknown;
    fromPartial(object: DeepPartial<AcceptedMessageKeysFilter>): AcceptedMessageKeysFilter;
};
export declare const AcceptedMessagesFilter: {
    encode(message: AcceptedMessagesFilter, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): AcceptedMessagesFilter;
    fromJSON(object: any): AcceptedMessagesFilter;
    toJSON(message: AcceptedMessagesFilter): unknown;
    fromPartial(object: DeepPartial<AcceptedMessagesFilter>): AcceptedMessagesFilter;
};
export declare const Cosmwasm_wasmv1ContractAuthzLimitX_InterfaceDecoder: (input: BinaryReader | Uint8Array) => MaxCallsLimit | MaxFundsLimit | CombinedLimit | Any;
export declare const Cosmwasm_wasmv1ContractAuthzFilterX_InterfaceDecoder: (input: BinaryReader | Uint8Array) => AllowAllMessagesFilter | AcceptedMessageKeysFilter | AcceptedMessagesFilter | Any;
