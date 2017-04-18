# fly-jest [![][travis-badge]][travis-link]

> [Jest](https://facebook.github.io/jest/) plugin for _[Fly](https://github.com/flyjs/fly)_.

## Install

```sh
npm install --save-dev fly-jest
```

## Usage

```js
exports.test = function * (fly) {
  yield fly.source('test/**/*.js').jest({    
    bail: true,
    notify: true
  });
}
```

## API

### .jest(options)

See [Jest's Configuration Options](https://facebook.github.io/jest/docs/configuration.html#options) to see the available options.


## License

MIT © [Luke Edwards](https://lukeed.com)

[travis-link]:  https://travis-ci.org/lukeed/fly-jest
[travis-badge]: http://img.shields.io/travis/lukeed/fly-jest.svg?style=flat-square
