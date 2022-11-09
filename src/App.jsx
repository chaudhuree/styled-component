import styled from "styled-components"
import { GlobalStyle } from './styles/GlobalStyle'

const Title = styled.h1`

    background: black;
    color: white;
    width: 100% !important;
    padding: 10px !important;
    &:hover{
      box-shadow: 26px 34px 89px -8px rgba(207,70,209,0.64);
-webkit-box-shadow: 26px 34px 89px -8px rgba(207,70,209,0.64);
-moz-box-shadow: 26px 34px 89px -8px rgba(207,70,209,0.64);
    }

`
function App() {

  return (
    <>
      <GlobalStyle />
      <Title>Theming is here</Title>
    </>
  )
}

export default App


// another example

// import styled, { ThemeProvider } from "styled-components"
// const BaseTheme = {
//   color: '#222',
//   background: '#fff',
// }
// const DarkTheme = {
//   color: '#fff',
//   background: '#222',
// }

// const Container = styled.div`
//   padding: 2rem;
//   color: ${(props) => props.theme.color};
//   background: ${(props) => props.theme.background};
// `

// function App() {
//   const [baseTheme, setTheme] = useState(true)

//   const toggleTheme = () => {
//     setTheme(!baseTheme)
//   }
//   return (
//     <ThemeProvider theme={baseTheme ? BaseTheme : DarkTheme}>
//       <Container>
//         <h1>hello world</h1>
//         <button className='btn' onClick={toggleTheme}>
//           toggle me
//         </button>
//       </Container>
//     </ThemeProvider>
//   )
// }
// export default App