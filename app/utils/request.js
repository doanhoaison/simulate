import cloneDeep from "lodash/cloneDeep";

/**
 * Parses the JSON returned by a network request
 *
 * @param  {object} response A response from a network request
 *
 * @return {object}          The parsed JSON from the request
 */
function parseJSON(response) {
  if (response.status === 204 || response.status === 205) {
    return null;
  }
  return response.json();
}

/**
 * Checks if a network request came back fine, and throws an error if not
 *
 * @param  {object} response   A response from a network request
 *
 * @return {object|undefined} Returns either the response, or throws an error
 */
function checkStatus(response) {
  console.log("response", response);
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * @return {object}           The response data
 */
export default function request(url, options = {}) {
  const reqOptions = cloneDeep(options);

  if (!options.headers) {
    reqOptions.headers = Object.assign(
      {},
      {
        'Content-Type': 'application/json',
      }
    );
  } else if (options.headers["Content-Type"] === "multipart/form-data") {
    reqOptions.headers["Content-Type"] = undefined;
  } else {
    reqOptions.headers = Object.assign({}, options.headers);
  }

      reqOptions.body = JSON.stringify(options.body)
  console.log('JSON.stringtify(option): ', reqOptions);


  return fetch(url, reqOptions)
    .then(checkStatus)
    .then(parseJSON);
}
