A bi-directional map, with unique keys to unique values. Internally,
its a map and its inverse map which allows value to be looked up through
key, **and key through value**.<br>
Eg. `email id <-> person name`.

```javascript
const BiMap = require('extra-bimap');
// : all Map() functions available

var m = new BiMap();
// BiMap [Map] {}

m.set(1, 'a');
// BiMap [Map] { 1 => 'a' }

m.set(2, 'b');
// BiMap [Map] { 1 => 'a', 2 => 'b' }

m.set(2, 'a');
// Error: BiMap pair is not unique

m.inverse;
// BiMap [Map] { 'a' => 1, 'b' => 2 }

m.inverse.set('a', 2);
// Error: BiMap pair is not unique

m.inverse.set('b', 3);
// BiMap [Map] { 'a' => 1, 'b' => 3 }

m.inverse.inverse
// BiMap [Map] { 1 => 'a', 3 => 'b' }

m.delete(1);
// BiMap [Map] { 3 => 'b' }

m.inverse.has('a')
// false
```
<br>
<br>

Methods:

| Name                | Action
|---------------------|-------
| [BiMap]             | Creates a bi-directional map, with unique keys to unique values.
| [inverse]           | Gives reversed bi-directional map.
| [clear]             | Removes all elements from map.
| [delete]            | Removes the specified element from map.
| [set]               | Adds or updates an element with a specified key and a value to map.
| *size*              | Same as Map.
| *entries*           | Same as Map.
| *forEach*           | Same as Map.
| *get*               | Same as Map.
| *has*               | Same as Map.
| *keys*              | Same as Map.
| *values*            | Same as Map.
| *@@iterator*        | Same as Map.

<br>
<br>

## references

- [BiMap by Guillaume Plique](https://yomguithereal.github.io/mnemonist/bi-map)
- [bimap by James Daab](https://www.npmjs.com/package/bimap)
- [Bidirectional Map by Joni Salonen, mawia
](https://stackoverflow.com/a/9783084/1413259)
- [Bi-directional Map in Java? by Willie Scholtz, Danijel](https://stackoverflow.com/a/10699528/1413259)
- [Chapter 13. Boost.Bimap by Boris Schäling](https://theboostcpplibraries.com/boost.bimap)
- [Chapter 1. Boost.Bimap by Matias Capeletto](https://www.boost.org/doc/libs/1_68_0/libs/bimap/doc/html/index.html)
- [Guava's Bidirectional Maps by Dustin Marx](https://dzone.com/articles/guavas-bidirectional-maps)
- [Interface BiMap<K,V>](https://guava.dev/releases/19.0/api/docs/com/google/common/collect/BiMap.html)
- [Bidirectional map](https://en.wikipedia.org/wiki/Bidirectional_map)
- [Map by MDN contributors](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)

<br>
<br>

[![nodef](https://merferry.glitch.me/card/extra-bimap.svg)](https://nodef.github.io)

[BiMap]: https://github.com/nodef/extra-bimap/wiki/BiMap
[inverse]: https://github.com/nodef/extra-bimap/wiki/inverse
[clear]: https://github.com/nodef/extra-bimap/wiki/clear
[delete]: https://github.com/nodef/extra-bimap/wiki/delete
[set]: https://github.com/nodef/extra-bimap/wiki/set
