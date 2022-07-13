import React from "react";
import { useNavigate } from "react-router-dom";
import groupByTag from "../../../helpers/GroupTopics";
import CSS from "./TopicsList.module.css";

function TopicsList(props) {
  const topics = props.topics;
  const navigate = useNavigate();

  const handleOnClick = (topicName) => () => {
    navigate(`/${topicName}`);
  };

  const groupedTopics = groupByTag(topics);

  return (
    <div>
      {groupedTopics.map((items, index) => {
        return (
          <div key={index} className={CSS.List}>
            {items.map((topic) => {
              return (
                <div key={topic.id} onClick={handleOnClick(topic.name)}>
                  {topic.name}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
export default TopicsList;
