import React from 'react'
import { useMyTeamContext } from '../hooks/useMyTeamContext'
import PlayerCaracter from './PlayerCaracter'

const PlayersOnPitch = () => {
  const { team } = useMyTeamContext()

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

          <div className='h-2/5  border-t-red-500'>
            <BlockPlayerList DefensePlayers={MidfieldPlayers} />
          </div>

          <div className='h-2/5  border-t-red-500'>
            <BlockPlayerList DefensePlayers={DefensePlayers} />
          </div>
        </div>
      </div>
    </div>
  )
}

function BlockPlayerList({ DefensePlayers }) {
  return (
    <div className=''>
      <div className=' h-1/2 flex'>
        {DefensePlayers.length === 4
          ? DefensePlayers.slice(2, 5).map((p, index) => {
              // console.log('3' + p.name)
              return (
                <div className={`w-1/2`}>
                  <PlayerCaracter
                    player={p}
                    location={index === 1 ? `end` : `start`}
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
                    location={index === 1 ? `end` : `start`}
                  />
                </div>
              )
            })}
      </div>

      {/* div */}

      <div className=' h-1/2 flex'>
        {DefensePlayers.length <= 3 || DefensePlayers.length === 5
          ? DefensePlayers.slice(0, 3).map((p, index) => {
              // console.log('1' + p.name)
              return (
                <div className=' w-1/2  '>
                  <PlayerCaracter
                    player={p}
                    location={
                      DefensePlayers.length === 3
                        ? index === 0
                          ? `end`
                          : index === 1
                          ? `center`
                          : `start`
                        : DefensePlayers.length === 2
                        ? index === 0
                          ? `end`
                          : `start`
                        : index === 0
                        ? `end`
                        : index === 1
                        ? `center`
                        : `start`
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
                    location={index === 0 ? `end` : `start`}
                  />
                </div>
              )
            })}
      </div>
    </div>
  )
}

export default PlayersOnPitch
