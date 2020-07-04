# Hacker News Clone
Demo React SSR.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

[![KA-32](https://circleci.com/gh/KA-32/hacker-news-clone.svg?style=svg)](https://circleci.com/gh/circleci/circleci-docs)

## Available Scripts

In the project directory, you can run:

### `yarn local`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

**Note:** Use this command to run website in local machine and if SSR is not required.

### `yarn dev`
Run the application locally by rendering react components on the server side.
Open [http://localhost:3006](http://localhost:3006) to view it in the browser.(SSR Code)
- Any changes to server/index.js, will make browser to reload. 
- If you make changes to React components, then need to build `yarn build` and run `yarn dev` to see the changes.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
