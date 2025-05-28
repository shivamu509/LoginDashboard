import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighestSalaryComponent } from './highest-salary.component';

describe('HighestSalaryComponent', () => {
  let component: HighestSalaryComponent;
  let fixture: ComponentFixture<HighestSalaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HighestSalaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HighestSalaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
