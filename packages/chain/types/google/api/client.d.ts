import { LaunchStage } from "./launch_stage";
import { Duration } from "../protobuf/duration";
import { BinaryReader, BinaryWriter } from "../../binary";
import { DeepPartial } from "../../helpers";
/**
 * The organization for which the client libraries are being published.
 * Affects the url where generated docs are published, etc.
 */
export declare enum ClientLibraryOrganization {
    /** CLIENT_LIBRARY_ORGANIZATION_UNSPECIFIED - Not useful. */
    CLIENT_LIBRARY_ORGANIZATION_UNSPECIFIED = 0,
    /** CLOUD - Google Cloud Platform Org. */
    CLOUD = 1,
    /** ADS - Ads (Advertising) Org. */
    ADS = 2,
    /** PHOTOS - Photos Org. */
    PHOTOS = 3,
    /** STREET_VIEW - Street View Org. */
    STREET_VIEW = 4,
    /** SHOPPING - Shopping Org. */
    SHOPPING = 5,
    /** GEO - Geo Org. */
    GEO = 6,
    /** GENERATIVE_AI - Generative AI - https://developers.generativeai.google */
    GENERATIVE_AI = 7,
    UNRECOGNIZED = -1
}
export declare function clientLibraryOrganizationFromJSON(object: any): ClientLibraryOrganization;
export declare function clientLibraryOrganizationToJSON(object: ClientLibraryOrganization): string;
/** To where should client libraries be published? */
export declare enum ClientLibraryDestination {
    /**
     * CLIENT_LIBRARY_DESTINATION_UNSPECIFIED - Client libraries will neither be generated nor published to package
     * managers.
     */
    CLIENT_LIBRARY_DESTINATION_UNSPECIFIED = 0,
    /**
     * GITHUB - Generate the client library in a repo under github.com/googleapis,
     * but don't publish it to package managers.
     */
    GITHUB = 10,
    /** PACKAGE_MANAGER - Publish the library to package managers like nuget.org and npmjs.com. */
    PACKAGE_MANAGER = 20,
    UNRECOGNIZED = -1
}
export declare function clientLibraryDestinationFromJSON(object: any): ClientLibraryDestination;
export declare function clientLibraryDestinationToJSON(object: ClientLibraryDestination): string;
/** Required information for every language. */
export interface CommonLanguageSettings {
    /**
     * Link to automatically generated reference documentation.  Example:
     * https://cloud.google.com/nodejs/docs/reference/asset/latest
     */
    /** @deprecated */
    referenceDocsUri: string;
    /** The destination where API teams want this client library to be published. */
    destinations: ClientLibraryDestination[];
}
/** Details about how and where to publish client libraries. */
export interface ClientLibrarySettings {
    /**
     * Version of the API to apply these settings to. This is the full protobuf
     * package for the API, ending in the version element.
     * Examples: "google.cloud.speech.v1" and "google.spanner.admin.database.v1".
     */
    version: string;
    /** Launch stage of this version of the API. */
    launchStage: LaunchStage;
    /**
     * When using transport=rest, the client request will encode enums as
     * numbers rather than strings.
     */
    restNumericEnums: boolean;
    /** Settings for legacy Java features, supported in the Service YAML. */
    javaSettings: JavaSettings;
    /** Settings for C++ client libraries. */
    cppSettings: CppSettings;
    /** Settings for PHP client libraries. */
    phpSettings: PhpSettings;
    /** Settings for Python client libraries. */
    pythonSettings: PythonSettings;
    /** Settings for Node client libraries. */
    nodeSettings: NodeSettings;
    /** Settings for .NET client libraries. */
    dotnetSettings: DotnetSettings;
    /** Settings for Ruby client libraries. */
    rubySettings: RubySettings;
    /** Settings for Go client libraries. */
    goSettings: GoSettings;
}
/**
 * This message configures the settings for publishing [Google Cloud Client
 * libraries](https://cloud.google.com/apis/docs/cloud-client-libraries)
 * generated from the service config.
 */
