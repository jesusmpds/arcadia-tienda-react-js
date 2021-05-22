import "../node_modules/bootstrap/scss/bootstrap.scss";
import './App.scss';
//cartContext
import {CartProvider} from './context/CartContext'
// React Router Dom
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
// Components
import AppContainer from "./components/AppContainer"
import NavBar from "./components/Navbar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import Cart from "./components/Cart/Cart";

function App() {
  return (
  <CartProvider>
    <Router>
      <AppContainer>
          <NavBar/>
          <Switch>
            <Route path="/product/:productId">
              <ItemDetailContainer/>
            </Route>
            <Route path="/category/:categoryName">
              <ItemListContainer title ="Tienda" firstSection="Tops" secondSection="Calzas"/>
            </Route>
            <Route exact path="/cart">
              <Cart/>
            </Route>
            <Route path="/">
              <ItemListContainer title ="Tienda" firstSection="Tops" secondSection="Calzas"/>
            </Route>
          </Switch>
      </AppContainer>
    </Router>
  </CartProvider>  
  );
}

export default App;
