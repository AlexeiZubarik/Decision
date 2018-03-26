import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PairedComparisonComponentComponent } from './paired-comparison-component.component';

describe('PairedComparisonComponentComponent', () => {
  let component: PairedComparisonComponentComponent;
  let fixture: ComponentFixture<PairedComparisonComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PairedComparisonComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PairedComparisonComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
