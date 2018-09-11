import React from 'react';

function PrevArrow(props) {
	const { className, style, onClick } = props;
	return <div className={className} style={{ ...style, background: 'black' }} onClick={onClick} />;
}

export default PrevArrow;
