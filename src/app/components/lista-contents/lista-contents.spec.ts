import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaContentsComponent } from './lista-contents';

describe('ListaContents', () => {
  let component: ListaContentsComponent;
  let fixture: ComponentFixture<ListaContentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaContentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaContentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
