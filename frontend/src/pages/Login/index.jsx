import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { api } from "../../services/api";
import { useHistory } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKey, faUser, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import "./styles.css";

export default function Login() {
  let history = useHistory();

  const [emailCpf, setEmailCpf] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userData = { email: emailCpf, password };

      const response = await api.post("/login", userData);

      console.log(response);

      if (response.status === 200) history.push("/users");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <Header />
      <Footer />
      <form onSubmit={handleSubmit}>
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
                onChange={(e) => setEmailCpf(e.target.value)}
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
            <label htmlFor="password">
              <strong>Senha</strong>
            </label>
            <div className="custom-wrapper">
              <input
                onChange={(e) => setPassword(e.target.value)}
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
          </div>
          <button type="submit" className="button">
            <strong>ENTRAR</strong>
          </button>
          <a href="/signup" className="button">
            <strong>REGISTRAR-SE</strong>
          </a>
        </div>
      </form>
    </>
  );
}
