import React from 'react'

export default function Button({text, setPosition}) {
  return (
    <button onClick={setPosition} className='min-w-28 w-2/5  max-w-52 bg-buttons-bg h-12  sm:h-14 flex-shrink-0 rounded-md'>
        {text}
    </button>
  )
}
