import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home/Home";
import Modalinfor from "./pages/home/modal/Modalinfor";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />{" "}
        <Route path="/modal" element={<Modalinfor />} />{" "}
      </Routes>{" "}
    </BrowserRouter>
  );
}

export default App;
