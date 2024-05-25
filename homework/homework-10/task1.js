import { EBook } from "./Ebook.js"
import { Book } from "./Book.js";
const book1 = new Book("It", "Steven King", 1986)
const ebook1 = new EBook("Becoming", "Michelle Obama", 2018, "pdf")
const book2 = new Book("The Prince", "Niccolò di Bernardo dei Machiavelli", 1532)
const arr = [book1, ebook1, book2]
book1.printInfo()
ebook1.printInfo()

ebook1.fileFormat = "txt";
console.log(ebook1.fileFormat);
console.log(Book.getOldestBook(arr));
const ebook2 = EBook.digitalize(book1);
console.log(ebook2);
