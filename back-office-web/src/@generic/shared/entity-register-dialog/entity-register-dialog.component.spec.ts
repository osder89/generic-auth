import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityRegisterDialogComponent } from './entity-register-dialog.component';

describe('EntityRegisterDialogComponent', () => {
  let component: EntityRegisterDialogComponent;
  let fixture: ComponentFixture<EntityRegisterDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntityRegisterDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityRegisterDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
