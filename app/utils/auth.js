import isEmpty from 'lodash/isEmpty';
const USER_INFO = 'user_info';

const auth = {
     get(key) {
        if(localStorage && localStorage.getItem(key)) {
            return JSON.parse(localStorage.getItem(key)) || null;
        }
        return null;
    },
    set(value, key, isLocalStorage=true) {
        if(isEmpty(value)) {
            return null;
        }
        if(isLocalStorage && localStorage) {
            return localStorage.setItem(key, JSON.stringify(value));
        }
    },
    getUserInfo(userInfo=USER_INFO) {
        return auth.get(userInfo);
        return data;
    },
    setUserInfo(value = '', isLocalStorage=true, userInfo=USER_INFO) {
        return auth.set(value, userInfo, isLocalStorage);
    }
}
export default auth;
