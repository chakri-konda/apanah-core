import React from "react";

import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.container}>
      By continuing past this page, you agree to our Terms of Service, Cookie
      Policy, Privacy Policy and Content Policies. <br />
      All trademarks are properties of their respective owners. 2022 © Apanah
      Ltd. All rights reserved.
    </div>
  );
};

export default Footer;
