import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as coolcatCatdropV1TxRegistry from "./catdrop/v1/tx.registry";
import * as coolcatCatdropV1TxAmino from "./catdrop/v1/tx.amino";
export const coolcatAminoConverters = {
  ...coolcatCatdropV1TxAmino.AminoConverter
};
export const coolcatProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...coolcatCatdropV1TxRegistry.registry];
export const getSigningCoolcatClientOptions = ({
  defaultTypes = defaultRegistryTypes
}: {
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
} = {}): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...defaultTypes, ...coolcatProtoRegistry]);
  const aminoTypes = new AminoTypes({
    ...coolcatAminoConverters
  });
  return {
    registry,
    aminoTypes
  };
};
export const getSigningCoolcatClient = async ({
  rpcEndpoint,
  signer,
  defaultTypes = defaultRegistryTypes
}: {
  rpcEndpoint: string | HttpEndpoint;
  signer: OfflineSigner;
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
  const {
    registry,
    aminoTypes
  } = getSigningCoolcatClientOptions({
    defaultTypes
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry: (registry as any),
    aminoTypes
  });
  return client;
};