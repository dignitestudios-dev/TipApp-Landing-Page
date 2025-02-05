import React from 'react'
import Hero from '../../global/Hero'
import BuiltPerks from '../../components/Home/BuiltPerks'
import UsPart from '../../components/Home/UsPart'
import Perks from '../../components/Home/Perks'
import HomeSlider from '../../global/Carousel'
import PerAction from '../../components/Home/PerAction'
import GetApp from '../../components/Home/getApp'
import Faq from '../../components/Home/Faq'

export default function Home() {
  return (
    <div className=''>
      <Hero/>
      <BuiltPerks />
      <UsPart/>
      <Perks/>
      <HomeSlider/>
      <PerAction/>
      <GetApp/>
      <Faq/>  
    </div>
  )
}
