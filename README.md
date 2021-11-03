# Ozmo Frontend Take-home Exercise

Hi there! Here is a coding exercise to help us assess your technical skills.
Please plan to spend no more than 4 hours on this. We understand we may not be
the only company asking for an exercise from you and want to be respectful of
your time. The test is designed for all levels, and you could spend much longer
perfecting your solution if you wanted to. We recommend you focus on the core
requirements first, then work on any additional features if you have the time.

By 4 hours in, please feel free to stop working and explain what refactors /
code organization / enhancements you would have made with more time in the
SOLUTION.md file.

If you have any questions at any point during the exercise, please reach out to
Shane at shane.boyer@ozmoapp.com.

## Workflow

1. [Fork](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks) this repository into your own github account
2. Clone the repository locally and create a branch on your fork
3. Make changes in the branch using your own coding tools to complete the goals listed in the Tasks section below
4. Create and submit a [pull request (PR)](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request) back to this repository that contains your changes
5. Present your PR during the interview

## Overview

This repository contains a simple Autocomplete/Typeahead component in vanilla JavaScript
(compiled with Babel 7) that lets you type in a query and shows a list of
matching results in a dropdown, just like how Google's search box works.

To see this component in action, let's set up the repo:

1. Install npm and node for your local development environment. The current package.json is tested on npm version 8.x and Node version 16.x and up.
2. Run `npm install`
3. Run `npm start` (runs `webpack-dev-server`)
4. Open `http://localhost:8080` on your browser.

Type "new" in the input, and you'll get a list of matching US states that start
with "new".


## Task

Currently, the component can only query against a static data array and only
works with mouse clicks. Your task is to:

1. Enhance the component so that it also accepts an HTTP endpoint as data source.

    For example, if you wire up the component to
    `https://api.github.com/search/users?q={query}&per_page=${numOfResults}`,
    and if you type `foo` in the input, the component dropdown should show
    Github users with logins that start with `foo`. When you select a user from
    the results, `item` in the `onSelect(item)` callback should be the selected
    Github user's id.

    (The enhanced component only needs to work with either a data array or a
    HTTP source, not both.)

2. Implement keyboard shortcuts to navigate the results dropdown using up/down
   arrow keys and to select a result using the Enter key.

Uncomment the relevant sections in `index.js` and `index.html` to implement a
demo that looks like this:

![Demo example screenshot](demo-example.png)


## Requirements

- The component should be reusable. It should be possible to have multiple
  instances of the component on the same page.
- The component should accept any HTTP endpoint, not just the
  `https://api.github.com/users` example above.
- Your component should work correctly in Chrome, don’t worry about
  cross-browser compatibility.
- You can use small DOM helpers like jQuery or utilities from Lodash, but not
  larger libraries/frameworks like React, Angular or Vue.js
- You _can_ modify all parts of the existing code, but you don't _need_ to do
  that to provide a great solution.
- Document your component in `SOLUTION.md`.
