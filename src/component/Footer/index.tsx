import React from "react";
import styles from "./footer.module.scss";

const Footer: React.FC = () => {
  return (
    <footer className={styles.lactoSafe_BodyFooter}>
      <div className={styles.lactoSafeFooter_container}>
        <div className={styles.lactoSafeFooter_main_item}>
          <h2>LACTO SAFE</h2>
          <p>
            Lacto Safe is a experienced company located about milk, yogurt and
            ayran processing.
          </p>
        </div>
        <div className={styles.lactoSafeFooter_main_item}>
          <h2>LACTO SAFE</h2>
          <p>
            Get updated with the informative newsletter from Milk Processing
            Line.
          </p>
        </div>

        <div className={styles.lactoSafeFooter_main_item}>
          <h2 >LACTO SAFE</h2>
          <p>
          Contact:LactoSafe.com
          <br/>
          Phone:LactoSafe@gmail.com
          <br/>
          Email : LactoSafe@gmail.com
          <br/>
          Address : LactoSafe

                    </p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;

