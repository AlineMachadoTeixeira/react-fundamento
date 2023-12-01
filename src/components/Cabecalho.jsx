import Menu from "./Menu";

/* Importação da lib Styled Components */
import styled from "styled-components";
// styled.header, pois estamos estilizado o cabeçalho é um jeito diferente de chamar a fução
const StyledCabecalho = styled.header`
  background-color: black;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;

  hr {
    width: 50%;
    background-color: pink;
    border: none;
    height: 4px;
    margin: 8px auto;
  }
`;

function Cabecalho() {
  return (
    /* trocamos o header  por StyledCabecalho*/
    <StyledCabecalho>
      <h1>Olá Mundo, React!😉</h1>
      <hr />

      <Menu />
    </StyledCabecalho>
  );
}

export default Cabecalho;
//Exporte ele para App.jsx
