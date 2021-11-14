import styled from "styled-components";

export const Form = styled.form`
  margin-top: 40px;
  border-radius: 3px;
  transition: 0.4s;
`;

export const Text = styled.h1`
  text-align: center;
  font-size: 18;
  margin-top: 5px;
  transition: 0.4s;
`;

export const Icon = styled.div`
  font-size: 110px;
  display: flex;
  justify-content: center;
  color: #4286f4;
  margin-top: 25px;
`;

export const FormContainer = styled.div`
  text-align: center;
  margin: 15px;
  padding: 20px;
  width: 30%;
  transition: 0.4s;
  margin-top: 1px;
  margin-bottom: 15px;
  margin-left: 35.3%;
`;

export const Container = styled.div`
  padding: 5px;
  text-align: left;
  transition: 0.4s;
`;

export const Label = styled.label`
  margin-top: 8px;
`;

export const StrongText = styled.strong``;

export const CustomWrapper = styled.div`
  position: relative;
`;

export const Input = styled.input`
  width: 100%;
  padding: 16px 8px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
  transition: 0.2s;
  border-radius: 5px;
  margin-bottom: 10px;
  border: 1px solid red;

  &:focus {
    outline: none;
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.4);
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

export const ButtonLink = styled.a`
  display: inline-block;
  background: #0f2027;
  background: -webkit-linear-gradient(to right, #2c5364, #203a43, #0f2027);
  background: linear-gradient(to right, #2c5364, #203a43, #0f2027);
  color: white;
  padding: 14px 0;
  margin-top: 20px;
  border: none;
  text-decoration: none;
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
