// function circleQueue(n) {
//   var collection = [];
//   let rear = -1;
//   let size = n;
//   this.print = function () {
//     console.log(collection);
//   };
//   this.enqeue = function (val) {
//     if (rear == size - 1) {
//       console.log("queue is full");
//     } else {
//       rear++;
//       collection[rear] = val;
//     }
//   };
//   this.dequeue = function () {
//     if (rear == -1) {
//       console.log("queue is empty");
//     }
//     const result = collection[0];
//     for (let i = 0; i < rear; i++) {
//       collection[i] = collection[i + 1];
//     }
//     rear--;
//     console.log(result);
//   };
//   this.peek = function () {
//     if (rear == -1) {
//       console.log("collection is empty");
//     }
//     return collection[0];
//   };
// }

// const myq = new circleQueue(4);
// myq.enqeue(10);
// myq.enqeue(20);
// myq.enqeue(30);
// myq.enqeue(40);

// myq.dequeue();

// console.log(myq.peek() + " front value of the collection");

// myq.print();

// // time complexity big O(n)