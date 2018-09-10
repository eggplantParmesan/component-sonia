import React from 'react';

// var temp = function(props) {
// 	console.log(props);
// };

const PzSlider = function(props) {
	return <div>{props.items.map((elem) => elem.color + '/ ')}</div>;
};

// class PzSlider extends React.Component {
// 	testData(props) {
// 		console.log(this.props.items);
// 	}

// 	render() {
// 		return <div>{this.testData()}</div>;
// 	}
// }

export default PzSlider;
