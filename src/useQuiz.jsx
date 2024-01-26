import React, { useEffect, useState } from 'react'

export function useQuiz() {
    const [data, setData] = useState();
    let capita = "Cual es la capital de "
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

                obj['answers'] = randomAnswer;

                questions.push(obj);
                history.push(random)
            }

        }




        setData(questions)
    }



    useEffect(() => {
        getData();
    }, [])

    return {
        data
    }
}
