import React from 'react'
import WhyGenerosity from '../../components/Generosity/whyGenerosity'
import WhatGenerosity from '../../components/Generosity/whatGenerosity'
import UseGenerosity from '../../components/Generosity/useGenerosity'
import BenefitsGenerosity from '../../components/Generosity/BenefitsGenerosity'

export default function Generosity() {
  return (
    <div className="w-full relative ">
        <WhyGenerosity/>
        <WhatGenerosity/>
        <UseGenerosity/>
        <BenefitsGenerosity/>
    </div>
  )
}
