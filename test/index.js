const join = require('path').join
const test = require('tape')
const Fly = require('fly')

const dir = join(__dirname, 'fixtures')
const plugins = [require('fly-clear'), require('../')]

const tmpDir = str => join(__dirname, str)
const create = tasks => new Fly({tasks, plugins})

test('fly-jest', t => {
  t.plan(2)
  const fly = create({
    *foo(f) {
      t.true('jest' in f, 'attach `jest` to Task instance')
      t.true('jest' in fly.plugins, 'attach `jest` plugin to instance')
    }
  })
  fly.start('foo')
})
