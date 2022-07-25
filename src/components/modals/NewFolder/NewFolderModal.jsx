import { useState, useContext } from "react";
import ControlsContext from "../../../context/ControlsContext";
import { TYPES } from "../../../helpers/postToDB";
import useCurrentFolder from "../../../hooks/useCurrentFolder";
import ReactDom from "react-dom";
import CSS from "../ModalContainer.module.css";
import ModalContainer from "../ModalContainer";

function AddFolderModal(props) {
  const [name, setName] = useState("");

  const { model } = useContext(ControlsContext);

  const closeModal = props.closeModal;
  const topic = useCurrentFolder();
  const folder = { name, topic };

  async function handleSubmit(e) {
    e.preventDefault();
    model.create(folder, TYPES.FOLDERS);
  }
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
