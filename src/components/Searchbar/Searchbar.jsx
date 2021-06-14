import React from "react";
import styles from "./Searchbar.module.scss";

const Searchbar = (props) => {
  const { handleSearch } = props;

  return (
    <div className={styles.inputbox}>
       <input placeholder='Search beer here...' 
       onBlur={(e) => handleSearch(e.target.value)}></input>
    </div>
  );
};

export default Searchbar;
