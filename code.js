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
        review:"I love the way it builds up and breaks you. The theme is way too relevant in today's world. Momma likey! 10 out 10 anarchy cookies.",
        img:"images/1984.png",
    },
    {
        title:"The Metamorfosis",
        author:"Franz Kafka",
        pages:"125",
        isRead:true,
        review:"I've always seen my husband as a cockroach, and i was reading this to ignore him, so... 0 out of 1 happily married couples.",
        img:"images/metamorfosis.jpeg",
    },
    {
        title:"Más liviano que el aire",
        author:"Federico Jeanmaire",
        pages:"238",
        isRead:true,
        review:"Old woman has fun? Count me in! 6 out of 6 people is the total of them.",
        img:"images/maslivianoqueelaire.jpg",
    },
    {
        title:"Le Petit Prince",
        author:"Antoine de Saint-Exupéry",
        pages:"94",
        isRead:true,
        review:"I would like it to continue forever and ever. Read it to mi nephew a few times, he said GRANDMA PLEASE GO AWAY IM WORKING, he is so lovely.",
        img:"images/lepetitprince.jpg",
    },
    {
        title:"Brave New World",
        author:"Aldous Huxley",
        pages:"211",
        isRead:true,
        review:"Are you who you are by choice or by systematic engineering? Beep Boop. Let's hope we don't get to this, great book though. 2/6 is todays date. Want a cookie score? Then send me ingredients!",
        img:"images/bravenewworld.jpg",
    },
    {
        title:"1985",
        author:"Georger Orwellier",
        pages:"More than 150",
        isRead:true,
        review:"I hate how it is just 1984 with the verbs adjusted to be better than it's predecesor. 10 out 10 ironic invisible cookies.",
        img:"images/1985.jpg",
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
        readButton.dataset.element = i;
        if (myBook.isRead){
            readButton.textContent = "Read!";
            readButton.classList.add("y");
        }else{
            readButton.textContent = "Not Read";
            readButton.classList.add("n");
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
function addPopup(){
    const popup = document.createElement("div");
    popup.classList.add('popup');
    htmlContainer.appendChild(popup);

    const formTitle = document.createElement("h3");
    formTitle.classList.add("formTitle");
    formTitle.textContent = "Adding a new opinionated book review!";
    popup.appendChild(formTitle);

    const buttonCancel = document.createElement("button");
    buttonCancel.classList.add("button");
    buttonCancel.id="cancel";
    buttonCancel.type = "button";
    buttonCancel.textContent = "X"
    popup.appendChild(buttonCancel);
    buttonCancel.addEventListener("click", () =>{
        htmlContainer.removeChild(popup);
    });

    const formContainer = document.createElement("form");
    formContainer.classList.add("form");
    formContainer.action = "code.js";
    formContainer.method = "post";
    popup.appendChild(formContainer);

    const divBlockOne = document.createElement("div");
    divBlockOne.classList.add("block");
    formContainer.appendChild(divBlockOne);

        const labelTitle = document.createElement("label");
        labelTitle.htmlFor = "bookTitle";
        labelTitle.textContent = "Book Title:"
        divBlockOne.appendChild(labelTitle);

        const inputTitle = document.createElement("input");
        inputTitle.classList.add("input")
        inputTitle.id = "bookTitle";
        inputTitle.name = "bookTitle";
        inputTitle.type="text";
        //inputTitle.value="";
        inputTitle.placeholder="Momma Potter & The New Books";
        divBlockOne.appendChild(inputTitle);

    const divBlockTwo = document.createElement("div");
    divBlockTwo.classList.add("block");
    formContainer.appendChild(divBlockTwo);

        const labelAuthor = document.createElement("label");
        labelAuthor.htmlFor = "bookAuthor";
        labelAuthor.textContent = "Book Author:"
        divBlockTwo.appendChild(labelAuthor);

        const inputAuthor = document.createElement("input");
        inputAuthor.classList.add("input")
        inputAuthor.id = "bookAuthor";
        inputAuthor.name = "bookAuthor";
        inputAuthor.type="text";
        //inputAuthor.value="";
        inputAuthor.placeholder="Englandesha Womanesha"
        divBlockTwo.appendChild(inputAuthor);

    const divBlockThree = document.createElement("div");
    divBlockThree.classList.add("block");
    formContainer.appendChild(divBlockThree);

        const labelPages = document.createElement("label");
        labelPages.htmlFor = "bookPages";
        labelPages.textContent = "Book Pages:";
        divBlockThree.appendChild(labelPages);

        const inputPages = document.createElement("input");
        inputPages.classList.add("input")
        inputPages.id = "bookPages";
        inputPages.name = "bookPages";
        inputPages.type="text";
        //inputPages.value="";
        inputPages.placeholder="A million boring pages long"
        divBlockThree.appendChild(inputPages);

    const divBlockFour = document.createElement("div");
    divBlockFour.classList.add("block");
    formContainer.appendChild(divBlockFour);

        const pIsRead = document.createElement("p");
        pIsRead.htmlFor = "bookIsRead";
        pIsRead.textContent = "Have you read this?"
        divBlockFour.appendChild(pIsRead);

        const labelRead = document.createElement("label");
        labelRead.htmlFor = "bookIsRead";
        labelRead.textContent = "Read";
        divBlockFour.appendChild(labelRead);

        const radioRead = document.createElement("input");
        radioRead.classList.add("input")
        radioRead.id = "bookRead";
        radioRead.name = "bookIsRead";
        radioRead.type="radio";
        radioRead.value=true;
        divBlockFour.appendChild(radioRead);

        const labelNotRead = document.createElement("label");
        labelNotRead.htmlFor = "bookIsRead";
        labelNotRead.textContent = "Not Read";
        divBlockFour.appendChild(labelNotRead);

        const radioNotRead = document.createElement("input");
        radioNotRead.classList.add("input")
        radioNotRead.id = "bookNotRead";
        radioNotRead.name = "bookIsRead";
        radioNotRead.type="radio";
        radioNotRead.value=false;
        radioNotRead.checked=true;
        divBlockFour.appendChild(radioNotRead);

    const divBlockFive = document.createElement("div");
    divBlockFive.classList.add("block");
    formContainer.appendChild(divBlockFive);

        const labelImage = document.createElement("label");
        labelImage.htmlFor = "bookImage";
        labelImage.textContent = "Book Image URL:";
        divBlockFive.appendChild(labelImage);

        const inputImage = document.createElement("input");
        inputImage.classList.add("input")
        inputImage.id = "bookImage";
        inputImage.name = "bookImage";
        inputImage.type="url";
        //inputImage.value="";
        inputImage.placeholder="https://link.com/images/yourimage.jpg";
        divBlockFive.appendChild(inputImage);

    const divBlockSix = document.createElement("div");
    divBlockSix.classList.add("block");
    formContainer.appendChild(divBlockSix);

        const labelReview = document.createElement("label");
        labelReview.htmlFor = "bookReview";
        labelReview.textContent = "Your Opinionated(tm) Book Review:";
        divBlockSix.appendChild(labelReview);

        const textAreaReview = document.createElement("textarea");
        textAreaReview.classList.add("input")
        textAreaReview.id = "bookReview";
        textAreaReview.name = "bookReview";
        textAreaReview.placeholder="I believe this book to be great as a paper-weight or for keeping a table in balance. 10 out of 10 would use to start a fire.";
        divBlockSix.appendChild(textAreaReview);

    const divBlockSeven = document.createElement("div");
    divBlockSeven.classList.add("block");
    formContainer.appendChild(divBlockSeven);

        const buttonSubmit = document.createElement("button");
        buttonSubmit.classList.add("button");
        buttonSubmit.type = "button"; //For real back end should be "submit"
        buttonSubmit.textContent = "Add New Book!";
        divBlockSeven.appendChild(buttonSubmit);
        buttonSubmit.addEventListener("click", () =>{
            
            const newTitle = document.getElementById("bookTitle").value;
            const newAuthor = document.getElementById("bookAuthor").value;
            const newPages = document.getElementById("bookPages").value;
            const newIsRead = document.getElementById("bookRead").checked; //if it is checked then its true its read.
            const newImage = document.getElementById("bookImage").value;
            const newReview = document.getElementById("bookReview").value;
            if ( (newTitle == "") || (newAuthor == "") || (newPages == "") || (newImage == "") || (newReview == "") ) {
                alert("Momma only takes fully opinionated reviews, you can't just leave blank fields, jazz it up a little deary.");
                
            }else{
                let newBook = new LibraryBook;
                newBook.title = newTitle;
                newBook.author = newAuthor;
                newBook.pages = newPages;
                newBook.isRead = newIsRead;
                newBook.img = newImage;
                newBook.review = newReview;
                addBookToLibrary(newBook);
                console.log(myLibrary);
                fillCards([newBook]);
                htmlContainer.removeChild(popup);
            }
            
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

const readBookButtons = document.querySelectorAll(".read-button");
readBookButtons.forEach((readButton)=>{
    readButton.addEventListener("click",()=>{
        //button toggle design append CSS class
        //change book state in object
        const selectedBookPointer = readButton.getAttribute("data-element");
        if (myLibrary[selectedBookPointer].isRead == true){
            myLibrary[selectedBookPointer].isRead = false;
            readButton.classList.replace("y","n");
            readButton.textContent= "Not Read";
        }else{
            myLibrary[selectedBookPointer].isRead = true;
            readButton.classList.replace("n","y");
            readButton.textContent= "Read!";
        }
        
    });
});
const htmlContainer = document.querySelector(".container");
const addBook = document.querySelector("#add-book");

addBook.addEventListener("click",()=>{
    //Add a pop up form to input new Book Review data
    addPopup();

        
    /*
    div.popup
        h3.formTitle
        form.newBook
            div.block
                label.booktitle
                input.bookTitle
            input.bookAuthor
            input.bookPages
            input.bookIsRead
            input.bookReview
            input.bookImageLink
            button.sendForm
            button.cancel
    */
});

//find a way to add an absolute positioned div as a pop-up to fill, 
//and dont forget to add a cancel button



/* Pending
-JS Delete Book Button DONE
-JS Add Book Button
-JS Read/Not Read Book Button DONE
-CSS Styling
*/