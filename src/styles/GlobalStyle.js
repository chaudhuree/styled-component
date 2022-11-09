import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
  width: 100%;
height: 100vh;
display: grid;
place-items: center;
background-color:rgb(112, 229, 204);
overflow: hidden;
}

`