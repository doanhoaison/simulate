import { createBrowserHistory } from 'history';
const history = createBrowserHistory();

export function forwardTo(location) {
    history.push(location);
}
export default history;
