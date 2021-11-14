import React from "react";
import { api } from "../../../services/api";
import { ToastNotifier } from "../../../helpers/ToastNotifier";
import {
  MainContainer,
  ModalForm,
  Title,
  FormContainer,
  Button,
  ButtonText,
} from "./styles";

export default function DeleteUserModal({
  selectedRow,
  setIsOpenDeleteUserModal,
  callListAllUsers,
}) {
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.delete(`users/${selectedRow.id}`);

      if (response.status === 200) {
        ToastNotifier({
          toastMessage: "Usuário excluído com sucesso!",
          toastType: "success",
        });

        setIsOpenDeleteUserModal(false);
        callListAllUsers();
      }
    } catch (e) {
      console.log(e);

      ToastNotifier({
        toastMessage: "Erro ao excluir o usuário!",
        toastType: "error",
      });
    }
  };

  const handleCloseModal = (e) => {
    if (e.keyCode === 27) setIsOpenDeleteUserModal(false);
  };

  document.addEventListener("keydown", handleCloseModal);

  return (
    <>
      <MainContainer onKeyDown={handleCloseModal}>
        <ModalForm>
          <FormContainer>
            <Title> Excluir Usuário</Title>
            <span
              style={{
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Tem certeza que deseja excluir o usuário {selectedRow.name}?
            </span>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                margin: "20px 0px",
              }}
            >
              <Button onClick={() => setIsOpenDeleteUserModal(false)}>
                <ButtonText>Voltar</ButtonText>
              </Button>
              <Button onClick={handleSubmit}>
                <ButtonText>Excluir</ButtonText>
              </Button>
            </div>
          </FormContainer>
        </ModalForm>
      </MainContainer>
    </>
  );
}
