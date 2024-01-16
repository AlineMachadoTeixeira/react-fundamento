import { useEffect } from "react"; //importação da linha 11 useEffect();. Primeiro escreve useEffect(). O da linha 10 que puxa
import { useState } from "react"; // importação da linha 7 useState();. Primeiro escreve useState. O da linha 7 que puxa aqui.

import Loading from "../components/Loading"; //importando componenete Loading.jsx
import { Link } from "react-router-dom";

function Produtos() {
  /* O state "produtos" é inicializado como array vazio. Posteriomente (após o carregamento dos dados da API), ele será preenchido com os objetos/produtos */

  const [produtos, setProdutos] = useState([]);

  /* State de loading (por padrão, inicia ativado/true) */
  const [loading, setLoading] = useState(true);

  /* Gerenciar efeito colateral do componente para gerenciamento dos dados da API
  
  Fluxo geral de funcionamento do código abaixo: 
  
  1) useEffect é carregado UMA VEZ e APÓS  a montagem do page (Produtos)
  Obs.: o [] indica que o useEffect não tem dependencia adicionais e que será executado somente UMA VEZ

  2) Em seguida, ele executa a função carregarDados

  3) Ao término dela, atualiza o state (produtos)
  
  */
  useEffect(() => {
    const carregarDados = async () => {
      try {
        const resposta = await fetch(`https://fakestoreapi.com/products`);
        const dados = await resposta.json();
        console.log(dados);
        setProdutos(dados); //adicionamos ao state
        setLoading(false); //desativamos o loading
      } catch (error) {
        console.error("Houve um erro: " + error);
      }
    };

    carregarDados();
  }, []);

  return (
    <article>
      <h2>Produtos</h2>

      {loading ? (
        // <p style={{ textAlign: "center" }}>
        //   <img src={imagemLoading} alt="Carregando..." />
        // </p> Antes era assim, mas importamos do Loading.jsx e ficou o de baixo
        <Loading />
      ) : (
        produtos.map((produto) => {
          return (
            <section key={produto.id}>
              <h3>{produto.title}</h3>
              <p>Preço: {produto.price}</p>
              <p>{produto.description}</p>
              <p>
                <Link to={`/produtos/${produto.id}`}>Ver detalhes</Link>
              </p>
            </section>
          );
        })
      )}
    </article>
  );
}

export default Produtos;
