import React from 'react';
import Auxx from '../../../hoc/auxx'

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients)
  .map(keys => {
     return <li keys={keys}>
     <span style={{textTranform:'capitalize'}}>{keys} </span>: {props.ingredients[keys]} </li>
  })

return (
    <Auxx>
      <h3> Your Order</h3>
      <p> A delicious burger with the following ingredients: </p>
      <ul>
          {ingredientSummary}
      </ul>
      <p> Continue to Checkout </p>

    </Auxx>
)

}


export default orderSummary
