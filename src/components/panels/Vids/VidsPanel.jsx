import CSS from "./VidsPanel.module.css";
import useCurrentFolder from "../../../hooks/useCurrentFolder";

function VidsPanel() {
  return (
    <div className={CSS.Container}>
      <h2 className={CSS.Title}>{useCurrentFolder()} Vids</h2>
    </div>
  );
}

export default VidsPanel;
