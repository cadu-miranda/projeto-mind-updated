import styled from "styled-components";

export const DivHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background: #0f2027;
  background: -webkit-linear-gradient(to right, #2c5364, #203a43, #0f2027);
  background: linear-gradient(to right, #2c5364, #203a43, #0f2027);
  padding: 16px 10px;
  box-shadow: var(--shadow);
  text-align: center;
  color: white;
`;

export const Text = styled.h1`
  font-size: 1.8em;
`;

export const Link = styled.a`
  text-decoration: none;
  color: white;
`;

export const Button = styled.button`
  background: #fff;
  color: #0f2027;
  padding: 14px 0;
  border: none;
  cursor: pointer;
  width: 130px;
  border-radius: 3px;
  transition: 0.4s;

  &:hover {
    opacity: 0.8;
  }
`;
