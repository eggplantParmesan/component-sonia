import React from 'react';
import styles from './main.css';


// function generates stars for ratings out of 5
const starMaker = (numOfStars) => {
  let result = '';
  const litStars = [];
  const dimStars = [];
  if (numOfStars % 1 === 0) {
    const numOfDimStars = 5 - numOfStars;
    for (let i = 0; i < numOfStars; i += 1) {
      litStars.push(<img alt="lit star" width="18" height="18" src="fullStar.png" />);
    }
    for (let i = 0; i < numOfDimStars; i += 1) {
      dimStars.push(<img alt="dim star" width="18" height="18" src="emptyStar.png" />);
    }
    result = litStars.concat(dimStars);
  } else {
    const numOfDimStars = 5 - Math.ceil(numOfStars);
    const halfStars = [<img alt="half star" width="18" height="18" src="halfStar.png" />];
    for (let i = 0; i < Math.floor(numOfStars); i += 1) {
      litStars.push(<img alt="lit star" width="18" height="18" src="fullStar.png" />);
    }
    for (let i = 0; i < numOfDimStars; i += 1) {
      dimStars.push(<img alt="dim star" width="18" height="18" src="emptyStar.png" />);
    }
    result = litStars.concat(halfStars, dimStars);
  }
  return result;
};

// ==================================================

// function creates isPrime :

const isPrime = (booleanNum) => {
  if (booleanNum === 1) {
    return <img alt="isPrime" src="prime.png" width="54" height="15" />;
  }
};

//= =============================================

// function shortens product discription:

const lessWord = str => ((str.length > 50) ? str.split('').slice(0, 50).join('') : str);

//= =============================================


const PzElement = props => (
  <div className={styles.child}>
    <img alt="product" width="160 vmin" height="160 vmin" className={styles.element} src={props.element.imageURL} />
    <div className={styles.text}>
      {lessWord(props.element.productDescription)}
      {'...'}
    </div>
    <div className={styles.star}>{starMaker(props.element.rating)}
    </div>
    <span className={styles.review}>
      {' '}
      {props.element.reviewNumber}
    </span>
    <div>
      <span className={styles.price}>${props.element.price}.00</span>
      <span>{isPrime(props.element.isPrime)}</span>
    </div>
  </div>
);


export default PzElement;
