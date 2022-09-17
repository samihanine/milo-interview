/**
 * @method isEmpty
 * @param {String | Number | Object | null} value
 * @returns {Boolean} true & false
 * @description this value is Empty Check
 */
export const isEmpty = (value: string | number | object | null): boolean => {
  if (value === null) {
    return true;
  } else if (typeof value !== 'number' && value === '') {
    return true;
  } else if (typeof value === 'undefined' || value === undefined) {
    return true;
  } else if (value !== null && typeof value === 'object' && !Object.keys(value).length) {
    return true;
  } else {
    return false;
  }
};

/**
 * @method getStorage
 * @param {String} key
 * @returns {Any} localStorage value
 * @description return localStorage value by key
 */
export const getStorage = (key: string): any | null => {
  const storage: string | null = window.localStorage.getItem(key);
  if (isEmpty(storage) || storage === 'undefined') return null;
  const result = JSON.parse(storage || '');
  if (isEmpty(result)) return null;
  return result;
};
