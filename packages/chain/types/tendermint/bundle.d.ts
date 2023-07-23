import * as _154 from "./abci/types";
import * as _155 from "./crypto/keys";
import * as _156 from "./crypto/proof";
import * as _157 from "./libs/bits/types";
import * as _158 from "./p2p/types";
import * as _159 from "./types/block";
import * as _160 from "./types/evidence";
import * as _161 from "./types/params";
import * as _162 from "./types/types";
import * as _163 from "./types/validator";
import * as _164 from "./version/types";
export declare namespace tendermint {
    const abci: {
        checkTxTypeFromJSON(object: any): _154.CheckTxType;
        checkTxTypeToJSON(object: _154.CheckTxType): string;
        responseOfferSnapshot_ResultFromJSON(object: any): _154.ResponseOfferSnapshot_Result;
        responseOfferSnapshot_ResultToJSON(object: _154.ResponseOfferSnapshot_Result): string;
        responseApplySnapshotChunk_ResultFromJSON(object: any): _154.ResponseApplySnapshotChunk_Result;
        responseApplySnapshotChunk_ResultToJSON(object: _154.ResponseApplySnapshotChunk_Result): string;
        responseProcessProposal_ProposalStatusFromJSON(object: any): _154.ResponseProcessProposal_ProposalStatus;
        responseProcessProposal_ProposalStatusToJSON(object: _154.ResponseProcessProposal_ProposalStatus): string;
        misbehaviorTypeFromJSON(object: any): _154.MisbehaviorType;
        misbehaviorTypeToJSON(object: _154.MisbehaviorType): string;
        CheckTxType: typeof _154.CheckTxType;
        ResponseOfferSnapshot_Result: typeof _154.ResponseOfferSnapshot_Result;
        ResponseApplySnapshotChunk_Result: typeof _154.ResponseApplySnapshotChunk_Result;
        ResponseProcessProposal_ProposalStatus: typeof _154.ResponseProcessProposal_ProposalStatus;
        MisbehaviorType: typeof _154.MisbehaviorType;
        Request: {
            encode(message: _154.Request, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _154.Request;
            fromJSON(object: any): _154.Request;
            toJSON(message: _154.Request): unknown;
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
                        type?: _154.MisbehaviorType;
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
                    type?: _154.CheckTxType;
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
                        type?: _154.MisbehaviorType;
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
                        type?: _154.MisbehaviorType;
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
            }): _154.Request;
        };
        RequestEcho: {
            encode(message: _154.RequestEcho, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _154.RequestEcho;
            fromJSON(object: any): _154.RequestEcho;
            toJSON(message: _154.RequestEcho): unknown;
            fromPartial(object: {
                message?: string;
            }): _154.RequestEcho;
        };
        RequestFlush: {
            encode(_: _154.RequestFlush, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _154.RequestFlush;
            fromJSON(_: any): _154.RequestFlush;
            toJSON(_: _154.RequestFlush): unknown;
            fromPartial(_: {}): _154.RequestFlush;
        };
        RequestInfo: {
            encode(message: _154.RequestInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _154.RequestInfo;
            fromJSON(object: any): _154.RequestInfo;
            toJSON(message: _154.RequestInfo): unknown;
            fromPartial(object: {
                version?: string;
                blockVersion?: bigint;
                p2pVersion?: bigint;
                abciVersion?: string;
            }): _154.RequestInfo;
        };
        RequestInitChain: {
            encode(message: _154.RequestInitChain, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _154.RequestInitChain;
            fromJSON(object: any): _154.RequestInitChain;
            toJSON(message: _154.RequestInitChain): unknown;
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
            }): _154.RequestInitChain;
        };
        RequestQuery: {
            encode(message: _154.RequestQuery, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _154.RequestQuery;
            fromJSON(object: any): _154.RequestQuery;
            toJSON(message: _154.RequestQuery): unknown;
            fromPartial(object: {
                data?: Uint8Array;
                path?: string;
                height?: bigint;
                prove?: boolean;
            }): _154.RequestQuery;
        };
        RequestBeginBlock: {
            encode(message: _154.RequestBeginBlock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _154.RequestBeginBlock;
            fromJSON(object: any): _154.RequestBeginBlock;
            toJSON(message: _154.RequestBeginBlock): unknown;
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
                    type?: _154.MisbehaviorType;
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
            }): _154.RequestBeginBlock;
        };
        RequestCheckTx: {
            encode(message: _154.RequestCheckTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _154.RequestCheckTx;
            fromJSON(object: any): _154.RequestCheckTx;
            toJSON(message: _154.RequestCheckTx): unknown;
            fromPartial(object: {
                tx?: Uint8Array;
                type?: _154.CheckTxType;
            }): _154.RequestCheckTx;
        };
        RequestDeliverTx: {
            encode(message: _154.RequestDeliverTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _154.RequestDeliverTx;
            fromJSON(object: any): _154.RequestDeliverTx;
            toJSON(message: _154.RequestDeliverTx): unknown;
            fromPartial(object: {
                tx?: Uint8Array;
            }): _154.RequestDeliverTx;
        };
        RequestEndBlock: {
            encode(message: _154.RequestEndBlock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _154.RequestEndBlock;
            fromJSON(object: any): _154.RequestEndBlock;
            toJSON(message: _154.RequestEndBlock): unknown;
            fromPartial(object: {
                height?: bigint;
            }): _154.RequestEndBlock;
        };
        RequestCommit: {
            encode(_: _154.RequestCommit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _154.RequestCommit;
            fromJSON(_: any): _154.RequestCommit;
            toJSON(_: _154.RequestCommit): unknown;
            fromPartial(_: {}): _154.RequestCommit;
        };
        RequestListSnapshots: {
            encode(_: _154.RequestListSnapshots, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _154.RequestListSnapshots;
            fromJSON(_: any): _154.RequestListSnapshots;
            toJSON(_: _154.RequestListSnapshots): unknown;
            fromPartial(_: {}): _154.RequestListSnapshots;
        };
        RequestOfferSnapshot: {
            encode(message: _154.RequestOfferSnapshot, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _154.RequestOfferSnapshot;
            fromJSON(object: any): _154.RequestOfferSnapshot;
            toJSON(message: _154.RequestOfferSnapshot): unknown;
            fromPartial(object: {
                snapshot?: {
                    height?: bigint;
                    format?: number;
                    chunks?: number;
                    hash?: Uint8Array;
                    metadata?: Uint8Array;
                };
                appHash?: Uint8Array;
            }): _154.RequestOfferSnapshot;
        };
        RequestLoadSnapshotChunk: {
            encode(message: _154.RequestLoadSnapshotChunk, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _154.RequestLoadSnapshotChunk;
            fromJSON(object: any): _154.RequestLoadSnapshotChunk;
            toJSON(message: _154.RequestLoadSnapshotChunk): unknown;
            fromPartial(object: {
                height?: bigint;
                format?: number;
                chunk?: number;
            }): _154.RequestLoadSnapshotChunk;
        };
        RequestApplySnapshotChunk: {
            encode(message: _154.RequestApplySnapshotChunk, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _154.RequestApplySnapshotChunk;
            fromJSON(object: any): _154.RequestApplySnapshotChunk;
            toJSON(message: _154.RequestApplySnapshotChunk): unknown;
            fromPartial(object: {
                index?: number;
                chunk?: Uint8Array;
                sender?: string;
            }): _154.RequestApplySnapshotChunk;
        };
        RequestPrepareProposal: {
            encode(message: _154.RequestPrepareProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _154.RequestPrepareProposal;
            fromJSON(object: any): _154.RequestPrepareProposal;
            toJSON(message: _154.RequestPrepareProposal): unknown;
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
                    type?: _154.MisbehaviorType;
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
            }): _154.RequestPrepareProposal;
        };
        RequestProcessProposal: {
            encode(message: _154.RequestProcessProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _154.RequestProcessProposal;
            fromJSON(object: any): _154.RequestProcessProposal;
            toJSON(message: _154.RequestProcessProposal): unknown;
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
                    type?: _154.MisbehaviorType;
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
            }): _154.RequestProcessProposal;
        };
        Response: {
            encode(message: _154.Response, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _154.Response;
            fromJSON(object: any): _154.Response;
            toJSON(message: _154.Response): unknown;
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
                    result?: _154.ResponseOfferSnapshot_Result;
                };
                loadSnapshotChunk?: {
                    chunk?: Uint8Array;
                };
                applySnapshotChunk?: {
                    result?: _154.ResponseApplySnapshotChunk_Result;
                    refetchChunks?: number[];
                    rejectSenders?: string[];
                };
                prepareProposal?: {
                    txs?: Uint8Array[];
                };
                processProposal?: {
                    status?: _154.ResponseProcessProposal_ProposalStatus;
                };
            }): _154.Response;
        };
        ResponseException: {
            encode(message: _154.ResponseException, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _154.ResponseException;
            fromJSON(object: any): _154.ResponseException;
            toJSON(message: _154.ResponseException): unknown;
            fromPartial(object: {
                error?: string;
            }): _154.ResponseException;
        };
        ResponseEcho: {
            encode(message: _154.ResponseEcho, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _154.ResponseEcho;
            fromJSON(object: any): _154.ResponseEcho;
            toJSON(message: _154.ResponseEcho): unknown;
            fromPartial(object: {
                message?: string;
            }): _154.ResponseEcho;
        };
        ResponseFlush: {
            encode(_: _154.ResponseFlush, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _154.ResponseFlush;
            fromJSON(_: any): _154.ResponseFlush;
            toJSON(_: _154.ResponseFlush): unknown;
            fromPartial(_: {}): _154.ResponseFlush;
        };
        ResponseInfo: {
            encode(message: _154.ResponseInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _154.ResponseInfo;
            fromJSON(object: any): _154.ResponseInfo;
            toJSON(message: _154.ResponseInfo): unknown;
            fromPartial(object: {
                data?: string;
                version?: string;
                appVersion?: bigint;
                lastBlockHeight?: bigint;
                lastBlockAppHash?: Uint8Array;
            }): _154.ResponseInfo;
        };
        ResponseInitChain: {
            encode(message: _154.ResponseInitChain, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _154.ResponseInitChain;
            fromJSON(object: any): _154.ResponseInitChain;
            toJSON(message: _154.ResponseInitChain): unknown;
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
            }): _154.ResponseInitChain;
        };
        ResponseQuery: {
            encode(message: _154.ResponseQuery, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _154.ResponseQuery;
            fromJSON(object: any): _154.ResponseQuery;
            toJSON(message: _154.ResponseQuery): unknown;
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
            }): _154.ResponseQuery;
        };
        ResponseBeginBlock: {
            encode(message: _154.ResponseBeginBlock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _154.ResponseBeginBlock;
            fromJSON(object: any): _154.ResponseBeginBlock;
            toJSON(message: _154.ResponseBeginBlock): unknown;
            fromPartial(object: {
                events?: {
                    type?: string;
                    attributes?: {
                        key?: string;
                        value?: string;
                        index?: boolean;
                    }[];
                }[];
            }): _154.ResponseBeginBlock;
        };
        ResponseCheckTx: {
            encode(message: _154.ResponseCheckTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _154.ResponseCheckTx;
            fromJSON(object: any): _154.ResponseCheckTx;
            toJSON(message: _154.ResponseCheckTx): unknown;
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
            }): _154.ResponseCheckTx;
        };
        ResponseDeliverTx: {
            encode(message: _154.ResponseDeliverTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _154.ResponseDeliverTx;
            fromJSON(object: any): _154.ResponseDeliverTx;
            toJSON(message: _154.ResponseDeliverTx): unknown;
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
            }): _154.ResponseDeliverTx;
        };
        ResponseEndBlock: {
            encode(message: _154.ResponseEndBlock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _154.ResponseEndBlock;
            fromJSON(object: any): _154.ResponseEndBlock;
            toJSON(message: _154.ResponseEndBlock): unknown;
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
            }): _154.ResponseEndBlock;
        };
        ResponseCommit: {
            encode(message: _154.ResponseCommit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _154.ResponseCommit;
            fromJSON(object: any): _154.ResponseCommit;
            toJSON(message: _154.ResponseCommit): unknown;
            fromPartial(object: {
                data?: Uint8Array;
                retainHeight?: bigint;
            }): _154.ResponseCommit;
        };
        ResponseListSnapshots: {
            encode(message: _154.ResponseListSnapshots, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _154.ResponseListSnapshots;
            fromJSON(object: any): _154.ResponseListSnapshots;
            toJSON(message: _154.ResponseListSnapshots): unknown;
            fromPartial(object: {
                snapshots?: {
                    height?: bigint;
                    format?: number;
                    chunks?: number;
                    hash?: Uint8Array;
                    metadata?: Uint8Array;
                }[];
            }): _154.ResponseListSnapshots;
        };
        ResponseOfferSnapshot: {
            encode(message: _154.ResponseOfferSnapshot, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _154.ResponseOfferSnapshot;
            fromJSON(object: any): _154.ResponseOfferSnapshot;
            toJSON(message: _154.ResponseOfferSnapshot): unknown;
            fromPartial(object: {
                result?: _154.ResponseOfferSnapshot_Result;
            }): _154.ResponseOfferSnapshot;
        };
        ResponseLoadSnapshotChunk: {
            encode(message: _154.ResponseLoadSnapshotChunk, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _154.ResponseLoadSnapshotChunk;
            fromJSON(object: any): _154.ResponseLoadSnapshotChunk;
            toJSON(message: _154.ResponseLoadSnapshotChunk): unknown;
            fromPartial(object: {
                chunk?: Uint8Array;
            }): _154.ResponseLoadSnapshotChunk;
        };
        ResponseApplySnapshotChunk: {
            encode(message: _154.ResponseApplySnapshotChunk, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _154.ResponseApplySnapshotChunk;
            fromJSON(object: any): _154.ResponseApplySnapshotChunk;
            toJSON(message: _154.ResponseApplySnapshotChunk): unknown;
            fromPartial(object: {
                result?: _154.ResponseApplySnapshotChunk_Result;
                refetchChunks?: number[];
                rejectSenders?: string[];
            }): _154.ResponseApplySnapshotChunk;
        };
        ResponsePrepareProposal: {
            encode(message: _154.ResponsePrepareProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _154.ResponsePrepareProposal;
            fromJSON(object: any): _154.ResponsePrepareProposal;
            toJSON(message: _154.ResponsePrepareProposal): unknown;
            fromPartial(object: {
                txs?: Uint8Array[];
            }): _154.ResponsePrepareProposal;
        };
        ResponseProcessProposal: {
            encode(message: _154.ResponseProcessProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _154.ResponseProcessProposal;
            fromJSON(object: any): _154.ResponseProcessProposal;
            toJSON(message: _154.ResponseProcessProposal): unknown;
            fromPartial(object: {
                status?: _154.ResponseProcessProposal_ProposalStatus;
            }): _154.ResponseProcessProposal;
        };
        CommitInfo: {
            encode(message: _154.CommitInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _154.CommitInfo;
            fromJSON(object: any): _154.CommitInfo;
            toJSON(message: _154.CommitInfo): unknown;
            fromPartial(object: {
                round?: number;
                votes?: {
                    validator?: {
                        address?: Uint8Array;
                        power?: bigint;
                    };
                    signedLastBlock?: boolean;
                }[];
            }): _154.CommitInfo;
        };
        ExtendedCommitInfo: {
            encode(message: _154.ExtendedCommitInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _154.ExtendedCommitInfo;
            fromJSON(object: any): _154.ExtendedCommitInfo;
            toJSON(message: _154.ExtendedCommitInfo): unknown;
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
            }): _154.ExtendedCommitInfo;
        };
        Event: {
            encode(message: _154.Event, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _154.Event;
            fromJSON(object: any): _154.Event;
            toJSON(message: _154.Event): unknown;
            fromPartial(object: {
                type?: string;
                attributes?: {
                    key?: string;
                    value?: string;
                    index?: boolean;
                }[];
            }): _154.Event;
        };
        EventAttribute: {
            encode(message: _154.EventAttribute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _154.EventAttribute;
            fromJSON(object: any): _154.EventAttribute;
            toJSON(message: _154.EventAttribute): unknown;
            fromPartial(object: {
                key?: string;
                value?: string;
                index?: boolean;
            }): _154.EventAttribute;
        };
        TxResult: {
            encode(message: _154.TxResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _154.TxResult;
            fromJSON(object: any): _154.TxResult;
            toJSON(message: _154.TxResult): unknown;
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
            }): _154.TxResult;
        };
        Validator: {
            encode(message: _154.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _154.Validator;
            fromJSON(object: any): _154.Validator;
            toJSON(message: _154.Validator): unknown;
            fromPartial(object: {
                address?: Uint8Array;
                power?: bigint;
            }): _154.Validator;
        };
        ValidatorUpdate: {
            encode(message: _154.ValidatorUpdate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _154.ValidatorUpdate;
            fromJSON(object: any): _154.ValidatorUpdate;
            toJSON(message: _154.ValidatorUpdate): unknown;
            fromPartial(object: {
                pubKey?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                };
                power?: bigint;
            }): _154.ValidatorUpdate;
        };
        VoteInfo: {
            encode(message: _154.VoteInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _154.VoteInfo;
            fromJSON(object: any): _154.VoteInfo;
            toJSON(message: _154.VoteInfo): unknown;
            fromPartial(object: {
                validator?: {
                    address?: Uint8Array;
                    power?: bigint;
                };
                signedLastBlock?: boolean;
            }): _154.VoteInfo;
        };
        ExtendedVoteInfo: {
            encode(message: _154.ExtendedVoteInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _154.ExtendedVoteInfo;
            fromJSON(object: any): _154.ExtendedVoteInfo;
            toJSON(message: _154.ExtendedVoteInfo): unknown;
            fromPartial(object: {
                validator?: {
                    address?: Uint8Array;
                    power?: bigint;
                };
                signedLastBlock?: boolean;
                voteExtension?: Uint8Array;
            }): _154.ExtendedVoteInfo;
        };
        Misbehavior: {
            encode(message: _154.Misbehavior, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _154.Misbehavior;
            fromJSON(object: any): _154.Misbehavior;
            toJSON(message: _154.Misbehavior): unknown;
            fromPartial(object: {
                type?: _154.MisbehaviorType;
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
            }): _154.Misbehavior;
        };
        Snapshot: {
            encode(message: _154.Snapshot, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _154.Snapshot;
            fromJSON(object: any): _154.Snapshot;
            toJSON(message: _154.Snapshot): unknown;
            fromPartial(object: {
                height?: bigint;
                format?: number;
                chunks?: number;
                hash?: Uint8Array;
                metadata?: Uint8Array;
            }): _154.Snapshot;
        };
    };
    const crypto: {
        Proof: {
            encode(message: _156.Proof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _156.Proof;
            fromJSON(object: any): _156.Proof;
            toJSON(message: _156.Proof): unknown;
            fromPartial(object: {
                total?: bigint;
                index?: bigint;
                leafHash?: Uint8Array;
                aunts?: Uint8Array[];
            }): _156.Proof;
        };
        ValueOp: {
            encode(message: _156.ValueOp, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _156.ValueOp;
            fromJSON(object: any): _156.ValueOp;
            toJSON(message: _156.ValueOp): unknown;
            fromPartial(object: {
                key?: Uint8Array;
                proof?: {
                    total?: bigint;
                    index?: bigint;
                    leafHash?: Uint8Array;
                    aunts?: Uint8Array[];
                };
            }): _156.ValueOp;
        };
        DominoOp: {
            encode(message: _156.DominoOp, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _156.DominoOp;
            fromJSON(object: any): _156.DominoOp;
            toJSON(message: _156.DominoOp): unknown;
            fromPartial(object: {
                key?: string;
                input?: string;
                output?: string;
            }): _156.DominoOp;
        };
        ProofOp: {
            encode(message: _156.ProofOp, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _156.ProofOp;
            fromJSON(object: any): _156.ProofOp;
            toJSON(message: _156.ProofOp): unknown;
            fromPartial(object: {
                type?: string;
                key?: Uint8Array;
                data?: Uint8Array;
            }): _156.ProofOp;
        };
        ProofOps: {
            encode(message: _156.ProofOps, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _156.ProofOps;
            fromJSON(object: any): _156.ProofOps;
            toJSON(message: _156.ProofOps): unknown;
            fromPartial(object: {
                ops?: {
                    type?: string;
                    key?: Uint8Array;
                    data?: Uint8Array;
                }[];
            }): _156.ProofOps;
        };
        PublicKey: {
            encode(message: _155.PublicKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _155.PublicKey;
            fromJSON(object: any): _155.PublicKey;
            toJSON(message: _155.PublicKey): unknown;
            fromPartial(object: {
                ed25519?: Uint8Array;
                secp256k1?: Uint8Array;
            }): _155.PublicKey;
        };
    };
    namespace libs {
        const bits: {
            BitArray: {
                encode(message: _157.BitArray, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _157.BitArray;
                fromJSON(object: any): _157.BitArray;
                toJSON(message: _157.BitArray): unknown;
                fromPartial(object: {
                    bits?: bigint;
                    elems?: bigint[];
                }): _157.BitArray;
            };
        };
    }
    const p2p: {
        NetAddress: {
            encode(message: _158.NetAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _158.NetAddress;
            fromJSON(object: any): _158.NetAddress;
            toJSON(message: _158.NetAddress): unknown;
            fromPartial(object: {
                id?: string;
                ip?: string;
                port?: number;
            }): _158.NetAddress;
        };
        ProtocolVersion: {
            encode(message: _158.ProtocolVersion, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _158.ProtocolVersion;
            fromJSON(object: any): _158.ProtocolVersion;
            toJSON(message: _158.ProtocolVersion): unknown;
            fromPartial(object: {
                p2p?: bigint;
                block?: bigint;
                app?: bigint;
            }): _158.ProtocolVersion;
        };
        DefaultNodeInfo: {
            encode(message: _158.DefaultNodeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _158.DefaultNodeInfo;
            fromJSON(object: any): _158.DefaultNodeInfo;
            toJSON(message: _158.DefaultNodeInfo): unknown;
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
            }): _158.DefaultNodeInfo;
        };
        DefaultNodeInfoOther: {
            encode(message: _158.DefaultNodeInfoOther, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _158.DefaultNodeInfoOther;
            fromJSON(object: any): _158.DefaultNodeInfoOther;
            toJSON(message: _158.DefaultNodeInfoOther): unknown;
            fromPartial(object: {
                txIndex?: string;
                rpcAddress?: string;
            }): _158.DefaultNodeInfoOther;
        };
    };
    const types: {
        ValidatorSet: {
            encode(message: _163.ValidatorSet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _163.ValidatorSet;
            fromJSON(object: any): _163.ValidatorSet;
            toJSON(message: _163.ValidatorSet): unknown;
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
            }): _163.ValidatorSet;
        };
        Validator: {
            encode(message: _163.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _163.Validator;
            fromJSON(object: any): _163.Validator;
            toJSON(message: _163.Validator): unknown;
            fromPartial(object: {
                address?: Uint8Array;
                pubKey?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                };
                votingPower?: bigint;
                proposerPriority?: bigint;
            }): _163.Validator;
        };
        SimpleValidator: {
            encode(message: _163.SimpleValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _163.SimpleValidator;
            fromJSON(object: any): _163.SimpleValidator;
            toJSON(message: _163.SimpleValidator): unknown;
            fromPartial(object: {
                pubKey?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                };
                votingPower?: bigint;
            }): _163.SimpleValidator;
        };
        blockIDFlagFromJSON(object: any): _162.BlockIDFlag;
        blockIDFlagToJSON(object: _162.BlockIDFlag): string;
        signedMsgTypeFromJSON(object: any): _162.SignedMsgType;
        signedMsgTypeToJSON(object: _162.SignedMsgType): string;
        BlockIDFlag: typeof _162.BlockIDFlag;
        SignedMsgType: typeof _162.SignedMsgType;
        PartSetHeader: {
            encode(message: _162.PartSetHeader, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _162.PartSetHeader;
            fromJSON(object: any): _162.PartSetHeader;
            toJSON(message: _162.PartSetHeader): unknown;
            fromPartial(object: {
                total?: number;
                hash?: Uint8Array;
            }): _162.PartSetHeader;
        };
        Part: {
            encode(message: _162.Part, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _162.Part;
            fromJSON(object: any): _162.Part;
            toJSON(message: _162.Part): unknown;
            fromPartial(object: {
                index?: number;
                bytes?: Uint8Array;
                proof?: {
                    total?: bigint;
                    index?: bigint;
                    leafHash?: Uint8Array;
                    aunts?: Uint8Array[];
                };
            }): _162.Part;
        };
        BlockID: {
            encode(message: _162.BlockID, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _162.BlockID;
            fromJSON(object: any): _162.BlockID;
            toJSON(message: _162.BlockID): unknown;
            fromPartial(object: {
                hash?: Uint8Array;
                partSetHeader?: {
                    total?: number;
                    hash?: Uint8Array;
                };
            }): _162.BlockID;
        };
        Header: {
            encode(message: _162.Header, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _162.Header;
            fromJSON(object: any): _162.Header;
            toJSON(message: _162.Header): unknown;
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
            }): _162.Header;
        };
        Data: {
            encode(message: _162.Data, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _162.Data;
            fromJSON(object: any): _162.Data;
            toJSON(message: _162.Data): unknown;
            fromPartial(object: {
                txs?: Uint8Array[];
            }): _162.Data;
        };
        Vote: {
            encode(message: _162.Vote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _162.Vote;
            fromJSON(object: any): _162.Vote;
            toJSON(message: _162.Vote): unknown;
            fromPartial(object: {
                type?: _162.SignedMsgType;
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
            }): _162.Vote;
        };
        Commit: {
            encode(message: _162.Commit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _162.Commit;
            fromJSON(object: any): _162.Commit;
            toJSON(message: _162.Commit): unknown;
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
                    blockIdFlag?: _162.BlockIDFlag;
                    validatorAddress?: Uint8Array;
                    timestamp?: {
                        seconds?: bigint;
                        nanos?: number;
                    };
                    signature?: Uint8Array;
                }[];
            }): _162.Commit;
        };
        CommitSig: {
            encode(message: _162.CommitSig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _162.CommitSig;
            fromJSON(object: any): _162.CommitSig;
            toJSON(message: _162.CommitSig): unknown;
            fromPartial(object: {
                blockIdFlag?: _162.BlockIDFlag;
                validatorAddress?: Uint8Array;
                timestamp?: {
                    seconds?: bigint;
                    nanos?: number;
                };
                signature?: Uint8Array;
            }): _162.CommitSig;
        };
        Proposal: {
            encode(message: _162.Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _162.Proposal;
            fromJSON(object: any): _162.Proposal;
            toJSON(message: _162.Proposal): unknown;
            fromPartial(object: {
                type?: _162.SignedMsgType;
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
            }): _162.Proposal;
        };
        SignedHeader: {
            encode(message: _162.SignedHeader, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _162.SignedHeader;
            fromJSON(object: any): _162.SignedHeader;
            toJSON(message: _162.SignedHeader): unknown;
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
                        blockIdFlag?: _162.BlockIDFlag;
                        validatorAddress?: Uint8Array;
                        timestamp?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        signature?: Uint8Array;
                    }[];
                };
            }): _162.SignedHeader;
        };
        LightBlock: {
            encode(message: _162.LightBlock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _162.LightBlock;
            fromJSON(object: any): _162.LightBlock;
            toJSON(message: _162.LightBlock): unknown;
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
                            blockIdFlag?: _162.BlockIDFlag;
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
            }): _162.LightBlock;
        };
        BlockMeta: {
            encode(message: _162.BlockMeta, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _162.BlockMeta;
            fromJSON(object: any): _162.BlockMeta;
            toJSON(message: _162.BlockMeta): unknown;
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
            }): _162.BlockMeta;
        };
        TxProof: {
            encode(message: _162.TxProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _162.TxProof;
            fromJSON(object: any): _162.TxProof;
            toJSON(message: _162.TxProof): unknown;
            fromPartial(object: {
                rootHash?: Uint8Array;
                data?: Uint8Array;
                proof?: {
                    total?: bigint;
                    index?: bigint;
                    leafHash?: Uint8Array;
                    aunts?: Uint8Array[];
                };
            }): _162.TxProof;
        };
        ConsensusParams: {
            encode(message: _161.ConsensusParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _161.ConsensusParams;
            fromJSON(object: any): _161.ConsensusParams;
            toJSON(message: _161.ConsensusParams): unknown;
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
            }): _161.ConsensusParams;
        };
        BlockParams: {
            encode(message: _161.BlockParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _161.BlockParams;
            fromJSON(object: any): _161.BlockParams;
            toJSON(message: _161.BlockParams): unknown;
            fromPartial(object: {
                maxBytes?: bigint;
                maxGas?: bigint;
            }): _161.BlockParams;
        };
        EvidenceParams: {
            encode(message: _161.EvidenceParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _161.EvidenceParams;
            fromJSON(object: any): _161.EvidenceParams;
            toJSON(message: _161.EvidenceParams): unknown;
            fromPartial(object: {
                maxAgeNumBlocks?: bigint;
                maxAgeDuration?: {
                    seconds?: bigint;
                    nanos?: number;
                };
                maxBytes?: bigint;
            }): _161.EvidenceParams;
        };
        ValidatorParams: {
            encode(message: _161.ValidatorParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _161.ValidatorParams;
            fromJSON(object: any): _161.ValidatorParams;
            toJSON(message: _161.ValidatorParams): unknown;
            fromPartial(object: {
                pubKeyTypes?: string[];
            }): _161.ValidatorParams;
        };
        VersionParams: {
            encode(message: _161.VersionParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _161.VersionParams;
            fromJSON(object: any): _161.VersionParams;
            toJSON(message: _161.VersionParams): unknown;
            fromPartial(object: {
                app?: bigint;
            }): _161.VersionParams;
        };
        HashedParams: {
            encode(message: _161.HashedParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _161.HashedParams;
            fromJSON(object: any): _161.HashedParams;
            toJSON(message: _161.HashedParams): unknown;
            fromPartial(object: {
                blockMaxBytes?: bigint;
                blockMaxGas?: bigint;
            }): _161.HashedParams;
        };
        Evidence: {
            encode(message: _160.Evidence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _160.Evidence;
            fromJSON(object: any): _160.Evidence;
            toJSON(message: _160.Evidence): unknown;
            fromPartial(object: {
                duplicateVoteEvidence?: {
                    voteA?: {
                        type?: _162.SignedMsgType;
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
                        type?: _162.SignedMsgType;
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
                                    blockIdFlag?: _162.BlockIDFlag;
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
            }): _160.Evidence;
        };
        DuplicateVoteEvidence: {
            encode(message: _160.DuplicateVoteEvidence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _160.DuplicateVoteEvidence;
            fromJSON(object: any): _160.DuplicateVoteEvidence;
            toJSON(message: _160.DuplicateVoteEvidence): unknown;
            fromPartial(object: {
                voteA?: {
                    type?: _162.SignedMsgType;
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
                    type?: _162.SignedMsgType;
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
            }): _160.DuplicateVoteEvidence;
        };
        LightClientAttackEvidence: {
            encode(message: _160.LightClientAttackEvidence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _160.LightClientAttackEvidence;
            fromJSON(object: any): _160.LightClientAttackEvidence;
            toJSON(message: _160.LightClientAttackEvidence): unknown;
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
                                blockIdFlag?: _162.BlockIDFlag;
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
            }): _160.LightClientAttackEvidence;
        };
        EvidenceList: {
            encode(message: _160.EvidenceList, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _160.EvidenceList;
            fromJSON(object: any): _160.EvidenceList;
            toJSON(message: _160.EvidenceList): unknown;
            fromPartial(object: {
                evidence?: {
                    duplicateVoteEvidence?: {
                        voteA?: {
                            type?: _162.SignedMsgType;
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
                            type?: _162.SignedMsgType;
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
                                        blockIdFlag?: _162.BlockIDFlag;
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
            }): _160.EvidenceList;
        };
        Block: {
            encode(message: _159.Block, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _159.Block;
            fromJSON(object: any): _159.Block;
            toJSON(message: _159.Block): unknown;
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
                                type?: _162.SignedMsgType;
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
                                type?: _162.SignedMsgType;
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
                                            blockIdFlag?: _162.BlockIDFlag;
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
                        blockIdFlag?: _162.BlockIDFlag;
                        validatorAddress?: Uint8Array;
                        timestamp?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        signature?: Uint8Array;
                    }[];
                };
            }): _159.Block;
        };
    };
    const version: {
        App: {
            encode(message: _164.App, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _164.App;
            fromJSON(object: any): _164.App;
            toJSON(message: _164.App): unknown;
            fromPartial(object: {
                protocol?: bigint;
                software?: string;
            }): _164.App;
        };
        Consensus: {
            encode(message: _164.Consensus, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _164.Consensus;
            fromJSON(object: any): _164.Consensus;
            toJSON(message: _164.Consensus): unknown;
            fromPartial(object: {
                block?: bigint;
                app?: bigint;
            }): _164.Consensus;
        };
    };
}
