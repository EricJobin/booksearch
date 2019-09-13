import React, { Component } from "react";
import Button from 'react-bootstrap/Button'

class SearchForm extends Component {

	// Setting the component's initial state
	state = {
		booklook: ""
	};

	handleInputChange = event => {
		const value = event.target.value;
		const name = event.target.name;
		this.setState({
			[name]: value
		});
	};

	handleFormSubmit = event => {
		event.preventDefault();
		console.log(this.state);

		//Then I would do a call here to grab data form google books
		//And render it somewhere
	};

	render() {
		return (
			<div>

				<form className="form">

					<input
						value={this.state.name}
						name="booklook"
						onChange={this.handleInputChange}
						type="text"
						placeholder="Browse for this title"
					/><br/>

					<Button onClick={this.handleFormSubmit}>Submit</Button>
				</form>
			</div>
		);
	}
}

export default SearchForm;


