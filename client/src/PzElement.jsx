import React from 'react';

const PzElement = function(props) {
	return (
		// temporarily using inline sizing to test
		<h3>
			<img width="160" height="160" src={props.element.imageURL} />
			{props.element.productName}
			{props.element.price}
		</h3>
	);
};

export default PzElement;
