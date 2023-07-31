import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LoginService } from "./login.service";

const TOKEN_HEADER = 'Authorization';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private login: LoginService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        //adding jwt token from localstorage to requests
        let authReq = req;
        const token = this.login.getToken();
        if (token != null) {
            console.log("Inside clone");
            authReq = authReq.clone({
                setHeaders: { Authorization: `Bearer ${token}` },
            });
        }
        console.log("Inside clone req");
        return next.handle(authReq);
    }

}

export const AuthInterceptorProviders = [
    {
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptor,
        multi: true,
    },

]