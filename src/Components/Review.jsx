import React from 'react'

function Review() {
  return (
    <div>
        <div> 
        <h1>Review details</h1>
        <h5>Basic information</h5>
        </div>
        <div>
        <label htmlFor="">Model name</label>
        <br/>
        <input type="text" placeholder='Alpha model'/>
         <div>
        <label htmlFor="">Condition for model application</label>
        <br/>
        <select>
        <option value="">Apply Model to selected participants</option>
    </select>
        </div>
        </div>
    </div>
  )
}

export default Review