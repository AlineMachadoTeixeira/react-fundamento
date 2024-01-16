import { useParams } from "react-router-dom"; // importação da linha 4 useState();. Primeiro escreve useParams. O da linha 4 que puxa aqui.

function DetalhesProduto() {
  const { id } = useParams();
  console.log(id);

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
