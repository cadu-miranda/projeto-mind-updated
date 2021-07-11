import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import { api } from "../../services/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
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
                    console.log("Alterar");
                  }}
                  className="button"
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
                    console.log("Excluir");
                  }}
                  className="button"
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
