import { ReactNode } from "react";
import styles from './Button.module.css'

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
    onClick?: () => void;
    children: ReactNode;
  }
  
  export const Button: React.FC<ButtonProps> = ({
    children,
    onClick,
  }) => (
    <button
    className={styles.button}
      onClick={onClick}
    >
      {children}
    </button>
  );