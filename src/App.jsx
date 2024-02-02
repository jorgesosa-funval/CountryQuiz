import React, { useState } from 'react'
import Count from './components/Count'
import Question from './components/Quetion'
import Quiz from './context/Quiz';


function App() {


  return (
    <>

      <Quiz>

        <div className='container bg-main-bg w-screen h-screen bg-cover px-5 flex items-center md:p-[18%] font-vietnam'>

          <div className='w-full h-fit bg-primary-bg rounded-lg p-4 text-text-bg font-semibold max-w-[840px] mx-auto'>

            <Count />

            <Question />

          </div>

        </div>

      </Quiz>
    </>
  )
}

export default App
