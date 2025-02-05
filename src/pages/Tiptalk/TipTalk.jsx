import React from "react";
import WhyTiptalk from "../../components/Tiptalk/whyTiptalk";
import UseTipTalk from "../../components/Tiptalk/UseTiptalk";
import BenefitsTalk from "../../components/Tiptalk/BenefitsTalk";

export default function TipTalk() {
  return (
    <div className="w-full relative ">
      <WhyTiptalk />
      <UseTipTalk/>
      <BenefitsTalk/>
    </div>
  );
}
