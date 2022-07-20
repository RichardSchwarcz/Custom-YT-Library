// import CSS from "./FoldersList.module.css";
import ElementsList from "../ElementsList";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderClosed } from "@fortawesome/free-solid-svg-icons";

function FoldersList(props) {
  const folders = props.folders;

  return <ElementsList elements={folders} icon={faFolderClosed} size="2xl" />;
}

export default FoldersList;

/* <div className={CSS.FoldersList}>
{folders.map((folders) => {
  return (
    <div key={folders.id} className={CSS.Folder}>
      <FontAwesomeIcon
        icon={faFolderClosed}
        size={"2xl"}
        className={CSS.Icon}
      />
      <div className={CSS.FolderName}>{folders.name}</div>
    </div>
  );
})}
</div> */
