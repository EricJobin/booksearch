import React from "react";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const BookCard = (props) => {
	return (
		<div className="card">

			<Card id={`${props.shiftid}`}>
				<Card.Img variant="top" src={props.image} style={{height:"100%", maxWidth:"25%"}}/>
				<Card.Body>
					<Card.Text>
						<b>Title:</b> {props.title}<br/>
						<b>Author:</b> {props.author} to {props.end}<br/>
						<b>Description:</b> {props.description}<br/>
						<a href = {props.link}><Button>Find Out More</Button></a>
					</Card.Text>
				</Card.Body>
			</Card>

		</div>
	);
}

export default BookCard;
