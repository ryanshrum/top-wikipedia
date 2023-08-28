# Top Wikipedia articles

In addition to React, I leveraged [`react-paginate`](https://github.com/AdeleD/react-paginate) and [`react-datepicker`](https://github.com/Hacker0x01/react-datepicker) to handle some of the heavy lifting of those pieces. Additionally, I used [Tailwind CSS](https://tailwindcss.com/docs/installation) with custom config for all the styling.

#### What would I change or have done differently?

- For the most part, things will match the Figma, but there are some places where I used the default sizes from Tailwind over adding customizations. Additionally, the "open" state is not indicated on the button to open the datepicker.
- While this isn't quite large enough to warrant Redux, I think some global state management would be beneficial; for something of this size, the native Context API would be fine.
- The dropdown component is not a true input and lacks accessibility.
- There can always be a bit more testing, though I covered some of the key unit tests.
- I would have some catches/error handling and loading indicators (even though these endpoints are super fast).
- I started on the country work, but cut the scope to get it submitted. You'll see artifacts pertaining to that around.

Thanks again for the oppurtunity and if there are any questions, please feel free to reach out.

## Initial Setup

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) using Node **16.20.2** and NPM version **9.8.1**. If there are any issues, I would recommend aligning versions and reinstalling.

#### With NVM

I recommend using [Node Version Manager](https://github.com/nvm-sh/nvm#installing-and-updating) (NVM) for quickly changing between Node versions in various applications.

```bash
nvm install 16.20.1
nvm use
```

Once on the correct version of Node, run:

```bash
npm install
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
