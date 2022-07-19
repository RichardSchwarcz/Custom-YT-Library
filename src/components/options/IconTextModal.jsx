import ReactDom from "react-dom";
import CSS from "./IconTextModal.module.css";

function IconTextModal(props) {
  const text = props.text;
  return ReactDom.createPortal(
    <div className={CSS.Text}>{text}</div>,
    document.getElementById("portal")
  );
}

export default IconTextModal;
