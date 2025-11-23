import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesContentComponent } from './detalhes-content';

describe('DetalhesContent', () => {
  let component: DetalhesContentComponent;
  let fixture: ComponentFixture<DetalhesContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalhesContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalhesContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
