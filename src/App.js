import HomeComp from "./components/HomeComp";
import NavbarComp from "./components/NavbarComp";
import { Routes, Route } from "react-router-dom";
import AgentsComp from "./components/AgentsComp";

function App() {
  return (
    <>
      <NavbarComp />
      <Routes>
        <Route path="/" element={<HomeComp />} exact />
        <Route path="/agents/:agentName" element={<AgentsComp />} exact />
      </Routes>
    </>
  );
}

export default App;
