import React from "react";
import ReactDOM from "react-dom";
import ListTable from "./index";
import { ThemeProvider } from "styled-components";
import theme from "../../theme";
import "jest-styled-components";

// import Enzyme, { shallow, render, mount } from 'enzyme';
// import toJson from 'enzyme-to-json';
// import Adapter from 'enzyme-adapter-react-16';
import { cleanup, render, fireEvent } from "@testing-library/react";

// Enzyme.configure({ adapter: new Adapter() })

afterEach(cleanup);

it("<ListTable/> matches snapshot basic", () => {
  const component = render(
    <ThemeProvider theme={theme}>
      <ListTable
        info={[{ teste: "teste1", teste2: "teste2", teste3: "teste3" }]}
        header={[
          { nome: "bonito", ref: "teste" },
          { nome: "bonitos", ref: "teste2" },
          { nome: "bonitos", ref: "teste3", buttons: [{ title: "teste" }] },
        ]}
      />
    </ThemeProvider>
  );

  expect(component.container).toMatchSnapshot();
});
