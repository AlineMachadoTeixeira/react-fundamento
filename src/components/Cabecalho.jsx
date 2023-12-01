import Menu from "./Menu";

/* Importação da lib Styled Components */
import styled from "styled-components";
// styled.header, pois estamos estilizado o cabeçalho é um jeito diferente de chamar a fução
const StyledCabecalho = styled.header`
  background-color: black;
  color: white;
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
