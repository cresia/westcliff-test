import './App.css';
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { products } from "./products";
import Cartcontent from "./cartDisplay";

class Cart extends Component{
    constructor(props){
        super(props);
        this.state = {
        shoppingItem: products
        };
    }

    render(){
        return (
            <div className="Cart">
            <Cartcontent
                shopitems={this.state.shoppingItem}
            />
            </div>
        );
    }
}

export default Cart;
