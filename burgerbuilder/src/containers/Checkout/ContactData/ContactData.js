import React, {Component} from 'react'
import Button from '../../../components/UI/Button/Button'
import axios from '../../../axios-orders'
import Spinner from '../../../components/UI/Spinner/Spinner'
import classes from './ContactData.css'

class ContactData extends Component{
    state = {
      name:"",
      email:"",
      address:{
        street:"",
        zipcode:""
      },
      loading:false
      }


    orderHandler = (event) => {
        event.preventDefault()

          this.setState({loading:true})
          const order = {
              ingredients:this.props.ingredients,
              price:this.props.price,
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
          this.setState({loading:false})
          this.props.history.push("/")


        })
          .catch(error => {console.log(error)
            this.setState({loading:false})
          })

    }

    render() {
      let form = (
        <form>
          <input  className={classes.Input} type="text" name="name" placeholder="Your Name" />
          <input  className={classes.Input} type="text" name="email" placeholder="Your Email" />
          <input  className={classes.Input} type="text" name="street" placeholder="Street" />
          <input className={classes.Input} type="text" name="zipcode" placeholder="Zip Code" />

          <Button btnType="Success" clicked={this.orderHandler}>ORDER </Button>
        </form>
      )
      if (this.state.loading){
        form = <Spinner />
      }

      return(
          <div className={classes.ContactData}>
            <h4>Enter your Contact Data </h4>
            {form}
          </div>
      )
    }

}


export default ContactData
