import './App.css';
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ListGroup, ListGroupItem } from 'reactstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shoppingItem: [
        {
          id: 1,
          image: './products/cologne.jpg',
          desc: 'Unisex Cologne',
          value: 0
        }, {
          id: 2,
          image: './products/iwatch.jpg',
          desc: 'Apple iWatch',
          value: 0
        }, {
          id: 3,
          image: './products/mug.jpg',
          desc: 'Unique Mug',
          value: 0
        }, {
          id: 4,
          image: './products/wallet.jpg',
          desc: 'Mens Wallet',
          value: 0
        }
      ]
    };
  }

  render() {
    let ShoppingContent = <Shopcontent shopitems={this.state.shoppingItem} />;
    return (
      {},
      (
        <div className="App">
          <header className="App-header">
            <h1 className="title">
              Shop to React
            </h1>
            <div className="shoppingCart">
              <FontAwesomeIcon icon={faShoppingCart} className="cartIcon"></FontAwesomeIcon>
              <p>
                0 items
              </p>
            </div>
          </header>
          {ShoppingContent}
        </div>
      )
    );
  }
}

function Shopcontent(props) {
  return (
    <ListGroup>
      {props.shopitems.map((shopitem) => (
        <ListGroupItem key={shopitem.id} className="GroupItem">
          <h2>{shopitem.desc}</h2>
          <div className="itemcontent">
            <img src={shopitem.image} alt="Shopping Image" height={150} width={150}></img>
            <div className="quantityDisplay">
              <input type="text" placeholder={shopitem.value} className="inputValue"></input>
              <p className="quantity">quantity</p>
            </div>
          </div>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
}

export default App;
