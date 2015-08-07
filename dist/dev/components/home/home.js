var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var TodoStore_1 = require('../../services/TodoStore');
var Home = (function () {
    function Home(todoStore) {
        this.todoStore = todoStore;
    }
    Home.prototype.add = function ($event, newtodo) {
        if ($event.which === 13 && newtodo.value.length > 0) {
            console.log('adding new item');
            this.todoStore.add(newtodo.value);
            newtodo.value = '';
        }
    };
    Home.prototype.toggleTodoState = function (todo) {
        todo.done = !todo.done;
        console.log('toggling done, new state: ', todo.done);
    };
    Home = __decorate([
        angular2_1.Component({
            selector: 'todo-list'
        }),
        angular2_1.View({
            templateUrl: './components/home/home.html?v=0.0.0',
            directives: [angular2_1.NgFor]
        }), 
        __metadata('design:paramtypes', [TodoStore_1.TodoStore])
    ], Home);
    return Home;
})();
exports.Home = Home;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaG9tZS9ob21lLnRzIl0sIm5hbWVzIjpbIkhvbWUiLCJIb21lLmNvbnN0cnVjdG9yIiwiSG9tZS5hZGQiLCJIb21lLnRvZ2dsZVRvZG9TdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx5QkFBcUMsbUJBQW1CLENBQUMsQ0FBQTtBQUN6RCwwQkFBd0IsMEJBQTBCLENBQUMsQ0FBQTtBQUVuRDtJQVVDQSxjQUFZQSxTQUFvQkE7UUFDL0JDLElBQUlBLENBQUNBLFNBQVNBLEdBQUdBLFNBQVNBLENBQUNBO0lBQzVCQSxDQUFDQTtJQUVERCxrQkFBR0EsR0FBSEEsVUFBSUEsTUFBTUEsRUFBQ0EsT0FBT0E7UUFDYkUsRUFBRUEsQ0FBQUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsS0FBS0EsS0FBS0EsRUFBRUEsSUFBSUEsT0FBT0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsTUFBTUEsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQUEsQ0FBQ0E7WUFDbkRBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLGlCQUFpQkEsQ0FBQ0EsQ0FBQ0E7WUFDOUJBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLEdBQUdBLENBQUNBLE9BQU9BLENBQUNBLEtBQUtBLENBQUNBLENBQUNBO1lBQ2xDQSxPQUFPQSxDQUFDQSxLQUFLQSxHQUFHQSxFQUFFQSxDQUFDQTtRQUNyQkEsQ0FBQ0E7SUFDSkEsQ0FBQ0E7SUFFREYsOEJBQWVBLEdBQWZBLFVBQWdCQSxJQUFJQTtRQUNsQkcsSUFBSUEsQ0FBQ0EsSUFBSUEsR0FBR0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0E7UUFDdkJBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLDRCQUE0QkEsRUFBR0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBRUEsQ0FBQ0E7SUFDekRBLENBQUNBO0lBekJKSDtRQUFDQSxvQkFBU0EsQ0FBQ0E7WUFDVEEsUUFBUUEsRUFBRUEsV0FBV0E7U0FDdEJBLENBQUNBO1FBQ0RBLGVBQUlBLENBQUNBO1lBQ0pBLFdBQVdBLEVBQUVBLDhDQUE4Q0E7WUFDM0RBLFVBQVVBLEVBQUVBLENBQUNBLGdCQUFLQSxDQUFDQTtTQUNwQkEsQ0FBQ0E7O2FBb0JEQTtJQUFEQSxXQUFDQTtBQUFEQSxDQTFCQSxBQTBCQ0EsSUFBQTtBQW5CWSxZQUFJLE9BbUJoQixDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvaG9tZS9ob21lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIFZpZXcsIE5nRm9yfSBmcm9tICdhbmd1bGFyMi9hbmd1bGFyMic7XG5pbXBvcnQge1RvZG9TdG9yZX0gZnJvbSAnLi4vLi4vc2VydmljZXMvVG9kb1N0b3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndG9kby1saXN0J1xufSlcbkBWaWV3KHtcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbXBvbmVudHMvaG9tZS9ob21lLmh0bWw/dj08JT0gVkVSU0lPTiAlPicsXG4gIGRpcmVjdGl2ZXM6IFtOZ0Zvcl1cbn0pXG5leHBvcnQgY2xhc3MgSG9tZSB7XG5cdHRvZG9TdG9yZTogVG9kb1N0b3JlO1xuXG5cdGNvbnN0cnVjdG9yKHRvZG9TdG9yZTogVG9kb1N0b3JlKSB7XG5cdFx0dGhpcy50b2RvU3RvcmUgPSB0b2RvU3RvcmU7XG5cdH1cblxuXHRhZGQoJGV2ZW50LG5ld3RvZG8pe1xuICAgICAgaWYoJGV2ZW50LndoaWNoID09PSAxMyAmJiBuZXd0b2RvLnZhbHVlLmxlbmd0aCA+IDApe1xuICAgICAgXHRjb25zb2xlLmxvZygnYWRkaW5nIG5ldyBpdGVtJyk7XG4gICAgICAgIHRoaXMudG9kb1N0b3JlLmFkZChuZXd0b2RvLnZhbHVlKTtcbiAgICAgICAgbmV3dG9kby52YWx1ZSA9ICcnO1xuICAgICAgfVxuICBcdH1cblxuICBcdHRvZ2dsZVRvZG9TdGF0ZSh0b2RvKXtcbiAgICBcdHRvZG8uZG9uZSA9ICF0b2RvLmRvbmU7XG4gICAgXHRjb25zb2xlLmxvZygndG9nZ2xpbmcgZG9uZSwgbmV3IHN0YXRlOiAnICwgdG9kby5kb25lICk7XG4gIFx0fVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9