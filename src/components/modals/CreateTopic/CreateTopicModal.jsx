import { useState } from "react";
import postToDB from "../../../helpers/postToDB";
import ReactDom from "react-dom";
import CSS from "../ModalContainer.module.css";
import ModalContainer from "../ModalContainer";

function CreateTopicModal(props) {
  const [name, setName] = useState("");
  const [tag, setTag] = useState("");
  const closeModal = props.closeModal;

  const topic = () => {
    const deleted = "notDeleted";
    let topicObj = { name, tag, deleted };
    if (topicObj.tag === "") {
      topicObj.tag = "Others";
    }
    return topicObj;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const onCreate = props.onCreate;

    await postToDB(topic(), "http://localhost:8000/Topics");
    await onCreate();
  };

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
