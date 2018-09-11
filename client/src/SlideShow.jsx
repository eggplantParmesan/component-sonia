import React, { Component } from 'react';

import PzSlider from './PzSlider.jsx';
// import React from 'react';

class RelatedItems extends Component {
	constructor(props) {
		super(props);
		this.state = {
			products: []
		};
		this.getProducts = this.getProducts.bind(this);
	}

	componentDidMount() {
		this.getProducts();
	}

	// using fetch to get data from database.. might refactor to AJAX later

	getProducts() {
		fetch('http://localhost:4043/products')
			.then((response) => response.json())
			.then(({ data }) => {
				console.log('data is : ', data);
				this.setState({
					products: data
				});
			})
			.catch((err) => console.log(err));
	}

	render() {
		return (
			<div>
				<PzSlider items={this.state.products} />
			</div>
		);
	}
}

export default RelatedItems;
