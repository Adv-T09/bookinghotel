import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingroomsComponent } from './bookingrooms.component';

describe('BookingroomsComponent', () => {
  let component: BookingroomsComponent;
  let fixture: ComponentFixture<BookingroomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingroomsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingroomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
