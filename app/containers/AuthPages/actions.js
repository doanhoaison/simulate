/*
 *
 * AuthPages actions
 *
 */

import { SUBMIT } from "./constants";

export function submit(data, formType, callbackError, callbackSuccess) {
  console.log('get action');
  return {
    type: SUBMIT,
    data,
    formType,
    callbackError,
    callbackSuccess
  };
}
