import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faCogs } from "@fortawesome/free-solid-svg-icons";
import {
  MainContainer,
  SidebarMain,
  DivLogo,
  Logo,
  DivContent,
  Text,
} from "./styles";

export default function Sidebar() {
  const [userType] = useState(localStorage.getItem("user_type"));

  return (
    <>
      <MainContainer>
        <SidebarMain>
          <DivLogo to="#">
            <Logo src="https://wallpaperaccess.com/full/3949076.jpg" />
          </DivLogo>
          {+userType === 999 ? (
            <>
              <DivContent to="#">
                <FontAwesomeIcon
                  icon={faUsers}
                  fixedWidth
                  color="#254552"
                  style={{
                    marginLeft: "30px",
                    fontSize: "28px",
                  }}
                />
                <Text>Usuários</Text>
              </DivContent>
              <DivContent to="#">
                <FontAwesomeIcon
                  icon={faCogs}
                  fixedWidth
                  color="#254552"
                  style={{
                    marginLeft: "30px",
                    fontSize: "28px",
                  }}
                />
                <Text>Administração</Text>
              </DivContent>
            </>
          ) : (
            <>
              <DivContent to="#">
                <FontAwesomeIcon
                  icon={faUsers}
                  fixedWidth
                  color="#254552"
                  style={{
                    marginLeft: "30px",
                    fontSize: "28px",
                  }}
                />
                <Text>Usuários</Text>
              </DivContent>
            </>
          )}
        </SidebarMain>
      </MainContainer>
    </>
  );
}
