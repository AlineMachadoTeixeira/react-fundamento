import styled from "styled-components"; // dica começa escrever styled que aparece
import Artigo from "./Artigo.jsx";
import cursos from "../api/cursos.js"; // importação da api de mentirinha
import { useState } from "react";

const StyledCursos = styled.section`
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

function Cursos() {
  /* Criando um gerenciador de state para mudança/filtro de categorias. Inicialmente, começa como null pois ainda não temos um escolha/seleção de categoria (aparece tudo) */
  const [categoria, setCategoria] = useState(null); //Digite useState  para aparecer a importação na linha 6

  const aplicarFiltro = (event) => {
    //capturamos (após o clique) o texto escrito em cada botão
    const categoriaEscolhida = event.currentTarget.innerText;

    //E em seguida passamos este texto para o state de categoria.
    setCategoria(categoriaEscolhida);
  };

  /* exercicio fazer limpa as todas as categorias linha 89*/
  // const limparFiltro = () => {
  //   setCategoria(null);
  // };

  /* Gerando um novo array de cursos filtrados */
  const cursosFiltrados = cursos.filter((curso) => {
    /* Se o state categoria for igual a uma 
    das categorias dos cursos, então será retornada
    a lista de cursos daquela categoria. Senão, será 
    retornada lista completa devido ao state ser null (ou seja,
    não há uma categoria para filtrar) */
    return curso.categoria === categoria || categoria === null; // categoria variavel do useState linha 45
  });

  /* Guardando a quantidade de cursos filtrados linha 114 */
  const quantidade = cursosFiltrados.length;

  return (
    //era main no lugar StyledCursos
    <StyledCursos>
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
              <button onClick={aplicarFiltro}>Mobile</button>
              <button onClick={aplicarFiltro}>CSS</button>
              {/* exercicio fazer limpa as todas as categorias*/}
              {/* <button onClick={limparFiltro}>🧹 Limpar Filtro</button>   função linha 56   outra forma de fazer */}
              {categoria && (
                <button onClick={() => setCategoria(null)}>
                  🧹 Limpar Filtro
                </button>
              )}
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

          <p>
            Quantidade de cursos: <b> {quantidade}</b>
          </p>

          {/* Se quantidade for zero (ou seja, não tem cursos da categoria filtrada). então mostre a mensagem */}
          {quantidade === 0 && (
            <p style={{ color: "red", textAlign: "center" }}>
              Não há cursos desta categoria!
            </p>
          )}
        </div>

        <div className="artigos">
          {/* antes era cursos.map((curso) trocamos para cursosFiltrados.map((curso) da const linha 56 */}
          {cursosFiltrados.map((curso) => (
            <Artigo
              key={curso.id} // para tirar o erro do console, mas não vai aparecer na tela. Só se você chamar no Artigo.jsx
              categoria={curso.categoria}
              titulo={curso.titulo}
              preco={curso.preco}
            />
          ))}
        </div>
      </section>
    </StyledCursos>
  );
}

export default Cursos;
//Exporte ele para App.jsx

//Conteudo é o componente pai do artigo
