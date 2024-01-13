const books = require("./books.json");

// ! Start function priceOfBook
function priceOfBook(bookName) {
  // find the title of the book by the id i
  for (let i = 0; i < books.length; i++) {
    // compared if the value of the title = the balue of the bookName
    if (books[i].title === bookName) {
      //returning the price of the book
      return books[i].price;
    }
  }
  return "Book not found";
}
//testing the code
console.log("the price of the book  is:" + " " + priceOfBook("The Alchemist"));

// Todo: End function priceOfBook

// -------------------------------------

// !Start function affordableBooks
function affordableBooks(budget) {
  const Books = [];
  if (typeof budget == "number") {
    for (let i = 0; i < books.length; i++) {
      if (books[i].price <= budget) {
        Books.push(books[i].title);
      }
    }
    return Books;
  } else {
    return `You entre a ${typeof budget} value, you must be entre a number`;
  }
}

console.log(affordableBooks(10));
// Todo: End function affordableBooks

// // -------------------------------------

// ! Start function findBookByGenre
// declare function name  findBookByGenre
// This function takes a genre as an argument and returns an array of book titles
function findBookByGenre(genre) {
  // Initialize an empty array to store book titles matching the specified genre
  const ArrayOfBooks = [];
  // Iterate through the array of books
  for (let i = 0; i < books.length; i++) {
    // Get the array of genres for the current book
    const ArrayOfgenres = books[i].genres;

    // Iterate through the array of genres for the current book
    for (let j = 0; j < ArrayOfgenres.length; j++) {
      // Check if the current genre matches the specified genre
      if (ArrayOfgenres[j] == genre) {
        // If there is a match, add the title of the book to the ArrayOfBooks array
        ArrayOfBooks.push(books[i].title);
      }
    }
  }
  // Check if there are any books with the specified genre
  if (ArrayOfBooks.length > 0) {
    // If there are matching books, return them as a formatted string inside square brackets
    return ArrayOfBooks;
  } else {
    // If no books match the specified genre, return a message indicating so
    return "No books with this genre.";
  }
}

const bookgenre = "Fiction";
console.log(findBookByGenre(bookgenre));
// todo: ENd function findBookByGenre

// -------------------------------------

// ! Start function groupByGenre
function groupByGenre() {
  const groupedBooks = {};
  // find
  for (let i = 0; i < books.length; i++) {
    const book = books[i];
    for (let j = 0; j < book.genres.length; j++) {
      const genre = book.genres[j];

      if (!groupedBooks[genre]) {
        groupedBooks[genre] = [];
      }

      groupedBooks[genre].push(book);
    }
  }

  return groupedBooks;
}

// Test code:

console.log("Books grouped by genre:", groupByGenre());
// todo: End function groupByGenre

// // function sortBooksByPrice() {
function sortBooksByPrice() {
  const n = books.length;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < n; j++) {
      if (books[j].price < books[minIndex].price) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      [books[i], books[minIndex]] = [books[minIndex], books[i]]; // Swap
    }
  }

  return books;
}
console.log(sortBooksByPrice());

// (function main() {
//   try {
//     if (priceOfBook("The Alchemist") !== 9.49) {
//       throw new Error("priceOfBook is not working properly.");
//     }
// if (affordableBooks(10).length !== 6) {
//   throw new Error("affordableBooks is not working properly.");
// }
// if (findBookByGenre("Fiction").length !== 7) {
//   throw new Error("findBookByGenre is not working properly.");
// }
// if (Object.keys(groupByGenre()).length !== 30) {
//   throw new Error("groupByGenre is not working properly.");
// }
// if (sortBooksByPrice()[0].price !== 5.99) {
//   throw new Error("sortBooksByPrice is not working properly.");
// }
// console.log("All tests passed successfully.");
//   } catch (error) {
//     console.log(error);
//   }
// })();
