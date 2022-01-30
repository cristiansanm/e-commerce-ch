import React, {useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ContainerHome from './components/Home/ContainerHome';
import Cart from './components/Cart';
import { ItemDetailContainer } from './components/ItemDetail/ItemDetailContainer';
import NavBar from './components/NavBar/NavBar';
import HeaderContainer from './components/Header/HeaderContainer';
import Contact from './components/Contact';
import './App.css';
import CartContextProvider from './context/CartContext';
import { IconButton } from '@mui/material';
import { ArrowUpwardRounded } from '@mui/icons-material';
import { scrollTopButton } from './assets/js/styleObjects'
import Footer from './components/Footer';

function App() {
  // const [products, setProducts] = useState(invokeData);
  const handleScrollDown = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }
  const [ onScrollDown, setOnScrollDown ] = useState(false);
  window.onscroll = function(ev) {
    if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
        setOnScrollDown(true);
    }
    else{
      setOnScrollDown(false);
    }
  };
  return (
    <BrowserRouter>
      <CartContextProvider>
        <div className="App">
          <HeaderContainer/>
          <NavBar/>
          <Routes>
            <Route exact path="/" element={<ContainerHome />}/>
            <Route exact path="/category/:categoryName" element={<ContainerHome />}/>
            <Route exact path="/cart" element={<Cart/>}/>
            <Route exact path="/detail/:productId" element={<ItemDetailContainer />}/>
            <Route exact path="/contact" element={<Contact/>} />
          </Routes>
        </div>
      </CartContextProvider>
      <Footer/>
      {
        onScrollDown && (
          <IconButton 
            onClick={handleScrollDown} 
            color="primary" 
            sx={scrollTopButton}
            >
              <ArrowUpwardRounded/>
          </IconButton>
        )
      }
      
    </BrowserRouter>
  );
}

export default App;
