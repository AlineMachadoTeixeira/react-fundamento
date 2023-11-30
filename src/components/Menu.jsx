import estilos from "./Menu.module.css";
function Menu() {
  return (
    <nav className={`${estilos["nav"]}  `}>
      <a className={`${estilos["nav"]}  `} href="">
        Home
      </a>
      <a href="">Produtos</a>
      <a href="">Contato</a>
    </nav>
  );
}

export default Menu;
//Exporte ele para Cabecalho.jsx
