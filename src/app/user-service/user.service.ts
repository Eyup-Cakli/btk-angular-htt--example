import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from '../models/user-model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http: HttpClient) {
   }
  getUsersUrl: string = 'http://dummyjson.com/users'

  // getUserList(): Observable<UserModel[]>{
  //   return this._http.get<UserModel[]>(
  //     this.getUsersUrl
  //   )
  // }

  getAllUsers() {
    return this._http.get(this.getUsersUrl)
  }

  getUserBySearch(searchText: string) {
    return this._http.get(this.getUsersUrl + "/search?q=" + searchText)
  }
}
