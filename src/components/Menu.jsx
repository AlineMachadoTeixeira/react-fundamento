import styled from "styled-components"; // dica começa escrever styled que aparece

const StyledMenu = styled.nav`
  height: 50px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  a {
    color: white;
    text-decoration: none;
  }
  a:hover {
    background-color: pink;
    color: black;
  }
`;

function Menu() {
  return (
    //era nav no lugar do StyledMenu
    <StyledMenu>
      <a href="">Home</a>
      <a href="">Produtos</a>
      <a href="">Contato</a>
    </StyledMenu>
  );
}

export default Menu;
//Exporte ele para Cabecalho.jsx
