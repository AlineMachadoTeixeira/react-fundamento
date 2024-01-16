import { useEffect, useState } from "react"; // importação da linha 10 useEffect() e useState  linha 8;. Primeiro escreve useParams.
import { useParams } from "react-router-dom"; // importação da linha 6 useState();. Primeiro escreve useParams. O da linha 6 que puxa aqui.

function DetalhesProduto() {
  /* Usamos o hook useParams do React Router Dom para ter acesso aos parâmetros da rota dinâmica neste caso, o parâmetro chamado "id" */
  const { id } = useParams();

  const [produto, setProduto] = useState({});

  useEffect(() => {
    const carregarDados = async () => {
      try {
        const resposta = await fetch(`https://fakestoreapi.com/products/${id}`);
        const dados = await resposta.json();
        setProduto(dados);
      } catch (error) {
        console.error("Erro ao carregar produto:" + error);
      }
    };
    carregarDados();
  }, [id]);

  return (
    <article>
      <h2>{produto.title}</h2>
      <p>
        <b>Categoria:</b> {produto.category}
      </p>
      <p>
        <b>Preço:</b> {produto.price}
      </p>
      <p> {produto.description}</p>
      <img src={produto.image} alt="" style={{ width: "300px" }} />
    </article>
  );
}

export default DetalhesProduto;
