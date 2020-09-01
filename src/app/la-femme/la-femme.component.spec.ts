import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaFemmeComponent } from './la-femme.component';

describe('LaFemmeComponent', () => {
  let component: LaFemmeComponent;
  let fixture: ComponentFixture<LaFemmeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaFemmeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaFemmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
