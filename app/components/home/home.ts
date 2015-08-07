import {Component, View, NgFor} from 'angular2/angular2';
import {TodoStore} from '../../services/TodoStore';

@Component({
  selector: 'todo-list'
})
@View({
  templateUrl: './components/home/home.html?v=<%= VERSION %>',
  directives: [NgFor]
})
export class Home {
	todoStore: TodoStore;

	constructor(todoStore: TodoStore) {
		this.todoStore = todoStore;
	}

	add($event,newtodo){
      if($event.which === 13 && newtodo.value.length > 0){
      	console.log('adding new item');
        this.todoStore.add(newtodo.value);
        newtodo.value = '';
      }
  	}

  	toggleTodoState(todo){
    	todo.done = !todo.done;
    	console.log('toggling done, new state: ' , todo.done );
  	}
}
