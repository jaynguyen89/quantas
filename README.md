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


## Git logs

- '857f458,Jay Nguyen,3 minutes ago,Add comments'
- 'f51a5cb,Jay Nguyen,38 minutes ago,Add unit tests Add unit tests for all components and utilities'
- 'a0cd636,Jay Nguyen,5 hours ago,First test Add the first test to reconfigure Jest environment for this project- Add missing decoders to Jest- Add setup files and ignored patterns- Add data mocks for hotel list- Update package.json'
- '5b747c3,Jay Nguyen,7 hours ago,Update package.lock'
- 'dad07eb,Jay Nguyen,19 hours ago,Remove deps and update jest configs- Remove unused redux related dependencies- Add mocks to prepare for testing'
- 'a1f100f,Jay Nguyen,19 hours ago,Handle sorting Add useEffect in HotelList to display the list in the chosen order'
- 'dc49235,Jay Nguyen,20 hours ago,Fix rating bug Fix a SCSS issue that in narrow-width screen, the rating always show 5star'
- '16da821,Jay Nguyen,20 hours ago,Populate data Populated the page with simulated API data to make page dynamic:- Add util functions to simulate API data call and mapping- Add a hook `useHotelData` to provide data to the page- Handle the data to show them in the layouts: image, hotel info, pricing, and the sorting dropdown'
- 'bd6172d,Jay Nguyen,23 hours ago,Merge branch 'responsiveness' Make layout responsive Add @media queries to adjust layouts in various screen sizes'
- '73c678c,Jay Nguyen,24 hours ago,Make layout responsive'
- 'ffe20e8,Jay Nguyen,24 hours ago,Layout crafting Created a complete & static layout matching the mockup.- Add SCSS variables for colors, typography, padding, margin, screen sizes.- Add hotel list with hotel image, general title, and pricing details- Add SCSS stylings for HTML layouts'
- '287a90c,Jay Nguyen,3 days ago,Preparation for dev- Installed necessary dependencies for dev.- Configured eslint, babel, jest, and typescript.- Added assets (images, icons, json data).'
- '20af823,Jay Nguyen,3 days ago,Generated default react app from template'