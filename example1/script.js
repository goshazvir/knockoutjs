function myForm() {
  this.firstName  = ko.observable();
  this.lastName  = ko.observable();
}

ko.applyBindings( new myForm() );