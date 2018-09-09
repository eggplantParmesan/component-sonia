import React from 'react';
import $ from 'jquery';
import './App.css';
// import { getAllData } from '../../database/index.js';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			data: [ 'hi' ]
		};
	}

	componentDidMount() {}

	getData() {
		console.log(this.state.data);
		$.ajax({
			url: 'http://localhost:3002/carousel',
			method: 'GET',
			success: function(input) {
				this.setState({ data: input });
				console.log('get request connected!');
			},
			error: function(error) {
				console.log('Error!', error);
			}
		});
	}

	// handleSubmit(event) {
	// 	this.setState({
	// 		data: this.target.value
	// 	});
	// }

	render() {
		return (
			<div>
				<h3>Customers who viewed this item also viewed</h3>
				<div className="carousel-container">
					<button className="carousel-nav carousel-left-nav" />
					<div className="carousel-viewport" />
					<button className="carousel-nav carousel-right-nav" />
				</div>
			</div>
		);
	}
}

export default App;
