import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeantrblComponent } from './deantrbl.component';

describe('DeantrblComponent', () => {
  let component: DeantrblComponent;
  let fixture: ComponentFixture<DeantrblComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeantrblComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeantrblComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
