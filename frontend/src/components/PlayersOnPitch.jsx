import React from 'react'
import { useMyTeamContext } from '../hooks/useMyTeamContext'

const PlayersOnPitch = () => {
  const { team } = useMyTeamContext()

  const items = team.map((item) => item.name)
  const attackPlayers = team.filter((player) => player.position === 'התקפה')
  const MidfieldPlayers = team.filter((player) => player.position === 'קישור')
  const DefensePlayers = team.filter((player) => player.position === 'הגנה')
  const goalKepper = team.filter((player) => player.position === 'שוער')
  return (
    <div className='relative w-[400px] h-[600px] z-40  '>
      {goalKepper.map((p) => console.log(p.name))}
      <div>
        <div className='absolute bottom-0 left-1/3 bg-red-300 h-[80px] w-[100px]'>
          {goalKepper.map((p) => {
            return <div className=' '> {p.name}</div>
          })}
        </div>
        <div className='absolute bottom-[80px] left-0  bg-gray-300 h-[160px] w-[350px] flex gap-3 '>
          {DefensePlayers.map((p) => {
            return <div className=' '> {p.name}</div>
          })}
        </div>
        <div className='absolute bottom-[240px] left-0  bg-orange-400 h-[160px] w-[350px] flex gap-3 '>
          {MidfieldPlayers.map((p) => {
            return <div className=' '> {p.name}</div>
          })}
        </div>
        <div className='absolute bottom-[400px] left-0  bg-yellow-500 h-[160px] w-[350px] flex gap-3 '>
          {attackPlayers.map((p) => {
            return <div className=' '> {p.name}</div>
          })}
        </div>
      </div>
    </div>
  )
}

export default PlayersOnPitch
