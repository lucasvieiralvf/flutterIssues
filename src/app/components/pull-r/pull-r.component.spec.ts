import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PullRComponent } from './pull-r.component';

describe('PullRComponent', () => {
  let component: PullRComponent;
  let fixture: ComponentFixture<PullRComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PullRComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PullRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
