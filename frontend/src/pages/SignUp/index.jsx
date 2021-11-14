import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { api } from "../../services/api";
import { useHistory } from "react-router";
import { formatCPF } from "../../utils/formatter";
import { validateCPF, validateEmail } from "../../utils/validator";
import { ToastNotifier } from "../../helpers/ToastNotifier";
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
import "./styles.css";

export default function SignUp() {
  let history = useHistory();

  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [avatarLink, setAvatarLink] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidCPF, setIsValidCpf] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (password !== passwordConfirmation) {
        ToastNotifier({
          toastMessage: "Senhas não conferem. Tente novamente!",
          toastType: "error",
        });

        return;
      }

      if (!isValidEmail) {
        ToastNotifier({
          toastMessage: "E-mail inválido. Tente novamente!",
          toastType: "error",
        });

        return;
      }

      if (!isValidCPF) {
        ToastNotifier({
          toastMessage: "CPF inválido. Tente novamente!",
          toastType: "error",
        });

        return;
      }

      const userData = {
        name,
        cpf,
        email,
        password,
        avatarLink,
      };

      const response = await api.post("users", userData);

      console.log(response);

      if (response.status === 201) {
        clearFields();

        ToastNotifier({
          toastMessage: "Usuário logado com sucesso!",
          toastType: "success",
        });
        history.push("/users");
      }
    } catch (e) {
      console.log(e);
    }
  };

  const clearFields = () => {
    setName("");
    setCpf("");
    setEmail("");
    setPassword("");
    setPasswordConfirmation("");
    setAvatarLink("");
  };

  const handleEmailValidation = (value) => {
    setIsValidEmail(validateEmail(value));
  };

  const handleCpfValidation = (value) => {
    setIsValidCpf(validateCPF(value));
  };

  return (
    <>
      <Header />
      <Footer />
      <form onSubmit={handleSubmit}>
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
                placeholder="Digite seu Nome Completo"
                name="name"
                onChange={(e) => setName(e.target.value)}
                id="signUpName"
              />
              <FontAwesomeIcon
                icon={faUser}
                className="input-icon"
                transform="up-2 right-5"
              />
            </div>
            <label htmlFor="cpf">
              <strong>CPF</strong>
            </label>
            <div className="custom-wrapper">
              <input
                required
                type="text"
                minLength={14}
                maxLength={14}
                value={formatCPF(cpf)}
                placeholder="Digite seu CPF"
                name="cpf"
                onChange={(e) => {
                  setCpf(e.target.value);
                  handleCpfValidation(e.target.value);
                }}
                id="signUpCPF"
              />
              <FontAwesomeIcon
                icon={faIdCard}
                className="input-icon"
                transform="up-2 right-5"
              />
            </div>
            <label htmlFor="email">
              <strong>E-mail</strong>
            </label>
            <div className="custom-wrapper">
              <input
                required
                type="email"
                placeholder="Digite seu e-mail"
                name="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                  handleEmailValidation(e.target.value);
                }}
                id="signUpEmail"
              />
              <FontAwesomeIcon
                icon={faAt}
                className="input-icon"
                transform="up-2 right-5"
              />
            </div>
            <label htmlFor="password">
              <strong>Senha</strong>
            </label>
            <div className="custom-wrapper">
              <input
                required
                type="password"
                placeholder="Digite sua senha"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                id="signUpPassword"
              />
              <FontAwesomeIcon
                icon={faKey}
                className="input-icon"
                transform="up-2 right-5"
              />
            </div>
            <label htmlFor="password-confirm">
              <strong>Confirmação de senha</strong>
            </label>
            <div className="custom-wrapper">
              <input
                required
                type="password"
                placeholder="Confirme sua senha"
                name="password-confirm"
                onChange={(e) => setPasswordConfirmation(e.target.value)}
                id="signUpConfirmPassword"
              />
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="input-icon"
                transform="up-2 right-5"
              />
            </div>
            <label htmlFor="avatar">
              <strong>Avatar</strong>
            </label>
            <div className="custom-wrapper">
              <input
                required
                type="text"
                placeholder="Cole aqui um link para uma imagem"
                name="avatar"
                onChange={(e) => setAvatarLink(e.target.value)}
                id="signUpConfirmPassword"
              />
              <FontAwesomeIcon
                icon={faPortrait}
                className="input-icon"
                transform="up-2 right-5"
              />
            </div>
          </div>
          <a href="/" className="button">
            <strong>VOLTAR</strong>
          </a>
          <button type="submit" className="button">
            <strong>REGISTRAR-SE</strong>
          </button>
        </div>
      </form>
    </>
  );
}
