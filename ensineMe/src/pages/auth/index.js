import React, { useRef, useEffect } from "react";
import * as S from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../../store/modules/auth";
import { useHistory } from "react-router-dom"

export default function Auth() {
  const dispatch = useDispatch();
  const emailRef = useRef();
  const passwordRef = useRef();
  const token = useSelector((state) => state.auth.token);
  const history = useHistory()

  const login = (e) => {
    e.preventDefault();
    const data = {
      email: emailRef.current.value,
      senha: passwordRef.current.value,
    };
    dispatch(signIn(data));
  };
  useEffect(() => {
    if (token) {
      history.replace("/teste");
    }
  }, [token, history]);

  return (
    <S.Container>
      <div className="logo" />
      <form onSubmit={(e) => login(e)}>
        <label>E-mail</label>
        <input type="email"  id='email' ref={emailRef} />
        <label>Senha</label>
        <input type="password" id='password' ref={passwordRef} />
        <button type="submit">Continuar</button>
      </form>
    </S.Container>
  );
}
