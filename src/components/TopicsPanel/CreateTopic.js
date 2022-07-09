import CSS from "./CreateTopic.module.css";

function CreateTopic(props) {
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
            id="TopicName"
            placeholder="Name"
          />
          <input
            className={CSS.input}
            type="text"
            id="TopicTag"
            placeholder="Tag"
          />
        </form>
      </div>
      <div className={CSS.Buttons}>
        <div className={CSS.CancelButton} onClick={() => closeModal(false)}>
          Cancel
        </div>
        <div className={CSS.SubmitButton}>Submit</div>
      </div>
    </div>
  );
}

export default CreateTopic;
