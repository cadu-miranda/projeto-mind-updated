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
import "./UserTable.css";

const UserTable = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    api.get("users").then((res) => {
      setUsers(res.data);
      console.log(res.data);
    });
  }, []);

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
        <button>
          <strong>CONFIRMAR</strong>
        </button>
        <button>
          <strong>CANCELAR</strong>
        </button>
      </div>
      {users.map((u) => (
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
            <tr>
              <td>{u.id}</td>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>{u.cpf}</td>
              <td>
                <img src={u.avatar} alt="Avatar" title="Avatar" />
              </td>
              <td>
                <Button
                  onClick={() => {
                    fetch(`http://localhost:3333/users/${u.id}`, {
                      method: "put",
                    });

                    console.log("alterar " + u.id);
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
                    fetch(`http://localhost:3333/users/${u.id}`, {
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
};

export default UserTable;
