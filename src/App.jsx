import styles from "./App.module.scss";
import Searchbar from "./components/Searchbar";
import Card from "./components/Card";
import React, { useState, useEffect } from "react";


function App() {
  const [beer, setBeer] = useState([]);

  const getPunkAPI = async (searchTerm) => {
    console.log(searchTerm);
    if (searchTerm === "") {
      const response = await fetch(
        "https://api.punkapi.com/v2/beers/?per_page=80"
      );
      const beers = await response.json();
      setBeer(beers);
    } else {
      const response =
        await fetch(`https://api.punkapi.com/v2/beers?beer_name=${searchTerm}&per_page=80
      `);
      const beers = await response.json();
      setBeer(beers);
    }
  };
  useEffect(() => {
    getPunkAPI("");
    console.log(beer);
  }, []);

  const getBeer = (beer) => {
    return <Card beers={beer} />
  }

  return (
    <>
      <div className={styles.content}>
        <Searchbar handleSearch={getPunkAPI} />
      <section>
        {beer.map(getBeer)}
      </section>
      </div>
    </>
  );
}
export default App;
