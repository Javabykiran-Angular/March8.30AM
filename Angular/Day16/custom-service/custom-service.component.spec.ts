import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomServiceComponent } from './custom-service.component';

describe('CustomServiceComponent', () => {
  let component: CustomServiceComponent;
  let fixture: ComponentFixture<CustomServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
