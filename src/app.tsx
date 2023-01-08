import * as React from "react";
import styled from "styled-components";
import Header from "./header";

const Content = styled.div`
  padding: 8px;
`;

const App: React.FunctionComponent<AppProps> = (props) => {
  return (
    <>
      <Header></Header>
      <Content>Work In Progress</Content>
    </>
  );
};

App.displayName = "App";

export default App;

export interface AppProps {}
