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
  width: 650px;
  background-color: #fff;
  border-radius: 8px;
`;

export const Form = styled.form`
  margin-top: 60px;
  border-radius: 3px;
  transition: 0.4s;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 28px;
  margin-top: 5px;
  transition: 0.4s;
`;

export const Icon = styled.div`
  display: flex;
  justify-content: center;
  font-size: 110px;
  color: #4286f4;
  margin-top: 25px;
`;

export const FormContainer = styled.div`
  padding: 20px;
  transition: 0.4s;
`;

export const Container = styled.div``;

export const Label = styled.label`
  margin-top: 8px;
`;

export const StrongText = styled.strong``;

export const CustomWrapper = styled.div`
  position: relative;
`;

export const Input = styled.input`
  width: 100%;
  padding: 16px 36px;
  margin: 8px 0px;
  border: 1px solid #ccc;
  transition: 0.2s;
  border-radius: 5px;
  margin-bottom: 10px;

  &:focus {
    outline: none;
  }
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
  width: 40%;
  border-radius: 3px;
  transition: 0.4s;
  margin-left: 10px;

  &:hover {
    width: 50%;
    transition: 0.4s;
    opacity: 0.8;
  }
`;

export const ButtonText = styled.strong`
  font-size: 14px;
`;
