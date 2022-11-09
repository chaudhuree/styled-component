import styled from "styled-components";
function App() {

  return (
    <div >
      <BasicTitle>chaudhuree</BasicTitle>
      <DefaultButton>click <span>me</span></DefaultButton>
    </div>
  )
}

const BasicTitle = styled.h1`
  text-align: center;
  text-transform: uppercase;
`;
const DefaultButton = styled.button`
background: #645cff;
color:#fff;
border:none;
border-radius:0.25rem;
cursor: pointer;
text-transform:capitalize ;
padding: 0.25rem;
display: block;
width: 200px;
margin: 1rem auto;
span{
  color:salmon;
  &:after{
    content:'❤';
    color: #81f881;
    margin-left: 10px;
  }
}
&:hover{
  background-color:#433aee;
}
@media (max-width: 768px) {
  border:4px solid palegreen;
}
`
export default App
