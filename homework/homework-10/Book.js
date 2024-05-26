export class Book{
    constructor(title, author, publishYear){
        this._title = title;
        this._author = author;
        this._publishYear = publishYear;
    }
    get title(){
        return this._title
    }
    set title(title){
        if(typeof title !=='string'){
            console.log("The title should be a string type");
            return;
        }
        this._title = title;
    }
    get author(){
        return this._author
    }
    set author(author){
        if(typeof author !=='string'){
            console.log("The name of author should be a string type");
            return;
        }
        this._author = author;
    }
    get publishYear(){
        return this._publishYear
    }
    set publishYear(publishYear){
        if(typeof publishYear !=='number'){
            console.log("The publish year should be a number type");
            return;
        }
        this._publishYear = publishYear;
    }
    printInfo(){
        let printText = `Title is "${this.title}", published in ${this.publishYear} by ${this.author}`
        console.log(printText);
    }
    static getOldestBook(arr) {
        let oldestBook = arr[0]
        arr.forEach(element => {
            if(oldestBook._publishYear > element._publishYear) oldestBook = element
        });
        return oldestBook;
    }
}