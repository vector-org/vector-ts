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
import * as _153 from "./catdrop/v1/tx.amino";
import * as _154 from "./catdrop/v1/tx.registry";
import * as _155 from "./alloc/v1/query.lcd";
import * as _156 from "./catdrop/v1/query.lcd";
import * as _157 from "./mint/v1/query.lcd";
import * as _158 from "./alloc/v1/query.rpc.Query";
import * as _159 from "./catdrop/v1/query.rpc.Query";
import * as _160 from "./mint/v1/query.rpc.Query";
import * as _161 from "./catdrop/v1/tx.rpc.msg";
import * as _223 from "./lcd";
import * as _224 from "./rpc.query";
import * as _225 from "./rpc.tx";
export namespace coolcat {
  export namespace alloc {
    export const v1 = {
      ..._1,
      ..._2,
      ..._3,
      ..._155,
      ..._158
    };
  }
  export namespace catdrop {
    export const v1 = {
      ..._4,
      ..._5,
      ..._6,
      ..._7,
      ..._8,
      ..._153,
      ..._154,
      ..._156,
      ..._159,
      ..._161
    };
  }
  export namespace mint {
    export const v1 = {
      ..._9,
      ..._10,
      ..._11,
      ..._157,
      ..._160
    };
  }
  export const ClientFactory = {
    ..._223,
    ..._224,
    ..._225
  };
}