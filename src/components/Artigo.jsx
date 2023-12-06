import { useState } from "react";
import styled from "styled-components";

const StyledArtigo = styled.article`
  //background-color: #9b9999;
  padding: 1rem;
  margin: 0.5rem 0;
  text-align: center;

  h3 {
    border-bottom: 1px solid #b6b6b6;
  }

  p {
    font-size: 1.1rem;
  }
`;

/* Definindo props para o componente */
function Artigo({ titulo, categoria, preco }) {
  const formatadoReal = preco.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  }); // era o preco da linha 29 ficou formatadoReal, pois usamos uma função para formatar o preço

  const [cor, setCor] = useState("gray"); //Só escrever useState para fazer o import linha 1 depois o resto

  const mudarCor = () => {
    setCor(cor == "gray" ? "pink" : "gray");
  };

  //var variavel = condicao ? valorSeTrue : valorSeFalse;

  return (
    // era article ficou StyledArtigo
    <StyledArtigo onClick={mudarCor} style={{ background: cor }}>
      <h3>{categoria}</h3>
      <p>
        <b>Cursos: </b>
        {titulo}
      </p>
      <p>
        <b>Preço: </b>
        {formatadoReal}
      </p>
    </StyledArtigo>
  );
}

export default Artigo;
