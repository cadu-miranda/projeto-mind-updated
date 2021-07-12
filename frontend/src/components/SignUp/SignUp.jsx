import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAt,
  faCheckCircle,
  faIdCard,
  faKey,
  faPortrait,
  faUser,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import "./SignUp.css";

class SignUp extends React.Component {
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

    fetch(`${baseUrl}/users`, {
      method: "post",
      body: data,
    });
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <h1>Cadastro</h1>
          <div className="icon">
            <FontAwesomeIcon icon={faUserCircle} />
          </div>
          <div className="form-container">
            <div className="container">
              <label htmlFor="name">
                <strong>Nome Completo</strong>
              </label>
              <div className="custom-wrapper">
                <input
                  required
                  type="text"
                  placeholder="Digite seu nome completo"
                  name="name"
                  onChange={this.handleChange.bind(this)}
                  id="signUpName"
                />
                <FontAwesomeIcon
                  icon={faUser}
                  className="input-icon"
                  transform="up-2 right-5"
                />
              </div>
              {""}
              <label htmlFor="cpf">
                <strong>CPF</strong>
              </label>
              <div className="custom-wrapper">
                <input
                  required
                  type="text"
                  maxLength="11"
                  placeholder="Digite seu CPF"
                  name="cpf"
                  onChange={this.handleChange.bind(this)}
                  id="signUpCPF"
                />
                <FontAwesomeIcon
                  icon={faIdCard}
                  className="input-icon"
                  transform="up-2 right-5"
                />
              </div>
              {""}
              <label htmlFor="email">
                <strong>E-mail</strong>
              </label>
              <div className="custom-wrapper">
                <input
                  required
                  type="email"
                  placeholder="Digite seu e-mail"
                  name="email"
                  onChange={this.handleChange.bind(this)}
                  id="signUpEmail"
                />
                <FontAwesomeIcon
                  icon={faAt}
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
                  onChange={this.handleChange.bind(this)}
                  id="signUpPassword"
                />
                <FontAwesomeIcon
                  icon={faKey}
                  className="input-icon"
                  transform="up-2 right-5"
                />
              </div>
              {""}
              <label htmlFor="password-confirm">
                <strong>Confirmação de senha</strong>
              </label>
              <div className="custom-wrapper">
                <input
                  required
                  type="password"
                  placeholder="Confirme sua senha"
                  name="password-confirm"
                  onChange={this.handleChange.bind(this)}
                  id="signUpConfirmPassword"
                />
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="input-icon"
                  transform="up-2 right-5"
                />
              </div>
              {""}
              <label htmlFor="avatar">
                <strong>Avatar</strong>
              </label>
              <div className="custom-wrapper">
                <input
                  required
                  type="text"
                  placeholder="Cole aqui seu avatar"
                  name="avatar"
                  onChange={this.handleChange.bind(this)}
                  id="signUpConfirmPassword"
                />
                <FontAwesomeIcon
                  icon={faPortrait}
                  className="input-icon"
                  transform="up-2 right-5"
                />
              </div>
              {""}
            </div>
            <button>
              <strong>REGISTRAR-SE</strong>
            </button>
            <button>
              <a href="/">
                <strong>LOGIN</strong>
              </a>
            </button>
          </div>
        </form>
      </>
    );
  }
}

export default SignUp;
