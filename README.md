# Getting Started with Create React App

## Prerequisites
`node -v`
`npm -v`
Both should return the version of node or npm.

## Available Scripts

To initialize the project for the very first run:
#### On Windows environment: `npm run setup:win`
#### On Linux or Mac environment: `npm run setup:lin`

#### Otherwise, you can manually set up by:
- Delete the "node_modules" folder
- Run `npm install --legacy-peer-deps`

To run the app:
#### `npm start`
The open browser to view it: [http://localhost:3000](http://localhost:3000)

To test the app:
#### `npm run test`


## About my implementation

A lot of things have been omitted to simplify the solution. There is no Redux and Design Pattern, also no CSS or JS libraries.

In my personal project, I combine various Design Patterns in many areas to automatically handle behind-the-scene logics, form validation, API fetching, data mapping and conversions.

In this app, I break the layout into smaller components to make everything testable. It's also easier to find the snippets to change when any logic changes.

Honestly it's too simple that I don't know what else to tell, but if you want to question me anything, I'm happy to answer in an interview :)
