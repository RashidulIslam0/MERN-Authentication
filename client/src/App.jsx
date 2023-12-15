import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Singin from "./component/Singin";
import Signup from "./component/Signup";
import Home from "./component/Home";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/login" element={<Singin />} />
          <Route path="/register" element={<Signup />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
