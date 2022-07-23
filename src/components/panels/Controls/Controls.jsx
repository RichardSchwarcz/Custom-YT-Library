import { useContext } from "react";
import ControlsContext from "../../../context/ControlsContext";
import Options from "./options/Options";
import Topics from "./topics/Topics";

import CSS from "./Controls.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import Tooltip from "@mui/material/Tooltip";

function Controls() {
  const {
    setCreateNewTopicModal,
    setAddNewVideoModal,
    setCreateNewFolderModal,
  } = useContext(ControlsContext);

  return (
    <div className={CSS.Container}>
      <div className={CSS.Title}>
        <h2>Topics</h2>
      </div>
      <div className={CSS.ContentContainer}>
        <div className={CSS.OptionContainer}>
          <Options
            createFolderModal={setCreateNewFolderModal}
            addVideoModal={setAddNewVideoModal}
          />
        </div>

        <div className={CSS.TopicContainer}>
          <Topics />
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
