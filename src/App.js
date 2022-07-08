import Split from "react-split";
import Topics from "./components/Topics/Topics";
import Folders from "./components/Folders/Folders";
import Vids from "./components/Vids/Vids";
import "./styles/index.css";

function App() {
  return (
    <div>
      <Split
        className="HorizontalSplitter"
        direction="horizontal"
        sizes={[20, 80]}
        minSize={200}
        gutterSize={5}
      >
        <Topics />
        <div className="HomeContainer">
          <Split
            className="VerticalSplitter"
            direction="vertical"
            sizes={[50, 50]}
            minSize={100}
            gutterSize={5}
          >
            <Folders />
            <Vids />
          </Split>
        </div>
      </Split>
    </div>
  );
}

export default App;
