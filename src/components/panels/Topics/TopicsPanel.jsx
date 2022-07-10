import { useState } from "react";
import CreateTopic from "../../topics/CreateTopic/CreateTopic";
import TopicsList from "../../topics/TopicsList";
import CSS from "./TopicsPanel.module.css";

function TopicsPanel({ topics }) {
  const [CreateNewTopicModal, setCreateNewTopicModal] = useState(false);

  return (
    <div className={CSS.Container}>
      <div className={CSS.Title}>
        <h2 className={CSS.Header}>Topics</h2>
      </div>
      <div className={CSS.ContentContainer}>
        <div classsName={CSS.Tag}></div>
        <div>
          <div className={CSS.Topic}>
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

export default TopicsPanel;
