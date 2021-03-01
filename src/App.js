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
import Profile from "./components/profile/Profile";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <div className="container-fluid">
          <div className="row">
            <Navbar />
            <div className="col">
              <div className="App">
                <Switch>
                  <Route exact path="/profile" component={Profile} />
                  <Route exact path="/" component={Home} />
                  <Route exact path="/about" component={About} />
                  <Route exact path="/services" component={Services} />
                  <Route exact path="/contacts" component={Contacts} />
                  <Route exact path="/login" component={LoginForm} />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
