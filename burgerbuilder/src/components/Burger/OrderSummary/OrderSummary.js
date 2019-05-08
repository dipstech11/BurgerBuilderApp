import React from 'react';
import Auxx from '../../../hoc/auxx'
import Button from '../../UI/Button/Button'


const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients)
  .map(igkey => {
     return <li key={igkey}>
     <span style={{textTranform:'capitalize'}}>{igkey} </span>: {props.ingredients[igkey]} </li>
  })

return (
    <Auxx>
      <h3> Your Order</h3>
      <p> A delicious burger with the following ingredients: </p>
      <ul>
          {ingredientSummary}
      </ul>
      <p><strong>Total Price : {props.price.toFixed(2)} </strong> </p>
      <p> Continue to Checkout </p>

      <Button btnType='Danger' clicked={props.cancelled}> CANCEL</Button>
      <Button btnType='Success' clicked={props.continued}>CONTINUE </Button>

    </Auxx>
)

}


export default orderSummary
