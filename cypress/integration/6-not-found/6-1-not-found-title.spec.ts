import * as constants from '../../../src/app/constants/_index';
import * as api from '../../../src/app/api/_index';

describe('6-1 not-found-title (logged out)', () => {
  it(`should display title`, () => {
    cy.basicVisit('someUnknownPage');
    cy.get(`[data-cy=notFoundTitle]`);
  });
});
