import CSS from "./Folders.module.css";
import FoldersList from "../../listings/FoldersList/FoldersList";
import useCurrentFolder from "../../../hooks/useCurrentFolder";
import useFetch from "../../../hooks/useFetch";
import { useParams } from "react-router-dom";

function Folders() {
  const { data } = useFetch("/Folders");
  const path = useParams();
  console.log(path);

  const currentFolderName = useCurrentFolder();
  // TODO
  function showFolders(data) {
    const filtered = data.filter(
      (folder) => folder.topic === currentFolderName
    );
    return filtered && <FoldersList folders={filtered} />;
  }

  return (
    <div className={CSS.Container}>
      <div className={CSS.TitleContainer}>
        <h2 className={CSS.Title}>Folders</h2>
        <h2 className={CSS.TopicName}>{path.topicName}</h2>
      </div>
      <div className={CSS.FoldersContainer}>{showFolders(data)}</div>
    </div>
  );
}

export default Folders;
