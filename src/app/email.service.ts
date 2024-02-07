import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http:HttpClient) { }

  invioEmail(email:string,numero:string,guasto:string):Observable<any>{
    return this.http.post("http://localhost:3000/api/invioEmail",{
      email: email,
      numero:numero,
      guasto:guasto
    });
  }
}
