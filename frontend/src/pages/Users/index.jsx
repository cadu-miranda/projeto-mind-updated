import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import { api } from "../../services/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserEdit,
  faTrash,
  faAt,
  faCheckCircle,
  faIdCard,
  faKey,
  faPortrait,
  faUser,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";
import "./styles.css";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    const response = api.get("/users");

    console.log(response.data);

    setUsers(response.data);
  };

  return (
    <>
      <h1>Usuários</h1>
      <div className="icon">
        <FontAwesomeIcon icon={faEdit} />
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
              placeholder="Coloque seu avatar"
              name="avatar"
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
        <a className="button" href>
          <strong>CONFIRMAR</strong>
        </a>
        <a className="button" href>
          <strong>CANCELAR</strong>
        </a>
      </div>
      {users.map((item, index) => (
        <table id="users">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>E-mail</th>
              <th>CPF</th>
              <th>Avatar</th>
              <th>Ações</th>
            </tr>
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.cpf}</td>
              <td>
                <img src={item.avatar} alt="Avatar" title="Avatar" />
              </td>
              <td>
                <Button
                  onClick={() => {
                    fetch(`http://localhost:3333/users/${item.id}`, {
                      method: "put",
                    });

                    console.log("alterar " + item.id);
                  }}
                  className="actions-button"
                  variant="contained"
                  color="primary"
                  href="#contained-buttons"
                >
                  Alterar
                  <FontAwesomeIcon
                    icon={faUserEdit}
                    fixedWidth
                    transform="right-12 up-3"
                  ></FontAwesomeIcon>
                </Button>
                <Button
                  onClick={() => {
                    fetch(`http://localhost:3333/users/${item.id}`, {
                      method: "delete",
                    });
                  }}
                  className="actions-button"
                  variant="contained"
                  color="error"
                  href="#contained-buttons"
                >
                  Excluir
                  <FontAwesomeIcon
                    icon={faTrash}
                    fixedWidth
                    transform="right-12 up-3"
                  ></FontAwesomeIcon>
                </Button>
              </td>
            </tr>
          </thead>
        </table>
      ))}
    </>
  );
}
