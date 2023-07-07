import * as _109 from "./api/expr/v1alpha1/checked";
import * as _110 from "./api/expr/v1alpha1/eval";
import * as _111 from "./api/expr/v1alpha1/explain";
import * as _112 from "./api/expr/v1alpha1/syntax";
import * as _113 from "./api/expr/v1alpha1/value";
import * as _114 from "./api/expr/v1beta1/decl";
import * as _115 from "./api/expr/v1beta1/eval";
import * as _116 from "./api/expr/v1beta1/expr";
import * as _117 from "./api/expr/v1beta1/source";
import * as _118 from "./api/expr/v1beta1/value";
import * as _119 from "./bytestream/bytestream";
import * as _120 from "./geo/type/viewport";
import * as _121 from "./longrunning/operations";
import * as _122 from "./rpc/code";
import * as _123 from "./rpc/error_details";
import * as _124 from "./rpc/status";
import * as _125 from "./type/calendar_period";
import * as _126 from "./type/color";
import * as _127 from "./type/date";
import * as _128 from "./type/datetime";
import * as _129 from "./type/dayofweek";
import * as _130 from "./type/decimal";
import * as _131 from "./type/expr";
import * as _132 from "./type/fraction";
import * as _133 from "./type/interval";
import * as _134 from "./type/latlng";
import * as _135 from "./type/localized_text";
import * as _136 from "./type/money";
import * as _137 from "./type/month";
import * as _138 from "./type/phone_number";
import * as _139 from "./type/postal_address";
import * as _140 from "./type/quaternion";
import * as _141 from "./type/timeofday";
import * as _142 from "./protobuf/descriptor";
import * as _143 from "./protobuf/duration";
import * as _144 from "./protobuf/timestamp";
import * as _145 from "./protobuf/any";
import * as _146 from "./protobuf/empty";
import * as _147 from "./protobuf/struct";
import * as _148 from "./protobuf/wrappers";
export declare namespace google {
    namespace api {
        namespace expr {
            const v1alpha1: {
                Value: {
                    encode(message: _113.Value, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _113.Value;
                    fromJSON(object: any): _113.Value;
                    toJSON(message: _113.Value): unknown;
                    fromPartial(object: {
                        nullValue?: _147.NullValue;
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
                    }): _113.Value;
                };
                EnumValue: {
                    encode(message: _113.EnumValue, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _113.EnumValue;
                    fromJSON(object: any): _113.EnumValue;
                    toJSON(message: _113.EnumValue): unknown;
                    fromPartial(object: {
                        type?: string;
                        value?: number;
                    }): _113.EnumValue;
                };
                ListValue: {
                    encode(message: _113.ListValue, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _113.ListValue;
                    fromJSON(object: any): _113.ListValue;
                    toJSON(message: _113.ListValue): unknown;
                    fromPartial(object: {
                        values?: {
                            nullValue?: _147.NullValue;
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
                    }): _113.ListValue;
                };
                MapValue: {
                    encode(message: _113.MapValue, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _113.MapValue;
                    fromJSON(object: any): _113.MapValue;
                    toJSON(message: _113.MapValue): unknown;
                    fromPartial(object: {
                        entries?: {
                            key?: {
                                nullValue?: _147.NullValue;
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
                                nullValue?: _147.NullValue;
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
                    }): _113.MapValue;
                };
                MapValue_Entry: {
                    encode(message: _113.MapValue_Entry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _113.MapValue_Entry;
                    fromJSON(object: any): _113.MapValue_Entry;
                    toJSON(message: _113.MapValue_Entry): unknown;
                    fromPartial(object: {
                        key?: {
                            nullValue?: _147.NullValue;
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
                            nullValue?: _147.NullValue;
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
                    }): _113.MapValue_Entry;
                };
                ParsedExpr: {
                    encode(message: _112.ParsedExpr, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _112.ParsedExpr;
                    fromJSON(object: any): _112.ParsedExpr;
                    toJSON(message: _112.ParsedExpr): unknown;
                    fromPartial(object: {
                        expr?: {
                            id?: bigint;
                            constExpr?: {
                                nullValue?: _147.NullValue;
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
                    }): _112.ParsedExpr;
                };
                Expr: {
                    encode(message: _112.Expr, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _112.Expr;
                    fromJSON(object: any): _112.Expr;
                    toJSON(message: _112.Expr): unknown;
                    fromPartial(object: {
                        id?: bigint;
                        constExpr?: {
                            nullValue?: _147.NullValue;
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
                    }): _112.Expr;
                };
                Expr_Ident: {
                    encode(message: _112.Expr_Ident, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _112.Expr_Ident;
                    fromJSON(object: any): _112.Expr_Ident;
                    toJSON(message: _112.Expr_Ident): unknown;
                    fromPartial(object: {
                        name?: string;
                    }): _112.Expr_Ident;
                };
                Expr_Select: {
                    encode(message: _112.Expr_Select, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _112.Expr_Select;
                    fromJSON(object: any): _112.Expr_Select;
                    toJSON(message: _112.Expr_Select): unknown;
                    fromPartial(object: {
                        operand?: {
                            id?: bigint;
                            constExpr?: {
                                nullValue?: _147.NullValue;
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
                    }): _112.Expr_Select;
                };
                Expr_Call: {
                    encode(message: _112.Expr_Call, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _112.Expr_Call;
                    fromJSON(object: any): _112.Expr_Call;
                    toJSON(message: _112.Expr_Call): unknown;
                    fromPartial(object: {
                        target?: {
                            id?: bigint;
                            constExpr?: {
                                nullValue?: _147.NullValue;
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
                                nullValue?: _147.NullValue;
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
                    }): _112.Expr_Call;
                };
                Expr_CreateList: {
                    encode(message: _112.Expr_CreateList, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _112.Expr_CreateList;
                    fromJSON(object: any): _112.Expr_CreateList;
                    toJSON(message: _112.Expr_CreateList): unknown;
                    fromPartial(object: {
                        elements?: {
                            id?: bigint;
                            constExpr?: {
                                nullValue?: _147.NullValue;
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
                    }): _112.Expr_CreateList;
                };
                Expr_CreateStruct: {
                    encode(message: _112.Expr_CreateStruct, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _112.Expr_CreateStruct;
                    fromJSON(object: any): _112.Expr_CreateStruct;
                    toJSON(message: _112.Expr_CreateStruct): unknown;
                    fromPartial(object: {
                        messageName?: string;
                        entries?: {
                            id?: bigint;
                            fieldKey?: string;
                            mapKey?: {
                                id?: bigint;
                                constExpr?: {
                                    nullValue?: _147.NullValue;
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
                                    nullValue?: _147.NullValue;
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
                    }): _112.Expr_CreateStruct;
                };
                Expr_CreateStruct_Entry: {
                    encode(message: _112.Expr_CreateStruct_Entry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _112.Expr_CreateStruct_Entry;
                    fromJSON(object: any): _112.Expr_CreateStruct_Entry;
                    toJSON(message: _112.Expr_CreateStruct_Entry): unknown;
                    fromPartial(object: {
                        id?: bigint;
                        fieldKey?: string;
                        mapKey?: {
                            id?: bigint;
                            constExpr?: {
                                nullValue?: _147.NullValue;
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
                                nullValue?: _147.NullValue;
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
                    }): _112.Expr_CreateStruct_Entry;
                };
                Expr_Comprehension: {
                    encode(message: _112.Expr_Comprehension, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _112.Expr_Comprehension;
                    fromJSON(object: any): _112.Expr_Comprehension;
                    toJSON(message: _112.Expr_Comprehension): unknown;
                    fromPartial(object: {
                        iterVar?: string;
                        iterRange?: {
                            id?: bigint;
                            constExpr?: {
                                nullValue?: _147.NullValue;
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
                                nullValue?: _147.NullValue;
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
                                nullValue?: _147.NullValue;
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
                                nullValue?: _147.NullValue;
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
                                nullValue?: _147.NullValue;
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
                    }): _112.Expr_Comprehension;
                };
                Constant: {
                    encode(message: _112.Constant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _112.Constant;
                    fromJSON(object: any): _112.Constant;
                    toJSON(message: _112.Constant): unknown;
                    fromPartial(object: {
                        nullValue?: _147.NullValue;
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
                    }): _112.Constant;
                };
                SourceInfo_PositionsEntry: {
                    encode(message: _112.SourceInfo_PositionsEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _112.SourceInfo_PositionsEntry;
                    fromJSON(object: any): _112.SourceInfo_PositionsEntry;
                    toJSON(message: _112.SourceInfo_PositionsEntry): unknown;
                    fromPartial(object: {
                        key?: bigint;
                        value?: number;
                    }): _112.SourceInfo_PositionsEntry;
                };
                SourceInfo_MacroCallsEntry: {
                    encode(message: _112.SourceInfo_MacroCallsEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _112.SourceInfo_MacroCallsEntry;
                    fromJSON(object: any): _112.SourceInfo_MacroCallsEntry;
                    toJSON(message: _112.SourceInfo_MacroCallsEntry): unknown;
                    fromPartial(object: {
                        key?: bigint;
                        value?: {
                            id?: bigint;
                            constExpr?: {
                                nullValue?: _147.NullValue;
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
                    }): _112.SourceInfo_MacroCallsEntry;
                };
                SourceInfo: {
                    encode(message: _112.SourceInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _112.SourceInfo;
                    fromJSON(object: any): _112.SourceInfo;
                    toJSON(message: _112.SourceInfo): unknown;
                    fromPartial(object: {
                        syntaxVersion?: string;
                        location?: string;
                        lineOffsets?: number[];
                        positions?: {};
                        macroCalls?: {};
                    }): _112.SourceInfo;
                };
                SourcePosition: {
                    encode(message: _112.SourcePosition, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _112.SourcePosition;
                    fromJSON(object: any): _112.SourcePosition;
                    toJSON(message: _112.SourcePosition): unknown;
                    fromPartial(object: {
                        location?: string;
                        offset?: number;
                        line?: number;
                        column?: number;
                    }): _112.SourcePosition;
                };
                Explain: {
                    encode(message: _111.Explain, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _111.Explain;
                    fromJSON(object: any): _111.Explain;
                    toJSON(message: _111.Explain): unknown;
                    fromPartial(object: {
                        values?: {
                            nullValue?: _147.NullValue;
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
                    }): _111.Explain;
                };
                Explain_ExprStep: {
                    encode(message: _111.Explain_ExprStep, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _111.Explain_ExprStep;
                    fromJSON(object: any): _111.Explain_ExprStep;
                    toJSON(message: _111.Explain_ExprStep): unknown;
                    fromPartial(object: {
                        id?: bigint;
                        valueIndex?: number;
                    }): _111.Explain_ExprStep;
                };
                EvalState: {
                    encode(message: _110.EvalState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _110.EvalState;
                    fromJSON(object: any): _110.EvalState;
                    toJSON(message: _110.EvalState): unknown;
                    fromPartial(object: {
                        values?: {
                            value?: {
                                nullValue?: _147.NullValue;
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
                    }): _110.EvalState;
                };
                EvalState_Result: {
                    encode(message: _110.EvalState_Result, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _110.EvalState_Result;
                    fromJSON(object: any): _110.EvalState_Result;
                    toJSON(message: _110.EvalState_Result): unknown;
                    fromPartial(object: {
                        expr?: bigint;
                        value?: bigint;
                    }): _110.EvalState_Result;
                };
                ExprValue: {
                    encode(message: _110.ExprValue, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _110.ExprValue;
                    fromJSON(object: any): _110.ExprValue;
                    toJSON(message: _110.ExprValue): unknown;
                    fromPartial(object: {
                        value?: {
                            nullValue?: _147.NullValue;
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
                    }): _110.ExprValue;
                };
                ErrorSet: {
                    encode(message: _110.ErrorSet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _110.ErrorSet;
                    fromJSON(object: any): _110.ErrorSet;
                    toJSON(message: _110.ErrorSet): unknown;
                    fromPartial(object: {
                        errors?: {
                            code?: number;
                            message?: string;
                            details?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                        }[];
                    }): _110.ErrorSet;
                };
                UnknownSet: {
                    encode(message: _110.UnknownSet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _110.UnknownSet;
                    fromJSON(object: any): _110.UnknownSet;
                    toJSON(message: _110.UnknownSet): unknown;
                    fromPartial(object: {
                        exprs?: bigint[];
                    }): _110.UnknownSet;
                };
                type_PrimitiveTypeFromJSON(object: any): _109.Type_PrimitiveType;
                type_PrimitiveTypeToJSON(object: _109.Type_PrimitiveType): string;
                type_WellKnownTypeFromJSON(object: any): _109.Type_WellKnownType;
                type_WellKnownTypeToJSON(object: _109.Type_WellKnownType): string;
                Type_PrimitiveType: typeof _109.Type_PrimitiveType;
                Type_WellKnownType: typeof _109.Type_WellKnownType;
                CheckedExpr_ReferenceMapEntry: {
                    encode(message: _109.CheckedExpr_ReferenceMapEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _109.CheckedExpr_ReferenceMapEntry;
                    fromJSON(object: any): _109.CheckedExpr_ReferenceMapEntry;
                    toJSON(message: _109.CheckedExpr_ReferenceMapEntry): unknown;
                    fromPartial(object: {
                        key?: bigint;
                        value?: {
                            name?: string;
                            overloadId?: string[];
                            value?: {
                                nullValue?: _147.NullValue;
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
                    }): _109.CheckedExpr_ReferenceMapEntry;
                };
                CheckedExpr_TypeMapEntry: {
                    encode(message: _109.CheckedExpr_TypeMapEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _109.CheckedExpr_TypeMapEntry;
                    fromJSON(object: any): _109.CheckedExpr_TypeMapEntry;
                    toJSON(message: _109.CheckedExpr_TypeMapEntry): unknown;
                    fromPartial(object: {
                        key?: bigint;
                        value?: {
                            dyn?: {};
                            null?: _147.NullValue;
                            primitive?: _109.Type_PrimitiveType;
                            wrapper?: _109.Type_PrimitiveType;
                            wellKnown?: _109.Type_WellKnownType;
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
                    }): _109.CheckedExpr_TypeMapEntry;
                };
                CheckedExpr: {
                    encode(message: _109.CheckedExpr, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _109.CheckedExpr;
                    fromJSON(object: any): _109.CheckedExpr;
                    toJSON(message: _109.CheckedExpr): unknown;
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
                                nullValue?: _147.NullValue;
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
                    }): _109.CheckedExpr;
                };
                Type: {
                    encode(message: _109.Type, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _109.Type;
                    fromJSON(object: any): _109.Type;
                    toJSON(message: _109.Type): unknown;
                    fromPartial(object: {
                        dyn?: {};
                        null?: _147.NullValue;
                        primitive?: _109.Type_PrimitiveType;
                        wrapper?: _109.Type_PrimitiveType;
                        wellKnown?: _109.Type_WellKnownType;
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
                    }): _109.Type;
                };
                Type_ListType: {
                    encode(message: _109.Type_ListType, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _109.Type_ListType;
                    fromJSON(object: any): _109.Type_ListType;
                    toJSON(message: _109.Type_ListType): unknown;
                    fromPartial(object: {
                        elemType?: {
                            dyn?: {};
                            null?: _147.NullValue;
                            primitive?: _109.Type_PrimitiveType;
                            wrapper?: _109.Type_PrimitiveType;
                            wellKnown?: _109.Type_WellKnownType;
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
                    }): _109.Type_ListType;
                };
                Type_MapType: {
                    encode(message: _109.Type_MapType, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _109.Type_MapType;
                    fromJSON(object: any): _109.Type_MapType;
                    toJSON(message: _109.Type_MapType): unknown;
                    fromPartial(object: {
                        keyType?: {
                            dyn?: {};
                            null?: _147.NullValue;
                            primitive?: _109.Type_PrimitiveType;
                            wrapper?: _109.Type_PrimitiveType;
                            wellKnown?: _109.Type_WellKnownType;
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
                            null?: _147.NullValue;
                            primitive?: _109.Type_PrimitiveType;
                            wrapper?: _109.Type_PrimitiveType;
                            wellKnown?: _109.Type_WellKnownType;
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
                    }): _109.Type_MapType;
                };
                Type_FunctionType: {
                    encode(message: _109.Type_FunctionType, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _109.Type_FunctionType;
                    fromJSON(object: any): _109.Type_FunctionType;
                    toJSON(message: _109.Type_FunctionType): unknown;
                    fromPartial(object: {
                        resultType?: {
                            dyn?: {};
                            null?: _147.NullValue;
                            primitive?: _109.Type_PrimitiveType;
                            wrapper?: _109.Type_PrimitiveType;
                            wellKnown?: _109.Type_WellKnownType;
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
                            null?: _147.NullValue;
                            primitive?: _109.Type_PrimitiveType;
                            wrapper?: _109.Type_PrimitiveType;
                            wellKnown?: _109.Type_WellKnownType;
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
                    }): _109.Type_FunctionType;
                };
                Type_AbstractType: {
                    encode(message: _109.Type_AbstractType, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _109.Type_AbstractType;
                    fromJSON(object: any): _109.Type_AbstractType;
                    toJSON(message: _109.Type_AbstractType): unknown;
                    fromPartial(object: {
                        name?: string;
                        parameterTypes?: {
                            dyn?: {};
                            null?: _147.NullValue;
                            primitive?: _109.Type_PrimitiveType;
                            wrapper?: _109.Type_PrimitiveType;
                            wellKnown?: _109.Type_WellKnownType;
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
                    }): _109.Type_AbstractType;
                };
                Decl: {
                    encode(message: _109.Decl, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _109.Decl;
                    fromJSON(object: any): _109.Decl;
                    toJSON(message: _109.Decl): unknown;
                    fromPartial(object: {
                        name?: string;
                        ident?: {
                            type?: {
                                dyn?: {};
                                null?: _147.NullValue;
                                primitive?: _109.Type_PrimitiveType;
                                wrapper?: _109.Type_PrimitiveType;
                                wellKnown?: _109.Type_WellKnownType;
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
                                nullValue?: _147.NullValue;
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
                                    null?: _147.NullValue;
                                    primitive?: _109.Type_PrimitiveType;
                                    wrapper?: _109.Type_PrimitiveType;
                                    wellKnown?: _109.Type_WellKnownType;
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
                                    null?: _147.NullValue;
                                    primitive?: _109.Type_PrimitiveType;
                                    wrapper?: _109.Type_PrimitiveType;
                                    wellKnown?: _109.Type_WellKnownType;
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
                    }): _109.Decl;
                };
                Decl_IdentDecl: {
                    encode(message: _109.Decl_IdentDecl, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _109.Decl_IdentDecl;
                    fromJSON(object: any): _109.Decl_IdentDecl;
                    toJSON(message: _109.Decl_IdentDecl): unknown;
                    fromPartial(object: {
                        type?: {
                            dyn?: {};
                            null?: _147.NullValue;
                            primitive?: _109.Type_PrimitiveType;
                            wrapper?: _109.Type_PrimitiveType;
                            wellKnown?: _109.Type_WellKnownType;
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
                            nullValue?: _147.NullValue;
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
                    }): _109.Decl_IdentDecl;
                };
                Decl_FunctionDecl: {
                    encode(message: _109.Decl_FunctionDecl, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _109.Decl_FunctionDecl;
                    fromJSON(object: any): _109.Decl_FunctionDecl;
                    toJSON(message: _109.Decl_FunctionDecl): unknown;
                    fromPartial(object: {
                        overloads?: {
                            overloadId?: string;
                            params?: {
                                dyn?: {};
                                null?: _147.NullValue;
                                primitive?: _109.Type_PrimitiveType;
                                wrapper?: _109.Type_PrimitiveType;
                                wellKnown?: _109.Type_WellKnownType;
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
                                null?: _147.NullValue;
                                primitive?: _109.Type_PrimitiveType;
                                wrapper?: _109.Type_PrimitiveType;
                                wellKnown?: _109.Type_WellKnownType;
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
                    }): _109.Decl_FunctionDecl;
                };
                Decl_FunctionDecl_Overload: {
                    encode(message: _109.Decl_FunctionDecl_Overload, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _109.Decl_FunctionDecl_Overload;
                    fromJSON(object: any): _109.Decl_FunctionDecl_Overload;
                    toJSON(message: _109.Decl_FunctionDecl_Overload): unknown;
                    fromPartial(object: {
                        overloadId?: string;
                        params?: {
                            dyn?: {};
                            null?: _147.NullValue;
                            primitive?: _109.Type_PrimitiveType;
                            wrapper?: _109.Type_PrimitiveType;
                            wellKnown?: _109.Type_WellKnownType;
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
                            null?: _147.NullValue;
                            primitive?: _109.Type_PrimitiveType;
                            wrapper?: _109.Type_PrimitiveType;
                            wellKnown?: _109.Type_WellKnownType;
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
                    }): _109.Decl_FunctionDecl_Overload;
                };
                Reference: {
                    encode(message: _109.Reference, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _109.Reference;
                    fromJSON(object: any): _109.Reference;
                    toJSON(message: _109.Reference): unknown;
                    fromPartial(object: {
                        name?: string;
                        overloadId?: string[];
                        value?: {
                            nullValue?: _147.NullValue;
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
                    }): _109.Reference;
                };
            };
            const v1beta1: {
                Value: {
                    encode(message: _118.Value, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _118.Value;
                    fromJSON(object: any): _118.Value;
                    toJSON(message: _118.Value): unknown;
                    fromPartial(object: {
                        nullValue?: _147.NullValue;
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
                    }): _118.Value;
                };
                EnumValue: {
                    encode(message: _118.EnumValue, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _118.EnumValue;
                    fromJSON(object: any): _118.EnumValue;
                    toJSON(message: _118.EnumValue): unknown;
                    fromPartial(object: {
                        type?: string;
                        value?: number;
                    }): _118.EnumValue;
                };
                ListValue: {
                    encode(message: _118.ListValue, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _118.ListValue;
                    fromJSON(object: any): _118.ListValue;
                    toJSON(message: _118.ListValue): unknown;
                    fromPartial(object: {
                        values?: {
                            nullValue?: _147.NullValue;
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
                    }): _118.ListValue;
                };
                MapValue: {
                    encode(message: _118.MapValue, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _118.MapValue;
                    fromJSON(object: any): _118.MapValue;
                    toJSON(message: _118.MapValue): unknown;
                    fromPartial(object: {
                        entries?: {
                            key?: {
                                nullValue?: _147.NullValue;
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
                                nullValue?: _147.NullValue;
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
                    }): _118.MapValue;
                };
                MapValue_Entry: {
                    encode(message: _118.MapValue_Entry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _118.MapValue_Entry;
                    fromJSON(object: any): _118.MapValue_Entry;
                    toJSON(message: _118.MapValue_Entry): unknown;
                    fromPartial(object: {
                        key?: {
                            nullValue?: _147.NullValue;
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
                            nullValue?: _147.NullValue;
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
                    }): _118.MapValue_Entry;
                };
                SourceInfo_PositionsEntry: {
                    encode(message: _117.SourceInfo_PositionsEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _117.SourceInfo_PositionsEntry;
                    fromJSON(object: any): _117.SourceInfo_PositionsEntry;
                    toJSON(message: _117.SourceInfo_PositionsEntry): unknown;
                    fromPartial(object: {
                        key?: number;
                        value?: number;
                    }): _117.SourceInfo_PositionsEntry;
                };
                SourceInfo: {
                    encode(message: _117.SourceInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _117.SourceInfo;
                    fromJSON(object: any): _117.SourceInfo;
                    toJSON(message: _117.SourceInfo): unknown;
                    fromPartial(object: {
                        location?: string;
                        lineOffsets?: number[];
                        positions?: {
                            [x: number]: number;
                        };
                    }): _117.SourceInfo;
                };
                SourcePosition: {
                    encode(message: _117.SourcePosition, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _117.SourcePosition;
                    fromJSON(object: any): _117.SourcePosition;
                    toJSON(message: _117.SourcePosition): unknown;
                    fromPartial(object: {
                        location?: string;
                        offset?: number;
                        line?: number;
                        column?: number;
                    }): _117.SourcePosition;
                };
                ParsedExpr: {
                    encode(message: _116.ParsedExpr, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _116.ParsedExpr;
                    fromJSON(object: any): _116.ParsedExpr;
                    toJSON(message: _116.ParsedExpr): unknown;
                    fromPartial(object: {
                        expr?: {
                            id?: number;
                            literalExpr?: {
                                nullValue?: _147.NullValue;
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
                    }): _116.ParsedExpr;
                };
                Expr: {
                    encode(message: _116.Expr, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _116.Expr;
                    fromJSON(object: any): _116.Expr;
                    toJSON(message: _116.Expr): unknown;
                    fromPartial(object: {
                        id?: number;
                        literalExpr?: {
                            nullValue?: _147.NullValue;
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
                    }): _116.Expr;
                };
                Expr_Ident: {
                    encode(message: _116.Expr_Ident, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _116.Expr_Ident;
                    fromJSON(object: any): _116.Expr_Ident;
                    toJSON(message: _116.Expr_Ident): unknown;
                    fromPartial(object: {
                        name?: string;
                    }): _116.Expr_Ident;
                };
                Expr_Select: {
                    encode(message: _116.Expr_Select, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _116.Expr_Select;
                    fromJSON(object: any): _116.Expr_Select;
                    toJSON(message: _116.Expr_Select): unknown;
                    fromPartial(object: {
                        operand?: {
                            id?: number;
                            literalExpr?: {
                                nullValue?: _147.NullValue;
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
                    }): _116.Expr_Select;
                };
                Expr_Call: {
                    encode(message: _116.Expr_Call, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _116.Expr_Call;
                    fromJSON(object: any): _116.Expr_Call;
                    toJSON(message: _116.Expr_Call): unknown;
                    fromPartial(object: {
                        target?: {
                            id?: number;
                            literalExpr?: {
                                nullValue?: _147.NullValue;
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
                                nullValue?: _147.NullValue;
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
                    }): _116.Expr_Call;
                };
                Expr_CreateList: {
                    encode(message: _116.Expr_CreateList, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _116.Expr_CreateList;
                    fromJSON(object: any): _116.Expr_CreateList;
                    toJSON(message: _116.Expr_CreateList): unknown;
                    fromPartial(object: {
                        elements?: {
                            id?: number;
                            literalExpr?: {
                                nullValue?: _147.NullValue;
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
                    }): _116.Expr_CreateList;
                };
                Expr_CreateStruct: {
                    encode(message: _116.Expr_CreateStruct, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _116.Expr_CreateStruct;
                    fromJSON(object: any): _116.Expr_CreateStruct;
                    toJSON(message: _116.Expr_CreateStruct): unknown;
                    fromPartial(object: {
                        type?: string;
                        entries?: {
                            id?: number;
                            fieldKey?: string;
                            mapKey?: {
                                id?: number;
                                literalExpr?: {
                                    nullValue?: _147.NullValue;
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
                                    nullValue?: _147.NullValue;
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
                    }): _116.Expr_CreateStruct;
                };
                Expr_CreateStruct_Entry: {
                    encode(message: _116.Expr_CreateStruct_Entry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _116.Expr_CreateStruct_Entry;
                    fromJSON(object: any): _116.Expr_CreateStruct_Entry;
                    toJSON(message: _116.Expr_CreateStruct_Entry): unknown;
                    fromPartial(object: {
                        id?: number;
                        fieldKey?: string;
                        mapKey?: {
                            id?: number;
                            literalExpr?: {
                                nullValue?: _147.NullValue;
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
                                nullValue?: _147.NullValue;
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
                    }): _116.Expr_CreateStruct_Entry;
                };
                Expr_Comprehension: {
                    encode(message: _116.Expr_Comprehension, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _116.Expr_Comprehension;
                    fromJSON(object: any): _116.Expr_Comprehension;
                    toJSON(message: _116.Expr_Comprehension): unknown;
                    fromPartial(object: {
                        iterVar?: string;
                        iterRange?: {
                            id?: number;
                            literalExpr?: {
                                nullValue?: _147.NullValue;
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
                                nullValue?: _147.NullValue;
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
                                nullValue?: _147.NullValue;
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
                                nullValue?: _147.NullValue;
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
                                nullValue?: _147.NullValue;
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
                    }): _116.Expr_Comprehension;
                };
                Literal: {
                    encode(message: _116.Literal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _116.Literal;
                    fromJSON(object: any): _116.Literal;
                    toJSON(message: _116.Literal): unknown;
                    fromPartial(object: {
                        nullValue?: _147.NullValue;
                        boolValue?: boolean;
                        int64Value?: bigint;
                        uint64Value?: bigint;
                        doubleValue?: number;
                        stringValue?: string;
                        bytesValue?: Uint8Array;
                    }): _116.Literal;
                };
                EvalState: {
                    encode(message: _115.EvalState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _115.EvalState;
                    fromJSON(object: any): _115.EvalState;
                    toJSON(message: _115.EvalState): unknown;
                    fromPartial(object: {
                        values?: {
                            value?: {
                                nullValue?: _147.NullValue;
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
                    }): _115.EvalState;
                };
                EvalState_Result: {
                    encode(message: _115.EvalState_Result, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _115.EvalState_Result;
                    fromJSON(object: any): _115.EvalState_Result;
                    toJSON(message: _115.EvalState_Result): unknown;
                    fromPartial(object: {
                        expr?: {
                            id?: number;
                        };
                        value?: number;
                    }): _115.EvalState_Result;
                };
                ExprValue: {
                    encode(message: _115.ExprValue, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _115.ExprValue;
                    fromJSON(object: any): _115.ExprValue;
                    toJSON(message: _115.ExprValue): unknown;
                    fromPartial(object: {
                        value?: {
                            nullValue?: _147.NullValue;
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
                    }): _115.ExprValue;
                };
                ErrorSet: {
                    encode(message: _115.ErrorSet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _115.ErrorSet;
                    fromJSON(object: any): _115.ErrorSet;
                    toJSON(message: _115.ErrorSet): unknown;
                    fromPartial(object: {
                        errors?: {
                            code?: number;
                            message?: string;
                            details?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                        }[];
                    }): _115.ErrorSet;
                };
                UnknownSet: {
                    encode(message: _115.UnknownSet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _115.UnknownSet;
                    fromJSON(object: any): _115.UnknownSet;
                    toJSON(message: _115.UnknownSet): unknown;
                    fromPartial(object: {
                        exprs?: {
                            id?: number;
                        }[];
                    }): _115.UnknownSet;
                };
                IdRef: {
                    encode(message: _115.IdRef, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _115.IdRef;
                    fromJSON(object: any): _115.IdRef;
                    toJSON(message: _115.IdRef): unknown;
                    fromPartial(object: {
                        id?: number;
                    }): _115.IdRef;
                };
                Decl: {
                    encode(message: _114.Decl, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _114.Decl;
                    fromJSON(object: any): _114.Decl;
                    toJSON(message: _114.Decl): unknown;
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
                                    nullValue?: _147.NullValue;
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
                                        nullValue?: _147.NullValue;
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
                    }): _114.Decl;
                };
                DeclType: {
                    encode(message: _114.DeclType, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _114.DeclType;
                    fromJSON(object: any): _114.DeclType;
                    toJSON(message: _114.DeclType): unknown;
                    fromPartial(object: {
                        id?: number;
                        type?: string;
                        typeParams?: any[];
                    }): _114.DeclType;
                };
                IdentDecl: {
                    encode(message: _114.IdentDecl, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _114.IdentDecl;
                    fromJSON(object: any): _114.IdentDecl;
                    toJSON(message: _114.IdentDecl): unknown;
                    fromPartial(object: {
                        type?: {
                            id?: number;
                            type?: string;
                            typeParams?: any[];
                        };
                        value?: {
                            id?: number;
                            literalExpr?: {
                                nullValue?: _147.NullValue;
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
                    }): _114.IdentDecl;
                };
                FunctionDecl: {
                    encode(message: _114.FunctionDecl, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _114.FunctionDecl;
                    fromJSON(object: any): _114.FunctionDecl;
                    toJSON(message: _114.FunctionDecl): unknown;
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
                                    nullValue?: _147.NullValue;
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
                    }): _114.FunctionDecl;
                };
            };
        }
    }
    const bytestream: {
        ReadRequest: {
            encode(message: _119.ReadRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _119.ReadRequest;
            fromJSON(object: any): _119.ReadRequest;
            toJSON(message: _119.ReadRequest): unknown;
            fromPartial(object: {
                resourceName?: string;
                readOffset?: bigint;
                readLimit?: bigint;
            }): _119.ReadRequest;
        };
        ReadResponse: {
            encode(message: _119.ReadResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _119.ReadResponse;
            fromJSON(object: any): _119.ReadResponse;
            toJSON(message: _119.ReadResponse): unknown;
            fromPartial(object: {
                data?: Uint8Array;
            }): _119.ReadResponse;
        };
        WriteRequest: {
            encode(message: _119.WriteRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _119.WriteRequest;
            fromJSON(object: any): _119.WriteRequest;
            toJSON(message: _119.WriteRequest): unknown;
            fromPartial(object: {
                resourceName?: string;
                writeOffset?: bigint;
                finishWrite?: boolean;
                data?: Uint8Array;
            }): _119.WriteRequest;
        };
        WriteResponse: {
            encode(message: _119.WriteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _119.WriteResponse;
            fromJSON(object: any): _119.WriteResponse;
            toJSON(message: _119.WriteResponse): unknown;
            fromPartial(object: {
                committedSize?: bigint;
            }): _119.WriteResponse;
        };
        QueryWriteStatusRequest: {
            encode(message: _119.QueryWriteStatusRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _119.QueryWriteStatusRequest;
            fromJSON(object: any): _119.QueryWriteStatusRequest;
            toJSON(message: _119.QueryWriteStatusRequest): unknown;
            fromPartial(object: {
                resourceName?: string;
            }): _119.QueryWriteStatusRequest;
        };
        QueryWriteStatusResponse: {
            encode(message: _119.QueryWriteStatusResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _119.QueryWriteStatusResponse;
            fromJSON(object: any): _119.QueryWriteStatusResponse;
            toJSON(message: _119.QueryWriteStatusResponse): unknown;
            fromPartial(object: {
                committedSize?: bigint;
                complete?: boolean;
            }): _119.QueryWriteStatusResponse;
        };
    };
    namespace geo {
        const type: {
            Viewport: {
                encode(message: _120.Viewport, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _120.Viewport;
                fromJSON(object: any): _120.Viewport;
                toJSON(message: _120.Viewport): unknown;
                fromPartial(object: {
                    low?: {
                        latitude?: number;
                        longitude?: number;
                    };
                    high?: {
                        latitude?: number;
                        longitude?: number;
                    };
                }): _120.Viewport;
            };
        };
    }
    const longrunning: {
        Operation: {
            encode(message: _121.Operation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _121.Operation;
            fromJSON(object: any): _121.Operation;
            toJSON(message: _121.Operation): unknown;
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
            }): _121.Operation;
        };
        GetOperationRequest: {
            encode(message: _121.GetOperationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _121.GetOperationRequest;
            fromJSON(object: any): _121.GetOperationRequest;
            toJSON(message: _121.GetOperationRequest): unknown;
            fromPartial(object: {
                name?: string;
            }): _121.GetOperationRequest;
        };
        ListOperationsRequest: {
            encode(message: _121.ListOperationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _121.ListOperationsRequest;
            fromJSON(object: any): _121.ListOperationsRequest;
            toJSON(message: _121.ListOperationsRequest): unknown;
            fromPartial(object: {
                name?: string;
                filter?: string;
                pageSize?: number;
                pageToken?: string;
            }): _121.ListOperationsRequest;
        };
        ListOperationsResponse: {
            encode(message: _121.ListOperationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _121.ListOperationsResponse;
            fromJSON(object: any): _121.ListOperationsResponse;
            toJSON(message: _121.ListOperationsResponse): unknown;
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
            }): _121.ListOperationsResponse;
        };
        CancelOperationRequest: {
            encode(message: _121.CancelOperationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _121.CancelOperationRequest;
            fromJSON(object: any): _121.CancelOperationRequest;
            toJSON(message: _121.CancelOperationRequest): unknown;
            fromPartial(object: {
                name?: string;
            }): _121.CancelOperationRequest;
        };
        DeleteOperationRequest: {
            encode(message: _121.DeleteOperationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _121.DeleteOperationRequest;
            fromJSON(object: any): _121.DeleteOperationRequest;
            toJSON(message: _121.DeleteOperationRequest): unknown;
            fromPartial(object: {
                name?: string;
            }): _121.DeleteOperationRequest;
        };
        WaitOperationRequest: {
            encode(message: _121.WaitOperationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _121.WaitOperationRequest;
            fromJSON(object: any): _121.WaitOperationRequest;
            toJSON(message: _121.WaitOperationRequest): unknown;
            fromPartial(object: {
                name?: string;
                timeout?: {
                    seconds?: bigint;
                    nanos?: number;
                };
            }): _121.WaitOperationRequest;
        };
        OperationInfo: {
            encode(message: _121.OperationInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _121.OperationInfo;
            fromJSON(object: any): _121.OperationInfo;
            toJSON(message: _121.OperationInfo): unknown;
            fromPartial(object: {
                responseType?: string;
                metadataType?: string;
            }): _121.OperationInfo;
        };
    };
    const rpc: {
        Status: {
            encode(message: _124.Status, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _124.Status;
            fromJSON(object: any): _124.Status;
            toJSON(message: _124.Status): unknown;
            fromPartial(object: {
                code?: number;
                message?: string;
                details?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                }[];
            }): _124.Status;
        };
        ErrorInfo_MetadataEntry: {
            encode(message: _123.ErrorInfo_MetadataEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _123.ErrorInfo_MetadataEntry;
            fromJSON(object: any): _123.ErrorInfo_MetadataEntry;
            toJSON(message: _123.ErrorInfo_MetadataEntry): unknown;
            fromPartial(object: {
                key?: string;
                value?: string;
            }): _123.ErrorInfo_MetadataEntry;
        };
        ErrorInfo: {
            encode(message: _123.ErrorInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _123.ErrorInfo;
            fromJSON(object: any): _123.ErrorInfo;
            toJSON(message: _123.ErrorInfo): unknown;
            fromPartial(object: {
                reason?: string;
                domain?: string;
                metadata?: {
                    [x: string]: string;
                };
            }): _123.ErrorInfo;
        };
        RetryInfo: {
            encode(message: _123.RetryInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _123.RetryInfo;
            fromJSON(object: any): _123.RetryInfo;
            toJSON(message: _123.RetryInfo): unknown;
            fromPartial(object: {
                retryDelay?: {
                    seconds?: bigint;
                    nanos?: number;
                };
            }): _123.RetryInfo;
        };
        DebugInfo: {
            encode(message: _123.DebugInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _123.DebugInfo;
            fromJSON(object: any): _123.DebugInfo;
            toJSON(message: _123.DebugInfo): unknown;
            fromPartial(object: {
                stackEntries?: string[];
                detail?: string;
            }): _123.DebugInfo;
        };
        QuotaFailure: {
            encode(message: _123.QuotaFailure, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _123.QuotaFailure;
            fromJSON(object: any): _123.QuotaFailure;
            toJSON(message: _123.QuotaFailure): unknown;
            fromPartial(object: {
                violations?: {
                    subject?: string;
                    description?: string;
                }[];
            }): _123.QuotaFailure;
        };
        QuotaFailure_Violation: {
            encode(message: _123.QuotaFailure_Violation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _123.QuotaFailure_Violation;
            fromJSON(object: any): _123.QuotaFailure_Violation;
            toJSON(message: _123.QuotaFailure_Violation): unknown;
            fromPartial(object: {
                subject?: string;
                description?: string;
            }): _123.QuotaFailure_Violation;
        };
        PreconditionFailure: {
            encode(message: _123.PreconditionFailure, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _123.PreconditionFailure;
            fromJSON(object: any): _123.PreconditionFailure;
            toJSON(message: _123.PreconditionFailure): unknown;
            fromPartial(object: {
                violations?: {
                    type?: string;
                    subject?: string;
                    description?: string;
                }[];
            }): _123.PreconditionFailure;
        };
        PreconditionFailure_Violation: {
            encode(message: _123.PreconditionFailure_Violation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _123.PreconditionFailure_Violation;
            fromJSON(object: any): _123.PreconditionFailure_Violation;
            toJSON(message: _123.PreconditionFailure_Violation): unknown;
            fromPartial(object: {
                type?: string;
                subject?: string;
                description?: string;
            }): _123.PreconditionFailure_Violation;
        };
        BadRequest: {
            encode(message: _123.BadRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _123.BadRequest;
            fromJSON(object: any): _123.BadRequest;
            toJSON(message: _123.BadRequest): unknown;
            fromPartial(object: {
                fieldViolations?: {
                    field?: string;
                    description?: string;
                }[];
            }): _123.BadRequest;
        };
        BadRequest_FieldViolation: {
            encode(message: _123.BadRequest_FieldViolation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _123.BadRequest_FieldViolation;
            fromJSON(object: any): _123.BadRequest_FieldViolation;
            toJSON(message: _123.BadRequest_FieldViolation): unknown;
            fromPartial(object: {
                field?: string;
                description?: string;
            }): _123.BadRequest_FieldViolation;
        };
        RequestInfo: {
            encode(message: _123.RequestInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _123.RequestInfo;
            fromJSON(object: any): _123.RequestInfo;
            toJSON(message: _123.RequestInfo): unknown;
            fromPartial(object: {
                requestId?: string;
                servingData?: string;
            }): _123.RequestInfo;
        };
        ResourceInfo: {
            encode(message: _123.ResourceInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _123.ResourceInfo;
            fromJSON(object: any): _123.ResourceInfo;
            toJSON(message: _123.ResourceInfo): unknown;
            fromPartial(object: {
                resourceType?: string;
                resourceName?: string;
                owner?: string;
                description?: string;
            }): _123.ResourceInfo;
        };
        Help: {
            encode(message: _123.Help, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _123.Help;
            fromJSON(object: any): _123.Help;
            toJSON(message: _123.Help): unknown;
            fromPartial(object: {
                links?: {
                    description?: string;
                    url?: string;
                }[];
            }): _123.Help;
        };
        Help_Link: {
            encode(message: _123.Help_Link, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _123.Help_Link;
            fromJSON(object: any): _123.Help_Link;
            toJSON(message: _123.Help_Link): unknown;
            fromPartial(object: {
                description?: string;
                url?: string;
            }): _123.Help_Link;
        };
        LocalizedMessage: {
            encode(message: _123.LocalizedMessage, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _123.LocalizedMessage;
            fromJSON(object: any): _123.LocalizedMessage;
            toJSON(message: _123.LocalizedMessage): unknown;
            fromPartial(object: {
                locale?: string;
                message?: string;
            }): _123.LocalizedMessage;
        };
        codeFromJSON(object: any): _122.Code;
        codeToJSON(object: _122.Code): string;
        Code: typeof _122.Code;
    };
    const type: {
        TimeOfDay: {
            encode(message: _141.TimeOfDay, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _141.TimeOfDay;
            fromJSON(object: any): _141.TimeOfDay;
            toJSON(message: _141.TimeOfDay): unknown;
            fromPartial(object: {
                hours?: number;
                minutes?: number;
                seconds?: number;
                nanos?: number;
            }): _141.TimeOfDay;
        };
        Quaternion: {
            encode(message: _140.Quaternion, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _140.Quaternion;
            fromJSON(object: any): _140.Quaternion;
            toJSON(message: _140.Quaternion): unknown;
            fromPartial(object: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            }): _140.Quaternion;
        };
        PostalAddress: {
            encode(message: _139.PostalAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _139.PostalAddress;
            fromJSON(object: any): _139.PostalAddress;
            toJSON(message: _139.PostalAddress): unknown;
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
            }): _139.PostalAddress;
        };
        PhoneNumber: {
            encode(message: _138.PhoneNumber, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _138.PhoneNumber;
            fromJSON(object: any): _138.PhoneNumber;
            toJSON(message: _138.PhoneNumber): unknown;
            fromPartial(object: {
                e164Number?: string;
                shortCode?: {
                    regionCode?: string;
                    number?: string;
                };
                extension?: string;
            }): _138.PhoneNumber;
        };
        PhoneNumber_ShortCode: {
            encode(message: _138.PhoneNumber_ShortCode, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _138.PhoneNumber_ShortCode;
            fromJSON(object: any): _138.PhoneNumber_ShortCode;
            toJSON(message: _138.PhoneNumber_ShortCode): unknown;
            fromPartial(object: {
                regionCode?: string;
                number?: string;
            }): _138.PhoneNumber_ShortCode;
        };
        monthFromJSON(object: any): _137.Month;
        monthToJSON(object: _137.Month): string;
        Month: typeof _137.Month;
        Money: {
            encode(message: _136.Money, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _136.Money;
            fromJSON(object: any): _136.Money;
            toJSON(message: _136.Money): unknown;
            fromPartial(object: {
                currencyCode?: string;
                units?: bigint;
                nanos?: number;
            }): _136.Money;
        };
        LocalizedText: {
            encode(message: _135.LocalizedText, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _135.LocalizedText;
            fromJSON(object: any): _135.LocalizedText;
            toJSON(message: _135.LocalizedText): unknown;
            fromPartial(object: {
                text?: string;
                languageCode?: string;
            }): _135.LocalizedText;
        };
        LatLng: {
            encode(message: _134.LatLng, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _134.LatLng;
            fromJSON(object: any): _134.LatLng;
            toJSON(message: _134.LatLng): unknown;
            fromPartial(object: {
                latitude?: number;
                longitude?: number;
            }): _134.LatLng;
        };
        Interval: {
            encode(message: _133.Interval, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.Interval;
            fromJSON(object: any): _133.Interval;
            toJSON(message: _133.Interval): unknown;
            fromPartial(object: {
                startTime?: {
                    seconds?: bigint;
                    nanos?: number;
                };
                endTime?: {
                    seconds?: bigint;
                    nanos?: number;
                };
            }): _133.Interval;
        };
        Fraction: {
            encode(message: _132.Fraction, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _132.Fraction;
            fromJSON(object: any): _132.Fraction;
            toJSON(message: _132.Fraction): unknown;
            fromPartial(object: {
                numerator?: bigint;
                denominator?: bigint;
            }): _132.Fraction;
        };
        Expr: {
            encode(message: _131.Expr, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _131.Expr;
            fromJSON(object: any): _131.Expr;
            toJSON(message: _131.Expr): unknown;
            fromPartial(object: {
                expression?: string;
                title?: string;
                description?: string;
                location?: string;
            }): _131.Expr;
        };
        Decimal: {
            encode(message: _130.Decimal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _130.Decimal;
            fromJSON(object: any): _130.Decimal;
            toJSON(message: _130.Decimal): unknown;
            fromPartial(object: {
                value?: string;
            }): _130.Decimal;
        };
        dayOfWeekFromJSON(object: any): _129.DayOfWeek;
        dayOfWeekToJSON(object: _129.DayOfWeek): string;
        DayOfWeek: typeof _129.DayOfWeek;
        DateTime: {
            encode(message: _128.DateTime, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _128.DateTime;
            fromJSON(object: any): _128.DateTime;
            toJSON(message: _128.DateTime): unknown;
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
            }): _128.DateTime;
        };
        TimeZone: {
            encode(message: _128.TimeZone, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _128.TimeZone;
            fromJSON(object: any): _128.TimeZone;
            toJSON(message: _128.TimeZone): unknown;
            fromPartial(object: {
                id?: string;
                version?: string;
            }): _128.TimeZone;
        };
        Date: {
            encode(message: _127.Date, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _127.Date;
            fromJSON(object: any): _127.Date;
            toJSON(message: _127.Date): unknown;
            fromPartial(object: {
                year?: number;
                month?: number;
                day?: number;
            }): _127.Date;
        };
        Color: {
            encode(message: _126.Color, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _126.Color;
            fromJSON(object: any): _126.Color;
            toJSON(message: _126.Color): unknown;
            fromPartial(object: {
                red?: number;
                green?: number;
                blue?: number;
                alpha?: {
                    value?: number;
                };
            }): _126.Color;
        };
        calendarPeriodFromJSON(object: any): _125.CalendarPeriod;
        calendarPeriodToJSON(object: _125.CalendarPeriod): string;
        CalendarPeriod: typeof _125.CalendarPeriod;
    };
    const protobuf: {
        DoubleValue: {
            encode(message: _148.DoubleValue, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _148.DoubleValue;
            fromJSON(object: any): _148.DoubleValue;
            toJSON(message: _148.DoubleValue): unknown;
            fromPartial(object: {
                value?: number;
            }): _148.DoubleValue;
        };
        FloatValue: {
            encode(message: _148.FloatValue, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _148.FloatValue;
            fromJSON(object: any): _148.FloatValue;
            toJSON(message: _148.FloatValue): unknown;
            fromPartial(object: {
                value?: number;
            }): _148.FloatValue;
        };
        Int64Value: {
            encode(message: _148.Int64Value, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _148.Int64Value;
            fromJSON(object: any): _148.Int64Value;
            toJSON(message: _148.Int64Value): unknown;
            fromPartial(object: {
                value?: bigint;
            }): _148.Int64Value;
        };
        UInt64Value: {
            encode(message: _148.UInt64Value, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _148.UInt64Value;
            fromJSON(object: any): _148.UInt64Value;
            toJSON(message: _148.UInt64Value): unknown;
            fromPartial(object: {
                value?: bigint;
            }): _148.UInt64Value;
        };
        Int32Value: {
            encode(message: _148.Int32Value, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _148.Int32Value;
            fromJSON(object: any): _148.Int32Value;
            toJSON(message: _148.Int32Value): unknown;
            fromPartial(object: {
                value?: number;
            }): _148.Int32Value;
        };
        UInt32Value: {
            encode(message: _148.UInt32Value, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _148.UInt32Value;
            fromJSON(object: any): _148.UInt32Value;
            toJSON(message: _148.UInt32Value): unknown;
            fromPartial(object: {
                value?: number;
            }): _148.UInt32Value;
        };
        BoolValue: {
            encode(message: _148.BoolValue, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _148.BoolValue;
            fromJSON(object: any): _148.BoolValue;
            toJSON(message: _148.BoolValue): unknown;
            fromPartial(object: {
                value?: boolean;
            }): _148.BoolValue;
        };
        StringValue: {
            encode(message: _148.StringValue, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _148.StringValue;
            fromJSON(object: any): _148.StringValue;
            toJSON(message: _148.StringValue): unknown;
            fromPartial(object: {
                value?: string;
            }): _148.StringValue;
        };
        BytesValue: {
            encode(message: _148.BytesValue, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _148.BytesValue;
            fromJSON(object: any): _148.BytesValue;
            toJSON(message: _148.BytesValue): unknown;
            fromPartial(object: {
                value?: Uint8Array;
            }): _148.BytesValue;
        };
        nullValueFromJSON(object: any): _147.NullValue;
        nullValueToJSON(object: _147.NullValue): string;
        NullValue: typeof _147.NullValue;
        Struct_FieldsEntry: {
            encode(message: _147.Struct_FieldsEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _147.Struct_FieldsEntry;
            fromJSON(object: any): _147.Struct_FieldsEntry;
            toJSON(message: _147.Struct_FieldsEntry): unknown;
            fromPartial(object: {
                key?: string;
                value?: {
                    nullValue?: _147.NullValue;
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
            }): _147.Struct_FieldsEntry;
        };
        Struct: {
            encode(message: _147.Struct, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _147.Struct;
            fromJSON(object: any): _147.Struct;
            toJSON(message: _147.Struct): unknown;
            fromPartial(object: {
                fields?: {
                    [x: string]: {
                        nullValue?: _147.NullValue;
                        numberValue?: number;
                        stringValue?: string;
                        boolValue?: boolean;
                        structValue?: any;
                        listValue?: {
                            values?: any[];
                        };
                    };
                };
            }): _147.Struct;
        };
        Value: {
            encode(message: _147.Value, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _147.Value;
            fromJSON(object: any): _147.Value;
            toJSON(message: _147.Value): unknown;
            fromPartial(object: {
                nullValue?: _147.NullValue;
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
            }): _147.Value;
        };
        ListValue: {
            encode(message: _147.ListValue, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _147.ListValue;
            fromJSON(object: any): _147.ListValue;
            toJSON(message: _147.ListValue): unknown;
            fromPartial(object: {
                values?: {
                    nullValue?: _147.NullValue;
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
            }): _147.ListValue;
        };
        Empty: {
            encode(_: _146.Empty, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _146.Empty;
            fromJSON(_: any): _146.Empty;
            toJSON(_: _146.Empty): unknown;
            fromPartial(_: {}): _146.Empty;
        };
        Any: {
            encode(message: _145.Any, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _145.Any;
            fromJSON(object: any): _145.Any;
            toJSON(message: _145.Any): unknown;
            fromPartial(object: {
                typeUrl?: string;
                value?: Uint8Array;
            }): _145.Any;
        };
        Timestamp: {
            encode(message: _144.Timestamp, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _144.Timestamp;
            fromJSON(object: any): _144.Timestamp;
            toJSON(message: _144.Timestamp): unknown;
            fromPartial(object: {
                seconds?: bigint;
                nanos?: number;
            }): _144.Timestamp;
        };
        Duration: {
            encode(message: _143.Duration, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _143.Duration;
            fromJSON(object: any): _143.Duration;
            toJSON(message: _143.Duration): unknown;
            fromPartial(object: {
                seconds?: bigint;
                nanos?: number;
            }): _143.Duration;
        };
        fieldDescriptorProto_TypeFromJSON(object: any): _142.FieldDescriptorProto_Type;
        fieldDescriptorProto_TypeToJSON(object: _142.FieldDescriptorProto_Type): string;
        fieldDescriptorProto_LabelFromJSON(object: any): _142.FieldDescriptorProto_Label;
        fieldDescriptorProto_LabelToJSON(object: _142.FieldDescriptorProto_Label): string;
        fileOptions_OptimizeModeFromJSON(object: any): _142.FileOptions_OptimizeMode;
        fileOptions_OptimizeModeToJSON(object: _142.FileOptions_OptimizeMode): string;
        fieldOptions_CTypeFromJSON(object: any): _142.FieldOptions_CType;
        fieldOptions_CTypeToJSON(object: _142.FieldOptions_CType): string;
        fieldOptions_JSTypeFromJSON(object: any): _142.FieldOptions_JSType;
        fieldOptions_JSTypeToJSON(object: _142.FieldOptions_JSType): string;
        methodOptions_IdempotencyLevelFromJSON(object: any): _142.MethodOptions_IdempotencyLevel;
        methodOptions_IdempotencyLevelToJSON(object: _142.MethodOptions_IdempotencyLevel): string;
        FieldDescriptorProto_Type: typeof _142.FieldDescriptorProto_Type;
        FieldDescriptorProto_Label: typeof _142.FieldDescriptorProto_Label;
        FileOptions_OptimizeMode: typeof _142.FileOptions_OptimizeMode;
        FieldOptions_CType: typeof _142.FieldOptions_CType;
        FieldOptions_JSType: typeof _142.FieldOptions_JSType;
        MethodOptions_IdempotencyLevel: typeof _142.MethodOptions_IdempotencyLevel;
        FileDescriptorSet: {
            encode(message: _142.FileDescriptorSet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _142.FileDescriptorSet;
            fromJSON(object: any): _142.FileDescriptorSet;
            toJSON(message: _142.FileDescriptorSet): unknown;
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
                            label?: _142.FieldDescriptorProto_Label;
                            type?: _142.FieldDescriptorProto_Type;
                            typeName?: string;
                            extendee?: string;
                            defaultValue?: string;
                            oneofIndex?: number;
                            jsonName?: string;
                            options?: {
                                ctype?: _142.FieldOptions_CType;
                                packed?: boolean;
                                jstype?: _142.FieldOptions_JSType;
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
                            label?: _142.FieldDescriptorProto_Label;
                            type?: _142.FieldDescriptorProto_Type;
                            typeName?: string;
                            extendee?: string;
                            defaultValue?: string;
                            oneofIndex?: number;
                            jsonName?: string;
                            options?: {
                                ctype?: _142.FieldOptions_CType;
                                packed?: boolean;
                                jstype?: _142.FieldOptions_JSType;
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
                                idempotencyLevel?: _142.MethodOptions_IdempotencyLevel;
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
                        label?: _142.FieldDescriptorProto_Label;
                        type?: _142.FieldDescriptorProto_Type;
                        typeName?: string;
                        extendee?: string;
                        defaultValue?: string;
                        oneofIndex?: number;
                        jsonName?: string;
                        options?: {
                            ctype?: _142.FieldOptions_CType;
                            packed?: boolean;
                            jstype?: _142.FieldOptions_JSType;
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
                        optimizeFor?: _142.FileOptions_OptimizeMode;
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
            }): _142.FileDescriptorSet;
        };
        FileDescriptorProto: {
            encode(message: _142.FileDescriptorProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _142.FileDescriptorProto;
            fromJSON(object: any): _142.FileDescriptorProto;
            toJSON(message: _142.FileDescriptorProto): unknown;
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
                        label?: _142.FieldDescriptorProto_Label;
                        type?: _142.FieldDescriptorProto_Type;
                        typeName?: string;
                        extendee?: string;
                        defaultValue?: string;
                        oneofIndex?: number;
                        jsonName?: string;
                        options?: {
                            ctype?: _142.FieldOptions_CType;
                            packed?: boolean;
                            jstype?: _142.FieldOptions_JSType;
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
                        label?: _142.FieldDescriptorProto_Label;
                        type?: _142.FieldDescriptorProto_Type;
                        typeName?: string;
                        extendee?: string;
                        defaultValue?: string;
                        oneofIndex?: number;
                        jsonName?: string;
                        options?: {
                            ctype?: _142.FieldOptions_CType;
                            packed?: boolean;
                            jstype?: _142.FieldOptions_JSType;
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
                            idempotencyLevel?: _142.MethodOptions_IdempotencyLevel;
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
                    label?: _142.FieldDescriptorProto_Label;
                    type?: _142.FieldDescriptorProto_Type;
                    typeName?: string;
                    extendee?: string;
                    defaultValue?: string;
                    oneofIndex?: number;
                    jsonName?: string;
                    options?: {
                        ctype?: _142.FieldOptions_CType;
                        packed?: boolean;
                        jstype?: _142.FieldOptions_JSType;
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
                    optimizeFor?: _142.FileOptions_OptimizeMode;
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
            }): _142.FileDescriptorProto;
        };
        DescriptorProto: {
            encode(message: _142.DescriptorProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _142.DescriptorProto;
            fromJSON(object: any): _142.DescriptorProto;
            toJSON(message: _142.DescriptorProto): unknown;
            fromPartial(object: {
                name?: string;
                field?: {
                    name?: string;
                    number?: number;
                    label?: _142.FieldDescriptorProto_Label;
                    type?: _142.FieldDescriptorProto_Type;
                    typeName?: string;
                    extendee?: string;
                    defaultValue?: string;
                    oneofIndex?: number;
                    jsonName?: string;
                    options?: {
                        ctype?: _142.FieldOptions_CType;
                        packed?: boolean;
                        jstype?: _142.FieldOptions_JSType;
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
                    label?: _142.FieldDescriptorProto_Label;
                    type?: _142.FieldDescriptorProto_Type;
                    typeName?: string;
                    extendee?: string;
                    defaultValue?: string;
                    oneofIndex?: number;
                    jsonName?: string;
                    options?: {
                        ctype?: _142.FieldOptions_CType;
                        packed?: boolean;
                        jstype?: _142.FieldOptions_JSType;
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
            }): _142.DescriptorProto;
        };
        DescriptorProto_ExtensionRange: {
            encode(message: _142.DescriptorProto_ExtensionRange, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _142.DescriptorProto_ExtensionRange;
            fromJSON(object: any): _142.DescriptorProto_ExtensionRange;
            toJSON(message: _142.DescriptorProto_ExtensionRange): unknown;
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
            }): _142.DescriptorProto_ExtensionRange;
        };
        DescriptorProto_ReservedRange: {
            encode(message: _142.DescriptorProto_ReservedRange, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _142.DescriptorProto_ReservedRange;
            fromJSON(object: any): _142.DescriptorProto_ReservedRange;
            toJSON(message: _142.DescriptorProto_ReservedRange): unknown;
            fromPartial(object: {
                start?: number;
                end?: number;
            }): _142.DescriptorProto_ReservedRange;
        };
        ExtensionRangeOptions: {
            encode(message: _142.ExtensionRangeOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _142.ExtensionRangeOptions;
            fromJSON(object: any): _142.ExtensionRangeOptions;
            toJSON(message: _142.ExtensionRangeOptions): unknown;
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
            }): _142.ExtensionRangeOptions;
        };
        FieldDescriptorProto: {
            encode(message: _142.FieldDescriptorProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _142.FieldDescriptorProto;
            fromJSON(object: any): _142.FieldDescriptorProto;
            toJSON(message: _142.FieldDescriptorProto): unknown;
            fromPartial(object: {
                name?: string;
                number?: number;
                label?: _142.FieldDescriptorProto_Label;
                type?: _142.FieldDescriptorProto_Type;
                typeName?: string;
                extendee?: string;
                defaultValue?: string;
                oneofIndex?: number;
                jsonName?: string;
                options?: {
                    ctype?: _142.FieldOptions_CType;
                    packed?: boolean;
                    jstype?: _142.FieldOptions_JSType;
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
            }): _142.FieldDescriptorProto;
        };
        OneofDescriptorProto: {
            encode(message: _142.OneofDescriptorProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _142.OneofDescriptorProto;
            fromJSON(object: any): _142.OneofDescriptorProto;
            toJSON(message: _142.OneofDescriptorProto): unknown;
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
            }): _142.OneofDescriptorProto;
        };
        EnumDescriptorProto: {
            encode(message: _142.EnumDescriptorProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _142.EnumDescriptorProto;
            fromJSON(object: any): _142.EnumDescriptorProto;
            toJSON(message: _142.EnumDescriptorProto): unknown;
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
            }): _142.EnumDescriptorProto;
        };
        EnumDescriptorProto_EnumReservedRange: {
            encode(message: _142.EnumDescriptorProto_EnumReservedRange, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _142.EnumDescriptorProto_EnumReservedRange;
            fromJSON(object: any): _142.EnumDescriptorProto_EnumReservedRange;
            toJSON(message: _142.EnumDescriptorProto_EnumReservedRange): unknown;
            fromPartial(object: {
                start?: number;
                end?: number;
            }): _142.EnumDescriptorProto_EnumReservedRange;
        };
        EnumValueDescriptorProto: {
            encode(message: _142.EnumValueDescriptorProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _142.EnumValueDescriptorProto;
            fromJSON(object: any): _142.EnumValueDescriptorProto;
            toJSON(message: _142.EnumValueDescriptorProto): unknown;
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
            }): _142.EnumValueDescriptorProto;
        };
        ServiceDescriptorProto: {
            encode(message: _142.ServiceDescriptorProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _142.ServiceDescriptorProto;
            fromJSON(object: any): _142.ServiceDescriptorProto;
            toJSON(message: _142.ServiceDescriptorProto): unknown;
            fromPartial(object: {
                name?: string;
                method?: {
                    name?: string;
                    inputType?: string;
                    outputType?: string;
                    options?: {
                        deprecated?: boolean;
                        idempotencyLevel?: _142.MethodOptions_IdempotencyLevel;
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
            }): _142.ServiceDescriptorProto;
        };
        MethodDescriptorProto: {
            encode(message: _142.MethodDescriptorProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _142.MethodDescriptorProto;
            fromJSON(object: any): _142.MethodDescriptorProto;
            toJSON(message: _142.MethodDescriptorProto): unknown;
            fromPartial(object: {
                name?: string;
                inputType?: string;
                outputType?: string;
                options?: {
                    deprecated?: boolean;
                    idempotencyLevel?: _142.MethodOptions_IdempotencyLevel;
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
            }): _142.MethodDescriptorProto;
        };
        FileOptions: {
            encode(message: _142.FileOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _142.FileOptions;
            fromJSON(object: any): _142.FileOptions;
            toJSON(message: _142.FileOptions): unknown;
            fromPartial(object: {
                javaPackage?: string;
                javaOuterClassname?: string;
                javaMultipleFiles?: boolean;
                javaGenerateEqualsAndHash?: boolean;
                javaStringCheckUtf8?: boolean;
                optimizeFor?: _142.FileOptions_OptimizeMode;
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
            }): _142.FileOptions;
        };
        MessageOptions: {
            encode(message: _142.MessageOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _142.MessageOptions;
            fromJSON(object: any): _142.MessageOptions;
            toJSON(message: _142.MessageOptions): unknown;
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
            }): _142.MessageOptions;
        };
        FieldOptions: {
            encode(message: _142.FieldOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _142.FieldOptions;
            fromJSON(object: any): _142.FieldOptions;
            toJSON(message: _142.FieldOptions): unknown;
            fromPartial(object: {
                ctype?: _142.FieldOptions_CType;
                packed?: boolean;
                jstype?: _142.FieldOptions_JSType;
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
            }): _142.FieldOptions;
        };
        OneofOptions: {
            encode(message: _142.OneofOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _142.OneofOptions;
            fromJSON(object: any): _142.OneofOptions;
            toJSON(message: _142.OneofOptions): unknown;
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
            }): _142.OneofOptions;
        };
        EnumOptions: {
            encode(message: _142.EnumOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _142.EnumOptions;
            fromJSON(object: any): _142.EnumOptions;
            toJSON(message: _142.EnumOptions): unknown;
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
            }): _142.EnumOptions;
        };
        EnumValueOptions: {
            encode(message: _142.EnumValueOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _142.EnumValueOptions;
            fromJSON(object: any): _142.EnumValueOptions;
            toJSON(message: _142.EnumValueOptions): unknown;
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
            }): _142.EnumValueOptions;
        };
        ServiceOptions: {
            encode(message: _142.ServiceOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _142.ServiceOptions;
            fromJSON(object: any): _142.ServiceOptions;
            toJSON(message: _142.ServiceOptions): unknown;
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
            }): _142.ServiceOptions;
        };
        MethodOptions: {
            encode(message: _142.MethodOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _142.MethodOptions;
            fromJSON(object: any): _142.MethodOptions;
            toJSON(message: _142.MethodOptions): unknown;
            fromPartial(object: {
                deprecated?: boolean;
                idempotencyLevel?: _142.MethodOptions_IdempotencyLevel;
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
            }): _142.MethodOptions;
        };
        UninterpretedOption: {
            encode(message: _142.UninterpretedOption, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _142.UninterpretedOption;
            fromJSON(object: any): _142.UninterpretedOption;
            toJSON(message: _142.UninterpretedOption): unknown;
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
            }): _142.UninterpretedOption;
        };
        UninterpretedOption_NamePart: {
            encode(message: _142.UninterpretedOption_NamePart, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _142.UninterpretedOption_NamePart;
            fromJSON(object: any): _142.UninterpretedOption_NamePart;
            toJSON(message: _142.UninterpretedOption_NamePart): unknown;
            fromPartial(object: {
                namePart?: string;
                isExtension?: boolean;
            }): _142.UninterpretedOption_NamePart;
        };
        SourceCodeInfo: {
            encode(message: _142.SourceCodeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _142.SourceCodeInfo;
            fromJSON(object: any): _142.SourceCodeInfo;
            toJSON(message: _142.SourceCodeInfo): unknown;
            fromPartial(object: {
                location?: {
                    path?: number[];
                    span?: number[];
                    leadingComments?: string;
                    trailingComments?: string;
                    leadingDetachedComments?: string[];
                }[];
            }): _142.SourceCodeInfo;
        };
        SourceCodeInfo_Location: {
            encode(message: _142.SourceCodeInfo_Location, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _142.SourceCodeInfo_Location;
            fromJSON(object: any): _142.SourceCodeInfo_Location;
            toJSON(message: _142.SourceCodeInfo_Location): unknown;
            fromPartial(object: {
                path?: number[];
                span?: number[];
                leadingComments?: string;
                trailingComments?: string;
                leadingDetachedComments?: string[];
            }): _142.SourceCodeInfo_Location;
        };
        GeneratedCodeInfo: {
            encode(message: _142.GeneratedCodeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _142.GeneratedCodeInfo;
            fromJSON(object: any): _142.GeneratedCodeInfo;
            toJSON(message: _142.GeneratedCodeInfo): unknown;
            fromPartial(object: {
                annotation?: {
                    path?: number[];
                    sourceFile?: string;
                    begin?: number;
                    end?: number;
                }[];
            }): _142.GeneratedCodeInfo;
        };
        GeneratedCodeInfo_Annotation: {
            encode(message: _142.GeneratedCodeInfo_Annotation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _142.GeneratedCodeInfo_Annotation;
            fromJSON(object: any): _142.GeneratedCodeInfo_Annotation;
            toJSON(message: _142.GeneratedCodeInfo_Annotation): unknown;
            fromPartial(object: {
                path?: number[];
                sourceFile?: string;
                begin?: number;
                end?: number;
            }): _142.GeneratedCodeInfo_Annotation;
        };
    };
}
