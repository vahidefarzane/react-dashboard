import React from 'react'
import './Errorbox.css'

export default function Errorbox({massage}) {
  return (
    <div className='error-box'>
        <h1>{massage}</h1>
    </div>
  )
}
