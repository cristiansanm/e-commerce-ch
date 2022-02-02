import { createContext, useState, useContext } from 'react';

const cartContext = createContext([])
export const useCartContext = () => useContext(cartContext);

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);
  const createCartList = (item) => {
    localStorage.setItem('myCartList', JSON.stringify({"arrayCartList": [...cartList, item]}));
    console.log(JSON.parse(localStorage.getItem('myCartList')));
  }
  //Funcion para agregar al carrito, puede recibir cualquier tipo de variable, incluido un objeto 
  //como {{item: ...itemRecibido}, cantidad: cantidadRecibida}
  function addToCart(item){
    setCartList([...cartList, item]);
    if(item){
      createCartList(item);
    }
    
  }
  function emptyCart(){
    setCartList([])
    localStorage.clear()
  }
  return (
    <cartContext.Provider value={
      {
        cartList,
        addToCart,
        emptyCart
      }
    }>
      {children}
    </cartContext.Provider>)
}
export default CartContextProvider;
