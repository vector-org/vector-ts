import * as _110 from "./api/expr/v1alpha1/checked";
import * as _111 from "./api/expr/v1alpha1/eval";
import * as _112 from "./api/expr/v1alpha1/explain";
import * as _113 from "./api/expr/v1alpha1/syntax";
import * as _114 from "./api/expr/v1alpha1/value";
import * as _115 from "./api/expr/v1beta1/decl";
import * as _116 from "./api/expr/v1beta1/eval";
import * as _117 from "./api/expr/v1beta1/expr";
import * as _118 from "./api/expr/v1beta1/source";
import * as _119 from "./api/expr/v1beta1/value";
import * as _120 from "./bytestream/bytestream";
import * as _121 from "./geo/type/viewport";
import * as _122 from "./longrunning/operations";
import * as _123 from "./rpc/code";
import * as _124 from "./rpc/error_details";
import * as _125 from "./rpc/status";
import * as _126 from "./type/calendar_period";
import * as _127 from "./type/color";
import * as _128 from "./type/date";
import * as _129 from "./type/datetime";
import * as _130 from "./type/dayofweek";
import * as _131 from "./type/decimal";
import * as _132 from "./type/expr";
import * as _133 from "./type/fraction";
import * as _134 from "./type/interval";
import * as _135 from "./type/latlng";
import * as _136 from "./type/localized_text";
import * as _137 from "./type/money";
import * as _138 from "./type/month";
import * as _139 from "./type/phone_number";
import * as _140 from "./type/postal_address";
import * as _141 from "./type/quaternion";
import * as _142 from "./type/timeofday";
import * as _143 from "./protobuf/descriptor";
import * as _144 from "./protobuf/duration";
import * as _145 from "./protobuf/timestamp";
import * as _146 from "./protobuf/any";
import * as _147 from "./protobuf/empty";
import * as _148 from "./protobuf/struct";
import * as _149 from "./protobuf/wrappers";
export declare namespace google {
    namespace api {
        namespace expr {
            const v1alpha1: {
                Value: {
                    encode(message: _114.Value, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _114.Value;
                    fromJSON(object: any): _114.Value;
                    toJSON(message: _114.Value): unknown;
                    fromPartial(object: {
                        nullValue?: _148.NullValue;
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
                    }): _114.Value;
                };
                EnumValue: {
                    encode(message: _114.EnumValue, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _114.EnumValue;
                    fromJSON(object: any): _114.EnumValue;
                    toJSON(message: _114.EnumValue): unknown;
                    fromPartial(object: {
                        type?: string;
                        value?: number;
                    }): _114.EnumValue;
                };
                ListValue: {
                    encode(message: _114.ListValue, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _114.ListValue;
                    fromJSON(object: any): _114.ListValue;
                    toJSON(message: _114.ListValue): unknown;
                    fromPartial(object: {
                        values?: {
                            nullValue?: _148.NullValue;
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
                    }): _114.ListValue;
                };
                MapValue: {
                    encode(message: _114.MapValue, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _114.MapValue;
                    fromJSON(object: any): _114.MapValue;
                    toJSON(message: _114.MapValue): unknown;
                    fromPartial(object: {
                        entries?: {
                            key?: {
                                nullValue?: _148.NullValue;
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
                                nullValue?: _148.NullValue;
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
                    }): _114.MapValue;
                };
                MapValue_Entry: {
                    encode(message: _114.MapValue_Entry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _114.MapValue_Entry;
                    fromJSON(object: any): _114.MapValue_Entry;
                    toJSON(message: _114.MapValue_Entry): unknown;
                    fromPartial(object: {
                        key?: {
                            nullValue?: _148.NullValue;
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
                            nullValue?: _148.NullValue;
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
                    }): _114.MapValue_Entry;
                };
                ParsedExpr: {
                    encode(message: _113.ParsedExpr, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _113.ParsedExpr;
                    fromJSON(object: any): _113.ParsedExpr;
                    toJSON(message: _113.ParsedExpr): unknown;
                    fromPartial(object: {
                        expr?: {
                            id?: bigint;
                            constExpr?: {
                                nullValue?: _148.NullValue;
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
                    }): _113.ParsedExpr;
                };
                Expr: {
                    encode(message: _113.Expr, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _113.Expr;
                    fromJSON(object: any): _113.Expr;
                    toJSON(message: _113.Expr): unknown;
                    fromPartial(object: {
                        id?: bigint;
                        constExpr?: {
                            nullValue?: _148.NullValue;
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
                    }): _113.Expr;
                };
                Expr_Ident: {
                    encode(message: _113.Expr_Ident, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _113.Expr_Ident;
                    fromJSON(object: any): _113.Expr_Ident;
                    toJSON(message: _113.Expr_Ident): unknown;
                    fromPartial(object: {
                        name?: string;
                    }): _113.Expr_Ident;
                };
                Expr_Select: {
                    encode(message: _113.Expr_Select, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _113.Expr_Select;
                    fromJSON(object: any): _113.Expr_Select;
                    toJSON(message: _113.Expr_Select): unknown;
                    fromPartial(object: {
                        operand?: {
                            id?: bigint;
                            constExpr?: {
                                nullValue?: _148.NullValue;
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
                    }): _113.Expr_Select;
                };
                Expr_Call: {
                    encode(message: _113.Expr_Call, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _113.Expr_Call;
                    fromJSON(object: any): _113.Expr_Call;
                    toJSON(message: _113.Expr_Call): unknown;
                    fromPartial(object: {
                        target?: {
                            id?: bigint;
                            constExpr?: {
                                nullValue?: _148.NullValue;
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
                                nullValue?: _148.NullValue;
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
                    }): _113.Expr_Call;
                };
                Expr_CreateList: {
                    encode(message: _113.Expr_CreateList, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _113.Expr_CreateList;
                    fromJSON(object: any): _113.Expr_CreateList;
                    toJSON(message: _113.Expr_CreateList): unknown;
                    fromPartial(object: {
                        elements?: {
                            id?: bigint;
                            constExpr?: {
                                nullValue?: _148.NullValue;
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
                    }): _113.Expr_CreateList;
                };
                Expr_CreateStruct: {
                    encode(message: _113.Expr_CreateStruct, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _113.Expr_CreateStruct;
                    fromJSON(object: any): _113.Expr_CreateStruct;
                    toJSON(message: _113.Expr_CreateStruct): unknown;
                    fromPartial(object: {
                        messageName?: string;
                        entries?: {
                            id?: bigint;
                            fieldKey?: string;
                            mapKey?: {
                                id?: bigint;
                                constExpr?: {
                                    nullValue?: _148.NullValue;
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
                                    nullValue?: _148.NullValue;
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
                    }): _113.Expr_CreateStruct;
                };
                Expr_CreateStruct_Entry: {
                    encode(message: _113.Expr_CreateStruct_Entry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _113.Expr_CreateStruct_Entry;
                    fromJSON(object: any): _113.Expr_CreateStruct_Entry;
                    toJSON(message: _113.Expr_CreateStruct_Entry): unknown;
                    fromPartial(object: {
                        id?: bigint;
                        fieldKey?: string;
                        mapKey?: {
                            id?: bigint;
                            constExpr?: {
                                nullValue?: _148.NullValue;
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
                                nullValue?: _148.NullValue;
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
                    }): _113.Expr_CreateStruct_Entry;
                };
                Expr_Comprehension: {
                    encode(message: _113.Expr_Comprehension, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _113.Expr_Comprehension;
                    fromJSON(object: any): _113.Expr_Comprehension;
                    toJSON(message: _113.Expr_Comprehension): unknown;
                    fromPartial(object: {
                        iterVar?: string;
                        iterRange?: {
                            id?: bigint;
                            constExpr?: {
                                nullValue?: _148.NullValue;
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
                                nullValue?: _148.NullValue;
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
                                nullValue?: _148.NullValue;
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
                                nullValue?: _148.NullValue;
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
                                nullValue?: _148.NullValue;
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
                    }): _113.Expr_Comprehension;
                };
                Constant: {
                    encode(message: _113.Constant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _113.Constant;
                    fromJSON(object: any): _113.Constant;
                    toJSON(message: _113.Constant): unknown;
                    fromPartial(object: {
                        nullValue?: _148.NullValue;
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
                    }): _113.Constant;
                };
                SourceInfo_PositionsEntry: {
                    encode(message: _113.SourceInfo_PositionsEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _113.SourceInfo_PositionsEntry;
                    fromJSON(object: any): _113.SourceInfo_PositionsEntry;
                    toJSON(message: _113.SourceInfo_PositionsEntry): unknown;
                    fromPartial(object: {
                        key?: bigint;
                        value?: number;
                    }): _113.SourceInfo_PositionsEntry;
                };
                SourceInfo_MacroCallsEntry: {
                    encode(message: _113.SourceInfo_MacroCallsEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _113.SourceInfo_MacroCallsEntry;
                    fromJSON(object: any): _113.SourceInfo_MacroCallsEntry;
                    toJSON(message: _113.SourceInfo_MacroCallsEntry): unknown;
                    fromPartial(object: {
                        key?: bigint;
                        value?: {
                            id?: bigint;
                            constExpr?: {
                                nullValue?: _148.NullValue;
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
                    }): _113.SourceInfo_MacroCallsEntry;
                };
                SourceInfo: {
                    encode(message: _113.SourceInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _113.SourceInfo;
                    fromJSON(object: any): _113.SourceInfo;
                    toJSON(message: _113.SourceInfo): unknown;
                    fromPartial(object: {
                        syntaxVersion?: string;
                        location?: string;
                        lineOffsets?: number[];
                        positions?: {};
                        macroCalls?: {};
                    }): _113.SourceInfo;
                };
                SourcePosition: {
                    encode(message: _113.SourcePosition, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _113.SourcePosition;
                    fromJSON(object: any): _113.SourcePosition;
                    toJSON(message: _113.SourcePosition): unknown;
                    fromPartial(object: {
                        location?: string;
                        offset?: number;
                        line?: number;
                        column?: number;
                    }): _113.SourcePosition;
                };
                Explain: {
                    encode(message: _112.Explain, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _112.Explain;
                    fromJSON(object: any): _112.Explain;
                    toJSON(message: _112.Explain): unknown;
                    fromPartial(object: {
                        values?: {
                            nullValue?: _148.NullValue;
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
                    }): _112.Explain;
                };
                Explain_ExprStep: {
                    encode(message: _112.Explain_ExprStep, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _112.Explain_ExprStep;
                    fromJSON(object: any): _112.Explain_ExprStep;
                    toJSON(message: _112.Explain_ExprStep): unknown;
                    fromPartial(object: {
                        id?: bigint;
                        valueIndex?: number;
                    }): _112.Explain_ExprStep;
                };
                EvalState: {
                    encode(message: _111.EvalState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _111.EvalState;
                    fromJSON(object: any): _111.EvalState;
                    toJSON(message: _111.EvalState): unknown;
                    fromPartial(object: {
                        values?: {
                            value?: {
                                nullValue?: _148.NullValue;
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
                    }): _111.EvalState;
                };
                EvalState_Result: {
                    encode(message: _111.EvalState_Result, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _111.EvalState_Result;
                    fromJSON(object: any): _111.EvalState_Result;
                    toJSON(message: _111.EvalState_Result): unknown;
                    fromPartial(object: {
                        expr?: bigint;
                        value?: bigint;
                    }): _111.EvalState_Result;
                };
                ExprValue: {
                    encode(message: _111.ExprValue, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _111.ExprValue;
                    fromJSON(object: any): _111.ExprValue;
                    toJSON(message: _111.ExprValue): unknown;
                    fromPartial(object: {
                        value?: {
                            nullValue?: _148.NullValue;
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
                    }): _111.ExprValue;
                };
                ErrorSet: {
                    encode(message: _111.ErrorSet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _111.ErrorSet;
                    fromJSON(object: any): _111.ErrorSet;
                    toJSON(message: _111.ErrorSet): unknown;
                    fromPartial(object: {
                        errors?: {
                            code?: number;
                            message?: string;
                            details?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                        }[];
                    }): _111.ErrorSet;
                };
                UnknownSet: {
                    encode(message: _111.UnknownSet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _111.UnknownSet;
                    fromJSON(object: any): _111.UnknownSet;
                    toJSON(message: _111.UnknownSet): unknown;
                    fromPartial(object: {
                        exprs?: bigint[];
                    }): _111.UnknownSet;
                };
                type_PrimitiveTypeFromJSON(object: any): _110.Type_PrimitiveType;
                type_PrimitiveTypeToJSON(object: _110.Type_PrimitiveType): string;
                type_WellKnownTypeFromJSON(object: any): _110.Type_WellKnownType;
                type_WellKnownTypeToJSON(object: _110.Type_WellKnownType): string;
                Type_PrimitiveType: typeof _110.Type_PrimitiveType;
                Type_WellKnownType: typeof _110.Type_WellKnownType;
                CheckedExpr_ReferenceMapEntry: {
                    encode(message: _110.CheckedExpr_ReferenceMapEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _110.CheckedExpr_ReferenceMapEntry;
                    fromJSON(object: any): _110.CheckedExpr_ReferenceMapEntry;
                    toJSON(message: _110.CheckedExpr_ReferenceMapEntry): unknown;
                    fromPartial(object: {
                        key?: bigint;
                        value?: {
                            name?: string;
                            overloadId?: string[];
                            value?: {
                                nullValue?: _148.NullValue;
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
                    }): _110.CheckedExpr_ReferenceMapEntry;
                };
                CheckedExpr_TypeMapEntry: {
                    encode(message: _110.CheckedExpr_TypeMapEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _110.CheckedExpr_TypeMapEntry;
                    fromJSON(object: any): _110.CheckedExpr_TypeMapEntry;
                    toJSON(message: _110.CheckedExpr_TypeMapEntry): unknown;
                    fromPartial(object: {
                        key?: bigint;
                        value?: {
                            dyn?: {};
                            null?: _148.NullValue;
                            primitive?: _110.Type_PrimitiveType;
                            wrapper?: _110.Type_PrimitiveType;
                            wellKnown?: _110.Type_WellKnownType;
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
                    }): _110.CheckedExpr_TypeMapEntry;
                };
                CheckedExpr: {
                    encode(message: _110.CheckedExpr, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _110.CheckedExpr;
                    fromJSON(object: any): _110.CheckedExpr;
                    toJSON(message: _110.CheckedExpr): unknown;
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
                                nullValue?: _148.NullValue;
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
                    }): _110.CheckedExpr;
                };
                Type: {
                    encode(message: _110.Type, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _110.Type;
                    fromJSON(object: any): _110.Type;
                    toJSON(message: _110.Type): unknown;
                    fromPartial(object: {
                        dyn?: {};
                        null?: _148.NullValue;
                        primitive?: _110.Type_PrimitiveType;
                        wrapper?: _110.Type_PrimitiveType;
                        wellKnown?: _110.Type_WellKnownType;
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
                    }): _110.Type;
                };
                Type_ListType: {
                    encode(message: _110.Type_ListType, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _110.Type_ListType;
                    fromJSON(object: any): _110.Type_ListType;
                    toJSON(message: _110.Type_ListType): unknown;
                    fromPartial(object: {
                        elemType?: {
                            dyn?: {};
                            null?: _148.NullValue;
                            primitive?: _110.Type_PrimitiveType;
                            wrapper?: _110.Type_PrimitiveType;
                            wellKnown?: _110.Type_WellKnownType;
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
                    }): _110.Type_ListType;
                };
                Type_MapType: {
                    encode(message: _110.Type_MapType, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _110.Type_MapType;
                    fromJSON(object: any): _110.Type_MapType;
                    toJSON(message: _110.Type_MapType): unknown;
                    fromPartial(object: {
                        keyType?: {
                            dyn?: {};
                            null?: _148.NullValue;
                            primitive?: _110.Type_PrimitiveType;
                            wrapper?: _110.Type_PrimitiveType;
                            wellKnown?: _110.Type_WellKnownType;
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
                            null?: _148.NullValue;
                            primitive?: _110.Type_PrimitiveType;
                            wrapper?: _110.Type_PrimitiveType;
                            wellKnown?: _110.Type_WellKnownType;
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
                    }): _110.Type_MapType;
                };
                Type_FunctionType: {
                    encode(message: _110.Type_FunctionType, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _110.Type_FunctionType;
                    fromJSON(object: any): _110.Type_FunctionType;
                    toJSON(message: _110.Type_FunctionType): unknown;
                    fromPartial(object: {
                        resultType?: {
                            dyn?: {};
                            null?: _148.NullValue;
                            primitive?: _110.Type_PrimitiveType;
                            wrapper?: _110.Type_PrimitiveType;
                            wellKnown?: _110.Type_WellKnownType;
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
                            null?: _148.NullValue;
                            primitive?: _110.Type_PrimitiveType;
                            wrapper?: _110.Type_PrimitiveType;
                            wellKnown?: _110.Type_WellKnownType;
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
                    }): _110.Type_FunctionType;
                };
                Type_AbstractType: {
                    encode(message: _110.Type_AbstractType, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _110.Type_AbstractType;
                    fromJSON(object: any): _110.Type_AbstractType;
                    toJSON(message: _110.Type_AbstractType): unknown;
                    fromPartial(object: {
                        name?: string;
                        parameterTypes?: {
                            dyn?: {};
                            null?: _148.NullValue;
                            primitive?: _110.Type_PrimitiveType;
                            wrapper?: _110.Type_PrimitiveType;
                            wellKnown?: _110.Type_WellKnownType;
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
                    }): _110.Type_AbstractType;
                };
                Decl: {
                    encode(message: _110.Decl, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _110.Decl;
                    fromJSON(object: any): _110.Decl;
                    toJSON(message: _110.Decl): unknown;
                    fromPartial(object: {
                        name?: string;
                        ident?: {
                            type?: {
                                dyn?: {};
                                null?: _148.NullValue;
                                primitive?: _110.Type_PrimitiveType;
                                wrapper?: _110.Type_PrimitiveType;
                                wellKnown?: _110.Type_WellKnownType;
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
                                nullValue?: _148.NullValue;
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
                                    null?: _148.NullValue;
                                    primitive?: _110.Type_PrimitiveType;
                                    wrapper?: _110.Type_PrimitiveType;
                                    wellKnown?: _110.Type_WellKnownType;
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
                                    null?: _148.NullValue;
                                    primitive?: _110.Type_PrimitiveType;
                                    wrapper?: _110.Type_PrimitiveType;
                                    wellKnown?: _110.Type_WellKnownType;
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
                    }): _110.Decl;
                };
                Decl_IdentDecl: {
                    encode(message: _110.Decl_IdentDecl, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _110.Decl_IdentDecl;
                    fromJSON(object: any): _110.Decl_IdentDecl;
                    toJSON(message: _110.Decl_IdentDecl): unknown;
                    fromPartial(object: {
                        type?: {
                            dyn?: {};
                            null?: _148.NullValue;
                            primitive?: _110.Type_PrimitiveType;
                            wrapper?: _110.Type_PrimitiveType;
                            wellKnown?: _110.Type_WellKnownType;
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
                            nullValue?: _148.NullValue;
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
                    }): _110.Decl_IdentDecl;
                };
                Decl_FunctionDecl: {
                    encode(message: _110.Decl_FunctionDecl, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _110.Decl_FunctionDecl;
                    fromJSON(object: any): _110.Decl_FunctionDecl;
                    toJSON(message: _110.Decl_FunctionDecl): unknown;
                    fromPartial(object: {
                        overloads?: {
                            overloadId?: string;
                            params?: {
                                dyn?: {};
                                null?: _148.NullValue;
                                primitive?: _110.Type_PrimitiveType;
                                wrapper?: _110.Type_PrimitiveType;
                                wellKnown?: _110.Type_WellKnownType;
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
                                null?: _148.NullValue;
                                primitive?: _110.Type_PrimitiveType;
                                wrapper?: _110.Type_PrimitiveType;
                                wellKnown?: _110.Type_WellKnownType;
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
                    }): _110.Decl_FunctionDecl;
                };
                Decl_FunctionDecl_Overload: {
                    encode(message: _110.Decl_FunctionDecl_Overload, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _110.Decl_FunctionDecl_Overload;
                    fromJSON(object: any): _110.Decl_FunctionDecl_Overload;
                    toJSON(message: _110.Decl_FunctionDecl_Overload): unknown;
                    fromPartial(object: {
                        overloadId?: string;
                        params?: {
                            dyn?: {};
                            null?: _148.NullValue;
                            primitive?: _110.Type_PrimitiveType;
                            wrapper?: _110.Type_PrimitiveType;
                            wellKnown?: _110.Type_WellKnownType;
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
                            null?: _148.NullValue;
                            primitive?: _110.Type_PrimitiveType;
                            wrapper?: _110.Type_PrimitiveType;
                            wellKnown?: _110.Type_WellKnownType;
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
                    }): _110.Decl_FunctionDecl_Overload;
                };
                Reference: {
                    encode(message: _110.Reference, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _110.Reference;
                    fromJSON(object: any): _110.Reference;
                    toJSON(message: _110.Reference): unknown;
                    fromPartial(object: {
                        name?: string;
                        overloadId?: string[];
                        value?: {
                            nullValue?: _148.NullValue;
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
                    }): _110.Reference;
                };
            };
            const v1beta1: {
                Value: {
                    encode(message: _119.Value, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _119.Value;
                    fromJSON(object: any): _119.Value;
                    toJSON(message: _119.Value): unknown;
                    fromPartial(object: {
                        nullValue?: _148.NullValue;
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
                    }): _119.Value;
                };
                EnumValue: {
                    encode(message: _119.EnumValue, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _119.EnumValue;
                    fromJSON(object: any): _119.EnumValue;
                    toJSON(message: _119.EnumValue): unknown;
                    fromPartial(object: {
                        type?: string;
                        value?: number;
                    }): _119.EnumValue;
                };
                ListValue: {
                    encode(message: _119.ListValue, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _119.ListValue;
                    fromJSON(object: any): _119.ListValue;
                    toJSON(message: _119.ListValue): unknown;
                    fromPartial(object: {
                        values?: {
                            nullValue?: _148.NullValue;
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
                    }): _119.ListValue;
                };
                MapValue: {
                    encode(message: _119.MapValue, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _119.MapValue;
                    fromJSON(object: any): _119.MapValue;
                    toJSON(message: _119.MapValue): unknown;
                    fromPartial(object: {
                        entries?: {
                            key?: {
                                nullValue?: _148.NullValue;
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
                                nullValue?: _148.NullValue;
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
                    }): _119.MapValue;
                };
                MapValue_Entry: {
                    encode(message: _119.MapValue_Entry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _119.MapValue_Entry;
                    fromJSON(object: any): _119.MapValue_Entry;
                    toJSON(message: _119.MapValue_Entry): unknown;
                    fromPartial(object: {
                        key?: {
                            nullValue?: _148.NullValue;
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
                            nullValue?: _148.NullValue;
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
                    }): _119.MapValue_Entry;
                };
                SourceInfo_PositionsEntry: {
                    encode(message: _118.SourceInfo_PositionsEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _118.SourceInfo_PositionsEntry;
                    fromJSON(object: any): _118.SourceInfo_PositionsEntry;
                    toJSON(message: _118.SourceInfo_PositionsEntry): unknown;
                    fromPartial(object: {
                        key?: number;
                        value?: number;
                    }): _118.SourceInfo_PositionsEntry;
                };
                SourceInfo: {
                    encode(message: _118.SourceInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _118.SourceInfo;
                    fromJSON(object: any): _118.SourceInfo;
                    toJSON(message: _118.SourceInfo): unknown;
                    fromPartial(object: {
                        location?: string;
                        lineOffsets?: number[];
                        positions?: {
                            [x: number]: number;
                        };
                    }): _118.SourceInfo;
                };
                SourcePosition: {
                    encode(message: _118.SourcePosition, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _118.SourcePosition;
                    fromJSON(object: any): _118.SourcePosition;
                    toJSON(message: _118.SourcePosition): unknown;
                    fromPartial(object: {
                        location?: string;
                        offset?: number;
                        line?: number;
                        column?: number;
                    }): _118.SourcePosition;
                };
                ParsedExpr: {
                    encode(message: _117.ParsedExpr, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _117.ParsedExpr;
                    fromJSON(object: any): _117.ParsedExpr;
                    toJSON(message: _117.ParsedExpr): unknown;
                    fromPartial(object: {
                        expr?: {
                            id?: number;
                            literalExpr?: {
                                nullValue?: _148.NullValue;
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
                    }): _117.ParsedExpr;
                };
                Expr: {
                    encode(message: _117.Expr, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _117.Expr;
                    fromJSON(object: any): _117.Expr;
                    toJSON(message: _117.Expr): unknown;
                    fromPartial(object: {
                        id?: number;
                        literalExpr?: {
                            nullValue?: _148.NullValue;
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
                    }): _117.Expr;
                };
                Expr_Ident: {
                    encode(message: _117.Expr_Ident, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _117.Expr_Ident;
                    fromJSON(object: any): _117.Expr_Ident;
                    toJSON(message: _117.Expr_Ident): unknown;
                    fromPartial(object: {
                        name?: string;
                    }): _117.Expr_Ident;
                };
                Expr_Select: {
                    encode(message: _117.Expr_Select, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _117.Expr_Select;
                    fromJSON(object: any): _117.Expr_Select;
                    toJSON(message: _117.Expr_Select): unknown;
                    fromPartial(object: {
                        operand?: {
                            id?: number;
                            literalExpr?: {
                                nullValue?: _148.NullValue;
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
                    }): _117.Expr_Select;
                };
                Expr_Call: {
                    encode(message: _117.Expr_Call, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _117.Expr_Call;
                    fromJSON(object: any): _117.Expr_Call;
                    toJSON(message: _117.Expr_Call): unknown;
                    fromPartial(object: {
                        target?: {
                            id?: number;
                            literalExpr?: {
                                nullValue?: _148.NullValue;
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
                                nullValue?: _148.NullValue;
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
                    }): _117.Expr_Call;
                };
                Expr_CreateList: {
                    encode(message: _117.Expr_CreateList, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _117.Expr_CreateList;
                    fromJSON(object: any): _117.Expr_CreateList;
                    toJSON(message: _117.Expr_CreateList): unknown;
                    fromPartial(object: {
                        elements?: {
                            id?: number;
                            literalExpr?: {
                                nullValue?: _148.NullValue;
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
                    }): _117.Expr_CreateList;
                };
                Expr_CreateStruct: {
                    encode(message: _117.Expr_CreateStruct, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _117.Expr_CreateStruct;
                    fromJSON(object: any): _117.Expr_CreateStruct;
                    toJSON(message: _117.Expr_CreateStruct): unknown;
                    fromPartial(object: {
                        type?: string;
                        entries?: {
                            id?: number;
                            fieldKey?: string;
                            mapKey?: {
                                id?: number;
                                literalExpr?: {
                                    nullValue?: _148.NullValue;
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
                                    nullValue?: _148.NullValue;
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
                    }): _117.Expr_CreateStruct;
                };
                Expr_CreateStruct_Entry: {
                    encode(message: _117.Expr_CreateStruct_Entry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _117.Expr_CreateStruct_Entry;
                    fromJSON(object: any): _117.Expr_CreateStruct_Entry;
                    toJSON(message: _117.Expr_CreateStruct_Entry): unknown;
                    fromPartial(object: {
                        id?: number;
                        fieldKey?: string;
                        mapKey?: {
                            id?: number;
                            literalExpr?: {
                                nullValue?: _148.NullValue;
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
                                nullValue?: _148.NullValue;
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
                    }): _117.Expr_CreateStruct_Entry;
                };
                Expr_Comprehension: {
                    encode(message: _117.Expr_Comprehension, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _117.Expr_Comprehension;
                    fromJSON(object: any): _117.Expr_Comprehension;
                    toJSON(message: _117.Expr_Comprehension): unknown;
                    fromPartial(object: {
                        iterVar?: string;
                        iterRange?: {
                            id?: number;
                            literalExpr?: {
                                nullValue?: _148.NullValue;
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
                                nullValue?: _148.NullValue;
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
                                nullValue?: _148.NullValue;
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
                                nullValue?: _148.NullValue;
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
                                nullValue?: _148.NullValue;
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
                    }): _117.Expr_Comprehension;
                };
                Literal: {
                    encode(message: _117.Literal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _117.Literal;
                    fromJSON(object: any): _117.Literal;
                    toJSON(message: _117.Literal): unknown;
                    fromPartial(object: {
                        nullValue?: _148.NullValue;
                        boolValue?: boolean;
                        int64Value?: bigint;
                        uint64Value?: bigint;
                        doubleValue?: number;
                        stringValue?: string;
                        bytesValue?: Uint8Array;
                    }): _117.Literal;
                };
                EvalState: {
                    encode(message: _116.EvalState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _116.EvalState;
                    fromJSON(object: any): _116.EvalState;
                    toJSON(message: _116.EvalState): unknown;
                    fromPartial(object: {
                        values?: {
                            value?: {
                                nullValue?: _148.NullValue;
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
                    }): _116.EvalState;
                };
                EvalState_Result: {
                    encode(message: _116.EvalState_Result, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _116.EvalState_Result;
                    fromJSON(object: any): _116.EvalState_Result;
                    toJSON(message: _116.EvalState_Result): unknown;
                    fromPartial(object: {
                        expr?: {
                            id?: number;
                        };
                        value?: number;
                    }): _116.EvalState_Result;
                };
                ExprValue: {
                    encode(message: _116.ExprValue, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _116.ExprValue;
                    fromJSON(object: any): _116.ExprValue;
                    toJSON(message: _116.ExprValue): unknown;
                    fromPartial(object: {
                        value?: {
                            nullValue?: _148.NullValue;
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
                    }): _116.ExprValue;
                };
                ErrorSet: {
                    encode(message: _116.ErrorSet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _116.ErrorSet;
                    fromJSON(object: any): _116.ErrorSet;
                    toJSON(message: _116.ErrorSet): unknown;
                    fromPartial(object: {
                        errors?: {
                            code?: number;
                            message?: string;
                            details?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                        }[];
                    }): _116.ErrorSet;
                };
                UnknownSet: {
                    encode(message: _116.UnknownSet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _116.UnknownSet;
                    fromJSON(object: any): _116.UnknownSet;
                    toJSON(message: _116.UnknownSet): unknown;
                    fromPartial(object: {
                        exprs?: {
                            id?: number;
                        }[];
                    }): _116.UnknownSet;
                };
                IdRef: {
                    encode(message: _116.IdRef, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _116.IdRef;
                    fromJSON(object: any): _116.IdRef;
                    toJSON(message: _116.IdRef): unknown;
                    fromPartial(object: {
                        id?: number;
                    }): _116.IdRef;
                };
                Decl: {
                    encode(message: _115.Decl, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _115.Decl;
                    fromJSON(object: any): _115.Decl;
                    toJSON(message: _115.Decl): unknown;
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
                                    nullValue?: _148.NullValue;
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
                                        nullValue?: _148.NullValue;
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
                    }): _115.Decl;
                };
                DeclType: {
                    encode(message: _115.DeclType, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _115.DeclType;
                    fromJSON(object: any): _115.DeclType;
                    toJSON(message: _115.DeclType): unknown;
                    fromPartial(object: {
                        id?: number;
                        type?: string;
                        typeParams?: any[];
                    }): _115.DeclType;
                };
                IdentDecl: {
                    encode(message: _115.IdentDecl, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _115.IdentDecl;
                    fromJSON(object: any): _115.IdentDecl;
                    toJSON(message: _115.IdentDecl): unknown;
                    fromPartial(object: {
                        type?: {
                            id?: number;
                            type?: string;
                            typeParams?: any[];
                        };
                        value?: {
                            id?: number;
                            literalExpr?: {
                                nullValue?: _148.NullValue;
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
                    }): _115.IdentDecl;
                };
                FunctionDecl: {
                    encode(message: _115.FunctionDecl, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _115.FunctionDecl;
                    fromJSON(object: any): _115.FunctionDecl;
                    toJSON(message: _115.FunctionDecl): unknown;
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
                                    nullValue?: _148.NullValue;
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
                    }): _115.FunctionDecl;
                };
            };
        }
    }
    const bytestream: {
        ReadRequest: {
            encode(message: _120.ReadRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _120.ReadRequest;
            fromJSON(object: any): _120.ReadRequest;
            toJSON(message: _120.ReadRequest): unknown;
            fromPartial(object: {
                resourceName?: string;
                readOffset?: bigint;
                readLimit?: bigint;
            }): _120.ReadRequest;
        };
        ReadResponse: {
            encode(message: _120.ReadResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _120.ReadResponse;
            fromJSON(object: any): _120.ReadResponse;
            toJSON(message: _120.ReadResponse): unknown;
            fromPartial(object: {
                data?: Uint8Array;
            }): _120.ReadResponse;
        };
        WriteRequest: {
            encode(message: _120.WriteRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _120.WriteRequest;
            fromJSON(object: any): _120.WriteRequest;
            toJSON(message: _120.WriteRequest): unknown;
            fromPartial(object: {
                resourceName?: string;
                writeOffset?: bigint;
                finishWrite?: boolean;
                data?: Uint8Array;
            }): _120.WriteRequest;
        };
        WriteResponse: {
            encode(message: _120.WriteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _120.WriteResponse;
            fromJSON(object: any): _120.WriteResponse;
            toJSON(message: _120.WriteResponse): unknown;
            fromPartial(object: {
                committedSize?: bigint;
            }): _120.WriteResponse;
        };
        QueryWriteStatusRequest: {
            encode(message: _120.QueryWriteStatusRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _120.QueryWriteStatusRequest;
            fromJSON(object: any): _120.QueryWriteStatusRequest;
            toJSON(message: _120.QueryWriteStatusRequest): unknown;
            fromPartial(object: {
                resourceName?: string;
            }): _120.QueryWriteStatusRequest;
        };
        QueryWriteStatusResponse: {
            encode(message: _120.QueryWriteStatusResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _120.QueryWriteStatusResponse;
            fromJSON(object: any): _120.QueryWriteStatusResponse;
            toJSON(message: _120.QueryWriteStatusResponse): unknown;
            fromPartial(object: {
                committedSize?: bigint;
                complete?: boolean;
            }): _120.QueryWriteStatusResponse;
        };
    };
    namespace geo {
        const type: {
            Viewport: {
                encode(message: _121.Viewport, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _121.Viewport;
                fromJSON(object: any): _121.Viewport;
                toJSON(message: _121.Viewport): unknown;
                fromPartial(object: {
                    low?: {
                        latitude?: number;
                        longitude?: number;
                    };
                    high?: {
                        latitude?: number;
                        longitude?: number;
                    };
                }): _121.Viewport;
            };
        };
    }
    const longrunning: {
        Operation: {
            encode(message: _122.Operation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _122.Operation;
            fromJSON(object: any): _122.Operation;
            toJSON(message: _122.Operation): unknown;
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
            }): _122.Operation;
        };
        GetOperationRequest: {
            encode(message: _122.GetOperationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _122.GetOperationRequest;
            fromJSON(object: any): _122.GetOperationRequest;
            toJSON(message: _122.GetOperationRequest): unknown;
            fromPartial(object: {
                name?: string;
            }): _122.GetOperationRequest;
        };
        ListOperationsRequest: {
            encode(message: _122.ListOperationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _122.ListOperationsRequest;
            fromJSON(object: any): _122.ListOperationsRequest;
            toJSON(message: _122.ListOperationsRequest): unknown;
            fromPartial(object: {
                name?: string;
                filter?: string;
                pageSize?: number;
                pageToken?: string;
            }): _122.ListOperationsRequest;
        };
        ListOperationsResponse: {
            encode(message: _122.ListOperationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _122.ListOperationsResponse;
            fromJSON(object: any): _122.ListOperationsResponse;
            toJSON(message: _122.ListOperationsResponse): unknown;
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
            }): _122.ListOperationsResponse;
        };
        CancelOperationRequest: {
            encode(message: _122.CancelOperationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _122.CancelOperationRequest;
            fromJSON(object: any): _122.CancelOperationRequest;
            toJSON(message: _122.CancelOperationRequest): unknown;
            fromPartial(object: {
                name?: string;
            }): _122.CancelOperationRequest;
        };
        DeleteOperationRequest: {
            encode(message: _122.DeleteOperationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _122.DeleteOperationRequest;
            fromJSON(object: any): _122.DeleteOperationRequest;
            toJSON(message: _122.DeleteOperationRequest): unknown;
            fromPartial(object: {
                name?: string;
            }): _122.DeleteOperationRequest;
        };
        WaitOperationRequest: {
            encode(message: _122.WaitOperationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _122.WaitOperationRequest;
            fromJSON(object: any): _122.WaitOperationRequest;
            toJSON(message: _122.WaitOperationRequest): unknown;
            fromPartial(object: {
                name?: string;
                timeout?: {
                    seconds?: bigint;
                    nanos?: number;
                };
            }): _122.WaitOperationRequest;
        };
        OperationInfo: {
            encode(message: _122.OperationInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _122.OperationInfo;
            fromJSON(object: any): _122.OperationInfo;
            toJSON(message: _122.OperationInfo): unknown;
            fromPartial(object: {
                responseType?: string;
                metadataType?: string;
            }): _122.OperationInfo;
        };
    };
    const rpc: {
        Status: {
            encode(message: _125.Status, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _125.Status;
            fromJSON(object: any): _125.Status;
            toJSON(message: _125.Status): unknown;
            fromPartial(object: {
                code?: number;
                message?: string;
                details?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                }[];
            }): _125.Status;
        };
        ErrorInfo_MetadataEntry: {
            encode(message: _124.ErrorInfo_MetadataEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _124.ErrorInfo_MetadataEntry;
            fromJSON(object: any): _124.ErrorInfo_MetadataEntry;
            toJSON(message: _124.ErrorInfo_MetadataEntry): unknown;
            fromPartial(object: {
                key?: string;
                value?: string;
            }): _124.ErrorInfo_MetadataEntry;
        };
        ErrorInfo: {
            encode(message: _124.ErrorInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _124.ErrorInfo;
            fromJSON(object: any): _124.ErrorInfo;
            toJSON(message: _124.ErrorInfo): unknown;
            fromPartial(object: {
                reason?: string;
                domain?: string;
                metadata?: {
                    [x: string]: string;
                };
            }): _124.ErrorInfo;
        };
        RetryInfo: {
            encode(message: _124.RetryInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _124.RetryInfo;
            fromJSON(object: any): _124.RetryInfo;
            toJSON(message: _124.RetryInfo): unknown;
            fromPartial(object: {
                retryDelay?: {
                    seconds?: bigint;
                    nanos?: number;
                };
            }): _124.RetryInfo;
        };
        DebugInfo: {
            encode(message: _124.DebugInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _124.DebugInfo;
            fromJSON(object: any): _124.DebugInfo;
            toJSON(message: _124.DebugInfo): unknown;
            fromPartial(object: {
                stackEntries?: string[];
                detail?: string;
            }): _124.DebugInfo;
        };
        QuotaFailure: {
            encode(message: _124.QuotaFailure, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _124.QuotaFailure;
            fromJSON(object: any): _124.QuotaFailure;
            toJSON(message: _124.QuotaFailure): unknown;
            fromPartial(object: {
                violations?: {
                    subject?: string;
                    description?: string;
                }[];
            }): _124.QuotaFailure;
        };
        QuotaFailure_Violation: {
            encode(message: _124.QuotaFailure_Violation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _124.QuotaFailure_Violation;
            fromJSON(object: any): _124.QuotaFailure_Violation;
            toJSON(message: _124.QuotaFailure_Violation): unknown;
            fromPartial(object: {
                subject?: string;
                description?: string;
            }): _124.QuotaFailure_Violation;
        };
        PreconditionFailure: {
            encode(message: _124.PreconditionFailure, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _124.PreconditionFailure;
            fromJSON(object: any): _124.PreconditionFailure;
            toJSON(message: _124.PreconditionFailure): unknown;
            fromPartial(object: {
                violations?: {
                    type?: string;
                    subject?: string;
                    description?: string;
                }[];
            }): _124.PreconditionFailure;
        };
        PreconditionFailure_Violation: {
            encode(message: _124.PreconditionFailure_Violation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _124.PreconditionFailure_Violation;
            fromJSON(object: any): _124.PreconditionFailure_Violation;
            toJSON(message: _124.PreconditionFailure_Violation): unknown;
            fromPartial(object: {
                type?: string;
                subject?: string;
                description?: string;
            }): _124.PreconditionFailure_Violation;
        };
        BadRequest: {
            encode(message: _124.BadRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _124.BadRequest;
            fromJSON(object: any): _124.BadRequest;
            toJSON(message: _124.BadRequest): unknown;
            fromPartial(object: {
                fieldViolations?: {
                    field?: string;
                    description?: string;
                }[];
            }): _124.BadRequest;
        };
        BadRequest_FieldViolation: {
            encode(message: _124.BadRequest_FieldViolation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _124.BadRequest_FieldViolation;
            fromJSON(object: any): _124.BadRequest_FieldViolation;
            toJSON(message: _124.BadRequest_FieldViolation): unknown;
            fromPartial(object: {
                field?: string;
                description?: string;
            }): _124.BadRequest_FieldViolation;
        };
        RequestInfo: {
            encode(message: _124.RequestInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _124.RequestInfo;
            fromJSON(object: any): _124.RequestInfo;
            toJSON(message: _124.RequestInfo): unknown;
            fromPartial(object: {
                requestId?: string;
                servingData?: string;
            }): _124.RequestInfo;
        };
        ResourceInfo: {
            encode(message: _124.ResourceInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _124.ResourceInfo;
            fromJSON(object: any): _124.ResourceInfo;
            toJSON(message: _124.ResourceInfo): unknown;
            fromPartial(object: {
                resourceType?: string;
                resourceName?: string;
                owner?: string;
                description?: string;
            }): _124.ResourceInfo;
        };
        Help: {
            encode(message: _124.Help, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _124.Help;
            fromJSON(object: any): _124.Help;
            toJSON(message: _124.Help): unknown;
            fromPartial(object: {
                links?: {
                    description?: string;
                    url?: string;
                }[];
            }): _124.Help;
        };
        Help_Link: {
            encode(message: _124.Help_Link, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _124.Help_Link;
            fromJSON(object: any): _124.Help_Link;
            toJSON(message: _124.Help_Link): unknown;
            fromPartial(object: {
                description?: string;
                url?: string;
            }): _124.Help_Link;
        };
        LocalizedMessage: {
            encode(message: _124.LocalizedMessage, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _124.LocalizedMessage;
            fromJSON(object: any): _124.LocalizedMessage;
            toJSON(message: _124.LocalizedMessage): unknown;
            fromPartial(object: {
                locale?: string;
                message?: string;
            }): _124.LocalizedMessage;
        };
        codeFromJSON(object: any): _123.Code;
        codeToJSON(object: _123.Code): string;
        Code: typeof _123.Code;
    };
    const type: {
        TimeOfDay: {
            encode(message: _142.TimeOfDay, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _142.TimeOfDay;
            fromJSON(object: any): _142.TimeOfDay;
            toJSON(message: _142.TimeOfDay): unknown;
            fromPartial(object: {
                hours?: number;
                minutes?: number;
                seconds?: number;
                nanos?: number;
            }): _142.TimeOfDay;
        };
        Quaternion: {
            encode(message: _141.Quaternion, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _141.Quaternion;
            fromJSON(object: any): _141.Quaternion;
            toJSON(message: _141.Quaternion): unknown;
            fromPartial(object: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            }): _141.Quaternion;
        };
        PostalAddress: {
            encode(message: _140.PostalAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _140.PostalAddress;
            fromJSON(object: any): _140.PostalAddress;
            toJSON(message: _140.PostalAddress): unknown;
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
            }): _140.PostalAddress;
        };
        PhoneNumber: {
            encode(message: _139.PhoneNumber, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _139.PhoneNumber;
            fromJSON(object: any): _139.PhoneNumber;
            toJSON(message: _139.PhoneNumber): unknown;
            fromPartial(object: {
                e164Number?: string;
                shortCode?: {
                    regionCode?: string;
                    number?: string;
                };
                extension?: string;
            }): _139.PhoneNumber;
        };
        PhoneNumber_ShortCode: {
            encode(message: _139.PhoneNumber_ShortCode, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _139.PhoneNumber_ShortCode;
            fromJSON(object: any): _139.PhoneNumber_ShortCode;
            toJSON(message: _139.PhoneNumber_ShortCode): unknown;
            fromPartial(object: {
                regionCode?: string;
                number?: string;
            }): _139.PhoneNumber_ShortCode;
        };
        monthFromJSON(object: any): _138.Month;
        monthToJSON(object: _138.Month): string;
        Month: typeof _138.Month;
        Money: {
            encode(message: _137.Money, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _137.Money;
            fromJSON(object: any): _137.Money;
            toJSON(message: _137.Money): unknown;
            fromPartial(object: {
                currencyCode?: string;
                units?: bigint;
                nanos?: number;
            }): _137.Money;
        };
        LocalizedText: {
            encode(message: _136.LocalizedText, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _136.LocalizedText;
            fromJSON(object: any): _136.LocalizedText;
            toJSON(message: _136.LocalizedText): unknown;
            fromPartial(object: {
                text?: string;
                languageCode?: string;
            }): _136.LocalizedText;
        };
        LatLng: {
            encode(message: _135.LatLng, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _135.LatLng;
            fromJSON(object: any): _135.LatLng;
            toJSON(message: _135.LatLng): unknown;
            fromPartial(object: {
                latitude?: number;
                longitude?: number;
            }): _135.LatLng;
        };
        Interval: {
            encode(message: _134.Interval, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _134.Interval;
            fromJSON(object: any): _134.Interval;
            toJSON(message: _134.Interval): unknown;
            fromPartial(object: {
                startTime?: {
                    seconds?: bigint;
                    nanos?: number;
                };
                endTime?: {
                    seconds?: bigint;
                    nanos?: number;
                };
            }): _134.Interval;
        };
        Fraction: {
            encode(message: _133.Fraction, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.Fraction;
            fromJSON(object: any): _133.Fraction;
            toJSON(message: _133.Fraction): unknown;
            fromPartial(object: {
                numerator?: bigint;
                denominator?: bigint;
            }): _133.Fraction;
        };
        Expr: {
            encode(message: _132.Expr, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _132.Expr;
            fromJSON(object: any): _132.Expr;
            toJSON(message: _132.Expr): unknown;
            fromPartial(object: {
                expression?: string;
                title?: string;
                description?: string;
                location?: string;
            }): _132.Expr;
        };
        Decimal: {
            encode(message: _131.Decimal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _131.Decimal;
            fromJSON(object: any): _131.Decimal;
            toJSON(message: _131.Decimal): unknown;
            fromPartial(object: {
                value?: string;
            }): _131.Decimal;
        };
        dayOfWeekFromJSON(object: any): _130.DayOfWeek;
        dayOfWeekToJSON(object: _130.DayOfWeek): string;
        DayOfWeek: typeof _130.DayOfWeek;
        DateTime: {
            encode(message: _129.DateTime, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _129.DateTime;
            fromJSON(object: any): _129.DateTime;
            toJSON(message: _129.DateTime): unknown;
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
            }): _129.DateTime;
        };
        TimeZone: {
            encode(message: _129.TimeZone, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _129.TimeZone;
            fromJSON(object: any): _129.TimeZone;
            toJSON(message: _129.TimeZone): unknown;
            fromPartial(object: {
                id?: string;
                version?: string;
            }): _129.TimeZone;
        };
        Date: {
            encode(message: _128.Date, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _128.Date;
            fromJSON(object: any): _128.Date;
            toJSON(message: _128.Date): unknown;
            fromPartial(object: {
                year?: number;
                month?: number;
                day?: number;
            }): _128.Date;
        };
        Color: {
            encode(message: _127.Color, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _127.Color;
            fromJSON(object: any): _127.Color;
            toJSON(message: _127.Color): unknown;
            fromPartial(object: {
                red?: number;
                green?: number;
                blue?: number;
                alpha?: {
                    value?: number;
                };
            }): _127.Color;
        };
        calendarPeriodFromJSON(object: any): _126.CalendarPeriod;
        calendarPeriodToJSON(object: _126.CalendarPeriod): string;
        CalendarPeriod: typeof _126.CalendarPeriod;
    };
    const protobuf: {
        DoubleValue: {
            encode(message: _149.DoubleValue, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _149.DoubleValue;
            fromJSON(object: any): _149.DoubleValue;
            toJSON(message: _149.DoubleValue): unknown;
            fromPartial(object: {
                value?: number;
            }): _149.DoubleValue;
        };
        FloatValue: {
            encode(message: _149.FloatValue, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _149.FloatValue;
            fromJSON(object: any): _149.FloatValue;
            toJSON(message: _149.FloatValue): unknown;
            fromPartial(object: {
                value?: number;
            }): _149.FloatValue;
        };
        Int64Value: {
            encode(message: _149.Int64Value, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _149.Int64Value;
            fromJSON(object: any): _149.Int64Value;
            toJSON(message: _149.Int64Value): unknown;
            fromPartial(object: {
                value?: bigint;
            }): _149.Int64Value;
        };
        UInt64Value: {
            encode(message: _149.UInt64Value, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _149.UInt64Value;
            fromJSON(object: any): _149.UInt64Value;
            toJSON(message: _149.UInt64Value): unknown;
            fromPartial(object: {
                value?: bigint;
            }): _149.UInt64Value;
        };
        Int32Value: {
            encode(message: _149.Int32Value, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _149.Int32Value;
            fromJSON(object: any): _149.Int32Value;
            toJSON(message: _149.Int32Value): unknown;
            fromPartial(object: {
                value?: number;
            }): _149.Int32Value;
        };
        UInt32Value: {
            encode(message: _149.UInt32Value, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _149.UInt32Value;
            fromJSON(object: any): _149.UInt32Value;
            toJSON(message: _149.UInt32Value): unknown;
            fromPartial(object: {
                value?: number;
            }): _149.UInt32Value;
        };
        BoolValue: {
            encode(message: _149.BoolValue, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _149.BoolValue;
            fromJSON(object: any): _149.BoolValue;
            toJSON(message: _149.BoolValue): unknown;
            fromPartial(object: {
                value?: boolean;
            }): _149.BoolValue;
        };
        StringValue: {
            encode(message: _149.StringValue, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _149.StringValue;
            fromJSON(object: any): _149.StringValue;
            toJSON(message: _149.StringValue): unknown;
            fromPartial(object: {
                value?: string;
            }): _149.StringValue;
        };
        BytesValue: {
            encode(message: _149.BytesValue, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _149.BytesValue;
            fromJSON(object: any): _149.BytesValue;
            toJSON(message: _149.BytesValue): unknown;
            fromPartial(object: {
                value?: Uint8Array;
            }): _149.BytesValue;
        };
        nullValueFromJSON(object: any): _148.NullValue;
        nullValueToJSON(object: _148.NullValue): string;
        NullValue: typeof _148.NullValue;
        Struct_FieldsEntry: {
            encode(message: _148.Struct_FieldsEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _148.Struct_FieldsEntry;
            fromJSON(object: any): _148.Struct_FieldsEntry;
            toJSON(message: _148.Struct_FieldsEntry): unknown;
            fromPartial(object: {
                key?: string;
                value?: {
                    nullValue?: _148.NullValue;
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
            }): _148.Struct_FieldsEntry;
        };
        Struct: {
            encode(message: _148.Struct, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _148.Struct;
            fromJSON(object: any): _148.Struct;
            toJSON(message: _148.Struct): unknown;
            fromPartial(object: {
                fields?: {
                    [x: string]: {
                        nullValue?: _148.NullValue;
                        numberValue?: number;
                        stringValue?: string;
                        boolValue?: boolean;
                        structValue?: any;
                        listValue?: {
                            values?: any[];
                        };
                    };
                };
            }): _148.Struct;
        };
        Value: {
            encode(message: _148.Value, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _148.Value;
            fromJSON(object: any): _148.Value;
            toJSON(message: _148.Value): unknown;
            fromPartial(object: {
                nullValue?: _148.NullValue;
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
            }): _148.Value;
        };
        ListValue: {
            encode(message: _148.ListValue, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _148.ListValue;
            fromJSON(object: any): _148.ListValue;
            toJSON(message: _148.ListValue): unknown;
            fromPartial(object: {
                values?: {
                    nullValue?: _148.NullValue;
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
            }): _148.ListValue;
        };
        Empty: {
            encode(_: _147.Empty, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _147.Empty;
            fromJSON(_: any): _147.Empty;
            toJSON(_: _147.Empty): unknown;
            fromPartial(_: {}): _147.Empty;
        };
        Any: {
            encode(message: _146.Any, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _146.Any;
            fromJSON(object: any): _146.Any;
            toJSON(message: _146.Any): unknown;
            fromPartial(object: {
                typeUrl?: string;
                value?: Uint8Array;
            }): _146.Any;
        };
        Timestamp: {
            encode(message: _145.Timestamp, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _145.Timestamp;
            fromJSON(object: any): _145.Timestamp;
            toJSON(message: _145.Timestamp): unknown;
            fromPartial(object: {
                seconds?: bigint;
                nanos?: number;
            }): _145.Timestamp;
        };
        Duration: {
            encode(message: _144.Duration, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _144.Duration;
            fromJSON(object: any): _144.Duration;
            toJSON(message: _144.Duration): unknown;
            fromPartial(object: {
                seconds?: bigint;
                nanos?: number;
            }): _144.Duration;
        };
        fieldDescriptorProto_TypeFromJSON(object: any): _143.FieldDescriptorProto_Type;
        fieldDescriptorProto_TypeToJSON(object: _143.FieldDescriptorProto_Type): string;
        fieldDescriptorProto_LabelFromJSON(object: any): _143.FieldDescriptorProto_Label;
        fieldDescriptorProto_LabelToJSON(object: _143.FieldDescriptorProto_Label): string;
        fileOptions_OptimizeModeFromJSON(object: any): _143.FileOptions_OptimizeMode;
        fileOptions_OptimizeModeToJSON(object: _143.FileOptions_OptimizeMode): string;
        fieldOptions_CTypeFromJSON(object: any): _143.FieldOptions_CType;
        fieldOptions_CTypeToJSON(object: _143.FieldOptions_CType): string;
        fieldOptions_JSTypeFromJSON(object: any): _143.FieldOptions_JSType;
        fieldOptions_JSTypeToJSON(object: _143.FieldOptions_JSType): string;
        methodOptions_IdempotencyLevelFromJSON(object: any): _143.MethodOptions_IdempotencyLevel;
        methodOptions_IdempotencyLevelToJSON(object: _143.MethodOptions_IdempotencyLevel): string;
        FieldDescriptorProto_Type: typeof _143.FieldDescriptorProto_Type;
        FieldDescriptorProto_Label: typeof _143.FieldDescriptorProto_Label;
        FileOptions_OptimizeMode: typeof _143.FileOptions_OptimizeMode;
        FieldOptions_CType: typeof _143.FieldOptions_CType;
        FieldOptions_JSType: typeof _143.FieldOptions_JSType;
        MethodOptions_IdempotencyLevel: typeof _143.MethodOptions_IdempotencyLevel;
        FileDescriptorSet: {
            encode(message: _143.FileDescriptorSet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _143.FileDescriptorSet;
            fromJSON(object: any): _143.FileDescriptorSet;
            toJSON(message: _143.FileDescriptorSet): unknown;
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
                            label?: _143.FieldDescriptorProto_Label;
                            type?: _143.FieldDescriptorProto_Type;
                            typeName?: string;
                            extendee?: string;
                            defaultValue?: string;
                            oneofIndex?: number;
                            jsonName?: string;
                            options?: {
                                ctype?: _143.FieldOptions_CType;
                                packed?: boolean;
                                jstype?: _143.FieldOptions_JSType;
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
                            label?: _143.FieldDescriptorProto_Label;
                            type?: _143.FieldDescriptorProto_Type;
                            typeName?: string;
                            extendee?: string;
                            defaultValue?: string;
                            oneofIndex?: number;
                            jsonName?: string;
                            options?: {
                                ctype?: _143.FieldOptions_CType;
                                packed?: boolean;
                                jstype?: _143.FieldOptions_JSType;
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
                                idempotencyLevel?: _143.MethodOptions_IdempotencyLevel;
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
                        label?: _143.FieldDescriptorProto_Label;
                        type?: _143.FieldDescriptorProto_Type;
                        typeName?: string;
                        extendee?: string;
                        defaultValue?: string;
                        oneofIndex?: number;
                        jsonName?: string;
                        options?: {
                            ctype?: _143.FieldOptions_CType;
                            packed?: boolean;
                            jstype?: _143.FieldOptions_JSType;
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
                        optimizeFor?: _143.FileOptions_OptimizeMode;
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
            }): _143.FileDescriptorSet;
        };
        FileDescriptorProto: {
            encode(message: _143.FileDescriptorProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _143.FileDescriptorProto;
            fromJSON(object: any): _143.FileDescriptorProto;
            toJSON(message: _143.FileDescriptorProto): unknown;
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
                        label?: _143.FieldDescriptorProto_Label;
                        type?: _143.FieldDescriptorProto_Type;
                        typeName?: string;
                        extendee?: string;
                        defaultValue?: string;
                        oneofIndex?: number;
                        jsonName?: string;
                        options?: {
                            ctype?: _143.FieldOptions_CType;
                            packed?: boolean;
                            jstype?: _143.FieldOptions_JSType;
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
                        label?: _143.FieldDescriptorProto_Label;
                        type?: _143.FieldDescriptorProto_Type;
                        typeName?: string;
                        extendee?: string;
                        defaultValue?: string;
                        oneofIndex?: number;
                        jsonName?: string;
                        options?: {
                            ctype?: _143.FieldOptions_CType;
                            packed?: boolean;
                            jstype?: _143.FieldOptions_JSType;
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
                            idempotencyLevel?: _143.MethodOptions_IdempotencyLevel;
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
                    label?: _143.FieldDescriptorProto_Label;
                    type?: _143.FieldDescriptorProto_Type;
                    typeName?: string;
                    extendee?: string;
                    defaultValue?: string;
                    oneofIndex?: number;
                    jsonName?: string;
                    options?: {
                        ctype?: _143.FieldOptions_CType;
                        packed?: boolean;
                        jstype?: _143.FieldOptions_JSType;
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
                    optimizeFor?: _143.FileOptions_OptimizeMode;
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
            }): _143.FileDescriptorProto;
        };
        DescriptorProto: {
            encode(message: _143.DescriptorProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _143.DescriptorProto;
            fromJSON(object: any): _143.DescriptorProto;
            toJSON(message: _143.DescriptorProto): unknown;
            fromPartial(object: {
                name?: string;
                field?: {
                    name?: string;
                    number?: number;
                    label?: _143.FieldDescriptorProto_Label;
                    type?: _143.FieldDescriptorProto_Type;
                    typeName?: string;
                    extendee?: string;
                    defaultValue?: string;
                    oneofIndex?: number;
                    jsonName?: string;
                    options?: {
                        ctype?: _143.FieldOptions_CType;
                        packed?: boolean;
                        jstype?: _143.FieldOptions_JSType;
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
                    label?: _143.FieldDescriptorProto_Label;
                    type?: _143.FieldDescriptorProto_Type;
                    typeName?: string;
                    extendee?: string;
                    defaultValue?: string;
                    oneofIndex?: number;
                    jsonName?: string;
                    options?: {
                        ctype?: _143.FieldOptions_CType;
                        packed?: boolean;
                        jstype?: _143.FieldOptions_JSType;
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
            }): _143.DescriptorProto;
        };
        DescriptorProto_ExtensionRange: {
            encode(message: _143.DescriptorProto_ExtensionRange, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _143.DescriptorProto_ExtensionRange;
            fromJSON(object: any): _143.DescriptorProto_ExtensionRange;
            toJSON(message: _143.DescriptorProto_ExtensionRange): unknown;
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
            }): _143.DescriptorProto_ExtensionRange;
        };
        DescriptorProto_ReservedRange: {
            encode(message: _143.DescriptorProto_ReservedRange, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _143.DescriptorProto_ReservedRange;
            fromJSON(object: any): _143.DescriptorProto_ReservedRange;
            toJSON(message: _143.DescriptorProto_ReservedRange): unknown;
            fromPartial(object: {
                start?: number;
                end?: number;
            }): _143.DescriptorProto_ReservedRange;
        };
        ExtensionRangeOptions: {
            encode(message: _143.ExtensionRangeOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _143.ExtensionRangeOptions;
            fromJSON(object: any): _143.ExtensionRangeOptions;
            toJSON(message: _143.ExtensionRangeOptions): unknown;
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
            }): _143.ExtensionRangeOptions;
        };
        FieldDescriptorProto: {
            encode(message: _143.FieldDescriptorProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _143.FieldDescriptorProto;
            fromJSON(object: any): _143.FieldDescriptorProto;
            toJSON(message: _143.FieldDescriptorProto): unknown;
            fromPartial(object: {
                name?: string;
                number?: number;
                label?: _143.FieldDescriptorProto_Label;
                type?: _143.FieldDescriptorProto_Type;
                typeName?: string;
                extendee?: string;
                defaultValue?: string;
                oneofIndex?: number;
                jsonName?: string;
                options?: {
                    ctype?: _143.FieldOptions_CType;
                    packed?: boolean;
                    jstype?: _143.FieldOptions_JSType;
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
            }): _143.FieldDescriptorProto;
        };
        OneofDescriptorProto: {
            encode(message: _143.OneofDescriptorProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _143.OneofDescriptorProto;
            fromJSON(object: any): _143.OneofDescriptorProto;
            toJSON(message: _143.OneofDescriptorProto): unknown;
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
            }): _143.OneofDescriptorProto;
        };
        EnumDescriptorProto: {
            encode(message: _143.EnumDescriptorProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _143.EnumDescriptorProto;
            fromJSON(object: any): _143.EnumDescriptorProto;
            toJSON(message: _143.EnumDescriptorProto): unknown;
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
            }): _143.EnumDescriptorProto;
        };
        EnumDescriptorProto_EnumReservedRange: {
            encode(message: _143.EnumDescriptorProto_EnumReservedRange, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _143.EnumDescriptorProto_EnumReservedRange;
            fromJSON(object: any): _143.EnumDescriptorProto_EnumReservedRange;
            toJSON(message: _143.EnumDescriptorProto_EnumReservedRange): unknown;
            fromPartial(object: {
                start?: number;
                end?: number;
            }): _143.EnumDescriptorProto_EnumReservedRange;
        };
        EnumValueDescriptorProto: {
            encode(message: _143.EnumValueDescriptorProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _143.EnumValueDescriptorProto;
            fromJSON(object: any): _143.EnumValueDescriptorProto;
            toJSON(message: _143.EnumValueDescriptorProto): unknown;
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
            }): _143.EnumValueDescriptorProto;
        };
        ServiceDescriptorProto: {
            encode(message: _143.ServiceDescriptorProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _143.ServiceDescriptorProto;
            fromJSON(object: any): _143.ServiceDescriptorProto;
            toJSON(message: _143.ServiceDescriptorProto): unknown;
            fromPartial(object: {
                name?: string;
                method?: {
                    name?: string;
                    inputType?: string;
                    outputType?: string;
                    options?: {
                        deprecated?: boolean;
                        idempotencyLevel?: _143.MethodOptions_IdempotencyLevel;
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
            }): _143.ServiceDescriptorProto;
        };
        MethodDescriptorProto: {
            encode(message: _143.MethodDescriptorProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _143.MethodDescriptorProto;
            fromJSON(object: any): _143.MethodDescriptorProto;
            toJSON(message: _143.MethodDescriptorProto): unknown;
            fromPartial(object: {
                name?: string;
                inputType?: string;
                outputType?: string;
                options?: {
                    deprecated?: boolean;
                    idempotencyLevel?: _143.MethodOptions_IdempotencyLevel;
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
            }): _143.MethodDescriptorProto;
        };
        FileOptions: {
            encode(message: _143.FileOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _143.FileOptions;
            fromJSON(object: any): _143.FileOptions;
            toJSON(message: _143.FileOptions): unknown;
            fromPartial(object: {
                javaPackage?: string;
                javaOuterClassname?: string;
                javaMultipleFiles?: boolean;
                javaGenerateEqualsAndHash?: boolean;
                javaStringCheckUtf8?: boolean;
                optimizeFor?: _143.FileOptions_OptimizeMode;
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
            }): _143.FileOptions;
        };
        MessageOptions: {
            encode(message: _143.MessageOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _143.MessageOptions;
            fromJSON(object: any): _143.MessageOptions;
            toJSON(message: _143.MessageOptions): unknown;
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
            }): _143.MessageOptions;
        };
        FieldOptions: {
            encode(message: _143.FieldOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _143.FieldOptions;
            fromJSON(object: any): _143.FieldOptions;
            toJSON(message: _143.FieldOptions): unknown;
            fromPartial(object: {
                ctype?: _143.FieldOptions_CType;
                packed?: boolean;
                jstype?: _143.FieldOptions_JSType;
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
            }): _143.FieldOptions;
        };
        OneofOptions: {
            encode(message: _143.OneofOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _143.OneofOptions;
            fromJSON(object: any): _143.OneofOptions;
            toJSON(message: _143.OneofOptions): unknown;
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
            }): _143.OneofOptions;
        };
        EnumOptions: {
            encode(message: _143.EnumOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _143.EnumOptions;
            fromJSON(object: any): _143.EnumOptions;
            toJSON(message: _143.EnumOptions): unknown;
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
            }): _143.EnumOptions;
        };
        EnumValueOptions: {
            encode(message: _143.EnumValueOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _143.EnumValueOptions;
            fromJSON(object: any): _143.EnumValueOptions;
            toJSON(message: _143.EnumValueOptions): unknown;
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
            }): _143.EnumValueOptions;
        };
        ServiceOptions: {
            encode(message: _143.ServiceOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _143.ServiceOptions;
            fromJSON(object: any): _143.ServiceOptions;
            toJSON(message: _143.ServiceOptions): unknown;
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
            }): _143.ServiceOptions;
        };
        MethodOptions: {
            encode(message: _143.MethodOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _143.MethodOptions;
            fromJSON(object: any): _143.MethodOptions;
            toJSON(message: _143.MethodOptions): unknown;
            fromPartial(object: {
                deprecated?: boolean;
                idempotencyLevel?: _143.MethodOptions_IdempotencyLevel;
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
            }): _143.MethodOptions;
        };
        UninterpretedOption: {
            encode(message: _143.UninterpretedOption, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _143.UninterpretedOption;
            fromJSON(object: any): _143.UninterpretedOption;
            toJSON(message: _143.UninterpretedOption): unknown;
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
            }): _143.UninterpretedOption;
        };
        UninterpretedOption_NamePart: {
            encode(message: _143.UninterpretedOption_NamePart, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _143.UninterpretedOption_NamePart;
            fromJSON(object: any): _143.UninterpretedOption_NamePart;
            toJSON(message: _143.UninterpretedOption_NamePart): unknown;
            fromPartial(object: {
                namePart?: string;
                isExtension?: boolean;
            }): _143.UninterpretedOption_NamePart;
        };
        SourceCodeInfo: {
            encode(message: _143.SourceCodeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _143.SourceCodeInfo;
            fromJSON(object: any): _143.SourceCodeInfo;
            toJSON(message: _143.SourceCodeInfo): unknown;
            fromPartial(object: {
                location?: {
                    path?: number[];
                    span?: number[];
                    leadingComments?: string;
                    trailingComments?: string;
                    leadingDetachedComments?: string[];
                }[];
            }): _143.SourceCodeInfo;
        };
        SourceCodeInfo_Location: {
            encode(message: _143.SourceCodeInfo_Location, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _143.SourceCodeInfo_Location;
            fromJSON(object: any): _143.SourceCodeInfo_Location;
            toJSON(message: _143.SourceCodeInfo_Location): unknown;
            fromPartial(object: {
                path?: number[];
                span?: number[];
                leadingComments?: string;
                trailingComments?: string;
                leadingDetachedComments?: string[];
            }): _143.SourceCodeInfo_Location;
        };
        GeneratedCodeInfo: {
            encode(message: _143.GeneratedCodeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _143.GeneratedCodeInfo;
            fromJSON(object: any): _143.GeneratedCodeInfo;
            toJSON(message: _143.GeneratedCodeInfo): unknown;
            fromPartial(object: {
                annotation?: {
                    path?: number[];
                    sourceFile?: string;
                    begin?: number;
                    end?: number;
                }[];
            }): _143.GeneratedCodeInfo;
        };
        GeneratedCodeInfo_Annotation: {
            encode(message: _143.GeneratedCodeInfo_Annotation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _143.GeneratedCodeInfo_Annotation;
            fromJSON(object: any): _143.GeneratedCodeInfo_Annotation;
            toJSON(message: _143.GeneratedCodeInfo_Annotation): unknown;
            fromPartial(object: {
                path?: number[];
                sourceFile?: string;
                begin?: number;
                end?: number;
            }): _143.GeneratedCodeInfo_Annotation;
        };
    };
}
