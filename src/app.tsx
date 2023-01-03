import * as React from "react";

const App: React.FunctionComponent<AppProps> = (props) => {
  return (
    <div>
      <h1>hello</h1>
    </div>
  );
};

App.displayName = "App";

export default App;

export interface AppProps {}
