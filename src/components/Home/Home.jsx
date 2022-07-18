import React, { useState } from "react";
import Split from "react-split";
import Folders from "../panels/Folders/Folders";
import VidsPanel from "../panels/Vids/VidsPanel";
import Topics from "../panels/Controls/Controls";
import "../../styles/index.css";

function Home() {
  const [collapsedIndex, setCollapsedIndex] = useState(null);

  return (
    <div className="flexContainer">
      <Topics />
      <Split
        collapsed={collapsedIndex}
        className="VerticalSplitter"
        direction="vertical"
        sizes={[50, 50]}
        minSize={50}
        gutterSize={5}
      >
        <Folders />
        <VidsPanel />
      </Split>
    </div>
  );
}

export default Home;
