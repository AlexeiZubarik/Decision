import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParsingCriteriaComponent } from './parsing-criteria.component';

describe('ParsingCriteriaComponent', () => {
  let component: ParsingCriteriaComponent;
  let fixture: ComponentFixture<ParsingCriteriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParsingCriteriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParsingCriteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
