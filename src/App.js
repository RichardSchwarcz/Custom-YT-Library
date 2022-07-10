import { BrowserRouter, Routes, Route } from "react-router-dom";
// compoennts
import Home from "./components/pages/Home/Home";

import "./styles/index.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:topicName" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
