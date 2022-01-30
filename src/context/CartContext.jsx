import { createContext } from 'react';

const cartContext = createContext([])

const CartContextProvider = ({ children }) => {
  return (
    <cartContext.Provider value={{cart:"cart"}}>
      {children}
    </cartContext.Provider>)
}
export default CartContextProvider;
