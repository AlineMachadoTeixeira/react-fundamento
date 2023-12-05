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

  h4 {
    text-align: left;
  }

  ul {
    text-align: left;
  }

  ol {
    text-align: left;
  }

  details {
    text-align: left;
  }
`;

/* Definindo props para o componente */
function Artigo({ imagem, icone, titulo, descricao, data, children }) {
  return (
    // era article ficou StyledArtigo
    <StyledArtigo>
      <p>
        <img src={imagem} alt="" />
      </p>

      <h3>
        <span>{icone} </span>
        {titulo}
      </h3>
      <p>{descricao}</p>
      <p>
        Lançamento:
        <time> {data}</time>
      </p>

      {/* vem as coisas escritas entre > </Artigo> */}
      {children}
    </StyledArtigo>
  );
}

export default Artigo;
//Exporte ele para Conteudo.jsx

//Artigo é o componente filho do conteudo

//era assim e ficou como acima o de cima tiramos a palavra props
/* function Artigo(props) {
  return (
    // era article ficou StyledArtigo
    <StyledArtigo>
      <p>
        <img src={props.imagem} alt="" />
      </p>

      <h3>
        <span>{props.icone} </span>
        {props.titulo}
      </h3>
      <p>{props.descricao}</p>
      <p>
        Lançamento:
        <time> {props.data}</time>
      </p>

      {/* vem as coisas escritas entre > </Artigo> */
//   {props.children}
// /StyledArtigo>
//}
