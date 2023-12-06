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

  button {
    background-color: pink; /* Cor de fundo verde */
    color: black; /* Cor do texto branco */
    padding: 10px 20px; /* Espaçamento interno do botão */
    font-size: 16px; /* Tamanho da fonte */
    border: none; /* Remover a borda padrão do botão */
    border-radius: 5px; /* Borda arredondada */
    cursor: pointer; /* Alterar o cursor ao passar sobre o botão */
  }

  button:hover {
    background-color: #45a049; /* Cor de fundo mais escura no hover */
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
  /* função para o onClick do button Função que será chamada a partir do evento acionado por um componente/elemento. */
  const exemplo2 = () => {
    alert("Exemplo 2");
  };

  return (
    //era main no lugar StyledConteudo
    <StyledConteudo>
      <section>
        <h2>Conteúdo da aplicação</h2>

        <button onClick={exemplo2}>Exemplo 2</button>

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
