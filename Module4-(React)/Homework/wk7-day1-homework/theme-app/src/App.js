import  React from "react";
import styled, { SwitchTheme } from "styled-components";
import theme from "styled-theming";
import { Provider as ReduxProvider } from "react-redux";
import DarkThemeProvider from "./DarkThemeProvider";
import DarkThemeToggle from "./DarkThemeToggle";
import store from "./redux/store";
import './App.css';


export const theme1 = theme ("theme", {
  light: "#fff",
  dark: "#2d2d2d",
});

const Container = styled.div`
    ...
    background-color: ${theme1};
    `;

export const theme2 = theme("theme", {
  light: "#000",
  dark: "#fff",
})

const Container = styled.div `
      display: flex;
      flex-direction: column;
      width: 100vw;
      height: 100vh;
      align-items:center;
      justify-content: center;
      font-family: sans-serif`;

const SwitchTheme = styled.div `
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 50px;
      height:75px;`;


const App = () => {
  return (
    <React.Fragment>
      <ReduxProvider store={store}>
        {/* <ThemeProvider theme={{ theme: "dark"}}> */}
        <DarkThemeProvider>
            <SwitchTheme>
              <h1>Theme App</h1>
              <p>
                <DarkThemeToggle />
              </p>
            </SwitchTheme>
            <Container>
              <h2>Welcome!</h2>
              <h3>Full Stack Web Development</h3>
            </Container>
          </DarkThemeProvider>
        {/* </ThemeProvider> */}
      </ReduxProvider>
    </React.Fragment>
  )
}

export default App;
