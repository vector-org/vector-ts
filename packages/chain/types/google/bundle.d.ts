import * as _102 from "./api/expr/v1alpha1/checked";
import * as _103 from "./api/expr/v1alpha1/eval";
import * as _104 from "./api/expr/v1alpha1/explain";
import * as _105 from "./api/expr/v1alpha1/syntax";
import * as _106 from "./api/expr/v1alpha1/value";
import * as _107 from "./api/expr/v1beta1/decl";
import * as _108 from "./api/expr/v1beta1/eval";
import * as _109 from "./api/expr/v1beta1/expr";
import * as _110 from "./api/expr/v1beta1/source";
import * as _111 from "./api/expr/v1beta1/value";
import * as _112 from "./bytestream/bytestream";
import * as _113 from "./geo/type/viewport";
import * as _114 from "./longrunning/operations";
import * as _115 from "./rpc/code";
import * as _116 from "./rpc/error_details";
import * as _117 from "./rpc/status";
import * as _118 from "./type/calendar_period";
import * as _119 from "./type/color";
import * as _120 from "./type/date";
import * as _121 from "./type/datetime";
import * as _122 from "./type/dayofweek";
import * as _123 from "./type/decimal";
import * as _124 from "./type/expr";
import * as _125 from "./type/fraction";
import * as _126 from "./type/interval";
import * as _127 from "./type/latlng";
import * as _128 from "./type/localized_text";
import * as _129 from "./type/money";
import * as _130 from "./type/month";
import * as _131 from "./type/phone_number";
import * as _132 from "./type/postal_address";
import * as _133 from "./type/quaternion";
import * as _134 from "./type/timeofday";
import * as _135 from "./protobuf/descriptor";
import * as _136 from "./protobuf/duration";
import * as _137 from "./protobuf/timestamp";
import * as _138 from "./protobuf/any";
import * as _139 from "./protobuf/empty";
import * as _140 from "./protobuf/struct";
import * as _141 from "./protobuf/wrappers";
export declare namespace google {
    namespace api {
        namespace expr {
            const v1alpha1: {
                Value: {
                    encode(message: _106.Value, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _106.Value;
                    fromJSON(object: any): _106.Value;
                    toJSON(message: _106.Value): unknown;
                    fromPartial(object: {
                        nullValue?: _140.NullValue;
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
                    }): _106.Value;
                };
                EnumValue: {
                    encode(message: _106.EnumValue, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _106.EnumValue;
                    fromJSON(object: any): _106.EnumValue;
                    toJSON(message: _106.EnumValue): unknown;
                    fromPartial(object: {
                        type?: string;
                        value?: number;
                    }): _106.EnumValue;
                };
                ListValue: {
                    encode(message: _106.ListValue, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _106.ListValue;
                    fromJSON(object: any): _106.ListValue;
                    toJSON(message: _106.ListValue): unknown;
                    fromPartial(object: {
                        values?: {
                            nullValue?: _140.NullValue;
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
                    }): _106.ListValue;
                };
                MapValue: {
                    encode(message: _106.MapValue, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _106.MapValue;
                    fromJSON(object: any): _106.MapValue;
                    toJSON(message: _106.MapValue): unknown;
                    fromPartial(object: {
                        entries?: {
                            key?: {
                                nullValue?: _140.NullValue;
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
                                nullValue?: _140.NullValue;
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
                    }): _106.MapValue;
                };
                MapValue_Entry: {
                    encode(message: _106.MapValue_Entry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _106.MapValue_Entry;
                    fromJSON(object: any): _106.MapValue_Entry;
                    toJSON(message: _106.MapValue_Entry): unknown;
                    fromPartial(object: {
                        key?: {
                            nullValue?: _140.NullValue;
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
                            nullValue?: _140.NullValue;
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
                    }): _106.MapValue_Entry;
                };
                ParsedExpr: {
                    encode(message: _105.ParsedExpr, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _105.ParsedExpr;
                    fromJSON(object: any): _105.ParsedExpr;
                    toJSON(message: _105.ParsedExpr): unknown;
                    fromPartial(object: {
                        expr?: {
                            id?: bigint;
                            constExpr?: {
                                nullValue?: _140.NullValue;
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
                    }): _105.ParsedExpr;
                };
                Expr: {
                    encode(message: _105.Expr, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _105.Expr;
                    fromJSON(object: any): _105.Expr;
                    toJSON(message: _105.Expr): unknown;
                    fromPartial(object: {
                        id?: bigint;
                        constExpr?: {
                            nullValue?: _140.NullValue;
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
                    }): _105.Expr;
                };
                Expr_Ident: {
                    encode(message: _105.Expr_Ident, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _105.Expr_Ident;
                    fromJSON(object: any): _105.Expr_Ident;
                    toJSON(message: _105.Expr_Ident): unknown;
                    fromPartial(object: {
                        name?: string;
                    }): _105.Expr_Ident;
                };
                Expr_Select: {
                    encode(message: _105.Expr_Select, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _105.Expr_Select;
                    fromJSON(object: any): _105.Expr_Select;
                    toJSON(message: _105.Expr_Select): unknown;
                    fromPartial(object: {
                        operand?: {
                            id?: bigint;
                            constExpr?: {
                                nullValue?: _140.NullValue;
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
                    }): _105.Expr_Select;
                };
                Expr_Call: {
                    encode(message: _105.Expr_Call, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _105.Expr_Call;
                    fromJSON(object: any): _105.Expr_Call;
                    toJSON(message: _105.Expr_Call): unknown;
                    fromPartial(object: {
                        target?: {
                            id?: bigint;
                            constExpr?: {
                                nullValue?: _140.NullValue;
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
                                nullValue?: _140.NullValue;
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
                    }): _105.Expr_Call;
                };
                Expr_CreateList: {
                    encode(message: _105.Expr_CreateList, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _105.Expr_CreateList;
                    fromJSON(object: any): _105.Expr_CreateList;
                    toJSON(message: _105.Expr_CreateList): unknown;
                    fromPartial(object: {
                        elements?: {
                            id?: bigint;
                            constExpr?: {
                                nullValue?: _140.NullValue;
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
                    }): _105.Expr_CreateList;
                };
                Expr_CreateStruct: {
                    encode(message: _105.Expr_CreateStruct, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _105.Expr_CreateStruct;
                    fromJSON(object: any): _105.Expr_CreateStruct;
                    toJSON(message: _105.Expr_CreateStruct): unknown;
                    fromPartial(object: {
                        messageName?: string;
                        entries?: {
                            id?: bigint;
                            fieldKey?: string;
                            mapKey?: {
                                id?: bigint;
                                constExpr?: {
                                    nullValue?: _140.NullValue;
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
                                    nullValue?: _140.NullValue;
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
                    }): _105.Expr_CreateStruct;
                };
                Expr_CreateStruct_Entry: {
                    encode(message: _105.Expr_CreateStruct_Entry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _105.Expr_CreateStruct_Entry;
                    fromJSON(object: any): _105.Expr_CreateStruct_Entry;
                    toJSON(message: _105.Expr_CreateStruct_Entry): unknown;
                    fromPartial(object: {
                        id?: bigint;
                        fieldKey?: string;
                        mapKey?: {
                            id?: bigint;
                            constExpr?: {
                                nullValue?: _140.NullValue;
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
                                nullValue?: _140.NullValue;
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
                    }): _105.Expr_CreateStruct_Entry;
                };
                Expr_Comprehension: {
                    encode(message: _105.Expr_Comprehension, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _105.Expr_Comprehension;
                    fromJSON(object: any): _105.Expr_Comprehension;
                    toJSON(message: _105.Expr_Comprehension): unknown;
                    fromPartial(object: {
                        iterVar?: string;
                        iterRange?: {
                            id?: bigint;
                            constExpr?: {
                                nullValue?: _140.NullValue;
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
                                nullValue?: _140.NullValue;
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
                                nullValue?: _140.NullValue;
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
                                nullValue?: _140.NullValue;
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
                                nullValue?: _140.NullValue;
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
                    }): _105.Expr_Comprehension;
                };
                Constant: {
                    encode(message: _105.Constant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _105.Constant;
                    fromJSON(object: any): _105.Constant;
                    toJSON(message: _105.Constant): unknown;
                    fromPartial(object: {
                        nullValue?: _140.NullValue;
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
                    }): _105.Constant;
                };
                SourceInfo_PositionsEntry: {
                    encode(message: _105.SourceInfo_PositionsEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _105.SourceInfo_PositionsEntry;
                    fromJSON(object: any): _105.SourceInfo_PositionsEntry;
                    toJSON(message: _105.SourceInfo_PositionsEntry): unknown;
                    fromPartial(object: {
                        key?: bigint;
                        value?: number;
                    }): _105.SourceInfo_PositionsEntry;
                };
                SourceInfo_MacroCallsEntry: {
                    encode(message: _105.SourceInfo_MacroCallsEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _105.SourceInfo_MacroCallsEntry;
                    fromJSON(object: any): _105.SourceInfo_MacroCallsEntry;
                    toJSON(message: _105.SourceInfo_MacroCallsEntry): unknown;
                    fromPartial(object: {
                        key?: bigint;
                        value?: {
                            id?: bigint;
                            constExpr?: {
                                nullValue?: _140.NullValue;
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
                    }): _105.SourceInfo_MacroCallsEntry;
                };
                SourceInfo: {
                    encode(message: _105.SourceInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _105.SourceInfo;
                    fromJSON(object: any): _105.SourceInfo;
                    toJSON(message: _105.SourceInfo): unknown;
                    fromPartial(object: {
                        syntaxVersion?: string;
                        location?: string;
                        lineOffsets?: number[];
                        positions?: {};
                        macroCalls?: {};
                    }): _105.SourceInfo;
                };
                SourcePosition: {
                    encode(message: _105.SourcePosition, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _105.SourcePosition;
                    fromJSON(object: any): _105.SourcePosition;
                    toJSON(message: _105.SourcePosition): unknown;
                    fromPartial(object: {
                        location?: string;
                        offset?: number;
                        line?: number;
                        column?: number;
                    }): _105.SourcePosition;
                };
                Explain: {
                    encode(message: _104.Explain, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _104.Explain;
                    fromJSON(object: any): _104.Explain;
                    toJSON(message: _104.Explain): unknown;
                    fromPartial(object: {
                        values?: {
                            nullValue?: _140.NullValue;
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
                    }): _104.Explain;
                };
                Explain_ExprStep: {
                    encode(message: _104.Explain_ExprStep, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _104.Explain_ExprStep;
                    fromJSON(object: any): _104.Explain_ExprStep;
                    toJSON(message: _104.Explain_ExprStep): unknown;
                    fromPartial(object: {
                        id?: bigint;
                        valueIndex?: number;
                    }): _104.Explain_ExprStep;
                };
                EvalState: {
                    encode(message: _103.EvalState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _103.EvalState;
                    fromJSON(object: any): _103.EvalState;
                    toJSON(message: _103.EvalState): unknown;
                    fromPartial(object: {
                        values?: {
                            value?: {
                                nullValue?: _140.NullValue;
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
                    }): _103.EvalState;
                };
                EvalState_Result: {
                    encode(message: _103.EvalState_Result, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _103.EvalState_Result;
                    fromJSON(object: any): _103.EvalState_Result;
                    toJSON(message: _103.EvalState_Result): unknown;
                    fromPartial(object: {
                        expr?: bigint;
                        value?: bigint;
                    }): _103.EvalState_Result;
                };
                ExprValue: {
                    encode(message: _103.ExprValue, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _103.ExprValue;
                    fromJSON(object: any): _103.ExprValue;
                    toJSON(message: _103.ExprValue): unknown;
                    fromPartial(object: {
                        value?: {
                            nullValue?: _140.NullValue;
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
                    }): _103.ExprValue;
                };
                ErrorSet: {
                    encode(message: _103.ErrorSet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _103.ErrorSet;
                    fromJSON(object: any): _103.ErrorSet;
                    toJSON(message: _103.ErrorSet): unknown;
                    fromPartial(object: {
                        errors?: {
                            code?: number;
                            message?: string;
                            details?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                        }[];
                    }): _103.ErrorSet;
                };
                UnknownSet: {
                    encode(message: _103.UnknownSet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _103.UnknownSet;
                    fromJSON(object: any): _103.UnknownSet;
                    toJSON(message: _103.UnknownSet): unknown;
                    fromPartial(object: {
                        exprs?: bigint[];
                    }): _103.UnknownSet;
                };
                type_PrimitiveTypeFromJSON(object: any): _102.Type_PrimitiveType;
                type_PrimitiveTypeToJSON(object: _102.Type_PrimitiveType): string;
                type_WellKnownTypeFromJSON(object: any): _102.Type_WellKnownType;
                type_WellKnownTypeToJSON(object: _102.Type_WellKnownType): string;
                Type_PrimitiveType: typeof _102.Type_PrimitiveType;
                Type_WellKnownType: typeof _102.Type_WellKnownType;
                CheckedExpr_ReferenceMapEntry: {
                    encode(message: _102.CheckedExpr_ReferenceMapEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _102.CheckedExpr_ReferenceMapEntry;
                    fromJSON(object: any): _102.CheckedExpr_ReferenceMapEntry;
                    toJSON(message: _102.CheckedExpr_ReferenceMapEntry): unknown;
                    fromPartial(object: {
                        key?: bigint;
                        value?: {
                            name?: string;
                            overloadId?: string[];
                            value?: {
                                nullValue?: _140.NullValue;
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
                    }): _102.CheckedExpr_ReferenceMapEntry;
                };
                CheckedExpr_TypeMapEntry: {
                    encode(message: _102.CheckedExpr_TypeMapEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _102.CheckedExpr_TypeMapEntry;
                    fromJSON(object: any): _102.CheckedExpr_TypeMapEntry;
                    toJSON(message: _102.CheckedExpr_TypeMapEntry): unknown;
                    fromPartial(object: {
                        key?: bigint;
                        value?: {
                            dyn?: {};
                            null?: _140.NullValue;
                            primitive?: _102.Type_PrimitiveType;
                            wrapper?: _102.Type_PrimitiveType;
                            wellKnown?: _102.Type_WellKnownType;
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
                    }): _102.CheckedExpr_TypeMapEntry;
                };
                CheckedExpr: {
                    encode(message: _102.CheckedExpr, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _102.CheckedExpr;
                    fromJSON(object: any): _102.CheckedExpr;
                    toJSON(message: _102.CheckedExpr): unknown;
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
                                nullValue?: _140.NullValue;
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
                    }): _102.CheckedExpr;
                };
                Type: {
                    encode(message: _102.Type, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _102.Type;
                    fromJSON(object: any): _102.Type;
                    toJSON(message: _102.Type): unknown;
                    fromPartial(object: {
                        dyn?: {};
                        null?: _140.NullValue;
                        primitive?: _102.Type_PrimitiveType;
                        wrapper?: _102.Type_PrimitiveType;
                        wellKnown?: _102.Type_WellKnownType;
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
                    }): _102.Type;
                };
                Type_ListType: {
                    encode(message: _102.Type_ListType, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _102.Type_ListType;
                    fromJSON(object: any): _102.Type_ListType;
                    toJSON(message: _102.Type_ListType): unknown;
                    fromPartial(object: {
                        elemType?: {
                            dyn?: {};
                            null?: _140.NullValue;
                            primitive?: _102.Type_PrimitiveType;
                            wrapper?: _102.Type_PrimitiveType;
                            wellKnown?: _102.Type_WellKnownType;
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
                    }): _102.Type_ListType;
                };
                Type_MapType: {
                    encode(message: _102.Type_MapType, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _102.Type_MapType;
                    fromJSON(object: any): _102.Type_MapType;
                    toJSON(message: _102.Type_MapType): unknown;
                    fromPartial(object: {
                        keyType?: {
                            dyn?: {};
                            null?: _140.NullValue;
                            primitive?: _102.Type_PrimitiveType;
                            wrapper?: _102.Type_PrimitiveType;
                            wellKnown?: _102.Type_WellKnownType;
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
                            null?: _140.NullValue;
                            primitive?: _102.Type_PrimitiveType;
                            wrapper?: _102.Type_PrimitiveType;
                            wellKnown?: _102.Type_WellKnownType;
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
                    }): _102.Type_MapType;
                };
                Type_FunctionType: {
                    encode(message: _102.Type_FunctionType, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _102.Type_FunctionType;
                    fromJSON(object: any): _102.Type_FunctionType;
                    toJSON(message: _102.Type_FunctionType): unknown;
                    fromPartial(object: {
                        resultType?: {
                            dyn?: {};
                            null?: _140.NullValue;
                            primitive?: _102.Type_PrimitiveType;
                            wrapper?: _102.Type_PrimitiveType;
                            wellKnown?: _102.Type_WellKnownType;
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
                            null?: _140.NullValue;
                            primitive?: _102.Type_PrimitiveType;
                            wrapper?: _102.Type_PrimitiveType;
                            wellKnown?: _102.Type_WellKnownType;
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
                    }): _102.Type_FunctionType;
                };
                Type_AbstractType: {
                    encode(message: _102.Type_AbstractType, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _102.Type_AbstractType;
                    fromJSON(object: any): _102.Type_AbstractType;
                    toJSON(message: _102.Type_AbstractType): unknown;
                    fromPartial(object: {
                        name?: string;
                        parameterTypes?: {
                            dyn?: {};
                            null?: _140.NullValue;
                            primitive?: _102.Type_PrimitiveType;
                            wrapper?: _102.Type_PrimitiveType;
                            wellKnown?: _102.Type_WellKnownType;
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
                    }): _102.Type_AbstractType;
                };
                Decl: {
                    encode(message: _102.Decl, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _102.Decl;
                    fromJSON(object: any): _102.Decl;
                    toJSON(message: _102.Decl): unknown;
                    fromPartial(object: {
                        name?: string;
                        ident?: {
                            type?: {
                                dyn?: {};
                                null?: _140.NullValue;
                                primitive?: _102.Type_PrimitiveType;
                                wrapper?: _102.Type_PrimitiveType;
                                wellKnown?: _102.Type_WellKnownType;
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
                                nullValue?: _140.NullValue;
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
                                    null?: _140.NullValue;
                                    primitive?: _102.Type_PrimitiveType;
                                    wrapper?: _102.Type_PrimitiveType;
                                    wellKnown?: _102.Type_WellKnownType;
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
                                    null?: _140.NullValue;
                                    primitive?: _102.Type_PrimitiveType;
                                    wrapper?: _102.Type_PrimitiveType;
                                    wellKnown?: _102.Type_WellKnownType;
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
                    }): _102.Decl;
                };
                Decl_IdentDecl: {
                    encode(message: _102.Decl_IdentDecl, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _102.Decl_IdentDecl;
                    fromJSON(object: any): _102.Decl_IdentDecl;
                    toJSON(message: _102.Decl_IdentDecl): unknown;
                    fromPartial(object: {
                        type?: {
                            dyn?: {};
                            null?: _140.NullValue;
                            primitive?: _102.Type_PrimitiveType;
                            wrapper?: _102.Type_PrimitiveType;
                            wellKnown?: _102.Type_WellKnownType;
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
                            nullValue?: _140.NullValue;
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
                    }): _102.Decl_IdentDecl;
                };
                Decl_FunctionDecl: {
                    encode(message: _102.Decl_FunctionDecl, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _102.Decl_FunctionDecl;
                    fromJSON(object: any): _102.Decl_FunctionDecl;
                    toJSON(message: _102.Decl_FunctionDecl): unknown;
                    fromPartial(object: {
                        overloads?: {
                            overloadId?: string;
                            params?: {
                                dyn?: {};
                                null?: _140.NullValue;
                                primitive?: _102.Type_PrimitiveType;
                                wrapper?: _102.Type_PrimitiveType;
                                wellKnown?: _102.Type_WellKnownType;
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
                                null?: _140.NullValue;
                                primitive?: _102.Type_PrimitiveType;
                                wrapper?: _102.Type_PrimitiveType;
                                wellKnown?: _102.Type_WellKnownType;
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
                    }): _102.Decl_FunctionDecl;
                };
                Decl_FunctionDecl_Overload: {
                    encode(message: _102.Decl_FunctionDecl_Overload, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _102.Decl_FunctionDecl_Overload;
                    fromJSON(object: any): _102.Decl_FunctionDecl_Overload;
                    toJSON(message: _102.Decl_FunctionDecl_Overload): unknown;
                    fromPartial(object: {
                        overloadId?: string;
                        params?: {
                            dyn?: {};
                            null?: _140.NullValue;
                            primitive?: _102.Type_PrimitiveType;
                            wrapper?: _102.Type_PrimitiveType;
                            wellKnown?: _102.Type_WellKnownType;
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
                            null?: _140.NullValue;
                            primitive?: _102.Type_PrimitiveType;
                            wrapper?: _102.Type_PrimitiveType;
                            wellKnown?: _102.Type_WellKnownType;
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
                    }): _102.Decl_FunctionDecl_Overload;
                };
                Reference: {
                    encode(message: _102.Reference, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _102.Reference;
                    fromJSON(object: any): _102.Reference;
                    toJSON(message: _102.Reference): unknown;
                    fromPartial(object: {
                        name?: string;
                        overloadId?: string[];
                        value?: {
                            nullValue?: _140.NullValue;
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
                    }): _102.Reference;
                };
            };
            const v1beta1: {
                Value: {
                    encode(message: _111.Value, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _111.Value;
                    fromJSON(object: any): _111.Value;
                    toJSON(message: _111.Value): unknown;
                    fromPartial(object: {
                        nullValue?: _140.NullValue;
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
                    }): _111.Value;
                };
                EnumValue: {
                    encode(message: _111.EnumValue, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _111.EnumValue;
                    fromJSON(object: any): _111.EnumValue;
                    toJSON(message: _111.EnumValue): unknown;
                    fromPartial(object: {
                        type?: string;
                        value?: number;
                    }): _111.EnumValue;
                };
                ListValue: {
                    encode(message: _111.ListValue, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _111.ListValue;
                    fromJSON(object: any): _111.ListValue;
                    toJSON(message: _111.ListValue): unknown;
                    fromPartial(object: {
                        values?: {
                            nullValue?: _140.NullValue;
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
                    }): _111.ListValue;
                };
                MapValue: {
                    encode(message: _111.MapValue, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _111.MapValue;
                    fromJSON(object: any): _111.MapValue;
                    toJSON(message: _111.MapValue): unknown;
                    fromPartial(object: {
                        entries?: {
                            key?: {
                                nullValue?: _140.NullValue;
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
                                nullValue?: _140.NullValue;
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
                    }): _111.MapValue;
                };
                MapValue_Entry: {
                    encode(message: _111.MapValue_Entry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _111.MapValue_Entry;
                    fromJSON(object: any): _111.MapValue_Entry;
                    toJSON(message: _111.MapValue_Entry): unknown;
                    fromPartial(object: {
                        key?: {
                            nullValue?: _140.NullValue;
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
                            nullValue?: _140.NullValue;
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
                    }): _111.MapValue_Entry;
                };
                SourceInfo_PositionsEntry: {
                    encode(message: _110.SourceInfo_PositionsEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _110.SourceInfo_PositionsEntry;
                    fromJSON(object: any): _110.SourceInfo_PositionsEntry;
                    toJSON(message: _110.SourceInfo_PositionsEntry): unknown;
                    fromPartial(object: {
                        key?: number;
                        value?: number;
                    }): _110.SourceInfo_PositionsEntry;
                };
                SourceInfo: {
                    encode(message: _110.SourceInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _110.SourceInfo;
                    fromJSON(object: any): _110.SourceInfo;
                    toJSON(message: _110.SourceInfo): unknown;
                    fromPartial(object: {
                        location?: string;
                        lineOffsets?: number[];
                        positions?: {
                            [x: number]: number;
                        };
                    }): _110.SourceInfo;
                };
                SourcePosition: {
                    encode(message: _110.SourcePosition, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _110.SourcePosition;
                    fromJSON(object: any): _110.SourcePosition;
                    toJSON(message: _110.SourcePosition): unknown;
                    fromPartial(object: {
                        location?: string;
                        offset?: number;
                        line?: number;
                        column?: number;
                    }): _110.SourcePosition;
                };
                ParsedExpr: {
                    encode(message: _109.ParsedExpr, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _109.ParsedExpr;
                    fromJSON(object: any): _109.ParsedExpr;
                    toJSON(message: _109.ParsedExpr): unknown;
                    fromPartial(object: {
                        expr?: {
                            id?: number;
                            literalExpr?: {
                                nullValue?: _140.NullValue;
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
                    }): _109.ParsedExpr;
                };
                Expr: {
                    encode(message: _109.Expr, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _109.Expr;
                    fromJSON(object: any): _109.Expr;
                    toJSON(message: _109.Expr): unknown;
                    fromPartial(object: {
                        id?: number;
                        literalExpr?: {
                            nullValue?: _140.NullValue;
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
                    }): _109.Expr;
                };
                Expr_Ident: {
                    encode(message: _109.Expr_Ident, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _109.Expr_Ident;
                    fromJSON(object: any): _109.Expr_Ident;
                    toJSON(message: _109.Expr_Ident): unknown;
                    fromPartial(object: {
                        name?: string;
                    }): _109.Expr_Ident;
                };
                Expr_Select: {
                    encode(message: _109.Expr_Select, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _109.Expr_Select;
                    fromJSON(object: any): _109.Expr_Select;
                    toJSON(message: _109.Expr_Select): unknown;
                    fromPartial(object: {
                        operand?: {
                            id?: number;
                            literalExpr?: {
                                nullValue?: _140.NullValue;
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
                    }): _109.Expr_Select;
                };
                Expr_Call: {
                    encode(message: _109.Expr_Call, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _109.Expr_Call;
                    fromJSON(object: any): _109.Expr_Call;
                    toJSON(message: _109.Expr_Call): unknown;
                    fromPartial(object: {
                        target?: {
                            id?: number;
                            literalExpr?: {
                                nullValue?: _140.NullValue;
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
                                nullValue?: _140.NullValue;
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
                    }): _109.Expr_Call;
                };
                Expr_CreateList: {
                    encode(message: _109.Expr_CreateList, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _109.Expr_CreateList;
                    fromJSON(object: any): _109.Expr_CreateList;
                    toJSON(message: _109.Expr_CreateList): unknown;
                    fromPartial(object: {
                        elements?: {
                            id?: number;
                            literalExpr?: {
                                nullValue?: _140.NullValue;
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
                    }): _109.Expr_CreateList;
                };
                Expr_CreateStruct: {
                    encode(message: _109.Expr_CreateStruct, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _109.Expr_CreateStruct;
                    fromJSON(object: any): _109.Expr_CreateStruct;
                    toJSON(message: _109.Expr_CreateStruct): unknown;
                    fromPartial(object: {
                        type?: string;
                        entries?: {
                            id?: number;
                            fieldKey?: string;
                            mapKey?: {
                                id?: number;
                                literalExpr?: {
                                    nullValue?: _140.NullValue;
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
                                    nullValue?: _140.NullValue;
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
                    }): _109.Expr_CreateStruct;
                };
                Expr_CreateStruct_Entry: {
                    encode(message: _109.Expr_CreateStruct_Entry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _109.Expr_CreateStruct_Entry;
                    fromJSON(object: any): _109.Expr_CreateStruct_Entry;
                    toJSON(message: _109.Expr_CreateStruct_Entry): unknown;
                    fromPartial(object: {
                        id?: number;
                        fieldKey?: string;
                        mapKey?: {
                            id?: number;
                            literalExpr?: {
                                nullValue?: _140.NullValue;
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
                                nullValue?: _140.NullValue;
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
                    }): _109.Expr_CreateStruct_Entry;
                };
                Expr_Comprehension: {
                    encode(message: _109.Expr_Comprehension, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _109.Expr_Comprehension;
                    fromJSON(object: any): _109.Expr_Comprehension;
                    toJSON(message: _109.Expr_Comprehension): unknown;
                    fromPartial(object: {
                        iterVar?: string;
                        iterRange?: {
                            id?: number;
                            literalExpr?: {
                                nullValue?: _140.NullValue;
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
                                nullValue?: _140.NullValue;
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
                                nullValue?: _140.NullValue;
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
                                nullValue?: _140.NullValue;
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
                                nullValue?: _140.NullValue;
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
                    }): _109.Expr_Comprehension;
                };
                Literal: {
                    encode(message: _109.Literal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _109.Literal;
                    fromJSON(object: any): _109.Literal;
                    toJSON(message: _109.Literal): unknown;
                    fromPartial(object: {
                        nullValue?: _140.NullValue;
                        boolValue?: boolean;
                        int64Value?: bigint;
                        uint64Value?: bigint;
                        doubleValue?: number;
                        stringValue?: string;
                        bytesValue?: Uint8Array;
                    }): _109.Literal;
                };
                EvalState: {
                    encode(message: _108.EvalState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _108.EvalState;
                    fromJSON(object: any): _108.EvalState;
                    toJSON(message: _108.EvalState): unknown;
                    fromPartial(object: {
                        values?: {
                            value?: {
                                nullValue?: _140.NullValue;
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
                    }): _108.EvalState;
                };
                EvalState_Result: {
                    encode(message: _108.EvalState_Result, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _108.EvalState_Result;
                    fromJSON(object: any): _108.EvalState_Result;
                    toJSON(message: _108.EvalState_Result): unknown;
                    fromPartial(object: {
                        expr?: {
                            id?: number;
                        };
                        value?: number;
                    }): _108.EvalState_Result;
                };
                ExprValue: {
                    encode(message: _108.ExprValue, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _108.ExprValue;
                    fromJSON(object: any): _108.ExprValue;
                    toJSON(message: _108.ExprValue): unknown;
                    fromPartial(object: {
                        value?: {
                            nullValue?: _140.NullValue;
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
                    }): _108.ExprValue;
                };
                ErrorSet: {
                    encode(message: _108.ErrorSet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _108.ErrorSet;
                    fromJSON(object: any): _108.ErrorSet;
                    toJSON(message: _108.ErrorSet): unknown;
                    fromPartial(object: {
                        errors?: {
                            code?: number;
                            message?: string;
                            details?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                        }[];
                    }): _108.ErrorSet;
                };
                UnknownSet: {
                    encode(message: _108.UnknownSet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _108.UnknownSet;
                    fromJSON(object: any): _108.UnknownSet;
                    toJSON(message: _108.UnknownSet): unknown;
                    fromPartial(object: {
                        exprs?: {
                            id?: number;
                        }[];
                    }): _108.UnknownSet;
                };
                IdRef: {
                    encode(message: _108.IdRef, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _108.IdRef;
                    fromJSON(object: any): _108.IdRef;
                    toJSON(message: _108.IdRef): unknown;
                    fromPartial(object: {
                        id?: number;
                    }): _108.IdRef;
                };
                Decl: {
                    encode(message: _107.Decl, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _107.Decl;
                    fromJSON(object: any): _107.Decl;
                    toJSON(message: _107.Decl): unknown;
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
                                    nullValue?: _140.NullValue;
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
                                        nullValue?: _140.NullValue;
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
                    }): _107.Decl;
                };
                DeclType: {
                    encode(message: _107.DeclType, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _107.DeclType;
                    fromJSON(object: any): _107.DeclType;
                    toJSON(message: _107.DeclType): unknown;
                    fromPartial(object: {
                        id?: number;
                        type?: string;
                        typeParams?: any[];
                    }): _107.DeclType;
                };
                IdentDecl: {
                    encode(message: _107.IdentDecl, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _107.IdentDecl;
                    fromJSON(object: any): _107.IdentDecl;
                    toJSON(message: _107.IdentDecl): unknown;
                    fromPartial(object: {
                        type?: {
                            id?: number;
                            type?: string;
                            typeParams?: any[];
                        };
                        value?: {
                            id?: number;
                            literalExpr?: {
                                nullValue?: _140.NullValue;
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
                    }): _107.IdentDecl;
                };
                FunctionDecl: {
                    encode(message: _107.FunctionDecl, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _107.FunctionDecl;
                    fromJSON(object: any): _107.FunctionDecl;
                    toJSON(message: _107.FunctionDecl): unknown;
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
                                    nullValue?: _140.NullValue;
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
                    }): _107.FunctionDecl;
                };
            };
        }
    }
    const bytestream: {
        ReadRequest: {
            encode(message: _112.ReadRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _112.ReadRequest;
            fromJSON(object: any): _112.ReadRequest;
            toJSON(message: _112.ReadRequest): unknown;
            fromPartial(object: {
                resourceName?: string;
                readOffset?: bigint;
                readLimit?: bigint;
            }): _112.ReadRequest;
        };
        ReadResponse: {
            encode(message: _112.ReadResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _112.ReadResponse;
            fromJSON(object: any): _112.ReadResponse;
            toJSON(message: _112.ReadResponse): unknown;
            fromPartial(object: {
                data?: Uint8Array;
            }): _112.ReadResponse;
        };
        WriteRequest: {
            encode(message: _112.WriteRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _112.WriteRequest;
            fromJSON(object: any): _112.WriteRequest;
            toJSON(message: _112.WriteRequest): unknown;
            fromPartial(object: {
                resourceName?: string;
                writeOffset?: bigint;
                finishWrite?: boolean;
                data?: Uint8Array;
            }): _112.WriteRequest;
        };
        WriteResponse: {
            encode(message: _112.WriteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _112.WriteResponse;
            fromJSON(object: any): _112.WriteResponse;
            toJSON(message: _112.WriteResponse): unknown;
            fromPartial(object: {
                committedSize?: bigint;
            }): _112.WriteResponse;
        };
        QueryWriteStatusRequest: {
            encode(message: _112.QueryWriteStatusRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _112.QueryWriteStatusRequest;
            fromJSON(object: any): _112.QueryWriteStatusRequest;
            toJSON(message: _112.QueryWriteStatusRequest): unknown;
            fromPartial(object: {
                resourceName?: string;
            }): _112.QueryWriteStatusRequest;
        };
        QueryWriteStatusResponse: {
            encode(message: _112.QueryWriteStatusResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _112.QueryWriteStatusResponse;
            fromJSON(object: any): _112.QueryWriteStatusResponse;
            toJSON(message: _112.QueryWriteStatusResponse): unknown;
            fromPartial(object: {
                committedSize?: bigint;
                complete?: boolean;
            }): _112.QueryWriteStatusResponse;
        };
    };
    namespace geo {
        const type: {
            Viewport: {
                encode(message: _113.Viewport, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _113.Viewport;
                fromJSON(object: any): _113.Viewport;
                toJSON(message: _113.Viewport): unknown;
                fromPartial(object: {
                    low?: {
                        latitude?: number;
                        longitude?: number;
                    };
                    high?: {
                        latitude?: number;
                        longitude?: number;
                    };
                }): _113.Viewport;
            };
        };
    }
    const longrunning: {
        Operation: {
            encode(message: _114.Operation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _114.Operation;
            fromJSON(object: any): _114.Operation;
            toJSON(message: _114.Operation): unknown;
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
            }): _114.Operation;
        };
        GetOperationRequest: {
            encode(message: _114.GetOperationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _114.GetOperationRequest;
            fromJSON(object: any): _114.GetOperationRequest;
            toJSON(message: _114.GetOperationRequest): unknown;
            fromPartial(object: {
                name?: string;
            }): _114.GetOperationRequest;
        };
        ListOperationsRequest: {
            encode(message: _114.ListOperationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _114.ListOperationsRequest;
            fromJSON(object: any): _114.ListOperationsRequest;
            toJSON(message: _114.ListOperationsRequest): unknown;
            fromPartial(object: {
                name?: string;
                filter?: string;
                pageSize?: number;
                pageToken?: string;
            }): _114.ListOperationsRequest;
        };
        ListOperationsResponse: {
            encode(message: _114.ListOperationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _114.ListOperationsResponse;
            fromJSON(object: any): _114.ListOperationsResponse;
            toJSON(message: _114.ListOperationsResponse): unknown;
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
            }): _114.ListOperationsResponse;
        };
        CancelOperationRequest: {
            encode(message: _114.CancelOperationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _114.CancelOperationRequest;
            fromJSON(object: any): _114.CancelOperationRequest;
            toJSON(message: _114.CancelOperationRequest): unknown;
            fromPartial(object: {
                name?: string;
            }): _114.CancelOperationRequest;
        };
        DeleteOperationRequest: {
            encode(message: _114.DeleteOperationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _114.DeleteOperationRequest;
            fromJSON(object: any): _114.DeleteOperationRequest;
            toJSON(message: _114.DeleteOperationRequest): unknown;
            fromPartial(object: {
                name?: string;
            }): _114.DeleteOperationRequest;
        };
        WaitOperationRequest: {
            encode(message: _114.WaitOperationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _114.WaitOperationRequest;
            fromJSON(object: any): _114.WaitOperationRequest;
            toJSON(message: _114.WaitOperationRequest): unknown;
            fromPartial(object: {
                name?: string;
                timeout?: {
                    seconds?: bigint;
                    nanos?: number;
                };
            }): _114.WaitOperationRequest;
        };
        OperationInfo: {
            encode(message: _114.OperationInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _114.OperationInfo;
            fromJSON(object: any): _114.OperationInfo;
            toJSON(message: _114.OperationInfo): unknown;
            fromPartial(object: {
                responseType?: string;
                metadataType?: string;
            }): _114.OperationInfo;
        };
    };
    const rpc: {
        Status: {
            encode(message: _117.Status, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _117.Status;
            fromJSON(object: any): _117.Status;
            toJSON(message: _117.Status): unknown;
            fromPartial(object: {
                code?: number;
                message?: string;
                details?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                }[];
            }): _117.Status;
        };
        ErrorInfo_MetadataEntry: {
            encode(message: _116.ErrorInfo_MetadataEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _116.ErrorInfo_MetadataEntry;
            fromJSON(object: any): _116.ErrorInfo_MetadataEntry;
            toJSON(message: _116.ErrorInfo_MetadataEntry): unknown;
            fromPartial(object: {
                key?: string;
                value?: string;
            }): _116.ErrorInfo_MetadataEntry;
        };
        ErrorInfo: {
            encode(message: _116.ErrorInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _116.ErrorInfo;
            fromJSON(object: any): _116.ErrorInfo;
            toJSON(message: _116.ErrorInfo): unknown;
            fromPartial(object: {
                reason?: string;
                domain?: string;
                metadata?: {
                    [x: string]: string;
                };
            }): _116.ErrorInfo;
        };
        RetryInfo: {
            encode(message: _116.RetryInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _116.RetryInfo;
            fromJSON(object: any): _116.RetryInfo;
            toJSON(message: _116.RetryInfo): unknown;
            fromPartial(object: {
                retryDelay?: {
                    seconds?: bigint;
                    nanos?: number;
                };
            }): _116.RetryInfo;
        };
        DebugInfo: {
            encode(message: _116.DebugInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _116.DebugInfo;
            fromJSON(object: any): _116.DebugInfo;
            toJSON(message: _116.DebugInfo): unknown;
            fromPartial(object: {
                stackEntries?: string[];
                detail?: string;
            }): _116.DebugInfo;
        };
        QuotaFailure: {
            encode(message: _116.QuotaFailure, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _116.QuotaFailure;
            fromJSON(object: any): _116.QuotaFailure;
            toJSON(message: _116.QuotaFailure): unknown;
            fromPartial(object: {
                violations?: {
                    subject?: string;
                    description?: string;
                }[];
            }): _116.QuotaFailure;
        };
        QuotaFailure_Violation: {
            encode(message: _116.QuotaFailure_Violation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _116.QuotaFailure_Violation;
            fromJSON(object: any): _116.QuotaFailure_Violation;
            toJSON(message: _116.QuotaFailure_Violation): unknown;
            fromPartial(object: {
                subject?: string;
                description?: string;
            }): _116.QuotaFailure_Violation;
        };
        PreconditionFailure: {
            encode(message: _116.PreconditionFailure, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _116.PreconditionFailure;
            fromJSON(object: any): _116.PreconditionFailure;
            toJSON(message: _116.PreconditionFailure): unknown;
            fromPartial(object: {
                violations?: {
                    type?: string;
                    subject?: string;
                    description?: string;
                }[];
            }): _116.PreconditionFailure;
        };
        PreconditionFailure_Violation: {
            encode(message: _116.PreconditionFailure_Violation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _116.PreconditionFailure_Violation;
            fromJSON(object: any): _116.PreconditionFailure_Violation;
            toJSON(message: _116.PreconditionFailure_Violation): unknown;
            fromPartial(object: {
                type?: string;
                subject?: string;
                description?: string;
            }): _116.PreconditionFailure_Violation;
        };
        BadRequest: {
            encode(message: _116.BadRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _116.BadRequest;
            fromJSON(object: any): _116.BadRequest;
            toJSON(message: _116.BadRequest): unknown;
            fromPartial(object: {
                fieldViolations?: {
                    field?: string;
                    description?: string;
                }[];
            }): _116.BadRequest;
        };
        BadRequest_FieldViolation: {
            encode(message: _116.BadRequest_FieldViolation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _116.BadRequest_FieldViolation;
            fromJSON(object: any): _116.BadRequest_FieldViolation;
            toJSON(message: _116.BadRequest_FieldViolation): unknown;
            fromPartial(object: {
                field?: string;
                description?: string;
            }): _116.BadRequest_FieldViolation;
        };
        RequestInfo: {
            encode(message: _116.RequestInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _116.RequestInfo;
            fromJSON(object: any): _116.RequestInfo;
            toJSON(message: _116.RequestInfo): unknown;
            fromPartial(object: {
                requestId?: string;
                servingData?: string;
            }): _116.RequestInfo;
        };
        ResourceInfo: {
            encode(message: _116.ResourceInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _116.ResourceInfo;
            fromJSON(object: any): _116.ResourceInfo;
            toJSON(message: _116.ResourceInfo): unknown;
            fromPartial(object: {
                resourceType?: string;
                resourceName?: string;
                owner?: string;
                description?: string;
            }): _116.ResourceInfo;
        };
        Help: {
            encode(message: _116.Help, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _116.Help;
            fromJSON(object: any): _116.Help;
            toJSON(message: _116.Help): unknown;
            fromPartial(object: {
                links?: {
                    description?: string;
                    url?: string;
                }[];
            }): _116.Help;
        };
        Help_Link: {
            encode(message: _116.Help_Link, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _116.Help_Link;
            fromJSON(object: any): _116.Help_Link;
            toJSON(message: _116.Help_Link): unknown;
            fromPartial(object: {
                description?: string;
                url?: string;
            }): _116.Help_Link;
        };
        LocalizedMessage: {
            encode(message: _116.LocalizedMessage, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _116.LocalizedMessage;
            fromJSON(object: any): _116.LocalizedMessage;
            toJSON(message: _116.LocalizedMessage): unknown;
            fromPartial(object: {
                locale?: string;
                message?: string;
            }): _116.LocalizedMessage;
        };
        codeFromJSON(object: any): _115.Code;
        codeToJSON(object: _115.Code): string;
        Code: typeof _115.Code;
    };
    const type: {
        TimeOfDay: {
            encode(message: _134.TimeOfDay, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _134.TimeOfDay;
            fromJSON(object: any): _134.TimeOfDay;
            toJSON(message: _134.TimeOfDay): unknown;
            fromPartial(object: {
                hours?: number;
                minutes?: number;
                seconds?: number;
                nanos?: number;
            }): _134.TimeOfDay;
        };
        Quaternion: {
            encode(message: _133.Quaternion, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.Quaternion;
            fromJSON(object: any): _133.Quaternion;
            toJSON(message: _133.Quaternion): unknown;
            fromPartial(object: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            }): _133.Quaternion;
        };
        PostalAddress: {
            encode(message: _132.PostalAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _132.PostalAddress;
            fromJSON(object: any): _132.PostalAddress;
            toJSON(message: _132.PostalAddress): unknown;
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
            }): _132.PostalAddress;
        };
        PhoneNumber: {
            encode(message: _131.PhoneNumber, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _131.PhoneNumber;
            fromJSON(object: any): _131.PhoneNumber;
            toJSON(message: _131.PhoneNumber): unknown;
            fromPartial(object: {
                e164Number?: string;
                shortCode?: {
                    regionCode?: string;
                    number?: string;
                };
                extension?: string;
            }): _131.PhoneNumber;
        };
        PhoneNumber_ShortCode: {
            encode(message: _131.PhoneNumber_ShortCode, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _131.PhoneNumber_ShortCode;
            fromJSON(object: any): _131.PhoneNumber_ShortCode;
            toJSON(message: _131.PhoneNumber_ShortCode): unknown;
            fromPartial(object: {
                regionCode?: string;
                number?: string;
            }): _131.PhoneNumber_ShortCode;
        };
        monthFromJSON(object: any): _130.Month;
        monthToJSON(object: _130.Month): string;
        Month: typeof _130.Month;
        Money: {
            encode(message: _129.Money, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _129.Money;
            fromJSON(object: any): _129.Money;
            toJSON(message: _129.Money): unknown;
            fromPartial(object: {
                currencyCode?: string;
                units?: bigint;
                nanos?: number;
            }): _129.Money;
        };
        LocalizedText: {
            encode(message: _128.LocalizedText, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _128.LocalizedText;
            fromJSON(object: any): _128.LocalizedText;
            toJSON(message: _128.LocalizedText): unknown;
            fromPartial(object: {
                text?: string;
                languageCode?: string;
            }): _128.LocalizedText;
        };
        LatLng: {
            encode(message: _127.LatLng, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _127.LatLng;
            fromJSON(object: any): _127.LatLng;
            toJSON(message: _127.LatLng): unknown;
            fromPartial(object: {
                latitude?: number;
                longitude?: number;
            }): _127.LatLng;
        };
        Interval: {
            encode(message: _126.Interval, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _126.Interval;
            fromJSON(object: any): _126.Interval;
            toJSON(message: _126.Interval): unknown;
            fromPartial(object: {
                startTime?: {
                    seconds?: bigint;
                    nanos?: number;
                };
                endTime?: {
                    seconds?: bigint;
                    nanos?: number;
                };
            }): _126.Interval;
        };
        Fraction: {
            encode(message: _125.Fraction, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _125.Fraction;
            fromJSON(object: any): _125.Fraction;
            toJSON(message: _125.Fraction): unknown;
            fromPartial(object: {
                numerator?: bigint;
                denominator?: bigint;
            }): _125.Fraction;
        };
        Expr: {
            encode(message: _124.Expr, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _124.Expr;
            fromJSON(object: any): _124.Expr;
            toJSON(message: _124.Expr): unknown;
            fromPartial(object: {
                expression?: string;
                title?: string;
                description?: string;
                location?: string;
            }): _124.Expr;
        };
        Decimal: {
            encode(message: _123.Decimal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _123.Decimal;
            fromJSON(object: any): _123.Decimal;
            toJSON(message: _123.Decimal): unknown;
            fromPartial(object: {
                value?: string;
            }): _123.Decimal;
        };
        dayOfWeekFromJSON(object: any): _122.DayOfWeek;
        dayOfWeekToJSON(object: _122.DayOfWeek): string;
        DayOfWeek: typeof _122.DayOfWeek;
        DateTime: {
            encode(message: _121.DateTime, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _121.DateTime;
            fromJSON(object: any): _121.DateTime;
            toJSON(message: _121.DateTime): unknown;
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
            }): _121.DateTime;
        };
        TimeZone: {
            encode(message: _121.TimeZone, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _121.TimeZone;
            fromJSON(object: any): _121.TimeZone;
            toJSON(message: _121.TimeZone): unknown;
            fromPartial(object: {
                id?: string;
                version?: string;
            }): _121.TimeZone;
        };
        Date: {
            encode(message: _120.Date, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _120.Date;
            fromJSON(object: any): _120.Date;
            toJSON(message: _120.Date): unknown;
            fromPartial(object: {
                year?: number;
                month?: number;
                day?: number;
            }): _120.Date;
        };
        Color: {
            encode(message: _119.Color, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _119.Color;
            fromJSON(object: any): _119.Color;
            toJSON(message: _119.Color): unknown;
            fromPartial(object: {
                red?: number;
                green?: number;
                blue?: number;
                alpha?: {
                    value?: number;
                };
            }): _119.Color;
        };
        calendarPeriodFromJSON(object: any): _118.CalendarPeriod;
        calendarPeriodToJSON(object: _118.CalendarPeriod): string;
        CalendarPeriod: typeof _118.CalendarPeriod;
    };
    const protobuf: {
        DoubleValue: {
            encode(message: _141.DoubleValue, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _141.DoubleValue;
            fromJSON(object: any): _141.DoubleValue;
            toJSON(message: _141.DoubleValue): unknown;
            fromPartial(object: {
                value?: number;
            }): _141.DoubleValue;
        };
        FloatValue: {
            encode(message: _141.FloatValue, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _141.FloatValue;
            fromJSON(object: any): _141.FloatValue;
            toJSON(message: _141.FloatValue): unknown;
            fromPartial(object: {
                value?: number;
            }): _141.FloatValue;
        };
        Int64Value: {
            encode(message: _141.Int64Value, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _141.Int64Value;
            fromJSON(object: any): _141.Int64Value;
            toJSON(message: _141.Int64Value): unknown;
            fromPartial(object: {
                value?: bigint;
            }): _141.Int64Value;
        };
        UInt64Value: {
            encode(message: _141.UInt64Value, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _141.UInt64Value;
            fromJSON(object: any): _141.UInt64Value;
            toJSON(message: _141.UInt64Value): unknown;
            fromPartial(object: {
                value?: bigint;
            }): _141.UInt64Value;
        };
        Int32Value: {
            encode(message: _141.Int32Value, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _141.Int32Value;
            fromJSON(object: any): _141.Int32Value;
            toJSON(message: _141.Int32Value): unknown;
            fromPartial(object: {
                value?: number;
            }): _141.Int32Value;
        };
        UInt32Value: {
            encode(message: _141.UInt32Value, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _141.UInt32Value;
            fromJSON(object: any): _141.UInt32Value;
            toJSON(message: _141.UInt32Value): unknown;
            fromPartial(object: {
                value?: number;
            }): _141.UInt32Value;
        };
        BoolValue: {
            encode(message: _141.BoolValue, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _141.BoolValue;
            fromJSON(object: any): _141.BoolValue;
            toJSON(message: _141.BoolValue): unknown;
            fromPartial(object: {
                value?: boolean;
            }): _141.BoolValue;
        };
        StringValue: {
            encode(message: _141.StringValue, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _141.StringValue;
            fromJSON(object: any): _141.StringValue;
            toJSON(message: _141.StringValue): unknown;
            fromPartial(object: {
                value?: string;
            }): _141.StringValue;
        };
        BytesValue: {
            encode(message: _141.BytesValue, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _141.BytesValue;
            fromJSON(object: any): _141.BytesValue;
            toJSON(message: _141.BytesValue): unknown;
            fromPartial(object: {
                value?: Uint8Array;
            }): _141.BytesValue;
        };
        nullValueFromJSON(object: any): _140.NullValue;
        nullValueToJSON(object: _140.NullValue): string;
        NullValue: typeof _140.NullValue;
        Struct_FieldsEntry: {
            encode(message: _140.Struct_FieldsEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _140.Struct_FieldsEntry;
            fromJSON(object: any): _140.Struct_FieldsEntry;
            toJSON(message: _140.Struct_FieldsEntry): unknown;
            fromPartial(object: {
                key?: string;
                value?: {
                    nullValue?: _140.NullValue;
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
            }): _140.Struct_FieldsEntry;
        };
        Struct: {
            encode(message: _140.Struct, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _140.Struct;
            fromJSON(object: any): _140.Struct;
            toJSON(message: _140.Struct): unknown;
            fromPartial(object: {
                fields?: {
                    [x: string]: {
                        nullValue?: _140.NullValue;
                        numberValue?: number;
                        stringValue?: string;
                        boolValue?: boolean;
                        structValue?: any;
                        listValue?: {
                            values?: any[];
                        };
                    };
                };
            }): _140.Struct;
        };
        Value: {
            encode(message: _140.Value, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _140.Value;
            fromJSON(object: any): _140.Value;
            toJSON(message: _140.Value): unknown;
            fromPartial(object: {
                nullValue?: _140.NullValue;
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
            }): _140.Value;
        };
        ListValue: {
            encode(message: _140.ListValue, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _140.ListValue;
            fromJSON(object: any): _140.ListValue;
            toJSON(message: _140.ListValue): unknown;
            fromPartial(object: {
                values?: {
                    nullValue?: _140.NullValue;
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
            }): _140.ListValue;
        };
        Empty: {
            encode(_: _139.Empty, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _139.Empty;
            fromJSON(_: any): _139.Empty;
            toJSON(_: _139.Empty): unknown;
            fromPartial(_: {}): _139.Empty;
        };
        Any: {
            encode(message: _138.Any, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _138.Any;
            fromJSON(object: any): _138.Any;
            toJSON(message: _138.Any): unknown;
            fromPartial(object: {
                typeUrl?: string;
                value?: Uint8Array;
            }): _138.Any;
        };
        Timestamp: {
            encode(message: _137.Timestamp, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _137.Timestamp;
            fromJSON(object: any): _137.Timestamp;
            toJSON(message: _137.Timestamp): unknown;
            fromPartial(object: {
                seconds?: bigint;
                nanos?: number;
            }): _137.Timestamp;
        };
        Duration: {
            encode(message: _136.Duration, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _136.Duration;
            fromJSON(object: any): _136.Duration;
            toJSON(message: _136.Duration): unknown;
            fromPartial(object: {
                seconds?: bigint;
                nanos?: number;
            }): _136.Duration;
        };
        fieldDescriptorProto_TypeFromJSON(object: any): _135.FieldDescriptorProto_Type;
        fieldDescriptorProto_TypeToJSON(object: _135.FieldDescriptorProto_Type): string;
        fieldDescriptorProto_LabelFromJSON(object: any): _135.FieldDescriptorProto_Label;
        fieldDescriptorProto_LabelToJSON(object: _135.FieldDescriptorProto_Label): string;
        fileOptions_OptimizeModeFromJSON(object: any): _135.FileOptions_OptimizeMode;
        fileOptions_OptimizeModeToJSON(object: _135.FileOptions_OptimizeMode): string;
        fieldOptions_CTypeFromJSON(object: any): _135.FieldOptions_CType;
        fieldOptions_CTypeToJSON(object: _135.FieldOptions_CType): string;
        fieldOptions_JSTypeFromJSON(object: any): _135.FieldOptions_JSType;
        fieldOptions_JSTypeToJSON(object: _135.FieldOptions_JSType): string;
        methodOptions_IdempotencyLevelFromJSON(object: any): _135.MethodOptions_IdempotencyLevel;
        methodOptions_IdempotencyLevelToJSON(object: _135.MethodOptions_IdempotencyLevel): string;
        FieldDescriptorProto_Type: typeof _135.FieldDescriptorProto_Type;
        FieldDescriptorProto_Label: typeof _135.FieldDescriptorProto_Label;
        FileOptions_OptimizeMode: typeof _135.FileOptions_OptimizeMode;
        FieldOptions_CType: typeof _135.FieldOptions_CType;
        FieldOptions_JSType: typeof _135.FieldOptions_JSType;
        MethodOptions_IdempotencyLevel: typeof _135.MethodOptions_IdempotencyLevel;
        FileDescriptorSet: {
            encode(message: _135.FileDescriptorSet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _135.FileDescriptorSet;
            fromJSON(object: any): _135.FileDescriptorSet;
            toJSON(message: _135.FileDescriptorSet): unknown;
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
                            label?: _135.FieldDescriptorProto_Label;
                            type?: _135.FieldDescriptorProto_Type;
                            typeName?: string;
                            extendee?: string;
                            defaultValue?: string;
                            oneofIndex?: number;
                            jsonName?: string;
                            options?: {
                                ctype?: _135.FieldOptions_CType;
                                packed?: boolean;
                                jstype?: _135.FieldOptions_JSType;
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
                            label?: _135.FieldDescriptorProto_Label;
                            type?: _135.FieldDescriptorProto_Type;
                            typeName?: string;
                            extendee?: string;
                            defaultValue?: string;
                            oneofIndex?: number;
                            jsonName?: string;
                            options?: {
                                ctype?: _135.FieldOptions_CType;
                                packed?: boolean;
                                jstype?: _135.FieldOptions_JSType;
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
                                idempotencyLevel?: _135.MethodOptions_IdempotencyLevel;
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
                        label?: _135.FieldDescriptorProto_Label;
                        type?: _135.FieldDescriptorProto_Type;
                        typeName?: string;
                        extendee?: string;
                        defaultValue?: string;
                        oneofIndex?: number;
                        jsonName?: string;
                        options?: {
                            ctype?: _135.FieldOptions_CType;
                            packed?: boolean;
                            jstype?: _135.FieldOptions_JSType;
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
                        optimizeFor?: _135.FileOptions_OptimizeMode;
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
            }): _135.FileDescriptorSet;
        };
        FileDescriptorProto: {
            encode(message: _135.FileDescriptorProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _135.FileDescriptorProto;
            fromJSON(object: any): _135.FileDescriptorProto;
            toJSON(message: _135.FileDescriptorProto): unknown;
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
                        label?: _135.FieldDescriptorProto_Label;
                        type?: _135.FieldDescriptorProto_Type;
                        typeName?: string;
                        extendee?: string;
                        defaultValue?: string;
                        oneofIndex?: number;
                        jsonName?: string;
                        options?: {
                            ctype?: _135.FieldOptions_CType;
                            packed?: boolean;
                            jstype?: _135.FieldOptions_JSType;
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
                        label?: _135.FieldDescriptorProto_Label;
                        type?: _135.FieldDescriptorProto_Type;
                        typeName?: string;
                        extendee?: string;
                        defaultValue?: string;
                        oneofIndex?: number;
                        jsonName?: string;
                        options?: {
                            ctype?: _135.FieldOptions_CType;
                            packed?: boolean;
                            jstype?: _135.FieldOptions_JSType;
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
                            idempotencyLevel?: _135.MethodOptions_IdempotencyLevel;
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
                    label?: _135.FieldDescriptorProto_Label;
                    type?: _135.FieldDescriptorProto_Type;
                    typeName?: string;
                    extendee?: string;
                    defaultValue?: string;
                    oneofIndex?: number;
                    jsonName?: string;
                    options?: {
                        ctype?: _135.FieldOptions_CType;
                        packed?: boolean;
                        jstype?: _135.FieldOptions_JSType;
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
                    optimizeFor?: _135.FileOptions_OptimizeMode;
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
            }): _135.FileDescriptorProto;
        };
        DescriptorProto: {
            encode(message: _135.DescriptorProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _135.DescriptorProto;
            fromJSON(object: any): _135.DescriptorProto;
            toJSON(message: _135.DescriptorProto): unknown;
            fromPartial(object: {
                name?: string;
                field?: {
                    name?: string;
                    number?: number;
                    label?: _135.FieldDescriptorProto_Label;
                    type?: _135.FieldDescriptorProto_Type;
                    typeName?: string;
                    extendee?: string;
                    defaultValue?: string;
                    oneofIndex?: number;
                    jsonName?: string;
                    options?: {
                        ctype?: _135.FieldOptions_CType;
                        packed?: boolean;
                        jstype?: _135.FieldOptions_JSType;
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
                    label?: _135.FieldDescriptorProto_Label;
                    type?: _135.FieldDescriptorProto_Type;
                    typeName?: string;
                    extendee?: string;
                    defaultValue?: string;
                    oneofIndex?: number;
                    jsonName?: string;
                    options?: {
                        ctype?: _135.FieldOptions_CType;
                        packed?: boolean;
                        jstype?: _135.FieldOptions_JSType;
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
            }): _135.DescriptorProto;
        };
        DescriptorProto_ExtensionRange: {
            encode(message: _135.DescriptorProto_ExtensionRange, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _135.DescriptorProto_ExtensionRange;
            fromJSON(object: any): _135.DescriptorProto_ExtensionRange;
            toJSON(message: _135.DescriptorProto_ExtensionRange): unknown;
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
            }): _135.DescriptorProto_ExtensionRange;
        };
        DescriptorProto_ReservedRange: {
            encode(message: _135.DescriptorProto_ReservedRange, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _135.DescriptorProto_ReservedRange;
            fromJSON(object: any): _135.DescriptorProto_ReservedRange;
            toJSON(message: _135.DescriptorProto_ReservedRange): unknown;
            fromPartial(object: {
                start?: number;
                end?: number;
            }): _135.DescriptorProto_ReservedRange;
        };
        ExtensionRangeOptions: {
            encode(message: _135.ExtensionRangeOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _135.ExtensionRangeOptions;
            fromJSON(object: any): _135.ExtensionRangeOptions;
            toJSON(message: _135.ExtensionRangeOptions): unknown;
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
            }): _135.ExtensionRangeOptions;
        };
        FieldDescriptorProto: {
            encode(message: _135.FieldDescriptorProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _135.FieldDescriptorProto;
            fromJSON(object: any): _135.FieldDescriptorProto;
            toJSON(message: _135.FieldDescriptorProto): unknown;
            fromPartial(object: {
                name?: string;
                number?: number;
                label?: _135.FieldDescriptorProto_Label;
                type?: _135.FieldDescriptorProto_Type;
                typeName?: string;
                extendee?: string;
                defaultValue?: string;
                oneofIndex?: number;
                jsonName?: string;
                options?: {
                    ctype?: _135.FieldOptions_CType;
                    packed?: boolean;
                    jstype?: _135.FieldOptions_JSType;
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
            }): _135.FieldDescriptorProto;
        };
        OneofDescriptorProto: {
            encode(message: _135.OneofDescriptorProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _135.OneofDescriptorProto;
            fromJSON(object: any): _135.OneofDescriptorProto;
            toJSON(message: _135.OneofDescriptorProto): unknown;
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
            }): _135.OneofDescriptorProto;
        };
        EnumDescriptorProto: {
            encode(message: _135.EnumDescriptorProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _135.EnumDescriptorProto;
            fromJSON(object: any): _135.EnumDescriptorProto;
            toJSON(message: _135.EnumDescriptorProto): unknown;
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
            }): _135.EnumDescriptorProto;
        };
        EnumDescriptorProto_EnumReservedRange: {
            encode(message: _135.EnumDescriptorProto_EnumReservedRange, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _135.EnumDescriptorProto_EnumReservedRange;
            fromJSON(object: any): _135.EnumDescriptorProto_EnumReservedRange;
            toJSON(message: _135.EnumDescriptorProto_EnumReservedRange): unknown;
            fromPartial(object: {
                start?: number;
                end?: number;
            }): _135.EnumDescriptorProto_EnumReservedRange;
        };
        EnumValueDescriptorProto: {
            encode(message: _135.EnumValueDescriptorProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _135.EnumValueDescriptorProto;
            fromJSON(object: any): _135.EnumValueDescriptorProto;
            toJSON(message: _135.EnumValueDescriptorProto): unknown;
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
            }): _135.EnumValueDescriptorProto;
        };
        ServiceDescriptorProto: {
            encode(message: _135.ServiceDescriptorProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _135.ServiceDescriptorProto;
            fromJSON(object: any): _135.ServiceDescriptorProto;
            toJSON(message: _135.ServiceDescriptorProto): unknown;
            fromPartial(object: {
                name?: string;
                method?: {
                    name?: string;
                    inputType?: string;
                    outputType?: string;
                    options?: {
                        deprecated?: boolean;
                        idempotencyLevel?: _135.MethodOptions_IdempotencyLevel;
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
            }): _135.ServiceDescriptorProto;
        };
        MethodDescriptorProto: {
            encode(message: _135.MethodDescriptorProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _135.MethodDescriptorProto;
            fromJSON(object: any): _135.MethodDescriptorProto;
            toJSON(message: _135.MethodDescriptorProto): unknown;
            fromPartial(object: {
                name?: string;
                inputType?: string;
                outputType?: string;
                options?: {
                    deprecated?: boolean;
                    idempotencyLevel?: _135.MethodOptions_IdempotencyLevel;
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
            }): _135.MethodDescriptorProto;
        };
        FileOptions: {
            encode(message: _135.FileOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _135.FileOptions;
            fromJSON(object: any): _135.FileOptions;
            toJSON(message: _135.FileOptions): unknown;
            fromPartial(object: {
                javaPackage?: string;
                javaOuterClassname?: string;
                javaMultipleFiles?: boolean;
                javaGenerateEqualsAndHash?: boolean;
                javaStringCheckUtf8?: boolean;
                optimizeFor?: _135.FileOptions_OptimizeMode;
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
            }): _135.FileOptions;
        };
        MessageOptions: {
            encode(message: _135.MessageOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _135.MessageOptions;
            fromJSON(object: any): _135.MessageOptions;
            toJSON(message: _135.MessageOptions): unknown;
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
            }): _135.MessageOptions;
        };
        FieldOptions: {
            encode(message: _135.FieldOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _135.FieldOptions;
            fromJSON(object: any): _135.FieldOptions;
            toJSON(message: _135.FieldOptions): unknown;
            fromPartial(object: {
                ctype?: _135.FieldOptions_CType;
                packed?: boolean;
                jstype?: _135.FieldOptions_JSType;
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
            }): _135.FieldOptions;
        };
        OneofOptions: {
            encode(message: _135.OneofOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _135.OneofOptions;
            fromJSON(object: any): _135.OneofOptions;
            toJSON(message: _135.OneofOptions): unknown;
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
            }): _135.OneofOptions;
        };
        EnumOptions: {
            encode(message: _135.EnumOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _135.EnumOptions;
            fromJSON(object: any): _135.EnumOptions;
            toJSON(message: _135.EnumOptions): unknown;
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
            }): _135.EnumOptions;
        };
        EnumValueOptions: {
            encode(message: _135.EnumValueOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _135.EnumValueOptions;
            fromJSON(object: any): _135.EnumValueOptions;
            toJSON(message: _135.EnumValueOptions): unknown;
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
            }): _135.EnumValueOptions;
        };
        ServiceOptions: {
            encode(message: _135.ServiceOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _135.ServiceOptions;
            fromJSON(object: any): _135.ServiceOptions;
            toJSON(message: _135.ServiceOptions): unknown;
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
            }): _135.ServiceOptions;
        };
        MethodOptions: {
            encode(message: _135.MethodOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _135.MethodOptions;
            fromJSON(object: any): _135.MethodOptions;
            toJSON(message: _135.MethodOptions): unknown;
            fromPartial(object: {
                deprecated?: boolean;
                idempotencyLevel?: _135.MethodOptions_IdempotencyLevel;
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
            }): _135.MethodOptions;
        };
        UninterpretedOption: {
            encode(message: _135.UninterpretedOption, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _135.UninterpretedOption;
            fromJSON(object: any): _135.UninterpretedOption;
            toJSON(message: _135.UninterpretedOption): unknown;
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
            }): _135.UninterpretedOption;
        };
        UninterpretedOption_NamePart: {
            encode(message: _135.UninterpretedOption_NamePart, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _135.UninterpretedOption_NamePart;
            fromJSON(object: any): _135.UninterpretedOption_NamePart;
            toJSON(message: _135.UninterpretedOption_NamePart): unknown;
            fromPartial(object: {
                namePart?: string;
                isExtension?: boolean;
            }): _135.UninterpretedOption_NamePart;
        };
        SourceCodeInfo: {
            encode(message: _135.SourceCodeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _135.SourceCodeInfo;
            fromJSON(object: any): _135.SourceCodeInfo;
            toJSON(message: _135.SourceCodeInfo): unknown;
            fromPartial(object: {
                location?: {
                    path?: number[];
                    span?: number[];
                    leadingComments?: string;
                    trailingComments?: string;
                    leadingDetachedComments?: string[];
                }[];
            }): _135.SourceCodeInfo;
        };
        SourceCodeInfo_Location: {
            encode(message: _135.SourceCodeInfo_Location, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _135.SourceCodeInfo_Location;
            fromJSON(object: any): _135.SourceCodeInfo_Location;
            toJSON(message: _135.SourceCodeInfo_Location): unknown;
            fromPartial(object: {
                path?: number[];
                span?: number[];
                leadingComments?: string;
                trailingComments?: string;
                leadingDetachedComments?: string[];
            }): _135.SourceCodeInfo_Location;
        };
        GeneratedCodeInfo: {
            encode(message: _135.GeneratedCodeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _135.GeneratedCodeInfo;
            fromJSON(object: any): _135.GeneratedCodeInfo;
            toJSON(message: _135.GeneratedCodeInfo): unknown;
            fromPartial(object: {
                annotation?: {
                    path?: number[];
                    sourceFile?: string;
                    begin?: number;
                    end?: number;
                }[];
            }): _135.GeneratedCodeInfo;
        };
        GeneratedCodeInfo_Annotation: {
            encode(message: _135.GeneratedCodeInfo_Annotation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _135.GeneratedCodeInfo_Annotation;
            fromJSON(object: any): _135.GeneratedCodeInfo_Annotation;
            toJSON(message: _135.GeneratedCodeInfo_Annotation): unknown;
            fromPartial(object: {
                path?: number[];
                sourceFile?: string;
                begin?: number;
                end?: number;
            }): _135.GeneratedCodeInfo_Annotation;
        };
    };
}
