import { useState, useEffect } from "react";
const useFetch = (URL) => {
  const [data, setData] = useState([]);
  const [Loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const makeApiCall = async () => {
    setLoading(true);
    setIsError(false);
    try {
      const response = await fetch(URL);
      const comingData = await response.json();
      setData(comingData);
      setLoading(false);
      setIsError(false);
    } catch (error) {
      setLoading(false);
      setIsError(true);
    }
  };
  useEffect(() => {
    makeApiCall(URL);
  }, []);
  return [data, Loading, isError];
};
export default useFetch;
