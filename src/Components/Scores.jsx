import React from 'react'
import style from './Scores.module.scss'


function Scores() {
  return (
    <div>
        <div className={style.body}> 
        <h1>Create Prediction Model</h1>
        <p>Here are the scores previously stated, please review and edit if needed</p>
        </div>
        <div>
          <table> 
            <tr>
                <td>Variable</td>
                <td>Assigned Debit</td>
            </tr>
            <tr>
              <td>Average Credit</td>
              <td>10</td>
            </tr>
            <tr>
              <td>Total outstanding loan</td>
              <td>10</td>
            </tr>
            <tr>
              <td>Total watchlisted loan</td>
              <td>10</td>
            </tr>
            <tr>
              <td>Highest loan amount</td>
              <td>10</td>
            </tr>
            <tr>
              <td>Average income</td>
              <td>10</td>
            </tr>
            <tr>
              <td>Average expenses</td>
              <td>10</td>
            </tr>
            <tr>
              <td>Re-occuring expenses</td>
              <td>10</td>
            </tr>
            <tr>
              <td>Low inflow rate</td>
              <td>10</td>
            </tr>
            </table>
        </div>
    </div>
  )
}

export default Scores