import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { CreateTopicModal, AddVideoModal, NewFolderModal } from "../../modals/";
import { TopicsList } from "../../listings";

import CSS from "./Controls.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFolderPlus,
  faHouse,
  faPenToSquare,
  faTrashCan,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import Tooltip from "@mui/material/Tooltip";

function Controls() {
  const [CreateNewTopicModal, setCreateNewTopicModal] = useState(false);
  const [AddNewVideoModal, setAddNewVideoModal] = useState(false);
  const [createNewFolderModal, setCreateNewFolderModal] = useState(false);

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
            <Tooltip title="Home" placement="right" arrow>
              <FontAwesomeIcon
                icon={faHouse}
                size={"lg"}
                className={CSS.Icon}
                onClick={() => navigate("/")}
              />
            </Tooltip>

            <Tooltip title="New Folder" placement="right" arrow>
              <FontAwesomeIcon
                icon={faFolderPlus}
                size={"lg"}
                className={CSS.Icon}
                onClick={() => setCreateNewFolderModal(true)}
              />
            </Tooltip>
            <Tooltip title="Add video" placement="right" arrow>
              <FontAwesomeIcon
                icon={faVideo}
                size={"lg"}
                className={CSS.Icon}
                onClick={() => setAddNewVideoModal(true)}
              />
            </Tooltip>
            <Tooltip title="Edit" placement="right" arrow>
              <FontAwesomeIcon
                icon={faPenToSquare}
                size={"lg"}
                className={CSS.Icon}
              />
            </Tooltip>
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
          <Tooltip title="Trash" arrow>
            <FontAwesomeIcon
              icon={faTrashCan}
              size={"lg"}
              className={CSS.TrashIcon}
            />
          </Tooltip>
        </div>
        <Tooltip title="Create New Topic" arrow>
          <div
            className={CSS.TopicButton}
            onClick={() => setCreateNewTopicModal(true)}
          >
            Create New
          </div>
        </Tooltip>
      </div>
    </div>
  );
}

export default Controls;
