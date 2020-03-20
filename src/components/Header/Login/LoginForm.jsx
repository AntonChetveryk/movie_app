import React from "react";
import CallApi from "../../../api/api";
import classNames from "classnames";
import AppContextHOC from "../../HOC/AppContextHOC";

class LoginForm extends React.Component {
  state = {
    username: "chetverykanton92@gmail.com",
    password: "anton1031",
    repeatPassword: "anton1031",
    errors: {},
    submitting: false
  };

  onChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState(prevState => ({
      [name]: value,
      errors: {
        ...prevState.errors,
        base: null,
        [name]: null
      }
    }));
  };

  handleBlur = event => {
    const { name } = event.target;
    const errors = this.validateFields();
    const error = errors[name];
    if (error) {
      this.setState(prevState => ({
        errors: {
          ...prevState.errors,
          [name]: error
        }
      }));
    }
  };

  validateFields = () => {
    const errors = {};

    if (this.state.username === "") {
      errors.username = "Not empty";
    }

    if (this.state.password === "") {
      errors.password = "Обязательное";
    }

    if (this.state.repeatPassword !== this.state.password) {
      errors.repeatPassword = "Должен быть равен паролю";
    }

    return errors;
  };

  onSubmit = () => {
    console.log("onSubmit");
    this.setState({
      submitting: true
    });
    let session_id;
    //1
    CallApi.get(`/authentication/token/new`)

      .then(data => {
        //2
        return CallApi.post("/authentication/token/validate_with_login", {
          body: {
            username: this.state.username,
            password: this.state.password,
            request_token: data.request_token
          }
        });
      })
      .then(data => {
        //3
        return CallApi.post("/authentication/session/new", {
          body: {
            request_token: data.request_token
          }
        });
      })
      .then(data => {
        session_id = data.session_id;

        this.props.updateSessionId(session_id);
        //4
        return CallApi.get("/account", {
          params: {
            session_id: session_id
          }
        });
      })
      .then(user => {
        this.setState(
          {
            submitting: false
          },
          () => this.props.updateUser(user)
        );
        console.log(this.props.session_id);
        this.props.getFavorites({ user, session_id });
        this.props.getWatchlists({ user, session_id });
      })
      .catch(error => {
        console.log("error", error);
        this.setState({
          submitting: false,
          errors: {
            base: error.status_message
          }
        });
      });
  };

  onLogin = e => {
    e.preventDefault();
    const errors = this.validateFields();
    if (Object.keys(errors).length > 0) {
      this.setState(prevState => ({
        errors: {
          ...prevState.errors,
          ...errors
        }
      }));
    } else {
      this.onSubmit();
    }
  };

  render() {
    const {
      username,
      password,
      repeatPassword,
      errors,
      submitting
    } = this.state;
    return (
      <div className="form-login-container">
        <form className="form-login">
          <h1 className="h3 mb-3 font-weight-normal text-center">
            Авторизация
          </h1>
          <div className="form-group">
            <label htmlFor="username">Пользователь</label>
            <input
              type="text"
              className={classNames("form-control", {
                "border-red": errors.username
              })}
              id="username"
              placeholder="Пользователь"
              name="username"
              value={username}
              onChange={this.onChange}
              onBlur={this.handleBlur}
            />
            {errors.username && (
              <div className="invalid-feedback">{errors.username}</div>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="password">Пароль</label>
            <input
              type="password"
              className={classNames("form-control", {
                "border-red": errors.password
              })}
              id="password"
              placeholder="Пароль"
              name="password"
              value={password}
              onChange={this.onChange}
              onBlur={this.handleBlur}
            />
            {errors.password && (
              <div className="invalid-feedback">{errors.password}</div>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="repeatPassword">Повторите пароль</label>
            <input
              type="password"
              className={classNames("form-control", {
                "border-red": errors.repeatPassword
              })}
              id="repeatPassword"
              placeholder="Повторите пароль"
              name="repeatPassword"
              value={repeatPassword}
              onChange={this.onChange}
              onBlur={this.handleBlur}
            />
            {errors.repeatPassword && (
              <div className="invalid-feedback">{errors.repeatPassword}</div>
            )}
          </div>
          <button
            type="submit"
            className="btn btn-lg btn-primary btn-block"
            onClick={this.onLogin}
            disabled={submitting}
          >
            Вход
          </button>
          {errors.base && (
            <div className="invalid-feedback text-center">{errors.base}</div>
          )}
        </form>
      </div>
    );
  }
}

export default AppContextHOC(LoginForm);
