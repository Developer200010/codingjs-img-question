function linkedList(){
    var length = 0;
    var head = null;
    
    function Node(element){
        this.element = element;
        this.next = null;
    }
    this.add = function(element){
        const node = new Node(element);
        console.log(node)
        if(head !==null){
            let current = head
            while(current.next !== null){
                current = current.next
            }
            current.next = node
        }else{
            head = node
        }
        length++;
        
    }
    
    this.size = function(){
        return length;
    }
}

const list = new linkedList()
console.log(list)

list.add(12)
list.add(92)
list.add(9)
list.add(9)

console.log(list.size())
