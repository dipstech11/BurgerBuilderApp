import React from 'react';
// import Auxx from '../../hoc/auxx'
import classes from './Burger.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'


const burger = (props) => {
  let transformIngredient = Object.keys(props.ingredients)    //[salad,cheese]
  .map(igkey => {                                               //igkey = salad, chees
//...Array(props.ingredients[igkey]) =this will return a array of length of key with null value.
    return [...Array(props.ingredients[igkey])].map((_, i) =>{   //finding the value, _ = value
    return <BurgerIngredient key={igkey+i} type={igkey} />      //like 2 or 3, i = len(value)
    })
  }).reduce((arr, el) =>{
    return arr.concat(el)
  },[])

  if (transformIngredient.length === 0) {
      transformIngredient = <p>Please start adding ingredient</p>
  }

  return (
    <div className={classes.Burger}>
        <BurgerIngredient type="bread-top"/>
        {transformIngredient}
        <BurgerIngredient type="bread-bottom"/>
    </div>
  );
}

export default burger
