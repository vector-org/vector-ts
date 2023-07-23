import * as _150 from "./tokenfactory/v1beta1/genesis";
import * as _151 from "./tokenfactory/v1beta1/query";
import * as _152 from "./tokenfactory/v1beta1/tokenfactory";
import * as _153 from "./tokenfactory/v1beta1/tx";
import * as _240 from "./tokenfactory/v1beta1/tx.amino";
import * as _241 from "./tokenfactory/v1beta1/tx.registry";
import * as _242 from "./tokenfactory/v1beta1/query.lcd";
import * as _243 from "./tokenfactory/v1beta1/query.rpc.Query";
import * as _244 from "./tokenfactory/v1beta1/tx.rpc.msg";
import * as _254 from "./lcd";
import * as _255 from "./rpc.query";
import * as _256 from "./rpc.tx";
export namespace osmosis {
  export namespace tokenfactory {
    export const v1beta1 = {
      ..._150,
      ..._151,
      ..._152,
      ..._153,
      ..._240,
      ..._241,
      ..._242,
      ..._243,
      ..._244
    };
  }
  export const ClientFactory = {
    ..._254,
    ..._255,
    ..._256
  };
}