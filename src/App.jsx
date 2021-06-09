import React from 'react';
import styles from './App.module.scss'
import Card from './components/Card';
import NavBar from './components/NavBar'
import beers from './data/beers'


function App() {
  const getBeers = beers.map((beerObj) => {
    return <Card beer={beerObj} />
  });

  return (
    <>
    <section>
      <NavBar />
    </section>
    <section className={styles.content}>
      <Card beer={beers[1]}/>
      {getBeers}
    </section>
    </>
  );

}
export default App;

