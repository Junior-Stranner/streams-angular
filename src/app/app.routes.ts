import { Routes } from '@angular/router';

import { ListaContentsComponent } from './components/lista-contents/lista-contents';
import { DetalhesContentComponent } from './components/detalhes-content/detalhes-content';
import { ListaCategoriasComponent } from './components/lista-categorias/lista-categorias';
import { AvaliacoesComponent } from './components/avaliacoes/avaliacoes';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/contents',
    pathMatch: 'full',
  },

  // Início -> mostra tudo
  {
    path: 'contents',
    component: ListaContentsComponent,
    data: { tipo: null }, // sem filtro
  },

  // FILMES -> tipo "movie" (minúsculo, igual ao JSON)
  {
    path: 'filmes',
    component: ListaContentsComponent,
    data: { tipo: 'movie' },
  },

  // SÉRIES -> vamos assumir tipo "series"
  {
    path: 'series',
    component: ListaContentsComponent,
    data: { tipo: 'series' },
  },

  {
    path: 'content/:id',
    component: DetalhesContentComponent,
  },

  {
    path: 'categorias/:id',
    component: ListaCategoriasComponent,
  },

  {
    path: 'reviews/:id',
    component: AvaliacoesComponent,
  },
];
