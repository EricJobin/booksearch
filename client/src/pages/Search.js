import React, { Component } from "react";
import SearchForm from "../components/SearchForm";
import Navbar from "../components/Navbar";

//Importing Bootstrap Components:
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Search extends Component {

	render() {
		return (
			<div>
				
				<Container>
					<Navbar/>
					<Row>
						<Col>
							<h1>Search The Library, if you Dare</h1>
						</Col>
					</Row>

					<Row>
						<SearchForm />
					</Row>

				</Container>
			</div>
		);
	}
}

export default Search;