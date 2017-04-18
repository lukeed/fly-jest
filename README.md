<div align="center">
  <a href="http://github.com/flyjs/fly">
    <img width=200px  src="https://cloud.githubusercontent.com/assets/8317250/8733685/0be81080-2c40-11e5-98d2-c634f076ccd7.png">
  </a>
</div>

# fly-jest

> Jest plugin for _[Fly](https://github.com/flyjs/fly)_.

[![npm package][npm-ver-link]][releases]
[![][dl-badge]][npm-pkg-link]
[![][travis-badge]][travis-link]

## Install

```sh
npm install --save-dev fly-jest
```

## Usage


```js
exports.default = function * (fly) {
  yield fly.source('src/*.js').jest().target('dist')
}
```

## API

### .jest(input, options)

> Check out the [documentation](PLUGIN_DOCUMENTATION) to see the available options.

#### input

Type: `string`<br>
Default: 'foobar'

This is a description.

#### options.foo

Type: `boolean`<br>
Default: `false`

This is a description.


## License

MIT © [Luke Edwards](https://lukeed.com)

[releases]:     https://github.com/lukeed/fly-jest/releases
[npm-pkg-link]: https://www.npmjs.org/package/fly-jest
[npm-ver-link]: https://img.shields.io/npm/v/fly-jest.svg?style=flat-square
[dl-badge]:     http://img.shields.io/npm/dm/fly-jest.svg?style=flat-square
[travis-link]:  https://travis-ci.org/lukeed/fly-jest
[travis-badge]: http://img.shields.io/travis/lukeed/fly-jest.svg?style=flat-square
