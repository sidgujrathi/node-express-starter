const server = require('../src/app');
const { createTestClient } = require('apollo-server-testing');
const { gql } = require('apollo-server-express');
const { query } = createTestClient(server);
const { expect } = require('chai');
const { describe, it } = require('mocha');


describe('Country API', () => {
   it('Query should return all countries in length', () => {

    const GET_ALL_COUNTRIES = gql`
      query {
        getCountryListByYear{
          name
        }
      }
      `;

    query({ query: GET_ALL_COUNTRIES }).then(res => {
      const { data } = res;
      expect(data.getCountryListByYear.length).to.equal(3);
    });
  })
})
