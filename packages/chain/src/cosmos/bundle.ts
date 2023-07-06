import * as _13 from "./app/runtime/v1alpha1/module";
import * as _14 from "./auth/module/v1/module";
import * as _15 from "./authz/module/v1/module";
import * as _16 from "./authz/v1beta1/authz";
import * as _17 from "./authz/v1beta1/event";
import * as _18 from "./authz/v1beta1/genesis";
import * as _19 from "./authz/v1beta1/query";
import * as _20 from "./authz/v1beta1/tx";
import * as _21 from "./autocli/v1/options";
import * as _22 from "./autocli/v1/query";
import * as _23 from "./bank/module/v1/module";
import * as _24 from "./bank/v1beta1/authz";
import * as _25 from "./bank/v1beta1/bank";
import * as _26 from "./bank/v1beta1/genesis";
import * as _27 from "./bank/v1beta1/query";
import * as _28 from "./bank/v1beta1/tx";
import * as _29 from "./base/abci/v1beta1/abci";
import * as _30 from "./base/node/v1beta1/query";
import * as _31 from "./base/query/v1beta1/pagination";
import * as _32 from "./base/reflection/v2alpha1/reflection";
import * as _33 from "./base/v1beta1/coin";
import * as _34 from "./capability/module/v1/module";
import * as _35 from "./consensus/module/v1/module";
import * as _36 from "./consensus/v1/query";
import * as _37 from "./consensus/v1/tx";
import * as _38 from "./crisis/module/v1/module";
import * as _39 from "./crypto/ed25519/keys";
import * as _40 from "./crypto/hd/v1/hd";
import * as _41 from "./crypto/keyring/v1/record";
import * as _42 from "./crypto/multisig/keys";
import * as _43 from "./crypto/secp256k1/keys";
import * as _44 from "./crypto/secp256r1/keys";
import * as _45 from "./distribution/module/v1/module";
import * as _46 from "./distribution/v1beta1/distribution";
import * as _47 from "./distribution/v1beta1/genesis";
import * as _48 from "./distribution/v1beta1/query";
import * as _49 from "./distribution/v1beta1/tx";
import * as _50 from "./evidence/module/v1/module";
import * as _51 from "./feegrant/module/v1/module";
import * as _52 from "./feegrant/v1beta1/feegrant";
import * as _53 from "./feegrant/v1beta1/genesis";
import * as _54 from "./feegrant/v1beta1/query";
import * as _55 from "./feegrant/v1beta1/tx";
import * as _56 from "./genutil/module/v1/module";
import * as _57 from "./gov/module/v1/module";
import * as _58 from "./gov/v1/genesis";
import * as _59 from "./gov/v1/gov";
import * as _60 from "./gov/v1/query";
import * as _61 from "./gov/v1/tx";
import * as _62 from "./gov/v1beta1/genesis";
import * as _63 from "./gov/v1beta1/gov";
import * as _64 from "./gov/v1beta1/query";
import * as _65 from "./gov/v1beta1/tx";
import * as _66 from "./group/module/v1/module";
import * as _67 from "./mint/module/v1/module";
import * as _68 from "./nft/module/v1/module";
import * as _69 from "./nft/v1beta1/event";
import * as _70 from "./nft/v1beta1/genesis";
import * as _71 from "./nft/v1beta1/nft";
import * as _72 from "./nft/v1beta1/query";
import * as _73 from "./nft/v1beta1/tx";
import * as _74 from "./orm/module/v1alpha1/module";
import * as _75 from "./orm/query/v1alpha1/query";
import * as _76 from "./params/module/v1/module";
import * as _77 from "./query/v1/query";
import * as _78 from "./reflection/v1/reflection";
import * as _79 from "./slashing/module/v1/module";
import * as _80 from "./staking/module/v1/module";
import * as _81 from "./staking/v1beta1/authz";
import * as _82 from "./staking/v1beta1/genesis";
import * as _83 from "./staking/v1beta1/query";
import * as _84 from "./staking/v1beta1/staking";
import * as _85 from "./staking/v1beta1/tx";
import * as _86 from "./tx/config/v1/config";
import * as _87 from "./tx/signing/v1beta1/signing";
import * as _88 from "./tx/v1beta1/service";
import * as _89 from "./tx/v1beta1/tx";
import * as _90 from "./upgrade/module/v1/module";
import * as _91 from "./upgrade/v1beta1/query";
import * as _92 from "./upgrade/v1beta1/tx";
import * as _93 from "./upgrade/v1beta1/upgrade";
import * as _94 from "./vesting/module/v1/module";
import * as _156 from "./bank/v1beta1/tx.amino";
import * as _157 from "./consensus/v1/tx.amino";
import * as _158 from "./distribution/v1beta1/tx.amino";
import * as _159 from "./feegrant/v1beta1/tx.amino";
import * as _160 from "./gov/v1/tx.amino";
import * as _161 from "./gov/v1beta1/tx.amino";
import * as _162 from "./nft/v1beta1/tx.amino";
import * as _163 from "./staking/v1beta1/tx.amino";
import * as _164 from "./upgrade/v1beta1/tx.amino";
import * as _165 from "./bank/v1beta1/tx.registry";
import * as _166 from "./consensus/v1/tx.registry";
import * as _167 from "./distribution/v1beta1/tx.registry";
import * as _168 from "./feegrant/v1beta1/tx.registry";
import * as _169 from "./gov/v1/tx.registry";
import * as _170 from "./gov/v1beta1/tx.registry";
import * as _171 from "./nft/v1beta1/tx.registry";
import * as _172 from "./staking/v1beta1/tx.registry";
import * as _173 from "./upgrade/v1beta1/tx.registry";
import * as _174 from "./authz/v1beta1/query.lcd";
import * as _175 from "./bank/v1beta1/query.lcd";
import * as _176 from "./base/node/v1beta1/query.lcd";
import * as _177 from "./consensus/v1/query.lcd";
import * as _178 from "./distribution/v1beta1/query.lcd";
import * as _179 from "./feegrant/v1beta1/query.lcd";
import * as _180 from "./gov/v1/query.lcd";
import * as _181 from "./gov/v1beta1/query.lcd";
import * as _182 from "./nft/v1beta1/query.lcd";
import * as _183 from "./staking/v1beta1/query.lcd";
import * as _184 from "./tx/v1beta1/service.lcd";
import * as _185 from "./upgrade/v1beta1/query.lcd";
import * as _186 from "./authz/v1beta1/query.rpc.Query";
import * as _187 from "./autocli/v1/query.rpc.Query";
import * as _188 from "./bank/v1beta1/query.rpc.Query";
import * as _189 from "./base/node/v1beta1/query.rpc.Service";
import * as _190 from "./consensus/v1/query.rpc.Query";
import * as _191 from "./distribution/v1beta1/query.rpc.Query";
import * as _192 from "./feegrant/v1beta1/query.rpc.Query";
import * as _193 from "./gov/v1/query.rpc.Query";
import * as _194 from "./gov/v1beta1/query.rpc.Query";
import * as _195 from "./nft/v1beta1/query.rpc.Query";
import * as _196 from "./orm/query/v1alpha1/query.rpc.Query";
import * as _197 from "./staking/v1beta1/query.rpc.Query";
import * as _198 from "./tx/v1beta1/service.rpc.Service";
import * as _199 from "./upgrade/v1beta1/query.rpc.Query";
import * as _200 from "./authz/v1beta1/tx.rpc.msg";
import * as _201 from "./bank/v1beta1/tx.rpc.msg";
import * as _202 from "./consensus/v1/tx.rpc.msg";
import * as _203 from "./distribution/v1beta1/tx.rpc.msg";
import * as _204 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _205 from "./gov/v1/tx.rpc.msg";
import * as _206 from "./gov/v1beta1/tx.rpc.msg";
import * as _207 from "./nft/v1beta1/tx.rpc.msg";
import * as _208 from "./staking/v1beta1/tx.rpc.msg";
import * as _209 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _213 from "./lcd";
import * as _214 from "./rpc.query";
import * as _215 from "./rpc.tx";
export namespace cosmos {
  export namespace app {
    export namespace runtime {
      export const v1alpha1 = {
        ..._13
      };
    }
  }
  export namespace auth {
    export namespace module {
      export const v1 = {
        ..._14
      };
    }
  }
  export namespace authz {
    export namespace module {
      export const v1 = {
        ..._15
      };
    }
    export const v1beta1 = {
      ..._16,
      ..._17,
      ..._18,
      ..._19,
      ..._20,
      ..._174,
      ..._186,
      ..._200
    };
  }
  export namespace autocli {
    export const v1 = {
      ..._21,
      ..._22,
      ..._187
    };
  }
  export namespace bank {
    export namespace module {
      export const v1 = {
        ..._23
      };
    }
    export const v1beta1 = {
      ..._24,
      ..._25,
      ..._26,
      ..._27,
      ..._28,
      ..._156,
      ..._165,
      ..._175,
      ..._188,
      ..._201
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = {
        ..._29
      };
    }
    export namespace node {
      export const v1beta1 = {
        ..._30,
        ..._176,
        ..._189
      };
    }
    export namespace query {
      export const v1beta1 = {
        ..._31
      };
    }
    export namespace reflection {
      export const v2alpha1 = {
        ..._32
      };
    }
    export const v1beta1 = {
      ..._33
    };
  }
  export namespace capability {
    export namespace module {
      export const v1 = {
        ..._34
      };
    }
  }
  export namespace consensus {
    export namespace module {
      export const v1 = {
        ..._35
      };
    }
    export const v1 = {
      ..._36,
      ..._37,
      ..._157,
      ..._166,
      ..._177,
      ..._190,
      ..._202
    };
  }
  export namespace crisis {
    export namespace module {
      export const v1 = {
        ..._38
      };
    }
  }
  export namespace crypto {
    export const ed25519 = {
      ..._39
    };
    export namespace hd {
      export const v1 = {
        ..._40
      };
    }
    export namespace keyring {
      export const v1 = {
        ..._41
      };
    }
    export const multisig = {
      ..._42
    };
    export const secp256k1 = {
      ..._43
    };
    export const secp256r1 = {
      ..._44
    };
  }
  export namespace distribution {
    export namespace module {
      export const v1 = {
        ..._45
      };
    }
    export const v1beta1 = {
      ..._46,
      ..._47,
      ..._48,
      ..._49,
      ..._158,
      ..._167,
      ..._178,
      ..._191,
      ..._203
    };
  }
  export namespace evidence {
    export namespace module {
      export const v1 = {
        ..._50
      };
    }
  }
  export namespace feegrant {
    export namespace module {
      export const v1 = {
        ..._51
      };
    }
    export const v1beta1 = {
      ..._52,
      ..._53,
      ..._54,
      ..._55,
      ..._159,
      ..._168,
      ..._179,
      ..._192,
      ..._204
    };
  }
  export namespace genutil {
    export namespace module {
      export const v1 = {
        ..._56
      };
    }
  }
  export namespace gov {
    export namespace module {
      export const v1 = {
        ..._57
      };
    }
    export const v1 = {
      ..._58,
      ..._59,
      ..._60,
      ..._61,
      ..._160,
      ..._169,
      ..._180,
      ..._193,
      ..._205
    };
    export const v1beta1 = {
      ..._62,
      ..._63,
      ..._64,
      ..._65,
      ..._161,
      ..._170,
      ..._181,
      ..._194,
      ..._206
    };
  }
  export namespace group {
    export namespace module {
      export const v1 = {
        ..._66
      };
    }
  }
  export namespace mint {
    export namespace module {
      export const v1 = {
        ..._67
      };
    }
  }
  export namespace nft {
    export namespace module {
      export const v1 = {
        ..._68
      };
    }
    export const v1beta1 = {
      ..._69,
      ..._70,
      ..._71,
      ..._72,
      ..._73,
      ..._162,
      ..._171,
      ..._182,
      ..._195,
      ..._207
    };
  }
  export namespace orm {
    export namespace module {
      export const v1alpha1 = {
        ..._74
      };
    }
    export namespace query {
      export const v1alpha1 = {
        ..._75,
        ..._196
      };
    }
  }
  export namespace params {
    export namespace module {
      export const v1 = {
        ..._76
      };
    }
  }
  export namespace query {
    export const v1 = {
      ..._77
    };
  }
  export namespace reflection {
    export const v1 = {
      ..._78
    };
  }
  export namespace slashing {
    export namespace module {
      export const v1 = {
        ..._79
      };
    }
  }
  export namespace staking {
    export namespace module {
      export const v1 = {
        ..._80
      };
    }
    export const v1beta1 = {
      ..._81,
      ..._82,
      ..._83,
      ..._84,
      ..._85,
      ..._163,
      ..._172,
      ..._183,
      ..._197,
      ..._208
    };
  }
  export namespace tx {
    export namespace config {
      export const v1 = {
        ..._86
      };
    }
    export namespace signing {
      export const v1beta1 = {
        ..._87
      };
    }
    export const v1beta1 = {
      ..._88,
      ..._89,
      ..._184,
      ..._198
    };
  }
  export namespace upgrade {
    export namespace module {
      export const v1 = {
        ..._90
      };
    }
    export const v1beta1 = {
      ..._91,
      ..._92,
      ..._93,
      ..._164,
      ..._173,
      ..._185,
      ..._199,
      ..._209
    };
  }
  export namespace vesting {
    export namespace module {
      export const v1 = {
        ..._94
      };
    }
  }
  export const ClientFactory = {
    ..._213,
    ..._214,
    ..._215
  };
}