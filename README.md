# odin-book-constructor
An Odin JS Object Consructor exercise.

All of your book objects are going to be stored in a simple array, so add a function to the script (not the constructor) that can take user’s input and store the new book objects into an array. Your code should look something like this:
function addBookToLibrary(){
    //do stuff here..
}

Write a function that loops through the array and displays each book on the page. You can display them in some sort of table, or each on their own “card”. It might help for now to manually add a few books to your array so you can see the display.

Add a “NEW BOOK” button that brings up a form allowing users to input the details for the new book: author, title, number of pages, whether it’s been read and anything else you might want.

Add a button on each book’s display to remove the book from the library.
    You will need to associate your DOM elements with the actual book objects in some way. One easy solution is giving them a data-attribute that corresponds to the index of the library array.

Add a button on each book’s display to change its read status.
    To facilitate this you will want to create the function that toggles a book’s read status on your Book prototype instance.
    
// Text Data Dump in case i eliminate it in a mistake.
let myLibrary = [
    {
        title:"1984",
        author:"George Orwell",
        pages:"150aprox.",
        isRead:true,
        review:"I love the way it builds up and breaks you. The theme is way too relevant in todays world. Momma likey! 10 out 10 anarchy cookies.",
        img:"put the URL link here",
    },
    {
        title:"Metamorfosis",
        author:"Franz Kafka",
        pages:"125",
        isRead:true,
        review:"I've always seen my husband as a cockroach, and i was reading this to ignore him, so... 0 out of 1 happily married couples.",
        img:"put the URL link here",
    },
    {
        title:"Más liviano que el aire",
        author:"Federico Jeanmaire",
        pages:"238",
        isRead:true,
        review:"Old woman has fun? Count me in! 6 out of 6 people is the total of them.",
        img:"put the URL link here",
    },
    {
        title:"Le Petit Prince",
        author:"Antoine de Saint-Exupéry",
        pages:"94",
        isRead:true,
        review:"I would like it to continue forever and ever. Read it to mi nephew a few times, he said GRANDMA PLEASE GO AWAY IM WORKING, he is so lovely.",
        img:"put the URL link here",
    },
    {
        title:"Brave New World",
        author:"Aldous Huxley",
        pages:"211",
        isRead:true,
        review:"Are you who you are by choice or by systematic engineering? Bip Bup. Let's hope we don't get to this, great book though. 2/6 is todays date. Want a cookie score? Then send me ingredients!",
        img:"put the URL link here",
    },
    {
        title:"1985",
        author:"Georger Orwellier",
        pages:"More than 150",
        isRead:true,
        review:"I hate how it is just 1984 with the verbs adjusted to be better than it's predecesor. 10 out 10 ironic invisible cookies.",
        img:"put the URL link here",
    },
];