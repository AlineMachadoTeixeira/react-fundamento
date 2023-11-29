//precisa começar com letra maiúscula.
/* No começo do return tem <>   e no final um </>  é um fragmento tipo um div sem a palavra div escrita.  <fragmant> tem lugares que vai está escrito fragmant dentro <>. Para isso precisa de um import */
function App() {
  return (
    <>
      <header>
        <h1>Olá Mundo React!</h1>
        <hr />
        <nav>
          <a href="">Home</a>
          <a href="">Produtos</a>
          <a href="">Contato</a>
        </nav>
      </header>

      {/* shift alt A -- Comentario no meio do JSX
             É normal ficar entre {} nessa situação */}

      <main>
        <section>
          <h2>Conteúdo da aolicação</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            totam ipsam unde nobis eaque fugiat qui molestiae dolores. Quas, ad!
          </p>

          <article>
            <h3>Artigo 1</h3>
            <p>Conteúdo do artigo 1.....</p>
          </article>

          <article>
            <h3>Artigo 2</h3>
            <p>Conteúdo do artigo 2.....</p>
          </article>

          <article>
            <h3>Artigo 3</h3>
            <p>Conteúdo do artigo 3.....</p>
          </article>
        </section>
      </main>

      <footer>
        <h2>Rodapé da aplicação</h2>
      </footer>
    </>
  );
}

export default App;
//export default, pois sempre vai ser um

// arrow function
// const App = () =>{

// }
