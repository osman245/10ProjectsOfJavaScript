class Book {
  clientName;
  authorName;
  pageNumber;

  constructor(clientName, authorName, pageNumber) {
    this.clientName = clientName;
    this.authorName = authorName;
    this.pageNumber = pageNumber;
  }
}

class Borrow extends Add {
  borrow;
  constructor(clientName, authorName, pageNumber) {
    super(clientName, authorName, pageNumber); // call the super class constructor and pass in the name parameter
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}
