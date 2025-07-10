import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSectionComponent } from './card-section.component';

describe('CardSectionComponent', () => {
  let component: CardSectionComponent;
  let fixture: ComponentFixture<CardSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
