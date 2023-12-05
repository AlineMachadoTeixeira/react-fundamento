import styled from "styled-components";

const StyledArtigo = styled.article`
  background-color: #b6b6b665;
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
  return (
    // era article ficou StyledArtigo
    <StyledArtigo>
      <h3>{categoria}</h3>
      <p>{titulo}</p>
      <p>{formatadoReal}</p>
    </StyledArtigo>
  );
}

export default Artigo;
