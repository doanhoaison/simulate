/*
 *
 * AuthPages actions
 *
 */

import { SUBMIT } from "./constants";

export function submit(data, formType, callbackError, callbackSuccess) {
  return {
    type: SUBMIT,
    data,
    formType,
    callbackError,
    callbackSuccess
  };
}
