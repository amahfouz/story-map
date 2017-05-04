import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopLaneComponent } from './top-lane.component';

describe('TopLaneComponent', () => {
  let component: TopLaneComponent;
  let fixture: ComponentFixture<TopLaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopLaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopLaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
