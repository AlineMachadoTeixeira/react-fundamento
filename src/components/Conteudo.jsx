import styled from "styled-components"; // dica começa escrever styled que aparece
import Artigo from "./Artigo";
import cursos from "../api/cursos.js"; // importação da api de mentirinha
import { useState } from "react";

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

  .filtros {
    margin: 1rem 0;
    padding: 1rem 0;
    border-top: solid 2px;
    border-bottom: solid 2px;
  }

  .filtros button {
    margin: 0.5rem;
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
  /* Criando um gerenciador de state para mudança/filtro de categorias. Inicialmente, começa como null pois ainda não temos um escolha/seleção de categoria (aparece tudo) */
  const [categoria, setCategoria] = useState(null); //Digite useState  para aparecer a importação na linha 6

  const aplicarFiltro = (event) => {
    //capturamos (após o clique) o texto escrito em cada botão
    const categoriaEscolhida = event.currentTarget.innerText;

    //E em seguida passamos este texto para o state de categoria.
    setCategoria(categoriaEscolhida);
  };
  return (
    //era main no lugar StyledConteudo
    <StyledConteudo>
      <section>
        <h2>Conteúdo da aplicação</h2>

        <p className="filtros">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          totam ipsam unde nobis eaque fugiat qui molestiae dolores. Quas, ad!
        </p>

        <div className="filtros">
          <p>
            <b>
              Filtra por: <button onClick={aplicarFiltro}>Front-End</button>
              <button onClick={aplicarFiltro}>Back-End</button>
              <button onClick={aplicarFiltro}>Design</button>
            </b>
          </p>

          {/* Renderização Condicional
          O texto/tag/componente somente será renderizado/exibido se o state categoria existir (ou seja, não é null, undefined, false) */}
          {
            categoria && (
              <p>
                Você escolheu: <b>{categoria}</b>
              </p>
            )
            /* e tipo isso o de cima:  if (categoria != null)  mostre texo do paragrafo */
          }
        </div>

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
