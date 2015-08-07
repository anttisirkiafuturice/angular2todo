export class TodoStore {
    constructor(){
        this.todoList = [];
    }
    add(item){
        this.todoList.unshift({text:item,done:false});
        console.log('TodoStore, after adding new item: ' , this.todoList);
    }
}