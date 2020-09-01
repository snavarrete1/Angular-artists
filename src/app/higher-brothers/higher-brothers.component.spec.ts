import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HigherBrothersComponent } from './higher-brothers.component';

describe('HigherBrothersComponent', () => {
  let component: HigherBrothersComponent;
  let fixture: ComponentFixture<HigherBrothersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HigherBrothersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HigherBrothersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
