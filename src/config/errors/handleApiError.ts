
export interface IApiResponse<T> {
  data: T | null;
  error: string | null;
  statusCode: number;
}

/**
 * Creates a standardized API response object
 * @template T The type of data in the response
 * @param data The response data or null
 * @param error The error message or null
 * @param statusCode The HTTP status code
 * @returns An IApiResponse object containing the provided data, error and status code
 *
 * @example
 * // Success response
 * const response = makeResponse(userData, null, 200);
 *
 * // Error response
 * const errorResponse = makeResponse(null, "Not found", 404);
 */
export const makeResponse = <T>(
  data: T | null,
  error: string | null,
  statusCode: number,
): IApiResponse<T> => {
  return {data, error, statusCode};
};
