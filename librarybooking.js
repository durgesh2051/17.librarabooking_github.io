class Employee {
    constructor(book_name, book_issue_date, book_reaten_date) {
        this.book_name = book_name;
        this.book_issue_date = book_issue_date;
        this.book_reaten_date = book_reaten_date;

    }
}
var k ="The Jungle Book";
var i = "23/06/2023";
var j = "24/07/2023";

const employee1 = new Employee(k, i, j);
console.log("Employee book_name:" + employee1.book_name);
console.log("Employee book_issue_date:" + employee1.book_issue_date);
console.log("Employee book_reaten_date:" + employee1.book_reaten_date);
