import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { Content } from '../../models/content.model';

@Component({
  selector: 'app-lista-categorias',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './lista-categorias.html',
  styleUrls: ['./lista-categorias.scss'],
})
export class ListaCategoriasComponent implements OnInit {
  contents: Content[] = [];
  categoryId: string = '';
  loading = true;

  constructor(private api: ApiService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.categoryId = params['id'];
      this.loadContents();
    });
  }

  loadContents() {
    this.loading = true;

    this.api.getContentsByCategory(this.categoryId).subscribe({
      next: (dados) => {
        this.contents = dados;
        this.loading = false;
      },
      error: (err) => {
        console.error('Erro ao carregar categoria:', err);
        this.loading = false;
      },
    });
  }
}
