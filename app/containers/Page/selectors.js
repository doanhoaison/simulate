/**
 * The global state selectors
 */

import { createSelector } from "reselect";
import { KEY_APP } from "./constants";

const selectPageDomain = state => {
  return state[KEY_APP];
};

const makeSelectUserInfo = () =>
  createSelector(
    selectPageDomain,
    subState => subState.userInfo
  );

export { makeSelectUserInfo };
