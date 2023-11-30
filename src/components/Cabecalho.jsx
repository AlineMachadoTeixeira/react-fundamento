import Menu from "./Menu";

/* Importação do módulo css como um objeto chamado estilos (o nome é a seu critério)  
importando css module precisa fazer assim para usar a class className={estilos.sombra}> linha 11*/
import estilos from "./Cabecalho.module.css";

function Cabecalho() {
  return (
    <header>
      <h1>
        <span className={estilos["destaque-texto"]}> Olá </span> Mundo,
        <span className={estilos.sombra}>React!</span>😉
      </h1>
      <hr />

      <Menu />
    </header>
  );
}

export default Cabecalho;
//Exporte ele para App.jsx
