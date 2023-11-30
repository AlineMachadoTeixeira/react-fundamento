import Menu from "./Menu";
import "./Cabecalho.css";

function Cabecalho() {
  return (
    <header>
      <h1>
        Olá Mundo, <span className="sombra">React!</span>😉
      </h1>
      <hr />

      <Menu />
    </header>
  );
}

export default Cabecalho;
//Exporte ele para App.jsx
