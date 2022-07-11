<<<<<<<< HEAD:src/components/panels/Topics/Topics.jsx
import { useEffect, useState } from "react";
import CreateTopic from "../../topics/CreateTopic/CreateTopic";
import TopicsList from "../../topics/TopicsList";
import CSS from "./Topics.module.css";

function Topics() {
========
import { useState } from "react";
import CreateTopic from "../../topics/CreateTopic/CreateTopic";
import TopicsList from "../../topics/TopicsList";
import CSS from "./TopicsPanel.module.css";

function TopicsPanel({ topics }) {
>>>>>>>> 413c82d056c4d3136b62a5c81405c6a6ef5952a5:src/components/panels/Topics/TopicsPanel.jsx
  const [CreateNewTopicModal, setCreateNewTopicModal] = useState(false);
  const [topics, setTopics] = useState([]);

<<<<<<<< HEAD:src/components/panels/Topics/Topics.jsx
  useEffect(() => {
    fetch("http://localhost:8000/Topics")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setTopics(data);
      });
    console.log("ran");
  }, []);

========
>>>>>>>> 413c82d056c4d3136b62a5c81405c6a6ef5952a5:src/components/panels/Topics/TopicsPanel.jsx
  return (
    <div className={CSS.Container}>
      <div className={CSS.Title}>
        <h2 className={CSS.Header}>Topics</h2>
      </div>
      <div className={CSS.ContentContainer}>
<<<<<<<< HEAD:src/components/panels/Topics/Topics.jsx
        <div className={CSS.TagContainer}>
          <div className={CSS.Tag}>tralalaal</div>
        </div>
        <div className={CSS.TopicContainer}>
          <div className={CSS.TopicList}>
            {console.log(topics)}
========
        <div classsName={CSS.Tag}></div>
        <div>
          <div className={CSS.Topic}>
>>>>>>>> 413c82d056c4d3136b62a5c81405c6a6ef5952a5:src/components/panels/Topics/TopicsPanel.jsx
            {topics && <TopicsList topics={topics} />}
          </div>
          <div>
            {CreateNewTopicModal && (
              <CreateTopic closeModal={setCreateNewTopicModal} />
            )}
          </div>
        </div>
        <div className={CSS.TagButton}>+</div>
        <div
          className={CSS.TopicButton}
          onClick={() => setCreateNewTopicModal(true)}
        >
          Create New
        </div>
      </div>
    </div>
  );
}

export default Topics;
