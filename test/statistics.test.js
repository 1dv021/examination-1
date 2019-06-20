/**
 * Tests for the statistics module.
 *
 * @author Mats Loock
 * @version 1.2.0
 */

'use strict'

const statistics = require('../src/statistics')
const { expect } = require('chai')

/* eslint-env mocha */

describe('statistics', () => {
  // ------------------------------------------------------------------ maximum
  describe('#maximum()', () => {
    // exceptions
    it(`Passing anything but an array should throw TypeError with the message 'The passed argument is not an array.'`, () => {
      expect(() => {
        statistics.maximum(1)
        statistics.maximum('not an array')
        statistics.maximum(false)
        statistics.maximum(undefined)
        statistics.maximum({})
        statistics.maximum(null)
      }).to.throw(TypeError).and
        .to.have.property('message', 'The passed argument is not an array.')
    })

    it(`Passing an empty array should throw Error with the message 'The passed array contains no elements.'`, () => {
      expect(() => {
        statistics.maximum([])
      }).to.throw(Error).and
        .to.have.property('message', 'The passed array contains no elements.')
    })

    it(`Passing an array of not just numbers should throw TypeError with the message 'The passed array contains not just numbers.'`, () => {
      expect(() => {
        statistics.maximum([1, 2, 3, '4'])
      }).to.throw(TypeError).and
        .to.have.property('message', 'The passed array contains not just numbers.')
    })

    // no effect on the argument
    it('Passing an array with numbers should not modify the passed array returning a number', () => {
      let arg = [4, 2, 6, 1, 3, 7, 5, 3]
      let res = statistics.maximum(arg)
      expect(res).to.be.an('number')
      expect(arg).to.eql([4, 2, 6, 1, 3, 7, 5, 3])
    })

    // return value
    it('Passing an array of positive values should find and return the largest positive value', () => {
      expect(statistics.maximum([2, 5, 1, 1, 5, 5, 2, 2, 2, 2])).to.eql(5)
    })

    it('Passing an array of negative values should find and return the least negative value', () => {
      expect(statistics.maximum([-42, -84, -2, -3])).to.eql(-2)
    })
  })

  // ------------------------------------------------------------------ mean
  describe('#mean()', () => {
    // exceptions
    it(`Passing anything but an array should throw TypeError with the message 'The passed argument is not an array.'`, () => {
      expect(() => {
        statistics.mean(1)
        statistics.mean('not an array')
        statistics.mean(false)
        statistics.mean(undefined)
        statistics.mean({})
        statistics.mean(null)
      }).to.throw(TypeError).and
        .to.have.property('message', 'The passed argument is not an array.')
    })

    it(`Passing an empty array should throw Error with the message 'The passed array contains no elements.'`, () => {
      expect(() => {
        statistics.mean([])
      }).to.throw(Error).and
        .to.have.property('message', 'The passed array contains no elements.')
    })

    it(`Passing an array of not just numbers should throw TypeError with the message 'The passed array contains not just numbers.'`, () => {
      expect(() => {
        statistics.mean([1, 2, 3, '4'])
      }).to.throw(TypeError).and
        .to.have.property('message', 'The passed array contains not just numbers.')
    })

    // no effect on the argument
    it('Passing an array with numbers should not modify the passed array returning a number', () => {
      let arg = [4, 2, 6, 1, 3, 7, 5, 3]
      let res = statistics.mean(arg)
      expect(res).to.be.an('number')
      expect(arg).to.eql([4, 2, 6, 1, 3, 7, 5, 3])
    })

    // return value
    it('Passing an array of positive and negative values should calculate and return the average value', () => {
      expect(statistics.mean([-2, 5, 1, 1, 5, 5, 2, -2, 2, -2])).to.eql(1.5)
    })

    it('Passing an array of negative values should calculate and return the average value', () => {
      expect(statistics.mean([-42, -84, -2, -3])).to.eql(-32.75)
    })
  })

  // ------------------------------------------------------------------ median
  describe('#median()', () => {
    // exceptions
    it(`Passing anything but an array should throw TypeError with the message 'The passed argument is not an array.'`, () => {
      expect(() => {
        statistics.median(1)
        statistics.median('not an array')
        statistics.median(false)
        statistics.median(undefined)
        statistics.median({})
        statistics.median(null)
      }).to.throw(TypeError).and
        .to.have.property('message', 'The passed argument is not an array.')
    })

    it(`Passing an empty array should throw Error with the message 'The passed array contains no elements.'`, () => {
      expect(() => {
        statistics.median([])
      }).to.throw(Error).and
        .to.have.property('message', 'The passed array contains no elements.')
    })

    it(`Passing an array of not just numbers should throw TypeError with the message 'The passed array contains not just numbers.'`, () => {
      expect(() => {
        statistics.median([1, 2, 3, '4'])
      }).to.throw(TypeError).and
        .to.have.property('message', 'The passed array contains not just numbers.')
    })

    // no effect on the argument
    it('Passing an array with numbers should not modify the passed array returning a number', () => {
      let arg = [4, 2, 6, 1, 3, 7, 5, 3]
      let res = statistics.median(arg)
      expect(res).to.be.an('number')
      expect(arg).to.eql([4, 2, 6, 1, 3, 7, 5, 3])
    })

    // return value
    it('Passing an array of positive values should calculate and return the median value', () => {
      expect(statistics.median([4, 2, 6, 1, 3, 7, 5, 3])).to.eql(3.5)
    })

    it('Passing an array of positive and negative values should calculate and return the median value', () => {
      expect(statistics.median([4, 2, 6, -1, 3, 5, 3])).to.eql(3)
    })
  })

  // ------------------------------------------------------------------ minimum
  describe('#minimum()', () => {
    // exceptions
    it(`Passing anything but an array should throw TypeError with the message 'The passed argument is not an array.'`, () => {
      expect(() => {
        statistics.minimum(1)
        statistics.minimum('not an array')
        statistics.minimum(false)
        statistics.minimum(undefined)
        statistics.minimum({})
        statistics.minimum(null)
      }).to.throw(TypeError).and
        .to.have.property('message', 'The passed argument is not an array.')
    })

    it(`Passing an empty array should throw Error with the message 'The passed array contains no elements.'`, () => {
      expect(() => {
        statistics.minimum([])
      }).to.throw(Error).and
        .to.have.property('message', 'The passed array contains no elements.')
    })

    it(`Passing an array of not just numbers should throw TypeError with the message 'The passed array contains not just numbers.'`, () => {
      expect(() => {
        statistics.minimum([1, 2, 3, '4'])
      }).to.throw(TypeError).and
        .to.have.property('message', 'The passed array contains not just numbers.')
    })

    // no effect on the argument
    it('Passing an array with numbers should not modify the passed array returning a number', () => {
      let arg = [4, 2, 6, 1, 3, 7, 5, 3]
      let res = statistics.minimum(arg)
      expect(res).to.be.an('number')
      expect(arg).to.eql([4, 2, 6, 1, 3, 7, 5, 3])
    })

    // return value
    it('Passing an array of positive values should find and return the smallest positive value', () => {
      expect(statistics.minimum([2, 5, 1, 1, 5, 5, 2, 2, 2, 2])).to.eql(1)
    })

    it('Passing an array of negative values should find and return the most negative value', () => {
      expect(statistics.minimum([-42, -84, -2, -3])).to.eql(-84)
    })
  })

  // ------------------------------------------------------------------ mode
  describe('#mode()', () => {
    // exceptions
    it(`Passing anything but an array should throw TypeError with the message 'The passed argument is not an array.'`, () => {
      expect(() => {
        statistics.mode(1)
        statistics.mode('not an array')
        statistics.mode(false)
        statistics.mode(undefined)
        statistics.mode({})
        statistics.mode(null)
      }).to.throw(TypeError).and
        .to.have.property('message', 'The passed argument is not an array.')
    })

    it(`Passing an empty array should throw Error with the message 'The passed array contains no elements.'`, () => {
      expect(() => {
        statistics.mode([])
      }).to.throw(Error).and
        .to.have.property('message', 'The passed array contains no elements.')
    })

    it(`Passing an array of not just numbers should throw TypeError with the message 'The passed array contains not just numbers.'`, () => {
      expect(() => {
        statistics.mode([1, 2, 3, '4'])
      }).to.throw(TypeError).and
        .to.have.property('message', 'The passed array contains not just numbers.')
    })

    // no effect on the argument
    it('Passing an array with numbers should not modify the passed array returning an array', () => {
      let arg = [4, 2, 6, 1, 3, 7, 5, 3]
      let res = statistics.mode(arg)
      expect(res).to.be.an('array')
      expect(arg).to.eql([4, 2, 6, 1, 3, 7, 5, 3])
    })

    // return value
    it('Passing an array of values where a negative value appears as often as a positive value should return an ordered array of both values', () => {
      expect(statistics.mode([-2, 5, 1, 1, 5, 5, 2, -2, 2, -2])).to.eql([-2, 5])
    })

    it('Passing an array of values where two positive values appears as often should return an ordered array of both values', () => {
      expect(statistics.mode([5, 1, 1, 5, 5, 1])).to.eql([1, 5])
    })

    it('Passing an array of values where one positive value appears most often should return an array of that value', () => {
      expect(statistics.mode([5, 1, 5, 1, 5])).to.eql([5])
    })

    it('Passing an array of values where one positive floating-point value appears most often should return an array of that value', () => {
      expect(statistics.mode([5.3, 5.3, 1.9, 1.9, 5.3])).to.eql([5.3])
    })

    it('Passing an array of values where a negative value appears as often as some positive values should return an ordered array of the values', () => {
      expect(statistics.mode([3, 5, 2, -5, 9, 2, -5, 5, 10, 4, 1, 0, -1, 9, 0])).to.eql([-5, 0, 2, 5, 9])
    })

    it('Passing an array of one value should return a new array of the value', () => {
      const arr = [42]
      expect(statistics.mode(arr)).to.eql([42])
      expect(statistics.mode(arr)).not.to.equal(arr)
    })
  })

  // ------------------------------------------------------------------ range
  describe('#range()', () => {
    // exceptions
    it(`Passing anything but an array should throw TypeError with the message 'The passed argument is not an array.'`, () => {
      expect(() => {
        statistics.range(1)
        statistics.range('not an array')
        statistics.range(false)
        statistics.range(undefined)
        statistics.range({})
        statistics.range(null)
      }).to.throw(TypeError).and
        .to.have.property('message', 'The passed argument is not an array.')
    })

    it(`Passing an empty array should throw Error with the message 'The passed array contains no elements.'`, () => {
      expect(() => {
        statistics.range([])
      }).to.throw(Error).and
        .to.have.property('message', 'The passed array contains no elements.')
    })

    it(`Passing an array of not just numbers should throw TypeError with the message 'The passed array contains not just numbers.'`, () => {
      expect(() => {
        statistics.range([1, 2, 3, '4'])
      }).to.throw(TypeError).and
        .to.have.property('message', 'The passed array contains not just numbers.')
    })

    // no effect on the argument
    it('Passing an array with numbers should not modify the passed array returning a number', () => {
      let arg = [4, 2, 6, 1, 3, 7, 5, 3]
      let res = statistics.range(arg)
      expect(res).to.be.an('number')
      expect(arg).to.eql([4, 2, 6, 1, 3, 7, 5, 3])
    })

    // return value
    it('Passing an array of positive and negative values should calculate and return the difference between the lowest and highest values', () => {
      expect(statistics.range([2, 5, 1, 1, 5, 5, 2, 2, -2, 2])).to.eql(7)
    })

    it('Passing an array of negative values should calculate and return the difference between the lowest and highest values', () => {
      expect(statistics.range([-42, -84, -2, -3])).to.eql(82)
    })
  })

  // ------------------------------------------------------------------ standardDeviation
  describe('#standardDeviation()', () => {
    // exceptions
    it(`Passing anything but an array should throw TypeError with the message 'The passed argument is not an array.'`, () => {
      expect(() => {
        statistics.standardDeviation(1)
        statistics.standardDeviation('not an array')
        statistics.standardDeviation(false)
        statistics.standardDeviation(undefined)
        statistics.standardDeviation({})
        statistics.standardDeviation(null)
      }).to.throw(TypeError).and
        .to.have.property('message', 'The passed argument is not an array.')
    })

    it(`Passing an empty array should throw Error with the message 'The passed array contains no elements.'`, () => {
      expect(() => {
        statistics.standardDeviation([])
      }).to.throw(Error).and
        .to.have.property('message', 'The passed array contains no elements.')
    })

    it(`Passing an array of not just numbers should throw TypeError with the message 'The passed array contains not just numbers.'`, () => {
      expect(() => {
        statistics.standardDeviation([1, 2, 3, '4'])
      }).to.throw(TypeError).and
        .to.have.property('message', 'The passed array contains not just numbers.')
    })

    // no effect on the argument
    it('Passing an array with numbers should not modify the passed array returning a number', () => {
      let arg = [4, 2, 6, 1, 3, 7, 5, 3]
      let res = statistics.standardDeviation(arg)
      expect(res).to.be.an('number')
      expect(arg).to.eql([4, 2, 6, 1, 3, 7, 5, 3])
    })

    // return value
    it('Passing an array of positive spread values should calculate and return a high standard deviation', () => {
      expect(statistics.standardDeviation([1, 4, 3, 15, 72, 41, 30, 27, 72, 8, 42, 36, 33, 46, 44]).toFixed(1)).to.eql('21.9')
    })

    it('Passing an array of positive close values should calculate and return a low standard deviation', () => {
      expect(statistics.standardDeviation([30, 31, 33, 34, 35, 34, 28, 34, 33, 34, 36, 35, 32, 31, 32]).toFixed(1)).to.eql('2.1')
    })
  })

  // ------------------------------------------------------------------ descriptiveStatistics
  describe('#descriptiveStatistics()', () => {
    // exceptions
    it(`Passing anything but an array should throw TypeError with the message 'The passed argument is not an array.'`, () => {
      expect(() => {
        statistics.descriptiveStatistics(1)
        statistics.descriptiveStatistics('not an array')
        statistics.descriptiveStatistics(false)
        statistics.descriptiveStatistics(undefined)
        statistics.descriptiveStatistics({})
        statistics.descriptiveStatistics(null)
      }).to.throw(TypeError).and
        .to.have.property('message', 'The passed argument is not an array.')
    })

    it(`Passing an empty array should throw Error with the message 'The passed array contains no elements.'`, () => {
      expect(() => {
        statistics.descriptiveStatistics([])
      }).to.throw(Error).and
        .to.have.property('message', 'The passed array contains no elements.')
    })

    it(`Passing an array of not just numbers should throw TypeError with the message 'The passed array contains not just numbers.'`, () => {
      expect(() => {
        statistics.descriptiveStatistics([1, 2, 3, '4'])
      }).to.throw(TypeError).and
        .to.have.property('message', 'The passed array contains not just numbers.')
    })

    // no effect on the argument
    it('Passing an array with numbers should not modify the passed array returning an object', () => {
      let arg = [4, 2, 6, 1, 3, 7, 5, 3]
      let res = statistics.descriptiveStatistics(arg)
      expect(res).to.be.an('object') // .that.includes({ maximum: 7 })
      expect(arg).to.eql([4, 2, 6, 1, 3, 7, 5, 3])
    })

    // return value
    it('descriptiveStatistics([42]) should return {maximum: 42, mean: 42, median: 42, minimum: 42, mode: [42], range: 0, standardDeviation: 0}', () => {
      expect(statistics.descriptiveStatistics([42])).to.eql({
        maximum: 42,
        mean: 42,
        median: 42,
        minimum: 42,
        mode: [42],
        range: 0,
        standardDeviation: 0
      })
    })

    it('descriptiveStatistics([4, 2, 6, 1, 3, 7, 5, 3]) should return {max: 7, mean: 3.875, median: 3.5, min: 1, mode: [3], range: 6, standardDeviation: 1.899835519196333}', () => {
      expect(statistics.descriptiveStatistics([4, 2, 6, 1, 3, 7, 5, 3])).to.eql({
        maximum: 7,
        mean: 3.875,
        median: 3.5,
        minimum: 1,
        mode: [3],
        range: 6,
        standardDeviation: 1.899835519196333
      })
    })
  })
})
