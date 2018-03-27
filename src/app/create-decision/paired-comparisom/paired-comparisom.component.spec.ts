import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PairedComparisomComponent } from './paired-comparisom.component';

describe('PairedComparisomComponent', () => {
  let component: PairedComparisomComponent;
  let fixture: ComponentFixture<PairedComparisomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PairedComparisomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PairedComparisomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
