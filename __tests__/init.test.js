const { expect } = require('chai');
const { describe, it } = require('mocha');
require('dotenv').config();
const { existsSync } = require('fs');

describe('Server initialization', () => {
  it('Enviroment file(.env) should be present', () => {
    expect(existsSync('.env')).to.be.true;
  });

  it('Server should run on port 5000', () => {
    expect(process.env.PORT).to.equal('5000');
  });

  it('Graphql endpoint should be set to /api', () => {
    expect(process.env.API_ENDPOINT).to.equal('/api');
  });
});
