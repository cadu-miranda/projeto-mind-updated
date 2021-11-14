import styled from "styled-components";

export const DivHeader = styled.header`
  display: block;
  background: #0f2027;
  background: -webkit-linear-gradient(to right, #2c5364, #203a43, #0f2027);
  background: linear-gradient(to right, #2c5364, #203a43, #0f2027);
  min-height: 110px;
  box-shadow: var(--shadow);
  text-align: center;
  color: white;
  position: relative;
`;

export const Text = styled.h1`
  position: relative;
  top: 40px;
  font-size: 1.8em;
`;

export const Link = styled.a`
  text-decoration: none;
  color: white;
`;

export const Button = styled.button`
  position: relative;
  left: 50rem;
  background: #fff;
  color: #0f2027;
  padding: 14px 0px;
  border: none;
  cursor: pointer;
  width: 130px;
  border-radius: 3px;
  transition: 0.4s;

  &:hover {
    background: #0f2027;
    color: #fff;
    transition: 500ms;
    border: 1px solid #fff;
  }
`;
