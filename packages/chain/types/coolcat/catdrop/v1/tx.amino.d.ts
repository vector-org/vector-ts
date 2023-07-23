import { AminoMsg } from "@cosmjs/amino";
import { MsgClaimFor } from "./tx";
export interface MsgClaimForAminoType extends AminoMsg {
    type: "/coolcat.catdrop.v1.MsgClaimFor";
    value: {
        sender: string;
        action: number;
    };
}
export declare const AminoConverter: {
    "/coolcat.catdrop.v1.MsgClaimFor": {
        aminoType: string;
        toAmino: ({ sender, action }: MsgClaimFor) => MsgClaimForAminoType["value"];
        fromAmino: ({ sender, action }: MsgClaimForAminoType["value"]) => MsgClaimFor;
    };
};
