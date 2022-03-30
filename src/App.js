import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import TheStory from "./components/TheStory/theStory";
import NameHeightForm from "./components/NameHeightForm/NameHeightForm";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="nameHeightForm" element={<NameHeightForm />} />
        <Route path="theStory" element={<TheStory />} />
      </Routes>
    </Router>
  );
}

export default App;
