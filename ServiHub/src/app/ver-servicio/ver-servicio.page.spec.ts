import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VerServicioPage } from './ver-servicio.page';

describe('VerServicioPage', () => {
  let component: VerServicioPage;
  let fixture: ComponentFixture<VerServicioPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VerServicioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
