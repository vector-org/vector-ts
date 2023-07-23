import { Action, actionFromJSON, actionToJSON } from "./claim_record";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial } from "../../../helpers";
/** MsgType to claim a catdrop quest reward */
export interface MsgClaimFor {
  sender: string;
  action: Action;
}
/** Msg response for claiming a catdrop quest reward */
export interface MsgClaimForResponse {
  address: string;
  action: Action;
  /** total initial claimable amount for the user */
  claimedAmount: Coin[];
}
function createBaseMsgClaimFor(): MsgClaimFor {
  return {
    sender: "",
    action: 0
  };
}
export const MsgClaimFor = {
  encode(message: MsgClaimFor, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.action !== 0) {
      writer.uint32(24).int32(message.action);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgClaimFor {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimFor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 3:
          message.action = (reader.int32() as any);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgClaimFor {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      action: isSet(object.action) ? actionFromJSON(object.action) : -1
    };
  },
  toJSON(message: MsgClaimFor): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.action !== undefined && (obj.action = actionToJSON(message.action));
    return obj;
  },
  fromPartial(object: DeepPartial<MsgClaimFor>): MsgClaimFor {
    const message = createBaseMsgClaimFor();
    message.sender = object.sender ?? "";
    message.action = object.action ?? 0;
    return message;
  }
};
function createBaseMsgClaimForResponse(): MsgClaimForResponse {
  return {
    address: "",
    action: 0,
    claimedAmount: []
  };
}
export const MsgClaimForResponse = {
  encode(message: MsgClaimForResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.action !== 0) {
      writer.uint32(16).int32(message.action);
    }
    for (const v of message.claimedAmount) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgClaimForResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimForResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.action = (reader.int32() as any);
          break;
        case 3:
          message.claimedAmount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgClaimForResponse {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      action: isSet(object.action) ? actionFromJSON(object.action) : -1,
      claimedAmount: Array.isArray(object?.claimedAmount) ? object.claimedAmount.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: MsgClaimForResponse): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.action !== undefined && (obj.action = actionToJSON(message.action));
    if (message.claimedAmount) {
      obj.claimedAmount = message.claimedAmount.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.claimedAmount = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<MsgClaimForResponse>): MsgClaimForResponse {
    const message = createBaseMsgClaimForResponse();
    message.address = object.address ?? "";
    message.action = object.action ?? 0;
    message.claimedAmount = object.claimedAmount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }
};