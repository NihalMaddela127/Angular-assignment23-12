import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceurlComponent } from './serviceurl.component';

describe('ServiceurlComponent', () => {
  let component: ServiceurlComponent;
  let fixture: ComponentFixture<ServiceurlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceurlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceurlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
