import { Header } from "antd/es/layout/layout";
import styled from "styled-components";
import LogoTitle from "../../assets/logo-title.svg";
import Logo from "../../assets/logo.svg";
import avartar from "../../assets/avatar.svg";
import { Space } from "antd";
import { useState } from "react";
import { CreateGroupModal } from "../group/CreateGroupModal";
// import { kakaoLogin } from "../../api/auth";
// import { useAuthStore } from "../../stores/useAuthStore";

export default function CustomHeader() {
  const [isOpenCreateGroupModal, setOpenCreateGroupModal] = useState(false);

  // TODO: login function and require kakao modal
  // async function login() {
  //   const login = useAuthStore((state) => state.login);
  //   login(await kakaoLogin("some code"));
  // }

  // function logout() {
  //   const logout = useAuthStore((state) => state.logout);
  //   logout();
  // }

  return (
    <>
      <StyledHeader>
        <Space className="logo">
          <a href="/">
            <img src={Logo} />
          </a>
          <a href="/">
            <img src={LogoTitle} />
          </a>
        </Space>
        <Space className="link">
          <a href="/groups">search</a>
          <a onClick={() => setOpenCreateGroupModal((prev) => !prev)}>
            create group
          </a>
          <img src={avartar} />
        </Space>
      </StyledHeader>
      <CreateGroupModal
        open={isOpenCreateGroupModal}
        toggleModal={() => setOpenCreateGroupModal((prev) => !prev)}
      />
    </>
  );
}

const StyledHeader = styled(Header)`
  position: fixed;
  width: 100%;
  z-index: 1;
  top: 0;
  border-bottom: 1px solid rgba(158, 158, 158, 0.2);
  text-align: center;
  height: 8rem;
  padding-inline: 5rem;
  line-height: 64px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* font-size: 1.6rem; */
  .logo {
    display: flex;

    img {
      display: block;
    }
  }

  .link {
    display: flex;
    align-items: center;

    a {
      margin-right: 2rem;
      font-size: 1.6rem;
      color: black;
    }

    img {
      display: block;
    }
  }
`;
