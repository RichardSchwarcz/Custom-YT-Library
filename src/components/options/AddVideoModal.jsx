import { useState } from "react";
import postToDB from "../../helpers/postToDB";
import ReactDom from "react-dom";
import CSS from "./AddVideoModal.module.css";

function AddVideoModal(props) {
  const [link, setLink] = useState("");
  const [topic, setTopic] = useState("");
  const closeModal = props.closeModal;

  const video = { link, topic };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const onCreate = props.onCreate;

    await postToDB(video, "http://localhost:8000/Videos");
    await onCreate();
  };

  return ReactDom.createPortal(
    <div className={CSS.ModalContainer}>
      <div className={CSS.Title}>
        <h3>Add New Video</h3>
      </div>
      <div className={CSS.Body}>
        <form>
          <input
            className={CSS.input}
            type="text"
            placeholder="Link"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
          <input
            className={CSS.input}
            type="text"
            placeholder="Topic"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
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

export default AddVideoModal;
