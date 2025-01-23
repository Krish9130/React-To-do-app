# React Todo App

This is a sample react todo app done step-by-step.
This sample app was a part of react workshop.

You can check the slides [here](https://speakerdeck.com/kabirbaidhya/frontend-development-with-react).

Check the demo hosted on heroku https://simplest-react-todo-app.herokuapp.com/.


## Instructions

First clone this repository.
```bash
$ git clone https://github.com/kabirbaidhya/react-todo-app.git
```

Install dependencies. Make sure you already have [`nodejs`](https://nodejs.org/en/) & [`npm`](https://www.npmjs.com/) installed in your system.
```bash
$ npm install # or yarn
```

Run it
```bash
$ npm start # or yarn start
```

## Steps
Each step is a branch. Check out to the step you want to test.

```bash
$ git checkout <step-number>    # eg: git checkout step-1
```
* [step-0](https://github.com/kabirbaidhya/react-todo-app/commits/step-0) - Setup app using `create-react-app`.
* [step-1](https://github.com/kabirbaidhya/react-todo-app/commits/step-1) - React Hello World.
* [step-2](https://github.com/kabirbaidhya/react-todo-app/commits/step-2) - Add some JSX for the todoapp.
* [step-3](https://github.com/kabirbaidhya/react-todo-app/commits/step-3) - List todo items dynamically.
* [step-4](https://github.com/kabirbaidhya/react-todo-app/commits/step-4) - Create `TodoList` component.
* [step-5](https://github.com/kabirbaidhya/react-todo-app/commits/step-5) - Extract more components: `TodoItem`, & `Header`.
* [step-6](https://github.com/kabirbaidhya/react-todo-app/commits/step-6) - Add `Footer` component to display count.
* [step-7](https://github.com/kabirbaidhya/react-todo-app/commits/step-7) - Add `InputBox` component.
* [step-8](https://github.com/kabirbaidhya/react-todo-app/commits/step-8) - Convert to stateful components.
* [step-9](https://github.com/kabirbaidhya/react-todo-app/commits/step-9) - Add new todo item.
* [step-10](https://github.com/kabirbaidhya/react-todo-app/commits/step-10) - Add todo list filter.
* [step-11](https://github.com/kabirbaidhya/react-todo-app/commits/step-11) - Refactor code by moving logic to services.
* [step-12](https://github.com/kabirbaidhya/react-todo-app/commits/step-12) - Make check/uncheck change the todo item status to completed/pending.
* [step-13](https://github.com/kabirbaidhya/react-todo-app/commits/step-13) - Refactor code and design improvements.
* [step-14](https://github.com/kabirbaidhya/react-todo-app/commits/step-14) - Refactor and separate UI & stateful components.
* [step-15](https://github.com/kabirbaidhya/react-todo-app/commits/step-15) - Finalization of TodoApp.


index.js

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/wrappers/App';

// Add bootstrap
import 'bootstrap/dist/css/bootstrap.css';

// Add our style
import './assets/style/index.css';

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);


**index.html**
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico">
    <!--
      Notice the use of %PUBLIC_URL% in the tag above.
      It will be replaced with the URL of the `public` folder during the build.
      Only files inside the `public` folder can be referenced from the HTML.

      Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
      work correctly both with client-side routing and a non-root public URL.
      Learn how to configure a non-root public URL by running `npm run build`.
    -->
    <title>Todo App</title>
  </head>
  <body>
    <div id="root"></div>
    <!--
      This HTML file is a template.
      If you open it directly in the browser, you will see an empty page.

      You can add webfonts, meta tags, or analytics to this file.
      The build step will place the bundled scripts into the <body> tag.

      To begin the development, run `npm start`.
      To create a production bundle, use `npm run build`.
    -->
  </body>
</html>
