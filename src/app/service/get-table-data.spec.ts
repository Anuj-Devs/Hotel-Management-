import { TestBed } from '@angular/core/testing';

import { GetTableData } from './get-table-data';

describe('GetTableData', () => {
  let service: GetTableData;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetTableData);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
