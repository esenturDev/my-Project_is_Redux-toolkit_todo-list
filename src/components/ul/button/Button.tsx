import { FC, ReactNode } from 'react';
import scss from './Button.module.scss';

const Button: FC<{
  onClick: () => void;
  children: ReactNode;
}> = ({onClick, children}) => {
  return <button className={scss.buttons} onClick={onClick}>{children}</button>
}

export default Button