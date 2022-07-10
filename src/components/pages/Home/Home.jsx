import React from "react";
import Split from "react-split";
import TopicsPanel from "../../panels/Topics";
import Folders from "../../panels/Folders/Folders";
import VidsPanel from "../../panels/Vids/VidsPanel";

function Home() {
  return (
    <div>
      <Split
        className="HorizontalSplitter"
        direction="horizontal"
        sizes={[20, 80]}
        minSize={250}
        gutterSize={5}
      >
        <TopicsPanel />
        <div className="HomeContainer">
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
      </Split>
    </div>
  );
}

export default Home;
