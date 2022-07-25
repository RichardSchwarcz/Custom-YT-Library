import { useState, useContext } from "react";
import ControlsContext from "../../../context/ControlsContext";
import { TYPES } from "../../../helpers/postToDB";
import useCurrentFolder from "../../../hooks/useCurrentFolder";
import ReactDom from "react-dom";
import CSS from "../ModalContainer.module.css";
import ModalContainer from "../ModalContainer";

function AddVideoModal(props) {
  const [link, setLink] = useState("");
  const [folder, setFolder] = useState("");
  const topic = useCurrentFolder();
  const name = "";

  const { model } = useContext(ControlsContext);

  const closeModal = props.closeModal;
  const video = { name, link, topic, folder };

  function currentFolders(data) {
    const filtered = data.filter((folder) => folder.topic === topic);
    const folderArray = filtered.map((folders) => {
      return folders.name;
    });
    return folderArray;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    model.create(video, TYPES.VIDEOS);
  }

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
          {/* TODO chech if ok after thumbnail APIs are done */}
          {currentFolders(model.data.Folders).map((folder) => {
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
