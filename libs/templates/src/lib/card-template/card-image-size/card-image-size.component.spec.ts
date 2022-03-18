import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardImageSizeComponent } from './card-image-size.component';

describe('CardImageSizeComponent', () => {
  let component: CardImageSizeComponent;
  let fixture: ComponentFixture<CardImageSizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardImageSizeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardImageSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
