import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ContainerHome from './components/Home/ContainerHome';
import Cart from './components/Cart';
import { ItemDetailContainer } from './components/ItemDetail/ItemDetailContainer';
import NavBar from './components/NavBar/NavBar';
import HeaderContainer from './components/Header/HeaderContainer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <HeaderContainer/>
        <NavBar/>
        <Routes>
          <Route exact path="/" element={<ContainerHome />}/>
          <Route exact path="/cart" element={<Cart/>}/>
          <Route exact path="/detail/:idProduct" element={<ItemDetailContainer />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
