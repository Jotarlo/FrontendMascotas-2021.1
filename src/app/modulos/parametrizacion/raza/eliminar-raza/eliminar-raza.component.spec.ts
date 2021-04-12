import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarRazaComponent } from './eliminar-raza.component';

describe('EliminarRazaComponent', () => {
  let component: EliminarRazaComponent;
  let fixture: ComponentFixture<EliminarRazaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarRazaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarRazaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
