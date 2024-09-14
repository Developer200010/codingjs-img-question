function queue(){
    var collection = [];
    this.print = function(){
        console.log(collection);
    }
    this.enqueue = function(val){
        return collection.push(val)
    }
    this.dequeue = function(){
        return collection.shift();
    }
    this.isEmpty = function(){
        return collection.length === 0;
    }
}

const myQueue = new queue();
myQueue.enqueue(10);
myQueue.print()