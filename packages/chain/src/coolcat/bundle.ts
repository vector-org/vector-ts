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
import * as _147 from "./catdrop/v1/tx.amino";
import * as _148 from "./catdrop/v1/tx.registry";
import * as _149 from "./alloc/v1/query.lcd";
import * as _150 from "./catdrop/v1/query.lcd";
import * as _151 from "./mint/v1/query.lcd";
import * as _152 from "./alloc/v1/query.rpc.Query";
import * as _153 from "./catdrop/v1/query.rpc.Query";
import * as _154 from "./mint/v1/query.rpc.Query";
import * as _155 from "./catdrop/v1/tx.rpc.msg";
import * as _210 from "./lcd";
import * as _211 from "./rpc.query";
import * as _212 from "./rpc.tx";
export namespace coolcat {
  export namespace alloc {
    export const v1 = {
      ..._1,
      ..._2,
      ..._3,
      ..._149,
      ..._152
    };
  }
  export namespace catdrop {
    export const v1 = {
      ..._4,
      ..._5,
      ..._6,
      ..._7,
      ..._8,
      ..._147,
      ..._148,
      ..._150,
      ..._153,
      ..._155
    };
  }
  export namespace mint {
    export const v1 = {
      ..._9,
      ..._10,
      ..._11,
      ..._151,
      ..._154
    };
  }
  export const ClientFactory = {
    ..._210,
    ..._211,
    ..._212
  };
}