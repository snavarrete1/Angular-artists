import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheDrumsComponent } from './the-drums.component';

describe('TheDrumsComponent', () => {
  let component: TheDrumsComponent;
  let fixture: ComponentFixture<TheDrumsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheDrumsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheDrumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
