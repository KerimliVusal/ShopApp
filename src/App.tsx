import React from 'react';
import {ProductPage} from './components';
import "@radix-ui/themes/styles.css";
import Navbar from './components/Navbar';
import { CartProvider } from './components/context';
import { ToastContainer } from 'react-toastify';

const App: React.FC = () => {
  return (
    <div className="App">
      <CartProvider>
      <Navbar/>
      <ProductPage />
      </CartProvider>
      <ToastContainer/>
    </div>
  );
};

export default App;
