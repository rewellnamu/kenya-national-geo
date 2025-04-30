import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Park {
  id: number;
  name: string;
  location: string;
  imageUrl: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class ParksService {
  private apiUrl = 'http://localhost:3000/api/parks';

  constructor(private http: HttpClient) {}

  getParks(): Observable<Park[]> {
    return this.http.get<Park[]>(this.apiUrl);
  }
}
