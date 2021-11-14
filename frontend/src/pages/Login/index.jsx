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
  Text,
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

      if (response.status === 200) {
        history.push("/users");
        localStorage.setItem("token", response.data.token);

        ToastNotifier({
          toastMessage: "Usuário logado com sucesso!",
          toastType: "success",
        });
      }
    } catch (e) {
      console.log(e);

      ToastNotifier({
        toastMessage: "Erro ao fazer o login!",
        toastType: "error",
      });
    }
  };

  return (
    <>
      <Header />
      <Footer />
      <Form onSubmit={handleSubmit}>
        <Text>Login</Text>
        <Icon>
          <FontAwesomeIcon icon={faUserCircle} />
        </Icon>
        <FormContainer>
          <Container>
            <Label htmlFor="email">
              <StrongText>Login</StrongText>
            </Label>
            <CustomWrapper>
              <Input
                placeholder="Digite seu e-mail ou CPF"
                onChange={(e) => setEmailCpf(e.target.value)}
                type="text"
                name="email"
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
            <ButtonText>REGISTRAR-SE</ButtonText>
          </ButtonLink>
        </FormContainer>
      </Form>
    </>
  );
}
