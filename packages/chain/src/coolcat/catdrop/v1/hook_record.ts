import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial } from "../../../helpers";
/** Shows how many hooks this user has triggered. */
export interface HookRecord {
  /** address of claim user */
  address: string;
  /**
   * true if action is completed
   * index of bool in array refers to action enum #
   */
  hookTriggered: boolean[];
}
function createBaseHookRecord(): HookRecord {
  return {
    address: "",
    hookTriggered: []
  };
}
export const HookRecord = {
  encode(message: HookRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    writer.uint32(18).fork();
    for (const v of message.hookTriggered) {
      writer.bool(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): HookRecord {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHookRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.hookTriggered.push(reader.bool());
            }
          } else {
            message.hookTriggered.push(reader.bool());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): HookRecord {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      hookTriggered: Array.isArray(object?.hookTriggered) ? object.hookTriggered.map((e: any) => Boolean(e)) : []
    };
  },
  toJSON(message: HookRecord): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    if (message.hookTriggered) {
      obj.hookTriggered = message.hookTriggered.map(e => e);
    } else {
      obj.hookTriggered = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<HookRecord>): HookRecord {
    const message = createBaseHookRecord();
    message.address = object.address ?? "";
    message.hookTriggered = object.hookTriggered?.map(e => e) || [];
    return message;
  }
};