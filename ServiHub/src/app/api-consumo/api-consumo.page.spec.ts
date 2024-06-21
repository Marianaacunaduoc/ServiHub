import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApiConsumoPage } from './api-consumo.page';

describe('ApiConsumoPage', () => {
  let component: ApiConsumoPage;
  let fixture: ComponentFixture<ApiConsumoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiConsumoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
