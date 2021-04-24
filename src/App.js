import './App.scss';
// React Router Dom
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
// Components
import AppContainer from "./components/AppContainer"
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"

function App() {
  return (
    <Router>
      <AppContainer>
          <NavBar/>
          <Switch>
            <Route exact path="/">
              <ItemListContainer title ="Tienda" firstSection="Tops" secondSection="Calzas"/>
            </Route>
            <Route exact path="/product/:productId">
              <ItemDetailContainer/>
            </Route>
            <Route path="/category/:categoryName">
              <ItemListContainer title ="Tienda" firstSection="Tops" secondSection="Calzas"/>
            </Route>
            <Route path="/cart"></Route>
          </Switch>
      </AppContainer>
    </Router>
  );
}

export default App;
