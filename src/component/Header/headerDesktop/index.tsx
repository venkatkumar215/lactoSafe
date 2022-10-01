import React from "react";
import HeaderList from "../headerList";
import HeaderLogo from "../headerLogo/headerLogo";
import styles from "./headerDesktop.module.scss";

interface Props {
  
}

const HeaderDeskTop: React.FC<Props> = () => {
  return (
    <div className={styles.lactoSafe_DesktopHeader}>
      <HeaderLogo />
      <HeaderList  />
    </div>
  );
};

export default HeaderDeskTop;
