import * as _101 from "./wasm/v1/authz";
import * as _102 from "./wasm/v1/genesis";
import * as _103 from "./wasm/v1/ibc";
import * as _104 from "./wasm/v1/proposal";
import * as _105 from "./wasm/v1/query";
import * as _106 from "./wasm/v1/tx";
import * as _107 from "./wasm/v1/types";
import * as _230 from "./wasm/v1/tx.amino";
import * as _231 from "./wasm/v1/tx.registry";
import * as _232 from "./wasm/v1/query.lcd";
import * as _233 from "./wasm/v1/query.rpc.Query";
import * as _234 from "./wasm/v1/tx.rpc.msg";
import * as _241 from "./lcd";
import * as _242 from "./rpc.query";
import * as _243 from "./rpc.tx";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = {
      ..._101,
      ..._102,
      ..._103,
      ..._104,
      ..._105,
      ..._106,
      ..._107,
      ..._230,
      ..._231,
      ..._232,
      ..._233,
      ..._234
    };
  }
  export const ClientFactory = {
    ..._241,
    ..._242,
    ..._243
  };
}