import {BASE_URL} from '../constants';
import {createApiConfig} from './createApiConfig';

/**
 * Main API instance for making HTTP requests to the application's base URL.
 */
const mainApi = createApiConfig(BASE_URL);

export {mainApi};
