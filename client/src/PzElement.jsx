import React from 'react';
import styles from './main.css';

// function creates star ratings based on the number of ratings, decimals are not considered yet
const starMaker = function(num) {
	var n = 5 - num;
	var lit = [];
	var dim = [];
	for (var i = 0; i < num; i++) {
		lit.push(
			<img width="18" height="18" src="https://files.slack.com/files-pri/TBV9WH1HR-FCPN3R8TV/fullstar.png" />
		);
	}
	for (var i = 0; i < n; i++) {
		dim.push(
			<img width="18" height="18" src="https://files.slack.com/files-pri/TBV9WH1HR-FCP48N60G/emptystar.png" />
		);
	}

	return lit.concat(dim);
};

//===================================================

//function creates isPrime :

const isPrime = function(num) {
	if (num === 1) {
		return <img src="prime.png" width="54" height="15" />;
	}
};

//==============================================

//function shortens product discription:

const lessWord = function(str) {
	var newStr = str.split('').slice(0, 50).join('');
	return newStr + '...';
};

//==============================================

const PzElement = function(props) {
	return (
		// temporarily using inline sizing to test

		<div>
			<img width="160 vmin" height="160 vmin" className={styles.element} src={props.element.imageURL} />

			<div className={styles.text}>{lessWord(props.element.productDescription)}</div>

			<div className={styles.star}>{starMaker(props.element.rating)}</div>
			<span className={styles.review}> {props.element.reviewNumber}</span>

			<div>
				<span className={styles.price}>${props.element.price}.00</span>
				<span>{isPrime(props.element.isPrime)}</span>
			</div>
		</div>
	);
};

export default PzElement;
