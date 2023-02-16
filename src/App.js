import {
  Navbar,
  Home,
  Services,
  Projects,
  AboutMe,
  Contact,
  PageComplete,
  Error,
} from "./components";

import "./App.css";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<PageComplete />} />
        <Route path="/home" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
};

export default App;
