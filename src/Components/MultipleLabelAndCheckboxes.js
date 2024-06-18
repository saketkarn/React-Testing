import React from 'react'

const MultipleLabelAndCheckboxes = () => {
  return (
    <div>
        <div>
            <h1>Multiple label and inputboxes</h1>
            <label htmlFor='user-name'>UserName</label>
            <input type='text' id='user-name'/>

            <label htmlFor='user-name2'>UserName</label>
            <input type='text' id='user-name2'/>

            <label htmlFor='user-name3'>UserName</label>
            <input type='text' id='user-name3'/>
         </div>
         <div>
            <h1>Multiple label and checkboxes</h1>
            <label htmlFor='userName'>User-Name</label>
            <input type='checkbox' id='userName' defaultChecked={true}/>

            <label htmlFor='userName2'>User-Name</label>
            <input type='checkbox' id='userName2' defaultChecked={true}/>

            <label htmlFor='userName3'>User-Name</label>
            <input type='checkbox' id='userName3' defaultChecked={true}/>
         </div>
    </div>
  )
}

export default MultipleLabelAndCheckboxes
