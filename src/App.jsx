import { createGlobalStyle } from "styled-components";
import Form from "./Form";

const GlobalStyle = createGlobalStyle`
	body{
		font-family: helvetica;
	}
`;
function App() {
  return (
		<>

    <GlobalStyle />
      <Form />
		</>
  );
}

export default App;
