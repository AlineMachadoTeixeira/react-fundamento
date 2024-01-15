import { useState } from "react"; // importação da linha 5 useState();. Primeiro escreve useState. O da linha 5 que puxa aqui.

function Produtos() {
  /* O state "produtos" é inicializado como array vazio. Posteriomente (após o carregamento dos dados da API), ele será preenchido com os objetos/produtos */

  const [produtos, setProdutos] = useState([]);

  const carregarDados = async () => {
    try {
      const resposta = await fetch(`https://fakestoreapi.com/products`);
      const dados = await resposta.json();
      console.log(dados);
    } catch (error) {
      console.error("Houve um erro: " + error);
    }
  };

  carregarDados();

  return <h2>Produtos</h2>;
}

export default Produtos;
