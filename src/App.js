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
        .querySelectorAll(".principal")[0].insertAdjacentHTML("beforeend", "<p class='erro'>Msg de erro</p>")
    }
  }
  render() {
    return (
      <Router>
        <>
          <Topo />
          <Switch>
            <Route exact path="/" render={ Home } />
            <Route exact path="/frontend" render={ () => <Frontend /> } />
            <Route exact path="/programacao"render={ () => <Programacao /> } />
            <Route exact path="/desing" render={ () => <Desing /> } />
            <Route exact path="/catalogo" render={ () => <Catalogo /> } />
            <Route component={ NotFound } />
          </Switch>
          <Rodape />
        </>
      </Router>
    );
  };
};

export default App;
