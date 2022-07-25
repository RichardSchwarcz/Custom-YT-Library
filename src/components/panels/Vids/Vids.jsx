import { useContext } from "react";
import ControlsContext from "../../../context/ControlsContext";
import CSS from "./Vids.module.css";
import { VidsList } from "../../listings";
import useCurrentFolder from "../../../hooks/useCurrentFolder";

function Vids() {
  const {
    model: { data },
  } = useContext(ControlsContext);

  const vids = data.Videos;

  const currentFolderName = useCurrentFolder();

  function showVids(vids) {
    const filtered = vids.filter((video) => video.topic === currentFolderName);
    return vids && <VidsList vids={filtered} />;
  }

  return (
    <div className={CSS.Container}>
      <div className={CSS.Title}>
        <h2>{useCurrentFolder()} Vids</h2>
      </div>
      <div className={CSS.VidsContainer}>{showVids(vids)}</div>
    </div>
  );
}

export default Vids;
