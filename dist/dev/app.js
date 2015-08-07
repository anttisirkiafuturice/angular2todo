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
var router_1 = require('angular2/router');
var home_1 = require('./components/home/home');
var about_1 = require('./components/about/about');
var TodoStore_1 = require('./services/TodoStore');
var App = (function () {
    function App() {
    }
    App = __decorate([
        angular2_1.Component({
            selector: 'app',
            viewInjector: [TodoStore_1.TodoStore]
        }),
        router_1.RouteConfig([
            { path: '/', component: home_1.Home, as: 'home' },
            { path: '/about', component: about_1.About, as: 'about' }
        ]),
        angular2_1.View({
            templateUrl: './app.html?v=0.0.0',
            directives: [router_1.RouterOutlet, router_1.RouterLink]
        }), 
        __metadata('design:paramtypes', [])
    ], App);
    return App;
})();
angular2_1.bootstrap(App, [router_1.routerInjectables]);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6WyJBcHAiLCJBcHAuY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEseUJBQXlDLG1CQUFtQixDQUFDLENBQUE7QUFDN0QsdUJBQXVFLGlCQUFpQixDQUFDLENBQUE7QUFFekYscUJBQW1CLHdCQUF3QixDQUFDLENBQUE7QUFDNUMsc0JBQW9CLDBCQUEwQixDQUFDLENBQUE7QUFDL0MsMEJBQXdCLHNCQUFzQixDQUFDLENBQUE7QUFHL0M7SUFBQUE7SUFZV0MsQ0FBQ0E7SUFaWkQ7UUFBQ0Esb0JBQVNBLENBQUNBO1lBQ1RBLFFBQVFBLEVBQUVBLEtBQUtBO1lBQ2ZBLFlBQVlBLEVBQUVBLENBQUNBLHFCQUFTQSxDQUFDQTtTQUMxQkEsQ0FBQ0E7UUFDREEsb0JBQVdBLENBQUNBO1lBQ1hBLEVBQUVBLElBQUlBLEVBQUVBLEdBQUdBLEVBQUVBLFNBQVNBLEVBQUVBLFdBQUlBLEVBQUVBLEVBQUVBLEVBQUVBLE1BQU1BLEVBQUVBO1lBQzFDQSxFQUFFQSxJQUFJQSxFQUFFQSxRQUFRQSxFQUFFQSxTQUFTQSxFQUFFQSxhQUFLQSxFQUFFQSxFQUFFQSxFQUFFQSxPQUFPQSxFQUFFQTtTQUNsREEsQ0FBQ0E7UUFDREEsZUFBSUEsQ0FBQ0E7WUFDSkEsV0FBV0EsRUFBRUEsNkJBQTZCQTtZQUMxQ0EsVUFBVUEsRUFBRUEsQ0FBQ0EscUJBQVlBLEVBQUVBLG1CQUFVQSxDQUFDQTtTQUN2Q0EsQ0FBQ0E7O1lBQ1VBO0lBQURBLFVBQUNBO0FBQURBLENBWlgsQUFZWUEsSUFBQTtBQUdaLG9CQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsMEJBQWlCLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBWaWV3LCBib290c3RyYXB9IGZyb20gJ2FuZ3VsYXIyL2FuZ3VsYXIyJztcbmltcG9ydCB7Um91dGVDb25maWcsIFJvdXRlck91dGxldCwgUm91dGVyTGluaywgcm91dGVySW5qZWN0YWJsZXN9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5cbmltcG9ydCB7SG9tZX0gZnJvbSAnLi9jb21wb25lbnRzL2hvbWUvaG9tZSc7XG5pbXBvcnQge0Fib3V0fSBmcm9tICcuL2NvbXBvbmVudHMvYWJvdXQvYWJvdXQnO1xuaW1wb3J0IHtUb2RvU3RvcmV9IGZyb20gJy4vc2VydmljZXMvVG9kb1N0b3JlJztcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAnLFxuICB2aWV3SW5qZWN0b3I6IFtUb2RvU3RvcmVdXG59KVxuQFJvdXRlQ29uZmlnKFtcbiAgeyBwYXRoOiAnLycsIGNvbXBvbmVudDogSG9tZSwgYXM6ICdob21lJyB9XG4gIHsgcGF0aDogJy9hYm91dCcsIGNvbXBvbmVudDogQWJvdXQsIGFzOiAnYWJvdXQnIH1cbl0pXG5AVmlldyh7XG4gIHRlbXBsYXRlVXJsOiAnLi9hcHAuaHRtbD92PTwlPSBWRVJTSU9OICU+JyxcbiAgZGlyZWN0aXZlczogW1JvdXRlck91dGxldCwgUm91dGVyTGlua11cbn0pXG5jbGFzcyBBcHAge31cblxuXG5ib290c3RyYXAoQXBwLCBbcm91dGVySW5qZWN0YWJsZXNdKTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==