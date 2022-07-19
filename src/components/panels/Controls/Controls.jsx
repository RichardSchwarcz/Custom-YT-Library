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
import IconTextModal from "../../options/IconTextModal";
import TopicsList from "../../topics/TopicsList/TopicsList";
import useFetch from "../../../hooks/useFetch";
import CSS from "./Controls.module.css";

function Controls() {
  const [CreateNewTopicModal, setCreateNewTopicModal] = useState(false);
  const [AddNewVideoModal, setAddNewVideoModal] = useState(false);
  const [createNewFolderModal, setCreateNewFolderModal] = useState(false);

  const [hoverFolderIcon, setHoverFolderIcon] = useState(false);
  const [hoverVideoIcon, setHoverVideoIcon] = useState(false);
  const [hoverRemoveIcon, setHoverRemoveIcon] = useState(false);
  const [hoverTrashIcon, setHoverTrashIcon] = useState(false);

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
              onMouseOver={() => setHoverFolderIcon(true)}
              onMouseOut={() => setHoverFolderIcon(false)}
            />
            {hoverFolderIcon && <IconTextModal text={"New Folder"} />}
            <FontAwesomeIcon
              icon={faVideo}
              size={"lg"}
              className={CSS.ModifiedVideoIcon}
              onClick={() => setAddNewVideoModal(true)}
              onMouseOver={() => setHoverVideoIcon(true)}
              onMouseOut={() => setHoverVideoIcon(false)}
            />
            <div
              className={CSS.VideoIconModification}
              onClick={() => setAddNewVideoModal(true)}
              onMouseOver={() => setHoverVideoIcon(true)}
              onMouseOut={() => setHoverVideoIcon(false)}
            >
              +
            </div>
            {hoverVideoIcon && <IconTextModal text={"Add video"} />}
            <FontAwesomeIcon
              icon={faRectangleXmark}
              size={"lg"}
              className={CSS.Icon}
              onMouseOver={() => setHoverRemoveIcon(true)}
              onMouseOut={() => setHoverRemoveIcon(false)}
            />
            {hoverRemoveIcon && <IconTextModal text={"Remove Topic"} />}
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
            onMouseOver={() => setHoverTrashIcon(true)}
            onMouseOut={() => setHoverTrashIcon(false)}
          />
          {hoverTrashIcon && <IconTextModal text={"Trash"} />}
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
