import UserProfile from '../UserProfile/Loadable';
import { routes } from './routeHelper';
import { eUserType } from '../../enums/userTypes';

export const userRoutes = [
    {
        path: routes.USER_PROFILE,
        component: UserProfile,
        roles: [...eUserType]
    }
]