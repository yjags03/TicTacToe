var Person = function(firstAndLast) {
    this.firstname = firstAndLast.split(" ")[0];
    this.lastname = firstAndLast.split(" ")[1];
    this.fullname = firstAndLast;  
  
    //return firstAndLast;
};

Person.prototype.getFirstName = function(){
  return this.firstname;
};

Person.prototype.getLastName = function(){
  return this.lastname;
};

Person.prototype.getFullName = function(){
  return this.fullname;
};

Person.prototype.setFirstName = function(first){
  this.firstname = first;
};

Person.prototype.setLastName = function(last){
  this.lastname = last;
};

Person.prototype.setFullName = function(firstAndLast){
  this.fullname = firstAndLast;
};


var bob = new Person('Bob Ross');
console.log(bob.getLastName());
console.log(Object.keys(bob).length);
