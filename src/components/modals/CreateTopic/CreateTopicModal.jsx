import { useState, useContext } from "react";
import ControlsContext from "../../../context/ControlsContext";

import { TYPES } from "../../../helpers/postToDB";

import ReactDom from "react-dom";
import CSS from "../ModalContainer.module.css";
import ModalContainer from "../ModalContainer";

function CreateTopicModal(props) {
  const [name, setName] = useState("");
  const [tag, setTag] = useState("");

  const { model } = useContext(ControlsContext);

  const closeModal = props.closeModal;

  const topic = () => {
    let topicObj = { name, tag };
    if (topicObj.tag === "") {
      topicObj.tag = "Others";
    }
    return topicObj;
  };

  async function handleSubmit(e) {
    e.preventDefault();
    model.create(topic(), TYPES.TOPICS);
  }

  return ReactDom.createPortal(
    <ModalContainer
      header="Create New Topic"
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
        <input
          className={CSS.input}
          type="text"
          placeholder="Tag"
          value={tag}
          onChange={(e) => setTag(e.target.value)}
        />
      </form>
    </ModalContainer>,
    document.getElementById("portal")
  );
}

export default CreateTopicModal;
