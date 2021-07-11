import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAt,
  faCheckCircle,
  faIdCard,
  faKey,
  faUser,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import "./SignUp.css";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.value);
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
                  type="text"
                  placeholder="Digite seu nome completo"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChange}
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
                  type="text"
                  placeholder="Digite seu CPF"
                  name="cpf"
                  value={this.state.cpf}
                  onChange={this.handleChange}
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
                  type="email"
                  placeholder="Digite seu e-mail"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
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
                  type="password"
                  placeholder="Digite sua senha"
                  name="password"
                  value={this.state.name}
                  onChange={this.handleChange}
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
                  type="password"
                  placeholder="Confirme sua senha"
                  name="password-confirm"
                  value={this.state.name}
                  onChange={this.handleChange}
                  id="signUpConfirmPassword"
                />
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="input-icon"
                  transform="up-2 right-5"
                />
              </div>
              {""}
            </div>
            <button>
              <a href="/">
                <strong>REGISTRAR-SE</strong>
              </a>
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
