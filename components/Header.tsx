import classNames from "classnames";
import React from "react";
import logo from "../img/logo.png";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={classNames("bg-inverted", styles.wrapper)}>
      <div className="container">
        <img className={styles.logo} src={logo.src} alt="Logo de la UPTValencia" />
      </div>
    </header>
  );
};

export default Header;
