import {ErrorResponse} from '../model/error-response';
import {Constants} from './constants';
import {ApiResponse} from '../model/api-response';

export function defaultHttpError(path: string, error, message): ErrorResponse {
  return {
    error,
    message,
    path,
    status: 0,
    timestamp: '',
    trace: ''
  };
}

export const mapResponseApi = <T>(url: string, resp: ApiResponse<T>): T => {
  if (resp.code !== Constants.OK_CODE) throw defaultHttpError(url, resp.code, resp.message);
  return resp.data;
};
