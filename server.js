const express = require("express");
const path = require("path");
const mongoose = require ("mongoose");
// const routes = require("./routes");

const PORT = process.env.PORT || 3001;
const app = express();
require("dotenv").config();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));
}

// Define API routes here
app.use(routes);


var MONGODB_URI = process.env.MONGODB_URI || "mongodb://null:null1234@ds037688.mlab.com:37688/heroku_hh77jjxt"
mongoose.connect(MONGODB_URI);


// Send every other request to the React app
// Define any API routes before this runs

//Move to routes folder
// app.get("*", (req, res) => {
// 	res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

app.listen(PORT, () => {
	console.log(`🌎 ==> API server now on port ${PORT}!`);
});
