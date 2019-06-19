import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServersManagerComponent } from './servers-manager.component';

describe('ServersManagerComponent', () => {
  let component: ServersManagerComponent;
  let fixture: ComponentFixture<ServersManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServersManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServersManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
