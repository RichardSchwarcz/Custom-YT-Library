import { useState } from "react";
import useCurrentFolder from "../../../hooks/useCurrentFolder";
import useFetch from "../../../hooks/useFetch";
import postToDB from "../../../helpers/postToDB";
import ReactDom from "react-dom";
import CSS from "../ModalContainer.module.css";
import ModalContainer from "../ModalContainer";

function AddVideoModal(props) {
  const [link, setLink] = useState("");
  const [folder, setFolder] = useState("");
  const { data } = useFetch("/Folders");
  const topic = useCurrentFolder();
  const name = "";

  const closeModal = props.closeModal;
  const video = { name, link, topic, folder };

  function currentFolders(data) {
    const filtered = data.filter((folder) => folder.topic === topic);
    const folderArray = filtered.map((folders) => {
      return folders.name;
    });
    return folderArray;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const onCreate = props.onCreate;

    await postToDB(video, "http://localhost:8000/Videos");
    await onCreate();
  };

  return ReactDom.createPortal(
    <ModalContainer
      header="Add New Video"
      handleSubmit={handleSubmit}
      closeModal={closeModal}
    >
      <form>
        <input
          className={CSS.input}
          type="text"
          placeholder="Link"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
        <select
          className={CSS.input}
          onChange={(e) => setFolder(e.target.value)}
        >
          {currentFolders(data).map((folder) => {
            return (
              <option value={folder} key={folder}>
                {folder}
              </option>
            );
          })}
        </select>
      </form>
    </ModalContainer>,
    document.getElementById("portal")
  );
}

export default AddVideoModal;
