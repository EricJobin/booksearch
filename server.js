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
// mongodb://<dbuser>:<dbpassword>@ds019866.mlab.com:19866/heroku_0wc5tn3b


var MONGODB_URI = process.env.MONGODB_URI || "mongodb://user:user1234@ds019866.mlab.com:19866/heroku_0wc5tn3b";

mongoose.connect(MONGODB_URI,{useNewUrlParser:true});



// Send every other request to the React app
// Define any API routes before this runs

//Move to routes folder
// app.get("*", (req, res) => {
// 	res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

app.listen(PORT, () => {
	console.log(`🌎 ==> API server now on port ${PORT}!`);
});
