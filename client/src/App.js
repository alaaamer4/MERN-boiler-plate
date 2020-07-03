import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/routes/Home";
import Login from "./components/auth/Login";
import Alert from "./components/functions/Alert";
import Register from "./components/auth/Register";
import Header from "./components/layout/Header";
function App() {
  return (
    <div>
      <Router>
        <Header />
        <div className="container">
          <Alert />
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
