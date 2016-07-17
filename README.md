Test repo for https://github.com/mixmaxhq/electron-spell-check-provider/pull/4.

Test by doing `npm install && node index.js`.

Tested with all versions of `spellchecker` compatible with `
electron-spell-check-provider` by doing

```sh
npm install spellchecker@3.2.1 && node index.js
npm install spellchecker@3.2.2 && node index.js
npm install spellchecker@3.2.2 && node index.js
npm install spellchecker@3.2.3 && node index.js
# Note that 3.3.0 is broken: https://github.com/atom/node-spellchecker/pull/45
npm install spellchecker@3.3.1 && node index.js
```

and test passes on each.
