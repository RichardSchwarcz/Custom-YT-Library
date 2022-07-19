import CSS from "./Folders.module.css";
import FoldersList from "../../folders/FoldersList";
import useCurrentFolder from "../../../hooks/useCurrentFolder";
import useFetch from "../../../hooks/useFetch";

function Folders() {
  const { data } = useFetch("/Folders");
  const currentFolderName = useCurrentFolder();

  function showFolders(data) {
    const filtered = data.filter(
      (folder) => folder.topic === currentFolderName
    );
    return data && <FoldersList folders={filtered} />;
  }

  return (
    <div className={CSS.Container}>
      <div className={CSS.Title}>
        <h2>{currentFolderName} Folders</h2>
      </div>
      <div className={CSS.FoldersContainer}>{showFolders(data)}</div>
    </div>
  );
}

export default Folders;
