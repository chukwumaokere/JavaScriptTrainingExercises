# How to use this project

There will be a bunch of folders that have various tests categories. In them will be an `index.js` file that has some horribly written JavaScript.  

Your job is to fix them so that they run per the specification  within the JavaScript file without modifying the areas that say `DO NOT TOUCH THESE`  

Run the files like: `node AsyncAwait/index.js` to ensure the JavaScript is valid. Then make it so that the tests pass.  

## Setup
1) Run `npm install` to install all necessary items.  
2) Run the file to see the outcome. i.e: `node AsyncAwait/index.js`  
3) Start coding and fixing.

## How to run tests
- You can either run `npm test TestName` to run a specific test once. a
- - Example: `npm test SomePassingTest`
- You can run it indefinitely so it can watch for your updates with `npm run test:watch TestName`. 
- - Example: `npm run test:watch SomePassingTest`
- You can run all tests by running `npm test`. Only use this after you've finished all the instructions otherwise you'll see too many errors.

## Solutions
If you give up, every file has a `solution/index.js` file that has the working code.

## Warning
DO NOT TOUCH ANY OF THE FILES IN `__lib__` or `__tests__`. These are designed to make this project work. If you break it, you will need to re-`clone` this project or do `git reset --hard HEAD __lib__` and `git reset --hard HEAD __tests__` and start over again.  
You should NOT need to `import` or `require` any other files or `npm install` anything other that what is currently in the project.


# Happy Coding
