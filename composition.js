class BiMap {
  /**
   * Creates a bi-directional map, with unique keys to unique values.
   * @param {Map} left left source map
   * @param {Map} right right mirror map
   */
  constructor(left, right) {
    this._l = left||new Map();
    this._r = right||new Map(flipEntries(this._l));
  }

  get size() {
    return this._l.size;
  }
  get left() {
    return this;
  }
  get right() {
    return new BiMap(this._r, this._l);
  }

  clear() {
    this._l.clear();
    this._r.clear();
  }
  delete(key) {
    deleteEntry(this._l, this._r, key);
  }
  deleteValue(val) {
    deleteEntry(this._r, this._l, val);
  }
  entries() {
    return this._l.entries();
  }
  forEach(callback, thisArg) {
    return this._l.forEach(callback, thisArg);
  }
  get(key) {
    return this._l.get(key);
  }
  getKey(val) {
    return this._r.get(val);
  }
  has(key) {
    return this._l.has(key);
  }
  hasVal(val) {
    return this._r.has(val);
  }
  keys() {
    return this._l.keys();
  }
  values() {
    return this._l.values();
  }
  *[Symbol.iterator]() {
    return this._l[Symbol.iterator];
  }
  set(key, val) {
  // key new, val new => new entry
  // key new, val old => error
  // key old, val new => set, delete+set
  // key old, val old => error / ok
  var valOld = this._l.get(key);
    if(this._r.has(val)) {
      if(val!==valOld) throw new Error('BiMap pair is not unique');
    }
    else {
      if(valOld!==undefined) this._r.delete(valOld);
      this._l.set(key, val);
      this._r.set(val, key);
    }
  }
}
function deleteEntry(l, r, key) {
  var val = l.get(key);
  if(l.delete(key)) r.delete(val);
}

function* flipEntries(entries) {
  for([k, v] of entries)
    yield [v, k];
}
module.exports = BiMap;
