import { TestBed } from '@angular/core/testing';

import { NgxBootstrapModalService } from './ngx-bootstrap-modal.service';

describe('NgxBootstrapModalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxBootstrapModalService = TestBed.get(NgxBootstrapModalService);
    expect(service).toBeTruthy();
  });
});
