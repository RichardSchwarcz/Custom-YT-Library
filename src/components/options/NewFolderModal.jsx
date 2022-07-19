import { useState } from "react";
import useCurrentFolder from "../../hooks/useCurrentFolder";
import postToDB from "../../helpers/postToDB";
import ReactDom from "react-dom";
import CSS from "./NewFolderModal.module.css";

function AddFolderModal(props) {
  const [name, setName] = useState("");

  const closeModal = props.closeModal;
  const topic = useCurrentFolder();
  const folder = { name, topic };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const onCreate = props.onCreate;

    await postToDB(folder, "http://localhost:8000/Folders");
    await onCreate();
  };

  return ReactDom.createPortal(
    <div className={CSS.ModalContainer}>
      <div className={CSS.Title}>
        <h3>Create New Folder</h3>
      </div>
      <div className={CSS.Body}>
        <form>
          <input
            className={CSS.input}
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </form>
      </div>
      <div className={CSS.Buttons}>
        <button className={CSS.CancelButton} onClick={() => closeModal(false)}>
          Cancel
        </button>
        <button className={CSS.SubmitButton} onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>,
    document.getElementById("portal")
  );
}

export default AddFolderModal;
