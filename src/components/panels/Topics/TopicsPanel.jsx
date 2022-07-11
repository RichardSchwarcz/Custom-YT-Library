import { useEffect, useState } from "react";
import CreateTopic from "../../topics/CreateTopic/CreateTopic";
import TopicsList from "../../topics/TopicsList";
import CSS from "./TopicsPanel.module.css";

function TopicsPanel() {
  const [CreateNewTopicModal, setCreateNewTopicModal] = useState(false);
  const [topics, setTopics] = useState([]);

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

  return (
    <div className={CSS.Container}>
      <div className={CSS.Title}>
        <h2 className={CSS.Header}>Topics</h2>
      </div>
      <div className={CSS.ContentContainer}>
        <div className={CSS.TagContainer}>
          <div className={CSS.Tag}>tralalaal</div>
        </div>
        <div className={CSS.TopicContainer}>
          <div className={CSS.TopicList}>
            {console.log(topics)}
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
      </div>
    </div>
  );
}

export default TopicsPanel;
