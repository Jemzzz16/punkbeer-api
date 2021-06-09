import React from "react";
import styles from "./NavBar.module.scss";
import Searchbar from '../Searchbar'

const NavBar = (props) => {
  const { updateSearchText } = props;

  return (
    <nav className={styles.navbar}>
      <h2>NavBar</h2>
      <p>NavBar works</p>
      <Searchbar placeholder='Search for beers' 
      updateSearchText={updateSearchText}/>
    </nav>


  );
};

export default NavBar;
