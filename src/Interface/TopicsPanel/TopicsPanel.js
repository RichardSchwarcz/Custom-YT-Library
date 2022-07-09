import { useState } from "react";
import CreateTopic from "../../components/TopicsPanel/CreateTopic";
import TopicsList from "../../components/TopicsPanel/TopicsList";
import CSS from "./TopicsPanel.module.css";

function TopicsPanel() {
  const topicElements = [
    {
      Tag: "Code",
      Name: "React",
      id: 1,
    },
    {
      Tag: "Code",
      Name: "CS Shit",
      id: 2,
    },
    {
      Tag: "Climb",
      Name: "Training",
      id: 3,
    },
  ];

  const [topics, setTopics] = useState(topicElements);
  const [CreateNewTopicModal, setCreateNewTopicModal] = useState(false);

  return (
    <div className={CSS.Container}>
      <div className={CSS.Title}>
        <h2 className={CSS.Header}>Topics</h2>
      </div>
      <div className={CSS.ContentContainer}>
        <div className={CSS.Tag}></div>
        <div className={CSS.Topic}>
          <TopicsList topics={topics} />
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

export default TopicsPanel;
