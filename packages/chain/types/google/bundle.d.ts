import * as _96 from "./api/expr/v1alpha1/checked";
import * as _97 from "./api/expr/v1alpha1/eval";
import * as _98 from "./api/expr/v1alpha1/explain";
import * as _99 from "./api/expr/v1alpha1/syntax";
import * as _100 from "./api/expr/v1alpha1/value";
import * as _101 from "./api/expr/v1beta1/decl";
import * as _102 from "./api/expr/v1beta1/eval";
import * as _103 from "./api/expr/v1beta1/expr";
import * as _104 from "./api/expr/v1beta1/source";
import * as _105 from "./api/expr/v1beta1/value";
import * as _106 from "./bytestream/bytestream";
import * as _107 from "./geo/type/viewport";
import * as _108 from "./longrunning/operations";
import * as _109 from "./rpc/code";
import * as _110 from "./rpc/error_details";
import * as _111 from "./rpc/status";
import * as _112 from "./type/calendar_period";
import * as _113 from "./type/color";
import * as _114 from "./type/date";
import * as _115 from "./type/datetime";
import * as _116 from "./type/dayofweek";
import * as _117 from "./type/decimal";
import * as _118 from "./type/expr";
import * as _119 from "./type/fraction";
import * as _120 from "./type/interval";
import * as _121 from "./type/latlng";
import * as _122 from "./type/localized_text";
import * as _123 from "./type/money";
import * as _124 from "./type/month";
import * as _125 from "./type/phone_number";
import * as _126 from "./type/postal_address";
import * as _127 from "./type/quaternion";
import * as _128 from "./type/timeofday";
import * as _129 from "./protobuf/descriptor";
import * as _130 from "./protobuf/duration";
import * as _131 from "./protobuf/timestamp";
import * as _132 from "./protobuf/any";
import * as _133 from "./protobuf/empty";
import * as _134 from "./protobuf/struct";
import * as _135 from "./protobuf/wrappers";
export declare namespace google {
    namespace api {
        namespace expr {
            const v1alpha1: {
                Value: {
                    encode(message: _100.Value, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _100.Value;
                    fromJSON(object: any): _100.Value;
                    toJSON(message: _100.Value): unknown;
                    fromPartial(object: {
                        nullValue?: _134.NullValue;
                        boolValue?: boolean;
                        int64Value?: bigint;
                        uint64Value?: bigint;
                        doubleValue?: number;
                        stringValue?: string;
                        bytesValue?: Uint8Array;
                        enumValue?: {
                            type?: string;
                            value?: number;
                        };
                        objectValue?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        mapValue?: {
                            entries?: {
                                key?: any;
                                value?: any;
                            }[];
                        };
                        listValue?: {
                            values?: any[];
                        };
                        typeValue?: string;
                    }): _100.Value;
                };
                EnumValue: {
                    encode(message: _100.EnumValue, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _100.EnumValue;
                    fromJSON(object: any): _100.EnumValue;
                    toJSON(message: _100.EnumValue): unknown;
                    fromPartial(object: {
                        type?: string;
                        value?: number;
                    }): _100.EnumValue;
                };
                ListValue: {
                    encode(message: _100.ListValue, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _100.ListValue;
                    fromJSON(object: any): _100.ListValue;
                    toJSON(message: _100.ListValue): unknown;
                    fromPartial(object: {
                        values?: {
                            nullValue?: _134.NullValue;
                            boolValue?: boolean;
                            int64Value?: bigint;
                            uint64Value?: bigint;
                            doubleValue?: number;
                            stringValue?: string;
                            bytesValue?: Uint8Array;
                            enumValue?: {
                                type?: string;
                                value?: number;
                            };
                            objectValue?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            mapValue?: {
                                entries?: {
                                    key?: any;
                                    value?: any;
                                }[];
                            };
                            listValue?: any;
                            typeValue?: string;
                        }[];
                    }): _100.ListValue;
                };
                MapValue: {
                    encode(message: _100.MapValue, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _100.MapValue;
                    fromJSON(object: any): _100.MapValue;
                    toJSON(message: _100.MapValue): unknown;
                    fromPartial(object: {
                        entries?: {
                            key?: {
                                nullValue?: _134.NullValue;
                                boolValue?: boolean;
                                int64Value?: bigint;
                                uint64Value?: bigint;
                                doubleValue?: number;
                                stringValue?: string;
                                bytesValue?: Uint8Array;
                                enumValue?: {
                                    type?: string;
                                    value?: number;
                                };
                                objectValue?: {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                };
                                mapValue?: any;
                                listValue?: {
                                    values?: any[];
                                };
                                typeValue?: string;
                            };
                            value?: {
                                nullValue?: _134.NullValue;
                                boolValue?: boolean;
                                int64Value?: bigint;
                                uint64Value?: bigint;
                                doubleValue?: number;
                                stringValue?: string;
                                bytesValue?: Uint8Array;
                                enumValue?: {
                                    type?: string;
                                    value?: number;
                                };
                                objectValue?: {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                };
                                mapValue?: any;
                                listValue?: {
                                    values?: any[];
                                };
                                typeValue?: string;
                            };
                        }[];
                    }): _100.MapValue;
                };
                MapValue_Entry: {
                    encode(message: _100.MapValue_Entry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _100.MapValue_Entry;
                    fromJSON(object: any): _100.MapValue_Entry;
                    toJSON(message: _100.MapValue_Entry): unknown;
                    fromPartial(object: {
                        key?: {
                            nullValue?: _134.NullValue;
                            boolValue?: boolean;
                            int64Value?: bigint;
                            uint64Value?: bigint;
                            doubleValue?: number;
                            stringValue?: string;
                            bytesValue?: Uint8Array;
                            enumValue?: {
                                type?: string;
                                value?: number;
                            };
                            objectValue?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            mapValue?: {
                                entries?: any[];
                            };
                            listValue?: {
                                values?: any[];
                            };
                            typeValue?: string;
                        };
                        value?: {
                            nullValue?: _134.NullValue;
                            boolValue?: boolean;
                            int64Value?: bigint;
                            uint64Value?: bigint;
                            doubleValue?: number;
                            stringValue?: string;
                            bytesValue?: Uint8Array;
                            enumValue?: {
                                type?: string;
                                value?: number;
                            };
                            objectValue?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            mapValue?: {
                                entries?: any[];
                            };
                            listValue?: {
                                values?: any[];
                            };
                            typeValue?: string;
                        };
                    }): _100.MapValue_Entry;
                };
                ParsedExpr: {
                    encode(message: _99.ParsedExpr, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _99.ParsedExpr;
                    fromJSON(object: any): _99.ParsedExpr;
                    toJSON(message: _99.ParsedExpr): unknown;
                    fromPartial(object: {
                        expr?: {
                            id?: bigint;
                            constExpr?: {
                                nullValue?: _134.NullValue;
                                boolValue?: boolean;
                                int64Value?: bigint;
                                uint64Value?: bigint;
                                doubleValue?: number;
                                stringValue?: string;
                                bytesValue?: Uint8Array;
                                durationValue?: {
                                    seconds?: bigint;
                                    nanos?: number;
                                };
                                timestampValue?: {
                                    seconds?: bigint;
                                    nanos?: number;
                                };
                            };
                            identExpr?: {
                                name?: string;
                            };
                            selectExpr?: {
                                operand?: any;
                                field?: string;
                                testOnly?: boolean;
                            };
                            callExpr?: {
                                target?: any;
                                function?: string;
                                args?: any[];
                            };
                            listExpr?: {
                                elements?: any[];
                                optionalIndices?: number[];
                            };
                            structExpr?: {
                                messageName?: string;
                                entries?: {
                                    id?: bigint;
                                    fieldKey?: string;
                                    mapKey?: any;
                                    value?: any;
                                    optionalEntry?: boolean;
                                }[];
                            };
                            comprehensionExpr?: {
                                iterVar?: string;
                                iterRange?: any;
                                accuVar?: string;
                                accuInit?: any;
                                loopCondition?: any;
                                loopStep?: any;
                                result?: any;
                            };
                        };
                        sourceInfo?: {
                            syntaxVersion?: string;
                            location?: string;
                            lineOffsets?: number[];
                            positions?: {};
                            macroCalls?: {};
                        };
                    }): _99.ParsedExpr;
                };
                Expr: {
                    encode(message: _99.Expr, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _99.Expr;
                    fromJSON(object: any): _99.Expr;
                    toJSON(message: _99.Expr): unknown;
                    fromPartial(object: {
                        id?: bigint;
                        constExpr?: {
                            nullValue?: _134.NullValue;
                            boolValue?: boolean;
                            int64Value?: bigint;
                            uint64Value?: bigint;
                            doubleValue?: number;
                            stringValue?: string;
                            bytesValue?: Uint8Array;
                            durationValue?: {
                                seconds?: bigint;
                                nanos?: number;
                            };
                            timestampValue?: {
                                seconds?: bigint;
                                nanos?: number;
                            };
                        };
                        identExpr?: {
                            name?: string;
                        };
                        selectExpr?: {
                            operand?: any;
                            field?: string;
                            testOnly?: boolean;
                        };
                        callExpr?: {
                            target?: any;
                            function?: string;
                            args?: any[];
                        };
                        listExpr?: {
                            elements?: any[];
                            optionalIndices?: number[];
                        };
                        structExpr?: {
                            messageName?: string;
                            entries?: {
                                id?: bigint;
                                fieldKey?: string;
                                mapKey?: any;
                                value?: any;
                                optionalEntry?: boolean;
                            }[];
                        };
                        comprehensionExpr?: {
                            iterVar?: string;
                            iterRange?: any;
                            accuVar?: string;
                            accuInit?: any;
                            loopCondition?: any;
                            loopStep?: any;
                            result?: any;
                        };
                    }): _99.Expr;
                };
                Expr_Ident: {
                    encode(message: _99.Expr_Ident, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _99.Expr_Ident;
                    fromJSON(object: any): _99.Expr_Ident;
                    toJSON(message: _99.Expr_Ident): unknown;
                    fromPartial(object: {
                        name?: string;
                    }): _99.Expr_Ident;
                };
                Expr_Select: {
                    encode(message: _99.Expr_Select, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _99.Expr_Select;
                    fromJSON(object: any): _99.Expr_Select;
                    toJSON(message: _99.Expr_Select): unknown;
                    fromPartial(object: {
                        operand?: {
                            id?: bigint;
                            constExpr?: {
                                nullValue?: _134.NullValue;
                                boolValue?: boolean;
                                int64Value?: bigint;
                                uint64Value?: bigint;
                                doubleValue?: number;
                                stringValue?: string;
                                bytesValue?: Uint8Array;
                                durationValue?: {
                                    seconds?: bigint;
                                    nanos?: number;
                                };
                                timestampValue?: {
                                    seconds?: bigint;
                                    nanos?: number;
                                };
                            };
                            identExpr?: {
                                name?: string;
                            };
                            selectExpr?: any;
                            callExpr?: {
                                target?: any;
                                function?: string;
                                args?: any[];
                            };
                            listExpr?: {
                                elements?: any[];
                                optionalIndices?: number[];
                            };
                            structExpr?: {
                                messageName?: string;
                                entries?: {
                                    id?: bigint;
                                    fieldKey?: string;
                                    mapKey?: any;
                                    value?: any;
                                    optionalEntry?: boolean;
                                }[];
                            };
                            comprehensionExpr?: {
                                iterVar?: string;
                                iterRange?: any;
                                accuVar?: string;
                                accuInit?: any;
                                loopCondition?: any;
                                loopStep?: any;
                                result?: any;
                            };
                        };
                        field?: string;
                        testOnly?: boolean;
                    }): _99.Expr_Select;
                };
                Expr_Call: {
                    encode(message: _99.Expr_Call, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _99.Expr_Call;
                    fromJSON(object: any): _99.Expr_Call;
                    toJSON(message: _99.Expr_Call): unknown;
                    fromPartial(object: {
                        target?: {
                            id?: bigint;
                            constExpr?: {
                                nullValue?: _134.NullValue;
                                boolValue?: boolean;
                                int64Value?: bigint;
                                uint64Value?: bigint;
                                doubleValue?: number;
                                stringValue?: string;
                                bytesValue?: Uint8Array;
                                durationValue?: {
                                    seconds?: bigint;
                                    nanos?: number;
                                };
                                timestampValue?: {
                                    seconds?: bigint;
                                    nanos?: number;
                                };
                            };
                            identExpr?: {
                                name?: string;
                            };
                            selectExpr?: {
                                operand?: any;
                                field?: string;
                                testOnly?: boolean;
                            };
                            callExpr?: any;
                            listExpr?: {
                                elements?: any[];
                                optionalIndices?: number[];
                            };
                            structExpr?: {
                                messageName?: string;
                                entries?: {
                                    id?: bigint;
                                    fieldKey?: string;
                                    mapKey?: any;
                                    value?: any;
                                    optionalEntry?: boolean;
                                }[];
                            };
                            comprehensionExpr?: {
                                iterVar?: string;
                                iterRange?: any;
                                accuVar?: string;
                                accuInit?: any;
                                loopCondition?: any;
                                loopStep?: any;
                                result?: any;
                            };
                        };
                        function?: string;
                        args?: {
                            id?: bigint;
                            constExpr?: {
                                nullValue?: _134.NullValue;
                                boolValue?: boolean;
                                int64Value?: bigint;
                                uint64Value?: bigint;
                                doubleValue?: number;
                                stringValue?: string;
                                bytesValue?: Uint8Array;
                                durationValue?: {
                                    seconds?: bigint;
                                    nanos?: number;
                                };
                                timestampValue?: {
                                    seconds?: bigint;
                                    nanos?: number;
                                };
                            };
                            identExpr?: {
                                name?: string;
                            };
                            selectExpr?: {
                                operand?: any;
                                field?: string;
                                testOnly?: boolean;
                            };
                            callExpr?: any;
                            listExpr?: {
                                elements?: any[];
                                optionalIndices?: number[];
                            };
                            structExpr?: {
                                messageName?: string;
                                entries?: {
                                    id?: bigint;
                                    fieldKey?: string;
                                    mapKey?: any;
                                    value?: any;
                                    optionalEntry?: boolean;
                                }[];
                            };
                            comprehensionExpr?: {
                                iterVar?: string;
                                iterRange?: any;
                                accuVar?: string;
                                accuInit?: any;
                                loopCondition?: any;
                                loopStep?: any;
                                result?: any;
                            };
                        }[];
                    }): _99.Expr_Call;
                };
                Expr_CreateList: {
                    encode(message: _99.Expr_CreateList, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _99.Expr_CreateList;
                    fromJSON(object: any): _99.Expr_CreateList;
                    toJSON(message: _99.Expr_CreateList): unknown;
                    fromPartial(object: {
                        elements?: {
                            id?: bigint;
                            constExpr?: {
                                nullValue?: _134.NullValue;
                                boolValue?: boolean;
                                int64Value?: bigint;
                                uint64Value?: bigint;
                                doubleValue?: number;
                                stringValue?: string;
                                bytesValue?: Uint8Array;
                                durationValue?: {
                                    seconds?: bigint;
                                    nanos?: number;
                                };
                                timestampValue?: {
                                    seconds?: bigint;
                                    nanos?: number;
                                };
                            };
                            identExpr?: {
                                name?: string;
                            };
                            selectExpr?: {
                                operand?: any;
                                field?: string;
                                testOnly?: boolean;
                            };
                            callExpr?: {
                                target?: any;
                                function?: string;
                                args?: any[];
                            };
                            listExpr?: any;
                            structExpr?: {
                                messageName?: string;
                                entries?: {
                                    id?: bigint;
                                    fieldKey?: string;
                                    mapKey?: any;
                                    value?: any;
                                    optionalEntry?: boolean;
                                }[];
                            };
                            comprehensionExpr?: {
                                iterVar?: string;
                                iterRange?: any;
                                accuVar?: string;
                                accuInit?: any;
                                loopCondition?: any;
                                loopStep?: any;
                                result?: any;
                            };
                        }[];
                        optionalIndices?: number[];
                    }): _99.Expr_CreateList;
                };
                Expr_CreateStruct: {
                    encode(message: _99.Expr_CreateStruct, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _99.Expr_CreateStruct;
                    fromJSON(object: any): _99.Expr_CreateStruct;
                    toJSON(message: _99.Expr_CreateStruct): unknown;
                    fromPartial(object: {
                        messageName?: string;
                        entries?: {
                            id?: bigint;
                            fieldKey?: string;
                            mapKey?: {
                                id?: bigint;
                                constExpr?: {
                                    nullValue?: _134.NullValue;
                                    boolValue?: boolean;
                                    int64Value?: bigint;
                                    uint64Value?: bigint;
                                    doubleValue?: number;
                                    stringValue?: string;
                                    bytesValue?: Uint8Array;
                                    durationValue?: {
                                        seconds?: bigint;
                                        nanos?: number;
                                    };
                                    timestampValue?: {
                                        seconds?: bigint;
                                        nanos?: number;
                                    };
                                };
                                identExpr?: {
                                    name?: string;
                                };
                                selectExpr?: {
                                    operand?: any;
                                    field?: string;
                                    testOnly?: boolean;
                                };
                                callExpr?: {
                                    target?: any;
                                    function?: string;
                                    args?: any[];
                                };
                                listExpr?: {
                                    elements?: any[];
                                    optionalIndices?: number[];
                                };
                                structExpr?: any;
                                comprehensionExpr?: {
                                    iterVar?: string;
                                    iterRange?: any;
                                    accuVar?: string;
                                    accuInit?: any;
                                    loopCondition?: any;
                                    loopStep?: any;
                                    result?: any;
                                };
                            };
                            value?: {
                                id?: bigint;
                                constExpr?: {
                                    nullValue?: _134.NullValue;
                                    boolValue?: boolean;
                                    int64Value?: bigint;
                                    uint64Value?: bigint;
                                    doubleValue?: number;
                                    stringValue?: string;
                                    bytesValue?: Uint8Array;
                                    durationValue?: {
                                        seconds?: bigint;
                                        nanos?: number;
                                    };
                                    timestampValue?: {
                                        seconds?: bigint;
                                        nanos?: number;
                                    };
                                };
                                identExpr?: {
                                    name?: string;
                                };
                                selectExpr?: {
                                    operand?: any;
                                    field?: string;
                                    testOnly?: boolean;
                                };
                                callExpr?: {
                                    target?: any;
                                    function?: string;
                                    args?: any[];
                                };
                                listExpr?: {
                                    elements?: any[];
                                    optionalIndices?: number[];
                                };
                                structExpr?: any;
                                comprehensionExpr?: {
                                    iterVar?: string;
                                    iterRange?: any;
                                    accuVar?: string;
                                    accuInit?: any;
                                    loopCondition?: any;
                                    loopStep?: any;
                                    result?: any;
                                };
                            };
                            optionalEntry?: boolean;
                        }[];
                    }): _99.Expr_CreateStruct;
                };
                Expr_CreateStruct_Entry: {
                    encode(message: _99.Expr_CreateStruct_Entry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _99.Expr_CreateStruct_Entry;
                    fromJSON(object: any): _99.Expr_CreateStruct_Entry;
                    toJSON(message: _99.Expr_CreateStruct_Entry): unknown;
                    fromPartial(object: {
                        id?: bigint;
                        fieldKey?: string;
                        mapKey?: {
                            id?: bigint;
                            constExpr?: {
                                nullValue?: _134.NullValue;
                                boolValue?: boolean;
                                int64Value?: bigint;
                                uint64Value?: bigint;
                                doubleValue?: number;
                                stringValue?: string;
                                bytesValue?: Uint8Array;
                                durationValue?: {
                                    seconds?: bigint;
                                    nanos?: number;
                                };
                                timestampValue?: {
                                    seconds?: bigint;
                                    nanos?: number;
                                };
                            };
                            identExpr?: {
                                name?: string;
                            };
                            selectExpr?: {
                                operand?: any;
                                field?: string;
                                testOnly?: boolean;
                            };
                            callExpr?: {
                                target?: any;
                                function?: string;
                                args?: any[];
                            };
                            listExpr?: {
                                elements?: any[];
                                optionalIndices?: number[];
                            };
                            structExpr?: {
                                messageName?: string;
                                entries?: any[];
                            };
                            comprehensionExpr?: {
                                iterVar?: string;
                                iterRange?: any;
                                accuVar?: string;
                                accuInit?: any;
                                loopCondition?: any;
                                loopStep?: any;
                                result?: any;
                            };
                        };
                        value?: {
                            id?: bigint;
                            constExpr?: {
                                nullValue?: _134.NullValue;
                                boolValue?: boolean;
                                int64Value?: bigint;
                                uint64Value?: bigint;
                                doubleValue?: number;
                                stringValue?: string;
                                bytesValue?: Uint8Array;
                                durationValue?: {
                                    seconds?: bigint;
                                    nanos?: number;
                                };
                                timestampValue?: {
                                    seconds?: bigint;
                                    nanos?: number;
                                };
                            };
                            identExpr?: {
                                name?: string;
                            };
                            selectExpr?: {
                                operand?: any;
                                field?: string;
                                testOnly?: boolean;
                            };
                            callExpr?: {
                                target?: any;
                                function?: string;
                                args?: any[];
                            };
                            listExpr?: {
                                elements?: any[];
                                optionalIndices?: number[];
                            };
                            structExpr?: {
                                messageName?: string;
                                entries?: any[];
                            };
                            comprehensionExpr?: {
                                iterVar?: string;
                                iterRange?: any;
                                accuVar?: string;
                                accuInit?: any;
                                loopCondition?: any;
                                loopStep?: any;
                                result?: any;
                            };
                        };
                        optionalEntry?: boolean;
                    }): _99.Expr_CreateStruct_Entry;
                };
                Expr_Comprehension: {
                    encode(message: _99.Expr_Comprehension, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _99.Expr_Comprehension;
                    fromJSON(object: any): _99.Expr_Comprehension;
                    toJSON(message: _99.Expr_Comprehension): unknown;
                    fromPartial(object: {
                        iterVar?: string;
                        iterRange?: {
                            id?: bigint;
                            constExpr?: {
                                nullValue?: _134.NullValue;
                                boolValue?: boolean;
                                int64Value?: bigint;
                                uint64Value?: bigint;
                                doubleValue?: number;
                                stringValue?: string;
                                bytesValue?: Uint8Array;
                                durationValue?: {
                                    seconds?: bigint;
                                    nanos?: number;
                                };
                                timestampValue?: {
                                    seconds?: bigint;
                                    nanos?: number;
                                };
                            };
                            identExpr?: {
                                name?: string;
                            };
                            selectExpr?: {
                                operand?: any;
                                field?: string;
                                testOnly?: boolean;
                            };
                            callExpr?: {
                                target?: any;
                                function?: string;
                                args?: any[];
                            };
                            listExpr?: {
                                elements?: any[];
                                optionalIndices?: number[];
                            };
                            structExpr?: {
                                messageName?: string;
                                entries?: {
                                    id?: bigint;
                                    fieldKey?: string;
                                    mapKey?: any;
                                    value?: any;
                                    optionalEntry?: boolean;
                                }[];
                            };
                            comprehensionExpr?: any;
                        };
                        accuVar?: string;
                        accuInit?: {
                            id?: bigint;
                            constExpr?: {
                                nullValue?: _134.NullValue;
                                boolValue?: boolean;
                                int64Value?: bigint;
                                uint64Value?: bigint;
                                doubleValue?: number;
                                stringValue?: string;
                                bytesValue?: Uint8Array;
                                durationValue?: {
                                    seconds?: bigint;
                                    nanos?: number;
                                };
                                timestampValue?: {
                                    seconds?: bigint;
                                    nanos?: number;
                                };
                            };
                            identExpr?: {
                                name?: string;
                            };
                            selectExpr?: {
                                operand?: any;
                                field?: string;
                                testOnly?: boolean;
                            };
                            callExpr?: {
                                target?: any;
                                function?: string;
                                args?: any[];
                            };
                            listExpr?: {
                                elements?: any[];
                                optionalIndices?: number[];
                            };
                            structExpr?: {
                                messageName?: string;
                                entries?: {
                                    id?: bigint;
                                    fieldKey?: string;
                                    mapKey?: any;
                                    value?: any;
                                    optionalEntry?: boolean;
                                }[];
                            };
                            comprehensionExpr?: any;
                        };
                        loopCondition?: {
                            id?: bigint;
                            constExpr?: {
                                nullValue?: _134.NullValue;
                                boolValue?: boolean;
                                int64Value?: bigint;
                                uint64Value?: bigint;
                                doubleValue?: number;
                                stringValue?: string;
                                bytesValue?: Uint8Array;
                                durationValue?: {
                                    seconds?: bigint;
                                    nanos?: number;
                                };
                                timestampValue?: {
                                    seconds?: bigint;
                                    nanos?: number;
                                };
                            };
                            identExpr?: {
                                name?: string;
                            };
                            selectExpr?: {
                                operand?: any;
                                field?: string;
                                testOnly?: boolean;
                            };
                            callExpr?: {
                                target?: any;
                                function?: string;
                                args?: any[];
                            };
                            listExpr?: {
                                elements?: any[];
                                optionalIndices?: number[];
                            };
                            structExpr?: {
                                messageName?: string;
                                entries?: {
                                    id?: bigint;
                                    fieldKey?: string;
                                    mapKey?: any;
                                    value?: any;
                                    optionalEntry?: boolean;
                                }[];
                            };
                            comprehensionExpr?: any;
                        };
                        loopStep?: {
                            id?: bigint;
                            constExpr?: {
                                nullValue?: _134.NullValue;
                                boolValue?: boolean;
                                int64Value?: bigint;
                                uint64Value?: bigint;
                                doubleValue?: number;
                                stringValue?: string;
                                bytesValue?: Uint8Array;
                                durationValue?: {
                                    seconds?: bigint;
                                    nanos?: number;
                                };
                                timestampValue?: {
                                    seconds?: bigint;
                                    nanos?: number;
                                };
                            };
                            identExpr?: {
                                name?: string;
                            };
                            selectExpr?: {
                                operand?: any;
                                field?: string;
                                testOnly?: boolean;
                            };
                            callExpr?: {
                                target?: any;
                                function?: string;
                                args?: any[];
                            };
                            listExpr?: {
                                elements?: any[];
                                optionalIndices?: number[];
                            };
                            structExpr?: {
                                messageName?: string;
                                entries?: {
                                    id?: bigint;
                                    fieldKey?: string;
                                    mapKey?: any;
                                    value?: any;
                                    optionalEntry?: boolean;
                                }[];
                            };
                            comprehensionExpr?: any;
                        };
                        result?: {
                            id?: bigint;
                            constExpr?: {
                                nullValue?: _134.NullValue;
                                boolValue?: boolean;
                                int64Value?: bigint;
                                uint64Value?: bigint;
                                doubleValue?: number;
                                stringValue?: string;
                                bytesValue?: Uint8Array;
                                durationValue?: {
                                    seconds?: bigint;
                                    nanos?: number;
                                };
                                timestampValue?: {
                                    seconds?: bigint;
                                    nanos?: number;
                                };
                            };
                            identExpr?: {
                                name?: string;
                            };
                            selectExpr?: {
                                operand?: any;
                                field?: string;
                                testOnly?: boolean;
                            };
                            callExpr?: {
                                target?: any;
                                function?: string;
                                args?: any[];
                            };
                            listExpr?: {
                                elements?: any[];
                                optionalIndices?: number[];
                            };
                            structExpr?: {
                                messageName?: string;
                                entries?: {
                                    id?: bigint;
                                    fieldKey?: string;
                                    mapKey?: any;
                                    value?: any;
                                    optionalEntry?: boolean;
                                }[];
                            };
                            comprehensionExpr?: any;
                        };
                    }): _99.Expr_Comprehension;
                };
                Constant: {
                    encode(message: _99.Constant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _99.Constant;
                    fromJSON(object: any): _99.Constant;
                    toJSON(message: _99.Constant): unknown;
                    fromPartial(object: {
                        nullValue?: _134.NullValue;
                        boolValue?: boolean;
                        int64Value?: bigint;
                        uint64Value?: bigint;
                        doubleValue?: number;
                        stringValue?: string;
                        bytesValue?: Uint8Array;
                        durationValue?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        timestampValue?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                    }): _99.Constant;
                };
                SourceInfo_PositionsEntry: {
                    encode(message: _99.SourceInfo_PositionsEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _99.SourceInfo_PositionsEntry;
                    fromJSON(object: any): _99.SourceInfo_PositionsEntry;
                    toJSON(message: _99.SourceInfo_PositionsEntry): unknown;
                    fromPartial(object: {
                        key?: bigint;
                        value?: number;
                    }): _99.SourceInfo_PositionsEntry;
                };
                SourceInfo_MacroCallsEntry: {
                    encode(message: _99.SourceInfo_MacroCallsEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _99.SourceInfo_MacroCallsEntry;
                    fromJSON(object: any): _99.SourceInfo_MacroCallsEntry;
                    toJSON(message: _99.SourceInfo_MacroCallsEntry): unknown;
                    fromPartial(object: {
                        key?: bigint;
                        value?: {
                            id?: bigint;
                            constExpr?: {
                                nullValue?: _134.NullValue;
                                boolValue?: boolean;
                                int64Value?: bigint;
                                uint64Value?: bigint;
                                doubleValue?: number;
                                stringValue?: string;
                                bytesValue?: Uint8Array;
                                durationValue?: {
                                    seconds?: bigint;
                                    nanos?: number;
                                };
                                timestampValue?: {
                                    seconds?: bigint;
                                    nanos?: number;
                                };
                            };
                            identExpr?: {
                                name?: string;
                            };
                            selectExpr?: {
                                operand?: any;
                                field?: string;
                                testOnly?: boolean;
                            };
                            callExpr?: {
                                target?: any;
                                function?: string;
                                args?: any[];
                            };
                            listExpr?: {
                                elements?: any[];
                                optionalIndices?: number[];
                            };
                            structExpr?: {
                                messageName?: string;
                                entries?: {
                                    id?: bigint;
                                    fieldKey?: string;
                                    mapKey?: any;
                                    value?: any;
                                    optionalEntry?: boolean;
                                }[];
                            };
                            comprehensionExpr?: {
                                iterVar?: string;
                                iterRange?: any;
                                accuVar?: string;
                                accuInit?: any;
                                loopCondition?: any;
                                loopStep?: any;
                                result?: any;
                            };
                        };
                    }): _99.SourceInfo_MacroCallsEntry;
                };
                SourceInfo: {
                    encode(message: _99.SourceInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _99.SourceInfo;
                    fromJSON(object: any): _99.SourceInfo;
                    toJSON(message: _99.SourceInfo): unknown;
                    fromPartial(object: {
                        syntaxVersion?: string;
                        location?: string;
                        lineOffsets?: number[];
                        positions?: {};
                        macroCalls?: {};
                    }): _99.SourceInfo;
                };
                SourcePosition: {
                    encode(message: _99.SourcePosition, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _99.SourcePosition;
                    fromJSON(object: any): _99.SourcePosition;
                    toJSON(message: _99.SourcePosition): unknown;
                    fromPartial(object: {
                        location?: string;
                        offset?: number;
                        line?: number;
                        column?: number;
                    }): _99.SourcePosition;
                };
                Explain: {
                    encode(message: _98.Explain, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _98.Explain;
                    fromJSON(object: any): _98.Explain;
                    toJSON(message: _98.Explain): unknown;
                    fromPartial(object: {
                        values?: {
                            nullValue?: _134.NullValue;
                            boolValue?: boolean;
                            int64Value?: bigint;
                            uint64Value?: bigint;
                            doubleValue?: number;
                            stringValue?: string;
                            bytesValue?: Uint8Array;
                            enumValue?: {
                                type?: string;
                                value?: number;
                            };
                            objectValue?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            mapValue?: {
                                entries?: {
                                    key?: any;
                                    value?: any;
                                }[];
                            };
                            listValue?: {
                                values?: any[];
                            };
                            typeValue?: string;
                        }[];
                        exprSteps?: {
                            id?: bigint;
                            valueIndex?: number;
                        }[];
                    }): _98.Explain;
                };
                Explain_ExprStep: {
                    encode(message: _98.Explain_ExprStep, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _98.Explain_ExprStep;
                    fromJSON(object: any): _98.Explain_ExprStep;
                    toJSON(message: _98.Explain_ExprStep): unknown;
                    fromPartial(object: {
                        id?: bigint;
                        valueIndex?: number;
                    }): _98.Explain_ExprStep;
                };
                EvalState: {
                    encode(message: _97.EvalState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _97.EvalState;
                    fromJSON(object: any): _97.EvalState;
                    toJSON(message: _97.EvalState): unknown;
                    fromPartial(object: {
                        values?: {
                            value?: {
                                nullValue?: _134.NullValue;
                                boolValue?: boolean;
                                int64Value?: bigint;
                                uint64Value?: bigint;
                                doubleValue?: number;
                                stringValue?: string;
                                bytesValue?: Uint8Array;
                                enumValue?: {
                                    type?: string;
                                    value?: number;
                                };
                                objectValue?: {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                };
                                mapValue?: {
                                    entries?: {
                                        key?: any;
                                        value?: any;
                                    }[];
                                };
                                listValue?: {
                                    values?: any[];
                                };
                                typeValue?: string;
                            };
                            error?: {
                                errors?: {
                                    code?: number;
                                    message?: string;
                                    details?: {
                                        typeUrl?: string;
                                        value?: Uint8Array;
                                    }[];
                                }[];
                            };
                            unknown?: {
                                exprs?: bigint[];
                            };
                        }[];
                        results?: {
                            expr?: bigint;
                            value?: bigint;
                        }[];
                    }): _97.EvalState;
                };
                EvalState_Result: {
                    encode(message: _97.EvalState_Result, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _97.EvalState_Result;
                    fromJSON(object: any): _97.EvalState_Result;
                    toJSON(message: _97.EvalState_Result): unknown;
                    fromPartial(object: {
                        expr?: bigint;
                        value?: bigint;
                    }): _97.EvalState_Result;
                };
                ExprValue: {
                    encode(message: _97.ExprValue, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _97.ExprValue;
                    fromJSON(object: any): _97.ExprValue;
                    toJSON(message: _97.ExprValue): unknown;
                    fromPartial(object: {
                        value?: {
                            nullValue?: _134.NullValue;
                            boolValue?: boolean;
                            int64Value?: bigint;
                            uint64Value?: bigint;
                            doubleValue?: number;
                            stringValue?: string;
                            bytesValue?: Uint8Array;
                            enumValue?: {
                                type?: string;
                                value?: number;
                            };
                            objectValue?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            mapValue?: {
                                entries?: {
                                    key?: any;
                                    value?: any;
                                }[];
                            };
                            listValue?: {
                                values?: any[];
                            };
                            typeValue?: string;
                        };
                        error?: {
                            errors?: {
                                code?: number;
                                message?: string;
                                details?: {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                }[];
                            }[];
                        };
                        unknown?: {
                            exprs?: bigint[];
                        };
                    }): _97.ExprValue;
                };
                ErrorSet: {
                    encode(message: _97.ErrorSet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _97.ErrorSet;
                    fromJSON(object: any): _97.ErrorSet;
                    toJSON(message: _97.ErrorSet): unknown;
                    fromPartial(object: {
                        errors?: {
                            code?: number;
                            message?: string;
                            details?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                        }[];
                    }): _97.ErrorSet;
                };
                UnknownSet: {
                    encode(message: _97.UnknownSet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _97.UnknownSet;
                    fromJSON(object: any): _97.UnknownSet;
                    toJSON(message: _97.UnknownSet): unknown;
                    fromPartial(object: {
                        exprs?: bigint[];
                    }): _97.UnknownSet;
                };
                type_PrimitiveTypeFromJSON(object: any): _96.Type_PrimitiveType;
                type_PrimitiveTypeToJSON(object: _96.Type_PrimitiveType): string;
                type_WellKnownTypeFromJSON(object: any): _96.Type_WellKnownType;
                type_WellKnownTypeToJSON(object: _96.Type_WellKnownType): string;
                Type_PrimitiveType: typeof _96.Type_PrimitiveType;
                Type_WellKnownType: typeof _96.Type_WellKnownType;
                CheckedExpr_ReferenceMapEntry: {
                    encode(message: _96.CheckedExpr_ReferenceMapEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _96.CheckedExpr_ReferenceMapEntry;
                    fromJSON(object: any): _96.CheckedExpr_ReferenceMapEntry;
                    toJSON(message: _96.CheckedExpr_ReferenceMapEntry): unknown;
                    fromPartial(object: {
                        key?: bigint;
                        value?: {
                            name?: string;
                            overloadId?: string[];
                            value?: {
                                nullValue?: _134.NullValue;
                                boolValue?: boolean;
                                int64Value?: bigint;
                                uint64Value?: bigint;
                                doubleValue?: number;
                                stringValue?: string;
                                bytesValue?: Uint8Array;
                                durationValue?: {
                                    seconds?: bigint;
                                    nanos?: number;
                                };
                                timestampValue?: {
                                    seconds?: bigint;
                                    nanos?: number;
                                };
                            };
                        };
                    }): _96.CheckedExpr_ReferenceMapEntry;
                };
                CheckedExpr_TypeMapEntry: {
                    encode(message: _96.CheckedExpr_TypeMapEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _96.CheckedExpr_TypeMapEntry;
                    fromJSON(object: any): _96.CheckedExpr_TypeMapEntry;
                    toJSON(message: _96.CheckedExpr_TypeMapEntry): unknown;
                    fromPartial(object: {
                        key?: bigint;
                        value?: {
                            dyn?: {};
                            null?: _134.NullValue;
                            primitive?: _96.Type_PrimitiveType;
                            wrapper?: _96.Type_PrimitiveType;
                            wellKnown?: _96.Type_WellKnownType;
                            listType?: {
                                elemType?: any;
                            };
                            mapType?: {
                                keyType?: any;
                                valueType?: any;
                            };
                            function?: {
                                resultType?: any;
                                argTypes?: any[];
                            };
                            messageType?: string;
                            typeParam?: string;
                            type?: any;
                            error?: {};
                            abstractType?: {
                                name?: string;
                                parameterTypes?: any[];
                            };
                        };
                    }): _96.CheckedExpr_TypeMapEntry;
                };
                CheckedExpr: {
                    encode(message: _96.CheckedExpr, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _96.CheckedExpr;
                    fromJSON(object: any): _96.CheckedExpr;
                    toJSON(message: _96.CheckedExpr): unknown;
                    fromPartial(object: {
                        referenceMap?: {};
                        typeMap?: {};
                        sourceInfo?: {
                            syntaxVersion?: string;
                            location?: string;
                            lineOffsets?: number[];
                            positions?: {};
                            macroCalls?: {};
                        };
                        exprVersion?: string;
                        expr?: {
                            id?: bigint;
                            constExpr?: {
                                nullValue?: _134.NullValue;
                                boolValue?: boolean;
                                int64Value?: bigint;
                                uint64Value?: bigint;
                                doubleValue?: number;
                                stringValue?: string;
                                bytesValue?: Uint8Array;
                                durationValue?: {
                                    seconds?: bigint;
                                    nanos?: number;
                                };
                                timestampValue?: {
                                    seconds?: bigint;
                                    nanos?: number;
                                };
                            };
                            identExpr?: {
                                name?: string;
                            };
                            selectExpr?: {
                                operand?: any;
                                field?: string;
                                testOnly?: boolean;
                            };
                            callExpr?: {
                                target?: any;
                                function?: string;
                                args?: any[];
                            };
                            listExpr?: {
                                elements?: any[];
                                optionalIndices?: number[];
                            };
                            structExpr?: {
                                messageName?: string;
                                entries?: {
                                    id?: bigint;
                                    fieldKey?: string;
                                    mapKey?: any;
                                    value?: any;
                                    optionalEntry?: boolean;
                                }[];
                            };
                            comprehensionExpr?: {
                                iterVar?: string;
                                iterRange?: any;
                                accuVar?: string;
                                accuInit?: any;
                                loopCondition?: any;
                                loopStep?: any;
                                result?: any;
                            };
                        };
                    }): _96.CheckedExpr;
                };
                Type: {
                    encode(message: _96.Type, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _96.Type;
                    fromJSON(object: any): _96.Type;
                    toJSON(message: _96.Type): unknown;
                    fromPartial(object: {
                        dyn?: {};
                        null?: _134.NullValue;
                        primitive?: _96.Type_PrimitiveType;
                        wrapper?: _96.Type_PrimitiveType;
                        wellKnown?: _96.Type_WellKnownType;
                        listType?: {
                            elemType?: any;
                        };
                        mapType?: {
                            keyType?: any;
                            valueType?: any;
                        };
                        function?: {
                            resultType?: any;
                            argTypes?: any[];
                        };
                        messageType?: string;
                        typeParam?: string;
                        type?: any;
                        error?: {};
                        abstractType?: {
                            name?: string;
                            parameterTypes?: any[];
                        };
                    }): _96.Type;
                };
                Type_ListType: {
                    encode(message: _96.Type_ListType, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _96.Type_ListType;
                    fromJSON(object: any): _96.Type_ListType;
                    toJSON(message: _96.Type_ListType): unknown;
                    fromPartial(object: {
                        elemType?: {
                            dyn?: {};
                            null?: _134.NullValue;
                            primitive?: _96.Type_PrimitiveType;
                            wrapper?: _96.Type_PrimitiveType;
                            wellKnown?: _96.Type_WellKnownType;
                            listType?: any;
                            mapType?: {
                                keyType?: any;
                                valueType?: any;
                            };
                            function?: {
                                resultType?: any;
                                argTypes?: any[];
                            };
                            messageType?: string;
                            typeParam?: string;
                            type?: any;
                            error?: {};
                            abstractType?: {
                                name?: string;
                                parameterTypes?: any[];
                            };
                        };
                    }): _96.Type_ListType;
                };
                Type_MapType: {
                    encode(message: _96.Type_MapType, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _96.Type_MapType;
                    fromJSON(object: any): _96.Type_MapType;
                    toJSON(message: _96.Type_MapType): unknown;
                    fromPartial(object: {
                        keyType?: {
                            dyn?: {};
                            null?: _134.NullValue;
                            primitive?: _96.Type_PrimitiveType;
                            wrapper?: _96.Type_PrimitiveType;
                            wellKnown?: _96.Type_WellKnownType;
                            listType?: {
                                elemType?: any;
                            };
                            mapType?: any;
                            function?: {
                                resultType?: any;
                                argTypes?: any[];
                            };
                            messageType?: string;
                            typeParam?: string;
                            type?: any;
                            error?: {};
                            abstractType?: {
                                name?: string;
                                parameterTypes?: any[];
                            };
                        };
                        valueType?: {
                            dyn?: {};
                            null?: _134.NullValue;
                            primitive?: _96.Type_PrimitiveType;
                            wrapper?: _96.Type_PrimitiveType;
                            wellKnown?: _96.Type_WellKnownType;
                            listType?: {
                                elemType?: any;
                            };
                            mapType?: any;
                            function?: {
                                resultType?: any;
                                argTypes?: any[];
                            };
                            messageType?: string;
                            typeParam?: string;
                            type?: any;
                            error?: {};
                            abstractType?: {
                                name?: string;
                                parameterTypes?: any[];
                            };
                        };
                    }): _96.Type_MapType;
                };
                Type_FunctionType: {
                    encode(message: _96.Type_FunctionType, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _96.Type_FunctionType;
                    fromJSON(object: any): _96.Type_FunctionType;
                    toJSON(message: _96.Type_FunctionType): unknown;
                    fromPartial(object: {
                        resultType?: {
                            dyn?: {};
                            null?: _134.NullValue;
                            primitive?: _96.Type_PrimitiveType;
                            wrapper?: _96.Type_PrimitiveType;
                            wellKnown?: _96.Type_WellKnownType;
                            listType?: {
                                elemType?: any;
                            };
                            mapType?: {
                                keyType?: any;
                                valueType?: any;
                            };
                            function?: any;
                            messageType?: string;
                            typeParam?: string;
                            type?: any;
                            error?: {};
                            abstractType?: {
                                name?: string;
                                parameterTypes?: any[];
                            };
                        };
                        argTypes?: {
                            dyn?: {};
                            null?: _134.NullValue;
                            primitive?: _96.Type_PrimitiveType;
                            wrapper?: _96.Type_PrimitiveType;
                            wellKnown?: _96.Type_WellKnownType;
                            listType?: {
                                elemType?: any;
                            };
                            mapType?: {
                                keyType?: any;
                                valueType?: any;
                            };
                            function?: any;
                            messageType?: string;
                            typeParam?: string;
                            type?: any;
                            error?: {};
                            abstractType?: {
                                name?: string;
                                parameterTypes?: any[];
                            };
                        }[];
                    }): _96.Type_FunctionType;
                };
                Type_AbstractType: {
                    encode(message: _96.Type_AbstractType, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _96.Type_AbstractType;
                    fromJSON(object: any): _96.Type_AbstractType;
                    toJSON(message: _96.Type_AbstractType): unknown;
                    fromPartial(object: {
                        name?: string;
                        parameterTypes?: {
                            dyn?: {};
                            null?: _134.NullValue;
                            primitive?: _96.Type_PrimitiveType;
                            wrapper?: _96.Type_PrimitiveType;
                            wellKnown?: _96.Type_WellKnownType;
                            listType?: {
                                elemType?: any;
                            };
                            mapType?: {
                                keyType?: any;
                                valueType?: any;
                            };
                            function?: {
                                resultType?: any;
                                argTypes?: any[];
                            };
                            messageType?: string;
                            typeParam?: string;
                            type?: any;
                            error?: {};
                            abstractType?: any;
                        }[];
                    }): _96.Type_AbstractType;
                };
                Decl: {
                    encode(message: _96.Decl, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _96.Decl;
                    fromJSON(object: any): _96.Decl;
                    toJSON(message: _96.Decl): unknown;
                    fromPartial(object: {
                        name?: string;
                        ident?: {
                            type?: {
                                dyn?: {};
                                null?: _134.NullValue;
                                primitive?: _96.Type_PrimitiveType;
                                wrapper?: _96.Type_PrimitiveType;
                                wellKnown?: _96.Type_WellKnownType;
                                listType?: {
                                    elemType?: any;
                                };
                                mapType?: {
                                    keyType?: any;
                                    valueType?: any;
                                };
                                function?: {
                                    resultType?: any;
                                    argTypes?: any[];
                                };
                                messageType?: string;
                                typeParam?: string;
                                type?: any;
                                error?: {};
                                abstractType?: {
                                    name?: string;
                                    parameterTypes?: any[];
                                };
                            };
                            value?: {
                                nullValue?: _134.NullValue;
                                boolValue?: boolean;
                                int64Value?: bigint;
                                uint64Value?: bigint;
                                doubleValue?: number;
                                stringValue?: string;
                                bytesValue?: Uint8Array;
                                durationValue?: {
                                    seconds?: bigint;
                                    nanos?: number;
                                };
                                timestampValue?: {
                                    seconds?: bigint;
                                    nanos?: number;
                                };
                            };
                            doc?: string;
                        };
                        function?: {
                            overloads?: {
                                overloadId?: string;
                                params?: {
                                    dyn?: {};
                                    null?: _134.NullValue;
                                    primitive?: _96.Type_PrimitiveType;
                                    wrapper?: _96.Type_PrimitiveType;
                                    wellKnown?: _96.Type_WellKnownType;
                                    listType?: {
                                        elemType?: any;
                                    };
                                    mapType?: {
                                        keyType?: any;
                                        valueType?: any;
                                    };
                                    function?: {
                                        resultType?: any;
                                        argTypes?: any[];
                                    };
                                    messageType?: string;
                                    typeParam?: string;
                                    type?: any;
                                    error?: {};
                                    abstractType?: {
                                        name?: string;
                                        parameterTypes?: any[];
                                    };
                                }[];
                                typeParams?: string[];
                                resultType?: {
                                    dyn?: {};
                                    null?: _134.NullValue;
                                    primitive?: _96.Type_PrimitiveType;
                                    wrapper?: _96.Type_PrimitiveType;
                                    wellKnown?: _96.Type_WellKnownType;
                                    listType?: {
                                        elemType?: any;
                                    };
                                    mapType?: {
                                        keyType?: any;
                                        valueType?: any;
                                    };
                                    function?: {
                                        resultType?: any;
                                        argTypes?: any[];
                                    };
                                    messageType?: string;
                                    typeParam?: string;
                                    type?: any;
                                    error?: {};
                                    abstractType?: {
                                        name?: string;
                                        parameterTypes?: any[];
                                    };
                                };
                                isInstanceFunction?: boolean;
                                doc?: string;
                            }[];
                        };
                    }): _96.Decl;
                };
                Decl_IdentDecl: {
                    encode(message: _96.Decl_IdentDecl, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _96.Decl_IdentDecl;
                    fromJSON(object: any): _96.Decl_IdentDecl;
                    toJSON(message: _96.Decl_IdentDecl): unknown;
                    fromPartial(object: {
                        type?: {
                            dyn?: {};
                            null?: _134.NullValue;
                            primitive?: _96.Type_PrimitiveType;
                            wrapper?: _96.Type_PrimitiveType;
                            wellKnown?: _96.Type_WellKnownType;
                            listType?: {
                                elemType?: any;
                            };
                            mapType?: {
                                keyType?: any;
                                valueType?: any;
                            };
                            function?: {
                                resultType?: any;
                                argTypes?: any[];
                            };
                            messageType?: string;
                            typeParam?: string;
                            type?: any;
                            error?: {};
                            abstractType?: {
                                name?: string;
                                parameterTypes?: any[];
                            };
                        };
                        value?: {
                            nullValue?: _134.NullValue;
                            boolValue?: boolean;
                            int64Value?: bigint;
                            uint64Value?: bigint;
                            doubleValue?: number;
                            stringValue?: string;
                            bytesValue?: Uint8Array;
                            durationValue?: {
                                seconds?: bigint;
                                nanos?: number;
                            };
                            timestampValue?: {
                                seconds?: bigint;
                                nanos?: number;
                            };
                        };
                        doc?: string;
                    }): _96.Decl_IdentDecl;
                };
                Decl_FunctionDecl: {
                    encode(message: _96.Decl_FunctionDecl, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _96.Decl_FunctionDecl;
                    fromJSON(object: any): _96.Decl_FunctionDecl;
                    toJSON(message: _96.Decl_FunctionDecl): unknown;
                    fromPartial(object: {
                        overloads?: {
                            overloadId?: string;
                            params?: {
                                dyn?: {};
                                null?: _134.NullValue;
                                primitive?: _96.Type_PrimitiveType;
                                wrapper?: _96.Type_PrimitiveType;
                                wellKnown?: _96.Type_WellKnownType;
                                listType?: {
                                    elemType?: any;
                                };
                                mapType?: {
                                    keyType?: any;
                                    valueType?: any;
                                };
                                function?: {
                                    resultType?: any;
                                    argTypes?: any[];
                                };
                                messageType?: string;
                                typeParam?: string;
                                type?: any;
                                error?: {};
                                abstractType?: {
                                    name?: string;
                                    parameterTypes?: any[];
                                };
                            }[];
                            typeParams?: string[];
                            resultType?: {
                                dyn?: {};
                                null?: _134.NullValue;
                                primitive?: _96.Type_PrimitiveType;
                                wrapper?: _96.Type_PrimitiveType;
                                wellKnown?: _96.Type_WellKnownType;
                                listType?: {
                                    elemType?: any;
                                };
                                mapType?: {
                                    keyType?: any;
                                    valueType?: any;
                                };
                                function?: {
                                    resultType?: any;
                                    argTypes?: any[];
                                };
                                messageType?: string;
                                typeParam?: string;
                                type?: any;
                                error?: {};
                                abstractType?: {
                                    name?: string;
                                    parameterTypes?: any[];
                                };
                            };
                            isInstanceFunction?: boolean;
                            doc?: string;
                        }[];
                    }): _96.Decl_FunctionDecl;
                };
                Decl_FunctionDecl_Overload: {
                    encode(message: _96.Decl_FunctionDecl_Overload, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _96.Decl_FunctionDecl_Overload;
                    fromJSON(object: any): _96.Decl_FunctionDecl_Overload;
                    toJSON(message: _96.Decl_FunctionDecl_Overload): unknown;
                    fromPartial(object: {
                        overloadId?: string;
                        params?: {
                            dyn?: {};
                            null?: _134.NullValue;
                            primitive?: _96.Type_PrimitiveType;
                            wrapper?: _96.Type_PrimitiveType;
                            wellKnown?: _96.Type_WellKnownType;
                            listType?: {
                                elemType?: any;
                            };
                            mapType?: {
                                keyType?: any;
                                valueType?: any;
                            };
                            function?: {
                                resultType?: any;
                                argTypes?: any[];
                            };
                            messageType?: string;
                            typeParam?: string;
                            type?: any;
                            error?: {};
                            abstractType?: {
                                name?: string;
                                parameterTypes?: any[];
                            };
                        }[];
                        typeParams?: string[];
                        resultType?: {
                            dyn?: {};
                            null?: _134.NullValue;
                            primitive?: _96.Type_PrimitiveType;
                            wrapper?: _96.Type_PrimitiveType;
                            wellKnown?: _96.Type_WellKnownType;
                            listType?: {
                                elemType?: any;
                            };
                            mapType?: {
                                keyType?: any;
                                valueType?: any;
                            };
                            function?: {
                                resultType?: any;
                                argTypes?: any[];
                            };
                            messageType?: string;
                            typeParam?: string;
                            type?: any;
                            error?: {};
                            abstractType?: {
                                name?: string;
                                parameterTypes?: any[];
                            };
                        };
                        isInstanceFunction?: boolean;
                        doc?: string;
                    }): _96.Decl_FunctionDecl_Overload;
                };
                Reference: {
                    encode(message: _96.Reference, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _96.Reference;
                    fromJSON(object: any): _96.Reference;
                    toJSON(message: _96.Reference): unknown;
                    fromPartial(object: {
                        name?: string;
                        overloadId?: string[];
                        value?: {
                            nullValue?: _134.NullValue;
                            boolValue?: boolean;
                            int64Value?: bigint;
                            uint64Value?: bigint;
                            doubleValue?: number;
                            stringValue?: string;
                            bytesValue?: Uint8Array;
                            durationValue?: {
                                seconds?: bigint;
                                nanos?: number;
                            };
                            timestampValue?: {
                                seconds?: bigint;
                                nanos?: number;
                            };
                        };
                    }): _96.Reference;
                };
            };
            const v1beta1: {
                Value: {
                    encode(message: _105.Value, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _105.Value;
                    fromJSON(object: any): _105.Value;
                    toJSON(message: _105.Value): unknown;
                    fromPartial(object: {
                        nullValue?: _134.NullValue;
                        boolValue?: boolean;
                        int64Value?: bigint;
                        uint64Value?: bigint;
                        doubleValue?: number;
                        stringValue?: string;
                        bytesValue?: Uint8Array;
                        enumValue?: {
                            type?: string;
                            value?: number;
                        };
                        objectValue?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        mapValue?: {
                            entries?: {
                                key?: any;
                                value?: any;
                            }[];
                        };
                        listValue?: {
                            values?: any[];
                        };
                        typeValue?: string;
                    }): _105.Value;
                };
                EnumValue: {
                    encode(message: _105.EnumValue, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _105.EnumValue;
                    fromJSON(object: any): _105.EnumValue;
                    toJSON(message: _105.EnumValue): unknown;
                    fromPartial(object: {
                        type?: string;
                        value?: number;
                    }): _105.EnumValue;
                };
                ListValue: {
                    encode(message: _105.ListValue, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _105.ListValue;
                    fromJSON(object: any): _105.ListValue;
                    toJSON(message: _105.ListValue): unknown;
                    fromPartial(object: {
                        values?: {
                            nullValue?: _134.NullValue;
                            boolValue?: boolean;
                            int64Value?: bigint;
                            uint64Value?: bigint;
                            doubleValue?: number;
                            stringValue?: string;
                            bytesValue?: Uint8Array;
                            enumValue?: {
                                type?: string;
                                value?: number;
                            };
                            objectValue?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            mapValue?: {
                                entries?: {
                                    key?: any;
                                    value?: any;
                                }[];
                            };
                            listValue?: any;
                            typeValue?: string;
                        }[];
                    }): _105.ListValue;
                };
                MapValue: {
                    encode(message: _105.MapValue, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _105.MapValue;
                    fromJSON(object: any): _105.MapValue;
                    toJSON(message: _105.MapValue): unknown;
                    fromPartial(object: {
                        entries?: {
                            key?: {
                                nullValue?: _134.NullValue;
                                boolValue?: boolean;
                                int64Value?: bigint;
                                uint64Value?: bigint;
                                doubleValue?: number;
                                stringValue?: string;
                                bytesValue?: Uint8Array;
                                enumValue?: {
                                    type?: string;
                                    value?: number;
                                };
                                objectValue?: {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                };
                                mapValue?: any;
                                listValue?: {
                                    values?: any[];
                                };
                                typeValue?: string;
                            };
                            value?: {
                                nullValue?: _134.NullValue;
                                boolValue?: boolean;
                                int64Value?: bigint;
                                uint64Value?: bigint;
                                doubleValue?: number;
                                stringValue?: string;
                                bytesValue?: Uint8Array;
                                enumValue?: {
                                    type?: string;
                                    value?: number;
                                };
                                objectValue?: {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                };
                                mapValue?: any;
                                listValue?: {
                                    values?: any[];
                                };
                                typeValue?: string;
                            };
                        }[];
                    }): _105.MapValue;
                };
                MapValue_Entry: {
                    encode(message: _105.MapValue_Entry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _105.MapValue_Entry;
                    fromJSON(object: any): _105.MapValue_Entry;
                    toJSON(message: _105.MapValue_Entry): unknown;
                    fromPartial(object: {
                        key?: {
                            nullValue?: _134.NullValue;
                            boolValue?: boolean;
                            int64Value?: bigint;
                            uint64Value?: bigint;
                            doubleValue?: number;
                            stringValue?: string;
                            bytesValue?: Uint8Array;
                            enumValue?: {
                                type?: string;
                                value?: number;
                            };
                            objectValue?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            mapValue?: {
                                entries?: any[];
                            };
                            listValue?: {
                                values?: any[];
                            };
                            typeValue?: string;
                        };
                        value?: {
                            nullValue?: _134.NullValue;
                            boolValue?: boolean;
                            int64Value?: bigint;
                            uint64Value?: bigint;
                            doubleValue?: number;
                            stringValue?: string;
                            bytesValue?: Uint8Array;
                            enumValue?: {
                                type?: string;
                                value?: number;
                            };
                            objectValue?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            mapValue?: {
                                entries?: any[];
                            };
                            listValue?: {
                                values?: any[];
                            };
                            typeValue?: string;
                        };
                    }): _105.MapValue_Entry;
                };
                SourceInfo_PositionsEntry: {
                    encode(message: _104.SourceInfo_PositionsEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _104.SourceInfo_PositionsEntry;
                    fromJSON(object: any): _104.SourceInfo_PositionsEntry;
                    toJSON(message: _104.SourceInfo_PositionsEntry): unknown;
                    fromPartial(object: {
                        key?: number;
                        value?: number;
                    }): _104.SourceInfo_PositionsEntry;
                };
                SourceInfo: {
                    encode(message: _104.SourceInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _104.SourceInfo;
                    fromJSON(object: any): _104.SourceInfo;
                    toJSON(message: _104.SourceInfo): unknown;
                    fromPartial(object: {
                        location?: string;
                        lineOffsets?: number[];
                        positions?: {
                            [x: number]: number;
                        };
                    }): _104.SourceInfo;
                };
                SourcePosition: {
                    encode(message: _104.SourcePosition, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _104.SourcePosition;
                    fromJSON(object: any): _104.SourcePosition;
                    toJSON(message: _104.SourcePosition): unknown;
                    fromPartial(object: {
                        location?: string;
                        offset?: number;
                        line?: number;
                        column?: number;
                    }): _104.SourcePosition;
                };
                ParsedExpr: {
                    encode(message: _103.ParsedExpr, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _103.ParsedExpr;
                    fromJSON(object: any): _103.ParsedExpr;
                    toJSON(message: _103.ParsedExpr): unknown;
                    fromPartial(object: {
                        expr?: {
                            id?: number;
                            literalExpr?: {
                                nullValue?: _134.NullValue;
                                boolValue?: boolean;
                                int64Value?: bigint;
                                uint64Value?: bigint;
                                doubleValue?: number;
                                stringValue?: string;
                                bytesValue?: Uint8Array;
                            };
                            identExpr?: {
                                name?: string;
                            };
                            selectExpr?: {
                                operand?: any;
                                field?: string;
                                testOnly?: boolean;
                            };
                            callExpr?: {
                                target?: any;
                                function?: string;
                                args?: any[];
                            };
                            listExpr?: {
                                elements?: any[];
                            };
                            structExpr?: {
                                type?: string;
                                entries?: {
                                    id?: number;
                                    fieldKey?: string;
                                    mapKey?: any;
                                    value?: any;
                                }[];
                            };
                            comprehensionExpr?: {
                                iterVar?: string;
                                iterRange?: any;
                                accuVar?: string;
                                accuInit?: any;
                                loopCondition?: any;
                                loopStep?: any;
                                result?: any;
                            };
                        };
                        sourceInfo?: {
                            location?: string;
                            lineOffsets?: number[];
                            positions?: {
                                [x: number]: number;
                            };
                        };
                        syntaxVersion?: string;
                    }): _103.ParsedExpr;
                };
                Expr: {
                    encode(message: _103.Expr, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _103.Expr;
                    fromJSON(object: any): _103.Expr;
                    toJSON(message: _103.Expr): unknown;
                    fromPartial(object: {
                        id?: number;
                        literalExpr?: {
                            nullValue?: _134.NullValue;
                            boolValue?: boolean;
                            int64Value?: bigint;
                            uint64Value?: bigint;
                            doubleValue?: number;
                            stringValue?: string;
                            bytesValue?: Uint8Array;
                        };
                        identExpr?: {
                            name?: string;
                        };
                        selectExpr?: {
                            operand?: any;
                            field?: string;
                            testOnly?: boolean;
                        };
                        callExpr?: {
                            target?: any;
                            function?: string;
                            args?: any[];
                        };
                        listExpr?: {
                            elements?: any[];
                        };
                        structExpr?: {
                            type?: string;
                            entries?: {
                                id?: number;
                                fieldKey?: string;
                                mapKey?: any;
                                value?: any;
                            }[];
                        };
                        comprehensionExpr?: {
                            iterVar?: string;
                            iterRange?: any;
                            accuVar?: string;
                            accuInit?: any;
                            loopCondition?: any;
                            loopStep?: any;
                            result?: any;
                        };
                    }): _103.Expr;
                };
                Expr_Ident: {
                    encode(message: _103.Expr_Ident, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _103.Expr_Ident;
                    fromJSON(object: any): _103.Expr_Ident;
                    toJSON(message: _103.Expr_Ident): unknown;
                    fromPartial(object: {
                        name?: string;
                    }): _103.Expr_Ident;
                };
                Expr_Select: {
                    encode(message: _103.Expr_Select, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _103.Expr_Select;
                    fromJSON(object: any): _103.Expr_Select;
                    toJSON(message: _103.Expr_Select): unknown;
                    fromPartial(object: {
                        operand?: {
                            id?: number;
                            literalExpr?: {
                                nullValue?: _134.NullValue;
                                boolValue?: boolean;
                                int64Value?: bigint;
                                uint64Value?: bigint;
                                doubleValue?: number;
                                stringValue?: string;
                                bytesValue?: Uint8Array;
                            };
                            identExpr?: {
                                name?: string;
                            };
                            selectExpr?: any;
                            callExpr?: {
                                target?: any;
                                function?: string;
                                args?: any[];
                            };
                            listExpr?: {
                                elements?: any[];
                            };
                            structExpr?: {
                                type?: string;
                                entries?: {
                                    id?: number;
                                    fieldKey?: string;
                                    mapKey?: any;
                                    value?: any;
                                }[];
                            };
                            comprehensionExpr?: {
                                iterVar?: string;
                                iterRange?: any;
                                accuVar?: string;
                                accuInit?: any;
                                loopCondition?: any;
                                loopStep?: any;
                                result?: any;
                            };
                        };
                        field?: string;
                        testOnly?: boolean;
                    }): _103.Expr_Select;
                };
                Expr_Call: {
                    encode(message: _103.Expr_Call, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _103.Expr_Call;
                    fromJSON(object: any): _103.Expr_Call;
                    toJSON(message: _103.Expr_Call): unknown;
                    fromPartial(object: {
                        target?: {
                            id?: number;
                            literalExpr?: {
                                nullValue?: _134.NullValue;
                                boolValue?: boolean;
                                int64Value?: bigint;
                                uint64Value?: bigint;
                                doubleValue?: number;
                                stringValue?: string;
                                bytesValue?: Uint8Array;
                            };
                            identExpr?: {
                                name?: string;
                            };
                            selectExpr?: {
                                operand?: any;
                                field?: string;
                                testOnly?: boolean;
                            };
                            callExpr?: any;
                            listExpr?: {
                                elements?: any[];
                            };
                            structExpr?: {
                                type?: string;
                                entries?: {
                                    id?: number;
                                    fieldKey?: string;
                                    mapKey?: any;
                                    value?: any;
                                }[];
                            };
                            comprehensionExpr?: {
                                iterVar?: string;
                                iterRange?: any;
                                accuVar?: string;
                                accuInit?: any;
                                loopCondition?: any;
                                loopStep?: any;
                                result?: any;
                            };
                        };
                        function?: string;
                        args?: {
                            id?: number;
                            literalExpr?: {
                                nullValue?: _134.NullValue;
                                boolValue?: boolean;
                                int64Value?: bigint;
                                uint64Value?: bigint;
                                doubleValue?: number;
                                stringValue?: string;
                                bytesValue?: Uint8Array;
                            };
                            identExpr?: {
                                name?: string;
                            };
                            selectExpr?: {
                                operand?: any;
                                field?: string;
                                testOnly?: boolean;
                            };
                            callExpr?: any;
                            listExpr?: {
                                elements?: any[];
                            };
                            structExpr?: {
                                type?: string;
                                entries?: {
                                    id?: number;
                                    fieldKey?: string;
                                    mapKey?: any;
                                    value?: any;
                                }[];
                            };
                            comprehensionExpr?: {
                                iterVar?: string;
                                iterRange?: any;
                                accuVar?: string;
                                accuInit?: any;
                                loopCondition?: any;
                                loopStep?: any;
                                result?: any;
                            };
                        }[];
                    }): _103.Expr_Call;
                };
                Expr_CreateList: {
                    encode(message: _103.Expr_CreateList, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _103.Expr_CreateList;
                    fromJSON(object: any): _103.Expr_CreateList;
                    toJSON(message: _103.Expr_CreateList): unknown;
                    fromPartial(object: {
                        elements?: {
                            id?: number;
                            literalExpr?: {
                                nullValue?: _134.NullValue;
                                boolValue?: boolean;
                                int64Value?: bigint;
                                uint64Value?: bigint;
                                doubleValue?: number;
                                stringValue?: string;
                                bytesValue?: Uint8Array;
                            };
                            identExpr?: {
                                name?: string;
                            };
                            selectExpr?: {
                                operand?: any;
                                field?: string;
                                testOnly?: boolean;
                            };
                            callExpr?: {
                                target?: any;
                                function?: string;
                                args?: any[];
                            };
                            listExpr?: any;
                            structExpr?: {
                                type?: string;
                                entries?: {
                                    id?: number;
                                    fieldKey?: string;
                                    mapKey?: any;
                                    value?: any;
                                }[];
                            };
                            comprehensionExpr?: {
                                iterVar?: string;
                                iterRange?: any;
                                accuVar?: string;
                                accuInit?: any;
                                loopCondition?: any;
                                loopStep?: any;
                                result?: any;
                            };
                        }[];
                    }): _103.Expr_CreateList;
                };
                Expr_CreateStruct: {
                    encode(message: _103.Expr_CreateStruct, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _103.Expr_CreateStruct;
                    fromJSON(object: any): _103.Expr_CreateStruct;
                    toJSON(message: _103.Expr_CreateStruct): unknown;
                    fromPartial(object: {
                        type?: string;
                        entries?: {
                            id?: number;
                            fieldKey?: string;
                            mapKey?: {
                                id?: number;
                                literalExpr?: {
                                    nullValue?: _134.NullValue;
                                    boolValue?: boolean;
                                    int64Value?: bigint;
                                    uint64Value?: bigint;
                                    doubleValue?: number;
                                    stringValue?: string;
                                    bytesValue?: Uint8Array;
                                };
                                identExpr?: {
                                    name?: string;
                                };
                                selectExpr?: {
                                    operand?: any;
                                    field?: string;
                                    testOnly?: boolean;
                                };
                                callExpr?: {
                                    target?: any;
                                    function?: string;
                                    args?: any[];
                                };
                                listExpr?: {
                                    elements?: any[];
                                };
                                structExpr?: any;
                                comprehensionExpr?: {
                                    iterVar?: string;
                                    iterRange?: any;
                                    accuVar?: string;
                                    accuInit?: any;
                                    loopCondition?: any;
                                    loopStep?: any;
                                    result?: any;
                                };
                            };
                            value?: {
                                id?: number;
                                literalExpr?: {
                                    nullValue?: _134.NullValue;
                                    boolValue?: boolean;
                                    int64Value?: bigint;
                                    uint64Value?: bigint;
                                    doubleValue?: number;
                                    stringValue?: string;
                                    bytesValue?: Uint8Array;
                                };
                                identExpr?: {
                                    name?: string;
                                };
                                selectExpr?: {
                                    operand?: any;
                                    field?: string;
                                    testOnly?: boolean;
                                };
                                callExpr?: {
                                    target?: any;
                                    function?: string;
                                    args?: any[];
                                };
                                listExpr?: {
                                    elements?: any[];
                                };
                                structExpr?: any;
                                comprehensionExpr?: {
                                    iterVar?: string;
                                    iterRange?: any;
                                    accuVar?: string;
                                    accuInit?: any;
                                    loopCondition?: any;
                                    loopStep?: any;
                                    result?: any;
                                };
                            };
                        }[];
                    }): _103.Expr_CreateStruct;
                };
                Expr_CreateStruct_Entry: {
                    encode(message: _103.Expr_CreateStruct_Entry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _103.Expr_CreateStruct_Entry;
                    fromJSON(object: any): _103.Expr_CreateStruct_Entry;
                    toJSON(message: _103.Expr_CreateStruct_Entry): unknown;
                    fromPartial(object: {
                        id?: number;
                        fieldKey?: string;
                        mapKey?: {
                            id?: number;
                            literalExpr?: {
                                nullValue?: _134.NullValue;
                                boolValue?: boolean;
                                int64Value?: bigint;
                                uint64Value?: bigint;
                                doubleValue?: number;
                                stringValue?: string;
                                bytesValue?: Uint8Array;
                            };
                            identExpr?: {
                                name?: string;
                            };
                            selectExpr?: {
                                operand?: any;
                                field?: string;
                                testOnly?: boolean;
                            };
                            callExpr?: {
                                target?: any;
                                function?: string;
                                args?: any[];
                            };
                            listExpr?: {
                                elements?: any[];
                            };
                            structExpr?: {
                                type?: string;
                                entries?: any[];
                            };
                            comprehensionExpr?: {
                                iterVar?: string;
                                iterRange?: any;
                                accuVar?: string;
                                accuInit?: any;
                                loopCondition?: any;
                                loopStep?: any;
                                result?: any;
                            };
                        };
                        value?: {
                            id?: number;
                            literalExpr?: {
                                nullValue?: _134.NullValue;
                                boolValue?: boolean;
                                int64Value?: bigint;
                                uint64Value?: bigint;
                                doubleValue?: number;
                                stringValue?: string;
                                bytesValue?: Uint8Array;
                            };
                            identExpr?: {
                                name?: string;
                            };
                            selectExpr?: {
                                operand?: any;
                                field?: string;
                                testOnly?: boolean;
                            };
                            callExpr?: {
                                target?: any;
                                function?: string;
                                args?: any[];
                            };
                            listExpr?: {
                                elements?: any[];
                            };
                            structExpr?: {
                                type?: string;
                                entries?: any[];
                            };
                            comprehensionExpr?: {
                                iterVar?: string;
                                iterRange?: any;
                                accuVar?: string;
                                accuInit?: any;
                                loopCondition?: any;
                                loopStep?: any;
                                result?: any;
                            };
                        };
                    }): _103.Expr_CreateStruct_Entry;
                };
                Expr_Comprehension: {
                    encode(message: _103.Expr_Comprehension, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _103.Expr_Comprehension;
                    fromJSON(object: any): _103.Expr_Comprehension;
                    toJSON(message: _103.Expr_Comprehension): unknown;
                    fromPartial(object: {
                        iterVar?: string;
                        iterRange?: {
                            id?: number;
                            literalExpr?: {
                                nullValue?: _134.NullValue;
                                boolValue?: boolean;
                                int64Value?: bigint;
                                uint64Value?: bigint;
                                doubleValue?: number;
                                stringValue?: string;
                                bytesValue?: Uint8Array;
                            };
                            identExpr?: {
                                name?: string;
                            };
                            selectExpr?: {
                                operand?: any;
                                field?: string;
                                testOnly?: boolean;
                            };
                            callExpr?: {
                                target?: any;
                                function?: string;
                                args?: any[];
                            };
                            listExpr?: {
                                elements?: any[];
                            };
                            structExpr?: {
                                type?: string;
                                entries?: {
                                    id?: number;
                                    fieldKey?: string;
                                    mapKey?: any;
                                    value?: any;
                                }[];
                            };
                            comprehensionExpr?: any;
                        };
                        accuVar?: string;
                        accuInit?: {
                            id?: number;
                            literalExpr?: {
                                nullValue?: _134.NullValue;
                                boolValue?: boolean;
                                int64Value?: bigint;
                                uint64Value?: bigint;
                                doubleValue?: number;
                                stringValue?: string;
                                bytesValue?: Uint8Array;
                            };
                            identExpr?: {
                                name?: string;
                            };
                            selectExpr?: {
                                operand?: any;
                                field?: string;
                                testOnly?: boolean;
                            };
                            callExpr?: {
                                target?: any;
                                function?: string;
                                args?: any[];
                            };
                            listExpr?: {
                                elements?: any[];
                            };
                            structExpr?: {
                                type?: string;
                                entries?: {
                                    id?: number;
                                    fieldKey?: string;
                                    mapKey?: any;
                                    value?: any;
                                }[];
                            };
                            comprehensionExpr?: any;
                        };
                        loopCondition?: {
                            id?: number;
                            literalExpr?: {
                                nullValue?: _134.NullValue;
                                boolValue?: boolean;
                                int64Value?: bigint;
                                uint64Value?: bigint;
                                doubleValue?: number;
                                stringValue?: string;
                                bytesValue?: Uint8Array;
                            };
                            identExpr?: {
                                name?: string;
                            };
                            selectExpr?: {
                                operand?: any;
                                field?: string;
                                testOnly?: boolean;
                            };
                            callExpr?: {
                                target?: any;
                                function?: string;
                                args?: any[];
                            };
                            listExpr?: {
                                elements?: any[];
                            };
                            structExpr?: {
                                type?: string;
                                entries?: {
                                    id?: number;
                                    fieldKey?: string;
                                    mapKey?: any;
                                    value?: any;
                                }[];
                            };
                            comprehensionExpr?: any;
                        };
                        loopStep?: {
                            id?: number;
                            literalExpr?: {
                                nullValue?: _134.NullValue;
                                boolValue?: boolean;
                                int64Value?: bigint;
                                uint64Value?: bigint;
                                doubleValue?: number;
                                stringValue?: string;
                                bytesValue?: Uint8Array;
                            };
                            identExpr?: {
                                name?: string;
                            };
                            selectExpr?: {
                                operand?: any;
                                field?: string;
                                testOnly?: boolean;
                            };
                            callExpr?: {
                                target?: any;
                                function?: string;
                                args?: any[];
                            };
                            listExpr?: {
                                elements?: any[];
                            };
                            structExpr?: {
                                type?: string;
                                entries?: {
                                    id?: number;
                                    fieldKey?: string;
                                    mapKey?: any;
                                    value?: any;
                                }[];
                            };
                            comprehensionExpr?: any;
                        };
                        result?: {
                            id?: number;
                            literalExpr?: {
                                nullValue?: _134.NullValue;
                                boolValue?: boolean;
                                int64Value?: bigint;
                                uint64Value?: bigint;
                                doubleValue?: number;
                                stringValue?: string;
                                bytesValue?: Uint8Array;
                            };
                            identExpr?: {
                                name?: string;
                            };
                            selectExpr?: {
                                operand?: any;
                                field?: string;
                                testOnly?: boolean;
                            };
                            callExpr?: {
                                target?: any;
                                function?: string;
                                args?: any[];
                            };
                            listExpr?: {
                                elements?: any[];
                            };
                            structExpr?: {
                                type?: string;
                                entries?: {
                                    id?: number;
                                    fieldKey?: string;
                                    mapKey?: any;
                                    value?: any;
                                }[];
                            };
                            comprehensionExpr?: any;
                        };
                    }): _103.Expr_Comprehension;
                };
                Literal: {
                    encode(message: _103.Literal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _103.Literal;
                    fromJSON(object: any): _103.Literal;
                    toJSON(message: _103.Literal): unknown;
                    fromPartial(object: {
                        nullValue?: _134.NullValue;
                        boolValue?: boolean;
                        int64Value?: bigint;
                        uint64Value?: bigint;
                        doubleValue?: number;
                        stringValue?: string;
                        bytesValue?: Uint8Array;
                    }): _103.Literal;
                };
                EvalState: {
                    encode(message: _102.EvalState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _102.EvalState;
                    fromJSON(object: any): _102.EvalState;
                    toJSON(message: _102.EvalState): unknown;
                    fromPartial(object: {
                        values?: {
                            value?: {
                                nullValue?: _134.NullValue;
                                boolValue?: boolean;
                                int64Value?: bigint;
                                uint64Value?: bigint;
                                doubleValue?: number;
                                stringValue?: string;
                                bytesValue?: Uint8Array;
                                enumValue?: {
                                    type?: string;
                                    value?: number;
                                };
                                objectValue?: {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                };
                                mapValue?: {
                                    entries?: {
                                        key?: any;
                                        value?: any;
                                    }[];
                                };
                                listValue?: {
                                    values?: any[];
                                };
                                typeValue?: string;
                            };
                            error?: {
                                errors?: {
                                    code?: number;
                                    message?: string;
                                    details?: {
                                        typeUrl?: string;
                                        value?: Uint8Array;
                                    }[];
                                }[];
                            };
                            unknown?: {
                                exprs?: {
                                    id?: number;
                                }[];
                            };
                        }[];
                        results?: {
                            expr?: {
                                id?: number;
                            };
                            value?: number;
                        }[];
                    }): _102.EvalState;
                };
                EvalState_Result: {
                    encode(message: _102.EvalState_Result, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _102.EvalState_Result;
                    fromJSON(object: any): _102.EvalState_Result;
                    toJSON(message: _102.EvalState_Result): unknown;
                    fromPartial(object: {
                        expr?: {
                            id?: number;
                        };
                        value?: number;
                    }): _102.EvalState_Result;
                };
                ExprValue: {
                    encode(message: _102.ExprValue, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _102.ExprValue;
                    fromJSON(object: any): _102.ExprValue;
                    toJSON(message: _102.ExprValue): unknown;
                    fromPartial(object: {
                        value?: {
                            nullValue?: _134.NullValue;
                            boolValue?: boolean;
                            int64Value?: bigint;
                            uint64Value?: bigint;
                            doubleValue?: number;
                            stringValue?: string;
                            bytesValue?: Uint8Array;
                            enumValue?: {
                                type?: string;
                                value?: number;
                            };
                            objectValue?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            mapValue?: {
                                entries?: {
                                    key?: any;
                                    value?: any;
                                }[];
                            };
                            listValue?: {
                                values?: any[];
                            };
                            typeValue?: string;
                        };
                        error?: {
                            errors?: {
                                code?: number;
                                message?: string;
                                details?: {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                }[];
                            }[];
                        };
                        unknown?: {
                            exprs?: {
                                id?: number;
                            }[];
                        };
                    }): _102.ExprValue;
                };
                ErrorSet: {
                    encode(message: _102.ErrorSet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _102.ErrorSet;
                    fromJSON(object: any): _102.ErrorSet;
                    toJSON(message: _102.ErrorSet): unknown;
                    fromPartial(object: {
                        errors?: {
                            code?: number;
                            message?: string;
                            details?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                        }[];
                    }): _102.ErrorSet;
                };
                UnknownSet: {
                    encode(message: _102.UnknownSet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _102.UnknownSet;
                    fromJSON(object: any): _102.UnknownSet;
                    toJSON(message: _102.UnknownSet): unknown;
                    fromPartial(object: {
                        exprs?: {
                            id?: number;
                        }[];
                    }): _102.UnknownSet;
                };
                IdRef: {
                    encode(message: _102.IdRef, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _102.IdRef;
                    fromJSON(object: any): _102.IdRef;
                    toJSON(message: _102.IdRef): unknown;
                    fromPartial(object: {
                        id?: number;
                    }): _102.IdRef;
                };
                Decl: {
                    encode(message: _101.Decl, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _101.Decl;
                    fromJSON(object: any): _101.Decl;
                    toJSON(message: _101.Decl): unknown;
                    fromPartial(object: {
                        id?: number;
                        name?: string;
                        doc?: string;
                        ident?: {
                            type?: {
                                id?: number;
                                type?: string;
                                typeParams?: any[];
                            };
                            value?: {
                                id?: number;
                                literalExpr?: {
                                    nullValue?: _134.NullValue;
                                    boolValue?: boolean;
                                    int64Value?: bigint;
                                    uint64Value?: bigint;
                                    doubleValue?: number;
                                    stringValue?: string;
                                    bytesValue?: Uint8Array;
                                };
                                identExpr?: {
                                    name?: string;
                                };
                                selectExpr?: {
                                    operand?: any;
                                    field?: string;
                                    testOnly?: boolean;
                                };
                                callExpr?: {
                                    target?: any;
                                    function?: string;
                                    args?: any[];
                                };
                                listExpr?: {
                                    elements?: any[];
                                };
                                structExpr?: {
                                    type?: string;
                                    entries?: {
                                        id?: number;
                                        fieldKey?: string;
                                        mapKey?: any;
                                        value?: any;
                                    }[];
                                };
                                comprehensionExpr?: {
                                    iterVar?: string;
                                    iterRange?: any;
                                    accuVar?: string;
                                    accuInit?: any;
                                    loopCondition?: any;
                                    loopStep?: any;
                                    result?: any;
                                };
                            };
                        };
                        function?: {
                            args?: {
                                type?: {
                                    id?: number;
                                    type?: string;
                                    typeParams?: any[];
                                };
                                value?: {
                                    id?: number;
                                    literalExpr?: {
                                        nullValue?: _134.NullValue;
                                        boolValue?: boolean;
                                        int64Value?: bigint;
                                        uint64Value?: bigint;
                                        doubleValue?: number;
                                        stringValue?: string;
                                        bytesValue?: Uint8Array;
                                    };
                                    identExpr?: {
                                        name?: string;
                                    };
                                    selectExpr?: {
                                        operand?: any;
                                        field?: string;
                                        testOnly?: boolean;
                                    };
                                    callExpr?: {
                                        target?: any;
                                        function?: string;
                                        args?: any[];
                                    };
                                    listExpr?: {
                                        elements?: any[];
                                    };
                                    structExpr?: {
                                        type?: string;
                                        entries?: {
                                            id?: number;
                                            fieldKey?: string;
                                            mapKey?: any;
                                            value?: any;
                                        }[];
                                    };
                                    comprehensionExpr?: {
                                        iterVar?: string;
                                        iterRange?: any;
                                        accuVar?: string;
                                        accuInit?: any;
                                        loopCondition?: any;
                                        loopStep?: any;
                                        result?: any;
                                    };
                                };
                            }[];
                            returnType?: {
                                id?: number;
                                type?: string;
                                typeParams?: any[];
                            };
                            receiverFunction?: boolean;
                        };
                    }): _101.Decl;
                };
                DeclType: {
                    encode(message: _101.DeclType, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _101.DeclType;
                    fromJSON(object: any): _101.DeclType;
                    toJSON(message: _101.DeclType): unknown;
                    fromPartial(object: {
                        id?: number;
                        type?: string;
                        typeParams?: any[];
                    }): _101.DeclType;
                };
                IdentDecl: {
                    encode(message: _101.IdentDecl, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _101.IdentDecl;
                    fromJSON(object: any): _101.IdentDecl;
                    toJSON(message: _101.IdentDecl): unknown;
                    fromPartial(object: {
                        type?: {
                            id?: number;
                            type?: string;
                            typeParams?: any[];
                        };
                        value?: {
                            id?: number;
                            literalExpr?: {
                                nullValue?: _134.NullValue;
                                boolValue?: boolean;
                                int64Value?: bigint;
                                uint64Value?: bigint;
                                doubleValue?: number;
                                stringValue?: string;
                                bytesValue?: Uint8Array;
                            };
                            identExpr?: {
                                name?: string;
                            };
                            selectExpr?: {
                                operand?: any;
                                field?: string;
                                testOnly?: boolean;
                            };
                            callExpr?: {
                                target?: any;
                                function?: string;
                                args?: any[];
                            };
                            listExpr?: {
                                elements?: any[];
                            };
                            structExpr?: {
                                type?: string;
                                entries?: {
                                    id?: number;
                                    fieldKey?: string;
                                    mapKey?: any;
                                    value?: any;
                                }[];
                            };
                            comprehensionExpr?: {
                                iterVar?: string;
                                iterRange?: any;
                                accuVar?: string;
                                accuInit?: any;
                                loopCondition?: any;
                                loopStep?: any;
                                result?: any;
                            };
                        };
                    }): _101.IdentDecl;
                };
                FunctionDecl: {
                    encode(message: _101.FunctionDecl, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _101.FunctionDecl;
                    fromJSON(object: any): _101.FunctionDecl;
                    toJSON(message: _101.FunctionDecl): unknown;
                    fromPartial(object: {
                        args?: {
                            type?: {
                                id?: number;
                                type?: string;
                                typeParams?: any[];
                            };
                            value?: {
                                id?: number;
                                literalExpr?: {
                                    nullValue?: _134.NullValue;
                                    boolValue?: boolean;
                                    int64Value?: bigint;
                                    uint64Value?: bigint;
                                    doubleValue?: number;
                                    stringValue?: string;
                                    bytesValue?: Uint8Array;
                                };
                                identExpr?: {
                                    name?: string;
                                };
                                selectExpr?: {
                                    operand?: any;
                                    field?: string;
                                    testOnly?: boolean;
                                };
                                callExpr?: {
                                    target?: any;
                                    function?: string;
                                    args?: any[];
                                };
                                listExpr?: {
                                    elements?: any[];
                                };
                                structExpr?: {
                                    type?: string;
                                    entries?: {
                                        id?: number;
                                        fieldKey?: string;
                                        mapKey?: any;
                                        value?: any;
                                    }[];
                                };
                                comprehensionExpr?: {
                                    iterVar?: string;
                                    iterRange?: any;
                                    accuVar?: string;
                                    accuInit?: any;
                                    loopCondition?: any;
                                    loopStep?: any;
                                    result?: any;
                                };
                            };
                        }[];
                        returnType?: {
                            id?: number;
                            type?: string;
                            typeParams?: any[];
                        };
                        receiverFunction?: boolean;
                    }): _101.FunctionDecl;
                };
            };
        }
    }
    const bytestream: {
        ReadRequest: {
            encode(message: _106.ReadRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _106.ReadRequest;
            fromJSON(object: any): _106.ReadRequest;
            toJSON(message: _106.ReadRequest): unknown;
            fromPartial(object: {
                resourceName?: string;
                readOffset?: bigint;
                readLimit?: bigint;
            }): _106.ReadRequest;
        };
        ReadResponse: {
            encode(message: _106.ReadResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _106.ReadResponse;
            fromJSON(object: any): _106.ReadResponse;
            toJSON(message: _106.ReadResponse): unknown;
            fromPartial(object: {
                data?: Uint8Array;
            }): _106.ReadResponse;
        };
        WriteRequest: {
            encode(message: _106.WriteRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _106.WriteRequest;
            fromJSON(object: any): _106.WriteRequest;
            toJSON(message: _106.WriteRequest): unknown;
            fromPartial(object: {
                resourceName?: string;
                writeOffset?: bigint;
                finishWrite?: boolean;
                data?: Uint8Array;
            }): _106.WriteRequest;
        };
        WriteResponse: {
            encode(message: _106.WriteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _106.WriteResponse;
            fromJSON(object: any): _106.WriteResponse;
            toJSON(message: _106.WriteResponse): unknown;
            fromPartial(object: {
                committedSize?: bigint;
            }): _106.WriteResponse;
        };
        QueryWriteStatusRequest: {
            encode(message: _106.QueryWriteStatusRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _106.QueryWriteStatusRequest;
            fromJSON(object: any): _106.QueryWriteStatusRequest;
            toJSON(message: _106.QueryWriteStatusRequest): unknown;
            fromPartial(object: {
                resourceName?: string;
            }): _106.QueryWriteStatusRequest;
        };
        QueryWriteStatusResponse: {
            encode(message: _106.QueryWriteStatusResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _106.QueryWriteStatusResponse;
            fromJSON(object: any): _106.QueryWriteStatusResponse;
            toJSON(message: _106.QueryWriteStatusResponse): unknown;
            fromPartial(object: {
                committedSize?: bigint;
                complete?: boolean;
            }): _106.QueryWriteStatusResponse;
        };
    };
    namespace geo {
        const type: {
            Viewport: {
                encode(message: _107.Viewport, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _107.Viewport;
                fromJSON(object: any): _107.Viewport;
                toJSON(message: _107.Viewport): unknown;
                fromPartial(object: {
                    low?: {
                        latitude?: number;
                        longitude?: number;
                    };
                    high?: {
                        latitude?: number;
                        longitude?: number;
                    };
                }): _107.Viewport;
            };
        };
    }
    const longrunning: {
        Operation: {
            encode(message: _108.Operation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _108.Operation;
            fromJSON(object: any): _108.Operation;
            toJSON(message: _108.Operation): unknown;
            fromPartial(object: {
                name?: string;
                metadata?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                };
                done?: boolean;
                error?: {
                    code?: number;
                    message?: string;
                    details?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                };
                response?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                };
            }): _108.Operation;
        };
        GetOperationRequest: {
            encode(message: _108.GetOperationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _108.GetOperationRequest;
            fromJSON(object: any): _108.GetOperationRequest;
            toJSON(message: _108.GetOperationRequest): unknown;
            fromPartial(object: {
                name?: string;
            }): _108.GetOperationRequest;
        };
        ListOperationsRequest: {
            encode(message: _108.ListOperationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _108.ListOperationsRequest;
            fromJSON(object: any): _108.ListOperationsRequest;
            toJSON(message: _108.ListOperationsRequest): unknown;
            fromPartial(object: {
                name?: string;
                filter?: string;
                pageSize?: number;
                pageToken?: string;
            }): _108.ListOperationsRequest;
        };
        ListOperationsResponse: {
            encode(message: _108.ListOperationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _108.ListOperationsResponse;
            fromJSON(object: any): _108.ListOperationsResponse;
            toJSON(message: _108.ListOperationsResponse): unknown;
            fromPartial(object: {
                operations?: {
                    name?: string;
                    metadata?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    done?: boolean;
                    error?: {
                        code?: number;
                        message?: string;
                        details?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                    };
                    response?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }[];
                nextPageToken?: string;
            }): _108.ListOperationsResponse;
        };
        CancelOperationRequest: {
            encode(message: _108.CancelOperationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _108.CancelOperationRequest;
            fromJSON(object: any): _108.CancelOperationRequest;
            toJSON(message: _108.CancelOperationRequest): unknown;
            fromPartial(object: {
                name?: string;
            }): _108.CancelOperationRequest;
        };
        DeleteOperationRequest: {
            encode(message: _108.DeleteOperationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _108.DeleteOperationRequest;
            fromJSON(object: any): _108.DeleteOperationRequest;
            toJSON(message: _108.DeleteOperationRequest): unknown;
            fromPartial(object: {
                name?: string;
            }): _108.DeleteOperationRequest;
        };
        WaitOperationRequest: {
            encode(message: _108.WaitOperationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _108.WaitOperationRequest;
            fromJSON(object: any): _108.WaitOperationRequest;
            toJSON(message: _108.WaitOperationRequest): unknown;
            fromPartial(object: {
                name?: string;
                timeout?: {
                    seconds?: bigint;
                    nanos?: number;
                };
            }): _108.WaitOperationRequest;
        };
        OperationInfo: {
            encode(message: _108.OperationInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _108.OperationInfo;
            fromJSON(object: any): _108.OperationInfo;
            toJSON(message: _108.OperationInfo): unknown;
            fromPartial(object: {
                responseType?: string;
                metadataType?: string;
            }): _108.OperationInfo;
        };
    };
    const rpc: {
        Status: {
            encode(message: _111.Status, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _111.Status;
            fromJSON(object: any): _111.Status;
            toJSON(message: _111.Status): unknown;
            fromPartial(object: {
                code?: number;
                message?: string;
                details?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                }[];
            }): _111.Status;
        };
        ErrorInfo_MetadataEntry: {
            encode(message: _110.ErrorInfo_MetadataEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _110.ErrorInfo_MetadataEntry;
            fromJSON(object: any): _110.ErrorInfo_MetadataEntry;
            toJSON(message: _110.ErrorInfo_MetadataEntry): unknown;
            fromPartial(object: {
                key?: string;
                value?: string;
            }): _110.ErrorInfo_MetadataEntry;
        };
        ErrorInfo: {
            encode(message: _110.ErrorInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _110.ErrorInfo;
            fromJSON(object: any): _110.ErrorInfo;
            toJSON(message: _110.ErrorInfo): unknown;
            fromPartial(object: {
                reason?: string;
                domain?: string;
                metadata?: {
                    [x: string]: string;
                };
            }): _110.ErrorInfo;
        };
        RetryInfo: {
            encode(message: _110.RetryInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _110.RetryInfo;
            fromJSON(object: any): _110.RetryInfo;
            toJSON(message: _110.RetryInfo): unknown;
            fromPartial(object: {
                retryDelay?: {
                    seconds?: bigint;
                    nanos?: number;
                };
            }): _110.RetryInfo;
        };
        DebugInfo: {
            encode(message: _110.DebugInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _110.DebugInfo;
            fromJSON(object: any): _110.DebugInfo;
            toJSON(message: _110.DebugInfo): unknown;
            fromPartial(object: {
                stackEntries?: string[];
                detail?: string;
            }): _110.DebugInfo;
        };
        QuotaFailure: {
            encode(message: _110.QuotaFailure, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _110.QuotaFailure;
            fromJSON(object: any): _110.QuotaFailure;
            toJSON(message: _110.QuotaFailure): unknown;
            fromPartial(object: {
                violations?: {
                    subject?: string;
                    description?: string;
                }[];
            }): _110.QuotaFailure;
        };
        QuotaFailure_Violation: {
            encode(message: _110.QuotaFailure_Violation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _110.QuotaFailure_Violation;
            fromJSON(object: any): _110.QuotaFailure_Violation;
            toJSON(message: _110.QuotaFailure_Violation): unknown;
            fromPartial(object: {
                subject?: string;
                description?: string;
            }): _110.QuotaFailure_Violation;
        };
        PreconditionFailure: {
            encode(message: _110.PreconditionFailure, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _110.PreconditionFailure;
            fromJSON(object: any): _110.PreconditionFailure;
            toJSON(message: _110.PreconditionFailure): unknown;
            fromPartial(object: {
                violations?: {
                    type?: string;
                    subject?: string;
                    description?: string;
                }[];
            }): _110.PreconditionFailure;
        };
        PreconditionFailure_Violation: {
            encode(message: _110.PreconditionFailure_Violation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _110.PreconditionFailure_Violation;
            fromJSON(object: any): _110.PreconditionFailure_Violation;
            toJSON(message: _110.PreconditionFailure_Violation): unknown;
            fromPartial(object: {
                type?: string;
                subject?: string;
                description?: string;
            }): _110.PreconditionFailure_Violation;
        };
        BadRequest: {
            encode(message: _110.BadRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _110.BadRequest;
            fromJSON(object: any): _110.BadRequest;
            toJSON(message: _110.BadRequest): unknown;
            fromPartial(object: {
                fieldViolations?: {
                    field?: string;
                    description?: string;
                }[];
            }): _110.BadRequest;
        };
        BadRequest_FieldViolation: {
            encode(message: _110.BadRequest_FieldViolation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _110.BadRequest_FieldViolation;
            fromJSON(object: any): _110.BadRequest_FieldViolation;
            toJSON(message: _110.BadRequest_FieldViolation): unknown;
            fromPartial(object: {
                field?: string;
                description?: string;
            }): _110.BadRequest_FieldViolation;
        };
        RequestInfo: {
            encode(message: _110.RequestInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _110.RequestInfo;
            fromJSON(object: any): _110.RequestInfo;
            toJSON(message: _110.RequestInfo): unknown;
            fromPartial(object: {
                requestId?: string;
                servingData?: string;
            }): _110.RequestInfo;
        };
        ResourceInfo: {
            encode(message: _110.ResourceInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _110.ResourceInfo;
            fromJSON(object: any): _110.ResourceInfo;
            toJSON(message: _110.ResourceInfo): unknown;
            fromPartial(object: {
                resourceType?: string;
                resourceName?: string;
                owner?: string;
                description?: string;
            }): _110.ResourceInfo;
        };
        Help: {
            encode(message: _110.Help, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _110.Help;
            fromJSON(object: any): _110.Help;
            toJSON(message: _110.Help): unknown;
            fromPartial(object: {
                links?: {
                    description?: string;
                    url?: string;
                }[];
            }): _110.Help;
        };
        Help_Link: {
            encode(message: _110.Help_Link, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _110.Help_Link;
            fromJSON(object: any): _110.Help_Link;
            toJSON(message: _110.Help_Link): unknown;
            fromPartial(object: {
                description?: string;
                url?: string;
            }): _110.Help_Link;
        };
        LocalizedMessage: {
            encode(message: _110.LocalizedMessage, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _110.LocalizedMessage;
            fromJSON(object: any): _110.LocalizedMessage;
            toJSON(message: _110.LocalizedMessage): unknown;
            fromPartial(object: {
                locale?: string;
                message?: string;
            }): _110.LocalizedMessage;
        };
        codeFromJSON(object: any): _109.Code;
        codeToJSON(object: _109.Code): string;
        Code: typeof _109.Code;
    };
    const type: {
        TimeOfDay: {
            encode(message: _128.TimeOfDay, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _128.TimeOfDay;
            fromJSON(object: any): _128.TimeOfDay;
            toJSON(message: _128.TimeOfDay): unknown;
            fromPartial(object: {
                hours?: number;
                minutes?: number;
                seconds?: number;
                nanos?: number;
            }): _128.TimeOfDay;
        };
        Quaternion: {
            encode(message: _127.Quaternion, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _127.Quaternion;
            fromJSON(object: any): _127.Quaternion;
            toJSON(message: _127.Quaternion): unknown;
            fromPartial(object: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            }): _127.Quaternion;
        };
        PostalAddress: {
            encode(message: _126.PostalAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _126.PostalAddress;
            fromJSON(object: any): _126.PostalAddress;
            toJSON(message: _126.PostalAddress): unknown;
            fromPartial(object: {
                revision?: number;
                regionCode?: string;
                languageCode?: string;
                postalCode?: string;
                sortingCode?: string;
                administrativeArea?: string;
                locality?: string;
                sublocality?: string;
                addressLines?: string[];
                recipients?: string[];
                organization?: string;
            }): _126.PostalAddress;
        };
        PhoneNumber: {
            encode(message: _125.PhoneNumber, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _125.PhoneNumber;
            fromJSON(object: any): _125.PhoneNumber;
            toJSON(message: _125.PhoneNumber): unknown;
            fromPartial(object: {
                e164Number?: string;
                shortCode?: {
                    regionCode?: string;
                    number?: string;
                };
                extension?: string;
            }): _125.PhoneNumber;
        };
        PhoneNumber_ShortCode: {
            encode(message: _125.PhoneNumber_ShortCode, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _125.PhoneNumber_ShortCode;
            fromJSON(object: any): _125.PhoneNumber_ShortCode;
            toJSON(message: _125.PhoneNumber_ShortCode): unknown;
            fromPartial(object: {
                regionCode?: string;
                number?: string;
            }): _125.PhoneNumber_ShortCode;
        };
        monthFromJSON(object: any): _124.Month;
        monthToJSON(object: _124.Month): string;
        Month: typeof _124.Month;
        Money: {
            encode(message: _123.Money, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _123.Money;
            fromJSON(object: any): _123.Money;
            toJSON(message: _123.Money): unknown;
            fromPartial(object: {
                currencyCode?: string;
                units?: bigint;
                nanos?: number;
            }): _123.Money;
        };
        LocalizedText: {
            encode(message: _122.LocalizedText, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _122.LocalizedText;
            fromJSON(object: any): _122.LocalizedText;
            toJSON(message: _122.LocalizedText): unknown;
            fromPartial(object: {
                text?: string;
                languageCode?: string;
            }): _122.LocalizedText;
        };
        LatLng: {
            encode(message: _121.LatLng, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _121.LatLng;
            fromJSON(object: any): _121.LatLng;
            toJSON(message: _121.LatLng): unknown;
            fromPartial(object: {
                latitude?: number;
                longitude?: number;
            }): _121.LatLng;
        };
        Interval: {
            encode(message: _120.Interval, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _120.Interval;
            fromJSON(object: any): _120.Interval;
            toJSON(message: _120.Interval): unknown;
            fromPartial(object: {
                startTime?: {
                    seconds?: bigint;
                    nanos?: number;
                };
                endTime?: {
                    seconds?: bigint;
                    nanos?: number;
                };
            }): _120.Interval;
        };
        Fraction: {
            encode(message: _119.Fraction, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _119.Fraction;
            fromJSON(object: any): _119.Fraction;
            toJSON(message: _119.Fraction): unknown;
            fromPartial(object: {
                numerator?: bigint;
                denominator?: bigint;
            }): _119.Fraction;
        };
        Expr: {
            encode(message: _118.Expr, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _118.Expr;
            fromJSON(object: any): _118.Expr;
            toJSON(message: _118.Expr): unknown;
            fromPartial(object: {
                expression?: string;
                title?: string;
                description?: string;
                location?: string;
            }): _118.Expr;
        };
        Decimal: {
            encode(message: _117.Decimal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _117.Decimal;
            fromJSON(object: any): _117.Decimal;
            toJSON(message: _117.Decimal): unknown;
            fromPartial(object: {
                value?: string;
            }): _117.Decimal;
        };
        dayOfWeekFromJSON(object: any): _116.DayOfWeek;
        dayOfWeekToJSON(object: _116.DayOfWeek): string;
        DayOfWeek: typeof _116.DayOfWeek;
        DateTime: {
            encode(message: _115.DateTime, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _115.DateTime;
            fromJSON(object: any): _115.DateTime;
            toJSON(message: _115.DateTime): unknown;
            fromPartial(object: {
                year?: number;
                month?: number;
                day?: number;
                hours?: number;
                minutes?: number;
                seconds?: number;
                nanos?: number;
                utcOffset?: {
                    seconds?: bigint;
                    nanos?: number;
                };
                timeZone?: {
                    id?: string;
                    version?: string;
                };
            }): _115.DateTime;
        };
        TimeZone: {
            encode(message: _115.TimeZone, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _115.TimeZone;
            fromJSON(object: any): _115.TimeZone;
            toJSON(message: _115.TimeZone): unknown;
            fromPartial(object: {
                id?: string;
                version?: string;
            }): _115.TimeZone;
        };
        Date: {
            encode(message: _114.Date, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _114.Date;
            fromJSON(object: any): _114.Date;
            toJSON(message: _114.Date): unknown;
            fromPartial(object: {
                year?: number;
                month?: number;
                day?: number;
            }): _114.Date;
        };
        Color: {
            encode(message: _113.Color, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _113.Color;
            fromJSON(object: any): _113.Color;
            toJSON(message: _113.Color): unknown;
            fromPartial(object: {
                red?: number;
                green?: number;
                blue?: number;
                alpha?: {
                    value?: number;
                };
            }): _113.Color;
        };
        calendarPeriodFromJSON(object: any): _112.CalendarPeriod;
        calendarPeriodToJSON(object: _112.CalendarPeriod): string;
        CalendarPeriod: typeof _112.CalendarPeriod;
    };
    const protobuf: {
        DoubleValue: {
            encode(message: _135.DoubleValue, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _135.DoubleValue;
            fromJSON(object: any): _135.DoubleValue;
            toJSON(message: _135.DoubleValue): unknown;
            fromPartial(object: {
                value?: number;
            }): _135.DoubleValue;
        };
        FloatValue: {
            encode(message: _135.FloatValue, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _135.FloatValue;
            fromJSON(object: any): _135.FloatValue;
            toJSON(message: _135.FloatValue): unknown;
            fromPartial(object: {
                value?: number;
            }): _135.FloatValue;
        };
        Int64Value: {
            encode(message: _135.Int64Value, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _135.Int64Value;
            fromJSON(object: any): _135.Int64Value;
            toJSON(message: _135.Int64Value): unknown;
            fromPartial(object: {
                value?: bigint;
            }): _135.Int64Value;
        };
        UInt64Value: {
            encode(message: _135.UInt64Value, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _135.UInt64Value;
            fromJSON(object: any): _135.UInt64Value;
            toJSON(message: _135.UInt64Value): unknown;
            fromPartial(object: {
                value?: bigint;
            }): _135.UInt64Value;
        };
        Int32Value: {
            encode(message: _135.Int32Value, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _135.Int32Value;
            fromJSON(object: any): _135.Int32Value;
            toJSON(message: _135.Int32Value): unknown;
            fromPartial(object: {
                value?: number;
            }): _135.Int32Value;
        };
        UInt32Value: {
            encode(message: _135.UInt32Value, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _135.UInt32Value;
            fromJSON(object: any): _135.UInt32Value;
            toJSON(message: _135.UInt32Value): unknown;
            fromPartial(object: {
                value?: number;
            }): _135.UInt32Value;
        };
        BoolValue: {
            encode(message: _135.BoolValue, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _135.BoolValue;
            fromJSON(object: any): _135.BoolValue;
            toJSON(message: _135.BoolValue): unknown;
            fromPartial(object: {
                value?: boolean;
            }): _135.BoolValue;
        };
        StringValue: {
            encode(message: _135.StringValue, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _135.StringValue;
            fromJSON(object: any): _135.StringValue;
            toJSON(message: _135.StringValue): unknown;
            fromPartial(object: {
                value?: string;
            }): _135.StringValue;
        };
        BytesValue: {
            encode(message: _135.BytesValue, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _135.BytesValue;
            fromJSON(object: any): _135.BytesValue;
            toJSON(message: _135.BytesValue): unknown;
            fromPartial(object: {
                value?: Uint8Array;
            }): _135.BytesValue;
        };
        nullValueFromJSON(object: any): _134.NullValue;
        nullValueToJSON(object: _134.NullValue): string;
        NullValue: typeof _134.NullValue;
        Struct_FieldsEntry: {
            encode(message: _134.Struct_FieldsEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _134.Struct_FieldsEntry;
            fromJSON(object: any): _134.Struct_FieldsEntry;
            toJSON(message: _134.Struct_FieldsEntry): unknown;
            fromPartial(object: {
                key?: string;
                value?: {
                    nullValue?: _134.NullValue;
                    numberValue?: number;
                    stringValue?: string;
                    boolValue?: boolean;
                    structValue?: {
                        fields?: {
                            [x: string]: any;
                        };
                    };
                    listValue?: {
                        values?: any[];
                    };
                };
            }): _134.Struct_FieldsEntry;
        };
        Struct: {
            encode(message: _134.Struct, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _134.Struct;
            fromJSON(object: any): _134.Struct;
            toJSON(message: _134.Struct): unknown;
            fromPartial(object: {
                fields?: {
                    [x: string]: {
                        nullValue?: _134.NullValue;
                        numberValue?: number;
                        stringValue?: string;
                        boolValue?: boolean;
                        structValue?: any;
                        listValue?: {
                            values?: any[];
                        };
                    };
                };
            }): _134.Struct;
        };
        Value: {
            encode(message: _134.Value, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _134.Value;
            fromJSON(object: any): _134.Value;
            toJSON(message: _134.Value): unknown;
            fromPartial(object: {
                nullValue?: _134.NullValue;
                numberValue?: number;
                stringValue?: string;
                boolValue?: boolean;
                structValue?: {
                    fields?: {
                        [x: string]: any;
                    };
                };
                listValue?: {
                    values?: any[];
                };
            }): _134.Value;
        };
        ListValue: {
            encode(message: _134.ListValue, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _134.ListValue;
            fromJSON(object: any): _134.ListValue;
            toJSON(message: _134.ListValue): unknown;
            fromPartial(object: {
                values?: {
                    nullValue?: _134.NullValue;
                    numberValue?: number;
                    stringValue?: string;
                    boolValue?: boolean;
                    structValue?: {
                        fields?: {
                            [x: string]: any;
                        };
                    };
                    listValue?: any;
                }[];
            }): _134.ListValue;
        };
        Empty: {
            encode(_: _133.Empty, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.Empty;
            fromJSON(_: any): _133.Empty;
            toJSON(_: _133.Empty): unknown;
            fromPartial(_: {}): _133.Empty;
        };
        Any: {
            encode(message: _132.Any, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _132.Any;
            fromJSON(object: any): _132.Any;
            toJSON(message: _132.Any): unknown;
            fromPartial(object: {
                typeUrl?: string;
                value?: Uint8Array;
            }): _132.Any;
        };
        Timestamp: {
            encode(message: _131.Timestamp, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _131.Timestamp;
            fromJSON(object: any): _131.Timestamp;
            toJSON(message: _131.Timestamp): unknown;
            fromPartial(object: {
                seconds?: bigint;
                nanos?: number;
            }): _131.Timestamp;
        };
        Duration: {
            encode(message: _130.Duration, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _130.Duration;
            fromJSON(object: any): _130.Duration;
            toJSON(message: _130.Duration): unknown;
            fromPartial(object: {
                seconds?: bigint;
                nanos?: number;
            }): _130.Duration;
        };
        fieldDescriptorProto_TypeFromJSON(object: any): _129.FieldDescriptorProto_Type;
        fieldDescriptorProto_TypeToJSON(object: _129.FieldDescriptorProto_Type): string;
        fieldDescriptorProto_LabelFromJSON(object: any): _129.FieldDescriptorProto_Label;
        fieldDescriptorProto_LabelToJSON(object: _129.FieldDescriptorProto_Label): string;
        fileOptions_OptimizeModeFromJSON(object: any): _129.FileOptions_OptimizeMode;
        fileOptions_OptimizeModeToJSON(object: _129.FileOptions_OptimizeMode): string;
        fieldOptions_CTypeFromJSON(object: any): _129.FieldOptions_CType;
        fieldOptions_CTypeToJSON(object: _129.FieldOptions_CType): string;
        fieldOptions_JSTypeFromJSON(object: any): _129.FieldOptions_JSType;
        fieldOptions_JSTypeToJSON(object: _129.FieldOptions_JSType): string;
        methodOptions_IdempotencyLevelFromJSON(object: any): _129.MethodOptions_IdempotencyLevel;
        methodOptions_IdempotencyLevelToJSON(object: _129.MethodOptions_IdempotencyLevel): string;
        FieldDescriptorProto_Type: typeof _129.FieldDescriptorProto_Type;
        FieldDescriptorProto_Label: typeof _129.FieldDescriptorProto_Label;
        FileOptions_OptimizeMode: typeof _129.FileOptions_OptimizeMode;
        FieldOptions_CType: typeof _129.FieldOptions_CType;
        FieldOptions_JSType: typeof _129.FieldOptions_JSType;
        MethodOptions_IdempotencyLevel: typeof _129.MethodOptions_IdempotencyLevel;
        FileDescriptorSet: {
            encode(message: _129.FileDescriptorSet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _129.FileDescriptorSet;
            fromJSON(object: any): _129.FileDescriptorSet;
            toJSON(message: _129.FileDescriptorSet): unknown;
            fromPartial(object: {
                file?: {
                    name?: string;
                    package?: string;
                    dependency?: string[];
                    publicDependency?: number[];
                    weakDependency?: number[];
                    messageType?: {
                        name?: string;
                        field?: {
                            name?: string;
                            number?: number;
                            label?: _129.FieldDescriptorProto_Label;
                            type?: _129.FieldDescriptorProto_Type;
                            typeName?: string;
                            extendee?: string;
                            defaultValue?: string;
                            oneofIndex?: number;
                            jsonName?: string;
                            options?: {
                                ctype?: _129.FieldOptions_CType;
                                packed?: boolean;
                                jstype?: _129.FieldOptions_JSType;
                                lazy?: boolean;
                                deprecated?: boolean;
                                weak?: boolean;
                                uninterpretedOption?: {
                                    name?: {
                                        namePart?: string;
                                        isExtension?: boolean;
                                    }[];
                                    identifierValue?: string;
                                    positiveIntValue?: bigint;
                                    negativeIntValue?: bigint;
                                    doubleValue?: number;
                                    stringValue?: Uint8Array;
                                    aggregateValue?: string;
                                }[];
                            };
                        }[];
                        extension?: {
                            name?: string;
                            number?: number;
                            label?: _129.FieldDescriptorProto_Label;
                            type?: _129.FieldDescriptorProto_Type;
                            typeName?: string;
                            extendee?: string;
                            defaultValue?: string;
                            oneofIndex?: number;
                            jsonName?: string;
                            options?: {
                                ctype?: _129.FieldOptions_CType;
                                packed?: boolean;
                                jstype?: _129.FieldOptions_JSType;
                                lazy?: boolean;
                                deprecated?: boolean;
                                weak?: boolean;
                                uninterpretedOption?: {
                                    name?: {
                                        namePart?: string;
                                        isExtension?: boolean;
                                    }[];
                                    identifierValue?: string;
                                    positiveIntValue?: bigint;
                                    negativeIntValue?: bigint;
                                    doubleValue?: number;
                                    stringValue?: Uint8Array;
                                    aggregateValue?: string;
                                }[];
                            };
                        }[];
                        nestedType?: any[];
                        enumType?: {
                            name?: string;
                            value?: {
                                name?: string;
                                number?: number;
                                options?: {
                                    deprecated?: boolean;
                                    uninterpretedOption?: {
                                        name?: {
                                            namePart?: string;
                                            isExtension?: boolean;
                                        }[];
                                        identifierValue?: string;
                                        positiveIntValue?: bigint;
                                        negativeIntValue?: bigint;
                                        doubleValue?: number;
                                        stringValue?: Uint8Array;
                                        aggregateValue?: string;
                                    }[];
                                };
                            }[];
                            options?: {
                                allowAlias?: boolean;
                                deprecated?: boolean;
                                uninterpretedOption?: {
                                    name?: {
                                        namePart?: string;
                                        isExtension?: boolean;
                                    }[];
                                    identifierValue?: string;
                                    positiveIntValue?: bigint;
                                    negativeIntValue?: bigint;
                                    doubleValue?: number;
                                    stringValue?: Uint8Array;
                                    aggregateValue?: string;
                                }[];
                            };
                            reservedRange?: {
                                start?: number;
                                end?: number;
                            }[];
                            reservedName?: string[];
                        }[];
                        extensionRange?: {
                            start?: number;
                            end?: number;
                            options?: {
                                uninterpretedOption?: {
                                    name?: {
                                        namePart?: string;
                                        isExtension?: boolean;
                                    }[];
                                    identifierValue?: string;
                                    positiveIntValue?: bigint;
                                    negativeIntValue?: bigint;
                                    doubleValue?: number;
                                    stringValue?: Uint8Array;
                                    aggregateValue?: string;
                                }[];
                            };
                        }[];
                        oneofDecl?: {
                            name?: string;
                            options?: {
                                uninterpretedOption?: {
                                    name?: {
                                        namePart?: string;
                                        isExtension?: boolean;
                                    }[];
                                    identifierValue?: string;
                                    positiveIntValue?: bigint;
                                    negativeIntValue?: bigint;
                                    doubleValue?: number;
                                    stringValue?: Uint8Array;
                                    aggregateValue?: string;
                                }[];
                            };
                        }[];
                        options?: {
                            messageSetWireFormat?: boolean;
                            noStandardDescriptorAccessor?: boolean;
                            deprecated?: boolean;
                            mapEntry?: boolean;
                            uninterpretedOption?: {
                                name?: {
                                    namePart?: string;
                                    isExtension?: boolean;
                                }[];
                                identifierValue?: string;
                                positiveIntValue?: bigint;
                                negativeIntValue?: bigint;
                                doubleValue?: number;
                                stringValue?: Uint8Array;
                                aggregateValue?: string;
                            }[];
                        };
                        reservedRange?: {
                            start?: number;
                            end?: number;
                        }[];
                        reservedName?: string[];
                    }[];
                    enumType?: {
                        name?: string;
                        value?: {
                            name?: string;
                            number?: number;
                            options?: {
                                deprecated?: boolean;
                                uninterpretedOption?: {
                                    name?: {
                                        namePart?: string;
                                        isExtension?: boolean;
                                    }[];
                                    identifierValue?: string;
                                    positiveIntValue?: bigint;
                                    negativeIntValue?: bigint;
                                    doubleValue?: number;
                                    stringValue?: Uint8Array;
                                    aggregateValue?: string;
                                }[];
                            };
                        }[];
                        options?: {
                            allowAlias?: boolean;
                            deprecated?: boolean;
                            uninterpretedOption?: {
                                name?: {
                                    namePart?: string;
                                    isExtension?: boolean;
                                }[];
                                identifierValue?: string;
                                positiveIntValue?: bigint;
                                negativeIntValue?: bigint;
                                doubleValue?: number;
                                stringValue?: Uint8Array;
                                aggregateValue?: string;
                            }[];
                        };
                        reservedRange?: {
                            start?: number;
                            end?: number;
                        }[];
                        reservedName?: string[];
                    }[];
                    service?: {
                        name?: string;
                        method?: {
                            name?: string;
                            inputType?: string;
                            outputType?: string;
                            options?: {
                                deprecated?: boolean;
                                idempotencyLevel?: _129.MethodOptions_IdempotencyLevel;
                                uninterpretedOption?: {
                                    name?: {
                                        namePart?: string;
                                        isExtension?: boolean;
                                    }[];
                                    identifierValue?: string;
                                    positiveIntValue?: bigint;
                                    negativeIntValue?: bigint;
                                    doubleValue?: number;
                                    stringValue?: Uint8Array;
                                    aggregateValue?: string;
                                }[];
                            };
                            clientStreaming?: boolean;
                            serverStreaming?: boolean;
                        }[];
                        options?: {
                            deprecated?: boolean;
                            uninterpretedOption?: {
                                name?: {
                                    namePart?: string;
                                    isExtension?: boolean;
                                }[];
                                identifierValue?: string;
                                positiveIntValue?: bigint;
                                negativeIntValue?: bigint;
                                doubleValue?: number;
                                stringValue?: Uint8Array;
                                aggregateValue?: string;
                            }[];
                        };
                    }[];
                    extension?: {
                        name?: string;
                        number?: number;
                        label?: _129.FieldDescriptorProto_Label;
                        type?: _129.FieldDescriptorProto_Type;
                        typeName?: string;
                        extendee?: string;
                        defaultValue?: string;
                        oneofIndex?: number;
                        jsonName?: string;
                        options?: {
                            ctype?: _129.FieldOptions_CType;
                            packed?: boolean;
                            jstype?: _129.FieldOptions_JSType;
                            lazy?: boolean;
                            deprecated?: boolean;
                            weak?: boolean;
                            uninterpretedOption?: {
                                name?: {
                                    namePart?: string;
                                    isExtension?: boolean;
                                }[];
                                identifierValue?: string;
                                positiveIntValue?: bigint;
                                negativeIntValue?: bigint;
                                doubleValue?: number;
                                stringValue?: Uint8Array;
                                aggregateValue?: string;
                            }[];
                        };
                    }[];
                    options?: {
                        javaPackage?: string;
                        javaOuterClassname?: string;
                        javaMultipleFiles?: boolean;
                        javaGenerateEqualsAndHash?: boolean;
                        javaStringCheckUtf8?: boolean;
                        optimizeFor?: _129.FileOptions_OptimizeMode;
                        goPackage?: string;
                        ccGenericServices?: boolean;
                        javaGenericServices?: boolean;
                        pyGenericServices?: boolean;
                        phpGenericServices?: boolean;
                        deprecated?: boolean;
                        ccEnableArenas?: boolean;
                        objcClassPrefix?: string;
                        csharpNamespace?: string;
                        swiftPrefix?: string;
                        phpClassPrefix?: string;
                        phpNamespace?: string;
                        phpMetadataNamespace?: string;
                        rubyPackage?: string;
                        uninterpretedOption?: {
                            name?: {
                                namePart?: string;
                                isExtension?: boolean;
                            }[];
                            identifierValue?: string;
                            positiveIntValue?: bigint;
                            negativeIntValue?: bigint;
                            doubleValue?: number;
                            stringValue?: Uint8Array;
                            aggregateValue?: string;
                        }[];
                    };
                    sourceCodeInfo?: {
                        location?: {
                            path?: number[];
                            span?: number[];
                            leadingComments?: string;
                            trailingComments?: string;
                            leadingDetachedComments?: string[];
                        }[];
                    };
                    syntax?: string;
                }[];
            }): _129.FileDescriptorSet;
        };
        FileDescriptorProto: {
            encode(message: _129.FileDescriptorProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _129.FileDescriptorProto;
            fromJSON(object: any): _129.FileDescriptorProto;
            toJSON(message: _129.FileDescriptorProto): unknown;
            fromPartial(object: {
                name?: string;
                package?: string;
                dependency?: string[];
                publicDependency?: number[];
                weakDependency?: number[];
                messageType?: {
                    name?: string;
                    field?: {
                        name?: string;
                        number?: number;
                        label?: _129.FieldDescriptorProto_Label;
                        type?: _129.FieldDescriptorProto_Type;
                        typeName?: string;
                        extendee?: string;
                        defaultValue?: string;
                        oneofIndex?: number;
                        jsonName?: string;
                        options?: {
                            ctype?: _129.FieldOptions_CType;
                            packed?: boolean;
                            jstype?: _129.FieldOptions_JSType;
                            lazy?: boolean;
                            deprecated?: boolean;
                            weak?: boolean;
                            uninterpretedOption?: {
                                name?: {
                                    namePart?: string;
                                    isExtension?: boolean;
                                }[];
                                identifierValue?: string;
                                positiveIntValue?: bigint;
                                negativeIntValue?: bigint;
                                doubleValue?: number;
                                stringValue?: Uint8Array;
                                aggregateValue?: string;
                            }[];
                        };
                    }[];
                    extension?: {
                        name?: string;
                        number?: number;
                        label?: _129.FieldDescriptorProto_Label;
                        type?: _129.FieldDescriptorProto_Type;
                        typeName?: string;
                        extendee?: string;
                        defaultValue?: string;
                        oneofIndex?: number;
                        jsonName?: string;
                        options?: {
                            ctype?: _129.FieldOptions_CType;
                            packed?: boolean;
                            jstype?: _129.FieldOptions_JSType;
                            lazy?: boolean;
                            deprecated?: boolean;
                            weak?: boolean;
                            uninterpretedOption?: {
                                name?: {
                                    namePart?: string;
                                    isExtension?: boolean;
                                }[];
                                identifierValue?: string;
                                positiveIntValue?: bigint;
                                negativeIntValue?: bigint;
                                doubleValue?: number;
                                stringValue?: Uint8Array;
                                aggregateValue?: string;
                            }[];
                        };
                    }[];
                    nestedType?: any[];
                    enumType?: {
                        name?: string;
                        value?: {
                            name?: string;
                            number?: number;
                            options?: {
                                deprecated?: boolean;
                                uninterpretedOption?: {
                                    name?: {
                                        namePart?: string;
                                        isExtension?: boolean;
                                    }[];
                                    identifierValue?: string;
                                    positiveIntValue?: bigint;
                                    negativeIntValue?: bigint;
                                    doubleValue?: number;
                                    stringValue?: Uint8Array;
                                    aggregateValue?: string;
                                }[];
                            };
                        }[];
                        options?: {
                            allowAlias?: boolean;
                            deprecated?: boolean;
                            uninterpretedOption?: {
                                name?: {
                                    namePart?: string;
                                    isExtension?: boolean;
                                }[];
                                identifierValue?: string;
                                positiveIntValue?: bigint;
                                negativeIntValue?: bigint;
                                doubleValue?: number;
                                stringValue?: Uint8Array;
                                aggregateValue?: string;
                            }[];
                        };
                        reservedRange?: {
                            start?: number;
                            end?: number;
                        }[];
                        reservedName?: string[];
                    }[];
                    extensionRange?: {
                        start?: number;
                        end?: number;
                        options?: {
                            uninterpretedOption?: {
                                name?: {
                                    namePart?: string;
                                    isExtension?: boolean;
                                }[];
                                identifierValue?: string;
                                positiveIntValue?: bigint;
                                negativeIntValue?: bigint;
                                doubleValue?: number;
                                stringValue?: Uint8Array;
                                aggregateValue?: string;
                            }[];
                        };
                    }[];
                    oneofDecl?: {
                        name?: string;
                        options?: {
                            uninterpretedOption?: {
                                name?: {
                                    namePart?: string;
                                    isExtension?: boolean;
                                }[];
                                identifierValue?: string;
                                positiveIntValue?: bigint;
                                negativeIntValue?: bigint;
                                doubleValue?: number;
                                stringValue?: Uint8Array;
                                aggregateValue?: string;
                            }[];
                        };
                    }[];
                    options?: {
                        messageSetWireFormat?: boolean;
                        noStandardDescriptorAccessor?: boolean;
                        deprecated?: boolean;
                        mapEntry?: boolean;
                        uninterpretedOption?: {
                            name?: {
                                namePart?: string;
                                isExtension?: boolean;
                            }[];
                            identifierValue?: string;
                            positiveIntValue?: bigint;
                            negativeIntValue?: bigint;
                            doubleValue?: number;
                            stringValue?: Uint8Array;
                            aggregateValue?: string;
                        }[];
                    };
                    reservedRange?: {
                        start?: number;
                        end?: number;
                    }[];
                    reservedName?: string[];
                }[];
                enumType?: {
                    name?: string;
                    value?: {
                        name?: string;
                        number?: number;
                        options?: {
                            deprecated?: boolean;
                            uninterpretedOption?: {
                                name?: {
                                    namePart?: string;
                                    isExtension?: boolean;
                                }[];
                                identifierValue?: string;
                                positiveIntValue?: bigint;
                                negativeIntValue?: bigint;
                                doubleValue?: number;
                                stringValue?: Uint8Array;
                                aggregateValue?: string;
                            }[];
                        };
                    }[];
                    options?: {
                        allowAlias?: boolean;
                        deprecated?: boolean;
                        uninterpretedOption?: {
                            name?: {
                                namePart?: string;
                                isExtension?: boolean;
                            }[];
                            identifierValue?: string;
                            positiveIntValue?: bigint;
                            negativeIntValue?: bigint;
                            doubleValue?: number;
                            stringValue?: Uint8Array;
                            aggregateValue?: string;
                        }[];
                    };
                    reservedRange?: {
                        start?: number;
                        end?: number;
                    }[];
                    reservedName?: string[];
                }[];
                service?: {
                    name?: string;
                    method?: {
                        name?: string;
                        inputType?: string;
                        outputType?: string;
                        options?: {
                            deprecated?: boolean;
                            idempotencyLevel?: _129.MethodOptions_IdempotencyLevel;
                            uninterpretedOption?: {
                                name?: {
                                    namePart?: string;
                                    isExtension?: boolean;
                                }[];
                                identifierValue?: string;
                                positiveIntValue?: bigint;
                                negativeIntValue?: bigint;
                                doubleValue?: number;
                                stringValue?: Uint8Array;
                                aggregateValue?: string;
                            }[];
                        };
                        clientStreaming?: boolean;
                        serverStreaming?: boolean;
                    }[];
                    options?: {
                        deprecated?: boolean;
                        uninterpretedOption?: {
                            name?: {
                                namePart?: string;
                                isExtension?: boolean;
                            }[];
                            identifierValue?: string;
                            positiveIntValue?: bigint;
                            negativeIntValue?: bigint;
                            doubleValue?: number;
                            stringValue?: Uint8Array;
                            aggregateValue?: string;
                        }[];
                    };
                }[];
                extension?: {
                    name?: string;
                    number?: number;
                    label?: _129.FieldDescriptorProto_Label;
                    type?: _129.FieldDescriptorProto_Type;
                    typeName?: string;
                    extendee?: string;
                    defaultValue?: string;
                    oneofIndex?: number;
                    jsonName?: string;
                    options?: {
                        ctype?: _129.FieldOptions_CType;
                        packed?: boolean;
                        jstype?: _129.FieldOptions_JSType;
                        lazy?: boolean;
                        deprecated?: boolean;
                        weak?: boolean;
                        uninterpretedOption?: {
                            name?: {
                                namePart?: string;
                                isExtension?: boolean;
                            }[];
                            identifierValue?: string;
                            positiveIntValue?: bigint;
                            negativeIntValue?: bigint;
                            doubleValue?: number;
                            stringValue?: Uint8Array;
                            aggregateValue?: string;
                        }[];
                    };
                }[];
                options?: {
                    javaPackage?: string;
                    javaOuterClassname?: string;
                    javaMultipleFiles?: boolean;
                    javaGenerateEqualsAndHash?: boolean;
                    javaStringCheckUtf8?: boolean;
                    optimizeFor?: _129.FileOptions_OptimizeMode;
                    goPackage?: string;
                    ccGenericServices?: boolean;
                    javaGenericServices?: boolean;
                    pyGenericServices?: boolean;
                    phpGenericServices?: boolean;
                    deprecated?: boolean;
                    ccEnableArenas?: boolean;
                    objcClassPrefix?: string;
                    csharpNamespace?: string;
                    swiftPrefix?: string;
                    phpClassPrefix?: string;
                    phpNamespace?: string;
                    phpMetadataNamespace?: string;
                    rubyPackage?: string;
                    uninterpretedOption?: {
                        name?: {
                            namePart?: string;
                            isExtension?: boolean;
                        }[];
                        identifierValue?: string;
                        positiveIntValue?: bigint;
                        negativeIntValue?: bigint;
                        doubleValue?: number;
                        stringValue?: Uint8Array;
                        aggregateValue?: string;
                    }[];
                };
                sourceCodeInfo?: {
                    location?: {
                        path?: number[];
                        span?: number[];
                        leadingComments?: string;
                        trailingComments?: string;
                        leadingDetachedComments?: string[];
                    }[];
                };
                syntax?: string;
            }): _129.FileDescriptorProto;
        };
        DescriptorProto: {
            encode(message: _129.DescriptorProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _129.DescriptorProto;
            fromJSON(object: any): _129.DescriptorProto;
            toJSON(message: _129.DescriptorProto): unknown;
            fromPartial(object: {
                name?: string;
                field?: {
                    name?: string;
                    number?: number;
                    label?: _129.FieldDescriptorProto_Label;
                    type?: _129.FieldDescriptorProto_Type;
                    typeName?: string;
                    extendee?: string;
                    defaultValue?: string;
                    oneofIndex?: number;
                    jsonName?: string;
                    options?: {
                        ctype?: _129.FieldOptions_CType;
                        packed?: boolean;
                        jstype?: _129.FieldOptions_JSType;
                        lazy?: boolean;
                        deprecated?: boolean;
                        weak?: boolean;
                        uninterpretedOption?: {
                            name?: {
                                namePart?: string;
                                isExtension?: boolean;
                            }[];
                            identifierValue?: string;
                            positiveIntValue?: bigint;
                            negativeIntValue?: bigint;
                            doubleValue?: number;
                            stringValue?: Uint8Array;
                            aggregateValue?: string;
                        }[];
                    };
                }[];
                extension?: {
                    name?: string;
                    number?: number;
                    label?: _129.FieldDescriptorProto_Label;
                    type?: _129.FieldDescriptorProto_Type;
                    typeName?: string;
                    extendee?: string;
                    defaultValue?: string;
                    oneofIndex?: number;
                    jsonName?: string;
                    options?: {
                        ctype?: _129.FieldOptions_CType;
                        packed?: boolean;
                        jstype?: _129.FieldOptions_JSType;
                        lazy?: boolean;
                        deprecated?: boolean;
                        weak?: boolean;
                        uninterpretedOption?: {
                            name?: {
                                namePart?: string;
                                isExtension?: boolean;
                            }[];
                            identifierValue?: string;
                            positiveIntValue?: bigint;
                            negativeIntValue?: bigint;
                            doubleValue?: number;
                            stringValue?: Uint8Array;
                            aggregateValue?: string;
                        }[];
                    };
                }[];
                nestedType?: any[];
                enumType?: {
                    name?: string;
                    value?: {
                        name?: string;
                        number?: number;
                        options?: {
                            deprecated?: boolean;
                            uninterpretedOption?: {
                                name?: {
                                    namePart?: string;
                                    isExtension?: boolean;
                                }[];
                                identifierValue?: string;
                                positiveIntValue?: bigint;
                                negativeIntValue?: bigint;
                                doubleValue?: number;
                                stringValue?: Uint8Array;
                                aggregateValue?: string;
                            }[];
                        };
                    }[];
                    options?: {
                        allowAlias?: boolean;
                        deprecated?: boolean;
                        uninterpretedOption?: {
                            name?: {
                                namePart?: string;
                                isExtension?: boolean;
                            }[];
                            identifierValue?: string;
                            positiveIntValue?: bigint;
                            negativeIntValue?: bigint;
                            doubleValue?: number;
                            stringValue?: Uint8Array;
                            aggregateValue?: string;
                        }[];
                    };
                    reservedRange?: {
                        start?: number;
                        end?: number;
                    }[];
                    reservedName?: string[];
                }[];
                extensionRange?: {
                    start?: number;
                    end?: number;
                    options?: {
                        uninterpretedOption?: {
                            name?: {
                                namePart?: string;
                                isExtension?: boolean;
                            }[];
                            identifierValue?: string;
                            positiveIntValue?: bigint;
                            negativeIntValue?: bigint;
                            doubleValue?: number;
                            stringValue?: Uint8Array;
                            aggregateValue?: string;
                        }[];
                    };
                }[];
                oneofDecl?: {
                    name?: string;
                    options?: {
                        uninterpretedOption?: {
                            name?: {
                                namePart?: string;
                                isExtension?: boolean;
                            }[];
                            identifierValue?: string;
                            positiveIntValue?: bigint;
                            negativeIntValue?: bigint;
                            doubleValue?: number;
                            stringValue?: Uint8Array;
                            aggregateValue?: string;
                        }[];
                    };
                }[];
                options?: {
                    messageSetWireFormat?: boolean;
                    noStandardDescriptorAccessor?: boolean;
                    deprecated?: boolean;
                    mapEntry?: boolean;
                    uninterpretedOption?: {
                        name?: {
                            namePart?: string;
                            isExtension?: boolean;
                        }[];
                        identifierValue?: string;
                        positiveIntValue?: bigint;
                        negativeIntValue?: bigint;
                        doubleValue?: number;
                        stringValue?: Uint8Array;
                        aggregateValue?: string;
                    }[];
                };
                reservedRange?: {
                    start?: number;
                    end?: number;
                }[];
                reservedName?: string[];
            }): _129.DescriptorProto;
        };
        DescriptorProto_ExtensionRange: {
            encode(message: _129.DescriptorProto_ExtensionRange, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _129.DescriptorProto_ExtensionRange;
            fromJSON(object: any): _129.DescriptorProto_ExtensionRange;
            toJSON(message: _129.DescriptorProto_ExtensionRange): unknown;
            fromPartial(object: {
                start?: number;
                end?: number;
                options?: {
                    uninterpretedOption?: {
                        name?: {
                            namePart?: string;
                            isExtension?: boolean;
                        }[];
                        identifierValue?: string;
                        positiveIntValue?: bigint;
                        negativeIntValue?: bigint;
                        doubleValue?: number;
                        stringValue?: Uint8Array;
                        aggregateValue?: string;
                    }[];
                };
            }): _129.DescriptorProto_ExtensionRange;
        };
        DescriptorProto_ReservedRange: {
            encode(message: _129.DescriptorProto_ReservedRange, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _129.DescriptorProto_ReservedRange;
            fromJSON(object: any): _129.DescriptorProto_ReservedRange;
            toJSON(message: _129.DescriptorProto_ReservedRange): unknown;
            fromPartial(object: {
                start?: number;
                end?: number;
            }): _129.DescriptorProto_ReservedRange;
        };
        ExtensionRangeOptions: {
            encode(message: _129.ExtensionRangeOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _129.ExtensionRangeOptions;
            fromJSON(object: any): _129.ExtensionRangeOptions;
            toJSON(message: _129.ExtensionRangeOptions): unknown;
            fromPartial(object: {
                uninterpretedOption?: {
                    name?: {
                        namePart?: string;
                        isExtension?: boolean;
                    }[];
                    identifierValue?: string;
                    positiveIntValue?: bigint;
                    negativeIntValue?: bigint;
                    doubleValue?: number;
                    stringValue?: Uint8Array;
                    aggregateValue?: string;
                }[];
            }): _129.ExtensionRangeOptions;
        };
        FieldDescriptorProto: {
            encode(message: _129.FieldDescriptorProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _129.FieldDescriptorProto;
            fromJSON(object: any): _129.FieldDescriptorProto;
            toJSON(message: _129.FieldDescriptorProto): unknown;
            fromPartial(object: {
                name?: string;
                number?: number;
                label?: _129.FieldDescriptorProto_Label;
                type?: _129.FieldDescriptorProto_Type;
                typeName?: string;
                extendee?: string;
                defaultValue?: string;
                oneofIndex?: number;
                jsonName?: string;
                options?: {
                    ctype?: _129.FieldOptions_CType;
                    packed?: boolean;
                    jstype?: _129.FieldOptions_JSType;
                    lazy?: boolean;
                    deprecated?: boolean;
                    weak?: boolean;
                    uninterpretedOption?: {
                        name?: {
                            namePart?: string;
                            isExtension?: boolean;
                        }[];
                        identifierValue?: string;
                        positiveIntValue?: bigint;
                        negativeIntValue?: bigint;
                        doubleValue?: number;
                        stringValue?: Uint8Array;
                        aggregateValue?: string;
                    }[];
                };
            }): _129.FieldDescriptorProto;
        };
        OneofDescriptorProto: {
            encode(message: _129.OneofDescriptorProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _129.OneofDescriptorProto;
            fromJSON(object: any): _129.OneofDescriptorProto;
            toJSON(message: _129.OneofDescriptorProto): unknown;
            fromPartial(object: {
                name?: string;
                options?: {
                    uninterpretedOption?: {
                        name?: {
                            namePart?: string;
                            isExtension?: boolean;
                        }[];
                        identifierValue?: string;
                        positiveIntValue?: bigint;
                        negativeIntValue?: bigint;
                        doubleValue?: number;
                        stringValue?: Uint8Array;
                        aggregateValue?: string;
                    }[];
                };
            }): _129.OneofDescriptorProto;
        };
        EnumDescriptorProto: {
            encode(message: _129.EnumDescriptorProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _129.EnumDescriptorProto;
            fromJSON(object: any): _129.EnumDescriptorProto;
            toJSON(message: _129.EnumDescriptorProto): unknown;
            fromPartial(object: {
                name?: string;
                value?: {
                    name?: string;
                    number?: number;
                    options?: {
                        deprecated?: boolean;
                        uninterpretedOption?: {
                            name?: {
                                namePart?: string;
                                isExtension?: boolean;
                            }[];
                            identifierValue?: string;
                            positiveIntValue?: bigint;
                            negativeIntValue?: bigint;
                            doubleValue?: number;
                            stringValue?: Uint8Array;
                            aggregateValue?: string;
                        }[];
                    };
                }[];
                options?: {
                    allowAlias?: boolean;
                    deprecated?: boolean;
                    uninterpretedOption?: {
                        name?: {
                            namePart?: string;
                            isExtension?: boolean;
                        }[];
                        identifierValue?: string;
                        positiveIntValue?: bigint;
                        negativeIntValue?: bigint;
                        doubleValue?: number;
                        stringValue?: Uint8Array;
                        aggregateValue?: string;
                    }[];
                };
                reservedRange?: {
                    start?: number;
                    end?: number;
                }[];
                reservedName?: string[];
            }): _129.EnumDescriptorProto;
        };
        EnumDescriptorProto_EnumReservedRange: {
            encode(message: _129.EnumDescriptorProto_EnumReservedRange, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _129.EnumDescriptorProto_EnumReservedRange;
            fromJSON(object: any): _129.EnumDescriptorProto_EnumReservedRange;
            toJSON(message: _129.EnumDescriptorProto_EnumReservedRange): unknown;
            fromPartial(object: {
                start?: number;
                end?: number;
            }): _129.EnumDescriptorProto_EnumReservedRange;
        };
        EnumValueDescriptorProto: {
            encode(message: _129.EnumValueDescriptorProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _129.EnumValueDescriptorProto;
            fromJSON(object: any): _129.EnumValueDescriptorProto;
            toJSON(message: _129.EnumValueDescriptorProto): unknown;
            fromPartial(object: {
                name?: string;
                number?: number;
                options?: {
                    deprecated?: boolean;
                    uninterpretedOption?: {
                        name?: {
                            namePart?: string;
                            isExtension?: boolean;
                        }[];
                        identifierValue?: string;
                        positiveIntValue?: bigint;
                        negativeIntValue?: bigint;
                        doubleValue?: number;
                        stringValue?: Uint8Array;
                        aggregateValue?: string;
                    }[];
                };
            }): _129.EnumValueDescriptorProto;
        };
        ServiceDescriptorProto: {
            encode(message: _129.ServiceDescriptorProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _129.ServiceDescriptorProto;
            fromJSON(object: any): _129.ServiceDescriptorProto;
            toJSON(message: _129.ServiceDescriptorProto): unknown;
            fromPartial(object: {
                name?: string;
                method?: {
                    name?: string;
                    inputType?: string;
                    outputType?: string;
                    options?: {
                        deprecated?: boolean;
                        idempotencyLevel?: _129.MethodOptions_IdempotencyLevel;
                        uninterpretedOption?: {
                            name?: {
                                namePart?: string;
                                isExtension?: boolean;
                            }[];
                            identifierValue?: string;
                            positiveIntValue?: bigint;
                            negativeIntValue?: bigint;
                            doubleValue?: number;
                            stringValue?: Uint8Array;
                            aggregateValue?: string;
                        }[];
                    };
                    clientStreaming?: boolean;
                    serverStreaming?: boolean;
                }[];
                options?: {
                    deprecated?: boolean;
                    uninterpretedOption?: {
                        name?: {
                            namePart?: string;
                            isExtension?: boolean;
                        }[];
                        identifierValue?: string;
                        positiveIntValue?: bigint;
                        negativeIntValue?: bigint;
                        doubleValue?: number;
                        stringValue?: Uint8Array;
                        aggregateValue?: string;
                    }[];
                };
            }): _129.ServiceDescriptorProto;
        };
        MethodDescriptorProto: {
            encode(message: _129.MethodDescriptorProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _129.MethodDescriptorProto;
            fromJSON(object: any): _129.MethodDescriptorProto;
            toJSON(message: _129.MethodDescriptorProto): unknown;
            fromPartial(object: {
                name?: string;
                inputType?: string;
                outputType?: string;
                options?: {
                    deprecated?: boolean;
                    idempotencyLevel?: _129.MethodOptions_IdempotencyLevel;
                    uninterpretedOption?: {
                        name?: {
                            namePart?: string;
                            isExtension?: boolean;
                        }[];
                        identifierValue?: string;
                        positiveIntValue?: bigint;
                        negativeIntValue?: bigint;
                        doubleValue?: number;
                        stringValue?: Uint8Array;
                        aggregateValue?: string;
                    }[];
                };
                clientStreaming?: boolean;
                serverStreaming?: boolean;
            }): _129.MethodDescriptorProto;
        };
        FileOptions: {
            encode(message: _129.FileOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _129.FileOptions;
            fromJSON(object: any): _129.FileOptions;
            toJSON(message: _129.FileOptions): unknown;
            fromPartial(object: {
                javaPackage?: string;
                javaOuterClassname?: string;
                javaMultipleFiles?: boolean;
                javaGenerateEqualsAndHash?: boolean;
                javaStringCheckUtf8?: boolean;
                optimizeFor?: _129.FileOptions_OptimizeMode;
                goPackage?: string;
                ccGenericServices?: boolean;
                javaGenericServices?: boolean;
                pyGenericServices?: boolean;
                phpGenericServices?: boolean;
                deprecated?: boolean;
                ccEnableArenas?: boolean;
                objcClassPrefix?: string;
                csharpNamespace?: string;
                swiftPrefix?: string;
                phpClassPrefix?: string;
                phpNamespace?: string;
                phpMetadataNamespace?: string;
                rubyPackage?: string;
                uninterpretedOption?: {
                    name?: {
                        namePart?: string;
                        isExtension?: boolean;
                    }[];
                    identifierValue?: string;
                    positiveIntValue?: bigint;
                    negativeIntValue?: bigint;
                    doubleValue?: number;
                    stringValue?: Uint8Array;
                    aggregateValue?: string;
                }[];
            }): _129.FileOptions;
        };
        MessageOptions: {
            encode(message: _129.MessageOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _129.MessageOptions;
            fromJSON(object: any): _129.MessageOptions;
            toJSON(message: _129.MessageOptions): unknown;
            fromPartial(object: {
                messageSetWireFormat?: boolean;
                noStandardDescriptorAccessor?: boolean;
                deprecated?: boolean;
                mapEntry?: boolean;
                uninterpretedOption?: {
                    name?: {
                        namePart?: string;
                        isExtension?: boolean;
                    }[];
                    identifierValue?: string;
                    positiveIntValue?: bigint;
                    negativeIntValue?: bigint;
                    doubleValue?: number;
                    stringValue?: Uint8Array;
                    aggregateValue?: string;
                }[];
            }): _129.MessageOptions;
        };
        FieldOptions: {
            encode(message: _129.FieldOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _129.FieldOptions;
            fromJSON(object: any): _129.FieldOptions;
            toJSON(message: _129.FieldOptions): unknown;
            fromPartial(object: {
                ctype?: _129.FieldOptions_CType;
                packed?: boolean;
                jstype?: _129.FieldOptions_JSType;
                lazy?: boolean;
                deprecated?: boolean;
                weak?: boolean;
                uninterpretedOption?: {
                    name?: {
                        namePart?: string;
                        isExtension?: boolean;
                    }[];
                    identifierValue?: string;
                    positiveIntValue?: bigint;
                    negativeIntValue?: bigint;
                    doubleValue?: number;
                    stringValue?: Uint8Array;
                    aggregateValue?: string;
                }[];
            }): _129.FieldOptions;
        };
        OneofOptions: {
            encode(message: _129.OneofOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _129.OneofOptions;
            fromJSON(object: any): _129.OneofOptions;
            toJSON(message: _129.OneofOptions): unknown;
            fromPartial(object: {
                uninterpretedOption?: {
                    name?: {
                        namePart?: string;
                        isExtension?: boolean;
                    }[];
                    identifierValue?: string;
                    positiveIntValue?: bigint;
                    negativeIntValue?: bigint;
                    doubleValue?: number;
                    stringValue?: Uint8Array;
                    aggregateValue?: string;
                }[];
            }): _129.OneofOptions;
        };
        EnumOptions: {
            encode(message: _129.EnumOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _129.EnumOptions;
            fromJSON(object: any): _129.EnumOptions;
            toJSON(message: _129.EnumOptions): unknown;
            fromPartial(object: {
                allowAlias?: boolean;
                deprecated?: boolean;
                uninterpretedOption?: {
                    name?: {
                        namePart?: string;
                        isExtension?: boolean;
                    }[];
                    identifierValue?: string;
                    positiveIntValue?: bigint;
                    negativeIntValue?: bigint;
                    doubleValue?: number;
                    stringValue?: Uint8Array;
                    aggregateValue?: string;
                }[];
            }): _129.EnumOptions;
        };
        EnumValueOptions: {
            encode(message: _129.EnumValueOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _129.EnumValueOptions;
            fromJSON(object: any): _129.EnumValueOptions;
            toJSON(message: _129.EnumValueOptions): unknown;
            fromPartial(object: {
                deprecated?: boolean;
                uninterpretedOption?: {
                    name?: {
                        namePart?: string;
                        isExtension?: boolean;
                    }[];
                    identifierValue?: string;
                    positiveIntValue?: bigint;
                    negativeIntValue?: bigint;
                    doubleValue?: number;
                    stringValue?: Uint8Array;
                    aggregateValue?: string;
                }[];
            }): _129.EnumValueOptions;
        };
        ServiceOptions: {
            encode(message: _129.ServiceOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _129.ServiceOptions;
            fromJSON(object: any): _129.ServiceOptions;
            toJSON(message: _129.ServiceOptions): unknown;
            fromPartial(object: {
                deprecated?: boolean;
                uninterpretedOption?: {
                    name?: {
                        namePart?: string;
                        isExtension?: boolean;
                    }[];
                    identifierValue?: string;
                    positiveIntValue?: bigint;
                    negativeIntValue?: bigint;
                    doubleValue?: number;
                    stringValue?: Uint8Array;
                    aggregateValue?: string;
                }[];
            }): _129.ServiceOptions;
        };
        MethodOptions: {
            encode(message: _129.MethodOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _129.MethodOptions;
            fromJSON(object: any): _129.MethodOptions;
            toJSON(message: _129.MethodOptions): unknown;
            fromPartial(object: {
                deprecated?: boolean;
                idempotencyLevel?: _129.MethodOptions_IdempotencyLevel;
                uninterpretedOption?: {
                    name?: {
                        namePart?: string;
                        isExtension?: boolean;
                    }[];
                    identifierValue?: string;
                    positiveIntValue?: bigint;
                    negativeIntValue?: bigint;
                    doubleValue?: number;
                    stringValue?: Uint8Array;
                    aggregateValue?: string;
                }[];
            }): _129.MethodOptions;
        };
        UninterpretedOption: {
            encode(message: _129.UninterpretedOption, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _129.UninterpretedOption;
            fromJSON(object: any): _129.UninterpretedOption;
            toJSON(message: _129.UninterpretedOption): unknown;
            fromPartial(object: {
                name?: {
                    namePart?: string;
                    isExtension?: boolean;
                }[];
                identifierValue?: string;
                positiveIntValue?: bigint;
                negativeIntValue?: bigint;
                doubleValue?: number;
                stringValue?: Uint8Array;
                aggregateValue?: string;
            }): _129.UninterpretedOption;
        };
        UninterpretedOption_NamePart: {
            encode(message: _129.UninterpretedOption_NamePart, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _129.UninterpretedOption_NamePart;
            fromJSON(object: any): _129.UninterpretedOption_NamePart;
            toJSON(message: _129.UninterpretedOption_NamePart): unknown;
            fromPartial(object: {
                namePart?: string;
                isExtension?: boolean;
            }): _129.UninterpretedOption_NamePart;
        };
        SourceCodeInfo: {
            encode(message: _129.SourceCodeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _129.SourceCodeInfo;
            fromJSON(object: any): _129.SourceCodeInfo;
            toJSON(message: _129.SourceCodeInfo): unknown;
            fromPartial(object: {
                location?: {
                    path?: number[];
                    span?: number[];
                    leadingComments?: string;
                    trailingComments?: string;
                    leadingDetachedComments?: string[];
                }[];
            }): _129.SourceCodeInfo;
        };
        SourceCodeInfo_Location: {
            encode(message: _129.SourceCodeInfo_Location, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _129.SourceCodeInfo_Location;
            fromJSON(object: any): _129.SourceCodeInfo_Location;
            toJSON(message: _129.SourceCodeInfo_Location): unknown;
            fromPartial(object: {
                path?: number[];
                span?: number[];
                leadingComments?: string;
                trailingComments?: string;
                leadingDetachedComments?: string[];
            }): _129.SourceCodeInfo_Location;
        };
        GeneratedCodeInfo: {
            encode(message: _129.GeneratedCodeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _129.GeneratedCodeInfo;
            fromJSON(object: any): _129.GeneratedCodeInfo;
            toJSON(message: _129.GeneratedCodeInfo): unknown;
            fromPartial(object: {
                annotation?: {
                    path?: number[];
                    sourceFile?: string;
                    begin?: number;
                    end?: number;
                }[];
            }): _129.GeneratedCodeInfo;
        };
        GeneratedCodeInfo_Annotation: {
            encode(message: _129.GeneratedCodeInfo_Annotation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _129.GeneratedCodeInfo_Annotation;
            fromJSON(object: any): _129.GeneratedCodeInfo_Annotation;
            toJSON(message: _129.GeneratedCodeInfo_Annotation): unknown;
            fromPartial(object: {
                path?: number[];
                sourceFile?: string;
                begin?: number;
                end?: number;
            }): _129.GeneratedCodeInfo_Annotation;
        };
    };
}
