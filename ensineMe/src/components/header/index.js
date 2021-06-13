import React from "react";
import * as S from "./styles";
import { useDispatch } from "react-redux";
import { logout } from "../../store/modules/auth";
import Button from "../button";



export default function Header() {
  const dispatch = useDispatch();
  return (

    <S.Container>
      <Button size={7} action={() => dispatch(logout())} title={"Logout"} />
    </S.Container>
  );
}
