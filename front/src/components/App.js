import React from 'react';
import Order from './Order'
import Header from './Header';
import AdminMenu from './AdminMenu'
import Cereal from './Cereal'
import AddCereal from './AddCereal'
import cerealAction from '../actions/cerealAction'



class App extends React.Component {
 
constructor() {
  super()

  this.state = {
    cereals: [],
    orders: {}
  }
}

componentDidMount(){
 cerealAction.fetchCereals()
 .then(cereals => this.setState({ cereals }))
}

addMovie = cereal => {
  cerealAction.createCereal(cereal).then(cereal => this.setState({
    cereals: this.state.cereals.concat(cereal)
  }))
}


  
  render() {
    return(
    <div className='cereal-paradise'>
      <div className='menu'>
        <Header title='Brooklyn cereal' />
        
       
      </div>
     
      <Order />
      <AdminMenu/>
      <div>
        <Cereal cereals={this.state.cereals}/>
      </div>

      <div>
        <AddCereal addCereal={this.addCereal}/>
      </div>
    
    </div>
    );
  }
}

export default App; 