import { useEffect, useState } from "react";

function useFetch(endPoint) {
  const [data, setData] = useState([]);

  const jsonResponse = (res) => {
    return res.json();
  };

  const fetchData = async () => {
    const fetchedData = await fetch("http://localhost:8000" + endPoint);
    const json = await jsonResponse(fetchedData);
    setData(json);
  };
  // AXIOS
  // TODO
  const refetch = () => {
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, refetch };
}

export default useFetch;
