import React from "react";
import loginImg from "./login.svg";

export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      formErrors: {
        username: "",
        password: "",
      },
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    const { name, value } = event.target;
    let formErrors = this.state.formErrors;
    if (name === "username" && value.length < 3) {
      formErrors.username = "Не менее 3 символов";
    } else if (name === "password" && value.length < 8) {
      formErrors.password = "Не менее 8 символов";
    } else {
      formErrors = {
        username: "",
        password: "",
      };
    }
    this.setState({
      [name]: value,
      formErrors,
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }
  render() {
    const { name, password, formErrors } = this.state;
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Войти</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} alt="login" />
          </div>
          <form onSubmit={this.handleSubmit} className="form">
            <div className="form-group">
              <label htmlFor="username">Имя:</label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Name"
                onChange={this.handleChange}
                value={name}
              />
              <span className="error-info-form">{formErrors.username}</span>
            </div>
            <div className="form-group">
              <label htmlFor="password">Пароль:</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                id="password"
                value={password}
                onChange={this.handleChange}
              />
              <span className="error-info-form">{formErrors.password}</span>
            </div>
            <div className="footer">
              <button type="submit" className="btn-login">
                Войти
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
