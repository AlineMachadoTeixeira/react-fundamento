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
        <h2>Teste</h2>
      </main>
    </>
  );
}

export default App;
//export default, pois sempre vai ser um

// arrow function
// const App = () =>{

// }
