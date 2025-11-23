import { Injectable } from '@angular/core';

getCategories() {
  return this.http.get<Category[]>('http://senai-streams.ddns.net/categories');
}

