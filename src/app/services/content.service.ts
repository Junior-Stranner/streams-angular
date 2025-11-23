import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../models/category.model';
import { Content } from '../models/content.model';

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  private apiUrl = 'http://localhost:3000'; // coloque sua API aqui

  constructor(private http: HttpClient) {}

  // Buscar todas as categorias
  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.apiUrl}/categories`);
  }

  // Buscar conteúdos da categoria
  getContentsByCategory(id: string): Observable<Content[]> {
    return this.http.get<Content[]>(`${this.apiUrl}/categories/${id}/contents`);
  }

  // Buscar conteúdo pelo ID
  getContentById(id: string): Observable<Content> {
    return this.http.get<Content>(`${this.apiUrl}/contents/${id}`);
  }
}
