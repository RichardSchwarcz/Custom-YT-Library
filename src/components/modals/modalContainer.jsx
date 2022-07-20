import CSS from "./ModalContainer.module.css";

function modalContainer(props) {
  const { header, children, handleSubmit, closeModal } = props;
  return (
    <div className={CSS.ModalContainer}>
      <div className={CSS.Title}>
        <h3>{header}</h3>
      </div>
      <div className={CSS.Body}>{children}</div>
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

export default modalContainer;
