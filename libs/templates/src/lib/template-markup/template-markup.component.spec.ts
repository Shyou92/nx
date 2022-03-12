import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateMarkupComponent } from './template-markup.component';

describe('TemplateMarkupComponent', () => {
  let component: TemplateMarkupComponent;
  let fixture: ComponentFixture<TemplateMarkupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateMarkupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateMarkupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
