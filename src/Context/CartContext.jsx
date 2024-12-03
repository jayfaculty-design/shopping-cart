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

  const addToCart = (products, id) => {
    const newItem = { ...products, amount: 1 };
    // checking if item is already in the cart

    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    // checking if item already exist in
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 };
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
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
    const cartItem = cart.find((items) => items.id === id);
    addToCart(cartItem, id);
  }
  function decreaseAmount(id) {
    const cartItem = cart.find((items) => {
      return items.id === id;
    });
    if (cartItem) {
      const newCart = cart.map((items) => {
        if (items.id === id) {
          return { ...items, amount: cartItem.amount - 1 };
        } else {
          return items;
        }
      });
      setCart(newCart);
    }
    if (cartItem.amount < 2) {
      PopFromCart(id);
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
