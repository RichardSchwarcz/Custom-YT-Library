import React from "react";
import Split from "react-split";
import Folders from "../panels/Folders/Folders";
import VidsPanel from "../panels/Vids/VidsPanel";
import Topics from "../panels/Controls/Controls";
import "../../styles/index.css";

function Home() {
  return (
    <div className="flexContainer">
      <Topics />
      <Split
        className="VerticalSplitter"
        direction="vertical"
        sizes={[50, 50]}
        minSize={100}
        gutterSize={5}
      >
        <Folders />
        <VidsPanel />
      </Split>
    </div>
  );
}

export default Home;
