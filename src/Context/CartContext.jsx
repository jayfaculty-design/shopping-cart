import { createContext, useState } from "react";

export const CartContext = createContext();

function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [itemsCount, setItemsCount] = useState(0);

  const addToCart = (products, id) => {
    setItemsCount((prev) => prev + 1);
    const newItem = { ...products, amount: 1 };
    // checking if item is already in the cart

    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    // checking if item already exist in cart
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 };
        }
      });
      setCart(newCart);
    }
  };
  return (
    <CartContext.Provider value={{ addToCart, itemsCount, setItemsCount }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
