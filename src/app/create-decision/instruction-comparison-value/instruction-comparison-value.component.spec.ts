import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructionComparisonValueComponent } from './instruction-comparison-value.component';

describe('InstructionComparisonValueComponent', () => {
  let component: InstructionComparisonValueComponent;
  let fixture: ComponentFixture<InstructionComparisonValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstructionComparisonValueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructionComparisonValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
