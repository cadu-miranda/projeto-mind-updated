import React, { useState, useEffect } from "react";
import { api } from "../../services/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faMinus,
  faEdit,
  faTrash,
  faSearch,
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";
import AddUserModal from "../../components/UsersModals/AddUserModal";
import EditUserModal from "../../components/UsersModals/EditUserModal";
import DeleteUserModal from "../../components/UsersModals/DeleteUserModal";
import {
  MainContainer,
  TableContainer,
  TableHeader,
  TitleContainer,
  MainTitle,
  SearchContainer,
  SearchInput,
  Icon,
  IconContainer,
  TableContent,
  TableRow,
  TableColumn,
  VerticalLine,
  Text,
  PaginationContainer,
  ButtonContainer,
  Button,
  PagesSelection,
  Pages,
} from "./styles";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [allPages, setAllPages] = useState([]);
  const [listPerPage, setListPerPage] = useState([]);
  const [selectedRow, setSelectedRow] = useState();
  const [isOpenAddUserModal, setIsOpenAddUserModal] = useState(false);
  const [isOpenEditUserModal, setIsOpenEditUserModal] = useState(false);
  const [isOpenDeleteUserModal, setIsOpenDeleteUserModal] = useState(false);

  const lastPage = allPages.length;
  const MAX_ITEMS = 8;
  const first =
    lastPage > 8
      ? page == 1 || page == 2 || page == 3
        ? 1
        : page > lastPage - 5
        ? lastPage - 7
        : page - 2
      : 1;

  useEffect(() => {
    if (listPerPage.length === 0 && page > 1) setPage(allPages.length);
    // Make sure to go to the last page if all tasks in the current page are deleted
    else if (listPerPage.length === 0 && page === 1) setPage(1);
    else {
    }
  }, [listPerPage.length, page]);

  useEffect(() => {
    callListAllUsers();
  }, []);

  useEffect(() => {
    const allUsers = users;
    let auxUsers = [];

    allUsers.map((value, index) => {
      if (index >= 4 * (page - 1) && index < 4 * page) {
        auxUsers.push(value);
      }

      setListPerPage(auxUsers);
    });
  }, [page]);

  const callListAllUsers = async () => {
    try {
      const allUsers = await api.get("/users");

      let auxUsers = [];

      const allPages = Math.ceil(allUsers.data.length / 4);

      const pagination = [];

      for (let i = 1; i <= allPages; i++) {
        pagination.push(i);
      }

      setAllPages(pagination);

      allUsers.data.map((value, index) => {
        if (index >= 4 * (page - 1) && index < 4 * page) {
          auxUsers.push(value);
        }
      });

      setListPerPage(auxUsers);
      setUsers(allUsers.data);
    } catch (e) {
      console.log(e);
    }
  };

  const onPageChange = (item) => {
    if (lastPage + 1 < item || item < 1) {
      return;
    }
    setPage(item);
  };

  const filterListBySearch = (search) => {
    if (search.trim() == "") {
      const allUsers = users;
      let auxUsers = [];

      allUsers.map((value, index) => {
        if (index >= 4 * (page - 1) && index < 4 * page) {
          auxUsers.push(value);
        }
      });

      return setListPerPage(auxUsers);
    }

    const result = users.filter(
      (item) =>
        item.name
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .indexOf(
            search
              .toLowerCase()
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
          ) !== -1 ||
        item.email.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
        (item.cpf.replace(".", "").replace(".", "").replace("-", "") !== null &&
          item.cpf
            .replace(".", "")
            .replace(".", "")
            .replace("-", "")
            .indexOf(
              search.replace(".", "").replace(".", "").replace("-", "")
            ) !== -1)
    );

    setListPerPage(result);
  };

  return (
    <>
      <Header />
      <Sidebar />
      <Footer />
      {isOpenAddUserModal ? (
        <AddUserModal
          setIsOpenAddUserModal={setIsOpenAddUserModal}
          callListAllUsers={callListAllUsers}
        />
      ) : (
        false
      )}
      {isOpenEditUserModal ? (
        <EditUserModal
          setIsOpenEditUserModal={setIsOpenEditUserModal}
          callListAllUsers={callListAllUsers}
          selectedRow={selectedRow}
        />
      ) : (
        false
      )}
      {isOpenDeleteUserModal ? (
        <DeleteUserModal
          setIsOpenDeleteUserModal={setIsOpenDeleteUserModal}
          callListAllUsers={callListAllUsers}
          selectedRow={selectedRow}
        />
      ) : (
        false
      )}
      <MainContainer>
        <TableContainer>
          <TableHeader>
            <TitleContainer>
              <MainTitle>Usuários</MainTitle>
            </TitleContainer>
            <SearchContainer>
              <Icon>
                <FontAwesomeIcon
                  icon={faSearch}
                  color="#24424d"
                  style={{
                    fontSize: "20px",
                  }}
                />
              </Icon>
              <SearchInput
                onChange={(e) =>
                  filterListBySearch(e.target.value.toLowerCase())
                }
                type="text"
                placeholder="Buscar"
              />
            </SearchContainer>
            <IconContainer>
              <Icon>
                {!isOpenAddUserModal ? (
                  <FontAwesomeIcon
                    icon={faPlus}
                    onClick={() => setIsOpenAddUserModal(true)}
                    color="#24424d"
                    style={{
                      cursor: "pointer",
                      marginRight: "20px",
                      fontSize: "18px",
                    }}
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faMinus}
                    color="#24424d"
                    style={{
                      cursor: "pointer",
                      marginRight: "20px",
                      fontSize: "18px",
                    }}
                  />
                )}
              </Icon>
            </IconContainer>
          </TableHeader>
          <TableContent>
            {!users.length ? (
              <Text>Nenhum usuário encontrado. Tente novamente!</Text>
            ) : (
              users.map((item, index) => {
                return (
                  <TableRow key={index} onClick={() => setSelectedRow(item)}>
                    <TableColumn>
                      <VerticalLine />
                    </TableColumn>
                    <TableColumn
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        minWidth: "230px",
                        maxWidth: "230px",
                      }}
                    >
                      <Text isBold hasMarginTop>
                        {item.name}
                      </Text>
                    </TableColumn>
                    <TableColumn>
                      <Text isRed isBold hasMarginBottom>
                        E-mail
                      </Text>
                      <Text hasMarginTop>{item.email}</Text>
                    </TableColumn>
                    <TableColumn>
                      <Text isRed isBold hasMarginBottom>
                        CPF
                      </Text>
                      <Text hasMarginTop>{item.cpf}</Text>
                    </TableColumn>
                    <TableColumn>
                      <Text isRed isBold hasMarginBottom>
                        Avatar
                      </Text>
                      <img
                        src={item.avatar}
                        style={{
                          width: "50px",
                          height: "50px",
                          borderRadius: "25px",
                        }}
                      />
                    </TableColumn>
                    <TableColumn>
                      <Icon>
                        <FontAwesomeIcon
                          onClick={() => setIsOpenEditUserModal(true)}
                          icon={faEdit}
                          color="#24424d"
                          style={{
                            cursor: "pointer",
                            marginRight: "20px",
                            fontSize: "22px",
                          }}
                        />
                        <FontAwesomeIcon
                          onClick={() => setIsOpenDeleteUserModal(true)}
                          icon={faTrash}
                          color="#24424d"
                          style={{
                            cursor: "pointer",
                            fontSize: "22px",
                          }}
                        />
                      </Icon>
                    </TableColumn>
                  </TableRow>
                );
              })
            )}
            <PaginationContainer>
              <ButtonContainer>
                <Button
                  disabled={page === 1}
                  block={page === 1}
                  onClick={() => onPageChange(page - 1)}
                >
                  <FontAwesomeIcon
                    icon={faArrowLeft}
                    color="#24424d"
                    size={22}
                    style={{
                      cursor: "pointer",
                    }}
                  />
                  Voltar
                </Button>
                <PagesSelection>
                  {Array.from({
                    length: Math.min(
                      MAX_ITEMS > lastPage ? lastPage : MAX_ITEMS,
                      lastPage
                    ),
                  })
                    .map((_, index) => {
                      return index + first <= lastPage && index + first;
                    })
                    .map((item, index) => (
                      <Pages
                        key={index}
                        onClick={() => onPageChange(item)}
                        style={
                          item === page
                            ? { color: "#fff", backgroundColor: "#24424d" }
                            : {}
                        }
                      >
                        {item}
                      </Pages>
                    ))}
                </PagesSelection>
                <Button
                  block={lastPage <= page}
                  onClick={() => onPageChange(page + 1)}
                  disabled={lastPage <= page}
                >
                  Próximo
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    color="#24424d"
                    size={22}
                    style={{
                      cursor: "pointer",
                    }}
                  />
                </Button>
              </ButtonContainer>
            </PaginationContainer>
          </TableContent>
        </TableContainer>
      </MainContainer>
    </>
  );
}
