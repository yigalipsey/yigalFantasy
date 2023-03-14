import React, { useState } from 'react'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import { useDataContext } from '../hooks/useDataContext'

function PriceSlider() {
  const [price, setPrice] = useState(1)

  const { dispatch } = useDataContext()

  function handlePriceChange(value) {
    setPrice(value)
    if (value !== 1) {
      dispatch({ type: 'SET_PRICE_TO_FILTER', payload: value })
    }
  }

  return (
    <div className='flex items-center rounded-lg bg-gray-200 pl-10'>
      <div className='w-full mr-4 text-green-700 '>{price}</div>
      <Slider
        min={1}
        max={20}
        value={price}
        onChange={handlePriceChange}
        trackStyle={{ backgroundColor: '#10B981', height: 4 }}
        handleStyle={{
          borderColor: '#10B981',
          height: 20,
          width: 20,
          marginLeft: -10,
          marginTop: -8,
          backgroundColor: '#fff',
        }}
      />
    </div>
  )
}

export default PriceSlider
