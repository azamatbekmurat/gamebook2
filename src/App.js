import React, { Component } from "react";
import { BrowserRouter, Redirect, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Account from "./components/Account";
import NotFound from "./components/NotFound";
import Login from "./containers/Login";
import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Navbar />
          <main className="container" id="main-container">
            <Switch>
              <Route path="/account" component={Account} />
              <Route exact path="/" component={Login} />
              <Route path="/not-found" component={NotFound} />
              <Redirect to="/not-found" />
            </Switch>
          </main>
          <footer id="footer">
            <p>Copyright (c) Gamebook</p>
          </footer>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}
export default App;
