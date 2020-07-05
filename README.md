# HackerNews Clone - React SSR

[![Build Status](https://circleci.com/gh/KA-32/hacker-news-clone.svg?style=svg)](https://circleci.com/gh/KA-32/hacker-news-clone)

This is a clone of HackerNews website. Made use of React and its SSR API. This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Tech

HackerNews Clone uses open source libraries to work properly:

* [ReactJS](http://reactjs.org/) - HTML enhanced for web apps!
* [node.js](https://nodejs.org/en/) - evented I/O for the backend
* [Express](https://expressjs.com/) - For serving the React App in the server
* [Webpack](https://webpack.js.org/) - for bundling server code.
* [CircleCI](https://circleci.com/docs/2.0/about-circleci/) - CI/CD and streamline the build process.
* [Heroku](https://www.heroku.com/free) - For hosting the app. 

## Available Scripts

Before running below scripts, make sure you have installed all the required dependencies by running below command.

```sh
$ cd <root-folder>
$ yarn install
```

### `yarn local`

```sh
$ yarn local
```

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

>**Note:** Use this command to run website in local machine and if SSR is not required. Helps you to quickly edit and see the changes.

### `yarn dev`

```sh
$ yarn dev
```

Run the application locally by rendering react components on the server side.
Open [http://localhost:3006](http://localhost:3006) to view changes in the browser.(SSR Code)

* Any changes to **server/index.js**, will make browser to reload.

* If you make changes to React components, then need to build `yarn build` and run `yarn dev` to see the changes.

### `yarn test`

```sh
$ yarn test
```

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

```sh
$ yarn build
```

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

>**Note:** Use this command along with `yarn dev` to see SSR changes in local machine.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
