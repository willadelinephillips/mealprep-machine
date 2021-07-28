import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMealplanComponent } from './create-mealplan.component';

describe('CreateMealplanComponent', () => {
  let component: CreateMealplanComponent;
  let fixture: ComponentFixture<CreateMealplanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateMealplanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMealplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
