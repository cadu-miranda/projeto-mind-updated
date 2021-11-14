import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import { api } from "../../services/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import EditUserModal from "../../components/UsersModals/EditUserModal";
import DeleteUserModal from "../../components/UsersModals/DeleteUserModal";
import "./styles.css";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [selectedRow, setSelectedRow] = useState();
  const [isOpenEditUserModal, setIsOpenEditUserModal] = useState(false);
  const [isOpenDeleteUserModal, setIsOpenDeleteUserModal] = useState(false);

  useEffect(() => {
    callListAllUsers();
  }, []);

  const callListAllUsers = async () => {
    const response = await api.get("/users");

    setUsers(response.data);
  };

  return (
    <>
      <Header />
      <Footer />
      {isOpenEditUserModal ? (
        <EditUserModal
          selectedRow={selectedRow}
          setIsOpenEditUserModal={setIsOpenEditUserModal}
          callListAllUsers={callListAllUsers}
        />
      ) : (
        false
      )}
      {isOpenDeleteUserModal ? (
        <DeleteUserModal
          selectedRow={selectedRow}
          setIsOpenDeleteUserModal={setIsOpenDeleteUserModal}
          callListAllUsers={callListAllUsers}
        />
      ) : (
        false
      )}
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
                variant="contained"
                color="primary"
                onClick={() => setIsOpenEditUserModal(true)}
              >
                Alterar
                <FontAwesomeIcon
                  icon={faUserEdit}
                  fixedWidth
                  transform="right-12 up-3"
                />
              </Button>
              <Button
                variant="contained"
                color="error"
                onClick={() => setIsOpenDeleteUserModal(true)}
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
