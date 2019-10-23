import { wsSend } from './public/webServe';
import { Injectable } from '@angular/core';



@Injectable({
    providedIn: 'root'
  })

export class AppServe {
    getData() {
        return wsSend('getAll');
      }

    getDataById(param) {
        return wsSend('getById', param);
    }
}
