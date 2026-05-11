import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const [CartItems, setCartItems] = useState(() => {
    const saveCarte = localStorage.getItem("cart");
    return saveCarte ? JSON.parse(saveCarte) : [];
  });

  const addToCart = (item) => {
    setCartItems((prev) => {
      const updated = [...prev, item];
      console.log("Cart updated:", updated);
      return updated;
    });
  };
const deleteitem=(id)=>{ 
   setCartItems((prev)=>prev.filter(item=>item.id!==id))
   }
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(CartItems));
  }, [CartItems]);

  return (
    <CartContext.Provider value={{ CartItems, addToCart,deleteitem  }}>
      {children}
    </CartContext.Provider>
  );
}
