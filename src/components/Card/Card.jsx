import React from "react";
import styles from "./Card.module.scss";

const Card = (props) => {
  const {
    name,
    tagline,
    description,
    image_url,
  } = props.beer;
  return (
    <div className={styles.Card}>
      <section>
        <img src={image_url} alt={'beer'}/>
      </section>
     <section>
       <h2>{name}</h2>
       <h6>{tagline}</h6>
       <p>{description}</p>
     </section>
    </div>
  );
};

export default Card;
