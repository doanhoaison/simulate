import { createSelector } from "reselect";
import { initialState } from "./reducer";

/**
 * Direct selector to the authPages state domain
 */

const selectAuthPagesDomain = state => state.authPages || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by AuthPages
 */

const makeSelectAuthPages = () =>
  createSelector(
    selectAuthPagesDomain,
    substate => substate
  );

export default makeSelectAuthPages;
export { selectAuthPagesDomain };
