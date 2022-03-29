import React from "react";

import Footer from "components/footer";

import styles from "./home.module.scss";

const Home = () => {
  return (
    <div>
      <div className={styles.aContainer}>
        <ul className={styles.hLinks}>
          <li>Add Store</li>
          <li>Sign In</li>
          <li>Register</li>
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
