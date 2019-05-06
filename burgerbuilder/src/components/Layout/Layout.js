import React from 'react';
import Auxx from '../../hoc/auxx'
import classes from './Layout.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'

const layout = (props) => (
  <Auxx>
    <Toolbar />
    <main className = {classes.content}>
    {props.children}
    </main>

  </Auxx>

)

export default layout
