# Instructions

Clone the project:

```
git clone git@github.com:adaam2/react-starter.git your-app-name
cd your-app-name
```

Install dependencies:

```
yarn install
```

Run the project:

```
npm run dev
```

View in browser:

```
http://localhost:8080
```

# Technologies

- React
- Redux pattern with `react-redux` bindings
- ES6 / Babel
- Lodash
- Redux connected `react-router`
- Airbnb EsLint configuration
- CSS modules using `css-loader`, `style-loader`, and `sass-loader`
- Uses `node-sass` for SASS compilation
- Sourcemaps using `source-map` and Webpack `source-map-loader`
- Redux action logging with `redux-logger`
- Hot module replacement / live reloading using `react-hot-loader` v3
- Postcss with `autoprefixer`


# Branches

There is also a Rails 5 version with Rack::Proxy setup so that the Rails application is namespaced to `/api`. 

Run the stack by running: `foreman start -f Procfile.dev`

You can find the code at https://github.com/adaam2/react-starter/tree/with-rails
