import * as _100 from "./api/expr/v1alpha1/checked";
import * as _101 from "./api/expr/v1alpha1/eval";
import * as _102 from "./api/expr/v1alpha1/explain";
import * as _103 from "./api/expr/v1alpha1/syntax";
import * as _104 from "./api/expr/v1alpha1/value";
import * as _105 from "./api/expr/v1beta1/decl";
import * as _106 from "./api/expr/v1beta1/eval";
import * as _107 from "./api/expr/v1beta1/expr";
import * as _108 from "./api/expr/v1beta1/source";
import * as _109 from "./api/expr/v1beta1/value";
import * as _110 from "./bytestream/bytestream";
import * as _111 from "./geo/type/viewport";
import * as _112 from "./longrunning/operations";
import * as _113 from "./rpc/code";
import * as _114 from "./rpc/error_details";
import * as _115 from "./rpc/status";
import * as _116 from "./type/calendar_period";
import * as _117 from "./type/color";
import * as _118 from "./type/date";
import * as _119 from "./type/datetime";
import * as _120 from "./type/dayofweek";
import * as _121 from "./type/decimal";
import * as _122 from "./type/expr";
import * as _123 from "./type/fraction";
import * as _124 from "./type/interval";
import * as _125 from "./type/latlng";
import * as _126 from "./type/localized_text";
import * as _127 from "./type/money";
import * as _128 from "./type/month";
import * as _129 from "./type/phone_number";
import * as _130 from "./type/postal_address";
import * as _131 from "./type/quaternion";
import * as _132 from "./type/timeofday";
import * as _133 from "./protobuf/descriptor";
import * as _134 from "./protobuf/duration";
import * as _135 from "./protobuf/timestamp";
import * as _136 from "./protobuf/any";
import * as _137 from "./protobuf/empty";
import * as _138 from "./protobuf/struct";
import * as _139 from "./protobuf/wrappers";
export declare namespace google {
    namespace api {
        namespace expr {
            const v1alpha1: {
                Value: {
                    encode(message: _104.Value, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _104.Value;
                    fromJSON(object: any): _104.Value;
                    toJSON(message: _104.Value): unknown;
                    fromPartial(object: {
                        nullValue?: _138.NullValue;
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
                    }): _104.Value;
                };
                EnumValue: {
                    encode(message: _104.EnumValue, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _104.EnumValue;
                    fromJSON(object: any): _104.EnumValue;
                    toJSON(message: _104.EnumValue): unknown;
                    fromPartial(object: {
                        type?: string;
                        value?: number;
                    }): _104.EnumValue;
                };
                ListValue: {
                    encode(message: _104.ListValue, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _104.ListValue;
                    fromJSON(object: any): _104.ListValue;
                    toJSON(message: _104.ListValue): unknown;
                    fromPartial(object: {
                        values?: {
                            nullValue?: _138.NullValue;
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
                    }): _104.ListValue;
                };
                MapValue: {
                    encode(message: _104.MapValue, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _104.MapValue;
                    fromJSON(object: any): _104.MapValue;
                    toJSON(message: _104.MapValue): unknown;
                    fromPartial(object: {
                        entries?: {
                            key?: {
                                nullValue?: _138.NullValue;
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
                                nullValue?: _138.NullValue;
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
                    }): _104.MapValue;
                };
                MapValue_Entry: {
                    encode(message: _104.MapValue_Entry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _104.MapValue_Entry;
                    fromJSON(object: any): _104.MapValue_Entry;
                    toJSON(message: _104.MapValue_Entry): unknown;
                    fromPartial(object: {
                        key?: {
                            nullValue?: _138.NullValue;
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
                            nullValue?: _138.NullValue;
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
                    }): _104.MapValue_Entry;
                };
                ParsedExpr: {
                    encode(message: _103.ParsedExpr, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _103.ParsedExpr;
                    fromJSON(object: any): _103.ParsedExpr;
                    toJSON(message: _103.ParsedExpr): unknown;
                    fromPartial(object: {
                        expr?: {
                            id?: bigint;
                            constExpr?: {
                                nullValue?: _138.NullValue;
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
                    }): _103.ParsedExpr;
                };
                Expr: {
                    encode(message: _103.Expr, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _103.Expr;
                    fromJSON(object: any): _103.Expr;
                    toJSON(message: _103.Expr): unknown;
                    fromPartial(object: {
                        id?: bigint;
                        constExpr?: {
                            nullValue?: _138.NullValue;
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
                            id?: bigint;
                            constExpr?: {
                                nullValue?: _138.NullValue;
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
                    }): _103.Expr_Select;
                };
                Expr_Call: {
                    encode(message: _103.Expr_Call, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _103.Expr_Call;
                    fromJSON(object: any): _103.Expr_Call;
                    toJSON(message: _103.Expr_Call): unknown;
                    fromPartial(object: {
                        target?: {
                            id?: bigint;
                            constExpr?: {
                                nullValue?: _138.NullValue;
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
                                nullValue?: _138.NullValue;
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
                    }): _103.Expr_Call;
                };
                Expr_CreateList: {
                    encode(message: _103.Expr_CreateList, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _103.Expr_CreateList;
                    fromJSON(object: any): _103.Expr_CreateList;
                    toJSON(message: _103.Expr_CreateList): unknown;
                    fromPartial(object: {
                        elements?: {
                            id?: bigint;
                            constExpr?: {
                                nullValue?: _138.NullValue;
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
                    }): _103.Expr_CreateList;
                };
                Expr_CreateStruct: {
                    encode(message: _103.Expr_CreateStruct, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _103.Expr_CreateStruct;
                    fromJSON(object: any): _103.Expr_CreateStruct;
                    toJSON(message: _103.Expr_CreateStruct): unknown;
                    fromPartial(object: {
                        messageName?: string;
                        entries?: {
                            id?: bigint;
                            fieldKey?: string;
                            mapKey?: {
                                id?: bigint;
                                constExpr?: {
                                    nullValue?: _138.NullValue;
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
                                    nullValue?: _138.NullValue;
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
                    }): _103.Expr_CreateStruct;
                };
                Expr_CreateStruct_Entry: {
                    encode(message: _103.Expr_CreateStruct_Entry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _103.Expr_CreateStruct_Entry;
                    fromJSON(object: any): _103.Expr_CreateStruct_Entry;
                    toJSON(message: _103.Expr_CreateStruct_Entry): unknown;
                    fromPartial(object: {
                        id?: bigint;
                        fieldKey?: string;
                        mapKey?: {
                            id?: bigint;
                            constExpr?: {
                                nullValue?: _138.NullValue;
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
                                nullValue?: _138.NullValue;
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
                            id?: bigint;
                            constExpr?: {
                                nullValue?: _138.NullValue;
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
                                nullValue?: _138.NullValue;
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
                                nullValue?: _138.NullValue;
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
                                nullValue?: _138.NullValue;
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
                                nullValue?: _138.NullValue;
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
                    }): _103.Expr_Comprehension;
                };
                Constant: {
                    encode(message: _103.Constant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _103.Constant;
                    fromJSON(object: any): _103.Constant;
                    toJSON(message: _103.Constant): unknown;
                    fromPartial(object: {
                        nullValue?: _138.NullValue;
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
                    }): _103.Constant;
                };
                SourceInfo_PositionsEntry: {
                    encode(message: _103.SourceInfo_PositionsEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _103.SourceInfo_PositionsEntry;
                    fromJSON(object: any): _103.SourceInfo_PositionsEntry;
                    toJSON(message: _103.SourceInfo_PositionsEntry): unknown;
                    fromPartial(object: {
                        key?: bigint;
                        value?: number;
                    }): _103.SourceInfo_PositionsEntry;
                };
                SourceInfo_MacroCallsEntry: {
                    encode(message: _103.SourceInfo_MacroCallsEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _103.SourceInfo_MacroCallsEntry;
                    fromJSON(object: any): _103.SourceInfo_MacroCallsEntry;
                    toJSON(message: _103.SourceInfo_MacroCallsEntry): unknown;
                    fromPartial(object: {
                        key?: bigint;
                        value?: {
                            id?: bigint;
                            constExpr?: {
                                nullValue?: _138.NullValue;
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
                    }): _103.SourceInfo_MacroCallsEntry;
                };
                SourceInfo: {
                    encode(message: _103.SourceInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _103.SourceInfo;
                    fromJSON(object: any): _103.SourceInfo;
                    toJSON(message: _103.SourceInfo): unknown;
                    fromPartial(object: {
                        syntaxVersion?: string;
                        location?: string;
                        lineOffsets?: number[];
                        positions?: {};
                        macroCalls?: {};
                    }): _103.SourceInfo;
                };
                SourcePosition: {
                    encode(message: _103.SourcePosition, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _103.SourcePosition;
                    fromJSON(object: any): _103.SourcePosition;
                    toJSON(message: _103.SourcePosition): unknown;
                    fromPartial(object: {
                        location?: string;
                        offset?: number;
                        line?: number;
                        column?: number;
                    }): _103.SourcePosition;
                };
                Explain: {
                    encode(message: _102.Explain, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _102.Explain;
                    fromJSON(object: any): _102.Explain;
                    toJSON(message: _102.Explain): unknown;
                    fromPartial(object: {
                        values?: {
                            nullValue?: _138.NullValue;
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
                    }): _102.Explain;
                };
                Explain_ExprStep: {
                    encode(message: _102.Explain_ExprStep, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _102.Explain_ExprStep;
                    fromJSON(object: any): _102.Explain_ExprStep;
                    toJSON(message: _102.Explain_ExprStep): unknown;
                    fromPartial(object: {
                        id?: bigint;
                        valueIndex?: number;
                    }): _102.Explain_ExprStep;
                };
                EvalState: {
                    encode(message: _101.EvalState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _101.EvalState;
                    fromJSON(object: any): _101.EvalState;
                    toJSON(message: _101.EvalState): unknown;
                    fromPartial(object: {
                        values?: {
                            value?: {
                                nullValue?: _138.NullValue;
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
                    }): _101.EvalState;
                };
                EvalState_Result: {
                    encode(message: _101.EvalState_Result, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _101.EvalState_Result;
                    fromJSON(object: any): _101.EvalState_Result;
                    toJSON(message: _101.EvalState_Result): unknown;
                    fromPartial(object: {
                        expr?: bigint;
                        value?: bigint;
                    }): _101.EvalState_Result;
                };
                ExprValue: {
                    encode(message: _101.ExprValue, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _101.ExprValue;
                    fromJSON(object: any): _101.ExprValue;
                    toJSON(message: _101.ExprValue): unknown;
                    fromPartial(object: {
                        value?: {
                            nullValue?: _138.NullValue;
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
                    }): _101.ExprValue;
                };
                ErrorSet: {
                    encode(message: _101.ErrorSet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _101.ErrorSet;
                    fromJSON(object: any): _101.ErrorSet;
                    toJSON(message: _101.ErrorSet): unknown;
                    fromPartial(object: {
                        errors?: {
                            code?: number;
                            message?: string;
                            details?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                        }[];
                    }): _101.ErrorSet;
                };
                UnknownSet: {
                    encode(message: _101.UnknownSet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _101.UnknownSet;
                    fromJSON(object: any): _101.UnknownSet;
                    toJSON(message: _101.UnknownSet): unknown;
                    fromPartial(object: {
                        exprs?: bigint[];
                    }): _101.UnknownSet;
                };
                type_PrimitiveTypeFromJSON(object: any): _100.Type_PrimitiveType;
                type_PrimitiveTypeToJSON(object: _100.Type_PrimitiveType): string;
                type_WellKnownTypeFromJSON(object: any): _100.Type_WellKnownType;
                type_WellKnownTypeToJSON(object: _100.Type_WellKnownType): string;
                Type_PrimitiveType: typeof _100.Type_PrimitiveType;
                Type_WellKnownType: typeof _100.Type_WellKnownType;
                CheckedExpr_ReferenceMapEntry: {
                    encode(message: _100.CheckedExpr_ReferenceMapEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _100.CheckedExpr_ReferenceMapEntry;
                    fromJSON(object: any): _100.CheckedExpr_ReferenceMapEntry;
                    toJSON(message: _100.CheckedExpr_ReferenceMapEntry): unknown;
                    fromPartial(object: {
                        key?: bigint;
                        value?: {
                            name?: string;
                            overloadId?: string[];
                            value?: {
                                nullValue?: _138.NullValue;
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
                    }): _100.CheckedExpr_ReferenceMapEntry;
                };
                CheckedExpr_TypeMapEntry: {
                    encode(message: _100.CheckedExpr_TypeMapEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _100.CheckedExpr_TypeMapEntry;
                    fromJSON(object: any): _100.CheckedExpr_TypeMapEntry;
                    toJSON(message: _100.CheckedExpr_TypeMapEntry): unknown;
                    fromPartial(object: {
                        key?: bigint;
                        value?: {
                            dyn?: {};
                            null?: _138.NullValue;
                            primitive?: _100.Type_PrimitiveType;
                            wrapper?: _100.Type_PrimitiveType;
                            wellKnown?: _100.Type_WellKnownType;
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
                    }): _100.CheckedExpr_TypeMapEntry;
                };
                CheckedExpr: {
                    encode(message: _100.CheckedExpr, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _100.CheckedExpr;
                    fromJSON(object: any): _100.CheckedExpr;
                    toJSON(message: _100.CheckedExpr): unknown;
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
                                nullValue?: _138.NullValue;
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
                    }): _100.CheckedExpr;
                };
                Type: {
                    encode(message: _100.Type, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _100.Type;
                    fromJSON(object: any): _100.Type;
                    toJSON(message: _100.Type): unknown;
                    fromPartial(object: {
                        dyn?: {};
                        null?: _138.NullValue;
                        primitive?: _100.Type_PrimitiveType;
                        wrapper?: _100.Type_PrimitiveType;
                        wellKnown?: _100.Type_WellKnownType;
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
                    }): _100.Type;
                };
                Type_ListType: {
                    encode(message: _100.Type_ListType, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _100.Type_ListType;
                    fromJSON(object: any): _100.Type_ListType;
                    toJSON(message: _100.Type_ListType): unknown;
                    fromPartial(object: {
                        elemType?: {
                            dyn?: {};
                            null?: _138.NullValue;
                            primitive?: _100.Type_PrimitiveType;
                            wrapper?: _100.Type_PrimitiveType;
                            wellKnown?: _100.Type_WellKnownType;
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
                    }): _100.Type_ListType;
                };
                Type_MapType: {
                    encode(message: _100.Type_MapType, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _100.Type_MapType;
                    fromJSON(object: any): _100.Type_MapType;
                    toJSON(message: _100.Type_MapType): unknown;
                    fromPartial(object: {
                        keyType?: {
                            dyn?: {};
                            null?: _138.NullValue;
                            primitive?: _100.Type_PrimitiveType;
                            wrapper?: _100.Type_PrimitiveType;
                            wellKnown?: _100.Type_WellKnownType;
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
                            null?: _138.NullValue;
                            primitive?: _100.Type_PrimitiveType;
                            wrapper?: _100.Type_PrimitiveType;
                            wellKnown?: _100.Type_WellKnownType;
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
                    }): _100.Type_MapType;
                };
                Type_FunctionType: {
                    encode(message: _100.Type_FunctionType, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _100.Type_FunctionType;
                    fromJSON(object: any): _100.Type_FunctionType;
                    toJSON(message: _100.Type_FunctionType): unknown;
                    fromPartial(object: {
                        resultType?: {
                            dyn?: {};
                            null?: _138.NullValue;
                            primitive?: _100.Type_PrimitiveType;
                            wrapper?: _100.Type_PrimitiveType;
                            wellKnown?: _100.Type_WellKnownType;
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
                            null?: _138.NullValue;
                            primitive?: _100.Type_PrimitiveType;
                            wrapper?: _100.Type_PrimitiveType;
                            wellKnown?: _100.Type_WellKnownType;
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
                    }): _100.Type_FunctionType;
                };
                Type_AbstractType: {
                    encode(message: _100.Type_AbstractType, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _100.Type_AbstractType;
                    fromJSON(object: any): _100.Type_AbstractType;
                    toJSON(message: _100.Type_AbstractType): unknown;
                    fromPartial(object: {
                        name?: string;
                        parameterTypes?: {
                            dyn?: {};
                            null?: _138.NullValue;
                            primitive?: _100.Type_PrimitiveType;
                            wrapper?: _100.Type_PrimitiveType;
                            wellKnown?: _100.Type_WellKnownType;
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
                    }): _100.Type_AbstractType;
                };
                Decl: {
                    encode(message: _100.Decl, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _100.Decl;
                    fromJSON(object: any): _100.Decl;
                    toJSON(message: _100.Decl): unknown;
                    fromPartial(object: {
                        name?: string;
                        ident?: {
                            type?: {
                                dyn?: {};
                                null?: _138.NullValue;
                                primitive?: _100.Type_PrimitiveType;
                                wrapper?: _100.Type_PrimitiveType;
                                wellKnown?: _100.Type_WellKnownType;
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
                                nullValue?: _138.NullValue;
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
                                    null?: _138.NullValue;
                                    primitive?: _100.Type_PrimitiveType;
                                    wrapper?: _100.Type_PrimitiveType;
                                    wellKnown?: _100.Type_WellKnownType;
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
                                    null?: _138.NullValue;
                                    primitive?: _100.Type_PrimitiveType;
                                    wrapper?: _100.Type_PrimitiveType;
                                    wellKnown?: _100.Type_WellKnownType;
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
                    }): _100.Decl;
                };
                Decl_IdentDecl: {
                    encode(message: _100.Decl_IdentDecl, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _100.Decl_IdentDecl;
                    fromJSON(object: any): _100.Decl_IdentDecl;
                    toJSON(message: _100.Decl_IdentDecl): unknown;
                    fromPartial(object: {
                        type?: {
                            dyn?: {};
                            null?: _138.NullValue;
                            primitive?: _100.Type_PrimitiveType;
                            wrapper?: _100.Type_PrimitiveType;
                            wellKnown?: _100.Type_WellKnownType;
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
                            nullValue?: _138.NullValue;
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
                    }): _100.Decl_IdentDecl;
                };
                Decl_FunctionDecl: {
                    encode(message: _100.Decl_FunctionDecl, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _100.Decl_FunctionDecl;
                    fromJSON(object: any): _100.Decl_FunctionDecl;
                    toJSON(message: _100.Decl_FunctionDecl): unknown;
                    fromPartial(object: {
                        overloads?: {
                            overloadId?: string;
                            params?: {
                                dyn?: {};
                                null?: _138.NullValue;
                                primitive?: _100.Type_PrimitiveType;
                                wrapper?: _100.Type_PrimitiveType;
                                wellKnown?: _100.Type_WellKnownType;
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
                                null?: _138.NullValue;
                                primitive?: _100.Type_PrimitiveType;
                                wrapper?: _100.Type_PrimitiveType;
                                wellKnown?: _100.Type_WellKnownType;
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
                    }): _100.Decl_FunctionDecl;
                };
                Decl_FunctionDecl_Overload: {
                    encode(message: _100.Decl_FunctionDecl_Overload, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _100.Decl_FunctionDecl_Overload;
                    fromJSON(object: any): _100.Decl_FunctionDecl_Overload;
                    toJSON(message: _100.Decl_FunctionDecl_Overload): unknown;
                    fromPartial(object: {
                        overloadId?: string;
                        params?: {
                            dyn?: {};
                            null?: _138.NullValue;
                            primitive?: _100.Type_PrimitiveType;
                            wrapper?: _100.Type_PrimitiveType;
                            wellKnown?: _100.Type_WellKnownType;
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
                            null?: _138.NullValue;
                            primitive?: _100.Type_PrimitiveType;
                            wrapper?: _100.Type_PrimitiveType;
                            wellKnown?: _100.Type_WellKnownType;
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
                    }): _100.Decl_FunctionDecl_Overload;
                };
                Reference: {
                    encode(message: _100.Reference, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _100.Reference;
                    fromJSON(object: any): _100.Reference;
                    toJSON(message: _100.Reference): unknown;
                    fromPartial(object: {
                        name?: string;
                        overloadId?: string[];
                        value?: {
                            nullValue?: _138.NullValue;
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
                    }): _100.Reference;
                };
            };
            const v1beta1: {
                Value: {
                    encode(message: _109.Value, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _109.Value;
                    fromJSON(object: any): _109.Value;
                    toJSON(message: _109.Value): unknown;
                    fromPartial(object: {
                        nullValue?: _138.NullValue;
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
                    }): _109.Value;
                };
                EnumValue: {
                    encode(message: _109.EnumValue, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _109.EnumValue;
                    fromJSON(object: any): _109.EnumValue;
                    toJSON(message: _109.EnumValue): unknown;
                    fromPartial(object: {
                        type?: string;
                        value?: number;
                    }): _109.EnumValue;
                };
                ListValue: {
                    encode(message: _109.ListValue, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _109.ListValue;
                    fromJSON(object: any): _109.ListValue;
                    toJSON(message: _109.ListValue): unknown;
                    fromPartial(object: {
                        values?: {
                            nullValue?: _138.NullValue;
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
                    }): _109.ListValue;
                };
                MapValue: {
                    encode(message: _109.MapValue, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _109.MapValue;
                    fromJSON(object: any): _109.MapValue;
                    toJSON(message: _109.MapValue): unknown;
                    fromPartial(object: {
                        entries?: {
                            key?: {
                                nullValue?: _138.NullValue;
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
                                nullValue?: _138.NullValue;
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
                    }): _109.MapValue;
                };
                MapValue_Entry: {
                    encode(message: _109.MapValue_Entry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _109.MapValue_Entry;
                    fromJSON(object: any): _109.MapValue_Entry;
                    toJSON(message: _109.MapValue_Entry): unknown;
                    fromPartial(object: {
                        key?: {
                            nullValue?: _138.NullValue;
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
                            nullValue?: _138.NullValue;
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
                    }): _109.MapValue_Entry;
                };
                SourceInfo_PositionsEntry: {
                    encode(message: _108.SourceInfo_PositionsEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _108.SourceInfo_PositionsEntry;
                    fromJSON(object: any): _108.SourceInfo_PositionsEntry;
                    toJSON(message: _108.SourceInfo_PositionsEntry): unknown;
                    fromPartial(object: {
                        key?: number;
                        value?: number;
                    }): _108.SourceInfo_PositionsEntry;
                };
                SourceInfo: {
                    encode(message: _108.SourceInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _108.SourceInfo;
                    fromJSON(object: any): _108.SourceInfo;
                    toJSON(message: _108.SourceInfo): unknown;
                    fromPartial(object: {
                        location?: string;
                        lineOffsets?: number[];
                        positions?: {
                            [x: number]: number;
                        };
                    }): _108.SourceInfo;
                };
                SourcePosition: {
                    encode(message: _108.SourcePosition, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _108.SourcePosition;
                    fromJSON(object: any): _108.SourcePosition;
                    toJSON(message: _108.SourcePosition): unknown;
                    fromPartial(object: {
                        location?: string;
                        offset?: number;
                        line?: number;
                        column?: number;
                    }): _108.SourcePosition;
                };
                ParsedExpr: {
                    encode(message: _107.ParsedExpr, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _107.ParsedExpr;
                    fromJSON(object: any): _107.ParsedExpr;
                    toJSON(message: _107.ParsedExpr): unknown;
                    fromPartial(object: {
                        expr?: {
                            id?: number;
                            literalExpr?: {
                                nullValue?: _138.NullValue;
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
                    }): _107.ParsedExpr;
                };
                Expr: {
                    encode(message: _107.Expr, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _107.Expr;
                    fromJSON(object: any): _107.Expr;
                    toJSON(message: _107.Expr): unknown;
                    fromPartial(object: {
                        id?: number;
                        literalExpr?: {
                            nullValue?: _138.NullValue;
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
                    }): _107.Expr;
                };
                Expr_Ident: {
                    encode(message: _107.Expr_Ident, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _107.Expr_Ident;
                    fromJSON(object: any): _107.Expr_Ident;
                    toJSON(message: _107.Expr_Ident): unknown;
                    fromPartial(object: {
                        name?: string;
                    }): _107.Expr_Ident;
                };
                Expr_Select: {
                    encode(message: _107.Expr_Select, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _107.Expr_Select;
                    fromJSON(object: any): _107.Expr_Select;
                    toJSON(message: _107.Expr_Select): unknown;
                    fromPartial(object: {
                        operand?: {
                            id?: number;
                            literalExpr?: {
                                nullValue?: _138.NullValue;
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
                    }): _107.Expr_Select;
                };
                Expr_Call: {
                    encode(message: _107.Expr_Call, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _107.Expr_Call;
                    fromJSON(object: any): _107.Expr_Call;
                    toJSON(message: _107.Expr_Call): unknown;
                    fromPartial(object: {
                        target?: {
                            id?: number;
                            literalExpr?: {
                                nullValue?: _138.NullValue;
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
                                nullValue?: _138.NullValue;
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
                    }): _107.Expr_Call;
                };
                Expr_CreateList: {
                    encode(message: _107.Expr_CreateList, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _107.Expr_CreateList;
                    fromJSON(object: any): _107.Expr_CreateList;
                    toJSON(message: _107.Expr_CreateList): unknown;
                    fromPartial(object: {
                        elements?: {
                            id?: number;
                            literalExpr?: {
                                nullValue?: _138.NullValue;
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
                    }): _107.Expr_CreateList;
                };
                Expr_CreateStruct: {
                    encode(message: _107.Expr_CreateStruct, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _107.Expr_CreateStruct;
                    fromJSON(object: any): _107.Expr_CreateStruct;
                    toJSON(message: _107.Expr_CreateStruct): unknown;
                    fromPartial(object: {
                        type?: string;
                        entries?: {
                            id?: number;
                            fieldKey?: string;
                            mapKey?: {
                                id?: number;
                                literalExpr?: {
                                    nullValue?: _138.NullValue;
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
                                    nullValue?: _138.NullValue;
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
                    }): _107.Expr_CreateStruct;
                };
                Expr_CreateStruct_Entry: {
                    encode(message: _107.Expr_CreateStruct_Entry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _107.Expr_CreateStruct_Entry;
                    fromJSON(object: any): _107.Expr_CreateStruct_Entry;
                    toJSON(message: _107.Expr_CreateStruct_Entry): unknown;
                    fromPartial(object: {
                        id?: number;
                        fieldKey?: string;
                        mapKey?: {
                            id?: number;
                            literalExpr?: {
                                nullValue?: _138.NullValue;
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
                                nullValue?: _138.NullValue;
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
                    }): _107.Expr_CreateStruct_Entry;
                };
                Expr_Comprehension: {
                    encode(message: _107.Expr_Comprehension, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _107.Expr_Comprehension;
                    fromJSON(object: any): _107.Expr_Comprehension;
                    toJSON(message: _107.Expr_Comprehension): unknown;
                    fromPartial(object: {
                        iterVar?: string;
                        iterRange?: {
                            id?: number;
                            literalExpr?: {
                                nullValue?: _138.NullValue;
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
                                nullValue?: _138.NullValue;
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
                                nullValue?: _138.NullValue;
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
                                nullValue?: _138.NullValue;
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
                                nullValue?: _138.NullValue;
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
                    }): _107.Expr_Comprehension;
                };
                Literal: {
                    encode(message: _107.Literal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _107.Literal;
                    fromJSON(object: any): _107.Literal;
                    toJSON(message: _107.Literal): unknown;
                    fromPartial(object: {
                        nullValue?: _138.NullValue;
                        boolValue?: boolean;
                        int64Value?: bigint;
                        uint64Value?: bigint;
                        doubleValue?: number;
                        stringValue?: string;
                        bytesValue?: Uint8Array;
                    }): _107.Literal;
                };
                EvalState: {
                    encode(message: _106.EvalState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _106.EvalState;
                    fromJSON(object: any): _106.EvalState;
                    toJSON(message: _106.EvalState): unknown;
                    fromPartial(object: {
                        values?: {
                            value?: {
                                nullValue?: _138.NullValue;
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
                    }): _106.EvalState;
                };
                EvalState_Result: {
                    encode(message: _106.EvalState_Result, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _106.EvalState_Result;
                    fromJSON(object: any): _106.EvalState_Result;
                    toJSON(message: _106.EvalState_Result): unknown;
                    fromPartial(object: {
                        expr?: {
                            id?: number;
                        };
                        value?: number;
                    }): _106.EvalState_Result;
                };
                ExprValue: {
                    encode(message: _106.ExprValue, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _106.ExprValue;
                    fromJSON(object: any): _106.ExprValue;
                    toJSON(message: _106.ExprValue): unknown;
                    fromPartial(object: {
                        value?: {
                            nullValue?: _138.NullValue;
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
                    }): _106.ExprValue;
                };
                ErrorSet: {
                    encode(message: _106.ErrorSet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _106.ErrorSet;
                    fromJSON(object: any): _106.ErrorSet;
                    toJSON(message: _106.ErrorSet): unknown;
                    fromPartial(object: {
                        errors?: {
                            code?: number;
                            message?: string;
                            details?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                        }[];
                    }): _106.ErrorSet;
                };
                UnknownSet: {
                    encode(message: _106.UnknownSet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _106.UnknownSet;
                    fromJSON(object: any): _106.UnknownSet;
                    toJSON(message: _106.UnknownSet): unknown;
                    fromPartial(object: {
                        exprs?: {
                            id?: number;
                        }[];
                    }): _106.UnknownSet;
                };
                IdRef: {
                    encode(message: _106.IdRef, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _106.IdRef;
                    fromJSON(object: any): _106.IdRef;
                    toJSON(message: _106.IdRef): unknown;
                    fromPartial(object: {
                        id?: number;
                    }): _106.IdRef;
                };
                Decl: {
                    encode(message: _105.Decl, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _105.Decl;
                    fromJSON(object: any): _105.Decl;
                    toJSON(message: _105.Decl): unknown;
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
                                    nullValue?: _138.NullValue;
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
                                        nullValue?: _138.NullValue;
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
                    }): _105.Decl;
                };
                DeclType: {
                    encode(message: _105.DeclType, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _105.DeclType;
                    fromJSON(object: any): _105.DeclType;
                    toJSON(message: _105.DeclType): unknown;
                    fromPartial(object: {
                        id?: number;
                        type?: string;
                        typeParams?: any[];
                    }): _105.DeclType;
                };
                IdentDecl: {
                    encode(message: _105.IdentDecl, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _105.IdentDecl;
                    fromJSON(object: any): _105.IdentDecl;
                    toJSON(message: _105.IdentDecl): unknown;
                    fromPartial(object: {
                        type?: {
                            id?: number;
                            type?: string;
                            typeParams?: any[];
                        };
                        value?: {
                            id?: number;
                            literalExpr?: {
                                nullValue?: _138.NullValue;
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
                    }): _105.IdentDecl;
                };
                FunctionDecl: {
                    encode(message: _105.FunctionDecl, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _105.FunctionDecl;
                    fromJSON(object: any): _105.FunctionDecl;
                    toJSON(message: _105.FunctionDecl): unknown;
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
                                    nullValue?: _138.NullValue;
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
                    }): _105.FunctionDecl;
                };
            };
        }
    }
    const bytestream: {
        ReadRequest: {
            encode(message: _110.ReadRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _110.ReadRequest;
            fromJSON(object: any): _110.ReadRequest;
            toJSON(message: _110.ReadRequest): unknown;
            fromPartial(object: {
                resourceName?: string;
                readOffset?: bigint;
                readLimit?: bigint;
            }): _110.ReadRequest;
        };
        ReadResponse: {
            encode(message: _110.ReadResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _110.ReadResponse;
            fromJSON(object: any): _110.ReadResponse;
            toJSON(message: _110.ReadResponse): unknown;
            fromPartial(object: {
                data?: Uint8Array;
            }): _110.ReadResponse;
        };
        WriteRequest: {
            encode(message: _110.WriteRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _110.WriteRequest;
            fromJSON(object: any): _110.WriteRequest;
            toJSON(message: _110.WriteRequest): unknown;
            fromPartial(object: {
                resourceName?: string;
                writeOffset?: bigint;
                finishWrite?: boolean;
                data?: Uint8Array;
            }): _110.WriteRequest;
        };
        WriteResponse: {
            encode(message: _110.WriteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _110.WriteResponse;
            fromJSON(object: any): _110.WriteResponse;
            toJSON(message: _110.WriteResponse): unknown;
            fromPartial(object: {
                committedSize?: bigint;
            }): _110.WriteResponse;
        };
        QueryWriteStatusRequest: {
            encode(message: _110.QueryWriteStatusRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _110.QueryWriteStatusRequest;
            fromJSON(object: any): _110.QueryWriteStatusRequest;
            toJSON(message: _110.QueryWriteStatusRequest): unknown;
            fromPartial(object: {
                resourceName?: string;
            }): _110.QueryWriteStatusRequest;
        };
        QueryWriteStatusResponse: {
            encode(message: _110.QueryWriteStatusResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _110.QueryWriteStatusResponse;
            fromJSON(object: any): _110.QueryWriteStatusResponse;
            toJSON(message: _110.QueryWriteStatusResponse): unknown;
            fromPartial(object: {
                committedSize?: bigint;
                complete?: boolean;
            }): _110.QueryWriteStatusResponse;
        };
    };
    namespace geo {
        const type: {
            Viewport: {
                encode(message: _111.Viewport, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _111.Viewport;
                fromJSON(object: any): _111.Viewport;
                toJSON(message: _111.Viewport): unknown;
                fromPartial(object: {
                    low?: {
                        latitude?: number;
                        longitude?: number;
                    };
                    high?: {
                        latitude?: number;
                        longitude?: number;
                    };
                }): _111.Viewport;
            };
        };
    }
    const longrunning: {
        Operation: {
            encode(message: _112.Operation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _112.Operation;
            fromJSON(object: any): _112.Operation;
            toJSON(message: _112.Operation): unknown;
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
            }): _112.Operation;
        };
        GetOperationRequest: {
            encode(message: _112.GetOperationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _112.GetOperationRequest;
            fromJSON(object: any): _112.GetOperationRequest;
            toJSON(message: _112.GetOperationRequest): unknown;
            fromPartial(object: {
                name?: string;
            }): _112.GetOperationRequest;
        };
        ListOperationsRequest: {
            encode(message: _112.ListOperationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _112.ListOperationsRequest;
            fromJSON(object: any): _112.ListOperationsRequest;
            toJSON(message: _112.ListOperationsRequest): unknown;
            fromPartial(object: {
                name?: string;
                filter?: string;
                pageSize?: number;
                pageToken?: string;
            }): _112.ListOperationsRequest;
        };
        ListOperationsResponse: {
            encode(message: _112.ListOperationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _112.ListOperationsResponse;
            fromJSON(object: any): _112.ListOperationsResponse;
            toJSON(message: _112.ListOperationsResponse): unknown;
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
            }): _112.ListOperationsResponse;
        };
        CancelOperationRequest: {
            encode(message: _112.CancelOperationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _112.CancelOperationRequest;
            fromJSON(object: any): _112.CancelOperationRequest;
            toJSON(message: _112.CancelOperationRequest): unknown;
            fromPartial(object: {
                name?: string;
            }): _112.CancelOperationRequest;
        };
        DeleteOperationRequest: {
            encode(message: _112.DeleteOperationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _112.DeleteOperationRequest;
            fromJSON(object: any): _112.DeleteOperationRequest;
            toJSON(message: _112.DeleteOperationRequest): unknown;
            fromPartial(object: {
                name?: string;
            }): _112.DeleteOperationRequest;
        };
        WaitOperationRequest: {
            encode(message: _112.WaitOperationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _112.WaitOperationRequest;
            fromJSON(object: any): _112.WaitOperationRequest;
            toJSON(message: _112.WaitOperationRequest): unknown;
            fromPartial(object: {
                name?: string;
                timeout?: {
                    seconds?: bigint;
                    nanos?: number;
                };
            }): _112.WaitOperationRequest;
        };
        OperationInfo: {
            encode(message: _112.OperationInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _112.OperationInfo;
            fromJSON(object: any): _112.OperationInfo;
            toJSON(message: _112.OperationInfo): unknown;
            fromPartial(object: {
                responseType?: string;
                metadataType?: string;
            }): _112.OperationInfo;
        };
    };
    const rpc: {
        Status: {
            encode(message: _115.Status, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _115.Status;
            fromJSON(object: any): _115.Status;
            toJSON(message: _115.Status): unknown;
            fromPartial(object: {
                code?: number;
                message?: string;
                details?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                }[];
            }): _115.Status;
        };
        ErrorInfo_MetadataEntry: {
            encode(message: _114.ErrorInfo_MetadataEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _114.ErrorInfo_MetadataEntry;
            fromJSON(object: any): _114.ErrorInfo_MetadataEntry;
            toJSON(message: _114.ErrorInfo_MetadataEntry): unknown;
            fromPartial(object: {
                key?: string;
                value?: string;
            }): _114.ErrorInfo_MetadataEntry;
        };
        ErrorInfo: {
            encode(message: _114.ErrorInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _114.ErrorInfo;
            fromJSON(object: any): _114.ErrorInfo;
            toJSON(message: _114.ErrorInfo): unknown;
            fromPartial(object: {
                reason?: string;
                domain?: string;
                metadata?: {
                    [x: string]: string;
                };
            }): _114.ErrorInfo;
        };
        RetryInfo: {
            encode(message: _114.RetryInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _114.RetryInfo;
            fromJSON(object: any): _114.RetryInfo;
            toJSON(message: _114.RetryInfo): unknown;
            fromPartial(object: {
                retryDelay?: {
                    seconds?: bigint;
                    nanos?: number;
                };
            }): _114.RetryInfo;
        };
        DebugInfo: {
            encode(message: _114.DebugInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _114.DebugInfo;
            fromJSON(object: any): _114.DebugInfo;
            toJSON(message: _114.DebugInfo): unknown;
            fromPartial(object: {
                stackEntries?: string[];
                detail?: string;
            }): _114.DebugInfo;
        };
        QuotaFailure: {
            encode(message: _114.QuotaFailure, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _114.QuotaFailure;
            fromJSON(object: any): _114.QuotaFailure;
            toJSON(message: _114.QuotaFailure): unknown;
            fromPartial(object: {
                violations?: {
                    subject?: string;
                    description?: string;
                }[];
            }): _114.QuotaFailure;
        };
        QuotaFailure_Violation: {
            encode(message: _114.QuotaFailure_Violation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _114.QuotaFailure_Violation;
            fromJSON(object: any): _114.QuotaFailure_Violation;
            toJSON(message: _114.QuotaFailure_Violation): unknown;
            fromPartial(object: {
                subject?: string;
                description?: string;
            }): _114.QuotaFailure_Violation;
        };
        PreconditionFailure: {
            encode(message: _114.PreconditionFailure, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _114.PreconditionFailure;
            fromJSON(object: any): _114.PreconditionFailure;
            toJSON(message: _114.PreconditionFailure): unknown;
            fromPartial(object: {
                violations?: {
                    type?: string;
                    subject?: string;
                    description?: string;
                }[];
            }): _114.PreconditionFailure;
        };
        PreconditionFailure_Violation: {
            encode(message: _114.PreconditionFailure_Violation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _114.PreconditionFailure_Violation;
            fromJSON(object: any): _114.PreconditionFailure_Violation;
            toJSON(message: _114.PreconditionFailure_Violation): unknown;
            fromPartial(object: {
                type?: string;
                subject?: string;
                description?: string;
            }): _114.PreconditionFailure_Violation;
        };
        BadRequest: {
            encode(message: _114.BadRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _114.BadRequest;
            fromJSON(object: any): _114.BadRequest;
            toJSON(message: _114.BadRequest): unknown;
            fromPartial(object: {
                fieldViolations?: {
                    field?: string;
                    description?: string;
                }[];
            }): _114.BadRequest;
        };
        BadRequest_FieldViolation: {
            encode(message: _114.BadRequest_FieldViolation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _114.BadRequest_FieldViolation;
            fromJSON(object: any): _114.BadRequest_FieldViolation;
            toJSON(message: _114.BadRequest_FieldViolation): unknown;
            fromPartial(object: {
                field?: string;
                description?: string;
            }): _114.BadRequest_FieldViolation;
        };
        RequestInfo: {
            encode(message: _114.RequestInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _114.RequestInfo;
            fromJSON(object: any): _114.RequestInfo;
            toJSON(message: _114.RequestInfo): unknown;
            fromPartial(object: {
                requestId?: string;
                servingData?: string;
            }): _114.RequestInfo;
        };
        ResourceInfo: {
            encode(message: _114.ResourceInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _114.ResourceInfo;
            fromJSON(object: any): _114.ResourceInfo;
            toJSON(message: _114.ResourceInfo): unknown;
            fromPartial(object: {
                resourceType?: string;
                resourceName?: string;
                owner?: string;
                description?: string;
            }): _114.ResourceInfo;
        };
        Help: {
            encode(message: _114.Help, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _114.Help;
            fromJSON(object: any): _114.Help;
            toJSON(message: _114.Help): unknown;
            fromPartial(object: {
                links?: {
                    description?: string;
                    url?: string;
                }[];
            }): _114.Help;
        };
        Help_Link: {
            encode(message: _114.Help_Link, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _114.Help_Link;
            fromJSON(object: any): _114.Help_Link;
            toJSON(message: _114.Help_Link): unknown;
            fromPartial(object: {
                description?: string;
                url?: string;
            }): _114.Help_Link;
        };
        LocalizedMessage: {
            encode(message: _114.LocalizedMessage, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _114.LocalizedMessage;
            fromJSON(object: any): _114.LocalizedMessage;
            toJSON(message: _114.LocalizedMessage): unknown;
            fromPartial(object: {
                locale?: string;
                message?: string;
            }): _114.LocalizedMessage;
        };
        codeFromJSON(object: any): _113.Code;
        codeToJSON(object: _113.Code): string;
        Code: typeof _113.Code;
    };
    const type: {
        TimeOfDay: {
            encode(message: _132.TimeOfDay, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _132.TimeOfDay;
            fromJSON(object: any): _132.TimeOfDay;
            toJSON(message: _132.TimeOfDay): unknown;
            fromPartial(object: {
                hours?: number;
                minutes?: number;
                seconds?: number;
                nanos?: number;
            }): _132.TimeOfDay;
        };
        Quaternion: {
            encode(message: _131.Quaternion, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _131.Quaternion;
            fromJSON(object: any): _131.Quaternion;
            toJSON(message: _131.Quaternion): unknown;
            fromPartial(object: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            }): _131.Quaternion;
        };
        PostalAddress: {
            encode(message: _130.PostalAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _130.PostalAddress;
            fromJSON(object: any): _130.PostalAddress;
            toJSON(message: _130.PostalAddress): unknown;
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
            }): _130.PostalAddress;
        };
        PhoneNumber: {
            encode(message: _129.PhoneNumber, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _129.PhoneNumber;
            fromJSON(object: any): _129.PhoneNumber;
            toJSON(message: _129.PhoneNumber): unknown;
            fromPartial(object: {
                e164Number?: string;
                shortCode?: {
                    regionCode?: string;
                    number?: string;
                };
                extension?: string;
            }): _129.PhoneNumber;
        };
        PhoneNumber_ShortCode: {
            encode(message: _129.PhoneNumber_ShortCode, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _129.PhoneNumber_ShortCode;
            fromJSON(object: any): _129.PhoneNumber_ShortCode;
            toJSON(message: _129.PhoneNumber_ShortCode): unknown;
            fromPartial(object: {
                regionCode?: string;
                number?: string;
            }): _129.PhoneNumber_ShortCode;
        };
        monthFromJSON(object: any): _128.Month;
        monthToJSON(object: _128.Month): string;
        Month: typeof _128.Month;
        Money: {
            encode(message: _127.Money, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _127.Money;
            fromJSON(object: any): _127.Money;
            toJSON(message: _127.Money): unknown;
            fromPartial(object: {
                currencyCode?: string;
                units?: bigint;
                nanos?: number;
            }): _127.Money;
        };
        LocalizedText: {
            encode(message: _126.LocalizedText, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _126.LocalizedText;
            fromJSON(object: any): _126.LocalizedText;
            toJSON(message: _126.LocalizedText): unknown;
            fromPartial(object: {
                text?: string;
                languageCode?: string;
            }): _126.LocalizedText;
        };
        LatLng: {
            encode(message: _125.LatLng, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _125.LatLng;
            fromJSON(object: any): _125.LatLng;
            toJSON(message: _125.LatLng): unknown;
            fromPartial(object: {
                latitude?: number;
                longitude?: number;
            }): _125.LatLng;
        };
        Interval: {
            encode(message: _124.Interval, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _124.Interval;
            fromJSON(object: any): _124.Interval;
            toJSON(message: _124.Interval): unknown;
            fromPartial(object: {
                startTime?: {
                    seconds?: bigint;
                    nanos?: number;
                };
                endTime?: {
                    seconds?: bigint;
                    nanos?: number;
                };
            }): _124.Interval;
        };
        Fraction: {
            encode(message: _123.Fraction, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _123.Fraction;
            fromJSON(object: any): _123.Fraction;
            toJSON(message: _123.Fraction): unknown;
            fromPartial(object: {
                numerator?: bigint;
                denominator?: bigint;
            }): _123.Fraction;
        };
        Expr: {
            encode(message: _122.Expr, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _122.Expr;
            fromJSON(object: any): _122.Expr;
            toJSON(message: _122.Expr): unknown;
            fromPartial(object: {
                expression?: string;
                title?: string;
                description?: string;
                location?: string;
            }): _122.Expr;
        };
        Decimal: {
            encode(message: _121.Decimal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _121.Decimal;
            fromJSON(object: any): _121.Decimal;
            toJSON(message: _121.Decimal): unknown;
            fromPartial(object: {
                value?: string;
            }): _121.Decimal;
        };
        dayOfWeekFromJSON(object: any): _120.DayOfWeek;
        dayOfWeekToJSON(object: _120.DayOfWeek): string;
        DayOfWeek: typeof _120.DayOfWeek;
        DateTime: {
            encode(message: _119.DateTime, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _119.DateTime;
            fromJSON(object: any): _119.DateTime;
            toJSON(message: _119.DateTime): unknown;
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
            }): _119.DateTime;
        };
        TimeZone: {
            encode(message: _119.TimeZone, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _119.TimeZone;
            fromJSON(object: any): _119.TimeZone;
            toJSON(message: _119.TimeZone): unknown;
            fromPartial(object: {
                id?: string;
                version?: string;
            }): _119.TimeZone;
        };
        Date: {
            encode(message: _118.Date, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _118.Date;
            fromJSON(object: any): _118.Date;
            toJSON(message: _118.Date): unknown;
            fromPartial(object: {
                year?: number;
                month?: number;
                day?: number;
            }): _118.Date;
        };
        Color: {
            encode(message: _117.Color, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _117.Color;
            fromJSON(object: any): _117.Color;
            toJSON(message: _117.Color): unknown;
            fromPartial(object: {
                red?: number;
                green?: number;
                blue?: number;
                alpha?: {
                    value?: number;
                };
            }): _117.Color;
        };
        calendarPeriodFromJSON(object: any): _116.CalendarPeriod;
        calendarPeriodToJSON(object: _116.CalendarPeriod): string;
        CalendarPeriod: typeof _116.CalendarPeriod;
    };
    const protobuf: {
        DoubleValue: {
            encode(message: _139.DoubleValue, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _139.DoubleValue;
            fromJSON(object: any): _139.DoubleValue;
            toJSON(message: _139.DoubleValue): unknown;
            fromPartial(object: {
                value?: number;
            }): _139.DoubleValue;
        };
        FloatValue: {
            encode(message: _139.FloatValue, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _139.FloatValue;
            fromJSON(object: any): _139.FloatValue;
            toJSON(message: _139.FloatValue): unknown;
            fromPartial(object: {
                value?: number;
            }): _139.FloatValue;
        };
        Int64Value: {
            encode(message: _139.Int64Value, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _139.Int64Value;
            fromJSON(object: any): _139.Int64Value;
            toJSON(message: _139.Int64Value): unknown;
            fromPartial(object: {
                value?: bigint;
            }): _139.Int64Value;
        };
        UInt64Value: {
            encode(message: _139.UInt64Value, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _139.UInt64Value;
            fromJSON(object: any): _139.UInt64Value;
            toJSON(message: _139.UInt64Value): unknown;
            fromPartial(object: {
                value?: bigint;
            }): _139.UInt64Value;
        };
        Int32Value: {
            encode(message: _139.Int32Value, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _139.Int32Value;
            fromJSON(object: any): _139.Int32Value;
            toJSON(message: _139.Int32Value): unknown;
            fromPartial(object: {
                value?: number;
            }): _139.Int32Value;
        };
        UInt32Value: {
            encode(message: _139.UInt32Value, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _139.UInt32Value;
            fromJSON(object: any): _139.UInt32Value;
            toJSON(message: _139.UInt32Value): unknown;
            fromPartial(object: {
                value?: number;
            }): _139.UInt32Value;
        };
        BoolValue: {
            encode(message: _139.BoolValue, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _139.BoolValue;
            fromJSON(object: any): _139.BoolValue;
            toJSON(message: _139.BoolValue): unknown;
            fromPartial(object: {
                value?: boolean;
            }): _139.BoolValue;
        };
        StringValue: {
            encode(message: _139.StringValue, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _139.StringValue;
            fromJSON(object: any): _139.StringValue;
            toJSON(message: _139.StringValue): unknown;
            fromPartial(object: {
                value?: string;
            }): _139.StringValue;
        };
        BytesValue: {
            encode(message: _139.BytesValue, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _139.BytesValue;
            fromJSON(object: any): _139.BytesValue;
            toJSON(message: _139.BytesValue): unknown;
            fromPartial(object: {
                value?: Uint8Array;
            }): _139.BytesValue;
        };
        nullValueFromJSON(object: any): _138.NullValue;
        nullValueToJSON(object: _138.NullValue): string;
        NullValue: typeof _138.NullValue;
        Struct_FieldsEntry: {
            encode(message: _138.Struct_FieldsEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _138.Struct_FieldsEntry;
            fromJSON(object: any): _138.Struct_FieldsEntry;
            toJSON(message: _138.Struct_FieldsEntry): unknown;
            fromPartial(object: {
                key?: string;
                value?: {
                    nullValue?: _138.NullValue;
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
            }): _138.Struct_FieldsEntry;
        };
        Struct: {
            encode(message: _138.Struct, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _138.Struct;
            fromJSON(object: any): _138.Struct;
            toJSON(message: _138.Struct): unknown;
            fromPartial(object: {
                fields?: {
                    [x: string]: {
                        nullValue?: _138.NullValue;
                        numberValue?: number;
                        stringValue?: string;
                        boolValue?: boolean;
                        structValue?: any;
                        listValue?: {
                            values?: any[];
                        };
                    };
                };
            }): _138.Struct;
        };
        Value: {
            encode(message: _138.Value, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _138.Value;
            fromJSON(object: any): _138.Value;
            toJSON(message: _138.Value): unknown;
            fromPartial(object: {
                nullValue?: _138.NullValue;
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
            }): _138.Value;
        };
        ListValue: {
            encode(message: _138.ListValue, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _138.ListValue;
            fromJSON(object: any): _138.ListValue;
            toJSON(message: _138.ListValue): unknown;
            fromPartial(object: {
                values?: {
                    nullValue?: _138.NullValue;
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
            }): _138.ListValue;
        };
        Empty: {
            encode(_: _137.Empty, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _137.Empty;
            fromJSON(_: any): _137.Empty;
            toJSON(_: _137.Empty): unknown;
            fromPartial(_: {}): _137.Empty;
        };
        Any: {
            encode(message: _136.Any, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _136.Any;
            fromJSON(object: any): _136.Any;
            toJSON(message: _136.Any): unknown;
            fromPartial(object: {
                typeUrl?: string;
                value?: Uint8Array;
            }): _136.Any;
        };
        Timestamp: {
            encode(message: _135.Timestamp, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _135.Timestamp;
            fromJSON(object: any): _135.Timestamp;
            toJSON(message: _135.Timestamp): unknown;
            fromPartial(object: {
                seconds?: bigint;
                nanos?: number;
            }): _135.Timestamp;
        };
        Duration: {
            encode(message: _134.Duration, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _134.Duration;
            fromJSON(object: any): _134.Duration;
            toJSON(message: _134.Duration): unknown;
            fromPartial(object: {
                seconds?: bigint;
                nanos?: number;
            }): _134.Duration;
        };
        fieldDescriptorProto_TypeFromJSON(object: any): _133.FieldDescriptorProto_Type;
        fieldDescriptorProto_TypeToJSON(object: _133.FieldDescriptorProto_Type): string;
        fieldDescriptorProto_LabelFromJSON(object: any): _133.FieldDescriptorProto_Label;
        fieldDescriptorProto_LabelToJSON(object: _133.FieldDescriptorProto_Label): string;
        fileOptions_OptimizeModeFromJSON(object: any): _133.FileOptions_OptimizeMode;
        fileOptions_OptimizeModeToJSON(object: _133.FileOptions_OptimizeMode): string;
        fieldOptions_CTypeFromJSON(object: any): _133.FieldOptions_CType;
        fieldOptions_CTypeToJSON(object: _133.FieldOptions_CType): string;
        fieldOptions_JSTypeFromJSON(object: any): _133.FieldOptions_JSType;
        fieldOptions_JSTypeToJSON(object: _133.FieldOptions_JSType): string;
        methodOptions_IdempotencyLevelFromJSON(object: any): _133.MethodOptions_IdempotencyLevel;
        methodOptions_IdempotencyLevelToJSON(object: _133.MethodOptions_IdempotencyLevel): string;
        FieldDescriptorProto_Type: typeof _133.FieldDescriptorProto_Type;
        FieldDescriptorProto_Label: typeof _133.FieldDescriptorProto_Label;
        FileOptions_OptimizeMode: typeof _133.FileOptions_OptimizeMode;
        FieldOptions_CType: typeof _133.FieldOptions_CType;
        FieldOptions_JSType: typeof _133.FieldOptions_JSType;
        MethodOptions_IdempotencyLevel: typeof _133.MethodOptions_IdempotencyLevel;
        FileDescriptorSet: {
            encode(message: _133.FileDescriptorSet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.FileDescriptorSet;
            fromJSON(object: any): _133.FileDescriptorSet;
            toJSON(message: _133.FileDescriptorSet): unknown;
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
                            label?: _133.FieldDescriptorProto_Label;
                            type?: _133.FieldDescriptorProto_Type;
                            typeName?: string;
                            extendee?: string;
                            defaultValue?: string;
                            oneofIndex?: number;
                            jsonName?: string;
                            options?: {
                                ctype?: _133.FieldOptions_CType;
                                packed?: boolean;
                                jstype?: _133.FieldOptions_JSType;
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
                            label?: _133.FieldDescriptorProto_Label;
                            type?: _133.FieldDescriptorProto_Type;
                            typeName?: string;
                            extendee?: string;
                            defaultValue?: string;
                            oneofIndex?: number;
                            jsonName?: string;
                            options?: {
                                ctype?: _133.FieldOptions_CType;
                                packed?: boolean;
                                jstype?: _133.FieldOptions_JSType;
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
                                idempotencyLevel?: _133.MethodOptions_IdempotencyLevel;
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
                        label?: _133.FieldDescriptorProto_Label;
                        type?: _133.FieldDescriptorProto_Type;
                        typeName?: string;
                        extendee?: string;
                        defaultValue?: string;
                        oneofIndex?: number;
                        jsonName?: string;
                        options?: {
                            ctype?: _133.FieldOptions_CType;
                            packed?: boolean;
                            jstype?: _133.FieldOptions_JSType;
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
                        optimizeFor?: _133.FileOptions_OptimizeMode;
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
            }): _133.FileDescriptorSet;
        };
        FileDescriptorProto: {
            encode(message: _133.FileDescriptorProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.FileDescriptorProto;
            fromJSON(object: any): _133.FileDescriptorProto;
            toJSON(message: _133.FileDescriptorProto): unknown;
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
                        label?: _133.FieldDescriptorProto_Label;
                        type?: _133.FieldDescriptorProto_Type;
                        typeName?: string;
                        extendee?: string;
                        defaultValue?: string;
                        oneofIndex?: number;
                        jsonName?: string;
                        options?: {
                            ctype?: _133.FieldOptions_CType;
                            packed?: boolean;
                            jstype?: _133.FieldOptions_JSType;
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
                        label?: _133.FieldDescriptorProto_Label;
                        type?: _133.FieldDescriptorProto_Type;
                        typeName?: string;
                        extendee?: string;
                        defaultValue?: string;
                        oneofIndex?: number;
                        jsonName?: string;
                        options?: {
                            ctype?: _133.FieldOptions_CType;
                            packed?: boolean;
                            jstype?: _133.FieldOptions_JSType;
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
                            idempotencyLevel?: _133.MethodOptions_IdempotencyLevel;
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
                    label?: _133.FieldDescriptorProto_Label;
                    type?: _133.FieldDescriptorProto_Type;
                    typeName?: string;
                    extendee?: string;
                    defaultValue?: string;
                    oneofIndex?: number;
                    jsonName?: string;
                    options?: {
                        ctype?: _133.FieldOptions_CType;
                        packed?: boolean;
                        jstype?: _133.FieldOptions_JSType;
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
                    optimizeFor?: _133.FileOptions_OptimizeMode;
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
            }): _133.FileDescriptorProto;
        };
        DescriptorProto: {
            encode(message: _133.DescriptorProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.DescriptorProto;
            fromJSON(object: any): _133.DescriptorProto;
            toJSON(message: _133.DescriptorProto): unknown;
            fromPartial(object: {
                name?: string;
                field?: {
                    name?: string;
                    number?: number;
                    label?: _133.FieldDescriptorProto_Label;
                    type?: _133.FieldDescriptorProto_Type;
                    typeName?: string;
                    extendee?: string;
                    defaultValue?: string;
                    oneofIndex?: number;
                    jsonName?: string;
                    options?: {
                        ctype?: _133.FieldOptions_CType;
                        packed?: boolean;
                        jstype?: _133.FieldOptions_JSType;
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
                    label?: _133.FieldDescriptorProto_Label;
                    type?: _133.FieldDescriptorProto_Type;
                    typeName?: string;
                    extendee?: string;
                    defaultValue?: string;
                    oneofIndex?: number;
                    jsonName?: string;
                    options?: {
                        ctype?: _133.FieldOptions_CType;
                        packed?: boolean;
                        jstype?: _133.FieldOptions_JSType;
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
            }): _133.DescriptorProto;
        };
        DescriptorProto_ExtensionRange: {
            encode(message: _133.DescriptorProto_ExtensionRange, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.DescriptorProto_ExtensionRange;
            fromJSON(object: any): _133.DescriptorProto_ExtensionRange;
            toJSON(message: _133.DescriptorProto_ExtensionRange): unknown;
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
            }): _133.DescriptorProto_ExtensionRange;
        };
        DescriptorProto_ReservedRange: {
            encode(message: _133.DescriptorProto_ReservedRange, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.DescriptorProto_ReservedRange;
            fromJSON(object: any): _133.DescriptorProto_ReservedRange;
            toJSON(message: _133.DescriptorProto_ReservedRange): unknown;
            fromPartial(object: {
                start?: number;
                end?: number;
            }): _133.DescriptorProto_ReservedRange;
        };
        ExtensionRangeOptions: {
            encode(message: _133.ExtensionRangeOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.ExtensionRangeOptions;
            fromJSON(object: any): _133.ExtensionRangeOptions;
            toJSON(message: _133.ExtensionRangeOptions): unknown;
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
            }): _133.ExtensionRangeOptions;
        };
        FieldDescriptorProto: {
            encode(message: _133.FieldDescriptorProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.FieldDescriptorProto;
            fromJSON(object: any): _133.FieldDescriptorProto;
            toJSON(message: _133.FieldDescriptorProto): unknown;
            fromPartial(object: {
                name?: string;
                number?: number;
                label?: _133.FieldDescriptorProto_Label;
                type?: _133.FieldDescriptorProto_Type;
                typeName?: string;
                extendee?: string;
                defaultValue?: string;
                oneofIndex?: number;
                jsonName?: string;
                options?: {
                    ctype?: _133.FieldOptions_CType;
                    packed?: boolean;
                    jstype?: _133.FieldOptions_JSType;
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
            }): _133.FieldDescriptorProto;
        };
        OneofDescriptorProto: {
            encode(message: _133.OneofDescriptorProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.OneofDescriptorProto;
            fromJSON(object: any): _133.OneofDescriptorProto;
            toJSON(message: _133.OneofDescriptorProto): unknown;
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
            }): _133.OneofDescriptorProto;
        };
        EnumDescriptorProto: {
            encode(message: _133.EnumDescriptorProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.EnumDescriptorProto;
            fromJSON(object: any): _133.EnumDescriptorProto;
            toJSON(message: _133.EnumDescriptorProto): unknown;
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
            }): _133.EnumDescriptorProto;
        };
        EnumDescriptorProto_EnumReservedRange: {
            encode(message: _133.EnumDescriptorProto_EnumReservedRange, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.EnumDescriptorProto_EnumReservedRange;
            fromJSON(object: any): _133.EnumDescriptorProto_EnumReservedRange;
            toJSON(message: _133.EnumDescriptorProto_EnumReservedRange): unknown;
            fromPartial(object: {
                start?: number;
                end?: number;
            }): _133.EnumDescriptorProto_EnumReservedRange;
        };
        EnumValueDescriptorProto: {
            encode(message: _133.EnumValueDescriptorProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.EnumValueDescriptorProto;
            fromJSON(object: any): _133.EnumValueDescriptorProto;
            toJSON(message: _133.EnumValueDescriptorProto): unknown;
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
            }): _133.EnumValueDescriptorProto;
        };
        ServiceDescriptorProto: {
            encode(message: _133.ServiceDescriptorProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.ServiceDescriptorProto;
            fromJSON(object: any): _133.ServiceDescriptorProto;
            toJSON(message: _133.ServiceDescriptorProto): unknown;
            fromPartial(object: {
                name?: string;
                method?: {
                    name?: string;
                    inputType?: string;
                    outputType?: string;
                    options?: {
                        deprecated?: boolean;
                        idempotencyLevel?: _133.MethodOptions_IdempotencyLevel;
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
            }): _133.ServiceDescriptorProto;
        };
        MethodDescriptorProto: {
            encode(message: _133.MethodDescriptorProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.MethodDescriptorProto;
            fromJSON(object: any): _133.MethodDescriptorProto;
            toJSON(message: _133.MethodDescriptorProto): unknown;
            fromPartial(object: {
                name?: string;
                inputType?: string;
                outputType?: string;
                options?: {
                    deprecated?: boolean;
                    idempotencyLevel?: _133.MethodOptions_IdempotencyLevel;
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
            }): _133.MethodDescriptorProto;
        };
        FileOptions: {
            encode(message: _133.FileOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.FileOptions;
            fromJSON(object: any): _133.FileOptions;
            toJSON(message: _133.FileOptions): unknown;
            fromPartial(object: {
                javaPackage?: string;
                javaOuterClassname?: string;
                javaMultipleFiles?: boolean;
                javaGenerateEqualsAndHash?: boolean;
                javaStringCheckUtf8?: boolean;
                optimizeFor?: _133.FileOptions_OptimizeMode;
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
            }): _133.FileOptions;
        };
        MessageOptions: {
            encode(message: _133.MessageOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.MessageOptions;
            fromJSON(object: any): _133.MessageOptions;
            toJSON(message: _133.MessageOptions): unknown;
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
            }): _133.MessageOptions;
        };
        FieldOptions: {
            encode(message: _133.FieldOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.FieldOptions;
            fromJSON(object: any): _133.FieldOptions;
            toJSON(message: _133.FieldOptions): unknown;
            fromPartial(object: {
                ctype?: _133.FieldOptions_CType;
                packed?: boolean;
                jstype?: _133.FieldOptions_JSType;
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
            }): _133.FieldOptions;
        };
        OneofOptions: {
            encode(message: _133.OneofOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.OneofOptions;
            fromJSON(object: any): _133.OneofOptions;
            toJSON(message: _133.OneofOptions): unknown;
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
            }): _133.OneofOptions;
        };
        EnumOptions: {
            encode(message: _133.EnumOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.EnumOptions;
            fromJSON(object: any): _133.EnumOptions;
            toJSON(message: _133.EnumOptions): unknown;
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
            }): _133.EnumOptions;
        };
        EnumValueOptions: {
            encode(message: _133.EnumValueOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.EnumValueOptions;
            fromJSON(object: any): _133.EnumValueOptions;
            toJSON(message: _133.EnumValueOptions): unknown;
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
            }): _133.EnumValueOptions;
        };
        ServiceOptions: {
            encode(message: _133.ServiceOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.ServiceOptions;
            fromJSON(object: any): _133.ServiceOptions;
            toJSON(message: _133.ServiceOptions): unknown;
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
            }): _133.ServiceOptions;
        };
        MethodOptions: {
            encode(message: _133.MethodOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.MethodOptions;
            fromJSON(object: any): _133.MethodOptions;
            toJSON(message: _133.MethodOptions): unknown;
            fromPartial(object: {
                deprecated?: boolean;
                idempotencyLevel?: _133.MethodOptions_IdempotencyLevel;
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
            }): _133.MethodOptions;
        };
        UninterpretedOption: {
            encode(message: _133.UninterpretedOption, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.UninterpretedOption;
            fromJSON(object: any): _133.UninterpretedOption;
            toJSON(message: _133.UninterpretedOption): unknown;
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
            }): _133.UninterpretedOption;
        };
        UninterpretedOption_NamePart: {
            encode(message: _133.UninterpretedOption_NamePart, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.UninterpretedOption_NamePart;
            fromJSON(object: any): _133.UninterpretedOption_NamePart;
            toJSON(message: _133.UninterpretedOption_NamePart): unknown;
            fromPartial(object: {
                namePart?: string;
                isExtension?: boolean;
            }): _133.UninterpretedOption_NamePart;
        };
        SourceCodeInfo: {
            encode(message: _133.SourceCodeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.SourceCodeInfo;
            fromJSON(object: any): _133.SourceCodeInfo;
            toJSON(message: _133.SourceCodeInfo): unknown;
            fromPartial(object: {
                location?: {
                    path?: number[];
                    span?: number[];
                    leadingComments?: string;
                    trailingComments?: string;
                    leadingDetachedComments?: string[];
                }[];
            }): _133.SourceCodeInfo;
        };
        SourceCodeInfo_Location: {
            encode(message: _133.SourceCodeInfo_Location, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.SourceCodeInfo_Location;
            fromJSON(object: any): _133.SourceCodeInfo_Location;
            toJSON(message: _133.SourceCodeInfo_Location): unknown;
            fromPartial(object: {
                path?: number[];
                span?: number[];
                leadingComments?: string;
                trailingComments?: string;
                leadingDetachedComments?: string[];
            }): _133.SourceCodeInfo_Location;
        };
        GeneratedCodeInfo: {
            encode(message: _133.GeneratedCodeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.GeneratedCodeInfo;
            fromJSON(object: any): _133.GeneratedCodeInfo;
            toJSON(message: _133.GeneratedCodeInfo): unknown;
            fromPartial(object: {
                annotation?: {
                    path?: number[];
                    sourceFile?: string;
                    begin?: number;
                    end?: number;
                }[];
            }): _133.GeneratedCodeInfo;
        };
        GeneratedCodeInfo_Annotation: {
            encode(message: _133.GeneratedCodeInfo_Annotation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.GeneratedCodeInfo_Annotation;
            fromJSON(object: any): _133.GeneratedCodeInfo_Annotation;
            toJSON(message: _133.GeneratedCodeInfo_Annotation): unknown;
            fromPartial(object: {
                path?: number[];
                sourceFile?: string;
                begin?: number;
                end?: number;
            }): _133.GeneratedCodeInfo_Annotation;
        };
    };
}
