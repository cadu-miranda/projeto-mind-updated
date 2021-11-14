import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { api } from "../../services/api";
import { useHistory } from "react-router";
import { ToastNotifier } from "../../helpers/ToastNotifier";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKey, faUser, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import {
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
  ButtonLink,
} from "./styles";
import { formatCPF } from "../../utils/formatter";

export default function Login() {
  let history = useHistory();

  const [emailCpf, setEmailCpf] = useState("");
  const [password, setPassword] = useState("");
  const [isCpfSend, setIsCpfSend] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userData = isCpfSend
        ? { cpf: emailCpf, password }
        : { email: emailCpf, password };

      const response = await api.post("/login", userData);

      const userToken = response.data.token;
      const accessLevel = response.data.user.acess_level;

      console.log(response);

      if (userToken && response.status === 200) {
        localStorage.setItem("user_id", response.data.user.id);
        localStorage.setItem("user_type", accessLevel);
        localStorage.setItem("user_token", userToken);

        history.push("/users");

        ToastNotifier({
          toastMessage: "Usuário logado com sucesso!",
          toastType: "success",
        });
      }
    } catch (e) {
      console.log(e);

      ToastNotifier({
        toastMessage: "Erro ao fazer login!",
        toastType: "error",
      });
    }
  };

  return (
    <>
      <Header />
      <Footer />
      <Form onSubmit={handleSubmit}>
        <Title>Login</Title>
        <Icon>
          <FontAwesomeIcon icon={faUserCircle} />
        </Icon>
        <FormContainer>
          <Container>
            <Label htmlFor="email">
              <StrongText>{isCpfSend ? "CPF" : "E-mail"}</StrongText>
              <input
                type="checkbox"
                onChange={(e) => setIsCpfSend(e.target.checked)}
                style={{ marginLeft: "8px" }}
              />
            </Label>
            <CustomWrapper>
              <Input
                placeholder={`Digite seu ${isCpfSend ? "CPF" : "e-mail"}`}
                onChange={(e) => setEmailCpf(e.target.value)}
                type="text"
                name="emailCpf"
                value={isCpfSend ? formatCPF(emailCpf) : emailCpf}
                minLength={isCpfSend ? 14 : false}
                maxLength={isCpfSend ? 14 : false}
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
              <StrongText>Senha</StrongText>
            </Label>
            <CustomWrapper>
              <Input
                placeholder="Digite sua senha"
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                name="password"
                minLength={8}
                value={password}
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
          </Container>
          <Button type="submit">
            <ButtonText>ENTRAR</ButtonText>
          </Button>
          <ButtonLink href="/signup">
            <ButtonText>CADASTRE-SE</ButtonText>
          </ButtonLink>
        </FormContainer>
      </Form>
    </>
  );
}
