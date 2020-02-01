import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShooppingListComponent } from './shoopping-list.component';

describe('ShooppingListComponent', () => {
  let component: ShooppingListComponent;
  let fixture: ComponentFixture<ShooppingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShooppingListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShooppingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
