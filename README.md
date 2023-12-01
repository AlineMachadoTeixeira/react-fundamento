# Fundamento de React ,

- SE der erro e a pagina não carrega no terminal escreve npm run dev e copie o local exemplo: http://localhost:5173/
  PS C:\mobile\react-fundamento> `npm run dev`
- `npm run dev -- --host 0.0.0.0 --open` Entrar direto e abre o navegador já com a pagina
  Local: http://localhost:5173/ (computador) ➜ Network: http://10.20.46.47:5173/(celular)
- cls --> limpar pasta
- dir --> para achar pasta
- cd --> acha arquivo um por um
- node espaço +nome da pasta --> ver o resultado que está na pasta com console.log
- cd.. --> volta algumas pastas ou uma pasta
- ctrl +C --> para parar o CMD ou qualquer comando que você fez

ORDEM DAS BRANCHS

## 00-projeto-resetado

## 01-componentes-jsx

## 02-separacao-de-componentes

## 03-subcomponentes

## 04-estilos

### CSS in JS

- CSS inline: aplicando via atributo style da tag usando sintaxe JS, ou seja, objeto com propriedades. No footer tem exemplo de css inline

- CSS externo e global usando arquivo.css e importando no main.jsx usamos o mome index.css

- CSS Module: arquivo CSS especial relacionando ao componente que desejamos estilizar. Normalmente, nomeia-se o arquivo como "NomeComponente.module.css". A vantagem de usar CSS Modules é criar um escopo de estilização evitando complitos de classes com o mesmo nome.

## 05-etyled-components (criada apartir da BRANCH 4)

site --> https://styled-components.com/ e digitar o comando abaixo no terminal para instalar

no terminal na pasta escreva C:\mobile\react-fundamento>`npm install styled-components` para instalar styled-components

## Informações de gerais

A renderizalçao ocorre na seguinte sequencia:

index.html <- main.jsx <- App.jsx

{/_ shift alt A -- Comentario dentro do JSX _/} pode ser uma chamada de função coisa de JS usa

### vitejs.dev/guide

1. npm create vite@latest
2. ... e siga as instruções: 1. Instalar o pacote create-vite (y para sim) 2. Dar nome ao projeto (meu-app ou outro qualquer) 3. Escolher um framework/lib (escolha React) 4. Escolher a linguagem (escolha JavaScript)
3. Aguardar o término
4. cd meu-app para entrar na pasta do projeto
5. npm install
6. npm run dev

### Instale REact DevTools https://react.dev/learn/react-developer-tools

`JSX` -> HTML + JS para criar componentes
`App.jsx` (compoenete PRONCIAPLA)
`MAIN.jsx` (Inicialização do react)
`index.html` (elemento raiz e chamado do script)

#### Passo a passo

- crie o App.jsx crie a função function App e export default App;
- crie em pasta componentes e nela crie conteudo exemplo -> Cabecalho - Conteudo - Rodape faça a export default dele e depois vai no arquivo App.jsx e import Cabecalho from "./components/Cabecalho";
