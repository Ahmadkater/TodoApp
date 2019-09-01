import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigbarComponent } from './navigbar.component';

describe('NavigbarComponent', () => {
  let component: NavigbarComponent;
  let fixture: ComponentFixture<NavigbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
