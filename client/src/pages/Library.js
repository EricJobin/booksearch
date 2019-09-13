import React, { Component } from "react";
import BookCard from "../components/BookCard";
import books from "../fakebooks.json";
import Navbar from "../components/Navbar";

//Importing Bootstrap Components:
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Library extends Component {

	render() {
		return (
			<div>
				
				<Container>
					<Navbar/>
					<Row>
						<Col>
							<h1>Behold my Wondrous Collection of Rare and Arcane Tomes!</h1>
						</Col>
					</Row>

					<Row>
						{books.map(
							(books, i) => (
								<BookCard
								{...books} // Breaks out book data for rendering each card
								key={i} // Gives each card a react key i
							
								/>
							)
						)}
					</Row>

				</Container>
			</div>
		);
	}
}

export default Library;
