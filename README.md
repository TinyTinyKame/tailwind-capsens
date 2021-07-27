# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# Tailwind

Low-level CSS Utility framework, no built-in components different from bootstrap.
Responsive, Mobile-first, all classes can be set to certain device sizes.

## Pros

### Styling process much faster, Consistency

Tailwind helps you style your HTML elements much faster. Tailwind has a lot of pre-built classes for sizing and colors.

### Performance

PurgeCSS, clears unused styles on production build.
### High Customization

Tailwind gives the developer a generous default theme that will work very well for bootstrapped projects.
Tailwind's configuration file allows developers to tamper right into Tailwind. Any change will be reflected in the final stylesheet. It also allows adding custom plugins, which opens a world of possibilities for third-parties.

## Cons

### Verbose

One of Tailwind's weakness can be its readability.
If you’ve seen how Tailwind is usually being used, you provide the HTML elements with a bunch of Tailwind classes which are responsible for the styling.

### Not beginner friendly

When you rely on a framework to do all the heavy lifting for you without actually knowing what is happening in the background, you may lose control of your styling and not know how to debug any issues.

### Complex animations

For creating a complex animation, one would have to create a class name for each element. This will end up in more work than doing within CSS. Thankfully, this can also be easily solved using Plain CSS through stylesheets, an animation library like Framer Motion, or a CSS-in-JS library like Styled Components. I believe any of these is valid and encouraged with Tailwind, however, some developers would just prefer to just use plain CSS for their animation without any library.

## Sources
[https://javascript.plainenglish.io/is-tailwind-css-really-worth-using-1830a706231a](https://javascript.plainenglish.io/is-tailwind-css-really-worth-using-1830a706231a)
[https://dev.to/joserfelix/why-use-tailwind-css-for-your-next-project-39hp](https://dev.to/joserfelix/why-use-tailwind-css-for-your-next-project-39hp)
