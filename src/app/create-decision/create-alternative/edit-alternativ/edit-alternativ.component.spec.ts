import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAlternativComponent } from './edit-alternativ.component';

describe('EditAlternativComponent', () => {
  let component: EditAlternativComponent;
  let fixture: ComponentFixture<EditAlternativComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAlternativComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAlternativComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
