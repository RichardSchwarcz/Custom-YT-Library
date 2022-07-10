import { useState } from "react";

import CSS from "./CreateTopic.module.css";

function CreateTopic(props) {
  const [name, setName] = useState("");
  const [tag, setTag] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const topic = { name, tag };

    fetch("http://localhost:8000/Topics", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(topic),
    });
  };

  const closeModal = props.closeModal;

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

export default CreateTopic;
