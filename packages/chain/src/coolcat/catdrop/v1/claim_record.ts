import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial } from "../../../helpers";
/** Provides one of the 4 categories of the initial catdrop */
export enum Action {
  /** ACTION_VOTE_UNSPECIFIED - Check if this address voted on a gov proposal */
  ACTION_VOTE_UNSPECIFIED = 0,
  /** ACTION_STAKE - Check if this address staked some CoolCat */
  ACTION_STAKE = 1,
  /** ACTION_CREATEPROFILE - Check if this address created a on-chain profile */
  ACTION_CREATEPROFILE = 2,
  /** ACTION_USECLOWDER - Check if this address interacted with clowders in any way */
  ACTION_USECLOWDER = 3,
  UNRECOGNIZED = -1,
}
export function actionFromJSON(object: any): Action {
  switch (object) {
    case 0:
    case "ACTION_VOTE_UNSPECIFIED":
      return Action.ACTION_VOTE_UNSPECIFIED;
    case 1:
    case "ACTION_STAKE":
      return Action.ACTION_STAKE;
    case 2:
    case "ACTION_CREATEPROFILE":
      return Action.ACTION_CREATEPROFILE;
    case 3:
    case "ACTION_USECLOWDER":
      return Action.ACTION_USECLOWDER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Action.UNRECOGNIZED;
  }
}
export function actionToJSON(object: Action): string {
  switch (object) {
    case Action.ACTION_VOTE_UNSPECIFIED:
      return "ACTION_VOTE_UNSPECIFIED";
    case Action.ACTION_STAKE:
      return "ACTION_STAKE";
    case Action.ACTION_CREATEPROFILE:
      return "ACTION_CREATEPROFILE";
    case Action.ACTION_USECLOWDER:
      return "ACTION_USECLOWDER";
    case Action.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
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
function createBaseClaimRecord(): ClaimRecord {
  return {
    address: "",
    initialClaimableAmount: [],
    actionCompleted: []
  };
}
export const ClaimRecord = {
  encode(message: ClaimRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    for (const v of message.initialClaimableAmount) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    writer.uint32(26).fork();
    for (const v of message.actionCompleted) {
      writer.bool(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ClaimRecord {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClaimRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.initialClaimableAmount.push(Coin.decode(reader, reader.uint32()));
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.actionCompleted.push(reader.bool());
            }
          } else {
            message.actionCompleted.push(reader.bool());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ClaimRecord {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      initialClaimableAmount: Array.isArray(object?.initialClaimableAmount) ? object.initialClaimableAmount.map((e: any) => Coin.fromJSON(e)) : [],
      actionCompleted: Array.isArray(object?.actionCompleted) ? object.actionCompleted.map((e: any) => Boolean(e)) : []
    };
  },
  toJSON(message: ClaimRecord): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    if (message.initialClaimableAmount) {
      obj.initialClaimableAmount = message.initialClaimableAmount.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.initialClaimableAmount = [];
    }
    if (message.actionCompleted) {
      obj.actionCompleted = message.actionCompleted.map(e => e);
    } else {
      obj.actionCompleted = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<ClaimRecord>): ClaimRecord {
    const message = createBaseClaimRecord();
    message.address = object.address ?? "";
    message.initialClaimableAmount = object.initialClaimableAmount?.map(e => Coin.fromPartial(e)) || [];
    message.actionCompleted = object.actionCompleted?.map(e => e) || [];
    return message;
  }
};