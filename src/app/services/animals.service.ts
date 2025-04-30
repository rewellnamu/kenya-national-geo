import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Animal {
  id: number;
  name: string;
  species: string;
  imageUrl: string;
  parkId: number;
}

@Injectable({
  providedIn: 'root'
})
export class AnimalsService {
  private apiUrl = 'http://localhost:3000/api/animals';

  constructor(private http: HttpClient) {}

  getAnimals(): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.apiUrl);
  }
}
