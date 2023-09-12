import { styled } from "styled-components";
import { useCallback, useEffect, useState } from "react";
import Modal from "../components/atoms/Layouts/Modal";
import Spinner from "../components/atoms/Spinner/Spinner";
import Input from "../components/atoms/Input/Input";
import Button from "../components/atoms/Button/Button";
import Text from "../components/atoms/Text/Text";
import { useNavigate } from "react-router-dom";
import UserStore from "../stores/UserStore";
import AuthApi from "../libs/apis/AuthApi";
import useForm from "../libs/hooks/useForm";
import LogInValidation from "../libs/formValidates/LogInValidate";

export default function LoginPage() {
  const navigate = useNavigate();
  const { isLoggedIn, setIsLoggedIn, setEmail, setNickname, setId, setType } =
    UserStore();
  const [isOpen, setisOpen] = useState<boolean>(false);

  const login = useCallback((val: { email: string; password: string }) => {
    AuthApi.login(val.email, val.password).then((res) => {
      if (res.status === 200 && res.data.message !== "패스워드 불일치") {
        setIsLoggedIn(true);
        setEmail(val.email);
        let info = AuthApi.parseJwt(res.data["accessToken"]);
        setId(info.id);
        setType(info.authType);
        setNickname(info.managerName);
        navigate("/adm");
      } else {
        setisOpen(true);
        reset();
      }
    });
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/adm");
    }
  }, []);

  const { values, errors, isLoading, handleChange, handleSubmit, reset } =
    useForm({
      initialValues: { email: "", password: "" },
      onSubmit: login,
      validate: LogInValidation,
    });

  return (
    <Article>
      <Title>
        bancha
        <Subtitle>관리자 페이지</Subtitle>
      </Title>
      <section>
        {isLoading && (
          <Modal type={4}>
            <Spinner />
          </Modal>
        )}
        <LoginForm onSubmit={handleSubmit}>
          <Input
            name="email"
            border={false}
            width="20dvw"
            height="50px"
            value={values.email}
            placeholder="이메일"
            onChange={handleChange}
          />
          <Input
            type="password"
            name="password"
            border={false}
            width="20dvw"
            height="50px"
            value={values.password}
            placeholder="비밀번호"
            onChange={handleChange}
          />
          <Button onClick={() => {}} color="black" width="20dvw" height="50px">
            로그인
          </Button>
        </LoginForm>
        {isOpen && (
          <Modal
            type={2}
            closeModal={() => {
              setisOpen(false);
            }}>
            <Text height="30px" color="orange">
              로그인에 실패하였습니다.
            </Text>
          </Modal>
        )}
      </section>
    </Article>
  );
}

const Title = styled.div`
  color: #063e63;
  font-weight: 1000;
  font-size: 3rem;
`;
const Subtitle = styled.div`
  font-size: 2rem;
`;
const Article = styled.article`
  margin: 0 auto;
  padding-top: 30dvh;
  width: 20dvw;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;
const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
