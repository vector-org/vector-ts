import * as _140 from "./abci/types";
import * as _141 from "./crypto/keys";
import * as _142 from "./crypto/proof";
import * as _143 from "./libs/bits/types";
import * as _144 from "./p2p/types";
import * as _145 from "./types/block";
import * as _146 from "./types/evidence";
import * as _147 from "./types/params";
import * as _148 from "./types/types";
import * as _149 from "./types/validator";
import * as _150 from "./version/types";
export declare namespace tendermint {
    const abci: {
        checkTxTypeFromJSON(object: any): _140.CheckTxType;
        checkTxTypeToJSON(object: _140.CheckTxType): string;
        responseOfferSnapshot_ResultFromJSON(object: any): _140.ResponseOfferSnapshot_Result;
        responseOfferSnapshot_ResultToJSON(object: _140.ResponseOfferSnapshot_Result): string;
        responseApplySnapshotChunk_ResultFromJSON(object: any): _140.ResponseApplySnapshotChunk_Result;
        responseApplySnapshotChunk_ResultToJSON(object: _140.ResponseApplySnapshotChunk_Result): string;
        responseProcessProposal_ProposalStatusFromJSON(object: any): _140.ResponseProcessProposal_ProposalStatus;
        responseProcessProposal_ProposalStatusToJSON(object: _140.ResponseProcessProposal_ProposalStatus): string;
        misbehaviorTypeFromJSON(object: any): _140.MisbehaviorType;
        misbehaviorTypeToJSON(object: _140.MisbehaviorType): string;
        CheckTxType: typeof _140.CheckTxType;
        ResponseOfferSnapshot_Result: typeof _140.ResponseOfferSnapshot_Result;
        ResponseApplySnapshotChunk_Result: typeof _140.ResponseApplySnapshotChunk_Result;
        ResponseProcessProposal_ProposalStatus: typeof _140.ResponseProcessProposal_ProposalStatus;
        MisbehaviorType: typeof _140.MisbehaviorType;
        Request: {
            encode(message: _140.Request, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _140.Request;
            fromJSON(object: any): _140.Request;
            toJSON(message: _140.Request): unknown;
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
                        type?: _140.MisbehaviorType;
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
                    type?: _140.CheckTxType;
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
                        type?: _140.MisbehaviorType;
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
                        type?: _140.MisbehaviorType;
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
            }): _140.Request;
        };
        RequestEcho: {
            encode(message: _140.RequestEcho, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _140.RequestEcho;
            fromJSON(object: any): _140.RequestEcho;
            toJSON(message: _140.RequestEcho): unknown;
            fromPartial(object: {
                message?: string;
            }): _140.RequestEcho;
        };
        RequestFlush: {
            encode(_: _140.RequestFlush, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _140.RequestFlush;
            fromJSON(_: any): _140.RequestFlush;
            toJSON(_: _140.RequestFlush): unknown;
            fromPartial(_: {}): _140.RequestFlush;
        };
        RequestInfo: {
            encode(message: _140.RequestInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _140.RequestInfo;
            fromJSON(object: any): _140.RequestInfo;
            toJSON(message: _140.RequestInfo): unknown;
            fromPartial(object: {
                version?: string;
                blockVersion?: bigint;
                p2pVersion?: bigint;
                abciVersion?: string;
            }): _140.RequestInfo;
        };
        RequestInitChain: {
            encode(message: _140.RequestInitChain, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _140.RequestInitChain;
            fromJSON(object: any): _140.RequestInitChain;
            toJSON(message: _140.RequestInitChain): unknown;
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
            }): _140.RequestInitChain;
        };
        RequestQuery: {
            encode(message: _140.RequestQuery, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _140.RequestQuery;
            fromJSON(object: any): _140.RequestQuery;
            toJSON(message: _140.RequestQuery): unknown;
            fromPartial(object: {
                data?: Uint8Array;
                path?: string;
                height?: bigint;
                prove?: boolean;
            }): _140.RequestQuery;
        };
        RequestBeginBlock: {
            encode(message: _140.RequestBeginBlock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _140.RequestBeginBlock;
            fromJSON(object: any): _140.RequestBeginBlock;
            toJSON(message: _140.RequestBeginBlock): unknown;
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
                    type?: _140.MisbehaviorType;
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
            }): _140.RequestBeginBlock;
        };
        RequestCheckTx: {
            encode(message: _140.RequestCheckTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _140.RequestCheckTx;
            fromJSON(object: any): _140.RequestCheckTx;
            toJSON(message: _140.RequestCheckTx): unknown;
            fromPartial(object: {
                tx?: Uint8Array;
                type?: _140.CheckTxType;
            }): _140.RequestCheckTx;
        };
        RequestDeliverTx: {
            encode(message: _140.RequestDeliverTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _140.RequestDeliverTx;
            fromJSON(object: any): _140.RequestDeliverTx;
            toJSON(message: _140.RequestDeliverTx): unknown;
            fromPartial(object: {
                tx?: Uint8Array;
            }): _140.RequestDeliverTx;
        };
        RequestEndBlock: {
            encode(message: _140.RequestEndBlock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _140.RequestEndBlock;
            fromJSON(object: any): _140.RequestEndBlock;
            toJSON(message: _140.RequestEndBlock): unknown;
            fromPartial(object: {
                height?: bigint;
            }): _140.RequestEndBlock;
        };
        RequestCommit: {
            encode(_: _140.RequestCommit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _140.RequestCommit;
            fromJSON(_: any): _140.RequestCommit;
            toJSON(_: _140.RequestCommit): unknown;
            fromPartial(_: {}): _140.RequestCommit;
        };
        RequestListSnapshots: {
            encode(_: _140.RequestListSnapshots, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _140.RequestListSnapshots;
            fromJSON(_: any): _140.RequestListSnapshots;
            toJSON(_: _140.RequestListSnapshots): unknown;
            fromPartial(_: {}): _140.RequestListSnapshots;
        };
        RequestOfferSnapshot: {
            encode(message: _140.RequestOfferSnapshot, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _140.RequestOfferSnapshot;
            fromJSON(object: any): _140.RequestOfferSnapshot;
            toJSON(message: _140.RequestOfferSnapshot): unknown;
            fromPartial(object: {
                snapshot?: {
                    height?: bigint;
                    format?: number;
                    chunks?: number;
                    hash?: Uint8Array;
                    metadata?: Uint8Array;
                };
                appHash?: Uint8Array;
            }): _140.RequestOfferSnapshot;
        };
        RequestLoadSnapshotChunk: {
            encode(message: _140.RequestLoadSnapshotChunk, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _140.RequestLoadSnapshotChunk;
            fromJSON(object: any): _140.RequestLoadSnapshotChunk;
            toJSON(message: _140.RequestLoadSnapshotChunk): unknown;
            fromPartial(object: {
                height?: bigint;
                format?: number;
                chunk?: number;
            }): _140.RequestLoadSnapshotChunk;
        };
        RequestApplySnapshotChunk: {
            encode(message: _140.RequestApplySnapshotChunk, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _140.RequestApplySnapshotChunk;
            fromJSON(object: any): _140.RequestApplySnapshotChunk;
            toJSON(message: _140.RequestApplySnapshotChunk): unknown;
            fromPartial(object: {
                index?: number;
                chunk?: Uint8Array;
                sender?: string;
            }): _140.RequestApplySnapshotChunk;
        };
        RequestPrepareProposal: {
            encode(message: _140.RequestPrepareProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _140.RequestPrepareProposal;
            fromJSON(object: any): _140.RequestPrepareProposal;
            toJSON(message: _140.RequestPrepareProposal): unknown;
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
                    type?: _140.MisbehaviorType;
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
            }): _140.RequestPrepareProposal;
        };
        RequestProcessProposal: {
            encode(message: _140.RequestProcessProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _140.RequestProcessProposal;
            fromJSON(object: any): _140.RequestProcessProposal;
            toJSON(message: _140.RequestProcessProposal): unknown;
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
                    type?: _140.MisbehaviorType;
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
            }): _140.RequestProcessProposal;
        };
        Response: {
            encode(message: _140.Response, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _140.Response;
            fromJSON(object: any): _140.Response;
            toJSON(message: _140.Response): unknown;
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
                    result?: _140.ResponseOfferSnapshot_Result;
                };
                loadSnapshotChunk?: {
                    chunk?: Uint8Array;
                };
                applySnapshotChunk?: {
                    result?: _140.ResponseApplySnapshotChunk_Result;
                    refetchChunks?: number[];
                    rejectSenders?: string[];
                };
                prepareProposal?: {
                    txs?: Uint8Array[];
                };
                processProposal?: {
                    status?: _140.ResponseProcessProposal_ProposalStatus;
                };
            }): _140.Response;
        };
        ResponseException: {
            encode(message: _140.ResponseException, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _140.ResponseException;
            fromJSON(object: any): _140.ResponseException;
            toJSON(message: _140.ResponseException): unknown;
            fromPartial(object: {
                error?: string;
            }): _140.ResponseException;
        };
        ResponseEcho: {
            encode(message: _140.ResponseEcho, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _140.ResponseEcho;
            fromJSON(object: any): _140.ResponseEcho;
            toJSON(message: _140.ResponseEcho): unknown;
            fromPartial(object: {
                message?: string;
            }): _140.ResponseEcho;
        };
        ResponseFlush: {
            encode(_: _140.ResponseFlush, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _140.ResponseFlush;
            fromJSON(_: any): _140.ResponseFlush;
            toJSON(_: _140.ResponseFlush): unknown;
            fromPartial(_: {}): _140.ResponseFlush;
        };
        ResponseInfo: {
            encode(message: _140.ResponseInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _140.ResponseInfo;
            fromJSON(object: any): _140.ResponseInfo;
            toJSON(message: _140.ResponseInfo): unknown;
            fromPartial(object: {
                data?: string;
                version?: string;
                appVersion?: bigint;
                lastBlockHeight?: bigint;
                lastBlockAppHash?: Uint8Array;
            }): _140.ResponseInfo;
        };
        ResponseInitChain: {
            encode(message: _140.ResponseInitChain, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _140.ResponseInitChain;
            fromJSON(object: any): _140.ResponseInitChain;
            toJSON(message: _140.ResponseInitChain): unknown;
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
            }): _140.ResponseInitChain;
        };
        ResponseQuery: {
            encode(message: _140.ResponseQuery, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _140.ResponseQuery;
            fromJSON(object: any): _140.ResponseQuery;
            toJSON(message: _140.ResponseQuery): unknown;
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
            }): _140.ResponseQuery;
        };
        ResponseBeginBlock: {
            encode(message: _140.ResponseBeginBlock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _140.ResponseBeginBlock;
            fromJSON(object: any): _140.ResponseBeginBlock;
            toJSON(message: _140.ResponseBeginBlock): unknown;
            fromPartial(object: {
                events?: {
                    type?: string;
                    attributes?: {
                        key?: string;
                        value?: string;
                        index?: boolean;
                    }[];
                }[];
            }): _140.ResponseBeginBlock;
        };
        ResponseCheckTx: {
            encode(message: _140.ResponseCheckTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _140.ResponseCheckTx;
            fromJSON(object: any): _140.ResponseCheckTx;
            toJSON(message: _140.ResponseCheckTx): unknown;
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
            }): _140.ResponseCheckTx;
        };
        ResponseDeliverTx: {
            encode(message: _140.ResponseDeliverTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _140.ResponseDeliverTx;
            fromJSON(object: any): _140.ResponseDeliverTx;
            toJSON(message: _140.ResponseDeliverTx): unknown;
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
            }): _140.ResponseDeliverTx;
        };
        ResponseEndBlock: {
            encode(message: _140.ResponseEndBlock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _140.ResponseEndBlock;
            fromJSON(object: any): _140.ResponseEndBlock;
            toJSON(message: _140.ResponseEndBlock): unknown;
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
            }): _140.ResponseEndBlock;
        };
        ResponseCommit: {
            encode(message: _140.ResponseCommit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _140.ResponseCommit;
            fromJSON(object: any): _140.ResponseCommit;
            toJSON(message: _140.ResponseCommit): unknown;
            fromPartial(object: {
                data?: Uint8Array;
                retainHeight?: bigint;
            }): _140.ResponseCommit;
        };
        ResponseListSnapshots: {
            encode(message: _140.ResponseListSnapshots, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _140.ResponseListSnapshots;
            fromJSON(object: any): _140.ResponseListSnapshots;
            toJSON(message: _140.ResponseListSnapshots): unknown;
            fromPartial(object: {
                snapshots?: {
                    height?: bigint;
                    format?: number;
                    chunks?: number;
                    hash?: Uint8Array;
                    metadata?: Uint8Array;
                }[];
            }): _140.ResponseListSnapshots;
        };
        ResponseOfferSnapshot: {
            encode(message: _140.ResponseOfferSnapshot, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _140.ResponseOfferSnapshot;
            fromJSON(object: any): _140.ResponseOfferSnapshot;
            toJSON(message: _140.ResponseOfferSnapshot): unknown;
            fromPartial(object: {
                result?: _140.ResponseOfferSnapshot_Result;
            }): _140.ResponseOfferSnapshot;
        };
        ResponseLoadSnapshotChunk: {
            encode(message: _140.ResponseLoadSnapshotChunk, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _140.ResponseLoadSnapshotChunk;
            fromJSON(object: any): _140.ResponseLoadSnapshotChunk;
            toJSON(message: _140.ResponseLoadSnapshotChunk): unknown;
            fromPartial(object: {
                chunk?: Uint8Array;
            }): _140.ResponseLoadSnapshotChunk;
        };
        ResponseApplySnapshotChunk: {
            encode(message: _140.ResponseApplySnapshotChunk, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _140.ResponseApplySnapshotChunk;
            fromJSON(object: any): _140.ResponseApplySnapshotChunk;
            toJSON(message: _140.ResponseApplySnapshotChunk): unknown;
            fromPartial(object: {
                result?: _140.ResponseApplySnapshotChunk_Result;
                refetchChunks?: number[];
                rejectSenders?: string[];
            }): _140.ResponseApplySnapshotChunk;
        };
        ResponsePrepareProposal: {
            encode(message: _140.ResponsePrepareProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _140.ResponsePrepareProposal;
            fromJSON(object: any): _140.ResponsePrepareProposal;
            toJSON(message: _140.ResponsePrepareProposal): unknown;
            fromPartial(object: {
                txs?: Uint8Array[];
            }): _140.ResponsePrepareProposal;
        };
        ResponseProcessProposal: {
            encode(message: _140.ResponseProcessProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _140.ResponseProcessProposal;
            fromJSON(object: any): _140.ResponseProcessProposal;
            toJSON(message: _140.ResponseProcessProposal): unknown;
            fromPartial(object: {
                status?: _140.ResponseProcessProposal_ProposalStatus;
            }): _140.ResponseProcessProposal;
        };
        CommitInfo: {
            encode(message: _140.CommitInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _140.CommitInfo;
            fromJSON(object: any): _140.CommitInfo;
            toJSON(message: _140.CommitInfo): unknown;
            fromPartial(object: {
                round?: number;
                votes?: {
                    validator?: {
                        address?: Uint8Array;
                        power?: bigint;
                    };
                    signedLastBlock?: boolean;
                }[];
            }): _140.CommitInfo;
        };
        ExtendedCommitInfo: {
            encode(message: _140.ExtendedCommitInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _140.ExtendedCommitInfo;
            fromJSON(object: any): _140.ExtendedCommitInfo;
            toJSON(message: _140.ExtendedCommitInfo): unknown;
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
            }): _140.ExtendedCommitInfo;
        };
        Event: {
            encode(message: _140.Event, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _140.Event;
            fromJSON(object: any): _140.Event;
            toJSON(message: _140.Event): unknown;
            fromPartial(object: {
                type?: string;
                attributes?: {
                    key?: string;
                    value?: string;
                    index?: boolean;
                }[];
            }): _140.Event;
        };
        EventAttribute: {
            encode(message: _140.EventAttribute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _140.EventAttribute;
            fromJSON(object: any): _140.EventAttribute;
            toJSON(message: _140.EventAttribute): unknown;
            fromPartial(object: {
                key?: string;
                value?: string;
                index?: boolean;
            }): _140.EventAttribute;
        };
        TxResult: {
            encode(message: _140.TxResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _140.TxResult;
            fromJSON(object: any): _140.TxResult;
            toJSON(message: _140.TxResult): unknown;
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
            }): _140.TxResult;
        };
        Validator: {
            encode(message: _140.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _140.Validator;
            fromJSON(object: any): _140.Validator;
            toJSON(message: _140.Validator): unknown;
            fromPartial(object: {
                address?: Uint8Array;
                power?: bigint;
            }): _140.Validator;
        };
        ValidatorUpdate: {
            encode(message: _140.ValidatorUpdate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _140.ValidatorUpdate;
            fromJSON(object: any): _140.ValidatorUpdate;
            toJSON(message: _140.ValidatorUpdate): unknown;
            fromPartial(object: {
                pubKey?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                };
                power?: bigint;
            }): _140.ValidatorUpdate;
        };
        VoteInfo: {
            encode(message: _140.VoteInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _140.VoteInfo;
            fromJSON(object: any): _140.VoteInfo;
            toJSON(message: _140.VoteInfo): unknown;
            fromPartial(object: {
                validator?: {
                    address?: Uint8Array;
                    power?: bigint;
                };
                signedLastBlock?: boolean;
            }): _140.VoteInfo;
        };
        ExtendedVoteInfo: {
            encode(message: _140.ExtendedVoteInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _140.ExtendedVoteInfo;
            fromJSON(object: any): _140.ExtendedVoteInfo;
            toJSON(message: _140.ExtendedVoteInfo): unknown;
            fromPartial(object: {
                validator?: {
                    address?: Uint8Array;
                    power?: bigint;
                };
                signedLastBlock?: boolean;
                voteExtension?: Uint8Array;
            }): _140.ExtendedVoteInfo;
        };
        Misbehavior: {
            encode(message: _140.Misbehavior, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _140.Misbehavior;
            fromJSON(object: any): _140.Misbehavior;
            toJSON(message: _140.Misbehavior): unknown;
            fromPartial(object: {
                type?: _140.MisbehaviorType;
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
            }): _140.Misbehavior;
        };
        Snapshot: {
            encode(message: _140.Snapshot, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _140.Snapshot;
            fromJSON(object: any): _140.Snapshot;
            toJSON(message: _140.Snapshot): unknown;
            fromPartial(object: {
                height?: bigint;
                format?: number;
                chunks?: number;
                hash?: Uint8Array;
                metadata?: Uint8Array;
            }): _140.Snapshot;
        };
    };
    const crypto: {
        Proof: {
            encode(message: _142.Proof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _142.Proof;
            fromJSON(object: any): _142.Proof;
            toJSON(message: _142.Proof): unknown;
            fromPartial(object: {
                total?: bigint;
                index?: bigint;
                leafHash?: Uint8Array;
                aunts?: Uint8Array[];
            }): _142.Proof;
        };
        ValueOp: {
            encode(message: _142.ValueOp, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _142.ValueOp;
            fromJSON(object: any): _142.ValueOp;
            toJSON(message: _142.ValueOp): unknown;
            fromPartial(object: {
                key?: Uint8Array;
                proof?: {
                    total?: bigint;
                    index?: bigint;
                    leafHash?: Uint8Array;
                    aunts?: Uint8Array[];
                };
            }): _142.ValueOp;
        };
        DominoOp: {
            encode(message: _142.DominoOp, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _142.DominoOp;
            fromJSON(object: any): _142.DominoOp;
            toJSON(message: _142.DominoOp): unknown;
            fromPartial(object: {
                key?: string;
                input?: string;
                output?: string;
            }): _142.DominoOp;
        };
        ProofOp: {
            encode(message: _142.ProofOp, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _142.ProofOp;
            fromJSON(object: any): _142.ProofOp;
            toJSON(message: _142.ProofOp): unknown;
            fromPartial(object: {
                type?: string;
                key?: Uint8Array;
                data?: Uint8Array;
            }): _142.ProofOp;
        };
        ProofOps: {
            encode(message: _142.ProofOps, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _142.ProofOps;
            fromJSON(object: any): _142.ProofOps;
            toJSON(message: _142.ProofOps): unknown;
            fromPartial(object: {
                ops?: {
                    type?: string;
                    key?: Uint8Array;
                    data?: Uint8Array;
                }[];
            }): _142.ProofOps;
        };
        PublicKey: {
            encode(message: _141.PublicKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _141.PublicKey;
            fromJSON(object: any): _141.PublicKey;
            toJSON(message: _141.PublicKey): unknown;
            fromPartial(object: {
                ed25519?: Uint8Array;
                secp256k1?: Uint8Array;
            }): _141.PublicKey;
        };
    };
    namespace libs {
        const bits: {
            BitArray: {
                encode(message: _143.BitArray, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _143.BitArray;
                fromJSON(object: any): _143.BitArray;
                toJSON(message: _143.BitArray): unknown;
                fromPartial(object: {
                    bits?: bigint;
                    elems?: bigint[];
                }): _143.BitArray;
            };
        };
    }
    const p2p: {
        NetAddress: {
            encode(message: _144.NetAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _144.NetAddress;
            fromJSON(object: any): _144.NetAddress;
            toJSON(message: _144.NetAddress): unknown;
            fromPartial(object: {
                id?: string;
                ip?: string;
                port?: number;
            }): _144.NetAddress;
        };
        ProtocolVersion: {
            encode(message: _144.ProtocolVersion, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _144.ProtocolVersion;
            fromJSON(object: any): _144.ProtocolVersion;
            toJSON(message: _144.ProtocolVersion): unknown;
            fromPartial(object: {
                p2p?: bigint;
                block?: bigint;
                app?: bigint;
            }): _144.ProtocolVersion;
        };
        DefaultNodeInfo: {
            encode(message: _144.DefaultNodeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _144.DefaultNodeInfo;
            fromJSON(object: any): _144.DefaultNodeInfo;
            toJSON(message: _144.DefaultNodeInfo): unknown;
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
            }): _144.DefaultNodeInfo;
        };
        DefaultNodeInfoOther: {
            encode(message: _144.DefaultNodeInfoOther, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _144.DefaultNodeInfoOther;
            fromJSON(object: any): _144.DefaultNodeInfoOther;
            toJSON(message: _144.DefaultNodeInfoOther): unknown;
            fromPartial(object: {
                txIndex?: string;
                rpcAddress?: string;
            }): _144.DefaultNodeInfoOther;
        };
    };
    const types: {
        ValidatorSet: {
            encode(message: _149.ValidatorSet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _149.ValidatorSet;
            fromJSON(object: any): _149.ValidatorSet;
            toJSON(message: _149.ValidatorSet): unknown;
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
            }): _149.ValidatorSet;
        };
        Validator: {
            encode(message: _149.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _149.Validator;
            fromJSON(object: any): _149.Validator;
            toJSON(message: _149.Validator): unknown;
            fromPartial(object: {
                address?: Uint8Array;
                pubKey?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                };
                votingPower?: bigint;
                proposerPriority?: bigint;
            }): _149.Validator;
        };
        SimpleValidator: {
            encode(message: _149.SimpleValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _149.SimpleValidator;
            fromJSON(object: any): _149.SimpleValidator;
            toJSON(message: _149.SimpleValidator): unknown;
            fromPartial(object: {
                pubKey?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                };
                votingPower?: bigint;
            }): _149.SimpleValidator;
        };
        blockIDFlagFromJSON(object: any): _148.BlockIDFlag;
        blockIDFlagToJSON(object: _148.BlockIDFlag): string;
        signedMsgTypeFromJSON(object: any): _148.SignedMsgType;
        signedMsgTypeToJSON(object: _148.SignedMsgType): string;
        BlockIDFlag: typeof _148.BlockIDFlag;
        SignedMsgType: typeof _148.SignedMsgType;
        PartSetHeader: {
            encode(message: _148.PartSetHeader, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _148.PartSetHeader;
            fromJSON(object: any): _148.PartSetHeader;
            toJSON(message: _148.PartSetHeader): unknown;
            fromPartial(object: {
                total?: number;
                hash?: Uint8Array;
            }): _148.PartSetHeader;
        };
        Part: {
            encode(message: _148.Part, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _148.Part;
            fromJSON(object: any): _148.Part;
            toJSON(message: _148.Part): unknown;
            fromPartial(object: {
                index?: number;
                bytes?: Uint8Array;
                proof?: {
                    total?: bigint;
                    index?: bigint;
                    leafHash?: Uint8Array;
                    aunts?: Uint8Array[];
                };
            }): _148.Part;
        };
        BlockID: {
            encode(message: _148.BlockID, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _148.BlockID;
            fromJSON(object: any): _148.BlockID;
            toJSON(message: _148.BlockID): unknown;
            fromPartial(object: {
                hash?: Uint8Array;
                partSetHeader?: {
                    total?: number;
                    hash?: Uint8Array;
                };
            }): _148.BlockID;
        };
        Header: {
            encode(message: _148.Header, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _148.Header;
            fromJSON(object: any): _148.Header;
            toJSON(message: _148.Header): unknown;
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
            }): _148.Header;
        };
        Data: {
            encode(message: _148.Data, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _148.Data;
            fromJSON(object: any): _148.Data;
            toJSON(message: _148.Data): unknown;
            fromPartial(object: {
                txs?: Uint8Array[];
            }): _148.Data;
        };
        Vote: {
            encode(message: _148.Vote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _148.Vote;
            fromJSON(object: any): _148.Vote;
            toJSON(message: _148.Vote): unknown;
            fromPartial(object: {
                type?: _148.SignedMsgType;
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
            }): _148.Vote;
        };
        Commit: {
            encode(message: _148.Commit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _148.Commit;
            fromJSON(object: any): _148.Commit;
            toJSON(message: _148.Commit): unknown;
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
                    blockIdFlag?: _148.BlockIDFlag;
                    validatorAddress?: Uint8Array;
                    timestamp?: {
                        seconds?: bigint;
                        nanos?: number;
                    };
                    signature?: Uint8Array;
                }[];
            }): _148.Commit;
        };
        CommitSig: {
            encode(message: _148.CommitSig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _148.CommitSig;
            fromJSON(object: any): _148.CommitSig;
            toJSON(message: _148.CommitSig): unknown;
            fromPartial(object: {
                blockIdFlag?: _148.BlockIDFlag;
                validatorAddress?: Uint8Array;
                timestamp?: {
                    seconds?: bigint;
                    nanos?: number;
                };
                signature?: Uint8Array;
            }): _148.CommitSig;
        };
        Proposal: {
            encode(message: _148.Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _148.Proposal;
            fromJSON(object: any): _148.Proposal;
            toJSON(message: _148.Proposal): unknown;
            fromPartial(object: {
                type?: _148.SignedMsgType;
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
            }): _148.Proposal;
        };
        SignedHeader: {
            encode(message: _148.SignedHeader, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _148.SignedHeader;
            fromJSON(object: any): _148.SignedHeader;
            toJSON(message: _148.SignedHeader): unknown;
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
                        blockIdFlag?: _148.BlockIDFlag;
                        validatorAddress?: Uint8Array;
                        timestamp?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        signature?: Uint8Array;
                    }[];
                };
            }): _148.SignedHeader;
        };
        LightBlock: {
            encode(message: _148.LightBlock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _148.LightBlock;
            fromJSON(object: any): _148.LightBlock;
            toJSON(message: _148.LightBlock): unknown;
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
                            blockIdFlag?: _148.BlockIDFlag;
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
            }): _148.LightBlock;
        };
        BlockMeta: {
            encode(message: _148.BlockMeta, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _148.BlockMeta;
            fromJSON(object: any): _148.BlockMeta;
            toJSON(message: _148.BlockMeta): unknown;
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
            }): _148.BlockMeta;
        };
        TxProof: {
            encode(message: _148.TxProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _148.TxProof;
            fromJSON(object: any): _148.TxProof;
            toJSON(message: _148.TxProof): unknown;
            fromPartial(object: {
                rootHash?: Uint8Array;
                data?: Uint8Array;
                proof?: {
                    total?: bigint;
                    index?: bigint;
                    leafHash?: Uint8Array;
                    aunts?: Uint8Array[];
                };
            }): _148.TxProof;
        };
        ConsensusParams: {
            encode(message: _147.ConsensusParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _147.ConsensusParams;
            fromJSON(object: any): _147.ConsensusParams;
            toJSON(message: _147.ConsensusParams): unknown;
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
            }): _147.ConsensusParams;
        };
        BlockParams: {
            encode(message: _147.BlockParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _147.BlockParams;
            fromJSON(object: any): _147.BlockParams;
            toJSON(message: _147.BlockParams): unknown;
            fromPartial(object: {
                maxBytes?: bigint;
                maxGas?: bigint;
            }): _147.BlockParams;
        };
        EvidenceParams: {
            encode(message: _147.EvidenceParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _147.EvidenceParams;
            fromJSON(object: any): _147.EvidenceParams;
            toJSON(message: _147.EvidenceParams): unknown;
            fromPartial(object: {
                maxAgeNumBlocks?: bigint;
                maxAgeDuration?: {
                    seconds?: bigint;
                    nanos?: number;
                };
                maxBytes?: bigint;
            }): _147.EvidenceParams;
        };
        ValidatorParams: {
            encode(message: _147.ValidatorParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _147.ValidatorParams;
            fromJSON(object: any): _147.ValidatorParams;
            toJSON(message: _147.ValidatorParams): unknown;
            fromPartial(object: {
                pubKeyTypes?: string[];
            }): _147.ValidatorParams;
        };
        VersionParams: {
            encode(message: _147.VersionParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _147.VersionParams;
            fromJSON(object: any): _147.VersionParams;
            toJSON(message: _147.VersionParams): unknown;
            fromPartial(object: {
                app?: bigint;
            }): _147.VersionParams;
        };
        HashedParams: {
            encode(message: _147.HashedParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _147.HashedParams;
            fromJSON(object: any): _147.HashedParams;
            toJSON(message: _147.HashedParams): unknown;
            fromPartial(object: {
                blockMaxBytes?: bigint;
                blockMaxGas?: bigint;
            }): _147.HashedParams;
        };
        Evidence: {
            encode(message: _146.Evidence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _146.Evidence;
            fromJSON(object: any): _146.Evidence;
            toJSON(message: _146.Evidence): unknown;
            fromPartial(object: {
                duplicateVoteEvidence?: {
                    voteA?: {
                        type?: _148.SignedMsgType;
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
                        type?: _148.SignedMsgType;
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
                                    blockIdFlag?: _148.BlockIDFlag;
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
            }): _146.Evidence;
        };
        DuplicateVoteEvidence: {
            encode(message: _146.DuplicateVoteEvidence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _146.DuplicateVoteEvidence;
            fromJSON(object: any): _146.DuplicateVoteEvidence;
            toJSON(message: _146.DuplicateVoteEvidence): unknown;
            fromPartial(object: {
                voteA?: {
                    type?: _148.SignedMsgType;
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
                    type?: _148.SignedMsgType;
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
            }): _146.DuplicateVoteEvidence;
        };
        LightClientAttackEvidence: {
            encode(message: _146.LightClientAttackEvidence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _146.LightClientAttackEvidence;
            fromJSON(object: any): _146.LightClientAttackEvidence;
            toJSON(message: _146.LightClientAttackEvidence): unknown;
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
                                blockIdFlag?: _148.BlockIDFlag;
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
            }): _146.LightClientAttackEvidence;
        };
        EvidenceList: {
            encode(message: _146.EvidenceList, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _146.EvidenceList;
            fromJSON(object: any): _146.EvidenceList;
            toJSON(message: _146.EvidenceList): unknown;
            fromPartial(object: {
                evidence?: {
                    duplicateVoteEvidence?: {
                        voteA?: {
                            type?: _148.SignedMsgType;
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
                            type?: _148.SignedMsgType;
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
                                        blockIdFlag?: _148.BlockIDFlag;
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
            }): _146.EvidenceList;
        };
        Block: {
            encode(message: _145.Block, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _145.Block;
            fromJSON(object: any): _145.Block;
            toJSON(message: _145.Block): unknown;
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
                                type?: _148.SignedMsgType;
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
                                type?: _148.SignedMsgType;
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
                                            blockIdFlag?: _148.BlockIDFlag;
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
                        blockIdFlag?: _148.BlockIDFlag;
                        validatorAddress?: Uint8Array;
                        timestamp?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        signature?: Uint8Array;
                    }[];
                };
            }): _145.Block;
        };
    };
    const version: {
        App: {
            encode(message: _150.App, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _150.App;
            fromJSON(object: any): _150.App;
            toJSON(message: _150.App): unknown;
            fromPartial(object: {
                protocol?: bigint;
                software?: string;
            }): _150.App;
        };
        Consensus: {
            encode(message: _150.Consensus, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _150.Consensus;
            fromJSON(object: any): _150.Consensus;
            toJSON(message: _150.Consensus): unknown;
            fromPartial(object: {
                block?: bigint;
                app?: bigint;
            }): _150.Consensus;
        };
    };
}
