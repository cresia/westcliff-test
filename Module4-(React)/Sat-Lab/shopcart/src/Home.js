import './App.css';
import React, { Component } from "react";
import { products } from "./products";
import Shopcontent from "./displayProducts";
import "bootstrap/dist/css/bootstrap.min.css";


class Home extends Component{
  constructor(props){
    super(props);
    this.state = {
      shoppingItem: products
    };
  }

  handleIncrease = (item) => {
    const updatedItem = item.value++;
    this.setState({updatedItem});
  }

  handleDecrease = (item) => {
    if(item.value > 0){
      const updatedItem = item.value--;
      this.setState({updatedItem});
    }
  }

  render(){
    // console.log(this.state.shoppingItem);
    return (
    {},
        (
        <div className="Home">
            <Shopcontent
            shopitems={this.state.shoppingItem}
            addItem={this.handleIncrease}
            removeItem={this.handleDecrease}
            />
        </div>
        )
    );
  }
}

export default Home;
