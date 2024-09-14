function Stack (){
    var collection = [];
    this.print = function(){
        console.log(collection)
    }
    this.push = function(val){
        return collection.push(val)
    }
    this.pop = function(){
        return collection.pop();
    }
    this.isEmpty = function(){
        return collection.length === 0;
    }
}

const myStack = new Stack();
myStack.push(10)
myStack.print();