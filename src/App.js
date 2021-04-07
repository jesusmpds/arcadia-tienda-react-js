import './App.scss';
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import AppContainer from "./components/AppContainer"
import Counter from "./components/ItemCount/ItemCount"
function App() {
  return (
    <AppContainer>
        <NavBar/>
        <ItemListContainer title ="Bienvenidos"/>
        <Counter/>
        <ItemListContainer/>
    </AppContainer>
  );
}

export default App;
