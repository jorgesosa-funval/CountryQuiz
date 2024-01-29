import React, { useEffect, useState } from 'react'
import Button from './Button'

export default function Question({ data, setPosition, position }) {
   /* Idea de Rotsen GPT */
   return (
      <div className='container flex flex-col items-center'>
         <h2 className='text-lg font-semibold'>Cual es la capital de {data && data[position].name.common} ?</h2>
         <div className='container flex flex-wrap justify-center gap-4 md:gap-6 py-8 md:max-w-[40rem]'>

            {data && data[position]?.answers.sort(() => Math.random() - 0.5).map(ans =>

               <Button
                  key={ans}
                  text={ans}
                  setPosition={setPosition}

               />
            )}
         </div>
      </div>
   )
}
