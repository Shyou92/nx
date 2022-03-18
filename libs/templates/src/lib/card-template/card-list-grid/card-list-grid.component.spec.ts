import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardListGridComponent } from './card-list-grid.component';

describe('CardListGridComponent', () => {
  let component: CardListGridComponent;
  let fixture: ComponentFixture<CardListGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardListGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardListGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
