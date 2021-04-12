import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarRazaComponent } from './listar-raza.component';

describe('ListarRazaComponent', () => {
  let component: ListarRazaComponent;
  let fixture: ComponentFixture<ListarRazaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarRazaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarRazaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
