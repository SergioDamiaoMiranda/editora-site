import React, { Component }      from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Topo       from "./components/Topo";
import Home       from "./components/Home";
import Catalogo   from "./components/Catalogo";
import Frontend   from "./components/Frontend";
import NotFound   from "./components/NotFound";
import Rodape     from "./components/Rodape";

import "./index.css"
import Programacao from "./components/Programacao";
import Desing from "./components/Desing";

class App extends Component {
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
