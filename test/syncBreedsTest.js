const assert = require('chai').assert;
const breedDetails = require('../syncBreeds');

describe('#breedDetails', () => {

  it('returns breed details for the Bombay breed', () => {
    let expect = "The golden eyes and the shiny black coat of the Bombay is absolutely striking. Likely to bond most with one family member, the Bombay will follow you from room to room and will almost always have something to say about what you are doing, loving attention and to be carried around, often on his caregiver's shoulder.";
    assert.equal(breedDetails('Bombay'),expect);
  });

  it('returns breed details for the Balinese breed', () => {
    let expect = "Balinese are curious, outgoing, intelligent cats with excellent communication skills. They are known for their chatty personalities and are always eager to tell you their views on life, love, and what you’ve served them for dinner.";
    assert.equal(breedDetails('Balinese'),expect);
  });

  it('returns undefined when no description is available', () => {
    let expect = undefined;
    assert.equal(breedDetails('Chicken'),expect);
  });
});

