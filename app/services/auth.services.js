import { FORM_TYPE_REGISTER, FORM_TYPE_LOGIN } from '../containers/AuthPages/constants';
import request from '../utils/request';

import env from '../env';

export function submitFormAuthPage(formType, body) {
    let requestURL;

    switch (formType) {
        case FORM_TYPE_REGISTER:
            requestURL =`${env.API_URL}/users/register`;
            break;
        case FORM_TYPE_LOGIN:
            requestURL =  `${env.API_URL}/users/login`;
        default:
            break;
    }

    return request(requestURL, { method: 'POST', body });
}