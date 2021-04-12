import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearTipoMascotaComponent } from './crear-tipo-mascota.component';

describe('CrearTipoMascotaComponent', () => {
  let component: CrearTipoMascotaComponent;
  let fixture: ComponentFixture<CrearTipoMascotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearTipoMascotaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearTipoMascotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
