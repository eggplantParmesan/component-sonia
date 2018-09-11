import React from 'react';
import Slider from 'react-slick';
import PzElement from './PzElement.jsx';

const PzSlider = function(props) {
	// 	// carousel set-up

	// 	const settings = {
	// 		dots: true,
	// 		infinite: true,
	// 		speed: 500,
	// 		slidesToShow: 6,
	// 		slidesToScroll: 5
	// 	};
	return (
		<div>
			<h3>Customers who bought this item also bought</h3>
			<div class="carousel-outer">
				{props.items.map((elem) => (
					<div class="carousel">
						<PzElement element={elem} />
					</div>
				))}
			</div>
		</div>
	);
};

export default PzSlider;

// {props.items.map((elem) => elem.color + '/ ')}

{
	/* <div>
			<div>
				<h3> Customers who bought this item also bought </h3>
				<Slider {...settings}>
					{props.items.map((elem) => (
						<div>
							<PzElement element={elem} />
						</div>
					))}
				</Slider>
			</div>
		</div> */
}
