import styled from "styled-components";

export const DivHeader = styled.header`
  background: #0f2027;
  background: -webkit-linear-gradient(to right, #2c5364, #203a43, #0f2027);
  background: linear-gradient(to right, #2c5364, #203a43, #0f2027);
  padding: 10px;
  overflow: hidden;
  white-space: nowrap;
  box-shadow: var(--shadow);
  text-align: center;
  color: white;
  cursor: pointer;
`;

export const Text = styled.h1`
  font-size: 1.8em;
`;

export const Link = styled.a`
  text-decoration: none;
  color: white;
`;
