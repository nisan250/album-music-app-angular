import { TestBed, async, inject } from '@angular/core/testing';

import { AlbumDetailGuard } from './album-detail.guard';

describe('AlbumDetailGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlbumDetailGuard]
    });
  });

  it('should ...', inject([AlbumDetailGuard], (guard: AlbumDetailGuard) => {
    expect(guard).toBeTruthy();
  }));
});
