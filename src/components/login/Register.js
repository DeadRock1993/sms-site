import React from "react";
import registerImg from "./register.svg";

export class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      passwordCheck: "",
      formErrors: {
        username: "",
        email: "",
        password: "",
        passwordCheck: "",
      },
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    const { name, value } = event.target;
    let formErrors = { ...this.state.formErrors };
    switch (name) {
      case "username":
        formErrors.username = value.length < 3 ? "Не менее 3 символов" : "";
        break;
      case "email":
        formErrors.email = !validateEmail(value)
          ? "Необходимо ввести валидный E-mail"
          : "";
        break;
      case "password":
        formErrors.password = value.length < 8 ? "Не менее 8 символов" : "";
        break;
      case "passwordCheck":
        formErrors.passwordCheck =
          value.length < 8 ? "Не менее 8 символов" : "";
      default:
        break;
    }

    this.setState(
      {
        formErrors,
        [name]: value,
      },
      () =>
        !(this.state.password === this.state.passwordCheck) &&
        this.state.passwordCheck.length >= 8
          ? this.setState({
              ...this.state,
              formErrors: {
                ...this.state.formErrors,
                passwordCheck: "Пароли не совпадают",
              },
            })
          : ""
    );
  }
  handleSubmit(event) {
    event.preventDefault();
  }
  render() {
    console.log(this.state);
    const { username, email, password, passwordCheck, formErrors } = this.state;
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Регистрация</div>
        <div className="content">
          <div className="image">
            <img src={registerImg} alt="login" />
          </div>
          <form onSubmit={this.handleSubmit} className="form">
            <div className="form-group">
              <label htmlFor="username">Имя:</label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Name"
                value={username}
                onChange={this.handleChange}
              />
              <span className="error-info-form">{formErrors.username}</span>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                value={email}
                onChange={this.handleChange}
              />
              <span className="error-info-form">{formErrors.email}</span>
            </div>
            <div className="form-group">
              <label htmlFor="password1">Пароль:</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                id="password1"
                value={password}
                onChange={this.handleChange}
              />
              <span className="error-info-form">{formErrors.password}</span>
            </div>
            <div className="form-group">
              <label htmlFor="password2">Повторите пароль:</label>
              <input
                type="password"
                name="passwordCheck"
                placeholder="Password"
                id="password2"
                value={passwordCheck}
                onChange={this.handleChange}
              />
              <span className="error-info-form">
                {formErrors.passwordCheck}
              </span>
            </div>
            <div className="footer">
              <button disabled type="submit" className="btn-login">
                Зарегистрироваться
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
