import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelegestioneComponent } from './telegestione.component';

describe('TelegestioneComponent', () => {
  let component: TelegestioneComponent;
  let fixture: ComponentFixture<TelegestioneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TelegestioneComponent]
    });
    fixture = TestBed.createComponent(TelegestioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
