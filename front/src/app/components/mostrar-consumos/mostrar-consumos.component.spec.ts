import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarConsumosComponent } from './mostrar-consumos.component';

describe('MostrarConsumosComponent', () => {
  let component: MostrarConsumosComponent;
  let fixture: ComponentFixture<MostrarConsumosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarConsumosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarConsumosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
