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
                <td>Assigned score</td>
            </tr>
            <tr>
              <td>Average dept</td>
              <td>10</td>
            </tr>
            <tr>
              <td>Average dept</td>
              <td>10</td>
            </tr>
            </table>
        </div>
    </div>
  )
}

export default Scores