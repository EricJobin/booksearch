import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Search from "./pages/Search";
import Library from "./pages/Library";
// import Navbar from "./components/Navbar";



function App() {
	return (
		<Router>
			<div>
				<Route exact path="/" component={Search} />
				<Route exact path="/search" component={Search}/>
				<Route exact path="/library" component={Library}/>
			</div>
		</Router>
	);
}

export default App;