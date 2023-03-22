import React, { useState } from 'react'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import { useDataContext } from '../hooks/useDataContext'

function PriceSlider() {
  const [price, setPrice] = useState(0)
  const [min, setMin] = useState(0)

  const { dispatch } = useDataContext()

  function handlePriceChange(value) {
    setPrice(value)
    if (value !== 0) {
      dispatch({ type: 'SET_PRICE_TO_FILTER', payload: value })
    }
  }

  function resetPrices() {
    dispatch({ type: 'SET_PRICE_TO_FILTER', payload: null })
    setPrice(0)
  }

  return (
    <div className='flex items-center rounded-lg bg-gray-200 pl-10'>
      <div className=' w-2/6 border-l-4 border-l-red text-rose-700 flex justify-center'>
        <button onClick={resetPrices}>אפס מחירים</button>
      </div>
      <div className=' mr-4 text-green-700 w-2/6 '>{price}</div>
      <div className='w-2/6'>
        <Slider
          min={min}
          max={18}
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
    </div>
  )
}

export default PriceSlider
