import { HttpClient, HttpParams } from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { env } from 'process';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {    }
    getGameList(ordering: string, search?:string): Observable<APIResponse<Game>>{
    
      let params = new HttpParams().set('ordering', ordering);

      if(search){
        params = new HttpParams().set('ordering', ordering).set('search', search);
      }
 
      return this.http.get<APIResponse<game>>(`${env.BASE_URL}/games`, {params: params,});

  }
}
