/**
=========================================================
* © 2019-2025 Ronan LE MEILLAT for SCTG Development
* 
* This program is free software: you can redistribute it and/or modify
* it under the terms of the GNU Affero General Public License as published by
* the Free Software Foundation, either version 3 of the License, or
* (at your option) any later version.
*
* This program is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
* GNU Affero General Public License for more details.
*
* You should have received a copy of the GNU Affero General Public License
* along with this program. If not, see <https://www.gnu.org/licenses/>.
=========================================================
*/
/**
 * Used to prevent loading api.js multiple times
 * @type {string}
 */
export const SCRIPT_ID = 'hcaptcha-api-script-id';

const HCAPTCHA_LOAD_FN_NAME = '_hcaptchaOnLoad';

let resolveFn;
let rejectFn;
const promise = new Promise((resolve, reject) => {
    resolveFn = resolve;
    rejectFn = reject;
});

/**
 * Async hcaptcha api.js loader.
 *
 * It makes sure `apiEndpoint` is loaded ONCE on the page despite calling this multiple times.
 *
 * Usage:
 * 1. import hcaptchaScript from './hcaptcha-script';
 * 2. when web component is mounted do:
 *      loadApiEndpointIfNotAlready('apiEndpoint', ...)
 *        .then(() => console.log('hcaptcha is loaded so it is safe to be used'))
 *        .catch((err) => console.error('failed to load the hcaptcha', err));
 *
 * @param config
 * @returns {Promise<void>}
 */
export function loadApiEndpointIfNotAlready(config) {
    if (window.hcaptcha) {
        // api.js is already present
        resolveFn();
        return promise;
    }
    if (document.getElementById(SCRIPT_ID)) {
        // api.js was already requested
        return promise;
    }
    // request api.js once
    window[HCAPTCHA_LOAD_FN_NAME] = resolveFn;
    const scriptSrc = getScriptSrc(config);
    const script = document.createElement('script');
    script.id = SCRIPT_ID;
    script.src = scriptSrc;
    script.async = true;
    script.defer = true;
    script.onerror = (event) => {
         
        console.error('Failed to load api: ' + scriptSrc, event);
        rejectFn('Failed to load api.js');
    };
    document.head.appendChild(script);
    return promise;
}

export function getScriptSrc(config) {
    let scriptSrc = config.apiEndpoint;
    scriptSrc = addQueryParamIfDefined(scriptSrc, 'render', 'explicit');
    scriptSrc = addQueryParamIfDefined(scriptSrc, 'onload', HCAPTCHA_LOAD_FN_NAME);
    scriptSrc = addQueryParamIfDefined(scriptSrc, 'recaptchacompat', config.reCaptchaCompat === false ? 'off' : null);
    scriptSrc = addQueryParamIfDefined(scriptSrc, 'hl', config.language);
    scriptSrc = addQueryParamIfDefined(scriptSrc, 'sentry', config.sentry);
    scriptSrc = addQueryParamIfDefined(scriptSrc, 'endpoint', config.endpoint);
    scriptSrc = addQueryParamIfDefined(scriptSrc, 'assethost', config.assethost);
    scriptSrc = addQueryParamIfDefined(scriptSrc, 'imghost', config.imghost);
    scriptSrc = addQueryParamIfDefined(scriptSrc, 'reportapi', config.reportapi);
    return scriptSrc;
}

export function addQueryParamIfDefined(url, queryName, queryValue) {
    if (queryValue !== undefined && queryValue !== null) {
        const link = url.includes('?') ? '&' : '?';
        return url + link + queryName + '=' + encodeURIComponent(queryValue);
    }
    return url;
}
