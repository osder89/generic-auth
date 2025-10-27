import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IParameterGroup, IResource, IRole} from '../../model/security.interface';
import {environment} from '../../../../environments/environment';
import {ApiResponse} from '../../model/api-response';
import {map} from 'rxjs/operators';
import {mapResponseApi} from '../../utils/http.util';

@Injectable({
  providedIn: 'root'
})
export class ParameterGroupService {

  constructor(private http: HttpClient) {
  }

  requestParameterGroupList(): Observable<IParameterGroup[]> {
    const url = environment.api + environment.backendV2.parameterGroupApi;
    return this.http.get<ApiResponse<IParameterGroup[]>>(url)
      .pipe(map((resp) => mapResponseApi<IParameterGroup[]>(url, resp)));
  }
}
