import React from 'react'
import { useAuthContext } from '../hooks/useAuthContext'

const BuyldTeam = () => {
  const { user } = useAuthContext()
  if (user) {
    return <div className=' bg-red-500 w-full'>BuyldTeam</div>
  }
  if (!user) {
    return <div className=' bg-red-500 w-full'>must login</div>
  }
}

export default BuyldTeam
