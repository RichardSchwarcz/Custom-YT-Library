import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderPlus, faVideo } from "@fortawesome/free-solid-svg-icons";
import CreateTopicModal from "../../topics/CreateTopicModal/CreateTopicModal";
import AddVideoModal from "../../options/AddVideoModal";
import TopicsList from "../../topics/TopicsList/TopicsList";
import useFetch from "../../../hooks/useFetch";
import CSS from "./Controls.module.css";

function Controls() {
  const [CreateNewTopicModal, setCreateNewTopicModal] = useState(false);
  const [AddNewVideoModal, setAddNewVideoModal] = useState(false);
  const { data, refetch } = useFetch("/Topics");

  return (
    <div className={CSS.Container}>
      <div className={CSS.Title}>
        <h2>Topics</h2>
      </div>
      <div className={CSS.ContentContainer}>
        <div className={CSS.OptionContainer}>
          <div className={CSS.Options}>
            <FontAwesomeIcon
              icon={faFolderPlus}
              size={"lg"}
              className={CSS.Icon}
            />
            <div className={CSS.OptionText}>New Folder</div>
            <FontAwesomeIcon
              icon={faVideo}
              size={"lg"}
              className={CSS.Icon}
              onClick={() => setAddNewVideoModal(true)}
            />
            <div className={CSS.OptionText}>Add Video</div>
          </div>
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
          <div>
            {AddNewVideoModal && (
              <AddVideoModal
                onCreate={refetch}
                closeModal={setAddNewVideoModal}
              />
            )}
          </div>
        </div>
        <div className={CSS.TagButton}>...</div>
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

export default Controls;
