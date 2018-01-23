# (WORK IN PROGRESS) Predix Design System Sample Application - React

This project demonstrates best practices for building front-end web applications using the [Predix Design System](https://www.predix-ui.com/#/home/) web components with React as an application framework.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). It includes examples of installing, loading, styling, and using PDS web components inside of React components. It uses standard React ecosystem features, including JSX for templates, [react-router](https://github.com/ReactTraining/react-router) for client-side routing, and the stock Create React App serve and build configuration without ejecting.

## THIS IS A WORK IN PROGRESS

This project under active development and will change significantly before its first official release. The patterns and code samples here may not be what you're looking for, but feel free to take a peek and find out.

## How to run on your machine

### Install tools

If you don't have them already, you'll need node, bower and gulp to be installed globally on your machine:

1. Install [node](https://nodejs.org/en/download/). This includes npm - the node package manager.
2. Install [bower](https://bower.io/) globally: `$ npm install bower -g`
3. Install [gulp](http://gulpjs.com/) globally: `$ npm install gulp-cli -g`

### Clone the project and install dependencies

Use git to clone the project down to your machine. Open a shell and change directory into the new project you just cloned, then install dependencies:

```
$ npm install
$ bower install
```

### Running the app locally

The app uses Create React App's `react-scripts` module to serve locally for development. Run `$ npm start` to serve the app. Automatic file rebuilding and hot module reloading is enabled by default.

Additionally the Predix Design System CSS modules are built and loaded using a separately task. The modules are installed with bower and built from SCSS into CSS, and the resulting built code is checked in to the repo at `public/css/px-styles.css`. The source SCSS is at `sass/px-styles.scss`. If you make changes to the source SCSS, run `$ npm run scss` to rebuild the CSS. You should not add custom CSS classes to style your React application from inside this SCSS file — it is loaded on the page in `index.html` to provide utility classes that can be used inside any React component.

## How to run on the Predix Cloud

More instructions to come on this later.

## Support and further information

You can ask questions and get support on the [Predix Forum](https://www.predix.io/community). If you find any bugs, have issues with the code, or want to request enhancements, file a issue on the [Github repo](http://github.com/predixdesignsystem/px-sample-app-react).

## Copyright

Copyright &copy; 2015, 2016, 2017 GE Global Research. All rights reserved.

The copyright to the computer software herein is the property of
GE Global Research. The software may be used and/or copied only
with the written permission of GE Global Research or in accordance
with the terms and conditions stipulated in the agreement/contract
under which the software has been supplied.
