import { FC } from "react";
import * as styles from "./styles.module.scss";

type Props = {
  year: number;
  text: string;
};

export const Paragraph: FC<Props> = ({ year, text }) => {
  return (
    <div>
      <h3 className={styles.year}>{year}</h3>
      <p className={styles.text}>{text}</p>
    </div>
  );
};
