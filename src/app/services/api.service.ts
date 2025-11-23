import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../models/category.model';
import { Content } from '../models/content.model';
import { Review } from '../models/review.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://senai-streams.ddns.net';

  constructor(private http: HttpClient) {}

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.apiUrl}/categories`);
  }

  getContents(): Observable<Content[]> {
    return this.http.get<Content[]>(`${this.apiUrl}/contents`);
  }

  getContentById(id: string): Observable<Content> {
    return this.http.get<Content>(`${this.apiUrl}/contents/${id}`);
  }

  getContentsByCategory(categoryId: string): Observable<Content[]> {
    return this.http.get<Content[]>(`${this.apiUrl}/contents?categoryId=${categoryId}`);
  }

  getReviews(contentId: string): Observable<Review[]> {
    return this.http.get<Review[]>(`${this.apiUrl}/reviews?contentId=${contentId}`);
  }

  createReview(review: Review): Observable<Review> {
    return this.http.post<Review>(`${this.apiUrl}/reviews`, review);
  }
}
