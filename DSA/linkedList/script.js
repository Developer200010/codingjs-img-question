class LinkedList{
    constructor(data){
        this.head = {
            value : data,
            next : null
        }
        this.tail = this.head
        this.size = 1;
    }
    append(newElement){
        let newNode = {
            value : newElement,
            next : null
        }
        this.tail.next = newNode;
        this.tail = newNode;
        this.size++;
    }

    traversing(){
        let counter = 0;
        let currentNode = this.head;
        while(counter < this.size){
            console.log(currentNode)
            currentNode = currentNode.next;
            counter++;
        }
    }
    deleteNode(index){
        let counter = 1;
        let lead = this.head;
        if(index === 1){
            this.head = this.head.next;
        }else{
            while(counter<index-1){
                lead = lead.next;
                counter++;
            }
            let nextNode = lead.next.next;
            lead.next = nextNode;
            console.log(nextNode, " deleted node ")
            console.log(lead)
        }
    }
   
}

let myl = new LinkedList(100)


myl.append(200)
myl.append(300)
myl.append(400)
// myl.traversing()

myl.deleteNode(3)
console.log(myl)