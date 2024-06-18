import React from 'react'

const Label = () => {
  return (
    <div>
        <div>
          <h1>Testing of getByLabelText</h1>
          <label htmlFor='username'>Username</label>
          <input type="text" id="username" defaultValue={"Saket"}/>
        </div>
        <div>
          <h1>Testing of getByLabelText</h1>
          <label htmlFor='skills'>Skills</label>
          <input type="checkbox" id="skills"/>
        </div>
    </div>
  )
}

export default Label


//in the 7th line, using htmlFor, we associated the label with the input tag.