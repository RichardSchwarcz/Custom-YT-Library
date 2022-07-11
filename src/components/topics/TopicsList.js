import React from "react";
import { useNavigate, useParams } from "react-router-dom";

function TopicsList(props) {
  const topics = props.topics;
  const params = useParams();
  const navigate = useNavigate();

  console.log(JSON.stringify(params));

  const handleOnClick = (topicName) => () => {
    navigate(`/${topicName}`);
  };

  return (
    <div>
      {topics.map((topic) => (
        <div key={topic.id} onClick={handleOnClick(topic.Name)}>
          <p>{topic.Name}</p>
        </div>
      ))}
    </div>
  );
}

export default TopicsList;
