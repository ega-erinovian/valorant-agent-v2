import HomeComp from "./components/HomeComp";
import NavbarComp from "./components/NavbarComp";
import { Routes, Route } from "react-router-dom";
import AgentsComp from "./components/AgentsComp";
import FooterComp from "./components/FooterComp";
import AboutComp from "./components/AboutComp";

function App() {
  return (
    <>
      <NavbarComp />
      <Routes>
        <Route path="/" element={<HomeComp />} exact />
        <Route path="agents/:agentName" element={<AgentsComp />} exact />
        <Route path="about" element={<AboutComp />} exact />
      </Routes>
      <FooterComp/>
    </>
  );
}

export default App;