import styled from "styled-components"; // dica começa escrever styled que aparece
import Artigo from "./Artigo";
import cursos from "../api/cursos.js"; // importação da api de mentirinha

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

  @media screen and (min-width: 650px) {
    .artigos {
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
    }

    .artigos article {
      width: 48%;
      margin: 1%;
    }
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

        <div className="artigos">
          {cursos.map((curso) => (
            <Artigo
              key={curso.id} // para tirar o erro do console, mas não vai aparecer na tela. Só se você chamar no Artigo.jsx
              categoria={curso.categoria}
              titulo={curso.titulo}
              preco={curso.preco}
            />
          ))}
        </div>
      </section>
    </StyledConteudo>
  );
}

export default Conteudo;
//Exporte ele para App.jsx

//Conteudo é o componente pai do artigo
