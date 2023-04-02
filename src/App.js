import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Experience from "./pages/Experience";
import Home from "./pages/Home";
import Projecs from "./pages/Projects";
import Snippets from "./pages/Snippets";

function App() {
  return (
<div>
  <Router>
    <Navbar />
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/experience" element={<Experience />} />
  <Route path="/projects" element={<Projecs/>} />
  <Route path="/snippets" element={<Snippets />} />
  <Route path="*" element={<h1> 404 </h1>} />

</Routes>
  </Router>
</div> );
}

export default App;
