import Artigo from "./Artigo";

function Conteudo() {
  return (
    <main>
      <section>
        <h2>Conteúdo da aplicação</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          totam ipsam unde nobis eaque fugiat qui molestiae dolores. Quas, ad!
        </p>

        {/* Reaproveitamento de Componentes */}
        <Artigo />
        <Artigo />
        <Artigo />
      </section>
    </main>
  );
}

export default Conteudo;
//Exporte ele para App.jsx
