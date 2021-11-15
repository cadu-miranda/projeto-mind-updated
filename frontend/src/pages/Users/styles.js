import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  margin-left: 20vw;
  padding: 120px 40px;
  background-color: #e5e5e5;
`;

export const TableContainer = styled.table`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background-color: #fff;
`;

export const TitleContainer = styled.div`
  display: flex;
  margin-top: 28px;
  margin-left: 60px;
`;

export const TableHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
`;

export const MainTitle = styled.h1`
  display: flex;
  color: #3f4254;
  text-align: center;
  font-weight: 500;
  font-size: 26px;
  padding: 6px 0px;
`;

export const SearchContainer = styled.div`
  display: flex;
  margin-top: 36px;
`;

export const SearchInput = styled.input`
  display: flex;
  border: none;
  outline: none;
  padding: 6px 22px;
  font-weight: 400;
  font-size: 14px;
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const IconContainer = styled.div`
  display: flex;
  margin-right: 80px;
  margin-top: 24px;
`;

export const TableContent = styled.div`
  margin-top: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-bottom: 1rem;
`;

export const TableRow = styled.tr`
  display: flex;
  margin-top: 16px;
  height: 80px;
  width: 100%;
`;

export const TableColumn = styled.td`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;

export const VerticalLine = styled.hr`
  display: flex;
  height: 60px;
  width: 4px;
  border-radius: 2px;
  background-color: #24424d;
  border: none;
`;

export const EmailText = styled.b``;

export const EmailLabel = styled.label`
  margin-left: 5px;
`;

export const Text = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${(props) => (props.hasMarginBottom ? "5px" : "")};
  margin-top: ${(props) => (props.hasMarginTop ? "5px" : "")};
  font-weight: 400;
  font-size: 16px;
  text-align: center;
  color: ${(props) => (props.isRed ? "#24424d" : "#626679")};
  font-weight: ${(props) => (props.isBold ? "bold" : "normal")};
`;

export const PaginationContainer = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  margin-top: 30px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 15px;
  padding: 0px 55px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  color: #626679;
  padding: 8px 20px;
  border-radius: 8px;
  border: none;
  outline: none;
  cursor: pointer;
  box-shadow: 0px 4px 4px #f2f4fa;
  user-select: none;
  font-weight: 400;
  font-size: 12px;
  &:active {
    box-shadow: none;
  }
`;

export const PagesSelection = styled.div`
  display: flex;
`;

export const Pages = styled.button`
  background-color: ${(props) => (props.isSelected ? "#24424d" : "#fff")};
  color: ${(props) => (props.isSelected ? "#fff" : "#626679")};
  width: 35px;
  height: 35px;
  border-radius: 8px;
  border: none;
  outline: none;
  cursor: pointer;
  user-select: none;
  margin: 0px 10px;
  font-weight: 400;
  font-size: 12px;
  &:active {
    box-shadow: none;
  }
`;
