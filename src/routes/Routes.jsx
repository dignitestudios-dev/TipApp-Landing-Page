import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Layout from "../global/Layout";
import About from "../pages/About/About";
import PerksHub from "../pages/PerksHub/PerksHub";
import LeaderBoard from "../pages/Leaderboard/LeaderBoard";
import TipTalk from "../pages/Tiptalk/TipTalk";
import Generosity from "../pages/Generosity/Generosity";
import Wallet from "../pages/Wallet/Wallet";
import Contact from "../pages/Contact/Contact";
import Terms from "../pages/Terms/Terms";
import Privacy from "../pages/Terms/Privacy";
import Donation from "../pages/Donation/Donation";

export default function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout pages={<Home />} />} />
        <Route path="/about" element={<Layout pages={<About />} />} />
        <Route path="/future/perkshub" element={<Layout pages={<PerksHub />} />} />
        <Route path="/future/leaderboard" element={<Layout pages={<LeaderBoard />} />} />
        <Route path="/future/tiptalk" element={<Layout pages={<TipTalk />} />} />
        <Route path="/future/generosity" element={<Layout pages={<Generosity />} />} />
        <Route path="/future/wallet" element={<Layout pages={<Wallet />} />} />
        <Route path="/contact" element={<Layout pages={<Contact />} />} />
        <Route path="/terms" element={<Layout pages={<Terms />} />} />
        <Route path="/privacy" element={<Layout pages={<Privacy />} />} />
        <Route path="/donation" element={<Layout pages={<Donation />} />} />
      </Routes>
    </BrowserRouter>
  );
}
