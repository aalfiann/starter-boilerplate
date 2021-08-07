/* global describe it */

// The reason we allow new constructor for boolean is just for test case only
/* eslint no-new-wrappers:0 */
const assert = require('assert')
const Helper = require('../src/helper.js')

describe('helper function test', function () {
  const helper = new Helper()

  it('is string', function () {
    assert.strictEqual(helper.isString('abc'), true)
    assert.strictEqual(helper.isString(''), true)
    assert.strictEqual(helper.isString(1), false)
    assert.strictEqual(helper.isString([]), false)
    assert.strictEqual(helper.isString({}), false)
  })

  it('is integer', function () {
    assert.strictEqual(helper.isInteger(1), true)
    assert.strictEqual(helper.isInteger(0), true)
    assert.strictEqual(helper.isInteger(-1), true)
    assert.strictEqual(helper.isInteger(-1.56), false)
    assert.strictEqual(helper.isInteger(1.56), false)
    assert.strictEqual(helper.isInteger('2'), false)
    assert.strictEqual(helper.isInteger('-2'), false)
    assert.strictEqual(helper.isInteger('02'), false)
    assert.strictEqual(helper.isInteger('2.56'), false)
    assert.strictEqual(helper.isInteger('-2.56'), false)
    assert.strictEqual(helper.isInteger([1, 2, 3]), false)
    assert.strictEqual(helper.isInteger([]), false)
    assert.strictEqual(helper.isInteger({}), false)
    assert.strictEqual(helper.isInteger(''), false)
  })

  it('is boolean', function () {
    assert.strictEqual(helper.isBoolean(true), true)
    assert.strictEqual(helper.isBoolean(false), true)
    assert.strictEqual(helper.isBoolean(new Boolean(true)), true) // with new wrappers
    assert.strictEqual(helper.isBoolean(new Boolean(false)), true) // with new wrappers
    assert.strictEqual(helper.isBoolean(Boolean(true)), true)
    assert.strictEqual(helper.isBoolean(Boolean(false)), true)
    assert.strictEqual(helper.isBoolean(undefined), false)
    assert.strictEqual(helper.isBoolean(null), false)
    assert.strictEqual(helper.isBoolean(1), false)
    assert.strictEqual(helper.isBoolean(0), false)
    assert.strictEqual(helper.isBoolean('true'), false)
    assert.strictEqual(helper.isBoolean('false'), false)
  })

  it('is array', function () {
    assert.strictEqual(helper.isArray([1, 2, 3]), true)
    assert.strictEqual(helper.isArray([]), true)
    assert.strictEqual(helper.isArray({}), false)
    assert.strictEqual(helper.isArray(1), false)
    assert.strictEqual(helper.isArray(''), false)
  })

  it('is object', function () {
    assert.strictEqual(helper.isObject({ id: 1, name: 'abc' }), true)
    assert.strictEqual(helper.isObject({}), true)
    assert.strictEqual(helper.isObject([]), false)
    assert.strictEqual(helper.isObject(''), false)
    assert.strictEqual(helper.isObject(1), false)
  })

  it('is empty string', function () {
    assert.strictEqual(helper.isEmpty(undefined), true)
    assert.strictEqual(helper.isEmpty(null), true)
    assert.strictEqual(helper.isEmpty(''), true)
    assert.strictEqual(helper.isEmpty('abc'), false)
    assert.strictEqual(helper.isEmpty(1), false)
    assert.strictEqual(helper.isEmpty([]), false)
    assert.strictEqual(helper.isEmpty({}), false)
  })

  it('is empty array', function () {
    assert.strictEqual(helper.isEmptyArray(undefined), true)
    assert.strictEqual(helper.isEmptyArray(null), true)
    assert.strictEqual(helper.isEmptyArray([]), true)
    assert.strictEqual(helper.isEmptyArray({}), false)
    assert.strictEqual(helper.isEmptyArray({ id: 1 }), false)
    assert.strictEqual(helper.isEmptyArray('1'), false)
    assert.strictEqual(helper.isEmptyArray(1), false)
    assert.strictEqual(helper.isEmptyArray([1, 2, 3]), false)
  })

  it('is empty object', function () {
    assert.strictEqual(helper.isEmptyObject(undefined), true)
    assert.strictEqual(helper.isEmptyObject(null), true)
    assert.strictEqual(helper.isEmptyObject({}), true)
    assert.strictEqual(helper.isEmptyObject([]), false)
    assert.strictEqual(helper.isEmptyObject(1), false)
    assert.strictEqual(helper.isEmptyObject({ id: 1 }), false)
    assert.strictEqual(helper.isEmptyObject('1'), false)
    assert.strictEqual(helper.isEmptyObject([1, 2, 3]), false)
  })

  it('is empty object parameter value must hasOwnProperty', function () {
    const obj = Object.create({ name: 'inherited' })
    assert.strictEqual(true, helper.isEmptyObject(obj))
  })

  it('object circular is not empty and is object', function () {
    const o = {}
    o.o = o
    assert.strictEqual(true, (!helper.isEmpty(o) && helper.isObject(o)))
  })
})
