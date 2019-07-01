import AuthPage from '../AuthPages/Loadable';
const authRoutes = [
  { path: '/auth/:authType', name: 'AuthPage', component: AuthPage },
];

export default authRoutes;
