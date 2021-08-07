'use strict'

/**
 * Helper class
 */
class Helper {
  /**
   * Determine value is string
   * @param {*} value
   * @return {bool}
   */
  isString (value) {
    return typeof value === 'string' || value instanceof String
  }

  /**
   * Determine value is integer
   * @param {*} value
   * @return {bool}
   */
  isInteger (value) {
    return Number.isInteger(value)
  }

  /**
   * Determine value is boolean
   * @param {*} value
   * @return {bool}
   */
  isBoolean (value) {
    return typeof value === 'boolean' || (typeof value === 'object' && value !== null && typeof value.valueOf() === 'boolean')
  }

  /**
   * Determine value is array
   * @param {*} value
   * @return {bool}
   */
  isArray (value) {
    if (value === undefined || value === '') {
      return false
    }
    return value && value !== '' && typeof value === 'object' && value.constructor === Array
  }

  /**
   * Determine value is object
   * @param {*} value
   * @return {bool}
   */
  isObject (value) {
    if (value === undefined || value === '') {
      return false
    }
    return value && typeof value === 'object' && value.constructor === Object
  }

  /**
   * Determine value is empty
   * @param {*} value
   * @return {bool}
   */
  isEmpty (value) {
    return (value === undefined || value === null || value === '')
  }

  /**
   * Determine value is empty and array
   * @param {*} value
   * @return {bool}
   */
  isEmptyArray (value) {
    return (value === undefined || value === null || value.length === 0)
  }

  /**
   * Determine object value is empty
   * @param {*} value
   * @return {bool}
   */
  isEmptyObject (value) {
    return (value === undefined || value === null || (Object.keys(value).length === 0 && value.constructor === Object))
  }
}

module.exports = Helper
