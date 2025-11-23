import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-category-detail',
  templateUrl: './category-detail.html',
  imports: [CommonModule],
})
export class CategoryDetail {
  loading: boolean = true;
  categories: any[] = [];

  constructor() {
    setTimeout(() => {
      this.categories = [
        { id: 1, name: 'Filmes', image: 'filmes.jpg', color: '#ff0000' },
        { id: 2, name: 'Séries', image: 'series.jpg', color: '#00ff00' },
      ];
      this.loading = false;
    }, 500);
  }

  openCategory(id: string | number) {
    console.log('Abrir categoria:', id);
    // Navegação real viria aqui
  }
}
