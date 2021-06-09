import React, { useState } from 'react';
import styles from './App.module.scss'
import Card from './components/Card';
import NavBar from './components/NavBar'
import beers from './data/beers'


function App() {
  const [ searchText, setSearchText ] = useState('');

  const getBeers = beers.map((beerObj) => {
    return <Card beer={beerObj} />
  });

  return (
    <>
    <section>
      <NavBar handleUpdate={setSearchText} />
    </section>
    <section className={styles.content}>
      <Card beer={beers[1]} searchText={searchText}/>
    </section>
    </>
  );

}
export default App;

