import React from 'react';
import {Button} from '@radix-ui/themes';
import './index.css';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

const CustomButton: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <Button className="customButton" onClick={onClick}>
      {children}
    </Button>
  );
};

export default CustomButton;
