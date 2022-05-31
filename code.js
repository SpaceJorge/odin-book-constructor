function Book(title,author,pages,isRead){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.isRead=isRead;
    this.info = function(){
        let string = this.title + " by " + this.author + ", " + this.pages + " pages, " ;
        if (this.isRead == true){
            return string + "already read.";
        }
        return string + "not read yet.";
    }
    
    
}const farenheit = new Book("Farenheit 451","Ray Bradbury","123",true);
console.log(farenheit.info());

/* info() doesnt work */
function BadBook(comment){
    this.comment = comment;
}

const harryPotter = new BadBook("I wouldn't touch this book.");
BadBook.prototype = Object.create(Book.prototype);

harryPotter.title = "Harry Potter & All Of His Boring Books";
harryPotter.author = "An English Woman";
harryPotter.pages = "infinite";
harryPotter.isRead = false;

console.log( harryPotter.info() );

