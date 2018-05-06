# slide-deck
### slide deck application - used as a presentation tool to show what it's like to develop the UI with React

# dependencies
* react - core ui library
  * react - core ui library
  * react-dom - gives react access to the dom so react can inject the application
  * react-hot-loader - allows for hot reloading during development, prod size is very small - the recommend still having this as a dependency not a dev-dependency

# dev dependencies
* babel - used to transpiler ES2015 and beyond to ES5 browser compatable JS.
  * babel-core
  * babel-loader
  * babel-preset-env
  * babel-preset-react
* eslint - static code analyzing library
  * eslint-config-airbnb - core set of lint rules
  * eslint-config-uwm - lint rules defined by a-o underwriting mod dept
  * eslint-plugin-import - lint rules for imports
  * eslint-plugin-jsx-a11y - lint rules for JSX
  * eslint-plugin-react - lint rules for react
  * eslint-watch - run eslint in watch mode
* jest - unit test library
* webpack - our module bundler/build tool/local server
  * copy-webpack-plugin - plugin to copy files to output folder
  * css-loader - plugin for laoding css files
  * file-loader - plugin for loading other file types (ie. images)
  * html-webpack-plugin - plugin for webpack to move the index.html into the dist folder during build process
  * style-loader - plugin to load css styles
  * webpack - our module bundler/build tool
  * webpack-cli - run webpack from the command line
  * webpack-dev-server - local server for serving our application
