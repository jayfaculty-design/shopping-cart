import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  const [itemAmount, setItemAmount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  // calcuclate and update the total
  useEffect(() => {
    const total = cart.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.price * currentItem.amount;
    }, 0);
    setTotalPrice(total);
  });

  //update item amount
  useEffect(() => {
    if (cart) {
      const amount = cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.amount;
      }, 0);
      setItemAmount(amount);
    }
  }, [cart]);

  const addToCart = (product, id) => {
    setCart((prevCart) => {
      // Check if the item is already in the cart
      const existingItem = prevCart.find((item) => item.id === id);

      if (existingItem) {
        // Increment the amount of the existing item
        return prevCart.map((item) =>
          item.id === id ? { ...item, amount: item.amount + 1 } : item
        );
      } else {
        // Add the new item to the cart
        const newItem = { ...product, amount: 1 };
        return [...prevCart, newItem];
      }
    });
  };

  // remove from cart
  function PopFromCart(id) {
    const newCart = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(newCart);
  }
  function emptyCart() {
    setCart([]);
  }
  function increaseAmount(id) {
    const newCart = cart.map((item) => {
      if (item.id === id) {
        return { ...item, amount: item.amount + 1 }; // Increment the amount
      }
      return item; // Keep other items unchanged
    });
    setCart(newCart); // Update the cart state
  }
  function decreaseAmount(id) {
    const cartItem = cart.find((item) => item.id === id);
    if (cartItem) {
      if (cartItem.amount === 1) {
        PopFromCart(id); // Remove item if the amount is 1
      } else {
        const newCart = cart.map((item) =>
          item.id === id ? { ...item, amount: cartItem.amount - 1 } : item
        );
        setCart(newCart);
      }
    }
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        PopFromCart,
        emptyCart,
        increaseAmount,
        decreaseAmount,
        itemAmount,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
