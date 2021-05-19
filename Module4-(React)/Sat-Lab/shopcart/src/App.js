import './App.css';
import React, { Component } from "react";
import { products } from "./products";
import Navigation from "./navbar";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      shoppingItem: products
    };
  }

  render(){
    // console.log(this.state.shoppingItem);
    return (
      {},
      (
        <div className="App text-secondary">
          <Navigation
            totalValue = {this.state.shoppingItem.map(item => item.value).reduce((acc, curr, index)=> acc + curr, 0)}
            items={this.state.shoppingItem}/>
        </div>
      )
    );
  }
}

export default App;
