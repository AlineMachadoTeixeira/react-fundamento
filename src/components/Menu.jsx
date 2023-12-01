import styled from "styled-components"; // dica começa escrever styled que aparece

const StyledMenu = styled.nav`
  height: 50px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  a {
    color: white;
    text-decoration: none;
    width: 30%;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 100ms;

    &:hover {
      /*era assim a:hover  colocamos o & --> & referência ao seletor pai (a) */
      background-color: pink;
      color: black;
      transform: scale(1.05);
    }
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
