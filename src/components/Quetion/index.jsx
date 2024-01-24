import React from 'react'
import Button from './Button'

export default function Question() {
  return (
    <div className='container flex flex-col items-center text-slate-50'>
        <h2 className='text-lg font-semibold'>Como le entro el agua al coco?</h2>
        <div className='container flex flex-wrap justify-center gap-5 py-8'>
            <Button
               text = {'mapa'}
            />
            <Button
               text = {'mapa'}
            />
            <Button
               text = {'mapa'}
            />
            <Button
               text = {'mapa'}
            />
        </div>
    </div>
  )
}
