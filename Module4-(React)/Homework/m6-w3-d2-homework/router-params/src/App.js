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
  return (
    <Router>
      <h1>TV APPS</h1>
      <nav className="justify-content-center" style={{ margin: 50 }}>
        <Link to="/netflix" style={{ padding: 5 }}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/69/Netflix_logo.svg" alt="Netflix Logo" />
        </Link>
        <Link to="/hbomax" style={{ padding: 5 }}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/1/17/HBO_Max_Logo.svg" alt="HBOMax Logo" />
        </Link>
        <Link to="/hulu" style={{ padding: 5 }}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Hulu_Logo.svg" alt="HULU Logo" />
        </Link>
        <Link to="/prime" style={{ padding: 5 }}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Prime_Video.png" alt="Prime Video Logo" />
        </Link>
      </nav>
      <Switch>
        <Route exact path="/:id">
          <Child />
        </Route>
      </Switch>
    </Router>
  );
}

function Child() {
  let params = useParams();
  let id = params.id;
  console.log(id);

  return (
    <div>
      <h3>You Selected:<span>{id}</span></h3>
    </div>
  );
}
