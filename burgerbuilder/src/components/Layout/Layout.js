import React from 'react';
import Auxx from '../../hoc/auxx'
import classes from './Layout.css'

const layout = (props) => (
  <Auxx>
    <div>Toolbar, SideDrawer, Backdrop </div>
    <main className = {classes.content}>
    {props.children}
    </main>

  </Auxx>

)

export default layout
