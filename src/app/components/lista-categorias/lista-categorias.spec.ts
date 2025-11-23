import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCategoriasComponent } from './lista-categorias';

describe('ListaCategorias', () => {
  let component: ListaCategoriasComponent;
  let fixture: ComponentFixture<ListaCategoriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaCategoriasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaCategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
