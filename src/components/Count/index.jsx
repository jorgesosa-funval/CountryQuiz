import React from 'react'

export default function Count() {
    return (
        <div className='container flex flex-col items-center py-5'>
            <h2 className='text-gray-bg'>Country Quiz</h2>
            <ul className='flex flex-wrap max-w-[80%] gap-4 justify-center py-3 sm:px-8
            '>

                {[1, 2, 4, 4, 5, 6, 7, 8, 9, 10].map(val =>
                    <li key={val} className='w-10 h-10 flex items-center justify-center rounded-full bg-buttons-bg'>
                        {val}
                    </li>
                ) }

            </ul>
        </div>

    )
}
