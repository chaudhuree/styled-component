import styled, { ThemeProvider } from "styled-components"
const cssvalue = {
  BaseTheme: {
    color: "#310a5f",
    background: "salmon",
  },
  DarkTheme: {
    color: "white",
    background: "black",
  },
}
const Title = styled.h1`

    background: ${({ theme }) => theme.BaseTheme.background};
    color: ${({ theme }) => theme.BaseTheme.color};
    width: 100%;
    padding: 10px;

`
function App() {

  return (
    <ThemeProvider theme={cssvalue}>

        <Title>Theming is here</Title>

    </ThemeProvider>
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