export interface Publishing {
    /**
     * A list of API method settings, e.g. the behavior for methods that use the
     * long-running operation pattern.
     */
    methodSettings: MethodSettings[];
    /**
     * Link to a *public* URI where users can report issues.  Example:
     * https://issuetracker.google.com/issues/new?component=190865&template=1161103
     */
    newIssueUri: string;
    /**
     * Link to product home page.  Example:
     * https://cloud.google.com/asset-inventory/docs/overview
     */
    documentationUri: string;
    /**
     * Used as a tracking tag when collecting data about the APIs developer
     * relations artifacts like docs, packages delivered to package managers,
     * etc.  Example: "speech".
     */
    apiShortName: string;
    /** GitHub label to apply to issues and pull requests opened for this API. */
    githubLabel: string;
    /**
     * GitHub teams to be added to CODEOWNERS in the directory in GitHub
     * containing source code for the client libraries for this API.
     */
    codeownerGithubTeams: string[];
    /**
     * A prefix used in sample code when demarking regions to be included in
     * documentation.
     */
    docTagPrefix: string;
    /** For whom the client library is being published. */
    organization: ClientLibraryOrganization;
    /**
     * Client library settings.  If the same version string appears multiple
     * times in this list, then the last one wins.  Settings from earlier
     * settings with the same version string are discarded.
     */
    librarySettings: ClientLibrarySettings[];
    /**
     * Optional link to proto reference documentation.  Example:
     * https://cloud.google.com/pubsub/lite/docs/reference/rpc
     */
    protoReferenceDocumentationUri: string;
}
export interface JavaSettings_ServiceClassNamesEntry {
    key: string;
    value: string;
}
/** Settings for Java client libraries. */
export interface JavaSettings {
    /**
     * The package name to use in Java. Clobbers the java_package option
     * set in the protobuf. This should be used **only** by APIs
     * who have already set the language_settings.java.package_name" field
     * in gapic.yaml. API teams should use the protobuf java_package option
     * where possible.
     *
     * Example of a YAML configuration::
     *
     *  publishing:
     *    java_settings:
     *      library_package: com.google.cloud.pubsub.v1
     */
    libraryPackage: string;
    /**
     * Configure the Java class name to use instead of the service's for its
     * corresponding generated GAPIC client. Keys are fully-qualified
     * service names as they appear in the protobuf (including the full
     * the language_settings.java.interface_names" field in gapic.yaml. API
     * teams should otherwise use the service name as it appears in the
     * protobuf.
     *
     * Example of a YAML configuration::
     *
     *  publishing:
     *    java_settings:
     *      service_class_names:
     *        - google.pubsub.v1.Publisher: TopicAdmin
     *        - google.pubsub.v1.Subscriber: SubscriptionAdmin
     */
    serviceClassNames: {
        [key: string]: string;
    };
    /** Some settings. */
    common: CommonLanguageSettings;
}
/** Settings for C++ client libraries. */
export interface CppSettings {
    /** Some settings. */
    common: CommonLanguageSettings;
}
/** Settings for Php client libraries. */
export interface PhpSettings {
    /** Some settings. */
    common: CommonLanguageSettings;
}
/** Settings for Python client libraries. */
export interface PythonSettings {
    /** Some settings. */
    common: CommonLanguageSettings;
}
/** Settings for Node client libraries. */
export interface NodeSettings {
    /** Some settings. */
    common: CommonLanguageSettings;
}
export interface DotnetSettings_RenamedServicesEntry {
    key: string;
    value: string;
}
export interface DotnetSettings_RenamedResourcesEntry {
    key: string;
    value: string;
}
/** Settings for Dotnet client libraries. */
export interface DotnetSettings {
    /** Some settings. */
    common: CommonLanguageSettings;
    /**
     * Map from original service names to renamed versions.
     * This is used when the default generated types
     * would cause a naming conflict. (Neither name is
     * fully-qualified.)
     * Example: Subscriber to SubscriberServiceApi.
     */
    renamedServices: {
        [key: string]: string;
    };
    /**
     * Map from full resource types to the effective short name
     * for the resource. This is used when otherwise resource
     * named from different services would cause naming collisions.
     * Example entry:
     * "datalabeling.googleapis.com/Dataset": "DataLabelingDataset"
     */
    renamedResources: {
        [key: string]: string;
    };
    /**
     * List of full resource types to ignore during generation.
     * This is typically used for API-specific Location resources,
     * which should be handled by the generator as if they were actually
     * the common Location resources.
     * Example entry: "documentai.googleapis.com/Location"
     */
    ignoredResources: string[];
    /**
     * Namespaces which must be aliased in snippets due to
     * a known (but non-generator-predictable) naming collision
     */
    forcedNamespaceAliases: string[];
    /**
     * Method signatures (in the form "service.method(signature)")
     * which are provided separately, so shouldn't be generated.
     * Snippets *calling* these methods are still generated, however.
     */
    handwrittenSignatures: string[];
}
/** Settings for Ruby client libraries. */
export interface RubySettings {
    /** Some settings. */
    common: CommonLanguageSettings;
}
/** Settings for Go client libraries. */
export interface GoSettings {
    /** Some settings. */
    common: CommonLanguageSettings;
}
/** Describes the generator configuration for a method. */
export interface MethodSettings {
    /**
     * The fully qualified name of the method, for which the options below apply.
     * This is used to find the method to apply the options.
     */
    selector: string;
    /**
     * Describes settings to use for long-running operations when generating
     * API methods for RPCs. Complements RPCs that use the annotations in
     * google/longrunning/operations.proto.
     *
     * Example of a YAML configuration::
     *
     *  publishing:
     *    method_settings:
     *      - selector: google.cloud.speech.v2.Speech.BatchRecognize
     *        long_running:
     *          initial_poll_delay:
     *            seconds: 60 # 1 minute
     *          poll_delay_multiplier: 1.5
     *          max_poll_delay:
     *            seconds: 360 # 6 minutes
     *          total_poll_timeout:
     *             seconds: 54000 # 90 minutes
     */
    longRunning: MethodSettings_LongRunning;
}
/**
 * Describes settings to use when generating API methods that use the
 * long-running operation pattern.
 * All default values below are from those used in the client library
 * generators (e.g.
 * [Java](https://github.com/googleapis/gapic-generator-java/blob/04c2faa191a9b5a10b92392fe8482279c4404803/src/main/java/com/google/api/generator/gapic/composer/common/RetrySettingsComposer.java)).
 */
