import { useEffect, useState } from "react";

function useFetch(path) {
  const [data, setData] = useState([]);
  const jsonResponse = (res) => {
    return res.json();
  };
  const dataSetter = (data) => {
    setData(data);
  };

  const fetchData = async () => {
    const fetchedData = await fetch(path);
    const json = await jsonResponse(fetchedData);
    dataSetter(json);
  };

  const refetch = () => {
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, refetch };
}

export default useFetch;
