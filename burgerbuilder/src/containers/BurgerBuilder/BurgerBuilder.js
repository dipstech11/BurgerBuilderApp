import React, {Component} from 'react';
import Auxx from '../../hoc/auxx'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'


const INGREDIENT_PRICES = {
  salad:15,
  cheese: 20,
  meat:25,
  bacon:15
}

class BurgerBuilder extends Component{
  state = {
    ingredients:{
      salad:0,
      bacon:0,
      cheese:0,
      meat:0
    },
    totalPrice :50
  }

  addIngredient = (type) => {
    const oldCount = this.state.ingredients[type]
    const updatedCount =oldCount + 1
    const updatedIngredient = {
      ...this.state.ingredients
    }
    updatedIngredient[type] = updatedCount
    const   priceAddition = INGREDIENT_PRICES[type]
    const updatedPrice = this.state.totalPrice + priceAddition
    this.setState(
      {
        ingredients:updatedIngredient,
        totalPrice:updatedPrice
      }
    )
  }


  render()
    {
      return (
          <Auxx>
          <Burger ingredients = {this.state.ingredients}/>
          <BuildControls
          ingredientAdded ={this.addIngredient}
          />
          </Auxx>
      );
    }


}

export default BurgerBuilder
