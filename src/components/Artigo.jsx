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

  .artigos article {
    width: 32%;
  }
`;

function Artigo() {
  return (
    // era article ficou StyledArtigo
    <StyledArtigo>
      <h3>Artigo 1</h3>
      <p>Conteúdo do artigo 1.....</p>
    </StyledArtigo>
  );
}

export default Artigo;
//Exporte ele para Conteudo.jsx
