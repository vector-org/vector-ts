import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/** Provides one of the 4 categories of the initial catdrop */
export declare enum Action {
    /** ACTION_VOTE_UNSPECIFIED - Check if this address voted on a gov proposal */
    ACTION_VOTE_UNSPECIFIED = 0,
    /** ACTION_STAKE - Check if this address staked some CoolCat */
    ACTION_STAKE = 1,
    /** ACTION_CREATEPROFILE - Check if this address created a on-chain profile */
    ACTION_CREATEPROFILE = 2,
    /** ACTION_USECLOWDER - Check if this address interacted with clowders in any way */
    ACTION_USECLOWDER = 3,
    UNRECOGNIZED = -1
}
export declare function actionFromJSON(object: any): Action;
export declare function actionToJSON(object: Action): string;
/** Shows how many actions this user has completed. */
export interface ClaimRecord {
    /** address of claim user */
    address: string;
    /** total initial claimable amount for the user */
    initialClaimableAmount: Coin[];
    /**
     * true if action is completed
     * index of bool in array refers to action enum #
     */
    actionCompleted: boolean[];
}
export declare const ClaimRecord: {
    encode(message: ClaimRecord, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ClaimRecord;
    fromJSON(object: any): ClaimRecord;
    toJSON(message: ClaimRecord): unknown;
    fromPartial(object: DeepPartial<ClaimRecord>): ClaimRecord;
};
