
import {map} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';


@Injectable()
export class HackerNewsAPIService {
  baseUrl: string;

  constructor(private http: Http) {
    this.baseUrl = 'https://node-hnapi.herokuapp.com';
  }

  fetchStories(storyType: string, page: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${storyType}?page=${page}`).pipe(
                    map(response => response.json()));
  }

  fetchComments(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/item/${id}`).pipe(
                  map(response => response.json()));
  }
}
