import React from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Aside from "../../components/aside";

import * as S from "./styles";

export default function DefaultLayout(Page) {
 
  return () => (
    <S.Container>
      <div className={"header"}>
        <Header />
      </div>
      <div className={"aside"}>
        <Aside />
      </div>
      
      <div className={"main"}>
        <Page />
      </div>
      <div className={"footer"}>
        <Footer />
      </div>
    </S.Container>
  );
}
