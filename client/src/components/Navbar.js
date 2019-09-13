import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
	return (
		<ul className="nav nav-tabs">
			<li className="nav-item">
				<Link to="/search" className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}>
					Search
				</Link>
			</li>
			<li className="nav-item">
				<Link to="/library" className={window.location.pathname === "/library" ? "nav-link active" : "nav-link"}>
					Library
				</Link>
			</li>
			

		</ul>
	);
}

export default Navbar;
