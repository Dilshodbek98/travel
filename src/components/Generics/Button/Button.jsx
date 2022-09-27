import React from 'react';
import { Btn } from './style';


const Button = ({children, width, onClick}) => {
  return <Btn width={width} onClick={onClick}>{children || "button"}</Btn>;
}

export default Button