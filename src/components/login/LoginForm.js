import React from "react";
import "./style.css";
import { Login } from "./Login";
import { Register } from "./Register";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogginActive: true,
    };
  }
  changeState() {
    const { isLogginActive } = this.state;
    if (isLogginActive) {
      this.rightSide.classList.remove("right");
      this.rightSide.classList.add("left");
    } else {
      this.rightSide.classList.remove("left");
      this.rightSide.classList.add("right");
    }
    this.setState((prevState) => ({
      isLogginActive: !prevState.isLogginActive,
    }));
  }
  render() {
    const { isLogginActive, name, password } = this.state;
    return (
      <div className="form-wrapper">
        <div className="login">
          <div className="container-form">
            {isLogginActive && (
              <Login containerRef={(ref) => (this.logOrReg = ref)} />
            )}
            {!isLogginActive && (
              <Register containerRef={(ref) => (this.logOrReg = ref)} />
            )}
          </div>
          <RightSide
            log={isLogginActive}
            containerRef={(ref) => (this.rightSide = ref)}
            onClick={this.changeState.bind(this)}
          />
        </div>
      </div>
    );
  }
}

const RightSide = (props) => {
  return (
    <div
      className="right-side"
      ref={props.containerRef}
      onClick={props.onClick}
    >
      <div className="inner-container">
        <div className="text">{props.log ? "Регистрация" : "Войти"}</div>
      </div>
    </div>
  );
};

export default LoginForm;
