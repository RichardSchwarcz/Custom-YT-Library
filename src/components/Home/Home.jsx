import React, { useState } from "react";
import Split from "react-split";
import Folders from "../panels/Folders/Folders";
import Vids from "../panels/Vids/Vids";
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
        <Vids />
      </Split>
    </div>
  );
}

export default Home;
