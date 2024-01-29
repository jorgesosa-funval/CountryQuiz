import React, { useState } from 'react'
import Count from './components/Count'
import Question from './components/Quetion'
import { useQuiz } from './useQuiz'


function App() {
  const [position, setPosition] = useState(0);


  const { data } = useQuiz();
  data && console.log(data)

  const nexquestion = (e) => {

    if (data[position].capital[0] != e.target.textContent) {

      let selected = e.target
      let img = selected.querySelector('img')
      img.classList.remove('hidden')
      selected.classList.add('bg-button-gradient');

    }


    setTimeout(() => {
      setPosition(position + 1)
    }, 5000);
  }

  return (
    <>
      <div className='container bg-main-bg w-screen h-screen bg-cover px-5 flex items-center md:p-[18%] font-vietnam'>

        <div className='w-full h-fit bg-primary-bg rounded-lg p-4 text-text-bg font-semibold max-w-[840px] mx-auto'>

          <Count
            data={data}
            position={position}


          />

          <Question
            data={data}
            position={position}
            setPosition={nexquestion}

          />

        </div>

      </div>
    </>
  )
}

export default App
