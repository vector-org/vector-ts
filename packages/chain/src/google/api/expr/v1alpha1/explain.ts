import { Value } from "./value";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { DeepPartial, isSet } from "../../../../helpers";
/**
 * Values of intermediate expressions produced when evaluating expression.
 * Deprecated, use `EvalState` instead.
 */
/** @deprecated */
export interface Explain {
  /**
   * All of the observed values.
   * 
   * The field value_index is an index in the values list.
   * Separating values from steps is needed to remove redundant values.
   */
  values: Value[];
  /**
   * List of steps.
   * 
   * Repeated evaluations of the same expression generate new ExprStep
   * instances. The order of such ExprStep instances matches the order of
   * elements returned by Comprehension.iter_range.
   */
  exprSteps: Explain_ExprStep[];
}
/** ID and value index of one step. */
export interface Explain_ExprStep {
  /** ID of corresponding Expr node. */
  id: bigint;
  /** Index of the value in the values list. */
  valueIndex: number;
}
function createBaseExplain(): Explain {
  return {
    values: [],
    exprSteps: []
  };
}
export const Explain = {
  encode(message: Explain, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.values) {
      Value.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.exprSteps) {
      Explain_ExprStep.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Explain {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExplain();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.values.push(Value.decode(reader, reader.uint32()));
          break;
        case 2:
          message.exprSteps.push(Explain_ExprStep.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Explain {
    return {
      values: Array.isArray(object?.values) ? object.values.map((e: any) => Value.fromJSON(e)) : [],
      exprSteps: Array.isArray(object?.exprSteps) ? object.exprSteps.map((e: any) => Explain_ExprStep.fromJSON(e)) : []
    };
  },
  toJSON(message: Explain): unknown {
    const obj: any = {};
    if (message.values) {
      obj.values = message.values.map(e => e ? Value.toJSON(e) : undefined);
    } else {
      obj.values = [];
    }
    if (message.exprSteps) {
      obj.exprSteps = message.exprSteps.map(e => e ? Explain_ExprStep.toJSON(e) : undefined);
    } else {
      obj.exprSteps = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<Explain>): Explain {
    const message = createBaseExplain();
    message.values = object.values?.map(e => Value.fromPartial(e)) || [];
    message.exprSteps = object.exprSteps?.map(e => Explain_ExprStep.fromPartial(e)) || [];
    return message;
  }
};
function createBaseExplain_ExprStep(): Explain_ExprStep {
  return {
    id: BigInt(0),
    valueIndex: 0
  };
}
export const Explain_ExprStep = {
  encode(message: Explain_ExprStep, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).int64(message.id);
    }
    if (message.valueIndex !== 0) {
      writer.uint32(16).int32(message.valueIndex);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Explain_ExprStep {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExplain_ExprStep();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.int64();
          break;
        case 2:
          message.valueIndex = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Explain_ExprStep {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      valueIndex: isSet(object.valueIndex) ? Number(object.valueIndex) : 0
    };
  },
  toJSON(message: Explain_ExprStep): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
    message.valueIndex !== undefined && (obj.valueIndex = Math.round(message.valueIndex));
    return obj;
  },
  fromPartial(object: DeepPartial<Explain_ExprStep>): Explain_ExprStep {
    const message = createBaseExplain_ExprStep();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.valueIndex = object.valueIndex ?? 0;
    return message;
  }
};