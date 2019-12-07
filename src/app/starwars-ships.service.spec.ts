import { TestBed } from '@angular/core/testing';

import { StarwarsShipsService } from './starwars-ships.service';

describe('StarwarsShipsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StarwarsShipsService = TestBed.get(StarwarsShipsService);
    expect(service).toBeTruthy();
  });
});
