import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupedDataTableComponent } from './grouped-data-table.component';

describe('GroupedDataTableComponent', () => {
  let component: GroupedDataTableComponent;
  let fixture: ComponentFixture<GroupedDataTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupedDataTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupedDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
