import React, { createContext, useEffect, useState } from 'react'

export const ContextQuiz = createContext()

export default function Quiz({children}) {

  const [data, setData] = useState();
  const [position, setPosition] = useState(0);

  async function getData() {
    const data = await fetch('https://restcountries.com/v3.1/all?fields=name,capital,currencies,translations')
    const jsonData = await data.json()

    const questions = [];
    const history = []

    while (questions.length < 10) {
      const random = Math.floor(Math.random() * jsonData.length)

      if (!history.includes(random)) {

        let obj = jsonData[random]

        const randomAnswer = [];

        randomAnswer.push(obj.capital[0])

        while (randomAnswer.length < 4) {

          const jose = Math.floor(Math.random() * jsonData.length)
          if (!randomAnswer.includes(jsonData[jose].capital[0])) {

            randomAnswer.push(jsonData[jose].capital[0])
          }

        }
        obj['answers'] = randomAnswer.sort(() => Math.random() - 0.5);

        questions.push(obj);
        history.push(random)
      }
    }
    setData(questions)
  }

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

  useEffect(() => {
    getData();
  }, [])
  return (
    <ContextQuiz.Provider value={{
      data,
      nexquestion,
      position

    }}>

      {children}
    </ContextQuiz.Provider>
  )
}
