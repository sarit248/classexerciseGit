import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient:HttpClient) { }

  public getAllUsers():Observable<User[]>{
  return this.httpClient.get<User[]>("https://jsonplaceholder.typicode.com/users");

  }
}





