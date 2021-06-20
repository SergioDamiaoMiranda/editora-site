import React, { Component }      from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Topo         from "./components/Topo";
import Home         from "./components/Home";
import Catalogo     from "./components/Catalogo";
import Frontend     from "./components/Frontend";
import NotFound     from "./components/NotFound";
import Rodape       from "./components/Rodape";
import Programacao  from "./components/Programacao";
import Desing       from "./components/Desing";
import Livro        from "./components/Livro";

import axios        from "axios";

import "./index.css"


class App extends Component {
  //Criando o array livros vazio
  state = {
    livros: []
  };
  async componentDidMount() {
    try {
      const { data: livros } = await axios.get("/api/todosOsLivros.json");
      this.setState({ livros });
    } catch (error) {
      console.log(error);
      document
        .querySelectorAll(".principal")[0].insertAdjacentHTML("beforeend", "<p class='erro'>Dados não disponíveis</p>")
    }
  }
  render() {
    return (
      <Router>
        <>
          <Topo />
          <Switch>
            <Route exact path="/"           render={ () => <Home        livros={ this.state.livros} /> } />
            <Route exact path="/frontend"   render={ () => <Frontend    livros={ this.state.livros} /> } />
            <Route exact path="/programacao"render={ () => <Programacao livros={ this.state.livros} /> } />
            <Route exact path="/desing"     render={ () => <Desing      livros={ this.state.livros} /> } />
            <Route exact path="/catalogo"   render={ () => <Catalogo    livros={ this.state.livros} /> } />
            <Route component={ NotFound } />
          </Switch>
          <Rodape />
        </>
      </Router>
    );
  };
};

export default App;
