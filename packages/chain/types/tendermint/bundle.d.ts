import * as _136 from "./abci/types";
import * as _137 from "./crypto/keys";
import * as _138 from "./crypto/proof";
import * as _139 from "./libs/bits/types";
import * as _140 from "./p2p/types";
import * as _141 from "./types/block";
import * as _142 from "./types/evidence";
import * as _143 from "./types/params";
import * as _144 from "./types/types";
import * as _145 from "./types/validator";
import * as _146 from "./version/types";
export declare namespace tendermint {
    const abci: {
        checkTxTypeFromJSON(object: any): _136.CheckTxType;
        checkTxTypeToJSON(object: _136.CheckTxType): string;
        responseOfferSnapshot_ResultFromJSON(object: any): _136.ResponseOfferSnapshot_Result;
        responseOfferSnapshot_ResultToJSON(object: _136.ResponseOfferSnapshot_Result): string;
        responseApplySnapshotChunk_ResultFromJSON(object: any): _136.ResponseApplySnapshotChunk_Result;
        responseApplySnapshotChunk_ResultToJSON(object: _136.ResponseApplySnapshotChunk_Result): string;
        responseProcessProposal_ProposalStatusFromJSON(object: any): _136.ResponseProcessProposal_ProposalStatus;
        responseProcessProposal_ProposalStatusToJSON(object: _136.ResponseProcessProposal_ProposalStatus): string;
        misbehaviorTypeFromJSON(object: any): _136.MisbehaviorType;
        misbehaviorTypeToJSON(object: _136.MisbehaviorType): string;
        CheckTxType: typeof _136.CheckTxType;
        ResponseOfferSnapshot_Result: typeof _136.ResponseOfferSnapshot_Result;
        ResponseApplySnapshotChunk_Result: typeof _136.ResponseApplySnapshotChunk_Result;
        ResponseProcessProposal_ProposalStatus: typeof _136.ResponseProcessProposal_ProposalStatus;
        MisbehaviorType: typeof _136.MisbehaviorType;
        Request: {
            encode(message: _136.Request, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _136.Request;
            fromJSON(object: any): _136.Request;
            toJSON(message: _136.Request): unknown;
            fromPartial(object: {
                echo?: {
                    message?: string;
                };
                flush?: {};
                info?: {
                    version?: string;
                    blockVersion?: bigint;
                    p2pVersion?: bigint;
                    abciVersion?: string;
                };
                initChain?: {
                    time?: {
                        seconds?: bigint;
                        nanos?: number;
                    };
                    chainId?: string;
                    consensusParams?: {
                        block?: {
                            maxBytes?: bigint;
                            maxGas?: bigint;
                        };
                        evidence?: {
                            maxAgeNumBlocks?: bigint;
                            maxAgeDuration?: {
                                seconds?: bigint;
                                nanos?: number;
                            };
                            maxBytes?: bigint;
                        };
                        validator?: {
                            pubKeyTypes?: string[];
                        };
                        version?: {
                            app?: bigint;
                        };
                    };
                    validators?: {
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        power?: bigint;
                    }[];
                    appStateBytes?: Uint8Array;
                    initialHeight?: bigint;
                };
                query?: {
                    data?: Uint8Array;
                    path?: string;
                    height?: bigint;
                    prove?: boolean;
                };
                beginBlock?: {
                    hash?: Uint8Array;
                    header?: {
                        version?: {
                            block?: bigint;
                            app?: bigint;
                        };
                        chainId?: string;
                        height?: bigint;
                        time?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        lastBlockId?: {
                            hash?: Uint8Array;
                            partSetHeader?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        };
                        lastCommitHash?: Uint8Array;
                        dataHash?: Uint8Array;
                        validatorsHash?: Uint8Array;
                        nextValidatorsHash?: Uint8Array;
                        consensusHash?: Uint8Array;
                        appHash?: Uint8Array;
                        lastResultsHash?: Uint8Array;
                        evidenceHash?: Uint8Array;
                        proposerAddress?: Uint8Array;
                    };
                    lastCommitInfo?: {
                        round?: number;
                        votes?: {
                            validator?: {
                                address?: Uint8Array;
                                power?: bigint;
                            };
                            signedLastBlock?: boolean;
                        }[];
                    };
                    byzantineValidators?: {
                        type?: _136.MisbehaviorType;
                        validator?: {
                            address?: Uint8Array;
                            power?: bigint;
                        };
                        height?: bigint;
                        time?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        totalVotingPower?: bigint;
                    }[];
                };
                checkTx?: {
                    tx?: Uint8Array;
                    type?: _136.CheckTxType;
                };
                deliverTx?: {
                    tx?: Uint8Array;
                };
                endBlock?: {
                    height?: bigint;
                };
                commit?: {};
                listSnapshots?: {};
                offerSnapshot?: {
                    snapshot?: {
                        height?: bigint;
                        format?: number;
                        chunks?: number;
                        hash?: Uint8Array;
                        metadata?: Uint8Array;
                    };
                    appHash?: Uint8Array;
                };
                loadSnapshotChunk?: {
                    height?: bigint;
                    format?: number;
                    chunk?: number;
                };
                applySnapshotChunk?: {
                    index?: number;
                    chunk?: Uint8Array;
                    sender?: string;
                };
                prepareProposal?: {
                    maxTxBytes?: bigint;
                    txs?: Uint8Array[];
                    localLastCommit?: {
                        round?: number;
                        votes?: {
                            validator?: {
                                address?: Uint8Array;
                                power?: bigint;
                            };
                            signedLastBlock?: boolean;
                            voteExtension?: Uint8Array;
                        }[];
                    };
                    misbehavior?: {
                        type?: _136.MisbehaviorType;
                        validator?: {
                            address?: Uint8Array;
                            power?: bigint;
                        };
                        height?: bigint;
                        time?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        totalVotingPower?: bigint;
                    }[];
                    height?: bigint;
                    time?: {
                        seconds?: bigint;
                        nanos?: number;
                    };
                    nextValidatorsHash?: Uint8Array;
                    proposerAddress?: Uint8Array;
                };
                processProposal?: {
                    txs?: Uint8Array[];
                    proposedLastCommit?: {
                        round?: number;
                        votes?: {
                            validator?: {
                                address?: Uint8Array;
                                power?: bigint;
                            };
                            signedLastBlock?: boolean;
                        }[];
                    };
                    misbehavior?: {
                        type?: _136.MisbehaviorType;
                        validator?: {
                            address?: Uint8Array;
                            power?: bigint;
                        };
                        height?: bigint;
                        time?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        totalVotingPower?: bigint;
                    }[];
                    hash?: Uint8Array;
                    height?: bigint;
                    time?: {
                        seconds?: bigint;
                        nanos?: number;
                    };
                    nextValidatorsHash?: Uint8Array;
                    proposerAddress?: Uint8Array;
                };
            }): _136.Request;
        };
        RequestEcho: {
            encode(message: _136.RequestEcho, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _136.RequestEcho;
            fromJSON(object: any): _136.RequestEcho;
            toJSON(message: _136.RequestEcho): unknown;
            fromPartial(object: {
                message?: string;
            }): _136.RequestEcho;
        };
        RequestFlush: {
            encode(_: _136.RequestFlush, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _136.RequestFlush;
            fromJSON(_: any): _136.RequestFlush;
            toJSON(_: _136.RequestFlush): unknown;
            fromPartial(_: {}): _136.RequestFlush;
        };
        RequestInfo: {
            encode(message: _136.RequestInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _136.RequestInfo;
            fromJSON(object: any): _136.RequestInfo;
            toJSON(message: _136.RequestInfo): unknown;
            fromPartial(object: {
                version?: string;
                blockVersion?: bigint;
                p2pVersion?: bigint;
                abciVersion?: string;
            }): _136.RequestInfo;
        };
        RequestInitChain: {
            encode(message: _136.RequestInitChain, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _136.RequestInitChain;
            fromJSON(object: any): _136.RequestInitChain;
            toJSON(message: _136.RequestInitChain): unknown;
            fromPartial(object: {
                time?: {
                    seconds?: bigint;
                    nanos?: number;
                };
                chainId?: string;
                consensusParams?: {
                    block?: {
                        maxBytes?: bigint;
                        maxGas?: bigint;
                    };
                    evidence?: {
                        maxAgeNumBlocks?: bigint;
                        maxAgeDuration?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        maxBytes?: bigint;
                    };
                    validator?: {
                        pubKeyTypes?: string[];
                    };
                    version?: {
                        app?: bigint;
                    };
                };
                validators?: {
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    power?: bigint;
                }[];
                appStateBytes?: Uint8Array;
                initialHeight?: bigint;
            }): _136.RequestInitChain;
        };
        RequestQuery: {
            encode(message: _136.RequestQuery, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _136.RequestQuery;
            fromJSON(object: any): _136.RequestQuery;
            toJSON(message: _136.RequestQuery): unknown;
            fromPartial(object: {
                data?: Uint8Array;
                path?: string;
                height?: bigint;
                prove?: boolean;
            }): _136.RequestQuery;
        };
        RequestBeginBlock: {
            encode(message: _136.RequestBeginBlock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _136.RequestBeginBlock;
            fromJSON(object: any): _136.RequestBeginBlock;
            toJSON(message: _136.RequestBeginBlock): unknown;
            fromPartial(object: {
                hash?: Uint8Array;
                header?: {
                    version?: {
                        block?: bigint;
                        app?: bigint;
                    };
                    chainId?: string;
                    height?: bigint;
                    time?: {
                        seconds?: bigint;
                        nanos?: number;
                    };
                    lastBlockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    lastCommitHash?: Uint8Array;
                    dataHash?: Uint8Array;
                    validatorsHash?: Uint8Array;
                    nextValidatorsHash?: Uint8Array;
                    consensusHash?: Uint8Array;
                    appHash?: Uint8Array;
                    lastResultsHash?: Uint8Array;
                    evidenceHash?: Uint8Array;
                    proposerAddress?: Uint8Array;
                };
                lastCommitInfo?: {
                    round?: number;
                    votes?: {
                        validator?: {
                            address?: Uint8Array;
                            power?: bigint;
                        };
                        signedLastBlock?: boolean;
                    }[];
                };
                byzantineValidators?: {
                    type?: _136.MisbehaviorType;
                    validator?: {
                        address?: Uint8Array;
                        power?: bigint;
                    };
                    height?: bigint;
                    time?: {
                        seconds?: bigint;
                        nanos?: number;
                    };
                    totalVotingPower?: bigint;
                }[];
            }): _136.RequestBeginBlock;
        };
        RequestCheckTx: {
            encode(message: _136.RequestCheckTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _136.RequestCheckTx;
            fromJSON(object: any): _136.RequestCheckTx;
            toJSON(message: _136.RequestCheckTx): unknown;
            fromPartial(object: {
                tx?: Uint8Array;
                type?: _136.CheckTxType;
            }): _136.RequestCheckTx;
        };
        RequestDeliverTx: {
            encode(message: _136.RequestDeliverTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _136.RequestDeliverTx;
            fromJSON(object: any): _136.RequestDeliverTx;
            toJSON(message: _136.RequestDeliverTx): unknown;
            fromPartial(object: {
                tx?: Uint8Array;
            }): _136.RequestDeliverTx;
        };
        RequestEndBlock: {
            encode(message: _136.RequestEndBlock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _136.RequestEndBlock;
            fromJSON(object: any): _136.RequestEndBlock;
            toJSON(message: _136.RequestEndBlock): unknown;
            fromPartial(object: {
                height?: bigint;
            }): _136.RequestEndBlock;
        };
        RequestCommit: {
            encode(_: _136.RequestCommit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _136.RequestCommit;
            fromJSON(_: any): _136.RequestCommit;
            toJSON(_: _136.RequestCommit): unknown;
            fromPartial(_: {}): _136.RequestCommit;
        };
        RequestListSnapshots: {
            encode(_: _136.RequestListSnapshots, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _136.RequestListSnapshots;
            fromJSON(_: any): _136.RequestListSnapshots;
            toJSON(_: _136.RequestListSnapshots): unknown;
            fromPartial(_: {}): _136.RequestListSnapshots;
        };
        RequestOfferSnapshot: {
            encode(message: _136.RequestOfferSnapshot, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _136.RequestOfferSnapshot;
            fromJSON(object: any): _136.RequestOfferSnapshot;
            toJSON(message: _136.RequestOfferSnapshot): unknown;
            fromPartial(object: {
                snapshot?: {
                    height?: bigint;
                    format?: number;
                    chunks?: number;
                    hash?: Uint8Array;
                    metadata?: Uint8Array;
                };
                appHash?: Uint8Array;
            }): _136.RequestOfferSnapshot;
        };
        RequestLoadSnapshotChunk: {
            encode(message: _136.RequestLoadSnapshotChunk, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _136.RequestLoadSnapshotChunk;
            fromJSON(object: any): _136.RequestLoadSnapshotChunk;
            toJSON(message: _136.RequestLoadSnapshotChunk): unknown;
            fromPartial(object: {
                height?: bigint;
                format?: number;
                chunk?: number;
            }): _136.RequestLoadSnapshotChunk;
        };
        RequestApplySnapshotChunk: {
            encode(message: _136.RequestApplySnapshotChunk, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _136.RequestApplySnapshotChunk;
            fromJSON(object: any): _136.RequestApplySnapshotChunk;
            toJSON(message: _136.RequestApplySnapshotChunk): unknown;
            fromPartial(object: {
                index?: number;
                chunk?: Uint8Array;
                sender?: string;
            }): _136.RequestApplySnapshotChunk;
        };
        RequestPrepareProposal: {
            encode(message: _136.RequestPrepareProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _136.RequestPrepareProposal;
            fromJSON(object: any): _136.RequestPrepareProposal;
            toJSON(message: _136.RequestPrepareProposal): unknown;
            fromPartial(object: {
                maxTxBytes?: bigint;
                txs?: Uint8Array[];
                localLastCommit?: {
                    round?: number;
                    votes?: {
                        validator?: {
                            address?: Uint8Array;
                            power?: bigint;
                        };
                        signedLastBlock?: boolean;
                        voteExtension?: Uint8Array;
                    }[];
                };
                misbehavior?: {
                    type?: _136.MisbehaviorType;
                    validator?: {
                        address?: Uint8Array;
                        power?: bigint;
                    };
                    height?: bigint;
                    time?: {
                        seconds?: bigint;
                        nanos?: number;
                    };
                    totalVotingPower?: bigint;
                }[];
                height?: bigint;
                time?: {
                    seconds?: bigint;
                    nanos?: number;
                };
                nextValidatorsHash?: Uint8Array;
                proposerAddress?: Uint8Array;
            }): _136.RequestPrepareProposal;
        };
        RequestProcessProposal: {
            encode(message: _136.RequestProcessProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _136.RequestProcessProposal;
            fromJSON(object: any): _136.RequestProcessProposal;
            toJSON(message: _136.RequestProcessProposal): unknown;
            fromPartial(object: {
                txs?: Uint8Array[];
                proposedLastCommit?: {
                    round?: number;
                    votes?: {
                        validator?: {
                            address?: Uint8Array;
                            power?: bigint;
                        };
                        signedLastBlock?: boolean;
                    }[];
                };
                misbehavior?: {
                    type?: _136.MisbehaviorType;
                    validator?: {
                        address?: Uint8Array;
                        power?: bigint;
                    };
                    height?: bigint;
                    time?: {
                        seconds?: bigint;
                        nanos?: number;
                    };
                    totalVotingPower?: bigint;
                }[];
                hash?: Uint8Array;
                height?: bigint;
                time?: {
                    seconds?: bigint;
                    nanos?: number;
                };
                nextValidatorsHash?: Uint8Array;
                proposerAddress?: Uint8Array;
            }): _136.RequestProcessProposal;
        };
        Response: {
            encode(message: _136.Response, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _136.Response;
            fromJSON(object: any): _136.Response;
            toJSON(message: _136.Response): unknown;
            fromPartial(object: {
                exception?: {
                    error?: string;
                };
                echo?: {
                    message?: string;
                };
                flush?: {};
                info?: {
                    data?: string;
                    version?: string;
                    appVersion?: bigint;
                    lastBlockHeight?: bigint;
                    lastBlockAppHash?: Uint8Array;
                };
                initChain?: {
                    consensusParams?: {
                        block?: {
                            maxBytes?: bigint;
                            maxGas?: bigint;
                        };
                        evidence?: {
                            maxAgeNumBlocks?: bigint;
                            maxAgeDuration?: {
                                seconds?: bigint;
                                nanos?: number;
                            };
                            maxBytes?: bigint;
                        };
                        validator?: {
                            pubKeyTypes?: string[];
                        };
                        version?: {
                            app?: bigint;
                        };
                    };
                    validators?: {
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        power?: bigint;
                    }[];
                    appHash?: Uint8Array;
                };
                query?: {
                    code?: number;
                    log?: string;
                    info?: string;
                    index?: bigint;
                    key?: Uint8Array;
                    value?: Uint8Array;
                    proofOps?: {
                        ops?: {
                            type?: string;
                            key?: Uint8Array;
                            data?: Uint8Array;
                        }[];
                    };
                    height?: bigint;
                    codespace?: string;
                };
                beginBlock?: {
                    events?: {
                        type?: string;
                        attributes?: {
                            key?: string;
                            value?: string;
                            index?: boolean;
                        }[];
                    }[];
                };
                checkTx?: {
                    code?: number;
                    data?: Uint8Array;
                    log?: string;
                    info?: string;
                    gasWanted?: bigint;
                    gasUsed?: bigint;
                    events?: {
                        type?: string;
                        attributes?: {
                            key?: string;
                            value?: string;
                            index?: boolean;
                        }[];
                    }[];
                    codespace?: string;
                    sender?: string;
                    priority?: bigint;
                    mempoolError?: string;
                };
                deliverTx?: {
                    code?: number;
                    data?: Uint8Array;
                    log?: string;
                    info?: string;
                    gasWanted?: bigint;
                    gasUsed?: bigint;
                    events?: {
                        type?: string;
                        attributes?: {
                            key?: string;
                            value?: string;
                            index?: boolean;
                        }[];
                    }[];
                    codespace?: string;
                };
                endBlock?: {
                    validatorUpdates?: {
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        power?: bigint;
                    }[];
                    consensusParamUpdates?: {
                        block?: {
                            maxBytes?: bigint;
                            maxGas?: bigint;
                        };
                        evidence?: {
                            maxAgeNumBlocks?: bigint;
                            maxAgeDuration?: {
                                seconds?: bigint;
                                nanos?: number;
                            };
                            maxBytes?: bigint;
                        };
                        validator?: {
                            pubKeyTypes?: string[];
                        };
                        version?: {
                            app?: bigint;
                        };
                    };
                    events?: {
                        type?: string;
                        attributes?: {
                            key?: string;
                            value?: string;
                            index?: boolean;
                        }[];
                    }[];
                };
                commit?: {
                    data?: Uint8Array;
                    retainHeight?: bigint;
                };
                listSnapshots?: {
                    snapshots?: {
                        height?: bigint;
                        format?: number;
                        chunks?: number;
                        hash?: Uint8Array;
                        metadata?: Uint8Array;
                    }[];
                };
                offerSnapshot?: {
                    result?: _136.ResponseOfferSnapshot_Result;
                };
                loadSnapshotChunk?: {
                    chunk?: Uint8Array;
                };
                applySnapshotChunk?: {
                    result?: _136.ResponseApplySnapshotChunk_Result;
                    refetchChunks?: number[];
                    rejectSenders?: string[];
                };
                prepareProposal?: {
                    txs?: Uint8Array[];
                };
                processProposal?: {
                    status?: _136.ResponseProcessProposal_ProposalStatus;
                };
            }): _136.Response;
        };
        ResponseException: {
            encode(message: _136.ResponseException, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _136.ResponseException;
            fromJSON(object: any): _136.ResponseException;
            toJSON(message: _136.ResponseException): unknown;
            fromPartial(object: {
                error?: string;
            }): _136.ResponseException;
        };
        ResponseEcho: {
            encode(message: _136.ResponseEcho, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _136.ResponseEcho;
            fromJSON(object: any): _136.ResponseEcho;
            toJSON(message: _136.ResponseEcho): unknown;
            fromPartial(object: {
                message?: string;
            }): _136.ResponseEcho;
        };
        ResponseFlush: {
            encode(_: _136.ResponseFlush, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _136.ResponseFlush;
            fromJSON(_: any): _136.ResponseFlush;
            toJSON(_: _136.ResponseFlush): unknown;
            fromPartial(_: {}): _136.ResponseFlush;
        };
        ResponseInfo: {
            encode(message: _136.ResponseInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _136.ResponseInfo;
            fromJSON(object: any): _136.ResponseInfo;
            toJSON(message: _136.ResponseInfo): unknown;
            fromPartial(object: {
                data?: string;
                version?: string;
                appVersion?: bigint;
                lastBlockHeight?: bigint;
                lastBlockAppHash?: Uint8Array;
            }): _136.ResponseInfo;
        };
        ResponseInitChain: {
            encode(message: _136.ResponseInitChain, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _136.ResponseInitChain;
            fromJSON(object: any): _136.ResponseInitChain;
            toJSON(message: _136.ResponseInitChain): unknown;
            fromPartial(object: {
                consensusParams?: {
                    block?: {
                        maxBytes?: bigint;
                        maxGas?: bigint;
                    };
                    evidence?: {
                        maxAgeNumBlocks?: bigint;
                        maxAgeDuration?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        maxBytes?: bigint;
                    };
                    validator?: {
                        pubKeyTypes?: string[];
                    };
                    version?: {
                        app?: bigint;
                    };
                };
                validators?: {
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    power?: bigint;
                }[];
                appHash?: Uint8Array;
            }): _136.ResponseInitChain;
        };
        ResponseQuery: {
            encode(message: _136.ResponseQuery, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _136.ResponseQuery;
            fromJSON(object: any): _136.ResponseQuery;
            toJSON(message: _136.ResponseQuery): unknown;
            fromPartial(object: {
                code?: number;
                log?: string;
                info?: string;
                index?: bigint;
                key?: Uint8Array;
                value?: Uint8Array;
                proofOps?: {
                    ops?: {
                        type?: string;
                        key?: Uint8Array;
                        data?: Uint8Array;
                    }[];
                };
                height?: bigint;
                codespace?: string;
            }): _136.ResponseQuery;
        };
        ResponseBeginBlock: {
            encode(message: _136.ResponseBeginBlock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _136.ResponseBeginBlock;
            fromJSON(object: any): _136.ResponseBeginBlock;
            toJSON(message: _136.ResponseBeginBlock): unknown;
            fromPartial(object: {
                events?: {
                    type?: string;
                    attributes?: {
                        key?: string;
                        value?: string;
                        index?: boolean;
                    }[];
                }[];
            }): _136.ResponseBeginBlock;
        };
        ResponseCheckTx: {
            encode(message: _136.ResponseCheckTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _136.ResponseCheckTx;
            fromJSON(object: any): _136.ResponseCheckTx;
            toJSON(message: _136.ResponseCheckTx): unknown;
            fromPartial(object: {
                code?: number;
                data?: Uint8Array;
                log?: string;
                info?: string;
                gasWanted?: bigint;
                gasUsed?: bigint;
                events?: {
                    type?: string;
                    attributes?: {
                        key?: string;
                        value?: string;
                        index?: boolean;
                    }[];
                }[];
                codespace?: string;
                sender?: string;
                priority?: bigint;
                mempoolError?: string;
            }): _136.ResponseCheckTx;
        };
        ResponseDeliverTx: {
            encode(message: _136.ResponseDeliverTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _136.ResponseDeliverTx;
            fromJSON(object: any): _136.ResponseDeliverTx;
            toJSON(message: _136.ResponseDeliverTx): unknown;
            fromPartial(object: {
                code?: number;
                data?: Uint8Array;
                log?: string;
                info?: string;
                gasWanted?: bigint;
                gasUsed?: bigint;
                events?: {
                    type?: string;
                    attributes?: {
                        key?: string;
                        value?: string;
                        index?: boolean;
                    }[];
                }[];
                codespace?: string;
            }): _136.ResponseDeliverTx;
        };
        ResponseEndBlock: {
            encode(message: _136.ResponseEndBlock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _136.ResponseEndBlock;
            fromJSON(object: any): _136.ResponseEndBlock;
            toJSON(message: _136.ResponseEndBlock): unknown;
            fromPartial(object: {
                validatorUpdates?: {
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    power?: bigint;
                }[];
                consensusParamUpdates?: {
                    block?: {
                        maxBytes?: bigint;
                        maxGas?: bigint;
                    };
                    evidence?: {
                        maxAgeNumBlocks?: bigint;
                        maxAgeDuration?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        maxBytes?: bigint;
                    };
                    validator?: {
                        pubKeyTypes?: string[];
                    };
                    version?: {
                        app?: bigint;
                    };
                };
                events?: {
                    type?: string;
                    attributes?: {
                        key?: string;
                        value?: string;
                        index?: boolean;
                    }[];
                }[];
            }): _136.ResponseEndBlock;
        };
        ResponseCommit: {
            encode(message: _136.ResponseCommit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _136.ResponseCommit;
            fromJSON(object: any): _136.ResponseCommit;
            toJSON(message: _136.ResponseCommit): unknown;
            fromPartial(object: {
                data?: Uint8Array;
                retainHeight?: bigint;
            }): _136.ResponseCommit;
        };
        ResponseListSnapshots: {
            encode(message: _136.ResponseListSnapshots, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _136.ResponseListSnapshots;
            fromJSON(object: any): _136.ResponseListSnapshots;
            toJSON(message: _136.ResponseListSnapshots): unknown;
            fromPartial(object: {
                snapshots?: {
                    height?: bigint;
                    format?: number;
                    chunks?: number;
                    hash?: Uint8Array;
                    metadata?: Uint8Array;
                }[];
            }): _136.ResponseListSnapshots;
        };
        ResponseOfferSnapshot: {
            encode(message: _136.ResponseOfferSnapshot, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _136.ResponseOfferSnapshot;
            fromJSON(object: any): _136.ResponseOfferSnapshot;
            toJSON(message: _136.ResponseOfferSnapshot): unknown;
            fromPartial(object: {
                result?: _136.ResponseOfferSnapshot_Result;
            }): _136.ResponseOfferSnapshot;
        };
        ResponseLoadSnapshotChunk: {
            encode(message: _136.ResponseLoadSnapshotChunk, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _136.ResponseLoadSnapshotChunk;
            fromJSON(object: any): _136.ResponseLoadSnapshotChunk;
            toJSON(message: _136.ResponseLoadSnapshotChunk): unknown;
            fromPartial(object: {
                chunk?: Uint8Array;
            }): _136.ResponseLoadSnapshotChunk;
        };
        ResponseApplySnapshotChunk: {
            encode(message: _136.ResponseApplySnapshotChunk, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _136.ResponseApplySnapshotChunk;
            fromJSON(object: any): _136.ResponseApplySnapshotChunk;
            toJSON(message: _136.ResponseApplySnapshotChunk): unknown;
            fromPartial(object: {
                result?: _136.ResponseApplySnapshotChunk_Result;
                refetchChunks?: number[];
                rejectSenders?: string[];
            }): _136.ResponseApplySnapshotChunk;
        };
        ResponsePrepareProposal: {
            encode(message: _136.ResponsePrepareProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _136.ResponsePrepareProposal;
            fromJSON(object: any): _136.ResponsePrepareProposal;
            toJSON(message: _136.ResponsePrepareProposal): unknown;
            fromPartial(object: {
                txs?: Uint8Array[];
            }): _136.ResponsePrepareProposal;
        };
        ResponseProcessProposal: {
            encode(message: _136.ResponseProcessProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _136.ResponseProcessProposal;
            fromJSON(object: any): _136.ResponseProcessProposal;
            toJSON(message: _136.ResponseProcessProposal): unknown;
            fromPartial(object: {
                status?: _136.ResponseProcessProposal_ProposalStatus;
            }): _136.ResponseProcessProposal;
        };
        CommitInfo: {
            encode(message: _136.CommitInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _136.CommitInfo;
            fromJSON(object: any): _136.CommitInfo;
            toJSON(message: _136.CommitInfo): unknown;
            fromPartial(object: {
                round?: number;
                votes?: {
                    validator?: {
                        address?: Uint8Array;
                        power?: bigint;
                    };
                    signedLastBlock?: boolean;
                }[];
            }): _136.CommitInfo;
        };
        ExtendedCommitInfo: {
            encode(message: _136.ExtendedCommitInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _136.ExtendedCommitInfo;
            fromJSON(object: any): _136.ExtendedCommitInfo;
            toJSON(message: _136.ExtendedCommitInfo): unknown;
            fromPartial(object: {
                round?: number;
                votes?: {
                    validator?: {
                        address?: Uint8Array;
                        power?: bigint;
                    };
                    signedLastBlock?: boolean;
                    voteExtension?: Uint8Array;
                }[];
            }): _136.ExtendedCommitInfo;
        };
        Event: {
            encode(message: _136.Event, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _136.Event;
            fromJSON(object: any): _136.Event;
            toJSON(message: _136.Event): unknown;
            fromPartial(object: {
                type?: string;
                attributes?: {
                    key?: string;
                    value?: string;
                    index?: boolean;
                }[];
            }): _136.Event;
        };
        EventAttribute: {
            encode(message: _136.EventAttribute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _136.EventAttribute;
            fromJSON(object: any): _136.EventAttribute;
            toJSON(message: _136.EventAttribute): unknown;
            fromPartial(object: {
                key?: string;
                value?: string;
                index?: boolean;
            }): _136.EventAttribute;
        };
        TxResult: {
            encode(message: _136.TxResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _136.TxResult;
            fromJSON(object: any): _136.TxResult;
            toJSON(message: _136.TxResult): unknown;
            fromPartial(object: {
                height?: bigint;
                index?: number;
                tx?: Uint8Array;
                result?: {
                    code?: number;
                    data?: Uint8Array;
                    log?: string;
                    info?: string;
                    gasWanted?: bigint;
                    gasUsed?: bigint;
                    events?: {
                        type?: string;
                        attributes?: {
                            key?: string;
                            value?: string;
                            index?: boolean;
                        }[];
                    }[];
                    codespace?: string;
                };
            }): _136.TxResult;
        };
        Validator: {
            encode(message: _136.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _136.Validator;
            fromJSON(object: any): _136.Validator;
            toJSON(message: _136.Validator): unknown;
            fromPartial(object: {
                address?: Uint8Array;
                power?: bigint;
            }): _136.Validator;
        };
        ValidatorUpdate: {
            encode(message: _136.ValidatorUpdate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _136.ValidatorUpdate;
            fromJSON(object: any): _136.ValidatorUpdate;
            toJSON(message: _136.ValidatorUpdate): unknown;
            fromPartial(object: {
                pubKey?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                };
                power?: bigint;
            }): _136.ValidatorUpdate;
        };
        VoteInfo: {
            encode(message: _136.VoteInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _136.VoteInfo;
            fromJSON(object: any): _136.VoteInfo;
            toJSON(message: _136.VoteInfo): unknown;
            fromPartial(object: {
                validator?: {
                    address?: Uint8Array;
                    power?: bigint;
                };
                signedLastBlock?: boolean;
            }): _136.VoteInfo;
        };
        ExtendedVoteInfo: {
            encode(message: _136.ExtendedVoteInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _136.ExtendedVoteInfo;
            fromJSON(object: any): _136.ExtendedVoteInfo;
            toJSON(message: _136.ExtendedVoteInfo): unknown;
            fromPartial(object: {
                validator?: {
                    address?: Uint8Array;
                    power?: bigint;
                };
                signedLastBlock?: boolean;
                voteExtension?: Uint8Array;
            }): _136.ExtendedVoteInfo;
        };
        Misbehavior: {
            encode(message: _136.Misbehavior, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _136.Misbehavior;
            fromJSON(object: any): _136.Misbehavior;
            toJSON(message: _136.Misbehavior): unknown;
            fromPartial(object: {
                type?: _136.MisbehaviorType;
                validator?: {
                    address?: Uint8Array;
                    power?: bigint;
                };
                height?: bigint;
                time?: {
                    seconds?: bigint;
                    nanos?: number;
                };
                totalVotingPower?: bigint;
            }): _136.Misbehavior;
        };
        Snapshot: {
            encode(message: _136.Snapshot, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _136.Snapshot;
            fromJSON(object: any): _136.Snapshot;
            toJSON(message: _136.Snapshot): unknown;
            fromPartial(object: {
                height?: bigint;
                format?: number;
                chunks?: number;
                hash?: Uint8Array;
                metadata?: Uint8Array;
            }): _136.Snapshot;
        };
    };
    const crypto: {
        Proof: {
            encode(message: _138.Proof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _138.Proof;
            fromJSON(object: any): _138.Proof;
            toJSON(message: _138.Proof): unknown;
            fromPartial(object: {
                total?: bigint;
                index?: bigint;
                leafHash?: Uint8Array;
                aunts?: Uint8Array[];
            }): _138.Proof;
        };
        ValueOp: {
            encode(message: _138.ValueOp, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _138.ValueOp;
            fromJSON(object: any): _138.ValueOp;
            toJSON(message: _138.ValueOp): unknown;
            fromPartial(object: {
                key?: Uint8Array;
                proof?: {
                    total?: bigint;
                    index?: bigint;
                    leafHash?: Uint8Array;
                    aunts?: Uint8Array[];
                };
            }): _138.ValueOp;
        };
        DominoOp: {
            encode(message: _138.DominoOp, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _138.DominoOp;
            fromJSON(object: any): _138.DominoOp;
            toJSON(message: _138.DominoOp): unknown;
            fromPartial(object: {
                key?: string;
                input?: string;
                output?: string;
            }): _138.DominoOp;
        };
        ProofOp: {
            encode(message: _138.ProofOp, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _138.ProofOp;
            fromJSON(object: any): _138.ProofOp;
            toJSON(message: _138.ProofOp): unknown;
            fromPartial(object: {
                type?: string;
                key?: Uint8Array;
                data?: Uint8Array;
            }): _138.ProofOp;
        };
        ProofOps: {
            encode(message: _138.ProofOps, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _138.ProofOps;
            fromJSON(object: any): _138.ProofOps;
            toJSON(message: _138.ProofOps): unknown;
            fromPartial(object: {
                ops?: {
                    type?: string;
                    key?: Uint8Array;
                    data?: Uint8Array;
                }[];
            }): _138.ProofOps;
        };
        PublicKey: {
            encode(message: _137.PublicKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _137.PublicKey;
            fromJSON(object: any): _137.PublicKey;
            toJSON(message: _137.PublicKey): unknown;
            fromPartial(object: {
                ed25519?: Uint8Array;
                secp256k1?: Uint8Array;
            }): _137.PublicKey;
        };
    };
    namespace libs {
        const bits: {
            BitArray: {
                encode(message: _139.BitArray, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _139.BitArray;
                fromJSON(object: any): _139.BitArray;
                toJSON(message: _139.BitArray): unknown;
                fromPartial(object: {
                    bits?: bigint;
                    elems?: bigint[];
                }): _139.BitArray;
            };
        };
    }
    const p2p: {
        NetAddress: {
            encode(message: _140.NetAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _140.NetAddress;
            fromJSON(object: any): _140.NetAddress;
            toJSON(message: _140.NetAddress): unknown;
            fromPartial(object: {
                id?: string;
                ip?: string;
                port?: number;
            }): _140.NetAddress;
        };
        ProtocolVersion: {
            encode(message: _140.ProtocolVersion, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _140.ProtocolVersion;
            fromJSON(object: any): _140.ProtocolVersion;
            toJSON(message: _140.ProtocolVersion): unknown;
            fromPartial(object: {
                p2p?: bigint;
                block?: bigint;
                app?: bigint;
            }): _140.ProtocolVersion;
        };
        DefaultNodeInfo: {
            encode(message: _140.DefaultNodeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _140.DefaultNodeInfo;
            fromJSON(object: any): _140.DefaultNodeInfo;
            toJSON(message: _140.DefaultNodeInfo): unknown;
            fromPartial(object: {
                protocolVersion?: {
                    p2p?: bigint;
                    block?: bigint;
                    app?: bigint;
                };
                defaultNodeId?: string;
                listenAddr?: string;
                network?: string;
                version?: string;
                channels?: Uint8Array;
                moniker?: string;
                other?: {
                    txIndex?: string;
                    rpcAddress?: string;
                };
            }): _140.DefaultNodeInfo;
        };
        DefaultNodeInfoOther: {
            encode(message: _140.DefaultNodeInfoOther, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _140.DefaultNodeInfoOther;
            fromJSON(object: any): _140.DefaultNodeInfoOther;
            toJSON(message: _140.DefaultNodeInfoOther): unknown;
            fromPartial(object: {
                txIndex?: string;
                rpcAddress?: string;
            }): _140.DefaultNodeInfoOther;
        };
    };
    const types: {
        ValidatorSet: {
            encode(message: _145.ValidatorSet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _145.ValidatorSet;
            fromJSON(object: any): _145.ValidatorSet;
            toJSON(message: _145.ValidatorSet): unknown;
            fromPartial(object: {
                validators?: {
                    address?: Uint8Array;
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    votingPower?: bigint;
                    proposerPriority?: bigint;
                }[];
                proposer?: {
                    address?: Uint8Array;
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    votingPower?: bigint;
                    proposerPriority?: bigint;
                };
                totalVotingPower?: bigint;
            }): _145.ValidatorSet;
        };
        Validator: {
            encode(message: _145.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _145.Validator;
            fromJSON(object: any): _145.Validator;
            toJSON(message: _145.Validator): unknown;
            fromPartial(object: {
                address?: Uint8Array;
                pubKey?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                };
                votingPower?: bigint;
                proposerPriority?: bigint;
            }): _145.Validator;
        };
        SimpleValidator: {
            encode(message: _145.SimpleValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _145.SimpleValidator;
            fromJSON(object: any): _145.SimpleValidator;
            toJSON(message: _145.SimpleValidator): unknown;
            fromPartial(object: {
                pubKey?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                };
                votingPower?: bigint;
            }): _145.SimpleValidator;
        };
        blockIDFlagFromJSON(object: any): _144.BlockIDFlag;
        blockIDFlagToJSON(object: _144.BlockIDFlag): string;
        signedMsgTypeFromJSON(object: any): _144.SignedMsgType;
        signedMsgTypeToJSON(object: _144.SignedMsgType): string;
        BlockIDFlag: typeof _144.BlockIDFlag;
        SignedMsgType: typeof _144.SignedMsgType;
        PartSetHeader: {
            encode(message: _144.PartSetHeader, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _144.PartSetHeader;
            fromJSON(object: any): _144.PartSetHeader;
            toJSON(message: _144.PartSetHeader): unknown;
            fromPartial(object: {
                total?: number;
                hash?: Uint8Array;
            }): _144.PartSetHeader;
        };
        Part: {
            encode(message: _144.Part, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _144.Part;
            fromJSON(object: any): _144.Part;
            toJSON(message: _144.Part): unknown;
            fromPartial(object: {
                index?: number;
                bytes?: Uint8Array;
                proof?: {
                    total?: bigint;
                    index?: bigint;
                    leafHash?: Uint8Array;
                    aunts?: Uint8Array[];
                };
            }): _144.Part;
        };
        BlockID: {
            encode(message: _144.BlockID, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _144.BlockID;
            fromJSON(object: any): _144.BlockID;
            toJSON(message: _144.BlockID): unknown;
            fromPartial(object: {
                hash?: Uint8Array;
                partSetHeader?: {
                    total?: number;
                    hash?: Uint8Array;
                };
            }): _144.BlockID;
        };
        Header: {
            encode(message: _144.Header, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _144.Header;
            fromJSON(object: any): _144.Header;
            toJSON(message: _144.Header): unknown;
            fromPartial(object: {
                version?: {
                    block?: bigint;
                    app?: bigint;
                };
                chainId?: string;
                height?: bigint;
                time?: {
                    seconds?: bigint;
                    nanos?: number;
                };
                lastBlockId?: {
                    hash?: Uint8Array;
                    partSetHeader?: {
                        total?: number;
                        hash?: Uint8Array;
                    };
                };
                lastCommitHash?: Uint8Array;
                dataHash?: Uint8Array;
                validatorsHash?: Uint8Array;
                nextValidatorsHash?: Uint8Array;
                consensusHash?: Uint8Array;
                appHash?: Uint8Array;
                lastResultsHash?: Uint8Array;
                evidenceHash?: Uint8Array;
                proposerAddress?: Uint8Array;
            }): _144.Header;
        };
        Data: {
            encode(message: _144.Data, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _144.Data;
            fromJSON(object: any): _144.Data;
            toJSON(message: _144.Data): unknown;
            fromPartial(object: {
                txs?: Uint8Array[];
            }): _144.Data;
        };
        Vote: {
            encode(message: _144.Vote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _144.Vote;
            fromJSON(object: any): _144.Vote;
            toJSON(message: _144.Vote): unknown;
            fromPartial(object: {
                type?: _144.SignedMsgType;
                height?: bigint;
                round?: number;
                blockId?: {
                    hash?: Uint8Array;
                    partSetHeader?: {
                        total?: number;
                        hash?: Uint8Array;
                    };
                };
                timestamp?: {
                    seconds?: bigint;
                    nanos?: number;
                };
                validatorAddress?: Uint8Array;
                validatorIndex?: number;
                signature?: Uint8Array;
            }): _144.Vote;
        };
        Commit: {
            encode(message: _144.Commit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _144.Commit;
            fromJSON(object: any): _144.Commit;
            toJSON(message: _144.Commit): unknown;
            fromPartial(object: {
                height?: bigint;
                round?: number;
                blockId?: {
                    hash?: Uint8Array;
                    partSetHeader?: {
                        total?: number;
                        hash?: Uint8Array;
                    };
                };
                signatures?: {
                    blockIdFlag?: _144.BlockIDFlag;
                    validatorAddress?: Uint8Array;
                    timestamp?: {
                        seconds?: bigint;
                        nanos?: number;
                    };
                    signature?: Uint8Array;
                }[];
            }): _144.Commit;
        };
        CommitSig: {
            encode(message: _144.CommitSig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _144.CommitSig;
            fromJSON(object: any): _144.CommitSig;
            toJSON(message: _144.CommitSig): unknown;
            fromPartial(object: {
                blockIdFlag?: _144.BlockIDFlag;
                validatorAddress?: Uint8Array;
                timestamp?: {
                    seconds?: bigint;
                    nanos?: number;
                };
                signature?: Uint8Array;
            }): _144.CommitSig;
        };
        Proposal: {
            encode(message: _144.Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _144.Proposal;
            fromJSON(object: any): _144.Proposal;
            toJSON(message: _144.Proposal): unknown;
            fromPartial(object: {
                type?: _144.SignedMsgType;
                height?: bigint;
                round?: number;
                polRound?: number;
                blockId?: {
                    hash?: Uint8Array;
                    partSetHeader?: {
                        total?: number;
                        hash?: Uint8Array;
                    };
                };
                timestamp?: {
                    seconds?: bigint;
                    nanos?: number;
                };
                signature?: Uint8Array;
            }): _144.Proposal;
        };
        SignedHeader: {
            encode(message: _144.SignedHeader, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _144.SignedHeader;
            fromJSON(object: any): _144.SignedHeader;
            toJSON(message: _144.SignedHeader): unknown;
            fromPartial(object: {
                header?: {
                    version?: {
                        block?: bigint;
                        app?: bigint;
                    };
                    chainId?: string;
                    height?: bigint;
                    time?: {
                        seconds?: bigint;
                        nanos?: number;
                    };
                    lastBlockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    lastCommitHash?: Uint8Array;
                    dataHash?: Uint8Array;
                    validatorsHash?: Uint8Array;
                    nextValidatorsHash?: Uint8Array;
                    consensusHash?: Uint8Array;
                    appHash?: Uint8Array;
                    lastResultsHash?: Uint8Array;
                    evidenceHash?: Uint8Array;
                    proposerAddress?: Uint8Array;
                };
                commit?: {
                    height?: bigint;
                    round?: number;
                    blockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    signatures?: {
                        blockIdFlag?: _144.BlockIDFlag;
                        validatorAddress?: Uint8Array;
                        timestamp?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        signature?: Uint8Array;
                    }[];
                };
            }): _144.SignedHeader;
        };
        LightBlock: {
            encode(message: _144.LightBlock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _144.LightBlock;
            fromJSON(object: any): _144.LightBlock;
            toJSON(message: _144.LightBlock): unknown;
            fromPartial(object: {
                signedHeader?: {
                    header?: {
                        version?: {
                            block?: bigint;
                            app?: bigint;
                        };
                        chainId?: string;
                        height?: bigint;
                        time?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        lastBlockId?: {
                            hash?: Uint8Array;
                            partSetHeader?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        };
                        lastCommitHash?: Uint8Array;
                        dataHash?: Uint8Array;
                        validatorsHash?: Uint8Array;
                        nextValidatorsHash?: Uint8Array;
                        consensusHash?: Uint8Array;
                        appHash?: Uint8Array;
                        lastResultsHash?: Uint8Array;
                        evidenceHash?: Uint8Array;
                        proposerAddress?: Uint8Array;
                    };
                    commit?: {
                        height?: bigint;
                        round?: number;
                        blockId?: {
                            hash?: Uint8Array;
                            partSetHeader?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        };
                        signatures?: {
                            blockIdFlag?: _144.BlockIDFlag;
                            validatorAddress?: Uint8Array;
                            timestamp?: {
                                seconds?: bigint;
                                nanos?: number;
                            };
                            signature?: Uint8Array;
                        }[];
                    };
                };
                validatorSet?: {
                    validators?: {
                        address?: Uint8Array;
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        votingPower?: bigint;
                        proposerPriority?: bigint;
                    }[];
                    proposer?: {
                        address?: Uint8Array;
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        votingPower?: bigint;
                        proposerPriority?: bigint;
                    };
                    totalVotingPower?: bigint;
                };
            }): _144.LightBlock;
        };
        BlockMeta: {
            encode(message: _144.BlockMeta, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _144.BlockMeta;
            fromJSON(object: any): _144.BlockMeta;
            toJSON(message: _144.BlockMeta): unknown;
            fromPartial(object: {
                blockId?: {
                    hash?: Uint8Array;
                    partSetHeader?: {
                        total?: number;
                        hash?: Uint8Array;
                    };
                };
                blockSize?: bigint;
                header?: {
                    version?: {
                        block?: bigint;
                        app?: bigint;
                    };
                    chainId?: string;
                    height?: bigint;
                    time?: {
                        seconds?: bigint;
                        nanos?: number;
                    };
                    lastBlockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    lastCommitHash?: Uint8Array;
                    dataHash?: Uint8Array;
                    validatorsHash?: Uint8Array;
                    nextValidatorsHash?: Uint8Array;
                    consensusHash?: Uint8Array;
                    appHash?: Uint8Array;
                    lastResultsHash?: Uint8Array;
                    evidenceHash?: Uint8Array;
                    proposerAddress?: Uint8Array;
                };
                numTxs?: bigint;
            }): _144.BlockMeta;
        };
        TxProof: {
            encode(message: _144.TxProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _144.TxProof;
            fromJSON(object: any): _144.TxProof;
            toJSON(message: _144.TxProof): unknown;
            fromPartial(object: {
                rootHash?: Uint8Array;
                data?: Uint8Array;
                proof?: {
                    total?: bigint;
                    index?: bigint;
                    leafHash?: Uint8Array;
                    aunts?: Uint8Array[];
                };
            }): _144.TxProof;
        };
        ConsensusParams: {
            encode(message: _143.ConsensusParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _143.ConsensusParams;
            fromJSON(object: any): _143.ConsensusParams;
            toJSON(message: _143.ConsensusParams): unknown;
            fromPartial(object: {
                block?: {
                    maxBytes?: bigint;
                    maxGas?: bigint;
                };
                evidence?: {
                    maxAgeNumBlocks?: bigint;
                    maxAgeDuration?: {
                        seconds?: bigint;
                        nanos?: number;
                    };
                    maxBytes?: bigint;
                };
                validator?: {
                    pubKeyTypes?: string[];
                };
                version?: {
                    app?: bigint;
                };
            }): _143.ConsensusParams;
        };
        BlockParams: {
            encode(message: _143.BlockParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _143.BlockParams;
            fromJSON(object: any): _143.BlockParams;
            toJSON(message: _143.BlockParams): unknown;
            fromPartial(object: {
                maxBytes?: bigint;
                maxGas?: bigint;
            }): _143.BlockParams;
        };
        EvidenceParams: {
            encode(message: _143.EvidenceParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _143.EvidenceParams;
            fromJSON(object: any): _143.EvidenceParams;
            toJSON(message: _143.EvidenceParams): unknown;
            fromPartial(object: {
                maxAgeNumBlocks?: bigint;
                maxAgeDuration?: {
                    seconds?: bigint;
                    nanos?: number;
                };
                maxBytes?: bigint;
            }): _143.EvidenceParams;
        };
        ValidatorParams: {
            encode(message: _143.ValidatorParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _143.ValidatorParams;
            fromJSON(object: any): _143.ValidatorParams;
            toJSON(message: _143.ValidatorParams): unknown;
            fromPartial(object: {
                pubKeyTypes?: string[];
            }): _143.ValidatorParams;
        };
        VersionParams: {
            encode(message: _143.VersionParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _143.VersionParams;
            fromJSON(object: any): _143.VersionParams;
            toJSON(message: _143.VersionParams): unknown;
            fromPartial(object: {
                app?: bigint;
            }): _143.VersionParams;
        };
        HashedParams: {
            encode(message: _143.HashedParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _143.HashedParams;
            fromJSON(object: any): _143.HashedParams;
            toJSON(message: _143.HashedParams): unknown;
            fromPartial(object: {
                blockMaxBytes?: bigint;
                blockMaxGas?: bigint;
            }): _143.HashedParams;
        };
        Evidence: {
            encode(message: _142.Evidence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _142.Evidence;
            fromJSON(object: any): _142.Evidence;
            toJSON(message: _142.Evidence): unknown;
            fromPartial(object: {
                duplicateVoteEvidence?: {
                    voteA?: {
                        type?: _144.SignedMsgType;
                        height?: bigint;
                        round?: number;
                        blockId?: {
                            hash?: Uint8Array;
                            partSetHeader?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        };
                        timestamp?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        validatorAddress?: Uint8Array;
                        validatorIndex?: number;
                        signature?: Uint8Array;
                    };
                    voteB?: {
                        type?: _144.SignedMsgType;
                        height?: bigint;
                        round?: number;
                        blockId?: {
                            hash?: Uint8Array;
                            partSetHeader?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        };
                        timestamp?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        validatorAddress?: Uint8Array;
                        validatorIndex?: number;
                        signature?: Uint8Array;
                    };
                    totalVotingPower?: bigint;
                    validatorPower?: bigint;
                    timestamp?: {
                        seconds?: bigint;
                        nanos?: number;
                    };
                };
                lightClientAttackEvidence?: {
                    conflictingBlock?: {
                        signedHeader?: {
                            header?: {
                                version?: {
                                    block?: bigint;
                                    app?: bigint;
                                };
                                chainId?: string;
                                height?: bigint;
                                time?: {
                                    seconds?: bigint;
                                    nanos?: number;
                                };
                                lastBlockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                lastCommitHash?: Uint8Array;
                                dataHash?: Uint8Array;
                                validatorsHash?: Uint8Array;
                                nextValidatorsHash?: Uint8Array;
                                consensusHash?: Uint8Array;
                                appHash?: Uint8Array;
                                lastResultsHash?: Uint8Array;
                                evidenceHash?: Uint8Array;
                                proposerAddress?: Uint8Array;
                            };
                            commit?: {
                                height?: bigint;
                                round?: number;
                                blockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                signatures?: {
                                    blockIdFlag?: _144.BlockIDFlag;
                                    validatorAddress?: Uint8Array;
                                    timestamp?: {
                                        seconds?: bigint;
                                        nanos?: number;
                                    };
                                    signature?: Uint8Array;
                                }[];
                            };
                        };
                        validatorSet?: {
                            validators?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: bigint;
                                proposerPriority?: bigint;
                            }[];
                            proposer?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: bigint;
                                proposerPriority?: bigint;
                            };
                            totalVotingPower?: bigint;
                        };
                    };
                    commonHeight?: bigint;
                    byzantineValidators?: {
                        address?: Uint8Array;
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        votingPower?: bigint;
                        proposerPriority?: bigint;
                    }[];
                    totalVotingPower?: bigint;
                    timestamp?: {
                        seconds?: bigint;
                        nanos?: number;
                    };
                };
            }): _142.Evidence;
        };
        DuplicateVoteEvidence: {
            encode(message: _142.DuplicateVoteEvidence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _142.DuplicateVoteEvidence;
            fromJSON(object: any): _142.DuplicateVoteEvidence;
            toJSON(message: _142.DuplicateVoteEvidence): unknown;
            fromPartial(object: {
                voteA?: {
                    type?: _144.SignedMsgType;
                    height?: bigint;
                    round?: number;
                    blockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    timestamp?: {
                        seconds?: bigint;
                        nanos?: number;
                    };
                    validatorAddress?: Uint8Array;
                    validatorIndex?: number;
                    signature?: Uint8Array;
                };
                voteB?: {
                    type?: _144.SignedMsgType;
                    height?: bigint;
                    round?: number;
                    blockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    timestamp?: {
                        seconds?: bigint;
                        nanos?: number;
                    };
                    validatorAddress?: Uint8Array;
                    validatorIndex?: number;
                    signature?: Uint8Array;
                };
                totalVotingPower?: bigint;
                validatorPower?: bigint;
                timestamp?: {
                    seconds?: bigint;
                    nanos?: number;
                };
            }): _142.DuplicateVoteEvidence;
        };
        LightClientAttackEvidence: {
            encode(message: _142.LightClientAttackEvidence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _142.LightClientAttackEvidence;
            fromJSON(object: any): _142.LightClientAttackEvidence;
            toJSON(message: _142.LightClientAttackEvidence): unknown;
            fromPartial(object: {
                conflictingBlock?: {
                    signedHeader?: {
                        header?: {
                            version?: {
                                block?: bigint;
                                app?: bigint;
                            };
                            chainId?: string;
                            height?: bigint;
                            time?: {
                                seconds?: bigint;
                                nanos?: number;
                            };
                            lastBlockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            lastCommitHash?: Uint8Array;
                            dataHash?: Uint8Array;
                            validatorsHash?: Uint8Array;
                            nextValidatorsHash?: Uint8Array;
                            consensusHash?: Uint8Array;
                            appHash?: Uint8Array;
                            lastResultsHash?: Uint8Array;
                            evidenceHash?: Uint8Array;
                            proposerAddress?: Uint8Array;
                        };
                        commit?: {
                            height?: bigint;
                            round?: number;
                            blockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            signatures?: {
                                blockIdFlag?: _144.BlockIDFlag;
                                validatorAddress?: Uint8Array;
                                timestamp?: {
                                    seconds?: bigint;
                                    nanos?: number;
                                };
                                signature?: Uint8Array;
                            }[];
                        };
                    };
                    validatorSet?: {
                        validators?: {
                            address?: Uint8Array;
                            pubKey?: {
                                ed25519?: Uint8Array;
                                secp256k1?: Uint8Array;
                            };
                            votingPower?: bigint;
                            proposerPriority?: bigint;
                        }[];
                        proposer?: {
                            address?: Uint8Array;
                            pubKey?: {
                                ed25519?: Uint8Array;
                                secp256k1?: Uint8Array;
                            };
                            votingPower?: bigint;
                            proposerPriority?: bigint;
                        };
                        totalVotingPower?: bigint;
                    };
                };
                commonHeight?: bigint;
                byzantineValidators?: {
                    address?: Uint8Array;
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    votingPower?: bigint;
                    proposerPriority?: bigint;
                }[];
                totalVotingPower?: bigint;
                timestamp?: {
                    seconds?: bigint;
                    nanos?: number;
                };
            }): _142.LightClientAttackEvidence;
        };
        EvidenceList: {
            encode(message: _142.EvidenceList, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _142.EvidenceList;
            fromJSON(object: any): _142.EvidenceList;
            toJSON(message: _142.EvidenceList): unknown;
            fromPartial(object: {
                evidence?: {
                    duplicateVoteEvidence?: {
                        voteA?: {
                            type?: _144.SignedMsgType;
                            height?: bigint;
                            round?: number;
                            blockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            timestamp?: {
                                seconds?: bigint;
                                nanos?: number;
                            };
                            validatorAddress?: Uint8Array;
                            validatorIndex?: number;
                            signature?: Uint8Array;
                        };
                        voteB?: {
                            type?: _144.SignedMsgType;
                            height?: bigint;
                            round?: number;
                            blockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            timestamp?: {
                                seconds?: bigint;
                                nanos?: number;
                            };
                            validatorAddress?: Uint8Array;
                            validatorIndex?: number;
                            signature?: Uint8Array;
                        };
                        totalVotingPower?: bigint;
                        validatorPower?: bigint;
                        timestamp?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                    };
                    lightClientAttackEvidence?: {
                        conflictingBlock?: {
                            signedHeader?: {
                                header?: {
                                    version?: {
                                        block?: bigint;
                                        app?: bigint;
                                    };
                                    chainId?: string;
                                    height?: bigint;
                                    time?: {
                                        seconds?: bigint;
                                        nanos?: number;
                                    };
                                    lastBlockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    lastCommitHash?: Uint8Array;
                                    dataHash?: Uint8Array;
                                    validatorsHash?: Uint8Array;
                                    nextValidatorsHash?: Uint8Array;
                                    consensusHash?: Uint8Array;
                                    appHash?: Uint8Array;
                                    lastResultsHash?: Uint8Array;
                                    evidenceHash?: Uint8Array;
                                    proposerAddress?: Uint8Array;
                                };
                                commit?: {
                                    height?: bigint;
                                    round?: number;
                                    blockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    signatures?: {
                                        blockIdFlag?: _144.BlockIDFlag;
                                        validatorAddress?: Uint8Array;
                                        timestamp?: {
                                            seconds?: bigint;
                                            nanos?: number;
                                        };
                                        signature?: Uint8Array;
                                    }[];
                                };
                            };
                            validatorSet?: {
                                validators?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: bigint;
                                    proposerPriority?: bigint;
                                }[];
                                proposer?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: bigint;
                                    proposerPriority?: bigint;
                                };
                                totalVotingPower?: bigint;
                            };
                        };
                        commonHeight?: bigint;
                        byzantineValidators?: {
                            address?: Uint8Array;
                            pubKey?: {
                                ed25519?: Uint8Array;
                                secp256k1?: Uint8Array;
                            };
                            votingPower?: bigint;
                            proposerPriority?: bigint;
                        }[];
                        totalVotingPower?: bigint;
                        timestamp?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                    };
                }[];
            }): _142.EvidenceList;
        };
        Block: {
            encode(message: _141.Block, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _141.Block;
            fromJSON(object: any): _141.Block;
            toJSON(message: _141.Block): unknown;
            fromPartial(object: {
                header?: {
                    version?: {
                        block?: bigint;
                        app?: bigint;
                    };
                    chainId?: string;
                    height?: bigint;
                    time?: {
                        seconds?: bigint;
                        nanos?: number;
                    };
                    lastBlockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    lastCommitHash?: Uint8Array;
                    dataHash?: Uint8Array;
                    validatorsHash?: Uint8Array;
                    nextValidatorsHash?: Uint8Array;
                    consensusHash?: Uint8Array;
                    appHash?: Uint8Array;
                    lastResultsHash?: Uint8Array;
                    evidenceHash?: Uint8Array;
                    proposerAddress?: Uint8Array;
                };
                data?: {
                    txs?: Uint8Array[];
                };
                evidence?: {
                    evidence?: {
                        duplicateVoteEvidence?: {
                            voteA?: {
                                type?: _144.SignedMsgType;
                                height?: bigint;
                                round?: number;
                                blockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                timestamp?: {
                                    seconds?: bigint;
                                    nanos?: number;
                                };
                                validatorAddress?: Uint8Array;
                                validatorIndex?: number;
                                signature?: Uint8Array;
                            };
                            voteB?: {
                                type?: _144.SignedMsgType;
                                height?: bigint;
                                round?: number;
                                blockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                timestamp?: {
                                    seconds?: bigint;
                                    nanos?: number;
                                };
                                validatorAddress?: Uint8Array;
                                validatorIndex?: number;
                                signature?: Uint8Array;
                            };
                            totalVotingPower?: bigint;
                            validatorPower?: bigint;
                            timestamp?: {
                                seconds?: bigint;
                                nanos?: number;
                            };
                        };
                        lightClientAttackEvidence?: {
                            conflictingBlock?: {
                                signedHeader?: {
                                    header?: {
                                        version?: {
                                            block?: bigint;
                                            app?: bigint;
                                        };
                                        chainId?: string;
                                        height?: bigint;
                                        time?: {
                                            seconds?: bigint;
                                            nanos?: number;
                                        };
                                        lastBlockId?: {
                                            hash?: Uint8Array;
                                            partSetHeader?: {
                                                total?: number;
                                                hash?: Uint8Array;
                                            };
                                        };
                                        lastCommitHash?: Uint8Array;
                                        dataHash?: Uint8Array;
                                        validatorsHash?: Uint8Array;
                                        nextValidatorsHash?: Uint8Array;
                                        consensusHash?: Uint8Array;
                                        appHash?: Uint8Array;
                                        lastResultsHash?: Uint8Array;
                                        evidenceHash?: Uint8Array;
                                        proposerAddress?: Uint8Array;
                                    };
                                    commit?: {
                                        height?: bigint;
                                        round?: number;
                                        blockId?: {
                                            hash?: Uint8Array;
                                            partSetHeader?: {
                                                total?: number;
                                                hash?: Uint8Array;
                                            };
                                        };
                                        signatures?: {
                                            blockIdFlag?: _144.BlockIDFlag;
                                            validatorAddress?: Uint8Array;
                                            timestamp?: {
                                                seconds?: bigint;
                                                nanos?: number;
                                            };
                                            signature?: Uint8Array;
                                        }[];
                                    };
                                };
                                validatorSet?: {
                                    validators?: {
                                        address?: Uint8Array;
                                        pubKey?: {
                                            ed25519?: Uint8Array;
                                            secp256k1?: Uint8Array;
                                        };
                                        votingPower?: bigint;
                                        proposerPriority?: bigint;
                                    }[];
                                    proposer?: {
                                        address?: Uint8Array;
                                        pubKey?: {
                                            ed25519?: Uint8Array;
                                            secp256k1?: Uint8Array;
                                        };
                                        votingPower?: bigint;
                                        proposerPriority?: bigint;
                                    };
                                    totalVotingPower?: bigint;
                                };
                            };
                            commonHeight?: bigint;
                            byzantineValidators?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: bigint;
                                proposerPriority?: bigint;
                            }[];
                            totalVotingPower?: bigint;
                            timestamp?: {
                                seconds?: bigint;
                                nanos?: number;
                            };
                        };
                    }[];
                };
                lastCommit?: {
                    height?: bigint;
                    round?: number;
                    blockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    signatures?: {
                        blockIdFlag?: _144.BlockIDFlag;
                        validatorAddress?: Uint8Array;
                        timestamp?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        signature?: Uint8Array;
                    }[];
                };
            }): _141.Block;
        };
    };
    const version: {
        App: {
            encode(message: _146.App, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _146.App;
            fromJSON(object: any): _146.App;
            toJSON(message: _146.App): unknown;
            fromPartial(object: {
                protocol?: bigint;
                software?: string;
            }): _146.App;
        };
        Consensus: {
            encode(message: _146.Consensus, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _146.Consensus;
            fromJSON(object: any): _146.Consensus;
            toJSON(message: _146.Consensus): unknown;
            fromPartial(object: {
                block?: bigint;
                app?: bigint;
            }): _146.Consensus;
        };
    };
}
