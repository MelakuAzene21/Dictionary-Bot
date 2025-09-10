export interface Meaning {
  partOfSpeech: string;
  definitions: {
    definition: string;
    example?: string;
    synonyms?: string[];
    antonyms?: string[];
  }[];
}
