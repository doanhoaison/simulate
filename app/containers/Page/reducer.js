/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import { SET_USER_INFO } from './constants';

// The initial state of the App
export const initialState = {
  loading: false,
  error: false,
  currentUser: false,
  userInfo: null,
  userData: {
    repositories: false,
  },
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SET_USER_INFO:
          draft.userInfo = action.data;
    }
  });

export default appReducer;
