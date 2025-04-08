A [bi-directional map], with unique keys to unique values. Internally,
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

### reference

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

[![nodef](https://merferry.glitch.me/card/extra-bimap.svg)](https://nodef.github.io)
![](https://ga-beacon.deno.dev/G-RC63DPBH3P:SH3Eq-NoQ9mwgYeHWxu7cw/github.com/nodef/extra-bimap)

[BiMap]: https://github.com/nodef/extra-bimap/wiki
[inverse]: https://github.com/nodef/extra-bimap/wiki/inverse
[clear]: https://github.com/nodef/extra-bimap/wiki/clear
[delete]: https://github.com/nodef/extra-bimap/wiki/delete
[set]: https://github.com/nodef/extra-bimap/wiki/set
[bi-directional map]: https://en.wikipedia.org/wiki/Bidirectional_map
