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

  @media screen and (min-width: 650px) {
    .artigos {
      display: flex;
      justify-content: space-between;
    }

    .artigos article {
      width: 32%;
    }
  }
`;

function Conteudo() {
  const lancamentos = ["1980", "1970", "1960"];

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
        <div className="artigos">
          <Artigo
            icone="💍"
            titulo="Senhor dos Anéis"
            descricao="livro criado por tokien"
            data={lancamentos[0]}
          />
          <Artigo
            icone="👑"
            titulo="Game Of Thrones"
            descricao="Aventura maluca com gente sempre morrendo"
            data={lancamentos[1]}
          />
          <Artigo
            icone="📖"
            titulo="HTML e CSS"
            descricao="Fonte de estudos para quem quer começar no Front-End"
            data={lancamentos[2]}
          />
        </div>
      </section>
    </StyledConteudo>
  );
}

export default Conteudo;
//Exporte ele para App.jsx

//Conteudo é o componente pai do artigo
