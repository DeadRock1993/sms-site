import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contacts from "./components/Contacts";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginForm from "./components/login/LoginForm";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Router>
          <Navbar />
          <div className="App">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
              <Route exact path="/services">
                <Services />
              </Route>
              <Route exact path="/contacts">
                <Contacts />
              </Route>
              <Route exact path="/login">
                <LoginForm />
              </Route>
            </Switch>
          </div>
        </Router>
      </>
    );
  }
}

export default App;
