import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAlternativeComponent } from './delete-alternative.component';

describe('DeleteAlternativeComponent', () => {
  let component: DeleteAlternativeComponent;
  let fixture: ComponentFixture<DeleteAlternativeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteAlternativeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteAlternativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
