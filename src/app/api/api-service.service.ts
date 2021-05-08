import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
 
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http : HttpClient) {
   }

   get(path :String){
     return this.http.get('http://localhost:8080'+path)
   }
}
