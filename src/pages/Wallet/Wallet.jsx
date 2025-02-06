import React from 'react'
import WhyWallet from '../../components/Wallet/whyWallet'
import UseWallet from '../../components/Wallet/UseWallet'
import BenefitsWallet from '../../components/Wallet/BenefitsWallet'

export default function Wallet() {
  return (
    <div className="w-full relative ">
        <WhyWallet/>
        <UseWallet/>
        <BenefitsWallet/>   
    </div>
  )
}
