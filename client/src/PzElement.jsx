import React from 'react';

// this function creates star ratings based on the number of ratings, decimals are not considered yet
const starMaker = function(num) {
	if (num === 5) {
		var fiveStar = [];
		for (var i = 0; i < 5; i++) {
			fiveStar.push(<img src="https://files.slack.com/files-pri/TBV9WH1HR-FCPN3R8TV/fullstar.png" />);
		}
		return fiveStar.concat();
	} else {
		var n = 5 - num;
		var lit = [];
		var dim = [];
		for (var i = 0; i < num; i++) {
			lit.push(<img src="https://files.slack.com/files-pri/TBV9WH1HR-FCPN3R8TV/fullstar.png" />);
		}
		for (var i = 0; i < n; i++) {
			dim.push(<img src="https://files.slack.com/files-pri/TBV9WH1HR-FCP48N60G/emptystar.png" />);
		}

		return lit.concat(dim);
	}
};

//===================================================

//function creates isPrime :

const isPrime = function(num) {
	if (num === 1) {
		return (
			<img
				width="60"
				height="60"
				src="https://botw-pd.s3.amazonaws.com/styles/logo-thumbnail/s3/052018/untitled-1_282.png?zBgfG0XEfdsPUq33GRuhu6udfY3Yu_rs&itok=39OQ7JCF"
			/>
		);
	}
};

//==============================================

const PzElement = function(props) {
	return (
		// temporarily using inline sizing to test
		<div>
			<span>
				<img width="160" height="160" src={props.element.imageURL} />
				<br />
				{props.element.productDescription}
				<br /> {starMaker(props.element.rating)} {props.element.reviewNumber}
				<br />
				${props.element.price} {isPrime(props.element.isPrime)}
			</span>
		</div>
	);
};

export default PzElement;
