import { useState } from "react";
import { Folders, Vids, Controls } from "../../panels";
import Split from "react-split";
import "../../../styles/index.css";

function Home() {
  const [collapsedIndex, setCollapsedIndex] = useState(null);

  return (
    <div className="flexContainer">
      <Controls />
      <Split
        collapsed={collapsedIndex}
        className="VerticalSplitter"
        direction="vertical"
        sizes={[50, 50]}
        minSize={50}
        gutterSize={5}
      >
        <Folders />
        <Vids />
      </Split>
    </div>
  );
}

export default Home;