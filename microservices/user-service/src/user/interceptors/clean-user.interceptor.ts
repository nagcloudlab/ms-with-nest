import {CallHandler, ExecutionContext, Injectable, NestInterceptor} from "@nestjs/common";
import {Observable} from "rxjs";
import { map } from 'rxjs/operators';

@Injectable()
export class CleanUserInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        //....
        return next.handle()
            .pipe(
               map(user => JSON.parse(JSON.stringify(user))),
                map(user => {
                    console.log(user)
                    return {
                        ...user,
                        password: undefined
                    };
                })
            )
    }
}