import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarTipoMascotaComponent } from './editar-tipo-mascota.component';

describe('EditarTipoMascotaComponent', () => {
  let component: EditarTipoMascotaComponent;
  let fixture: ComponentFixture<EditarTipoMascotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarTipoMascotaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarTipoMascotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
