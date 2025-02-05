import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Layout from "../global/Layout";
import About from "../pages/About/About";
import PerksHub from "../pages/PerksHub/PerksHub";
import LeaderBoard from "../pages/Leaderboard/LeaderBoard";
import TipTalk from "../pages/Tiptalk/TipTalk";

export default function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout pages={<Home />} />} />
        <Route path="/about" element={<Layout pages={<About />} />} />
        <Route path="/perkshub" element={<Layout pages={<PerksHub />} />} />
        <Route path="/leaderboard" element={<Layout pages={<LeaderBoard />} />} />
        <Route path="/tiptalk" element={<Layout pages={<TipTalk />} />} />
      </Routes>
    </BrowserRouter>
  );
}
