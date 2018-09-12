import React from 'react';
import PzElement from './PzElement.jsx';
import styles from './main.css';
console.log(styles);

const PzSlider = function(props) {
	return (
		<div>
			<h3 className={styles.container}>Customers who bought this item also bought</h3>
			<div>
				{props.items.map((elem, index) => (
					<div className={styles.menu}>
						<PzElement key={index} element={elem} />
					</div>
				))}
			</div>
		</div>
	);
};
// r246 g190 b66

export default PzSlider;
