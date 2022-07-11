import React from "react";
import { useNavigate } from "react-router-dom";

function TopicsList(props) {
  const topics = props.topics;
  const navigate = useNavigate();

  const handleOnClick = (topicName) => () => {
    navigate(`/${topicName}`);
  };
  return (
    <div>
      {topics.map((topic) => (
        <div key={topic.id} onClick={handleOnClick(topic.name)}>
          <p>{topic.name}</p>
        </div>
      ))}
    </div>
  );
}

export default TopicsList;
