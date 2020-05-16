import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';
import { PlantDTO } from '../Model/Plant';

@Injectable({
  providedIn: 'root'
})
export class PlantService {

  // private readonly API: string = `${environment.apiUrl}/plants`;
  private readonly API: string = 'http://localhost:3000/plants';

  constructor(private http: HttpClient) {
  }

  getPlants(): Observable<any> {
    return this.http.get(`${this.API}`);
  }

  getPlant(id: number): Observable<any> {
    return this.http.get(`${this.API}/${id}`);
  }

  createPlant(plant: PlantDTO): Observable<any> {
    return this.http.post(`${this.API}`, plant);
  }

  editPlant(id: number, plant: PlantDTO): Observable<any> {
    return this.http.put(`${this.API}/${id}`, plant);
  }

  deletePlant(id: number): Observable<any> {
    return this.http.delete(`${this.API}/${id}`);
  }

}
