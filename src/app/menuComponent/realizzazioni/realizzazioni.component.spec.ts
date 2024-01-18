import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealizzazioniComponent } from './realizzazioni.component';

describe('RealizzazioniComponent', () => {
  let component: RealizzazioniComponent;
  let fixture: ComponentFixture<RealizzazioniComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RealizzazioniComponent]
    });
    fixture = TestBed.createComponent(RealizzazioniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
