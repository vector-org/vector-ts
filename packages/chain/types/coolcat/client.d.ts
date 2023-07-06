import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
export declare const coolcatAminoConverters: {
    "/coolcat.catdrop.v1.MsgClaimFor": {
        aminoType: string;
        toAmino: ({ sender, address, action }: import("./catdrop/v1/tx").MsgClaimFor) => {
            sender: string;
            address: string;
            action: number;
        };
        fromAmino: ({ sender, address, action }: {
            sender: string;
            address: string;
            action: number;
        }) => import("./catdrop/v1/tx").MsgClaimFor;
    };
};
export declare const coolcatProtoRegistry: ReadonlyArray<[string, GeneratedType]>;
export declare const getSigningCoolcatClientOptions: ({ defaultTypes }?: {
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
    registry: Registry;
    aminoTypes: AminoTypes;
};
export declare const getSigningCoolcatClient: ({ rpcEndpoint, signer, defaultTypes }: {
    rpcEndpoint: string | HttpEndpoint;
    signer: OfflineSigner;
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => Promise<SigningStargateClient>;
