//Let's try git branch

function Person(name) {
  this.name = name;
  this.greeting = function() {
    alert('Hi! I\'m ' + this.name + '.');
  };
}

var person1 = new Person('Steve');
var person2 = new Person('Andrea');
person1.greeting(); // 'Hi! I'm steve'
person2.greeting();

//add Jesus, Daniel, Andrea
