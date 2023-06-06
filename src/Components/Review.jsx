import React from 'react'
import style from "./Review.module.scss"

function Review() {
  return (
    <div>
        <div className={style.body}> 
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
        <option value="">Apply Model to selected participants</option>
    </select>
        </div>
        <div className={style.review}> 
        <div> 
    <label htmlFor="">Parameters</label>
    <br/>
    <select name="" id="">
        <option value="">Date of birth</option>
        <option value="">Age</option>
    </select>
     <br/>
    <select name="" id="">
        <option value="">Location</option>
    </select>
    <br/>
    <select name="" id="">
        <option value="">Loan amount range</option>
    </select>
        </div>
        <div>
        <label htmlFor="">Selection</label>
    <br/>
    <select name="" id="">
        <option value="">25-35</option>
    </select>
     <br/>
    <select name="" id="">
        <option value="">Lagos</option>
    </select>
    <br/>
    <select name="" id="">
        <option value="">100,000-250,000</option>
    </select>
        </div>
        </div>
        <hr/>
        <div>
            <p>Bank statement analysis</p>
        </div>
        <div className={style.review}>
            <div>
        <label htmlFor="">Variable</label>
        <br/>
        <select>
            <option>Average Debit</option>
        </select>
        <br/>
        <select>
            <option>Average Debit</option>
        </select>
        <br/>
        <select>
            <option>Average Debit</option>
        </select>
        <br/>
        <select>
            <option>Average Debit</option>
        </select>
        <br/>
            </div>

            <div>
        <label htmlFor="">Operator</label>
        <br/>
          <select>
            <option>Less than</option>
          </select>
          <br/>
          <select name="" id="">
            <option value="">Less than</option>
          </select>
          <br/>
          <select name="" id="">
            <option value="">Less than</option>
          </select>
          <br/>
          <select name="" id="">
            <option value="">Less than</option>
          </select>
          <br/>
            </div>

            <div>
        <label htmlFor="">Value</label>
        <br/>
          <select>
            <option>5000</option>
          </select>
          <br/>
          <select name="" id="">
            <option value="">6000</option>
          </select>
          <br/>
          <select name="" id="">
            <option value="">7000</option>
          </select>
          <br/>
          <select name="" id="">
            <option value="">8000</option>
          </select>
          <br/>
            </div>

            <div>
        <label htmlFor="">Assigned score</label>
        <br/>
          <select>
            <option>10</option>
          </select>
          <br/>
           <select name="" id="">
           <option>10</option>
           </select>
           <br/>
           <select name="" id="">
            <option>15</option>
           </select>
           <br/>
           <label htmlFor="">#</label>
           <select name="" id="">
            <option>30</option>
           </select>
            </div>

        </div>

        </div>
    </div>
  )
}

export default Review