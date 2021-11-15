import React, { useState } from "react";
import { api } from "../../../services/api";
import { formatCPF } from "../../../utils/formatter";
import { validateCPF, validateEmail } from "../../../utils/validator";
import { ToastNotifier } from "../../../helpers/ToastNotifier";
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
import {
  MainContainer,
  ModalForm,
  Form,
  Title,
  Icon,
  FormContainer,
  Container,
  Label,
  StrongText,
  CustomWrapper,
  Input,
  Button,
  ButtonText,
} from "./styles";

export default function AddUserModal({
  setIsOpenAddUserModal,
  callListAllUsers,
}) {
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [avatarLink, setAvatarLink] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidCPF, setIsValidCpf] = useState(true);

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
        avatar: avatarLink,
      };

      const response = await api.post("/users", userData);

      if (response.status === 201) {
        clearFields();

        ToastNotifier({
          toastMessage: "Usuário criado com sucesso!",
          toastType: "success",
        });
        setIsOpenAddUserModal(false);
        callListAllUsers();
      }
    } catch (e) {
      console.log(e);

      ToastNotifier({
        toastMessage: "Erro ao editar o usuário!",
        toastType: "error",
      });
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
    setIsValidCpf(
      validateCPF(value.replace(".", "").replace(".", "").replace("-", ""))
    );
  };

  const handleCloseModal = (e) => {
    if (e.keyCode === 27) setIsOpenAddUserModal(false);
  };

  document.addEventListener("keydown", handleCloseModal);

  return (
    <>
      <MainContainer onKeyDown={handleCloseModal}>
        <ModalForm>
          <Form onSubmit={handleSubmit}>
            <Title>Adicionar Usuário</Title>
            <Icon>
              <FontAwesomeIcon icon={faUserCircle} />
            </Icon>
            <FormContainer>
              <Container>
                <Label htmlFor="email">
                  <StrongText>Nome</StrongText>
                </Label>
                <CustomWrapper>
                  <Input
                    placeholder="Digite o seu nome"
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    name="name"
                    value={name}
                    required
                  />
                  <FontAwesomeIcon
                    icon={faUser}
                    style={{
                      position: "absolute",
                      left: "8px",
                      color: "#0f2027",
                      top: "calc(50% - 0.5em)",
                    }}
                    transform="up-2 right-5"
                  />
                </CustomWrapper>
                <Label htmlFor="password">
                  <StrongText>CPF</StrongText>
                </Label>
                <CustomWrapper>
                  <Input
                    placeholder="Digite o seu CPF"
                    onChange={(e) => {
                      setCpf(e.target.value);
                      handleCpfValidation(e.target.value);
                    }}
                    type="text"
                    name="cpf"
                    minLength={14}
                    maxLength={14}
                    value={formatCPF(cpf)}
                    required
                  />
                  <FontAwesomeIcon
                    icon={faIdCard}
                    style={{
                      position: "absolute",
                      left: "8px",
                      color: "#0f2027",
                      top: "calc(50% - 0.5em)",
                    }}
                    transform="up-2 right-5"
                  />
                </CustomWrapper>
                <Label htmlFor="password">
                  <StrongText>E-mail</StrongText>
                </Label>
                <CustomWrapper>
                  <Input
                    placeholder="Digite o seu e-mail"
                    onChange={(e) => {
                      setEmail(e.target.value);
                      handleEmailValidation(e.target.value);
                    }}
                    type="email"
                    name="email"
                    value={email}
                    required
                  />
                  <FontAwesomeIcon
                    icon={faAt}
                    style={{
                      position: "absolute",
                      left: "8px",
                      color: "#0f2027",
                      top: "calc(50% - 0.5em)",
                    }}
                    transform="up-2 right-5"
                  />
                </CustomWrapper>
                <Label htmlFor="password">
                  <StrongText>Senha</StrongText>
                </Label>
                <CustomWrapper>
                  <Input
                    placeholder="Digite a sua senha"
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    name="password"
                    minLength={8}
                    required
                  />
                  <FontAwesomeIcon
                    icon={faKey}
                    style={{
                      position: "absolute",
                      left: "8px",
                      color: "#0f2027",
                      top: "calc(50% - 0.5em)",
                    }}
                    transform="up-2 right-5"
                  />
                </CustomWrapper>
                <Label htmlFor="password">
                  <StrongText>Confirmação de Senha</StrongText>
                </Label>
                <CustomWrapper>
                  <Input
                    placeholder="Confirme a sua senha"
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                    type="password"
                    name="passwordConfirmation"
                    minLength={8}
                    required
                  />
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    style={{
                      position: "absolute",
                      left: "8px",
                      color: "#0f2027",
                      top: "calc(50% - 0.5em)",
                    }}
                    transform="up-2 right-5"
                  />
                </CustomWrapper>
                <Label htmlFor="password">
                  <StrongText>Avatar</StrongText>
                </Label>
                <CustomWrapper>
                  <Input
                    placeholder="Cole aqui o link do seu avatar"
                    onChange={(e) => setAvatarLink(e.target.value)}
                    type="url"
                    name="avatarLink"
                    value={avatarLink}
                    required
                  />
                  <FontAwesomeIcon
                    icon={faPortrait}
                    style={{
                      position: "absolute",
                      left: "8px",
                      color: "#0f2027",
                      top: "calc(50% - 0.5em)",
                    }}
                    transform="up-2 right-5"
                  />
                </CustomWrapper>
              </Container>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "36px",
                }}
              >
                <Button type="submit">
                  <ButtonText>Salvar</ButtonText>
                </Button>
              </div>
            </FormContainer>
          </Form>
        </ModalForm>
      </MainContainer>
    </>
  );
}
