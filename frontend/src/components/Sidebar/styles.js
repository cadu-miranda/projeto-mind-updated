import styled from "styled-components";
import { Link } from "react-router-dom";

export const MainContainer = styled.div`
  display: flex;
  min-height: 100vh;
  position: fixed;
  top: 0px;
  left: 0px;
  background-color: #e5e5e5;
`;

export const SidebarMain = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 20vw;
  min-height: 100vh;
  background-color: #fff;
  border-right: 1px solid #254552;
`;

export const DivLogo = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 110px;
  width: 100%;
  cursor: pointer;
  text-decoration: none;
`;

export const Logo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const DivContent = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 60px;
  margin: 10px auto;
  cursor: pointer;
  text-decoration: none;

  &:focus {
    border-right: 5px solid #000;
  }
`;

export const Text = styled.h1`
  margin-left: 20px;
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  text-align: right;
  color: #626679;
`;
