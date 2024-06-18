import React from 'react'

const Label = () => {
  return (
    <div>
        <h1>Testing of getByLabelText</h1>
        <label htmlFor='username'>Username</label>
        <input type="text" id="username"/>
    </div>
  )
}

export default Label
