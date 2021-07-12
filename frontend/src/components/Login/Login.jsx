import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKey, faUser, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import "./Login.css";

class Login extends React.Component {
  redirectToSignUp = () => {
    const { history } = this.props;

    history.push("./signup");
  };

  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit(event) {
    console.log(this.state.value);
    event.preventDefault();
  }
  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <h1>Login</h1>
          <div className="icon">
            <FontAwesomeIcon icon={faUserCircle} />
          </div>
          <div className="form-container">
            <div className="container">
              <label htmlFor="name">
                <strong>Login</strong>
              </label>
              <div className="custom-wrapper">
                <input
                  required
                  type="text"
                  placeholder="Digite seu e-mail ou CPF"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                  id="loginInput"
                />
                <FontAwesomeIcon
                  icon={faUser}
                  className="input-icon"
                  transform="up-2 right-5"
                />
              </div>
              {""}
              <label htmlFor="password">
                <strong>Senha</strong>
              </label>
              <div className="custom-wrapper">
                <input
                  required
                  type="password"
                  placeholder="Digite sua senha"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                  id="passwordInput"
                />
                <FontAwesomeIcon
                  icon={faKey}
                  className="input-icon"
                  transform="up-2 right-5"
                />
              </div>
              {""}
            </div>
            <button>
              <a href="/users">
                <strong>ENTRAR</strong>
              </a>
            </button>
            <button>
              <a href="/signup">
                <strong>REGISTRAR-SE</strong>
              </a>
            </button>
          </div>
        </form>
      </>
    );
  }
}

export default Login;
