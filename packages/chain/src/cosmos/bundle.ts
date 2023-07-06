import * as _13 from "./app/runtime/v1alpha1/module";
import * as _14 from "./auth/module/v1/module";
import * as _15 from "./auth/v1beta1/auth";
import * as _16 from "./auth/v1beta1/genesis";
import * as _17 from "./auth/v1beta1/query";
import * as _18 from "./auth/v1beta1/tx";
import * as _19 from "./authz/module/v1/module";
import * as _20 from "./authz/v1beta1/authz";
import * as _21 from "./authz/v1beta1/event";
import * as _22 from "./authz/v1beta1/genesis";
import * as _23 from "./authz/v1beta1/query";
import * as _24 from "./authz/v1beta1/tx";
import * as _25 from "./autocli/v1/options";
import * as _26 from "./autocli/v1/query";
import * as _27 from "./bank/module/v1/module";
import * as _28 from "./bank/v1beta1/authz";
import * as _29 from "./bank/v1beta1/bank";
import * as _30 from "./bank/v1beta1/genesis";
import * as _31 from "./bank/v1beta1/query";
import * as _32 from "./bank/v1beta1/tx";
import * as _33 from "./base/abci/v1beta1/abci";
import * as _34 from "./base/node/v1beta1/query";
import * as _35 from "./base/query/v1beta1/pagination";
import * as _36 from "./base/reflection/v2alpha1/reflection";
import * as _37 from "./base/v1beta1/coin";
import * as _38 from "./capability/module/v1/module";
import * as _39 from "./consensus/module/v1/module";
import * as _40 from "./consensus/v1/query";
import * as _41 from "./consensus/v1/tx";
import * as _42 from "./crisis/module/v1/module";
import * as _43 from "./crypto/ed25519/keys";
import * as _44 from "./crypto/hd/v1/hd";
import * as _45 from "./crypto/keyring/v1/record";
import * as _46 from "./crypto/multisig/keys";
import * as _47 from "./crypto/secp256k1/keys";
import * as _48 from "./crypto/secp256r1/keys";
import * as _49 from "./distribution/module/v1/module";
import * as _50 from "./distribution/v1beta1/distribution";
import * as _51 from "./distribution/v1beta1/genesis";
import * as _52 from "./distribution/v1beta1/query";
import * as _53 from "./distribution/v1beta1/tx";
import * as _54 from "./evidence/module/v1/module";
import * as _55 from "./feegrant/module/v1/module";
import * as _56 from "./feegrant/v1beta1/feegrant";
import * as _57 from "./feegrant/v1beta1/genesis";
import * as _58 from "./feegrant/v1beta1/query";
import * as _59 from "./feegrant/v1beta1/tx";
import * as _60 from "./genutil/module/v1/module";
import * as _61 from "./gov/module/v1/module";
import * as _62 from "./gov/v1/genesis";
import * as _63 from "./gov/v1/gov";
import * as _64 from "./gov/v1/query";
import * as _65 from "./gov/v1/tx";
import * as _66 from "./gov/v1beta1/genesis";
import * as _67 from "./gov/v1beta1/gov";
import * as _68 from "./gov/v1beta1/query";
import * as _69 from "./gov/v1beta1/tx";
import * as _70 from "./group/module/v1/module";
import * as _71 from "./mint/module/v1/module";
import * as _72 from "./nft/module/v1/module";
import * as _73 from "./nft/v1beta1/event";
import * as _74 from "./nft/v1beta1/genesis";
import * as _75 from "./nft/v1beta1/nft";
import * as _76 from "./nft/v1beta1/query";
import * as _77 from "./nft/v1beta1/tx";
import * as _78 from "./orm/module/v1alpha1/module";
import * as _79 from "./orm/query/v1alpha1/query";
import * as _80 from "./params/module/v1/module";
import * as _81 from "./query/v1/query";
import * as _82 from "./reflection/v1/reflection";
import * as _83 from "./slashing/module/v1/module";
import * as _84 from "./staking/module/v1/module";
import * as _85 from "./staking/v1beta1/authz";
import * as _86 from "./staking/v1beta1/genesis";
import * as _87 from "./staking/v1beta1/query";
import * as _88 from "./staking/v1beta1/staking";
import * as _89 from "./staking/v1beta1/tx";
import * as _90 from "./tx/config/v1/config";
import * as _91 from "./tx/signing/v1beta1/signing";
import * as _92 from "./tx/v1beta1/service";
import * as _93 from "./tx/v1beta1/tx";
import * as _94 from "./upgrade/module/v1/module";
import * as _95 from "./upgrade/v1beta1/query";
import * as _96 from "./upgrade/v1beta1/tx";
import * as _97 from "./upgrade/v1beta1/upgrade";
import * as _98 from "./vesting/module/v1/module";
import * as _160 from "./auth/v1beta1/tx.amino";
import * as _161 from "./bank/v1beta1/tx.amino";
import * as _162 from "./consensus/v1/tx.amino";
import * as _163 from "./distribution/v1beta1/tx.amino";
import * as _164 from "./feegrant/v1beta1/tx.amino";
import * as _165 from "./gov/v1/tx.amino";
import * as _166 from "./gov/v1beta1/tx.amino";
import * as _167 from "./nft/v1beta1/tx.amino";
import * as _168 from "./staking/v1beta1/tx.amino";
import * as _169 from "./upgrade/v1beta1/tx.amino";
import * as _170 from "./auth/v1beta1/tx.registry";
import * as _171 from "./bank/v1beta1/tx.registry";
import * as _172 from "./consensus/v1/tx.registry";
import * as _173 from "./distribution/v1beta1/tx.registry";
import * as _174 from "./feegrant/v1beta1/tx.registry";
import * as _175 from "./gov/v1/tx.registry";
import * as _176 from "./gov/v1beta1/tx.registry";
import * as _177 from "./nft/v1beta1/tx.registry";
import * as _178 from "./staking/v1beta1/tx.registry";
import * as _179 from "./upgrade/v1beta1/tx.registry";
import * as _180 from "./auth/v1beta1/query.lcd";
import * as _181 from "./authz/v1beta1/query.lcd";
import * as _182 from "./bank/v1beta1/query.lcd";
import * as _183 from "./base/node/v1beta1/query.lcd";
import * as _184 from "./consensus/v1/query.lcd";
import * as _185 from "./distribution/v1beta1/query.lcd";
import * as _186 from "./feegrant/v1beta1/query.lcd";
import * as _187 from "./gov/v1/query.lcd";
import * as _188 from "./gov/v1beta1/query.lcd";
import * as _189 from "./nft/v1beta1/query.lcd";
import * as _190 from "./staking/v1beta1/query.lcd";
import * as _191 from "./tx/v1beta1/service.lcd";
import * as _192 from "./upgrade/v1beta1/query.lcd";
import * as _193 from "./auth/v1beta1/query.rpc.Query";
import * as _194 from "./authz/v1beta1/query.rpc.Query";
import * as _195 from "./autocli/v1/query.rpc.Query";
import * as _196 from "./bank/v1beta1/query.rpc.Query";
import * as _197 from "./base/node/v1beta1/query.rpc.Service";
import * as _198 from "./consensus/v1/query.rpc.Query";
import * as _199 from "./distribution/v1beta1/query.rpc.Query";
import * as _200 from "./feegrant/v1beta1/query.rpc.Query";
import * as _201 from "./gov/v1/query.rpc.Query";
import * as _202 from "./gov/v1beta1/query.rpc.Query";
import * as _203 from "./nft/v1beta1/query.rpc.Query";
import * as _204 from "./orm/query/v1alpha1/query.rpc.Query";
import * as _205 from "./staking/v1beta1/query.rpc.Query";
import * as _206 from "./tx/v1beta1/service.rpc.Service";
import * as _207 from "./upgrade/v1beta1/query.rpc.Query";
import * as _208 from "./auth/v1beta1/tx.rpc.msg";
import * as _209 from "./authz/v1beta1/tx.rpc.msg";
import * as _210 from "./bank/v1beta1/tx.rpc.msg";
import * as _211 from "./consensus/v1/tx.rpc.msg";
import * as _212 from "./distribution/v1beta1/tx.rpc.msg";
import * as _213 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _214 from "./gov/v1/tx.rpc.msg";
import * as _215 from "./gov/v1beta1/tx.rpc.msg";
import * as _216 from "./nft/v1beta1/tx.rpc.msg";
import * as _217 from "./staking/v1beta1/tx.rpc.msg";
import * as _218 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _222 from "./lcd";
import * as _223 from "./rpc.query";
import * as _224 from "./rpc.tx";
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
    export const v1beta1 = {
      ..._15,
      ..._16,
      ..._17,
      ..._18,
      ..._160,
      ..._170,
      ..._180,
      ..._193,
      ..._208
    };
  }
  export namespace authz {
    export namespace module {
      export const v1 = {
        ..._19
      };
    }
    export const v1beta1 = {
      ..._20,
      ..._21,
      ..._22,
      ..._23,
      ..._24,
      ..._181,
      ..._194,
      ..._209
    };
  }
  export namespace autocli {
    export const v1 = {
      ..._25,
      ..._26,
      ..._195
    };
  }
  export namespace bank {
    export namespace module {
      export const v1 = {
        ..._27
      };
    }
    export const v1beta1 = {
      ..._28,
      ..._29,
      ..._30,
      ..._31,
      ..._32,
      ..._161,
      ..._171,
      ..._182,
      ..._196,
      ..._210
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = {
        ..._33
      };
    }
    export namespace node {
      export const v1beta1 = {
        ..._34,
        ..._183,
        ..._197
      };
    }
    export namespace query {
      export const v1beta1 = {
        ..._35
      };
    }
    export namespace reflection {
      export const v2alpha1 = {
        ..._36
      };
    }
    export const v1beta1 = {
      ..._37
    };
  }
  export namespace capability {
    export namespace module {
      export const v1 = {
        ..._38
      };
    }
  }
  export namespace consensus {
    export namespace module {
      export const v1 = {
        ..._39
      };
    }
    export const v1 = {
      ..._40,
      ..._41,
      ..._162,
      ..._172,
      ..._184,
      ..._198,
      ..._211
    };
  }
  export namespace crisis {
    export namespace module {
      export const v1 = {
        ..._42
      };
    }
  }
  export namespace crypto {
    export const ed25519 = {
      ..._43
    };
    export namespace hd {
      export const v1 = {
        ..._44
      };
    }
    export namespace keyring {
      export const v1 = {
        ..._45
      };
    }
    export const multisig = {
      ..._46
    };
    export const secp256k1 = {
      ..._47
    };
    export const secp256r1 = {
      ..._48
    };
  }
  export namespace distribution {
    export namespace module {
      export const v1 = {
        ..._49
      };
    }
    export const v1beta1 = {
      ..._50,
      ..._51,
      ..._52,
      ..._53,
      ..._163,
      ..._173,
      ..._185,
      ..._199,
      ..._212
    };
  }
  export namespace evidence {
    export namespace module {
      export const v1 = {
        ..._54
      };
    }
  }
  export namespace feegrant {
    export namespace module {
      export const v1 = {
        ..._55
      };
    }
    export const v1beta1 = {
      ..._56,
      ..._57,
      ..._58,
      ..._59,
      ..._164,
      ..._174,
      ..._186,
      ..._200,
      ..._213
    };
  }
  export namespace genutil {
    export namespace module {
      export const v1 = {
        ..._60
      };
    }
  }
  export namespace gov {
    export namespace module {
      export const v1 = {
        ..._61
      };
    }
    export const v1 = {
      ..._62,
      ..._63,
      ..._64,
      ..._65,
      ..._165,
      ..._175,
      ..._187,
      ..._201,
      ..._214
    };
    export const v1beta1 = {
      ..._66,
      ..._67,
      ..._68,
      ..._69,
      ..._166,
      ..._176,
      ..._188,
      ..._202,
      ..._215
    };
  }
  export namespace group {
    export namespace module {
      export const v1 = {
        ..._70
      };
    }
  }
  export namespace mint {
    export namespace module {
      export const v1 = {
        ..._71
      };
    }
  }
  export namespace nft {
    export namespace module {
      export const v1 = {
        ..._72
      };
    }
    export const v1beta1 = {
      ..._73,
      ..._74,
      ..._75,
      ..._76,
      ..._77,
      ..._167,
      ..._177,
      ..._189,
      ..._203,
      ..._216
    };
  }
  export namespace orm {
    export namespace module {
      export const v1alpha1 = {
        ..._78
      };
    }
    export namespace query {
      export const v1alpha1 = {
        ..._79,
        ..._204
      };
    }
  }
  export namespace params {
    export namespace module {
      export const v1 = {
        ..._80
      };
    }
  }
  export namespace query {
    export const v1 = {
      ..._81
    };
  }
  export namespace reflection {
    export const v1 = {
      ..._82
    };
  }
  export namespace slashing {
    export namespace module {
      export const v1 = {
        ..._83
      };
    }
  }
  export namespace staking {
    export namespace module {
      export const v1 = {
        ..._84
      };
    }
    export const v1beta1 = {
      ..._85,
      ..._86,
      ..._87,
      ..._88,
      ..._89,
      ..._168,
      ..._178,
      ..._190,
      ..._205,
      ..._217
    };
  }
  export namespace tx {
    export namespace config {
      export const v1 = {
        ..._90
      };
    }
    export namespace signing {
      export const v1beta1 = {
        ..._91
      };
    }
    export const v1beta1 = {
      ..._92,
      ..._93,
      ..._191,
      ..._206
    };
  }
  export namespace upgrade {
    export namespace module {
      export const v1 = {
        ..._94
      };
    }
    export const v1beta1 = {
      ..._95,
      ..._96,
      ..._97,
      ..._169,
      ..._179,
      ..._192,
      ..._207,
      ..._218
    };
  }
  export namespace vesting {
    export namespace module {
      export const v1 = {
        ..._98
      };
    }
  }
  export const ClientFactory = {
    ..._222,
    ..._223,
    ..._224
  };
}