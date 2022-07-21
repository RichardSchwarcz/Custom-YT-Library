import { useState } from "react";
import { useNavigate } from "react-router-dom";

import CSS from "../Controls.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFolderPlus,
  faHouse,
  faPenToSquare,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import Tooltip from "@mui/material/Tooltip";

function Options() {
  const [AddNewVideoModal, setAddNewVideoModal] = useState(false);
  const [createNewFolderModal, setCreateNewFolderModal] = useState(false);

  const navigate = useNavigate();
  return (
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
  );
}

export default Options;
