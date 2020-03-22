import React from "react";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import NavBar from "./components/navbar/nav-bar";
import Search from "./components/search/search";
import "./App.css";

// Colors002 - https://coolors.co/114b5f-028090-e4fde1-456990-f45b69
// Colors001 - https://coolors.co/50514f-f25f5c-ffe066-247ba0-70c1b3
const theme = createMuiTheme({
  palette: {
    primary: { main: "#373736" },
    secondary: { main: "#F45B69" }
  }
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <NavBar />
      <Search />
    </MuiThemeProvider>
  );
}

export default App;
