import axios from "axios";

const BASE_URL = "https://api.dictionaryapi.dev/api/v2/entries/en";

export async function fetchWordData(word: string) {
  try {
    const res = await axios.get(`${BASE_URL}/${word}`);
    return res.data[0]; // first result
  } catch (error) {
    return null;
  }
}
