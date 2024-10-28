import React from 'react';
import {Button} from '@radix-ui/themes';
import './index.css';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  cartItem:boolean;
};

const CustomButton: React.FC<ButtonProps> = ({ children, onClick ,cartItem}) => {
  return (
    <Button className={`customButton ${!cartItem?'defaultPadding':'cartPadding'}`} onClick={onClick}>
      {children}
    </Button>
  );
};

export default CustomButton;
