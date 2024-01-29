import React, { useEffect } from 'react'

export default function Button({ text, setPosition, correcta, show }) {


  return (
    <button value={text} onClick={setPosition} className={`min-w-28 w-2/5  max-w-52 bg-buttons-bg h-12  sm:h-14 flex-shrink-0  flex items-center gap-4 justify-center rounded-md hover:bg-button-gradient`}>
      {text}{(correcta && show) &&  <img src="/assets/Check_round_fill.svg"/>} <img src="assets/Close_round_fill.svg" className='hidden'/>
    </button>
  )
}
