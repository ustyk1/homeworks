import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface IUser {
  id: number
  name: string,
  username: string,
  email: string,
  address: {
    street: string
  },
  phone: string,
  website: string,
  company: {
    name: string
  }
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private link: string  = 'https://jsonplaceholder.typicode.com/users';

  constructor(private httpClient: HttpClient) { }

  public getUsers(): Observable<IUser[]>{
    return this.httpClient.get<IUser[]>(this.link);
  }
}
