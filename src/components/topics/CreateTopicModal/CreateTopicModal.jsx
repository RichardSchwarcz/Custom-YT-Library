import { useState } from "react";
import fetchToDB from "../../../helpers/fetchToDB";

import CSS from "./CreateTopicModal.module.css";

function CreateTopicModal(props) {
  const [name, setName] = useState("");
  const [tag, setTag] = useState("");
  const closeModal = props.closeModal;

  const topic = () => {
    let topicObj = { name, tag };
    if (topicObj.tag === "") {
      topicObj.tag = "others";
    }
    return topicObj;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const onCreate = props.onCreate;

    await fetchToDB(topic(), "http://localhost:8000/Topics");
    await onCreate();
  };

  return (
    <div className={CSS.ModalContainer}>
      <div className={CSS.Title}>
        <h3>Create New Topic</h3>
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
          <input
            className={CSS.input}
            type="text"
            placeholder="Tag"
            value={tag}
            onChange={(e) => setTag(e.target.value)}
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
    </div>
  );
}

export default CreateTopicModal;
