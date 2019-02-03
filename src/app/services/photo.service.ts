import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Photo } from '../models/photo';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private httpClient:HttpClient) { }

  public getAllPhotos():Observable<Photo[]>{
    return this.httpClient.get<Photo[]>("https://jsonplaceholder.typicode.com/photos");
}
}


