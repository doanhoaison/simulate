/**
 *
 * Asynchronously loads the component for AuthPages
 *
 */

import loadable from "utils/loadable";

export default loadable(() => import("./index"));
