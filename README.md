# 🦄 [ponyfills](https://github.com/eserozvataf/ponyfills)

[![build status][build-image]][build-url]
[![npm version][npm-image]][npm-url]
[![npm download][npm-download-image]][npm-url]
[![dependencies][dep-image]][dep-url]
[![coverage status][coverage-image]][coverage-url]
[![license][license-image]][license-url]


## Update (July 2022)

DEPRECATED in favor of [hex](https://github.com/eserozvataf/hex).
See https://github.com/eserozvataf/hex for details.


## What is the Ponyfills?

Ponyfills provides a set of modules, which work natively in modern node.js runtime and modern browsers, however, it needs extra fallback code in order to run in some environments.

It simply tests the availability of native functionality first, then delivers the closest/best alternative implementation if native ones are not available.

Compared to its alternatives, ponyfills doesn't assign its modules anywhere or doesn't patch anything in the runtime environment. Instead, it just delivers the required functionality with ES6 modules or commonjs.

Plus, as a library, Ponyfills is completely tree-shaking-friendly. Your favorite module bundler can easily inline the functionality you need with no extra configuration, instead of bundling the whole Ponyfills package.


## Quick start

Execute `npm install ponyfills` or `yarn add ponyfills` to install ponyfills and its dependencies into your project directory.


## Usage of modules

### arrayFrom(source, mapFn?, thisArg?) (Array.From)

The `Array.from` method creates a new, shallow-copied Array instance from an array-like or iterable object. (Source: [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from))

For example, to ensure Array.from will be work:

```js
import arrayFrom from 'ponyfills/arrayFrom';

const test = arrayFrom(new Set(1, 2, 3));

console.log(`Result: ${test}`);
console.log(`Is Native: ${arrayFrom === Array.from}`);
```

Alternative usage I:

```js
import { arrayFrom } from 'ponyfills';

const test = arrayFrom(new Set(1, 2, 3));
```

Alternative usage II:

```js
import * as ponyfills from 'ponyfills';

const test = ponyfills.arrayFrom(new Set(1, 2, 3));
```


### objectAssign(target, ...sources) (Object.assign)

The `objectAssign` method is used to copy the values of all enumerable own properties from one or more source objects to a target object. It will return the target object. (Source: [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign))

For example, to ensure Object.assign will be work:

```js
import objectAssign from 'ponyfills/objectAssign';

const test = objectAssign({}, { test: true });

console.log(`Result: ${test}`);
console.log(`Is Native: ${objectAssign === Object.assign}`);
```


### objectEntries(source) (Object.entries)

The `Object.entries` method returns an array of a given object's own enumerable string-keyed property [key, value] pairs, in the same order as that provided by a **for...in** loop. (Source: [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries))

For example, to ensure Object.entries will be work:

```js
import objectEntries from 'ponyfills/objectEntries';

const test = objectEntries({ a: 1, b: 2, c: 3 });

console.log(`Result: ${test}`);
console.log(`Is Native: ${objectEntries === Object.entries}`);
```


### objectValues(source) (Object.values)

The `Object.values` method returns an array of a given object's own enumerable property values, in the same order as that provided by a **for...in** loop. (Source: [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values))

For example, to ensure Object.values will be work:

```js
import objectValues from 'ponyfills/objectValues';

const test = objectValues({ a: 1, b: 2, c: 3 });

console.log(`Result: ${test}`);
console.log(`Is Native: ${objectValues === Object.values}`);
```


### reflectOwnKeys(source) (Reflect.ownKeys)

The static `Reflect.ownKeys` method returns an array of the target object's own property keys. (Source: [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/ownKeys))

For example, to ensure Reflect.ownKeys will be work:

```js
import reflectOwnKeys from 'ponyfills/reflectOwnKeys';

const test = reflectOwnKeys({ a: 1, b: 2, c: 3 });

console.log(`Result: ${test}`);
console.log(`Is Native: ${reflectOwnKeys === Reflect.ownKeys}`);
```



## Todo List

See [GitHub Projects](https://github.com/eserozvataf/ponyfills/projects) for more.


## Requirements

* node.js (https://nodejs.org/)


## License

Apache 2.0, for further details, please see [LICENSE](LICENSE) file


## Contributing

See [contributors.md](contributors.md)

It is publicly open for any contribution. Bugfixes, new features and extra modules are welcome.

* To contribute to code: Fork the repo, push your changes to your fork, and submit a pull request.
* To report a bug: If something does not work, please report it using [GitHub Issues](https://github.com/eserozvataf/ponyfills/issues).


## To Support

[Visit my patreon profile at patreon.com/eserozvataf](https://www.patreon.com/eserozvataf)

[build-image]: https://img.shields.io/travis/eserozvataf/ponyfills.svg?style=flat-square
[build-url]: https://travis-ci.org/eserozvataf/ponyfills
[npm-image]: https://img.shields.io/npm/v/ponyfills.svg?style=flat-square
[npm-download-image]: https://img.shields.io/npm/dt/ponyfills.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/ponyfills
[dep-image]: https://img.shields.io/david/eserozvataf/ponyfills.svg?style=flat-square
[dep-url]: https://github.com/eserozvataf/ponyfills
[coverage-image]: https://img.shields.io/codecov/c/github/eserozvataf/ponyfills.svg?style=flat-square
[coverage-url]: https://codecov.io/gh/eserozvataf/ponyfills
[license-image]: https://img.shields.io/npm/l/ponyfills.svg?style=flat-square
[license-url]: https://github.com/eserozvataf/ponyfills/blob/master/LICENSE
