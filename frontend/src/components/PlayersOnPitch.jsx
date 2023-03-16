import React from 'react'
import { useMyTeamContext } from '../hooks/useMyTeamContext'
import PlayerCaracter from './PlayerCaracter'

const PlayersOnPitch = () => {
  const { team } = useMyTeamContext()

  let rowThreeHeight = 'h-[156px]'
  let rowTwoHeight = 'h-[156px]'
  let rowOneHeight = 'h-[206px]'

  const items = team.map((item) => item.name)
  const attackPlayers = team.filter((player) => player.position === 'התקפה')
  const MidfieldPlayers = team.filter((player) => player.position === 'קישור')
  const DefensePlayers = team.filter((player) => player.position === 'הגנה')
  const goalKepper = team.filter((player) => player.position === 'שוער')

  return (
    <div className='relative w-[400px] h-[600px]  '>
      {goalKepper.map((p) => console.log(p.name))}
      <div>
        <div className='absolute bottom-2 left-[75px]  h-[80px] w-[200px] '>
          {goalKepper.map((p) => {
            return <PlayerCaracter player={p} location={'center'} />
          })}
        </div>

        <div className='absolute left-0 h-[500px] w-[350px]'>
          <div className=' bg-amber-500 h-1/5 '></div>
          <div className=' bg-gray-500 h-1/5'></div>
          <div className=' bg-yellow-500 h-1/5'></div>

          <div className='h-1/5 flex'>
            {DefensePlayers.length === 4
              ? DefensePlayers.slice(2, 5).map((p, index) => {
                  // console.log('3' + p.name)
                  return (
                    <div className={` w-1/2   `}>
                      <PlayerCaracter
                        player={p}
                        location={index == 1 ? `end` : `start`}
                      />
                      {console.log(index)}
                    </div>
                  )
                })
              : DefensePlayers.length === 5 &&
                DefensePlayers.slice(3, 5).map((p, index) => {
                  // console.log('==4' + p.name)
                  return (
                    <div className=' w-1/2 '>
                      <PlayerCaracter
                        player={p}
                        location={index == 1 ? `end` : `start`}
                      />
                    </div>
                  )
                })}
          </div>
          <div className='  h-1/5 flex'>
            {DefensePlayers.length <= 3 || DefensePlayers.length === 5
              ? DefensePlayers.slice(0, 3).map((p, index) => {
                  // console.log('1' + p.name)
                  return (
                    <div className=' w-1/2  '>
                      <PlayerCaracter
                        player={p}
                        location={
                          index == 0 ? `start` : index == 1 ? `center` : `end`
                        }
                      />
                    </div>
                  )
                })
              : DefensePlayers.slice(0, 2).map((p, index) => {
                  // console.log('2' + p.name)
                  return (
                    <div className=' w-1/2  '>
                      <PlayerCaracter
                        player={p}
                        location={index == 0 ? `end` : `start`}
                      />
                    </div>
                  )
                })}
          </div>
        </div>

        {/* <div
          className={
            'absolute bottom-[80px] left-0 border-b-2 border-t-2 border-blue-700 h-[100px] w-[350px] flex gap-3 '
          }
        >
          {DefensePlayers.slice(0, 3).map((p) => {
            return (
              <div className={DefensePlayers.length === 3 ? 'w-1/3' : 'w-1/2'}>
                <div className='h-[50px]'>
                  <img className=' w-[60px] m-auto' src={Shirt} alt='My SVG' />
                </div>

                <div className='  flex items-center'>
                  <h1 className=' m-auto'>{p.name}</h1>
                </div>
              </div>
            )
          })}
        </div>
        <div
          className={
            'absolute bottom-[180px] left-0 border-b-2 border-t-2 border-blue-700 h-[100px] w-[350px] flex gap-3 '
          }
        >
          {DefensePlayers.slice(3, 5).map((p) => {
            return (
              <div className={DefensePlayers.length === 3 ? 'w-1/3' : 'w-1/2'}>
                <div className='h-[50px]'>
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
        </div> */}
      </div>
    </div>
  )
}

export default PlayersOnPitch
