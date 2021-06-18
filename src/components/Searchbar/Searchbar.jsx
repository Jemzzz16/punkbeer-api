import React from "react";
import styles from "./Searchbar.module.scss";

import background from '../../Assets/backgroundImage.jpg';

const Searchbar = (props) => {
  const { handleSearch } = props;

  return (
    <div>
      <section className={styles.topbox}>
        <h1>PuNk BeEr SeArCh</h1>
        <input placeholder='Search beer here...' onBlur={(e) => handleSearch(e.target.value)}></input>
         <img src={background} alt="beers" />
      </section>
    </div>
  );
};

export default Searchbar;
