import { Component, OnInit } from '@angular/core';
import { Category } from '../../models/category.model';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.html',
  styleUrls: ['./categories.scss'],
})
export class CategoriesComponent implements OnInit {
  categories: Category[] = [];
  loading = true;

  constructor(private api: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.api.getCategories().subscribe({
      next: (data) => {
        this.categories = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Erro ao carregar categorias', err);
        this.loading = false;
      },
    });
  }

  openCategory(id: string) {
    this.router.navigate(['/categories', id]);
  }
}
