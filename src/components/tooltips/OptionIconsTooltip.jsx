import ReactDom from "react-dom";
import CSS from "./OptionIconsTooltip.module.css";

function OptionIconsTooltip(props) {
  const text = props.text;
  return ReactDom.createPortal(
    <div className={CSS.Text}>{text}</div>,
    document.getElementById("portal")
  );
}

export default OptionIconsTooltip;
