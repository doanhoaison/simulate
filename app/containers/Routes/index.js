import AuthPages from '../Page/AuthPages';
import HomePage from '../HomePage/Loadable';

const indexRoutes = [
  { path: '/auth', name: 'Auth', component: AuthPages },
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
];

export default indexRoutes;
