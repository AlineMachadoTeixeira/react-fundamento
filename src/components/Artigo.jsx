import styled from "styled-components";

const StyledArtigo = styled.article`
  background-color: #b6b6b69b;
  padding: 1rem;
  margin: 0.5rem 0;
  /* display: flex;
  flex-direction: column; */
  text-align: center;

  h3 {
    border-bottom: 1px solid #b6b6b6;
    //width: 20%;
  }

  p {
    font-size: 1.1rem;
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
