import './App.scss';
// Components
import AppContainer from "./components/AppContainer"
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"

function App() {
  return (
    <AppContainer>
        <NavBar/>
        <ItemListContainer title ="Tienda" firstSection="Tops"/>
    </AppContainer>
  );
}

export default App;
