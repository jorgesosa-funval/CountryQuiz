import React, { useContext, useState } from 'react'
import Button from './Button'
import { ContextQuiz } from '../../context/Quiz';


export default function Question() {

   const { data, nexquestion, position } = useContext(ContextQuiz)

   const [show, setShow] = useState(false);
   return (
      <div className='container flex flex-col items-center'>
         <h2 className='text-lg font-semibold'>Cual es la capital de {data && data[position].name.common} ?</h2>
         <div className='container flex flex-wrap justify-center gap-4 md:gap-6 py-8 md:max-w-[40rem]'>

            {data && data[position]?.answers.map(ans =>

               <Button
                  key={ans}
                  text={ans}
                  setPosition={(e) => { nexquestion(e), setShow(true) }}
                  correcta={data[position].capital[0] === ans}
                  show={show}
               />
            )}
         </div>
      </div>
   )
}
