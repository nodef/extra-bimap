class BiMap extends Map {
  /**
   * Creates a bi-directional map, with unique keys to unique values.
   * @param {Map?} iter predefined entries (iterable)
   * @param {nop?} inv please leave this empty
   */
  constructor(iter, inv=null) {
    super(iter||[]);
    inv = inv||new BiMap(flipEntries(iter||[]), this);
    Object.defineProperty(this, 'inverse', {get: () => inv});
  }

  /**
   * Gives reversed bi-directional map.
   */
  get inverse() {
    return null;
  }

  /**
   * Removes all elements from map.
   */
  clear() {
    super.clear();
    this.inverse.clear();
  }

  /**
   * Removes the specified element from map.
   * @param {*} key key of the element to remove
   * @returns {boolean} true if element was removed
   */
  delete(key) {
    var val = super.get(key);
    if(val===undefined) return false;
    super.delete(key);
    this.inverse.delete(val);
    return true;
  }

  /**
   * Adds or updates an element with a specified key and a value to map.
   * @param {*} key key of the element to add
   * @param {*} val value of the element to add
   * @returns {BiMap} map
   */
  set(key, val) {
    var valOld = super.get(key);
    if(val===valOld) return this;
    if(this.inverse.has(val) && this.inverse.get(val)!==key) throw new Error('BiMap pair is not unique');
    if(valOld!==undefined) this.inverse.delete(valOld);
    super.set(key, val);
    this.inverse.set(val, key);
    return this;
  }
}

function* flipEntries(entries) {
  for([k, v] of entries)
    yield [v, k];
}
module.exports = BiMap;
