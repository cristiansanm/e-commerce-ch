import { createContext, useState, useContext } from 'react';

const cartContext = createContext([])
export const useCartContext = () => useContext(cartContext);

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  //Función para comprobar si está dentro del array
  const isInCart = (id) => (cartList?.find(element => element.item.id === id)) ? true : false;

  //Añade al carrito nuevos items o más cantidad
  function addToCart(item){
    if(isInCart(item.item.id)){
      let newCartList = [...cartList];
      
      //Añade la cantidad adicional al producto
      newCartList.map( element =>

          (element.item.id === item.item.id) ? element.quantity += item.quantity : element.quantity

        )
        
      setCartList([...newCartList]);
    }
    else{
      console.log("El item es ", item)
      setCartList([...cartList, item]);
    }
    
  }

  //Función para eliminar items de manera individual
  function removeItem(id) {
    let newCartList = [...cartList];

    //Se devuelve un nuevo array con el id filtrado
    let modifiedArray = newCartList.filter( element => element.item.id !== id);

    setCartList(modifiedArray);
  }

  //Obtiene la cantidad total de elementos en el array
  function getTotalItemsOnCart(){
    //Se inicializa en 0 para devolverlo cuando no hay nada en el array
    let total = 0;

    //Comprueba si el array está lleno y suma sus cantidades internas
    if(cartList.length > 0){
      cartList.map(data => total += data.quantity)
    }
    return total
  }

  //Vacía todo el carrito
  function emptyCart(){
    setCartList([])
  }

  //calcula el precio a cobrar por cada articulo
  function calculateSubPrice(quantity, price){
    return quantity * price ;
  }

  //Calcula el valor total de la compra
  function calculateTotalPrice(){
    let total = 0;
    cartList?.map((row) => 
      total += row.item.price * row.quantity)
    return total;
  }
  return (
    <cartContext.Provider value={
      {
        cartList,
        addToCart,
        emptyCart,
        getTotalItemsOnCart,
        removeItem,
        calculateSubPrice,
        calculateTotalPrice
      }
    }>
      {children}
    </cartContext.Provider>)
}
export default CartContextProvider;
