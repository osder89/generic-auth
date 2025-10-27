import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PageFormService {

  mostrarElemento = new BehaviorSubject<boolean>(false);
  private onDestroySubject = new BehaviorSubject<any>(null);

  onDestroy$ = this.onDestroySubject.asObservable();

  notifyOnDestroy(data: any, wasUpdate: boolean) {
    this.onDestroySubject.next({data, wasUpdate});
  }
}