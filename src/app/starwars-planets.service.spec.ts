import { TestBed } from '@angular/core/testing';

import { StarwarsPlanetsService } from './starwars-planets.service';

describe('StarwarsPlanetsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StarwarsPlanetsService = TestBed.get(StarwarsPlanetsService);
    expect(service).toBeTruthy();
  });
});
