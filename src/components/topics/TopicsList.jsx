import React from "react";
import { useNavigate } from "react-router-dom";

function TopicsList(props) {
  const topics = props.topics;
  const navigate = useNavigate();
  const topicsSortByTag = topics.sort((a, b) => {
    let fa = a.tag.toLowerCase();
    let fb = b.tag.toLowerCase();

    if (fa < fb) {
      return -1;
    } else if (fa > fb) {
      return 1;
    } else return 0;
  });

  console.log(topicsSortByTag, "this");
  const handleOnClick = (topicName) => () => {
    navigate(`/${topicName}`);
  };
  return (
    <div>
      {topicsSortByTag.map((topic) => (
        <div key={topic.id} onClick={handleOnClick(topic.name)}>
          <p>{topic.name}</p>
        </div>
      ))}
    </div>
  );
}

export default TopicsList;
