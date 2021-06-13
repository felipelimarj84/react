import React, { useState } from "react";
import Button from "../../components/button";
// import Input from "../../components/input";
import Modal from "../../components/modal";
import DefaultLayout from "../../layout/default";
import * as S from "./styles";

function Cicero() {
  const [open, setOpen] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <S.Container color={open}>
      <p className="teste">Cicero</p>
      <Button
        size={10}
        color={"red"}
        title={"mudar"}
        action={() => setOpen(!open)}
      />
      <hr />

      <button onClick={() => setIsModalVisible(true)}>Abrir Modal</button>
      {isModalVisible ? (
        <Modal onClose={() => setIsModalVisible(false)}>
          <h2>Modal do App</h2>
          <p>Isso é um parágrafo</p>
        </Modal>
      ) : null}
    </S.Container>
  );
}

export default DefaultLayout(Cicero);
