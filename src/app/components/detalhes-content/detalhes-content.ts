import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { Content } from '../../models/content.model';

@Component({
  selector: 'app-detalhes-content',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './detalhes-content.html',
  styleUrls: ['./detalhes-content.scss'],
})
export class DetalhesContentComponent implements OnInit {
  content?: Content;
  loading = true;

  constructor(private api: ApiService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];

    this.api.getContentById(id).subscribe({
      next: (dados) => {
        this.content = dados;
        this.loading = false;
      },
      error: (err) => {
        console.error('Erro ao carregar detalhes:', err);
        this.loading = false;
      },
    });
  }
}
