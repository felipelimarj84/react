import React from "react";
import Modal from "./index";
import { ThemeProvider } from "styled-components";
import theme from "../../theme";
import "jest-styled-components";

import { cleanup, render } from "@testing-library/react";

afterEach(cleanup);

it("<Modal/> matches snapshot basic", () => {
  const component = render(
    <ThemeProvider theme={theme}>
      <Modal onClose={() => {}}>
        <h2>Modal do App</h2>
        <p>Isso é um parágrafo</p>
      </Modal>
    </ThemeProvider>
  );

  expect(component.container).toMatchSnapshot();
});
