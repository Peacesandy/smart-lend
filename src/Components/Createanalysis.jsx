import React, { useState } from 'react'
import style from './Analysis.module.scss'
import Scores from './Scores'


function Createanalysis() {

const [onContinue, setOnContinue] = useState(false)


  return (
    <div>
        <div className={style.title}> 
    <h3>Create Prediction model</h3>
    </div>
    <div className={style.input}> 
      <div>  
    <label htmlFor="">Variable</label>
    <br/>
    <select name="" id="">
        <option value="">Select</option>
        <option value="">Monthly average income</option>
        <option value="">Monthly average expense</option>
        <option value="">Total occuring expense</option>
        <option value="">Average debit</option>
        <option value="">Average Credit</option>
        <option value="">Average balance</option>
        <option value="">Most frequent balance</option>
    </select>
         <br/>
    <select name="" id="">
        <option value="">Select</option>
        <option value="">Monthly average income</option>
        <option value="">Monthly average expense</option>
        <option value="">Total occuring expense</option>
        <option value="">Average debit</option>
        <option value="">Average Credit</option>
        <option value="">Average balance</option>
        <option value="">Most frequent balance</option>
    </select>
    </div> 

     <div>   
    <label htmlFor="">Operator</label>
    <br/>
    <select>
        <option value="">Select</option>
        <option value="">Less than or equal to</option>
        <option value="">Greater than</option>
        <option value="">Greater than or equal to</option>
        <option value="">Equal to</option>
    </select>
        <br/>
    <select>
        <option value="">Select</option>
        <option value="">Less than or equal to</option>
        <option value="">Greater than</option>
        <option value="">Greater than or equal to</option>
        <option value="">Equal to</option>
    </select>
    </div>

    <div>
        <label htmlFor="">Value</label>
        <br/>
        <input type="nothing" />
        <br/>
        <input type="nothing" />
    </div>

    <div>
        <label htmlFor="">Assigned Score</label>
        <br/>
        <input type="nothing" />
        <br/>
        <input type="nothing" />
    </div>

    </div>
    <div className={style.button}>
    {!onContinue && <button className={style.btn} onClick={() => setOnContinue(true)}>
        Continue
        </button> }

        {onContinue && <Scores/>}
    </div>
    </div>
  )
}

export default Createanalysis