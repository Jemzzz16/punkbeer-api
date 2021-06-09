import React from "react";
import styles from "./Searchbar.module.scss";

const Searchbar = (props) => {
  const { placeholder } = props;

 const input = <input type='text' placeholder={placeholder} onBlur={(e) => props.handleUpdate(e.target.value)} />

  return (
    <div className={styles.searchbar}>
     <section className={styles.bar}>{input}</section>
    </div>
  );
};

export default Searchbar;
