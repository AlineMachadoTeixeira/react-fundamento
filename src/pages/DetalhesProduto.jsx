import { useParams } from "react-router-dom"; // importação da linha 4 useState();. Primeiro escreve useParams. O da linha 4 que puxa aqui.

function DetalhesProduto() {
  /* Usamos o hook useParams do React Router Dom para ter acesso aos parâmetros da rota dinâmica neste caso, o parâmetro chamado "id" */
  const { id } = useParams();

  return (
    <article>
      <h2>Titulo...</h2>
      <p>
        <b>Categoria:</b> categoria:
      </p>
      <p>
        <b>Preço...</b> preço..
      </p>
      <p>Descrição...</p>
      <img src="" alt="" />
    </article>
  );
}

export default DetalhesProduto;
