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
    clear(key) {
        if(localStorage && localStorage.getItem(key)) {
            return localStorage.removeItem(key);
        }
        return null;
    },
    getUserInfo(userInfo=USER_INFO) {
        return auth.get(userInfo);
    },
    setUserInfo(value = '', isLocalStorage=true, userInfo=USER_INFO) {
        return auth.set(value, userInfo, isLocalStorage);
    },
    clearUserInfo(userInfo=USER_INFO) {
        console.log('clear User infoe');
        return auth.clear(userInfo);
    }
}
export default auth;
