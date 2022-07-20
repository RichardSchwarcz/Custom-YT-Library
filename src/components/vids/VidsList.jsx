// import CSS from "./FoldersList.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderClosed } from "@fortawesome/free-solid-svg-icons";

function VidsList(props) {
  const vids = props.vids;

  return (
    <div className={CSS.VidsList}>
      {vids.map((folders) => {
        return (
          <div key={vids.id} className={CSS.Vids}>
            <FontAwesomeIcon
              icon={faFolderClosed}
              size={"2xl"}
              className={CSS.Icon}
            />
            <div className={CSS.FolderName}>{folders.name}</div>
          </div>
        );
      })}
    </div>
  );
}

export default VidsList;
