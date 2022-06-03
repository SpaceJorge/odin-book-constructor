//Protitype Study Code

// Main Prototype Object
function Book(title,author,pages,isRead){
    //Add prototype atributes
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.isRead=isRead;
}
// Add a prototype function
Book.prototype.info = function(){
    let string = this.title + " by " + this.author + ", " + this.pages + " pages, " ;
    if (this.isRead == true){
        return string + "already read.";
    }
    return string + "not read yet.";
}   
//Create a new Object from the prototype
const farenheit = new Book("Farenheit 451","Ray Bradbury","123",true);
console.log(farenheit.info());
//Create a new Prototype that inherits from the Main Prototype
function BadBook(title, author, pages, isRead, comment){
    //call() adds Book parameters unto BadBook
    Book.call(this, title, author, pages, isRead)
    //comment is a new parameter that Book Objects wont have but BadBooks will
    this.comment = comment;
}
//The following code sets the prototype of BadBook to be Book, giving it all of its methods/functions
Object.setPrototypeOf(BadBook.prototype, Book.prototype); // Or BadBook.prototype = Object.create(Book.prototype);
BadBook.prototype.badMouth = function() {
    return `What i really think about ${this.title} by ${this.author} is: ${this.comment}. Why is it ${this.pages} pages long? The mystery remains.`;
}

const harryPotter = new BadBook("Harry Potter & All Of His Boring Books", "An English Woman", "infinite",false,"I wouldn't touch this book.");

console.log( harryPotter.info() );
console.log(harryPotter.badMouth());


//Project Library Code 

//Taking Book as a Prototype for practice, is not actually a meaningfull use of Prototype.
function LibraryBook(title, author, pages, isRead, review, img){
    Book.call(this, title, author, pages, isRead)
    this.review = review;
    this.img = img;
}
Object.setPrototypeOf(LibraryBook.prototype, Book.prototype); // Or BadBook.prototype = Object.create(Book.prototype);
LibraryBook.prototype.autoReview = function() {
    return `What i really think about ${this.title} by ${this.author} is: ${this.review}. Why is it ${this.pages} pages long? The mystery remains.`;
}
function addBookToLibrary(myBook){
    //do stuff here..
    myLibrary.push(myBook);
}
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

function fillCards(myLibrary){
    let i = 0;
    myLibrary.forEach(myBook => {
        
        //fill the cards, be one with the library
        const card = document.createElement("div");
        card.classList.add('card');
        card.dataset.delete = i;
        cardsContainer.appendChild(card);

        const imgContainer = document.createElement("span");
        imgContainer.classList.add("img-cont");
        card.appendChild(imgContainer);

        const img = document.createElement("img");
        img.src = myBook.img;
        img.alt =`${myBook.title} Image`;
        img.height= "20px" ;
        imgContainer.appendChild(img);

        const wordsContainer = document.createElement("div");
        wordsContainer.classList.add("words");
        card.appendChild(wordsContainer);

        const title = document.createElement("p");
        title.classList.add("title");
        title.textContent = myBook.title;
        wordsContainer.appendChild(title);

        const author = document.createElement("p");
        author.classList.add("author");
        author.textContent = myBook.author;
        wordsContainer.appendChild(author);        

        const pages = document.createElement("p");
        pages.classList.add("pages");
        pages.textContent = myBook.pages;
        wordsContainer.appendChild(pages);

        const review = document.createElement("p");
        review.classList.add("review");
        review.textContent = myBook.review;
        wordsContainer.appendChild(review);

        const readButton = document.createElement("button");
        readButton.classList.add("read-button");
        if (myBook.isRead){
            readButton.textContent = "Read!";
        }else{
            readButton.textContent = "Not Read";
        }
        wordsContainer.appendChild(readButton);

        const removeBookButton = document.createElement("button");
        removeBookButton.classList.add("remove");
        removeBookButton.dataset.delete = i;
        removeBookButton.textContent = "Remove Book";
        wordsContainer.appendChild(removeBookButton);

        i++;
    });
}

const cardsContainer = document.querySelector('#library');

fillCards(myLibrary);

const deleteBookButtons = document.querySelectorAll(".remove");
deleteBookButtons.forEach((deleteButton) => {
    deleteButton.addEventListener("click",() =>{
        const deletedBookPointer = deleteButton.getAttribute("data-delete");
        myLibrary.splice(deletedBookPointer,1); //remove from object
        const cardLibrary = document.querySelector("#library");
        cardLibrary.removeChild(deleteButton.parentElement.parentElement); //remove card from library
        //This method lacks a redefinition of data-delete elements, 
        //so new elements should append taking the highest data- element into account
        
    });
});


/* Pending
-JS Delete Book Button DONE
-JS Add Book Button
-JS Read/Not Read Book Button
-CSS Styling
*/