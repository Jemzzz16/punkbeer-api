import React from "react";
import styles from "./Searchbar.module.scss";

const Searchbar = (props) => {
  const { placeholder, updateSearchText } = props;

 const input = <input type='text' placeholder={placeholder} input={e =>
  updateSearchText(e.target.value)} />

  return (
    <div className={styles.searchbar}>
      {input}
      <p>Searchbar works</p>
    </div>
  );
};

export default Searchbar;
