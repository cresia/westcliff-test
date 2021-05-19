import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { faShoppingCart, faRegistered} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Home from "./Home";
import Cart from "./Cart";
import App from "./App";
import './App.css';

export default function Navigation(props){
    return (
        <div className="navbar">
            <Router>
                <ul className="nav mx-2 mb-4">
                    <li>
                        <h1>
                            <Link to="/" className="titleLink">
                            <h1 className="titleLogo">Shop 2
                                <FontAwesomeIcon
                                        icon={faRegistered}
                                        className="fas fa-1x text-white titleIcon"
                                    />eact
                            </h1>

                            </Link>
                        </h1>

                    </li>
                    <li className="shoppingCart">
                        <span className="itemAmount">{props.totalValue} items</span>
                        <Link to="/Cart">
                        <FontAwesomeIcon
                            icon={faShoppingCart}
                            className="fas fa-2x my-3 text-white"
                        />
                        </Link>

                    </li>
                </ul>

                {/* Routes */}
                <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/Cart">
                    <Cart/>
                </Route>
                </Switch>
            </Router>
        </div>
    )
}
