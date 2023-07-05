import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }
  cakesApi:any
  getuserAPI(){
    return this.http.get("https://dummyjson.com/users")
  }
}
