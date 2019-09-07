const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = new Schema({
	title: {
		type: String,
    	required: true
	},
	authors: {
		type: String,
    	required: true,
	},
	description: {
		type: String,
	},
	image: {
		type: String,
	},
	link: {
		type: String,
	}
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;

// This creates our model from the above schema, using mongoose's model method
const Book = mongoose.model("Book", BookSchema);

// Export the Article model
module.exports = Book;


// * `title` - Title of the book from the Google Books API
// * `authors` - The books's author(s) as returned from the Google Books API
// * `description` - The book's description as returned from the Google Books API
// * `image` - The Book's thumbnail image as returned from the Google Books API
// * `link` - The Book's information link as returned from the Google Books API