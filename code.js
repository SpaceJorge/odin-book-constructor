function Book(title,author,pages,isRead){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.isRead=isRead;
}

Book.prototype.info = function(){
    let string = this.title + " by " + this.author + ", " + this.pages + " pages, " ;
    if (this.isRead == true){
        return string + "already read.";
    }
    return string + "not read yet.";
}   

const farenheit = new Book("Farenheit 451","Ray Bradbury","123",true);
console.log(farenheit.info());

function BadBook(title, author, pages, isRead, comment){
    Book.call(this, title, author, pages, isRead, comment)
    this.comment = comment;
}
Object.setPrototypeOf(BadBook.prototype, Book.prototype); // Or BadBook.prototype = Object.create(Book.prototype);
BadBook.prototype.badMouth = function() {
    return `What i really think about ${this.title} by ${this.author} is: ${this.comment}. Why is it ${this.pages} pages long? The mystery remains.`;
}

const harryPotter = new BadBook("Harry Potter & All Of His Boring Books", "An English Woman", "infinite",false,"I wouldn't touch this book.");
BadBook.prototype = Object.create(Book.prototype);

console.log( harryPotter.info() );
console.log(harryPotter.badMouth());
