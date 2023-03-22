import React from 'react'
import { useMyTeamContext } from '../hooks/useMyTeamContext'
import PlayerCaracter from './PlayerCaracter'

const PlayersOnPitch = () => {
  const { team } = useMyTeamContext()

  if (!team) return

  const attackPlayers = team.filter((player) => player.position === 'התקפה')
  const MidfieldPlayers = team.filter((player) => player.position === 'קישור')
  const DefensePlayers = team.filter((player) => player.position === 'הגנה')
  const goalKepper = team.filter((player) => player.position === 'שוער')

  return (
    <div className='relative w-[400px] h-[600px]  '>
      <div>
        <div className='absolute bottom-2 left-[75px]  h-[80px] w-[200px] '>
          {goalKepper.map((p) => {
            return <PlayerCaracter key={p._id} player={p} location={'center'} />
          })}
        </div>

        <div className='absolute left-0 h-[500px] w-[350px]'>
          <div className='h-1/5  border-t-red-500 mt-5'>
            <BlockPlayerList Players={attackPlayers} />
          </div>

          <div className='h-2/5  border-t-red-500 mt-5'>
            <BlockPlayerList Players={MidfieldPlayers} />
          </div>

          <div className='h-2/5  border-t-red-500'>
            <BlockPlayerList Players={DefensePlayers} />
          </div>
        </div>
      </div>
    </div>
  )
}

function BlockPlayerList({ Players }) {
  return (
    <div className=''>
      <div className=' h-1/2 flex'>
        {Players.length === 4
          ? Players.slice(2, 5).map((p, index) => {
              // console.log('3' + p.name)
              return (
                <div key={p._id} className={`w-1/2`}>
                  <PlayerCaracter
                    player={p}
                    location={index === 1 ? `end` : `start`}
                  />
                </div>
              )
            })
          : Players.length <= 5 &&
            Players.slice(3, 5).map((p, index) => {
              console.log(index + p.name)
              return (
                <div key={p._id} className=' w-1/2 '>
                  <PlayerCaracter
                    key={p._id}
                    player={p}
                    location={index === 1 ? `end` : `start`}
                  />
                </div>
              )
            })}
      </div>

      {/* div */}

      <div className=' h-1/2 flex'>
        {Players.length <= 3 || Players.length === 5
          ? Players.slice(0, 3).map((p, index) => {
              // console.log('1' + p.name)
              return (
                <div key={p._id} className=' w-1/2  '>
                  <PlayerCaracter
                    key={p._id}
                    player={p}
                    location={
                      Players.length === 3
                        ? index === 0
                          ? `end`
                          : index === 1
                          ? `center`
                          : `start`
                        : Players.length === 2
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
          : Players.slice(0, 2).map((p, index) => {
              // console.log('2' + p.name)
              return (
                <div key={p._id} className=' w-1/2  '>
                  <PlayerCaracter
                    key={p._id}
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
