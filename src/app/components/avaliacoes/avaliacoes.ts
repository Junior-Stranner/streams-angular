import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { Review } from '../../models/review.model';

@Component({
  selector: 'app-avaliacoes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './avaliacoes.html',
  styleUrls: ['./avaliacoes.scss'], // <-- corrigido
})
export class AvaliacoesComponent implements OnInit {
  reviews: Review[] = [];
  contentId: string = '';
  loading = true;

  newReview: Review = {
    contentId: 0,
    authorName: '',
    authorAvatar: 'https://via.placeholder.com/50',
    rating: 5,
    title: '',
    comment: '',
  };

  constructor(private api: ApiService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.contentId = this.route.snapshot.params['id'];

    this.newReview.contentId = Number(this.contentId);

    this.loadReviews();
  }

  loadReviews() {
    this.loading = true;

    this.api.getReviews(this.contentId).subscribe({
      next: (dados) => {
        this.reviews = dados;
        this.loading = false;
      },
      error: (err) => {
        console.error('Erro ao carregar avaliações:', err);
        this.loading = false;
      },
    });
  }

  submitReview() {
    if (!this.newReview.authorName || !this.newReview.title || !this.newReview.comment) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    this.api.createReview(this.newReview).subscribe({
      next: (dados) => {
        alert('Avaliação enviada com sucesso!');

        // adiciona a nova review no topo
        this.reviews.unshift(dados);

        // reseta o formulário
        this.newReview = {
          contentId: Number(this.contentId),
          authorName: '',
          authorAvatar: 'https://via.placeholder.com/50',
          rating: 5,
          title: '',
          comment: '',
        };
      },
      error: (err) => {
        console.error('Erro ao enviar avaliação:', err);
        alert('Erro ao enviar avaliação. Tente novamente.');
      },
    });
  }

  getStars(rating: number): string[] {
    return Array(5)
      .fill('☆')
      .map((star, index) => (index < rating ? '⭐' : '☆'));
  }
}
