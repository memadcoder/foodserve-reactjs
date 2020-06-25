import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import logo from "./logo.svg";
import "./App.css";
import Menu from "./components/MenuComponent";

function App() {
  return (
    <div className="App">
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="#">Confusion</NavbarBrand>
        </div>
      </Navbar>
      <Menu />
    </div>
  );
}

export default App;
