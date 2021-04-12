import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarVacunaComponent } from './listar-vacuna.component';

describe('ListarVacunaComponent', () => {
  let component: ListarVacunaComponent;
  let fixture: ComponentFixture<ListarVacunaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarVacunaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarVacunaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
