function Rodape() {
  /* CSS inline com const */
  const exemploEstilos = {
    backgroundColor: "lightblue",
    padding: "2%",
    color: "blue",
    border: "solid 4px #f00",
  };
  return (
    <footer style={exemploEstilos}>
      {/* CSS inline na tag */}
      <h2 style={{ textAlign: "center" }}>Rodapé da aplicação</h2>
      <p className="destaque-texto  centralizar">Fundamentos de React</p>
      <p>
        {/* precisa colocar o nome className para usar class no jsx */}
        Experimentando <b className="sombra">classes</b>
      </p>
    </footer>
  );
}

export default Rodape;
//Exporte ele para App.jsx
