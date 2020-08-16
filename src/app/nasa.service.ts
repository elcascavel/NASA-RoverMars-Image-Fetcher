import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Photos } from './models/photos.model'

@Injectable({
  providedIn: 'root'
})
export class NasaService {

  constructor(private http: HttpClient) { }

  getPhotos(page: number) : Observable<Photos> {
    return this.http.get<Photos>('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=' + page + '&api_key=DEMO_KEY')
  }

  getAllPhotos() {
    return this.http.get<Photos>('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY')
  }
  
}