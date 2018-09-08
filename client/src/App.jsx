import React from 'react';
import $ from 'jquery';
// import { getAllData } from '../../database/index.js';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			data: []
		};
	}

	componentDidMount() {}

	getData() {
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
				<h1>Hiiiiiii</h1>
				<input type="text" />
				<button
					onClick={() => {
						this.getData();
					}}
				>
					Submit
				</button>
			</div>
		);
	}
}

export default App;
