import { useState } from "react";
import CreateTopicModal from "../../topics/CreateTopicModal/CreateTopicModal";
import TopicsList from "../../topics/TopicsList";
import useFetch from "../../../hooks/useFetch";
import CSS from "./Topics.module.css";

function Topics() {
  const [CreateNewTopicModal, setCreateNewTopicModal] = useState(false);
  const { data, refetch } = useFetch("http://localhost:8000/Topics");

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
            {data && <TopicsList topics={data} />}
          </div>
          <div>
            {CreateNewTopicModal && (
              <CreateTopicModal
                onCreate={refetch}
                closeModal={setCreateNewTopicModal}
              />
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
