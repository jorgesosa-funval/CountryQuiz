import React from 'react'

export default function Count() {
    return (
        <div className='container flex flex-col items-center py-5'>
            <h2>Country Quiz</h2>
            <ul className='flex flex-wrap max-w-[80%] gap-4 justify-center py-3
            '>

                {[1, 2, 4, 4, 5, 6, 7, 8, 9, 10].map(val =>
                    <li key={val} className='w-8 h-8 flex items-center justify-center rounded-full bg-slate-400'>
                        {val}
                    </li>
                ) }

            </ul>
        </div>

    )
}
