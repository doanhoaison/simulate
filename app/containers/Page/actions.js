/*
 *
 * Page actions
 *
 */

import { DEFAULT_ACTION, SET_USER_INFO } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}


export function setUserInfo(data) {
  return {
    type: SET_USER_INFO,
    data,
  }
}