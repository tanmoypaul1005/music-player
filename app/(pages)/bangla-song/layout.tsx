import MainCard from "@/components/ui/main-card/MainCard";
import React from "react";
import styles from "@/components/ui/main-card/MainCard.module.scss";

const MusicsPageLayout = ({ children }: { children: React.ReactNode }) => {
  const classes = `${styles.card} `;
  return (
    <div className={classes}>
      {/* <div className={styles.header}>{template}</div> */}

      {children}
    </div>
  );
};

export default MusicsPageLayout;
