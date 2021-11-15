import React from "react";
import {
  MainContainer,
  ModalForm,
  Title,
  FormContainer,
  Button,
  ButtonText,
} from "./styles";

export default function LogoutModal({ handleLogout, setIsOpenLogoutModal }) {
  const handleCloseModal = (e) => {
    if (e.keyCode === 27) setIsOpenLogoutModal(false);
  };

  document.addEventListener("keydown", handleCloseModal);

  return (
    <>
      <MainContainer onKeyDown={handleCloseModal}>
        <ModalForm>
          <FormContainer>
            <Title>Aviso</Title>
            <span
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Tem certeza que deseja sair?
            </span>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "20px 0px",
              }}
            >
              <Button onClick={() => setIsOpenLogoutModal(false)}>
                <ButtonText>Voltar</ButtonText>
              </Button>
              <Button onClick={handleLogout}>
                <ButtonText>Sair</ButtonText>
              </Button>
            </div>
          </FormContainer>
        </ModalForm>
      </MainContainer>
    </>
  );
}
