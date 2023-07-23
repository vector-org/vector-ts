import * as _102 from "./wasm/v1/authz";
import * as _103 from "./wasm/v1/genesis";
import * as _104 from "./wasm/v1/ibc";
import * as _105 from "./wasm/v1/proposal";
import * as _106 from "./wasm/v1/query";
import * as _107 from "./wasm/v1/tx";
import * as _108 from "./wasm/v1/types";
import * as _235 from "./wasm/v1/tx.amino";
import * as _236 from "./wasm/v1/tx.registry";
import * as _237 from "./wasm/v1/query.lcd";
import * as _238 from "./wasm/v1/query.rpc.Query";
import * as _239 from "./wasm/v1/tx.rpc.msg";
import * as _251 from "./lcd";
import * as _252 from "./rpc.query";
import * as _253 from "./rpc.tx";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = {
      ..._102,
      ..._103,
      ..._104,
      ..._105,
      ..._106,
      ..._107,
      ..._108,
      ..._235,
      ..._236,
      ..._237,
      ..._238,
      ..._239
    };
  }
  export const ClientFactory = {
    ..._251,
    ..._252,
    ..._253
  };
}