function ShowMessage() {
  alert("Hello World!");
}

ShowMessage();

var person = {
  firstName: "James",
  lastName: "Bond",
  age: 15,
  getFullName: function() {
    return this.firstName + " " + this.lastName;
  }
};
