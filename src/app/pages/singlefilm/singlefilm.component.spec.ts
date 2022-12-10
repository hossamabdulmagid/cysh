import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglefilmComponent } from './singlefilm.component';

describe('SinglefilmComponent', () => {
  let component: SinglefilmComponent;
  let fixture: ComponentFixture<SinglefilmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinglefilmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinglefilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
