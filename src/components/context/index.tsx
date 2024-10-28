import React, { createContext, useState, useContext, ReactNode } from 'react';

type CartItem = { id: number; name: string; price: number,src:string };
type CartContextType = {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: number) => void;
  handleCountChange: (id: number) => void;
  counter:number | null,
  added:boolean;
  setAdded:(val:boolean)=>void
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [counter, setCounter] = useState<number | null>(0);
  const [added, setAdded] = useState<boolean>(false);

  const addItem = (item: CartItem) => setItems((prevItems) => [...prevItems, item]);
  const removeItem = (id: number) =>{ setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    setAdded(false);
    setCounter(0)
  }
  const handleCountChange = (value: number) => {
    setCounter((prev) => {
        if (prev === null||prev === 0) return value === 1 ? 1 : 0;
        return value === 1 ? prev + 1 : prev - 1;
    });
};
  return (
    <CartContext.Provider value={{ items, addItem, removeItem,counter,handleCountChange,added,setAdded }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
};
