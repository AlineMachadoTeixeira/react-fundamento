function Rodape() {
  const exemploEstilos = {
    backgroundColor: "lightblue",
    padding: "2%",
    color: "blue",
    border: "solid 4px #f00",
  };
  return (
    <footer style={exemploEstilos}>
      {/* CSS inline */}
      <h2>Rodapé da aplicação</h2>
    </footer>
  );
}

export default Rodape;
//Exporte ele para App.jsx
