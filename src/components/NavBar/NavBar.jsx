import React from "react";
import styles from "./NavBar.module.scss";
import Searchbar from '../Searchbar'

const NavBar = (props) => {

  return (
    <div className={styles.navbar}>
      <section className={styles.title}>
        <h2>BrewDog Beer Search!</h2>
      </section>
      <section>
        <Searchbar placeholder='Search for beers' 
        handleUpdate={props.handleUpdate}/>
      </section>
    </div>

  );
};

export default NavBar;
