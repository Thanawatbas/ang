import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemuComponent } from './memu.component';

describe('MemuComponent', () => {
  let component: MemuComponent;
  let fixture: ComponentFixture<MemuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
