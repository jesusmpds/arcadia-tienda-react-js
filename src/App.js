import './App.scss';
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import AppContainer from "./components/AppContainer"

function App() {
  return (
    <AppContainer>
        <NavBar/>
        <ItemListContainer title ="Tienda" firstSection="Tops" secondSection="Calzas" >
        </ItemListContainer>
    </AppContainer>
  );
}

export default App;
