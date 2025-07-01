import { FC, ReactNode } from "react";
import * as styles from "./styles.module.scss";

type Props = {
  onClick: () => void;
  children: ReactNode;
  disabled: boolean;
};

export const SwiperButton: FC<Props> = ({ onClick, children, disabled }) => (
  <button
    onClick={onClick}
    className={`${styles.swiperButton} ${disabled && styles.disabled}`}
    disabled={disabled}
  >
    {children}
  </button>
);
