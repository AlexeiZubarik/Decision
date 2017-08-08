import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddValueCriterionComponent } from './add-value-criterion.component';

describe('AddValueCriterionComponent', () => {
  let component: AddValueCriterionComponent;
  let fixture: ComponentFixture<AddValueCriterionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddValueCriterionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddValueCriterionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
