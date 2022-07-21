import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { CreateTopicModal, AddVideoModal, NewFolderModal } from "../../modals/";
import { TopicsList } from "../../listings";
import OptionIconsTooltip from "../../tooltips/OptionIconsTooltip";

import CSS from "./Controls.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFolderPlus,
  faHouse,
  faRectangleXmark,
  faTrashCan,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";

function Controls() {
  const [CreateNewTopicModal, setCreateNewTopicModal] = useState(false);
  const [AddNewVideoModal, setAddNewVideoModal] = useState(false);
  const [createNewFolderModal, setCreateNewFolderModal] = useState(false);

  const [hoverHomeIcon, setHoverHomeIcon] = useState(false);
  const [hoverFolderIcon, setHoverFolderIcon] = useState(false);
  const [hoverVideoIcon, setHoverVideoIcon] = useState(false);
  const [hoverRemoveIcon, setHoverRemoveIcon] = useState(false);
  const [hoverTrashIcon, setHoverTrashIcon] = useState(false);

  const { data, refetch } = useFetch("/Topics");

  const navigate = useNavigate();

  return (
    <div className={CSS.Container}>
      <div className={CSS.Title}>
        <h2>Topics</h2>
      </div>
      <div className={CSS.ContentContainer}>
        <div className={CSS.OptionContainer}>
          <div className={CSS.Options}>
            <FontAwesomeIcon
              icon={faHouse}
              size={"lg"}
              className={CSS.Icon}
              onClick={() => navigate("/")}
              onMouseOver={() => setHoverHomeIcon(true)}
              onMouseOut={() => setHoverHomeIcon(false)}
            />
            {hoverHomeIcon && <OptionIconsTooltip text="Home" />}
            <FontAwesomeIcon
              icon={faFolderPlus}
              size={"lg"}
              className={CSS.Icon}
              onClick={() => setCreateNewFolderModal(true)}
              onMouseOver={() => setHoverFolderIcon(true)}
              onMouseOut={() => setHoverFolderIcon(false)}
            />
            {hoverFolderIcon && <OptionIconsTooltip text="New Folder" />}
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
            {hoverVideoIcon && <OptionIconsTooltip text="Add video" />}
            <FontAwesomeIcon
              icon={faRectangleXmark}
              size={"lg"}
              className={CSS.Icon}
              onMouseOver={() => setHoverRemoveIcon(true)}
              onMouseOut={() => setHoverRemoveIcon(false)}
            />
            {hoverRemoveIcon && <OptionIconsTooltip text="Remove Topic" />}
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
          {hoverTrashIcon && <OptionIconsTooltip text="Trash" />}
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
