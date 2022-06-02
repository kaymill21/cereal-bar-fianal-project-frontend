
import React, { Component } from 'react';

class AddCereal extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      price: '',
      image: '',
      status: '',
      description: ''
    }
  }

  handleOnChange = event => {
    const {name, value} = event.target;
    this.setState({
      [name]: value 
    })
  }

  handleOnSubmit = event => {
    event.preventDefault();
    const cereal = this.state;
    this.props.AddCereal(cereal)

  }

  render() {
      return (
      <form onSubmit={this.handleOnSubmit}>
        <label htmlFor="cereal_name">Name</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleOnChange}
            placeholder="cereal Name"
            />

        <label htmlFor="cereal_price">Price</label>
          <input
            type="number"
            name="price"
            value={this.state.price}
            onChange={this.handleOnChange}
            placeholder="Price"
            />
          <button>+ADD CEREAL</button>
      </form>
    )
  }

}

export default AddCereal;