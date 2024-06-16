import React, { useState } from 'react'

const ClickEventWithButton = () => {
    const [data, setData]=useState("")
  return (
    <div>
      <h1>Check onClick Event with button</h1>
      <button onClick={()=>setData("Updated Data")}>Update Data</button>
      <h1>{data}</h1>
    </div>
  )
}

export default ClickEventWithButton
