import { Book } from "./Book.js";

export class EBook extends Book{
    constructor(title, author, publishYear, fileFormat){
        super(title, author, publishYear)
        this._fileFormat = fileFormat

    }
    get fileFormat(){
        return this._fileFormat
    }
    set fileFormat(newFileFormat){
        if(typeof newFileFormat !== 'string'){
            console.log("The file format is not string");
            return
        }
        this._fileFormat = newFileFormat
    }

    printInfo(){
        let printText = `Title is "${this._title}", published in ${this._publishYear} by ${this._author}, file format is ${this._fileFormat}`
        console.log(printText);
    }
    static digitalize(book){
        const digitalCopy = new EBook(book._title, book._author, book._publishYear, "pdf")
        return digitalCopy;
    }
}