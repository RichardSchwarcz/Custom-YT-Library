import { useEffect, useState } from "react";
import CreateTopic from "../../components/TopicsPanel/CreateTopic";
import TopicsList from "../../components/TopicsPanel/TopicsList";
import CSS from "./TopicsPanel.module.css";

function TopicsPanel() {
  const [topics, setTopics] = useState(null);
  const [CreateNewTopicModal, setCreateNewTopicModal] = useState(false);

  useEffect(() => {
    fetch("http://localhost:8000/Topics")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setTopics(data);
      });
  }, []);

  return (
    <div className={CSS.Container}>
      <div className={CSS.Title}>
        <h2 className={CSS.Header}>Topics</h2>
      </div>
      <div className={CSS.ContentContainer}>
        <div className={CSS.Tag}></div>
        <div className={CSS.Topic}>
          {topics && <TopicsList topics={topics} />}
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
