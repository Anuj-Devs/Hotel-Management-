import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoRecordFound } from './no-record-found';

describe('NoRecordFound', () => {
  let component: NoRecordFound;
  let fixture: ComponentFixture<NoRecordFound>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoRecordFound],
    }).compileComponents();

    fixture = TestBed.createComponent(NoRecordFound);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
