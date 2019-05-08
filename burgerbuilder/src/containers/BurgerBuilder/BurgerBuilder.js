import React, {Component} from 'react';
import Auxx from '../../hoc/auxx'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import axios from '../../axios-orders'
import Spinner from '../../components/UI/Spinner/Spinner'


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
    totalPrice :50,
    purchasable:false,
    purchasing: false,
    loading:false
  }

  purchaseHandler = () => {
    this.setState({purchasing:true})
  }

  purchaseHandlerCancel = () => {
    this.setState({purchasing:false})
  }

  purchaseHandlerContinue = () =>  {
    // alert('Order is Successfull')
    this.setState({loading:true})
    const order = {
        ingredients:this.state.ingredients,
        price:this.state.totalPrice,
        customer :{
          name:"Deepak Yadav",
          address:{
            street:"Lane No. 10",
            city:"Pune",
            zipcode:"48490",
          },
          email:"dipstech2020@gmail.com",
        },
        deliveryMethod:"fastest"
    }
    axios.post("/orders.json", order)
    .then(response=>{console.log(response)
    this.setState({loading:false, purchasing:false})
    //purchasing is set to false here, bcuse if not then modal (checkout) will never gone
    //and will not be able to make new order
    // alert("Ordered is placed")
    console.log("Order Placed Successfully")
  })
    .catch(error => {console.log(error)
      this.setState({loading:false, purchasing:false})
    })
  }

  isPurchasable = (tempingredient) =>{

    const sum = Object.keys(tempingredient).map((ikey) =>{
      return tempingredient[ikey]
    }).reduce((sum, el)=>{
      return sum + el
    },0)
    this.setState({purchasable:sum>0})
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
    this.isPurchasable(updatedIngredient)
  }

deleteIngredient = (type) => {
  const oldCount = this.state.ingredients[type]
  if (oldCount <= 0){
    return
  }
  const updatedCount =oldCount - 1
  const updatedIngredient = {
    ...this.state.ingredients
  }
  updatedIngredient[type] = updatedCount
  const priceDeduction   = INGREDIENT_PRICES[type]
  const updatedPrice = this.state.totalPrice - priceDeduction
  this.setState(
    {
      ingredients:updatedIngredient,
      totalPrice:updatedPrice
    }
  )
  this.isPurchasable(updatedIngredient)
}


  render()
    {
      const disabledInfo = {
        ...this.state.ingredients
      }
      //disabledInfo = {salad:true, meat:false....}

      for (let key in disabledInfo){
        disabledInfo[key] = disabledInfo[key] <=0
      }

      let orderSummary =   <OrderSummary
        ingredients ={this.state.ingredients}
        cancelled = {this.purchaseHandlerCancel}
        continued = {this.purchaseHandlerContinue}
        price = {this.state.totalPrice}
        />

        if (this.state.loading){
          orderSummary = <Spinner />
        }


      return (
          <Auxx >

          <Modal show={this.state.purchasing}
          hideModal = {this.purchaseHandlerCancel} >
              {orderSummary}

          </Modal>

}
          <Burger ingredients = {this.state.ingredients}/>
          <BuildControls
          ingredientAdded ={this.addIngredient}
          ingredientDeleted = {this.deleteIngredient}
          disabled = {disabledInfo }
          price = {this.state.totalPrice}
          purchasable = {this.state.purchasable}
          ordered = {this.purchaseHandler}
           />

          </Auxx>
      );
    }


}

export default BurgerBuilder
