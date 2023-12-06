import { useState } from "react"; // Só escrever useState da linha 24 que aparece isso
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
  /* Usando gerenciamento de states
  Aqui definimos a chamada de uma função especial do React: "useState". Esta e outras funções iniciadas com o prefixo 'use' são conhecidas como React Hooks.
  
  No caso do useState, usando desestruturação, criamos uma variável que representa o valor do state (titulo) e uma função responsavel por atualizar o states (setTitulo)*/
  const [titulo, setTitulo] = useState("Olá Mundo, React!😉");

  return (
    /* trocamos o header  por StyledCabecalho*/
    <StyledCabecalho>
      <h1>{titulo}</h1> {/* antes era assim  <h1>Olá Mundo, React!😉</h1> */}
      <hr />
      <Menu />
    </StyledCabecalho>
  );
}

export default Cabecalho;
//Exporte ele para App.jsx
