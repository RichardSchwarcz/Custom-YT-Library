import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFolderPlus,
  faRectangleXmark,
  faTrashCan,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import CreateTopicModal from "../../topics/CreateTopicModal/CreateTopicModal";
import AddVideoModal from "../../options/AddVideoModal";
import NewFolderModal from "../../options/NewFolderModal";
import TopicsList from "../../topics/TopicsList/TopicsList";
import useFetch from "../../../hooks/useFetch";
import CSS from "./Controls.module.css";

function Controls() {
  const [CreateNewTopicModal, setCreateNewTopicModal] = useState(false);
  const [AddNewVideoModal, setAddNewVideoModal] = useState(false);
  const [createNewFolderModal, setCreateNewFolderModal] = useState(false);

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
              onClick={() => setCreateNewFolderModal(true)}
            />
            <div className={CSS.OptionText}>New Folder</div>
            <FontAwesomeIcon
              icon={faVideo}
              size={"lg"}
              className={CSS.ModifiedVideoIcon}
              onClick={() => setAddNewVideoModal(true)}
            />
            <div
              className={CSS.VideoIconModification}
              onClick={() => setAddNewVideoModal(true)}
            >
              +
            </div>
            <div className={CSS.OptionText}>Add Video</div>
            <FontAwesomeIcon
              icon={faRectangleXmark}
              size={"lg"}
              className={CSS.Icon}
            />
            <div className={CSS.OptionText}>Remove Topic</div>
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
          <div>
            {createNewFolderModal && (
              <NewFolderModal
                onCreate={refetch}
                closeModal={setCreateNewFolderModal}
              />
            )}
          </div>
        </div>
        <div className={CSS.TagButton}>
          <FontAwesomeIcon
            icon={faTrashCan}
            size={"lg"}
            className={CSS.TrashIcon}
          />
        </div>
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
