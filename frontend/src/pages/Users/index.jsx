import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import { api } from "../../services/api";
import { ToastNotifier } from "../../helpers/ToastNotifier";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import "./styles.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [selectedRow, setSelectedRow] = useState();

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await api.get("/users");

    console.log(response.data);

    setUsers(response.data);
  };

  console.log(selectedRow);

  return (
    <>
      <Header />
      <Footer />
      {users.map((item, index) => {
        return (
          <tr key={index} onClick={() => setSelectedRow(item)}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.cpf}</td>
            <td>
              <img src={item.avatar} alt="Avatar" title="Avatar" />
            </td>
            <td>
              <Button
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
                />
              </Button>
              <Button
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
                />
              </Button>
            </td>
          </tr>
        );
      })}
    </>
  );
}
