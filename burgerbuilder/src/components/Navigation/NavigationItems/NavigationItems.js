import React from 'react'
import classes from './NavigationsItems.css'
import NavigationItem from './NavigationItem/NavigationItem'

const navigationItems  = (props) => (
    <ul className={classes.NavigationsItems}>
        <NavigationItem link='/' active>Burger Builder
        </NavigationItem>
        <NavigationItem link='/'>Checkout
        </NavigationItem>
    </ul>
)

export default navigationItems
