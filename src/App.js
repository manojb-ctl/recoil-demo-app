import React from "react";
import Home from "./components/pages/Home";
import "./styles/App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AddProduct from "./components/products/AddProduct";
import EditProduct from "./components/products/EditProduct";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/addProduct" exact component={AddProduct} />
        <Route path="/editProduct/:id" exact component={EditProduct} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
