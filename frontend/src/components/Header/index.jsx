import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { ToastNotifier } from "../../helpers/ToastNotifier";
import { api } from "../../services/api";
import { DivHeader, Text, Link, Button } from "./styles.js";

export default function Header() {
  let history = useHistory();

  const [userToken] = useState(localStorage.getItem("user_token"));
  const [userId] = useState(localStorage.getItem("user_id"));
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    getUserName();
  }, []);

  useEffect(() => {
    const hours = new Date().getHours();

    if (hours < 12) setMessage("Bom dia");
    else if (hours >= 12 && hours < 18) setMessage("Boa tarde");
    else setMessage("Boa noite");
  }, []);

  const getUserName = async () => {
    const response = await api.get(`/users/${userId}`);

    setName(response.data.user?.name);
  };

  const handleLogout = () => {
    try {
      localStorage.removeItem("user_id");
      localStorage.removeItem("user_type");
      localStorage.removeItem("user_token");

      history.push("/login");

      ToastNotifier({
        toastMessage: "Usuário desconectado com sucesso!",
        toastType: "success",
      });
    } catch (e) {
      console.log(e);

      ToastNotifier({
        toastMessage: "Erro ao desconectar!",
        toastType: "error",
      });
    }
  };

  return (
    <>
      <DivHeader>
        {userToken ? (
          <Text hasPositionTop>
            {message}, {name}!
          </Text>
        ) : (
          <Text>
            <Link href="/">Projeto - Mind Consulting</Link>
          </Text>
        )}

        {userToken ? (
          <>
            <Button onClick={handleLogout}>Sair</Button>
          </>
        ) : (
          false
        )}
      </DivHeader>
    </>
  );
}
