import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor{

    constructor(){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        req = req.clone({
            setHeaders: {
            'x-rapidapi-key': 'esGbwrm390mshS2BCl0RALxQRtZTp1W7sFMjsnyJlJzDXVkW0H',
            'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com'
          
               // 'x-rapidapi-ua': 'RapidAPI-Playground',
             
               // 'x-rapidapi-host': 'https://rawg-video-games-database.p.rapidapi.com'
               
             },

             setParams: {
             key: 'e271053c4f2a49a8b64a214d656bd4db'
             }
        });

        return next.handle(req);


    }

}