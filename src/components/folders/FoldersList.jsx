import CSS from "./FoldersList.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderClosed } from "@fortawesome/free-solid-svg-icons";

function FoldersList(props) {
  const folders = props.folders;

  return (
    <div className={CSS.FoldersList}>
      {folders.map((folders) => {
        return (
          <div className={CSS.Folder}>
            <FontAwesomeIcon
              icon={faFolderClosed}
              size={"2xl"}
              className={CSS.Icon}
            />
            <div key={folders.id} className={CSS.FolderName}>
              {folders.name}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default FoldersList;
