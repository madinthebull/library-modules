
var Library = function() { //with three public functions. this is the module
    var books = [];

    var addBook = function(book) { //must add new books to the library's private book array
        books.push(book);
    };
  
    var checkOutBook = function (book) { //must take a book object as an argument and change it's checkedOut attribute to true
    
        if (books.includes(book)) {
            book.setAttribute("checkedOut", true); // this one uses an array method
        } else {
            console.log("Error: The book is not in this library so it cannot be checked out"); //but only if that book exists in the library; otherwise throw an error
        }
    };

    var returnBook = function (book) {
        if (books.includes(book)) {
            book.setAttribute("checkedOut", false); //this one uses an array method
        } else {
            console.log("Error: The book is not in this library so it cannot be checked out"); //but only if that book exists in the library; otherwise throw an error
        }
    };

    return { //this makes the private functions above "public" -- accessible outside it's nested scope; the values are the functions above
        addBook: addBook,
        checkOutBook: checkOutBook,
        returnBook: returnBook
    };
};

var Book = function(title, author) {
    var attributes = {
        title: title,
        author: author,
        checkedOut: false
    };

    var getAttribute = function(attribute) {
        if (attributes[attribute] != undefined) {
          return attributes[attribute]; //my answer
        }
      };
    
    var setAttribute = function(attribute, value) {
        if (attributes[attribute] != undefined) { //my answer
          attributes[attribute] = value;
        } 
      };

    return {
        getAttribute: getAttribute,
        setAttribute: setAttribute
    };
};