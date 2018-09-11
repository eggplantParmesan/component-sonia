import React from 'react';

function NextArrow(props) {
	const { className, style, onClick } = props;
	return <div className={className} style={{ ...style, background: 'black' }} onClick={onClick} />;
}

export default NextArrow;
