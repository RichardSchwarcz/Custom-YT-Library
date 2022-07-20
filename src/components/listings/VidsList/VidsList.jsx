// import CSS from "./FoldersList.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderClosed } from "@fortawesome/free-solid-svg-icons";

function VidsList(props) {
  const vids = props.vids;

  return (
    <div className={CSS.VidsList}>
      {vids.map((vids) => {
        return (
          <div key={vids} className={CSS.Vids}>
            <FontAwesomeIcon
              icon={faFolderClosed}
              size={"2xl"}
              className={CSS.Icon}
            />
            <div className={CSS.FolderName}>{vids.name}</div>
          </div>
        );
      })}
    </div>
  );
}

export default VidsList;
