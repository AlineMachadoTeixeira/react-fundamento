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

  h1 {
    cursor: pointer;
  }
`;

function Cabecalho() {
  return (
    /* trocamos o header  por StyledCabecalho*/
    <StyledCabecalho>
      {/* Propriedade de evento que executará, após o clique, uma função intermediária que fará ações (chamar outras funções, executar outros processos etc ) */}
      <h1
        onClick={() => {
          alert("Exemplo 1");
        }}
      >
        Olá Mundo, React!😉
      </h1>
      <hr />

      <Menu />
    </StyledCabecalho>
  );
}

export default Cabecalho;
//Exporte ele para App.jsx
