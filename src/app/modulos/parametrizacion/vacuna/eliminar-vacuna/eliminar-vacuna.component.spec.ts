import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarVacunaComponent } from './eliminar-vacuna.component';

describe('EliminarVacunaComponent', () => {
  let component: EliminarVacunaComponent;
  let fixture: ComponentFixture<EliminarVacunaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarVacunaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarVacunaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
