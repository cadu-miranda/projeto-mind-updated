import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKey, faUser, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import "./Login.css";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({});
  }
  handleSubmit(event) {
    const porta = 3333;
    const baseUrl = `http://localhost:${porta}`;

    event.preventDefault();

    const data = new FormData(event.target);

    fetch(`${baseUrl}/login`, {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((jsonData) => console.log(jsonData));
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
              <label htmlFor="email">
                <strong>Login</strong>
              </label>
              <div className="custom-wrapper">
                <input
                  onChange={this.handleChange.bind(this)}
                  required
                  type="text"
                  placeholder="Digite seu e-mail ou CPF"
                  name="email"
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
                  onChange={this.handleChange.bind(this)}
                  required
                  type="password"
                  placeholder="Digite sua senha"
                  name="password"
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
              <strong>ENTRAR</strong>
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
