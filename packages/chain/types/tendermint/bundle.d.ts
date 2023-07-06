import * as _142 from "./abci/types";
import * as _143 from "./crypto/keys";
import * as _144 from "./crypto/proof";
import * as _145 from "./libs/bits/types";
import * as _146 from "./p2p/types";
import * as _147 from "./types/block";
import * as _148 from "./types/evidence";
import * as _149 from "./types/params";
import * as _150 from "./types/types";
import * as _151 from "./types/validator";
import * as _152 from "./version/types";
export declare namespace tendermint {
    const abci: {
        checkTxTypeFromJSON(object: any): _142.CheckTxType;
        checkTxTypeToJSON(object: _142.CheckTxType): string;
        responseOfferSnapshot_ResultFromJSON(object: any): _142.ResponseOfferSnapshot_Result;
        responseOfferSnapshot_ResultToJSON(object: _142.ResponseOfferSnapshot_Result): string;
        responseApplySnapshotChunk_ResultFromJSON(object: any): _142.ResponseApplySnapshotChunk_Result;
        responseApplySnapshotChunk_ResultToJSON(object: _142.ResponseApplySnapshotChunk_Result): string;
        responseProcessProposal_ProposalStatusFromJSON(object: any): _142.ResponseProcessProposal_ProposalStatus;
        responseProcessProposal_ProposalStatusToJSON(object: _142.ResponseProcessProposal_ProposalStatus): string;
        misbehaviorTypeFromJSON(object: any): _142.MisbehaviorType;
        misbehaviorTypeToJSON(object: _142.MisbehaviorType): string;
        CheckTxType: typeof _142.CheckTxType;
        ResponseOfferSnapshot_Result: typeof _142.ResponseOfferSnapshot_Result;
        ResponseApplySnapshotChunk_Result: typeof _142.ResponseApplySnapshotChunk_Result;
        ResponseProcessProposal_ProposalStatus: typeof _142.ResponseProcessProposal_ProposalStatus;
        MisbehaviorType: typeof _142.MisbehaviorType;
        Request: {
            encode(message: _142.Request, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _142.Request;
            fromJSON(object: any): _142.Request;
            toJSON(message: _142.Request): unknown;
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
                        type?: _142.MisbehaviorType;
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
                    type?: _142.CheckTxType;
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
                        type?: _142.MisbehaviorType;
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
                        type?: _142.MisbehaviorType;
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
            }): _142.Request;
        };
        RequestEcho: {
            encode(message: _142.RequestEcho, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _142.RequestEcho;
            fromJSON(object: any): _142.RequestEcho;
            toJSON(message: _142.RequestEcho): unknown;
            fromPartial(object: {
                message?: string;
            }): _142.RequestEcho;
        };
        RequestFlush: {
            encode(_: _142.RequestFlush, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _142.RequestFlush;
            fromJSON(_: any): _142.RequestFlush;
            toJSON(_: _142.RequestFlush): unknown;
            fromPartial(_: {}): _142.RequestFlush;
        };
        RequestInfo: {
            encode(message: _142.RequestInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _142.RequestInfo;
            fromJSON(object: any): _142.RequestInfo;
            toJSON(message: _142.RequestInfo): unknown;
            fromPartial(object: {
                version?: string;
                blockVersion?: bigint;
                p2pVersion?: bigint;
                abciVersion?: string;
            }): _142.RequestInfo;
        };
        RequestInitChain: {
            encode(message: _142.RequestInitChain, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _142.RequestInitChain;
            fromJSON(object: any): _142.RequestInitChain;
            toJSON(message: _142.RequestInitChain): unknown;
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
            }): _142.RequestInitChain;
        };
        RequestQuery: {
            encode(message: _142.RequestQuery, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _142.RequestQuery;
            fromJSON(object: any): _142.RequestQuery;
            toJSON(message: _142.RequestQuery): unknown;
            fromPartial(object: {
                data?: Uint8Array;
                path?: string;
                height?: bigint;
                prove?: boolean;
            }): _142.RequestQuery;
        };
        RequestBeginBlock: {
            encode(message: _142.RequestBeginBlock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _142.RequestBeginBlock;
            fromJSON(object: any): _142.RequestBeginBlock;
            toJSON(message: _142.RequestBeginBlock): unknown;
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
                    type?: _142.MisbehaviorType;
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
            }): _142.RequestBeginBlock;
        };
        RequestCheckTx: {
            encode(message: _142.RequestCheckTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _142.RequestCheckTx;
            fromJSON(object: any): _142.RequestCheckTx;
            toJSON(message: _142.RequestCheckTx): unknown;
            fromPartial(object: {
                tx?: Uint8Array;
                type?: _142.CheckTxType;
            }): _142.RequestCheckTx;
        };
        RequestDeliverTx: {
            encode(message: _142.RequestDeliverTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _142.RequestDeliverTx;
            fromJSON(object: any): _142.RequestDeliverTx;
            toJSON(message: _142.RequestDeliverTx): unknown;
            fromPartial(object: {
                tx?: Uint8Array;
            }): _142.RequestDeliverTx;
        };
        RequestEndBlock: {
            encode(message: _142.RequestEndBlock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _142.RequestEndBlock;
            fromJSON(object: any): _142.RequestEndBlock;
            toJSON(message: _142.RequestEndBlock): unknown;
            fromPartial(object: {
                height?: bigint;
            }): _142.RequestEndBlock;
        };
        RequestCommit: {
            encode(_: _142.RequestCommit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _142.RequestCommit;
            fromJSON(_: any): _142.RequestCommit;
            toJSON(_: _142.RequestCommit): unknown;
            fromPartial(_: {}): _142.RequestCommit;
        };
        RequestListSnapshots: {
            encode(_: _142.RequestListSnapshots, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _142.RequestListSnapshots;
            fromJSON(_: any): _142.RequestListSnapshots;
            toJSON(_: _142.RequestListSnapshots): unknown;
            fromPartial(_: {}): _142.RequestListSnapshots;
        };
        RequestOfferSnapshot: {
            encode(message: _142.RequestOfferSnapshot, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _142.RequestOfferSnapshot;
            fromJSON(object: any): _142.RequestOfferSnapshot;
            toJSON(message: _142.RequestOfferSnapshot): unknown;
            fromPartial(object: {
                snapshot?: {
                    height?: bigint;
                    format?: number;
                    chunks?: number;
                    hash?: Uint8Array;
                    metadata?: Uint8Array;
                };
                appHash?: Uint8Array;
            }): _142.RequestOfferSnapshot;
        };
        RequestLoadSnapshotChunk: {
            encode(message: _142.RequestLoadSnapshotChunk, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _142.RequestLoadSnapshotChunk;
            fromJSON(object: any): _142.RequestLoadSnapshotChunk;
            toJSON(message: _142.RequestLoadSnapshotChunk): unknown;
            fromPartial(object: {
                height?: bigint;
                format?: number;
                chunk?: number;
            }): _142.RequestLoadSnapshotChunk;
        };
        RequestApplySnapshotChunk: {
            encode(message: _142.RequestApplySnapshotChunk, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _142.RequestApplySnapshotChunk;
            fromJSON(object: any): _142.RequestApplySnapshotChunk;
            toJSON(message: _142.RequestApplySnapshotChunk): unknown;
            fromPartial(object: {
                index?: number;
                chunk?: Uint8Array;
                sender?: string;
            }): _142.RequestApplySnapshotChunk;
        };
        RequestPrepareProposal: {
            encode(message: _142.RequestPrepareProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _142.RequestPrepareProposal;
            fromJSON(object: any): _142.RequestPrepareProposal;
            toJSON(message: _142.RequestPrepareProposal): unknown;
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
                    type?: _142.MisbehaviorType;
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
            }): _142.RequestPrepareProposal;
        };
        RequestProcessProposal: {
            encode(message: _142.RequestProcessProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _142.RequestProcessProposal;
            fromJSON(object: any): _142.RequestProcessProposal;
            toJSON(message: _142.RequestProcessProposal): unknown;
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
                    type?: _142.MisbehaviorType;
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
            }): _142.RequestProcessProposal;
        };
        Response: {
            encode(message: _142.Response, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _142.Response;
            fromJSON(object: any): _142.Response;
            toJSON(message: _142.Response): unknown;
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
                    result?: _142.ResponseOfferSnapshot_Result;
                };
                loadSnapshotChunk?: {
                    chunk?: Uint8Array;
                };
                applySnapshotChunk?: {
                    result?: _142.ResponseApplySnapshotChunk_Result;
                    refetchChunks?: number[];
                    rejectSenders?: string[];
                };
                prepareProposal?: {
                    txs?: Uint8Array[];
                };
                processProposal?: {
                    status?: _142.ResponseProcessProposal_ProposalStatus;
                };
            }): _142.Response;
        };
        ResponseException: {
            encode(message: _142.ResponseException, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _142.ResponseException;
            fromJSON(object: any): _142.ResponseException;
            toJSON(message: _142.ResponseException): unknown;
            fromPartial(object: {
                error?: string;
            }): _142.ResponseException;
        };
        ResponseEcho: {
            encode(message: _142.ResponseEcho, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _142.ResponseEcho;
            fromJSON(object: any): _142.ResponseEcho;
            toJSON(message: _142.ResponseEcho): unknown;
            fromPartial(object: {
                message?: string;
            }): _142.ResponseEcho;
        };
        ResponseFlush: {
            encode(_: _142.ResponseFlush, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _142.ResponseFlush;
            fromJSON(_: any): _142.ResponseFlush;
            toJSON(_: _142.ResponseFlush): unknown;
            fromPartial(_: {}): _142.ResponseFlush;
        };
        ResponseInfo: {
            encode(message: _142.ResponseInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _142.ResponseInfo;
            fromJSON(object: any): _142.ResponseInfo;
            toJSON(message: _142.ResponseInfo): unknown;
            fromPartial(object: {
                data?: string;
                version?: string;
                appVersion?: bigint;
                lastBlockHeight?: bigint;
                lastBlockAppHash?: Uint8Array;
            }): _142.ResponseInfo;
        };
        ResponseInitChain: {
            encode(message: _142.ResponseInitChain, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _142.ResponseInitChain;
            fromJSON(object: any): _142.ResponseInitChain;
            toJSON(message: _142.ResponseInitChain): unknown;
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
            }): _142.ResponseInitChain;
        };
        ResponseQuery: {
            encode(message: _142.ResponseQuery, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _142.ResponseQuery;
            fromJSON(object: any): _142.ResponseQuery;
            toJSON(message: _142.ResponseQuery): unknown;
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
            }): _142.ResponseQuery;
        };
        ResponseBeginBlock: {
            encode(message: _142.ResponseBeginBlock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _142.ResponseBeginBlock;
            fromJSON(object: any): _142.ResponseBeginBlock;
            toJSON(message: _142.ResponseBeginBlock): unknown;
            fromPartial(object: {
                events?: {
                    type?: string;
                    attributes?: {
                        key?: string;
                        value?: string;
                        index?: boolean;
                    }[];
                }[];
            }): _142.ResponseBeginBlock;
        };
        ResponseCheckTx: {
            encode(message: _142.ResponseCheckTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _142.ResponseCheckTx;
            fromJSON(object: any): _142.ResponseCheckTx;
            toJSON(message: _142.ResponseCheckTx): unknown;
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
            }): _142.ResponseCheckTx;
        };
        ResponseDeliverTx: {
            encode(message: _142.ResponseDeliverTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _142.ResponseDeliverTx;
            fromJSON(object: any): _142.ResponseDeliverTx;
            toJSON(message: _142.ResponseDeliverTx): unknown;
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
            }): _142.ResponseDeliverTx;
        };
        ResponseEndBlock: {
            encode(message: _142.ResponseEndBlock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _142.ResponseEndBlock;
            fromJSON(object: any): _142.ResponseEndBlock;
            toJSON(message: _142.ResponseEndBlock): unknown;
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
            }): _142.ResponseEndBlock;
        };
        ResponseCommit: {
            encode(message: _142.ResponseCommit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _142.ResponseCommit;
            fromJSON(object: any): _142.ResponseCommit;
            toJSON(message: _142.ResponseCommit): unknown;
            fromPartial(object: {
                data?: Uint8Array;
                retainHeight?: bigint;
            }): _142.ResponseCommit;
        };
        ResponseListSnapshots: {
            encode(message: _142.ResponseListSnapshots, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _142.ResponseListSnapshots;
            fromJSON(object: any): _142.ResponseListSnapshots;
            toJSON(message: _142.ResponseListSnapshots): unknown;
            fromPartial(object: {
                snapshots?: {
                    height?: bigint;
                    format?: number;
                    chunks?: number;
                    hash?: Uint8Array;
                    metadata?: Uint8Array;
                }[];
            }): _142.ResponseListSnapshots;
        };
        ResponseOfferSnapshot: {
            encode(message: _142.ResponseOfferSnapshot, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _142.ResponseOfferSnapshot;
            fromJSON(object: any): _142.ResponseOfferSnapshot;
            toJSON(message: _142.ResponseOfferSnapshot): unknown;
            fromPartial(object: {
                result?: _142.ResponseOfferSnapshot_Result;
            }): _142.ResponseOfferSnapshot;
        };
        ResponseLoadSnapshotChunk: {
            encode(message: _142.ResponseLoadSnapshotChunk, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _142.ResponseLoadSnapshotChunk;
            fromJSON(object: any): _142.ResponseLoadSnapshotChunk;
            toJSON(message: _142.ResponseLoadSnapshotChunk): unknown;
            fromPartial(object: {
                chunk?: Uint8Array;
            }): _142.ResponseLoadSnapshotChunk;
        };
        ResponseApplySnapshotChunk: {
            encode(message: _142.ResponseApplySnapshotChunk, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _142.ResponseApplySnapshotChunk;
            fromJSON(object: any): _142.ResponseApplySnapshotChunk;
            toJSON(message: _142.ResponseApplySnapshotChunk): unknown;
            fromPartial(object: {
                result?: _142.ResponseApplySnapshotChunk_Result;
                refetchChunks?: number[];
                rejectSenders?: string[];
            }): _142.ResponseApplySnapshotChunk;
        };
        ResponsePrepareProposal: {
            encode(message: _142.ResponsePrepareProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _142.ResponsePrepareProposal;
            fromJSON(object: any): _142.ResponsePrepareProposal;
            toJSON(message: _142.ResponsePrepareProposal): unknown;
            fromPartial(object: {
                txs?: Uint8Array[];
            }): _142.ResponsePrepareProposal;
        };
        ResponseProcessProposal: {
            encode(message: _142.ResponseProcessProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _142.ResponseProcessProposal;
            fromJSON(object: any): _142.ResponseProcessProposal;
            toJSON(message: _142.ResponseProcessProposal): unknown;
            fromPartial(object: {
                status?: _142.ResponseProcessProposal_ProposalStatus;
            }): _142.ResponseProcessProposal;
        };
        CommitInfo: {
            encode(message: _142.CommitInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _142.CommitInfo;
            fromJSON(object: any): _142.CommitInfo;
            toJSON(message: _142.CommitInfo): unknown;
            fromPartial(object: {
                round?: number;
                votes?: {
                    validator?: {
                        address?: Uint8Array;
                        power?: bigint;
                    };
                    signedLastBlock?: boolean;
                }[];
            }): _142.CommitInfo;
        };
        ExtendedCommitInfo: {
            encode(message: _142.ExtendedCommitInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _142.ExtendedCommitInfo;
            fromJSON(object: any): _142.ExtendedCommitInfo;
            toJSON(message: _142.ExtendedCommitInfo): unknown;
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
            }): _142.ExtendedCommitInfo;
        };
        Event: {
            encode(message: _142.Event, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _142.Event;
            fromJSON(object: any): _142.Event;
            toJSON(message: _142.Event): unknown;
            fromPartial(object: {
                type?: string;
                attributes?: {
                    key?: string;
                    value?: string;
                    index?: boolean;
                }[];
            }): _142.Event;
        };
        EventAttribute: {
            encode(message: _142.EventAttribute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _142.EventAttribute;
            fromJSON(object: any): _142.EventAttribute;
            toJSON(message: _142.EventAttribute): unknown;
            fromPartial(object: {
                key?: string;
                value?: string;
                index?: boolean;
            }): _142.EventAttribute;
        };
        TxResult: {
            encode(message: _142.TxResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _142.TxResult;
            fromJSON(object: any): _142.TxResult;
            toJSON(message: _142.TxResult): unknown;
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
            }): _142.TxResult;
        };
        Validator: {
            encode(message: _142.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _142.Validator;
            fromJSON(object: any): _142.Validator;
            toJSON(message: _142.Validator): unknown;
            fromPartial(object: {
                address?: Uint8Array;
                power?: bigint;
            }): _142.Validator;
        };
        ValidatorUpdate: {
            encode(message: _142.ValidatorUpdate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _142.ValidatorUpdate;
            fromJSON(object: any): _142.ValidatorUpdate;
            toJSON(message: _142.ValidatorUpdate): unknown;
            fromPartial(object: {
                pubKey?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                };
                power?: bigint;
            }): _142.ValidatorUpdate;
        };
        VoteInfo: {
            encode(message: _142.VoteInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _142.VoteInfo;
            fromJSON(object: any): _142.VoteInfo;
            toJSON(message: _142.VoteInfo): unknown;
            fromPartial(object: {
                validator?: {
                    address?: Uint8Array;
                    power?: bigint;
                };
                signedLastBlock?: boolean;
            }): _142.VoteInfo;
        };
        ExtendedVoteInfo: {
            encode(message: _142.ExtendedVoteInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _142.ExtendedVoteInfo;
            fromJSON(object: any): _142.ExtendedVoteInfo;
            toJSON(message: _142.ExtendedVoteInfo): unknown;
            fromPartial(object: {
                validator?: {
                    address?: Uint8Array;
                    power?: bigint;
                };
                signedLastBlock?: boolean;
                voteExtension?: Uint8Array;
            }): _142.ExtendedVoteInfo;
        };
        Misbehavior: {
            encode(message: _142.Misbehavior, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _142.Misbehavior;
            fromJSON(object: any): _142.Misbehavior;
            toJSON(message: _142.Misbehavior): unknown;
            fromPartial(object: {
                type?: _142.MisbehaviorType;
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
            }): _142.Misbehavior;
        };
        Snapshot: {
            encode(message: _142.Snapshot, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _142.Snapshot;
            fromJSON(object: any): _142.Snapshot;
            toJSON(message: _142.Snapshot): unknown;
            fromPartial(object: {
                height?: bigint;
                format?: number;
                chunks?: number;
                hash?: Uint8Array;
                metadata?: Uint8Array;
            }): _142.Snapshot;
        };
    };
    const crypto: {
        Proof: {
            encode(message: _144.Proof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _144.Proof;
            fromJSON(object: any): _144.Proof;
            toJSON(message: _144.Proof): unknown;
            fromPartial(object: {
                total?: bigint;
                index?: bigint;
                leafHash?: Uint8Array;
                aunts?: Uint8Array[];
            }): _144.Proof;
        };
        ValueOp: {
            encode(message: _144.ValueOp, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _144.ValueOp;
            fromJSON(object: any): _144.ValueOp;
            toJSON(message: _144.ValueOp): unknown;
            fromPartial(object: {
                key?: Uint8Array;
                proof?: {
                    total?: bigint;
                    index?: bigint;
                    leafHash?: Uint8Array;
                    aunts?: Uint8Array[];
                };
            }): _144.ValueOp;
        };
        DominoOp: {
            encode(message: _144.DominoOp, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _144.DominoOp;
            fromJSON(object: any): _144.DominoOp;
            toJSON(message: _144.DominoOp): unknown;
            fromPartial(object: {
                key?: string;
                input?: string;
                output?: string;
            }): _144.DominoOp;
        };
        ProofOp: {
            encode(message: _144.ProofOp, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _144.ProofOp;
            fromJSON(object: any): _144.ProofOp;
            toJSON(message: _144.ProofOp): unknown;
            fromPartial(object: {
                type?: string;
                key?: Uint8Array;
                data?: Uint8Array;
            }): _144.ProofOp;
        };
        ProofOps: {
            encode(message: _144.ProofOps, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _144.ProofOps;
            fromJSON(object: any): _144.ProofOps;
            toJSON(message: _144.ProofOps): unknown;
            fromPartial(object: {
                ops?: {
                    type?: string;
                    key?: Uint8Array;
                    data?: Uint8Array;
                }[];
            }): _144.ProofOps;
        };
        PublicKey: {
            encode(message: _143.PublicKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _143.PublicKey;
            fromJSON(object: any): _143.PublicKey;
            toJSON(message: _143.PublicKey): unknown;
            fromPartial(object: {
                ed25519?: Uint8Array;
                secp256k1?: Uint8Array;
            }): _143.PublicKey;
        };
    };
    namespace libs {
        const bits: {
            BitArray: {
                encode(message: _145.BitArray, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _145.BitArray;
                fromJSON(object: any): _145.BitArray;
                toJSON(message: _145.BitArray): unknown;
                fromPartial(object: {
                    bits?: bigint;
                    elems?: bigint[];
                }): _145.BitArray;
            };
        };
    }
    const p2p: {
        NetAddress: {
            encode(message: _146.NetAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _146.NetAddress;
            fromJSON(object: any): _146.NetAddress;
            toJSON(message: _146.NetAddress): unknown;
            fromPartial(object: {
                id?: string;
                ip?: string;
                port?: number;
            }): _146.NetAddress;
        };
        ProtocolVersion: {
            encode(message: _146.ProtocolVersion, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _146.ProtocolVersion;
            fromJSON(object: any): _146.ProtocolVersion;
            toJSON(message: _146.ProtocolVersion): unknown;
            fromPartial(object: {
                p2p?: bigint;
                block?: bigint;
                app?: bigint;
            }): _146.ProtocolVersion;
        };
        DefaultNodeInfo: {
            encode(message: _146.DefaultNodeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _146.DefaultNodeInfo;
            fromJSON(object: any): _146.DefaultNodeInfo;
            toJSON(message: _146.DefaultNodeInfo): unknown;
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
            }): _146.DefaultNodeInfo;
        };
        DefaultNodeInfoOther: {
            encode(message: _146.DefaultNodeInfoOther, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _146.DefaultNodeInfoOther;
            fromJSON(object: any): _146.DefaultNodeInfoOther;
            toJSON(message: _146.DefaultNodeInfoOther): unknown;
            fromPartial(object: {
                txIndex?: string;
                rpcAddress?: string;
            }): _146.DefaultNodeInfoOther;
        };
    };
    const types: {
        ValidatorSet: {
            encode(message: _151.ValidatorSet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _151.ValidatorSet;
            fromJSON(object: any): _151.ValidatorSet;
            toJSON(message: _151.ValidatorSet): unknown;
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
            }): _151.ValidatorSet;
        };
        Validator: {
            encode(message: _151.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _151.Validator;
            fromJSON(object: any): _151.Validator;
            toJSON(message: _151.Validator): unknown;
            fromPartial(object: {
                address?: Uint8Array;
                pubKey?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                };
                votingPower?: bigint;
                proposerPriority?: bigint;
            }): _151.Validator;
        };
        SimpleValidator: {
            encode(message: _151.SimpleValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _151.SimpleValidator;
            fromJSON(object: any): _151.SimpleValidator;
            toJSON(message: _151.SimpleValidator): unknown;
            fromPartial(object: {
                pubKey?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                };
                votingPower?: bigint;
            }): _151.SimpleValidator;
        };
        blockIDFlagFromJSON(object: any): _150.BlockIDFlag;
        blockIDFlagToJSON(object: _150.BlockIDFlag): string;
        signedMsgTypeFromJSON(object: any): _150.SignedMsgType;
        signedMsgTypeToJSON(object: _150.SignedMsgType): string;
        BlockIDFlag: typeof _150.BlockIDFlag;
        SignedMsgType: typeof _150.SignedMsgType;
        PartSetHeader: {
            encode(message: _150.PartSetHeader, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _150.PartSetHeader;
            fromJSON(object: any): _150.PartSetHeader;
            toJSON(message: _150.PartSetHeader): unknown;
            fromPartial(object: {
                total?: number;
                hash?: Uint8Array;
            }): _150.PartSetHeader;
        };
        Part: {
            encode(message: _150.Part, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _150.Part;
            fromJSON(object: any): _150.Part;
            toJSON(message: _150.Part): unknown;
            fromPartial(object: {
                index?: number;
                bytes?: Uint8Array;
                proof?: {
                    total?: bigint;
                    index?: bigint;
                    leafHash?: Uint8Array;
                    aunts?: Uint8Array[];
                };
            }): _150.Part;
        };
        BlockID: {
            encode(message: _150.BlockID, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _150.BlockID;
            fromJSON(object: any): _150.BlockID;
            toJSON(message: _150.BlockID): unknown;
            fromPartial(object: {
                hash?: Uint8Array;
                partSetHeader?: {
                    total?: number;
                    hash?: Uint8Array;
                };
            }): _150.BlockID;
        };
        Header: {
            encode(message: _150.Header, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _150.Header;
            fromJSON(object: any): _150.Header;
            toJSON(message: _150.Header): unknown;
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
            }): _150.Header;
        };
        Data: {
            encode(message: _150.Data, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _150.Data;
            fromJSON(object: any): _150.Data;
            toJSON(message: _150.Data): unknown;
            fromPartial(object: {
                txs?: Uint8Array[];
            }): _150.Data;
        };
        Vote: {
            encode(message: _150.Vote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _150.Vote;
            fromJSON(object: any): _150.Vote;
            toJSON(message: _150.Vote): unknown;
            fromPartial(object: {
                type?: _150.SignedMsgType;
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
            }): _150.Vote;
        };
        Commit: {
            encode(message: _150.Commit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _150.Commit;
            fromJSON(object: any): _150.Commit;
            toJSON(message: _150.Commit): unknown;
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
                    blockIdFlag?: _150.BlockIDFlag;
                    validatorAddress?: Uint8Array;
                    timestamp?: {
                        seconds?: bigint;
                        nanos?: number;
                    };
                    signature?: Uint8Array;
                }[];
            }): _150.Commit;
        };
        CommitSig: {
            encode(message: _150.CommitSig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _150.CommitSig;
            fromJSON(object: any): _150.CommitSig;
            toJSON(message: _150.CommitSig): unknown;
            fromPartial(object: {
                blockIdFlag?: _150.BlockIDFlag;
                validatorAddress?: Uint8Array;
                timestamp?: {
                    seconds?: bigint;
                    nanos?: number;
                };
                signature?: Uint8Array;
            }): _150.CommitSig;
        };
        Proposal: {
            encode(message: _150.Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _150.Proposal;
            fromJSON(object: any): _150.Proposal;
            toJSON(message: _150.Proposal): unknown;
            fromPartial(object: {
                type?: _150.SignedMsgType;
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
            }): _150.Proposal;
        };
        SignedHeader: {
            encode(message: _150.SignedHeader, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _150.SignedHeader;
            fromJSON(object: any): _150.SignedHeader;
            toJSON(message: _150.SignedHeader): unknown;
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
                        blockIdFlag?: _150.BlockIDFlag;
                        validatorAddress?: Uint8Array;
                        timestamp?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        signature?: Uint8Array;
                    }[];
                };
            }): _150.SignedHeader;
        };
        LightBlock: {
            encode(message: _150.LightBlock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _150.LightBlock;
            fromJSON(object: any): _150.LightBlock;
            toJSON(message: _150.LightBlock): unknown;
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
                            blockIdFlag?: _150.BlockIDFlag;
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
            }): _150.LightBlock;
        };
        BlockMeta: {
            encode(message: _150.BlockMeta, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _150.BlockMeta;
            fromJSON(object: any): _150.BlockMeta;
            toJSON(message: _150.BlockMeta): unknown;
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
            }): _150.BlockMeta;
        };
        TxProof: {
            encode(message: _150.TxProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _150.TxProof;
            fromJSON(object: any): _150.TxProof;
            toJSON(message: _150.TxProof): unknown;
            fromPartial(object: {
                rootHash?: Uint8Array;
                data?: Uint8Array;
                proof?: {
                    total?: bigint;
                    index?: bigint;
                    leafHash?: Uint8Array;
                    aunts?: Uint8Array[];
                };
            }): _150.TxProof;
        };
        ConsensusParams: {
            encode(message: _149.ConsensusParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _149.ConsensusParams;
            fromJSON(object: any): _149.ConsensusParams;
            toJSON(message: _149.ConsensusParams): unknown;
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
            }): _149.ConsensusParams;
        };
        BlockParams: {
            encode(message: _149.BlockParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _149.BlockParams;
            fromJSON(object: any): _149.BlockParams;
            toJSON(message: _149.BlockParams): unknown;
            fromPartial(object: {
                maxBytes?: bigint;
                maxGas?: bigint;
            }): _149.BlockParams;
        };
        EvidenceParams: {
            encode(message: _149.EvidenceParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _149.EvidenceParams;
            fromJSON(object: any): _149.EvidenceParams;
            toJSON(message: _149.EvidenceParams): unknown;
            fromPartial(object: {
                maxAgeNumBlocks?: bigint;
                maxAgeDuration?: {
                    seconds?: bigint;
                    nanos?: number;
                };
                maxBytes?: bigint;
            }): _149.EvidenceParams;
        };
        ValidatorParams: {
            encode(message: _149.ValidatorParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _149.ValidatorParams;
            fromJSON(object: any): _149.ValidatorParams;
            toJSON(message: _149.ValidatorParams): unknown;
            fromPartial(object: {
                pubKeyTypes?: string[];
            }): _149.ValidatorParams;
        };
        VersionParams: {
            encode(message: _149.VersionParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _149.VersionParams;
            fromJSON(object: any): _149.VersionParams;
            toJSON(message: _149.VersionParams): unknown;
            fromPartial(object: {
                app?: bigint;
            }): _149.VersionParams;
        };
        HashedParams: {
            encode(message: _149.HashedParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _149.HashedParams;
            fromJSON(object: any): _149.HashedParams;
            toJSON(message: _149.HashedParams): unknown;
            fromPartial(object: {
                blockMaxBytes?: bigint;
                blockMaxGas?: bigint;
            }): _149.HashedParams;
        };
        Evidence: {
            encode(message: _148.Evidence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _148.Evidence;
            fromJSON(object: any): _148.Evidence;
            toJSON(message: _148.Evidence): unknown;
            fromPartial(object: {
                duplicateVoteEvidence?: {
                    voteA?: {
                        type?: _150.SignedMsgType;
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
                        type?: _150.SignedMsgType;
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
                                    blockIdFlag?: _150.BlockIDFlag;
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
            }): _148.Evidence;
        };
        DuplicateVoteEvidence: {
            encode(message: _148.DuplicateVoteEvidence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _148.DuplicateVoteEvidence;
            fromJSON(object: any): _148.DuplicateVoteEvidence;
            toJSON(message: _148.DuplicateVoteEvidence): unknown;
            fromPartial(object: {
                voteA?: {
                    type?: _150.SignedMsgType;
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
                    type?: _150.SignedMsgType;
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
            }): _148.DuplicateVoteEvidence;
        };
        LightClientAttackEvidence: {
            encode(message: _148.LightClientAttackEvidence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _148.LightClientAttackEvidence;
            fromJSON(object: any): _148.LightClientAttackEvidence;
            toJSON(message: _148.LightClientAttackEvidence): unknown;
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
                                blockIdFlag?: _150.BlockIDFlag;
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
            }): _148.LightClientAttackEvidence;
        };
        EvidenceList: {
            encode(message: _148.EvidenceList, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _148.EvidenceList;
            fromJSON(object: any): _148.EvidenceList;
            toJSON(message: _148.EvidenceList): unknown;
            fromPartial(object: {
                evidence?: {
                    duplicateVoteEvidence?: {
                        voteA?: {
                            type?: _150.SignedMsgType;
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
                            type?: _150.SignedMsgType;
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
                                        blockIdFlag?: _150.BlockIDFlag;
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
            }): _148.EvidenceList;
        };
        Block: {
            encode(message: _147.Block, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _147.Block;
            fromJSON(object: any): _147.Block;
            toJSON(message: _147.Block): unknown;
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
                                type?: _150.SignedMsgType;
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
                                type?: _150.SignedMsgType;
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
                                            blockIdFlag?: _150.BlockIDFlag;
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
                        blockIdFlag?: _150.BlockIDFlag;
                        validatorAddress?: Uint8Array;
                        timestamp?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        signature?: Uint8Array;
                    }[];
                };
            }): _147.Block;
        };
    };
    const version: {
        App: {
            encode(message: _152.App, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _152.App;
            fromJSON(object: any): _152.App;
            toJSON(message: _152.App): unknown;
            fromPartial(object: {
                protocol?: bigint;
                software?: string;
            }): _152.App;
        };
        Consensus: {
            encode(message: _152.Consensus, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _152.Consensus;
            fromJSON(object: any): _152.Consensus;
            toJSON(message: _152.Consensus): unknown;
            fromPartial(object: {
                block?: bigint;
                app?: bigint;
            }): _152.Consensus;
        };
    };
}
