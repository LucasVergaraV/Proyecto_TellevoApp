import { TestBed } from '@angular/core/testing';

import { RestriccionHorarioGuard } from './restriccion-horario.guard';

describe('RestriccionHorarioGuard', () => {
  let guard: RestriccionHorarioGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RestriccionHorarioGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
