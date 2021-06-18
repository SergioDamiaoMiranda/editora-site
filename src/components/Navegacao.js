import React from "react";
import { NavLink } from "react-router-dom";

let linkCorrente = { color: "#027399" };

const Navegacao = () => {
    return (
        <ul>
            <li><NavLink exact activeStyle={ linkCorrente } to="/">Home</NavLink></li>
            <li><NavLink exact activeStyle={ linkCorrente } to="/frontend">Fronted</NavLink></li>
            <li><NavLink exact activeStyle={ linkCorrente } to="/programacao">Programação</NavLink></li>
            <li><NavLink exact activeStyle={ linkCorrente } to="/desing">Desing</NavLink></li>
            <li><NavLink exact activeStyle={ linkCorrente } to="/catalogo"></NavLink></li>
        </ul>
    );
};

export default Navegacao;