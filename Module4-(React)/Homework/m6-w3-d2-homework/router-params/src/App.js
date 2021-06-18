import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";


export default function App() {
  //Insert router, links here
  <BrowserRouter>
    <Switch>
      <Route path="/https://upload.wikimedia.org/wikipedia/commons/6/69/Netflix_logo.svg" />
      <Route path="/https://upload.wikimedia.org/wikipedia/commons/1/17/HBO_Max_Logo.svg" />
      <Route path="/https://upload.wikimedia.org/wikipedia/commons/e/e4/Hulu_Logo.svg" />
      <Route path="/https://upload.wikimedia.org/wikipedia/commons/f/f1/Prime_Video.png" />
    </Switch>
  </BrowserRouter>

}

function Child() {

  // Below this comment, there's one major key script missing


  return (
    <div>
      <h3>You Selected:<span>{id}</span></h3>
    </div>
  );
}
