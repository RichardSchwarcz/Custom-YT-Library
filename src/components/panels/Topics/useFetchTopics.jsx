import { useEffect, useState } from "react";

function useFetchTopics() {
  const [topics, setTopics] = useState([]);

  const fetchTopics = () => {
    fetch("http://localhost:8000/Topics")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setTopics(data);
      });
  };

  const refetch = () => {
    fetchTopics();
  };

  useEffect(() => {
    fetchTopics();
  }, []);

  return { topics, refetch };
}

export default useFetchTopics;
