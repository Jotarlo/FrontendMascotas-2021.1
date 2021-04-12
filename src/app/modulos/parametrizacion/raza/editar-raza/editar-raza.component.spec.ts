import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarRazaComponent } from './editar-raza.component';

describe('EditarRazaComponent', () => {
  let component: EditarRazaComponent;
  let fixture: ComponentFixture<EditarRazaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarRazaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarRazaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
