import React, { useState } from 'react'

const InputBoxOnState = () => {
    const [data, setData]=useState("")
  return (
    <div>
      <input type='text' value={data} onChange={(e)=>setData(e.target.value)}></input>
    </div>
  )
}

export default InputBoxOnState
