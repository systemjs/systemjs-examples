# react-hello-world

The react-hello-world example demonstrates the following:

- Loading React and ReactDOM from a CDN. This is accomplished with an import map and allows for multiple modules to share the same React instance.
- Using [Babel CLI](https://babeljs.io/docs/en/babel-cli) to compile all modules in the `src` directory into the `dist` directory using the [System.register format](https://github.com/systemjs/systemjs/blob/master/docs/system-register.md). This is done with the [`@babel/plugin-transform-modules-systemjs`](https://babeljs.io/docs/en/babel-plugin-transform-modules-systemjs) plugin.
- Loading javascript modules with `<script type="systemjs-module" src="./path-to-file.js">`.

This example shows foundational principles, but is not a comprehensive starter kit for SystemJS and React.

## Contributing

See [contributing guidelines](/README.md#Contributing) for instructions. Run `npm install` and then `npm run build` inside of the react-hello-world directory. This will modify the files in the `dist` directory. 
