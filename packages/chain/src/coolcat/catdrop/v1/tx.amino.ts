import { actionFromJSON } from "./claim_record";
import { AminoMsg } from "@cosmjs/amino";
import { MsgClaimFor } from "./tx";
export interface MsgClaimForAminoType extends AminoMsg {
  type: "/coolcat.catdrop.v1.MsgClaimFor";
  value: {
    sender: string;
    action: number;
  };
}
export const AminoConverter = {
  "/coolcat.catdrop.v1.MsgClaimFor": {
    aminoType: "/coolcat.catdrop.v1.MsgClaimFor",
    toAmino: ({
      sender,
      action
    }: MsgClaimFor): MsgClaimForAminoType["value"] => {
      return {
        sender,
        action
      };
    },
    fromAmino: ({
      sender,
      action
    }: MsgClaimForAminoType["value"]): MsgClaimFor => {
      return {
        sender,
        action: actionFromJSON(action)
      };
    }
  }
};