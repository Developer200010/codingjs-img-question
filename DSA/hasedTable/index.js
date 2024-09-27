let called = 0;

let hash = string => {
  called++;
  var hashed = 0;
  for (var i = 0; i < string.length; i++) {
    hashed += string.charCodeAt(i);
  }
  return hashed;
};

let HashTable = function() {
  this.collection = {};
  // Only change code below this line
  this.add = (key, value) => {
    const hashedKey = hash(key);
    this.collection[hashedKey] = this.collection[hashedKey] || {};
    console.log(this.collection[hashedKey])
    this.collection[hashedKey][key] = value;
    console.log(this.collection)
  }

  this.lookup = (key) => {
    const hashedKey = hash(key);
    return this.collection[hashedKey][key];
  }

  this.remove = (key) => {
    const hashedKey = hash(key);
    delete this.collection[hashedKey][key];
    if (Object.keys(this.collection[hashedKey]).length == 0)
      delete this.collection[hashedKey];
  }
  // Only change code above this line
};

const myH = new HashTable()
console.log(myH)
myH.add("apple", "fruit")
myH.add("banana", "fruit")
myH.add("maango", "fruit")
myH.add("tango", "fruit")




