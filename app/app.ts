import {Component, View, bootstrap} from 'angular2/angular2';
import {RouteConfig, RouterOutlet, RouterLink, routerInjectables} from 'angular2/router';

import {Home} from './components/home/home';
import {About} from './components/about/about';
import {TodoStore} from './services/TodoStore';


@Component({
  selector: 'app',
  viewInjector: [TodoStore]
})
@RouteConfig([
  { path: '/', component: Home, as: 'home' }
  { path: '/about', component: About, as: 'about' }
])
@View({
  templateUrl: './app.html?v=<%= VERSION %>',
  directives: [RouterOutlet, RouterLink]
})
class App {}


bootstrap(App, [routerInjectables]);
