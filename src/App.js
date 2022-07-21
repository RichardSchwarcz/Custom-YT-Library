import { Routes, Route } from "react-router-dom";
// components
import { Home, NotFound } from "./components/pages";

import "./styles/index.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:topicName" element={<Home />}>
        <Route path="/:topicName/:folderName0" element={<Home />}>
          <Route
            path="/:topicName/:folderName0/:folderName1"
            element={<Home />}
          />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
      {/* TODO */}
    </Routes>
  );
}

export default App;