export interface MethodSettings_LongRunning {
    /**
     * Initial delay after which the first poll request will be made.
     * Default value: 5 seconds.
     */
    initialPollDelay: Duration;
    /**
     * Multiplier to gradually increase delay between subsequent polls until it
     * reaches max_poll_delay.
     * Default value: 1.5.
     */
    pollDelayMultiplier: number;
    /**
     * Maximum time between two subsequent poll requests.
     * Default value: 45 seconds.
     */
    maxPollDelay: Duration;
    /**
     * Total polling timeout.
     * Default value: 5 minutes.
     */
    totalPollTimeout: Duration;
}
export declare const CommonLanguageSettings: {
    encode(message: CommonLanguageSettings, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): CommonLanguageSettings;
    fromJSON(object: any): CommonLanguageSettings;
    toJSON(message: CommonLanguageSettings): unknown;
    fromPartial(object: DeepPartial<CommonLanguageSettings>): CommonLanguageSettings;
};
export declare const ClientLibrarySettings: {
    encode(message: ClientLibrarySettings, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ClientLibrarySettings;
    fromJSON(object: any): ClientLibrarySettings;
    toJSON(message: ClientLibrarySettings): unknown;
    fromPartial(object: DeepPartial<ClientLibrarySettings>): ClientLibrarySettings;
};
export declare const Publishing: {
    encode(message: Publishing, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Publishing;
    fromJSON(object: any): Publishing;
    toJSON(message: Publishing): unknown;
    fromPartial(object: DeepPartial<Publishing>): Publishing;
};
export declare const JavaSettings_ServiceClassNamesEntry: {
    encode(message: JavaSettings_ServiceClassNamesEntry, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): JavaSettings_ServiceClassNamesEntry;
    fromJSON(object: any): JavaSettings_ServiceClassNamesEntry;
    toJSON(message: JavaSettings_ServiceClassNamesEntry): unknown;
    fromPartial(object: DeepPartial<JavaSettings_ServiceClassNamesEntry>): JavaSettings_ServiceClassNamesEntry;
};
export declare const JavaSettings: {
    encode(message: JavaSettings, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): JavaSettings;
    fromJSON(object: any): JavaSettings;
    toJSON(message: JavaSettings): unknown;
    fromPartial(object: DeepPartial<JavaSettings>): JavaSettings;
};
export declare const CppSettings: {
    encode(message: CppSettings, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): CppSettings;
    fromJSON(object: any): CppSettings;
    toJSON(message: CppSettings): unknown;
    fromPartial(object: DeepPartial<CppSettings>): CppSettings;
};
export declare const PhpSettings: {
    encode(message: PhpSettings, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): PhpSettings;
    fromJSON(object: any): PhpSettings;
    toJSON(message: PhpSettings): unknown;
    fromPartial(object: DeepPartial<PhpSettings>): PhpSettings;
};
export declare const PythonSettings: {
    encode(message: PythonSettings, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): PythonSettings;
    fromJSON(object: any): PythonSettings;
    toJSON(message: PythonSettings): unknown;
    fromPartial(object: DeepPartial<PythonSettings>): PythonSettings;
};
export declare const NodeSettings: {
    encode(message: NodeSettings, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): NodeSettings;
    fromJSON(object: any): NodeSettings;
    toJSON(message: NodeSettings): unknown;
    fromPartial(object: DeepPartial<NodeSettings>): NodeSettings;
};
export declare const DotnetSettings_RenamedServicesEntry: {
    encode(message: DotnetSettings_RenamedServicesEntry, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): DotnetSettings_RenamedServicesEntry;
    fromJSON(object: any): DotnetSettings_RenamedServicesEntry;
    toJSON(message: DotnetSettings_RenamedServicesEntry): unknown;
    fromPartial(object: DeepPartial<DotnetSettings_RenamedServicesEntry>): DotnetSettings_RenamedServicesEntry;
};
export declare const DotnetSettings_RenamedResourcesEntry: {
    encode(message: DotnetSettings_RenamedResourcesEntry, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): DotnetSettings_RenamedResourcesEntry;
    fromJSON(object: any): DotnetSettings_RenamedResourcesEntry;
    toJSON(message: DotnetSettings_RenamedResourcesEntry): unknown;
    fromPartial(object: DeepPartial<DotnetSettings_RenamedResourcesEntry>): DotnetSettings_RenamedResourcesEntry;
};
export declare const DotnetSettings: {
    encode(message: DotnetSettings, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): DotnetSettings;
    fromJSON(object: any): DotnetSettings;
    toJSON(message: DotnetSettings): unknown;
    fromPartial(object: DeepPartial<DotnetSettings>): DotnetSettings;
};
export declare const RubySettings: {
    encode(message: RubySettings, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): RubySettings;
    fromJSON(object: any): RubySettings;
    toJSON(message: RubySettings): unknown;
    fromPartial(object: DeepPartial<RubySettings>): RubySettings;
};
export declare const GoSettings: {
    encode(message: GoSettings, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GoSettings;
    fromJSON(object: any): GoSettings;
    toJSON(message: GoSettings): unknown;
    fromPartial(object: DeepPartial<GoSettings>): GoSettings;
};
export declare const MethodSettings: {
    encode(message: MethodSettings, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MethodSettings;
    fromJSON(object: any): MethodSettings;
    toJSON(message: MethodSettings): unknown;
    fromPartial(object: DeepPartial<MethodSettings>): MethodSettings;
};
export declare const MethodSettings_LongRunning: {
    encode(message: MethodSettings_LongRunning, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MethodSettings_LongRunning;
    fromJSON(object: any): MethodSettings_LongRunning;
    toJSON(message: MethodSettings_LongRunning): unknown;
    fromPartial(object: DeepPartial<MethodSettings_LongRunning>): MethodSettings_LongRunning;
};
