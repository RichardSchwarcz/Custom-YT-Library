import { useState } from "react";
import useCurrentFolder from "../../../hooks/useCurrentFolder";
import postToDB from "../../../helpers/postToDB";
import ReactDom from "react-dom";
import CSS from "../ModalContainer.module.css";
import ModalContainer from "../ModalContainer";

function AddFolderModal(props) {
  const [name, setName] = useState("");

  const closeModal = props.closeModal;
  const topic = useCurrentFolder();
  const deleted = "notDeleted";
  const folder = { name, topic, deleted };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const onCreate = props.onCreate;

    await postToDB(folder, "http://localhost:8000/Folders");
    await onCreate();
  };

  return ReactDom.createPortal(
    <ModalContainer
      header="Create New Folder"
      handleSubmit={handleSubmit}
      closeModal={closeModal}
    >
      <form>
        <input
          className={CSS.input}
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>
    </ModalContainer>,
    document.getElementById("portal")
  );
}

export default AddFolderModal;
