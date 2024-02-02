import React, { useContext } from 'react'
import { ContextQuiz } from '../../context/Quiz'


export default function Count() {
    const { data, position} = useContext(ContextQuiz)
    return (
        <div className='container flex flex-col items-center py-5'>
            <h2 className='text-gray-bg'>Country Quiz</h2>
            <ul className='flex flex-wrap max-w-[80%] gap-4 justify-center py-3 sm:px-8
            '>

                {data && data.map((val, i) =>
                    <li key={val.capital[0]} className={`w-10 h-10 flex items-center justify-center rounded-full ${position >= i ? 'bg-button-gradient' : 'bg-buttons-bg'} `}>
                        {i + 1}
                    </li>
                )}

            </ul>
        </div>

    )
}
