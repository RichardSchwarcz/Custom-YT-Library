import React from "react";
import Split from "react-split";
import Folders from "../../panels/Folders/Folders";
import VidsPanel from "../../panels/Vids/VidsPanel";
import Topics from "../../panels/Topics/Topics";
import "../../../styles/index.css";

function Home() {
  return (
    <div className="globalContainer">
      <Split
        className="HorizontalSplitter"
        direction="horizontal"
        sizes={[20, 80]}
        minSize={250}
        gutterSize={5}
      >
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
      </Split>
    </div>
  );
}

export default Home;
