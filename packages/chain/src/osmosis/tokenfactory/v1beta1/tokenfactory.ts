import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial } from "../../../helpers";
/**
 * DenomAuthorityMetadata specifies metadata for addresses that have specific
 * capabilities over a token factory denom. Right now there is only one Admin
 * permission, but is planned to be extended to the future.
 */
export interface DenomAuthorityMetadata {
  /** Can be empty for no admin, or a valid stargaze address */
  admin: string;
}
/** Params defines the parameters for the tokenfactory module. */
export interface Params {
  /**
   * DenomCreationFee defines the fee to be charged on the creation of a new
   * denom. The fee is drawn from the MsgCreateDenom's sender account, and
   * transferred to the community pool.
   */
  denomCreationFee: Coin[];
  /**
   * DenomCreationGasConsume defines the gas cost for creating a new denom.
   * This is intended as a spam deterrence mechanism.
   * 
   * See: https://github.com/CosmWasm/token-factory/issues/11
   */
  denomCreationGasConsume?: bigint;
}
function createBaseDenomAuthorityMetadata(): DenomAuthorityMetadata {
  return {
    admin: ""
  };
}
export const DenomAuthorityMetadata = {
  encode(message: DenomAuthorityMetadata, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DenomAuthorityMetadata {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDenomAuthorityMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DenomAuthorityMetadata {
    return {
      admin: isSet(object.admin) ? String(object.admin) : ""
    };
  },
  toJSON(message: DenomAuthorityMetadata): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    return obj;
  },
  fromPartial(object: DeepPartial<DenomAuthorityMetadata>): DenomAuthorityMetadata {
    const message = createBaseDenomAuthorityMetadata();
    message.admin = object.admin ?? "";
    return message;
  }
};
function createBaseParams(): Params {
  return {
    denomCreationFee: [],
    denomCreationGasConsume: undefined
  };
}
export const Params = {
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.denomCreationFee) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.denomCreationGasConsume !== undefined) {
      writer.uint32(16).uint64(message.denomCreationGasConsume);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denomCreationFee.push(Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.denomCreationGasConsume = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Params {
    return {
      denomCreationFee: Array.isArray(object?.denomCreationFee) ? object.denomCreationFee.map((e: any) => Coin.fromJSON(e)) : [],
      denomCreationGasConsume: isSet(object.denomCreationGasConsume) ? BigInt(object.denomCreationGasConsume.toString()) : undefined
    };
  },
  toJSON(message: Params): unknown {
    const obj: any = {};
    if (message.denomCreationFee) {
      obj.denomCreationFee = message.denomCreationFee.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.denomCreationFee = [];
    }
    message.denomCreationGasConsume !== undefined && (obj.denomCreationGasConsume = (message.denomCreationGasConsume || undefined).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.denomCreationFee = object.denomCreationFee?.map(e => Coin.fromPartial(e)) || [];
    message.denomCreationGasConsume = object.denomCreationGasConsume !== undefined && object.denomCreationGasConsume !== null ? BigInt(object.denomCreationGasConsume.toString()) : undefined;
    return message;
  }
};