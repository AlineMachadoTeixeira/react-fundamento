import styled from "styled-components"; // dica começa escrever styled que aparece
import Artigo from "./Artigo";

const StyledConteudo = styled.main`
  width: 90vw;
  margin: 1rem auto;
  background-color: aliceblue;
  padding: 1rem;
  box-shadow: darkblue 0 0 1px inset; //inset sobra vai para dentro

  h2,
  p {
    padding: 0.2rem 0;
  }
`;

function Conteudo() {
  return (
    //era main no lugar StyledConteudo
    <StyledConteudo>
      <section>
        <h2>Conteúdo da aplicação</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          totam ipsam unde nobis eaque fugiat qui molestiae dolores. Quas, ad!
        </p>

        {/* Reaproveitamento de Componentes */}
        <Artigo />
        <Artigo />
        <Artigo />
      </section>
    </StyledConteudo>
  );
}

export default Conteudo;
//Exporte ele para App.jsx
