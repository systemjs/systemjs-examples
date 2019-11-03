import { setPublicPath } from 'systemjs-webpack-interop'

// equivalent to __webpack_public_path__ = System.resolve('mars').slice(0, System.resolve('mars').lastIndexOf('/') + 1)
setPublicPath('mars')