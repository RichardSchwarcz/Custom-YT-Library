import React, { useEffect, useState } from "react";
// components
import Topics from "./Topics";

function TopicsContainer() {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    const fetchTopicsFn = async () => {
      const data = await fetch("http://localhost:8000/Topics").then((res) => {
        return res.json();
      });
      console.log(data);
      setTopics(data);
    };

    fetchTopicsFn();
  }, []);

  return;
}

export default TopicsContainer;
