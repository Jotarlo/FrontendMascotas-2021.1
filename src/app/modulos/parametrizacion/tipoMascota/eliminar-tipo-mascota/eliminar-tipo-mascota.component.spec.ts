import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarTipoMascotaComponent } from './eliminar-tipo-mascota.component';

describe('EliminarTipoMascotaComponent', () => {
  let component: EliminarTipoMascotaComponent;
  let fixture: ComponentFixture<EliminarTipoMascotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarTipoMascotaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarTipoMascotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
