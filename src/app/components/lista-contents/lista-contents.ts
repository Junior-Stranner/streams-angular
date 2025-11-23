import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { Content } from '../../models/content.model';


@Component({
  selector: 'app-lista-contents',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './lista-contents.html',
  styleUrls: ['./lista-contents.scss']
})
export class ListaContentsComponent implements OnInit {

  contents: Content[] = [];
  loading = true;
  tipo: string | null = null; // 'movie', 'series' ou null

  constructor(
    private api: ApiService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // lê o "tipo" configurado na rota (data: { tipo: 'movie' })
    this.route.data.subscribe(data => {
      this.tipo = data['tipo'] ?? null;
      this.loadContents();
    });
  }

  loadContents() {
    this.loading = true;

    this.api.getContents().subscribe({
      next: (dados) => {
        // se tiver tipo na rota, filtra; senão, mostra tudo
        if (this.tipo) {
          const tipoLower = this.tipo.toLowerCase();
          this.contents = dados.filter(item =>
            String(item.type).toLowerCase() === tipoLower
          );
        } else {
          this.contents = dados;
        }

        this.loading = false;
      },
      error: (err) => {
        console.error('Erro ao carregar conteúdos:', err);
        this.loading = false;
      }
    });
  }
}
