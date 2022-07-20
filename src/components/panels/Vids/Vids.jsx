import CSS from "./Vids.module.css";
import VidsList from "../../vids/VidsList";
import useCurrentFolder from "../../../hooks/useCurrentFolder";
import useFetch from "../../../hooks/useFetch";

function VidsPanel() {
  const { data } = useFetch("/Videos");
  const currentFolderName = useCurrentFolder();

  function showVids(data) {
    const filtered = data.filter((vids) => vids.topic === currentFolderName);
    return data && <VidsList vids={filtered} />;
  }

  return (
    <div className={CSS.Container}>
      <div className={CSS.Title}>
        <h2>{useCurrentFolder()} Vids</h2>
      </div>
      <div className={CSS.VidsContainer}>{showVids(data)}</div>
    </div>
  );
}

export default VidsPanel;
