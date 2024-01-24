import { useState } from 'react'
import Count from './components/Count'
import Button from './components/Quetion/Button'
import Question from './components/Quetion'
 

function App() {


  return (
    <>
     <div className='container bg-main-bg w-screen h-screen bg-cover px-5 flex items-center'>

            <div className='w-full h-fit bg-slate-700 rounded-lg p-4'>

                  <Count/>

              <Question/>

            </div>

     </div>
    </>
  )
}

export default App
