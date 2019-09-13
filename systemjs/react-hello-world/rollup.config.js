import babel from 'rollup-plugin-babel'

export default {
  input: 'react-hello-world.js',
  output: {
    format: 'system',
    file: 'react-hello-world.bundle.js'
  },
  plugins: [
    babel({
      exclude: 'node_modules/**'
    })
  ]
}