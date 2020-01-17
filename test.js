class BiMap extends Map {
  constructor(iterable) {
    super(iterable||[]);
    this._r = arguments[1]||new BiMap(flipEntries(iterable||[]), this);
  }

  get left() {
    return this;
  }
  get right() {
    return this._r;
  }

  clear() {
    super.clear();
    this.right.clear();
  }
  delete(key) {
    var val = super.get(key);
    if(val===undefined) return false;
    super.delete(key);
    this.right.delete(val);
    return true;
  }
  set(key, val) {
    var valOld = super.get(key);
    if(val===valOld) return this;
    if(this.right.has(val) && this.right.get(val)!==key) throw new Error('BiMap pair is not unique');
    if(valOld!==undefined) this.right.delete(valOld);
    super.set(key, val);
    this.right.set(val, key);
  }
}

function* flipEntries(entries) {
  for([k, v] of entries)
    yield [v, k];
}
module.exports = BiMap;
