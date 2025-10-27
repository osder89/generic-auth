import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Paginator} from '../../utils/paginator';
import {IParameter} from '../../model/security.interface';
import {environment} from '../../../../environments/environment';
import {ApiResponse} from '../../model/api-response';
import {map} from 'rxjs/operators';
import {mapResponseApi} from '../../utils/http.util';

@Injectable({
  providedIn: 'root'
})
export class ParameterService {

  constructor(private http: HttpClient) {
  }

  requestParameterListByGroup(group: string, queryParams): Observable<Paginator<IParameter>> {
    const params: HttpParams = new HttpParams().appendAll(queryParams);
    const url = environment.api + environment.backendV2.parameterApi + '/list-parameters-by-group' + `/${group}`;
    return this.http.get<ApiResponse<Paginator<IParameter>>>(url, {params})
      .pipe(map((resp) => mapResponseApi<Paginator<IParameter>>(url, resp)));
  }

  requestCreateParameter(body: IParameter): Observable<IParameter> {
    const url = environment.api + environment.backendV2.parameterApi;
    return this.http.post<ApiResponse<IParameter>>(url, body)
      .pipe(map((resp) => mapResponseApi<IParameter>(url, resp)));
  }

  requestUpdateParameter(id: number, body: IParameter): Observable<IParameter> {
    const url = environment.api + environment.backendV2.parameterApi + `/${id}`;
    return this.http.put<ApiResponse<IParameter>>(url, body)
      .pipe(map((resp) => mapResponseApi<IParameter>(url, resp)));
  }

  requestDeleteParameter(parameterId: number): Observable<boolean> {
    const url = environment.api + environment.backendV2.parameterApi + `/${parameterId}`;
    return this.http.delete<ApiResponse<boolean>>(url)
      .pipe(map((resp) => mapResponseApi<boolean>(url, resp)));
  }

}
