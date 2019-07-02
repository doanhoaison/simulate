import { defineMessage } from 'react-intl';

const scope = 'app/containers/AuthPages/FormRegister';

export default defineMessage({
    phoneRequired: {
        id: `${scope}.phoneRequired`,
        title: 'Vui lòng nhập số điện thoại'
    },
    passwordRequired: {
        id: `${scope}.passwordRequired`,
        title: 'Vui lòng nhập mật khẩu'
    },
    confirmPasswordRequired: {
        id: `${scope}.confirmPasswordRequired`,
        title: 'Vui lòng nhập lại mật khẩu'
    }
})