import "./App.css";
import About from "./compnents/About/About";
import Contact from "./compnents/Contact/Contact";
import Home from "./compnents/Home/Home";
import OrganizationsJoined from "./compnents/OrgJoined/OrgJoined";
import Report from "./compnents/Report/Report";
import { Routes, Route } from "react-router-dom";
import TrackedOrganizations from "./compnents/TrackedOrg/TrackedOrg";
import ManageOrganizations from "./compnents/ManageOrg/ManageOrg";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/report" element={<Report />}></Route>
        <Route path="joined" element={<OrganizationsJoined />}></Route>
        <Route path="/track" element={<TrackedOrganizations />}></Route>
        <Route path="/manage" element={<ManageOrganizations />}></Route>
      </Routes>
    </>
  );
}

export default App;
