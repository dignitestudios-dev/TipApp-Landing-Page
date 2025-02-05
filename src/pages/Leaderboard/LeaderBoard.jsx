import React from 'react'
import WhyLeaderBoard from '../../components/Leaderboard/whyLeaderBoard'
import WhatsLeader from '../../components/Leaderboard/WhatsLeaderboard'
import PartLeaderboard from '../../components/Leaderboard/PartLeaderboard'
import Benefits from '../../components/Leaderboard/Benefits'
import Shine from '../../components/Leaderboard/Shine'

export default function LeaderBoard() {
  return (
    <div className="w-full relative ">
        <WhyLeaderBoard/>
        <WhatsLeader/>
        <PartLeaderboard/>
        <Shine/>
    </div>
  )
}
