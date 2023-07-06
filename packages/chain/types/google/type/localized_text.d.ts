import { BinaryReader, BinaryWriter } from "../../binary";
import { DeepPartial } from "../../helpers";
/** Localized variant of a text in a particular language. */
export interface LocalizedText {
    /** Localized string in the language corresponding to `language_code' below. */
    text: string;
    /**
     * The text's BCP-47 language code, such as "en-US" or "sr-Latn".
     *
     * For more information, see
     * http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.
     */
    languageCode: string;
}
export declare const LocalizedText: {
    encode(message: LocalizedText, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): LocalizedText;
    fromJSON(object: any): LocalizedText;
    toJSON(message: LocalizedText): unknown;
    fromPartial(object: DeepPartial<LocalizedText>): LocalizedText;
};
