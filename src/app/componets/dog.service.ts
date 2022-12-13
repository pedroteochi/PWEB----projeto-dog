import { Dog } from './dog';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DogService {

  private readonly API = "https://dog.ceo/api/breeds/image/random";
  constructor(private http: HttpClient) { }

  listar(): Observable<Dog> {
   return this.http.get<Dog>(this.API);
  }
}
