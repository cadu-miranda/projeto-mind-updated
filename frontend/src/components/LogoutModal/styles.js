import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  min-height: 100%;
  padding: 16px;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

export const ModalForm = styled.div`

  background-color: #fff;
  border-radius: 8px;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 28px;
  margin-top: 5px;
  transition: 0.4s;
  margin-bottom: 22px;
`;

export const FormContainer = styled.div`
  width: 600px;
  padding: 16px;
  transition: 0.4s;
  border-radius: 8px;
`;

export const Button = styled.button`
  display: inline-block;
  background: #0f2027;
  background: -webkit-linear-gradient(to right, #2c5364, #203a43, #0f2027);
  background: linear-gradient(to right, #2c5364, #203a43, #0f2027);
  color: white;
  padding: 14px 0;
  margin-top: 20px;
  border: none;
  cursor: pointer;
  width: 30%;
  border-radius: 3px;
  transition: 0.4s;
  margin-left: 10px;

  &:hover {
    width: 36%;
    transition: 0.4s;
    opacity: 0.8;
  }
`;

export const ButtonText = styled.strong`
  font-size: 14px;
`;
