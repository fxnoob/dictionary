import { useState, useEffect } from "react";
import dictionaryService from "../services/dictionaryService";

export default function useDictionary(str, n) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [word, setWord] = useState({});
  const init = async () => {
    dictionaryService.getWords(str, n)
      .then(res => {
        const [dict] = res;
        setWord(dict);
        setLoading(false);
        setError(false);
      })
      .catch(()=>{
        setLoading(false);
        setError(true);
      });
  };
  useEffect(() => {
    init();
  }, [str]);
  return [word, setWord, error, loading];
}