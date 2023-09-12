import React, { useEffect } from "react";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import UserStore from "../../../stores/UserStore";
import Flex from "../../atoms/Layouts/Flex";
import Button from "../../atoms/Button/Button";
import AuthApi from "../../../libs/apis/AuthApi";

const Header = () => {
  const navigate = useNavigate();
  const { isLoggedIn, nickname, setIsLoggedIn, setId, setType, setNickname } =
    UserStore();

  useEffect(() => {
    if (!isLoggedIn) {
      console.log("토큰 다시 파싱");
      let info = AuthApi.parseJwt(localStorage.getItem("accessToken")!);
      setId(info.id);
      setType(info.authType);
      setNickname(info.managerName);
      setIsLoggedIn(true);
    }
  }, []);

  const logout = () => {
    console.log("Log Out");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    setIsLoggedIn(false);
    setId(-1);
    setType(-1);
    setNickname("");
    navigate("/");
  };

  return (
    <header>
      <Link to="/adm">
        <img src={"/logo.png"} alt="반차 로고" height={50} />
      </Link>
      <Flex>
        <Button
          color="transparent"
          onClick={() => {
            navigate("/adm/info");
          }}>
          {nickname}
        </Button>
        <Button
          color="transparent"
          onClick={() => {
            logout();
          }}>
          로그아웃
        </Button>
      </Flex>
    </header>
  );
};

export default Header;
