import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTempleteComponent } from './form-templete.component';

describe('FormTempleteComponent', () => {
  let component: FormTempleteComponent;
  let fixture: ComponentFixture<FormTempleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormTempleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTempleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
