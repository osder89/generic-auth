import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {ApiResponse} from '../../model/api-response';
import {map} from 'rxjs/operators';
import {mapResponseApi} from '../../utils/http.util';
import {Observable} from 'rxjs';
import {ILog, LogRequest, LogType, ProccessType} from '../../model/security.interface';
import {Paginator} from '../../utils/paginator';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  constructor(private http: HttpClient) {}

  requestSendLog(proccess: ProccessType, level: LogType, body: LogRequest): Observable<boolean> {
    const params = new HttpParams().appendAll({proccess, level});
    const url = environment.api + environment.backendV2.logApi + '/app-client-error';
    return this.http.post<ApiResponse<boolean>>(url, body, {params})
      .pipe(map((resp) => mapResponseApi<boolean>(url, resp)));
  }

  requestLogList(queryParams: any): Observable<Paginator<ILog>> {
    const params: HttpParams = new HttpParams().appendAll(queryParams);
    const url = environment.api + environment.backendV2.logApi  + '/list-by-filters';
    return this.http.get<ApiResponse<Paginator<ILog>>>(url, {params})
      .pipe(map((resp) => mapResponseApi<Paginator<ILog>>(url, resp)));
  }


}
