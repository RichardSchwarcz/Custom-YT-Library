import React, { useEffect, useState } from "react";
// components
import TopicsPanel from "./TopicsPanel";

function TopicsPanelContainer() {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    const fetchTopicsFn = async () => {
      const data = await fetch("http://localhost:8000/Topics").then((res) => {
        return res.json();
      });

      setTopics(data);
    };

    fetchTopicsFn();
  }, []);

  return <TopicsPanel topics={topics} />;
}

export default TopicsPanelContainer;
