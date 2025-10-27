import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ApiResponse} from '../../model/api-response';
import {environment} from '../../../../environments/environment';
import {ThemeConfig} from '../../../../@generic/services/theme.service';
import {IRole} from '../../model/security.interface';
import {map} from 'rxjs/operators';
import {mapResponseApi} from '../../utils/http.util';

@Injectable({
  providedIn: 'root'
})
export class MyThemeService {
  constructor(private http: HttpClient) {
  }

  requestUpdateAppTheme(jsonConfig: ThemeConfig): Observable<any> {
    const url = environment.api + environment.backendV2.themeApi + `/update`;
    const params: HttpParams = new HttpParams().appendAll({applicationType: 'WEB'});
    const body = { jsonConfig: JSON.stringify(jsonConfig) };
    return this.http.put<ApiResponse<IRole>>(url, body, {params})
      .pipe(map((resp) => mapResponseApi<any>(url, resp)));
  }

  requestAppTheme(): Observable<string> {
    const url = environment.api + environment.backendV2.themeApi + '/find';
    const params: HttpParams = new HttpParams().appendAll({applicationType: 'WEB'});
    return this.http.get<ApiResponse<any>>(url, {params})
      .pipe(map((resp) => mapResponseApi<string>(url, resp)));
  }
}
