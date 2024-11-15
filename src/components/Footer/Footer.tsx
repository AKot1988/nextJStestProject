// import classes from "./Footer.module.scss";
import { FC } from "react";

type FooterProps = {
  title: string;
  className?: string | undefined;
};

const Footer: FC<FooterProps> = ({ title }) => {
  return (
    <footer>
      <h4> Footer</h4>
    </footer>
  );
};

export default Footer;
