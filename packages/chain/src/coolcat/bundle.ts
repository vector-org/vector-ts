import * as _1 from "./alloc/v1/genesis";
import * as _2 from "./alloc/v1/params";
import * as _3 from "./alloc/v1/query";
import * as _4 from "./catdrop/v1/claim_record";
import * as _5 from "./catdrop/v1/genesis";
import * as _6 from "./catdrop/v1/params";
import * as _7 from "./catdrop/v1/query";
import * as _8 from "./catdrop/v1/tx";
import * as _9 from "./mint/v1/genesis";
import * as _10 from "./mint/v1/mint";
import * as _11 from "./mint/v1/query";
import * as _160 from "./catdrop/v1/tx.amino";
import * as _161 from "./catdrop/v1/tx.registry";
import * as _162 from "./alloc/v1/query.lcd";
import * as _163 from "./catdrop/v1/query.lcd";
import * as _164 from "./mint/v1/query.lcd";
import * as _165 from "./alloc/v1/query.rpc.Query";
import * as _166 from "./catdrop/v1/query.rpc.Query";
import * as _167 from "./mint/v1/query.rpc.Query";
import * as _168 from "./catdrop/v1/tx.rpc.msg";
import * as _235 from "./lcd";
import * as _236 from "./rpc.query";
import * as _237 from "./rpc.tx";
export namespace coolcat {
  export namespace alloc {
    export const v1 = {
      ..._1,
      ..._2,
      ..._3,
      ..._162,
      ..._165
    };
  }
  export namespace catdrop {
    export const v1 = {
      ..._4,
      ..._5,
      ..._6,
      ..._7,
      ..._8,
      ..._160,
      ..._161,
      ..._163,
      ..._166,
      ..._168
    };
  }
  export namespace mint {
    export const v1 = {
      ..._9,
      ..._10,
      ..._11,
      ..._164,
      ..._167
    };
  }
  export const ClientFactory = {
    ..._235,
    ..._236,
    ..._237
  };
}