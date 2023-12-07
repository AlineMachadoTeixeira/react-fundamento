import Cabecalho from "./components/Cabecalho"; /* importando o Cabecalho */
import Home from "./pages/Home"; /* importando o Home.jsx */
import Produtos from "./pages/Produtos"; /* importando o Produtos.jsx */
import Contato from "./pages/Contato"; /* importando o Contato.jsx */
import Rodape from "./components/Rodape"; /* importando o Rodape */
import Container from "./components/Container"; /* importando o Container*/

//precisa começar com letra maiúscula.
/* No começo do return tem <>   e no final um  </>  é um fragmento tipo um div sem a palavra div escrita.  <fragmant> tem lugares que vai está escrito fragmant dentro <>. Para isso precisa de um import */
function App() {
  return (
    <>
      {/* importando o Cabecalho só escrever aqui o nome que vai puxar o de cima. Linha 1 */}
      <Cabecalho />

      <Container>
        <Home />
        <Produtos />
        <Contato />
      </Container>

      <Rodape />
    </>
  );
}

export default App;
//export default, pois sempre vai ser um

// arrow function
// const App = () =>{

// }
