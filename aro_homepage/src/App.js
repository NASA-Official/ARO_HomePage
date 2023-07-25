import "./App.scss";
import cn from "classnames";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MemberInformationSummaryPage from "./pages/MemberInformationSummaryPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/memberSummary" element={<MemberInformationSummaryPage />} />
    </Routes>
  );
};

export default App;
