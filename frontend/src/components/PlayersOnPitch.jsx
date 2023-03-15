import React from 'react'
import { useMyTeamContext } from '../hooks/useMyTeamContext'
import Shirt from './shirt.svg'
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
        <div className='absolute bottom-2 left-[75px]  h-[80px] w-[200px] '>
          {goalKepper.map((p) => {
            return (
              <>
                <div className=' h-3/5  '>
                  <img className=' w-[60px] m-auto' src={Shirt} alt='My SVG' />
                </div>

                <div className='h-2/5   flex items-center'>
                  <h1 className=' m-auto'>{p.name}</h1>
                </div>
              </>
            )
          })}
        </div>
        <div className='absolute bottom-[80px] left-0 border-b-2 border-t-2 border-blue-700 h-[100px] w-[350px] flex gap-3 '>
          {DefensePlayers.map((p) => {
            return (
              <div className={DefensePlayers.length === 3 ? 'w-1/3' : 'w-1/2'}>
                <div className='  '>
                  <img className=' w-[60px] m-auto' src={Shirt} alt='My SVG' />
                </div>

                <div className='  flex items-center'>
                  <h1 className=' m-auto'>{p.name}</h1>
                </div>
              </div>
            )
          })}
        </div>
        <div className='absolute bottom-[240px] left-0 border-t-2 border-red-600 h-[160px] w-[350px] flex gap-3 '>
          {MidfieldPlayers.map((p) => {
            return <div className=' '> {p.name}</div>
          })}
        </div>
        <div className='absolute bottom-[400px] left-0  h-[160px] w-[350px] flex gap-3 '>
          {attackPlayers.map((p) => {
            return <div className=' '> {p.name}</div>
          })}
        </div>
      </div>
    </div>
  )
}

export default PlayersOnPitch
