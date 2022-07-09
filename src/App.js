import Split from "react-split";
import TopicsPanel from "./Interface/TopicsPanel/TopicsPanel";
import FoldersPanel from "./Interface/FoldersPanel/FoldersPanel";
import VidsPanel from "./Interface/VidsPanel/VidsPanel";
import "./styles/index.css";

function App() {
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
            <FoldersPanel />
            <VidsPanel />
          </Split>
        </div>
      </Split>
    </div>
  );
}

export default App;
