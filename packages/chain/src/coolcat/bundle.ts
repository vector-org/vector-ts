import * as _1 from "./alloc/v1/genesis";
import * as _2 from "./alloc/v1/params";
import * as _3 from "./alloc/v1/query";
import * as _4 from "./catdrop/v1/claim_record";
import * as _5 from "./catdrop/v1/genesis";
import * as _6 from "./catdrop/v1/hook_record";
import * as _7 from "./catdrop/v1/params";
import * as _8 from "./catdrop/v1/query";
import * as _9 from "./catdrop/v1/tx";
import * as _10 from "./mint/v1/genesis";
import * as _11 from "./mint/v1/mint";
import * as _12 from "./mint/v1/query";
import * as _165 from "./catdrop/v1/tx.amino";
import * as _166 from "./catdrop/v1/tx.registry";
import * as _167 from "./alloc/v1/query.lcd";
import * as _168 from "./catdrop/v1/query.lcd";
import * as _169 from "./mint/v1/query.lcd";
import * as _170 from "./alloc/v1/query.rpc.Query";
import * as _171 from "./catdrop/v1/query.rpc.Query";
import * as _172 from "./mint/v1/query.rpc.Query";
import * as _173 from "./catdrop/v1/tx.rpc.msg";
import * as _245 from "./lcd";
import * as _246 from "./rpc.query";
import * as _247 from "./rpc.tx";
export namespace coolcat {
  export namespace alloc {
    export const v1 = {
      ..._1,
      ..._2,
      ..._3,
      ..._167,
      ..._170
    };
  }
  export namespace catdrop {
    export const v1 = {
      ..._4,
      ..._5,
      ..._6,
      ..._7,
      ..._8,
      ..._9,
      ..._165,
      ..._166,
      ..._168,
      ..._171,
      ..._173
    };
  }
  export namespace mint {
    export const v1 = {
      ..._10,
      ..._11,
      ..._12,
      ..._169,
      ..._172
    };
  }
  export const ClientFactory = {
    ..._245,
    ..._246,
    ..._247
  };
}