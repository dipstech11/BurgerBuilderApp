import React, {Component} from 'react';
import Auxx from '../../hoc/auxx'
import Burger from '../../components/Burger/Burger'


class BurgerBuilder extends Component{
  render()
    {
      return (
          <Auxx>
          <Burger />
          <div> Build Control </div>
          </Auxx>
      );
    }


}

export default BurgerBuilder
