import React from 'react';
import Auxx from '../../hoc/auxx'
import classes from './Burger.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'


const burger = (props) => {
  return (
    <div className={classes.Burger}>
        <BurgerIngredient type="bread-top"/>
        <BurgerIngredient type="cheese"/>
        <BurgerIngredient type="meat"/>
        <BurgerIngredient type="bread-bottom"/>

    </div>
  );
}

export default burger