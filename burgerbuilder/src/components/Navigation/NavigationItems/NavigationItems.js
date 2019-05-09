import React from 'react'
import classes from './NavigationsItems.css'
import NavigationItem from './NavigationItem/NavigationItem'

const navigationItems  = (props) => (
    <ul className={classes.NavigationsItems}>

        <NavigationItem link='/' exact>Burger Builder</NavigationItem>

        <NavigationItem link='/orders'>Orders</NavigationItem>
    </ul>
)

export default navigationItems
